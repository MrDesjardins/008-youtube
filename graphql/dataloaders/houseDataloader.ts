import DataLoader from "dataloader";
import { Person } from "../../generated/grpcServer/person_pb";
import { GraphQLCustomDataSources } from "../datesources/graphqlCustomDataSources";
import { House } from "../../generated/grpcServer/house_pb";
export class HouseDataLoader {
  public getHouse: DataLoader<number, House | undefined>;
  public getHouses: DataLoader<number[], (House | undefined)[]>;

  public constructor(private dataSources: GraphQLCustomDataSources) {
    this.getHouse = new DataLoader<number, House | undefined>(
      async (id: readonly number[]) => {
        if (id.length === 1) {
          const result = await this.dataSources.houseService.getHouse(id[0]);
          return [result.getHouse()];
        } else {
          const result = await this.dataSources.houseService.getListHouses(
            id as number[]
          );
          const unOrderedResult = result.getHousesList();
          const orderedResult = orderArrayPayloadWithInput(
            id,
            unOrderedResult,
            (p: House, id: number): boolean => {
              return p.getId()?.getValue() === id;
            }
          );
          return orderedResult;
        }
      },
      {
        batch: true,
        cacheKeyFn: (k: number) => {
          return k;
        },
      }
    );

    this.getHouses = new DataLoader<number[], (House | undefined)[], string>(
      async (id: readonly number[][]) => {
        const result = await this.dataSources.houseService.getListHouses(id[0]);
        const unOrderedResult = result.getHousesList();
        const orderedResult = orderArrayPayloadWithInput(
          id[0],
          unOrderedResult,
          (p: House, id: number): boolean => {
            return p.getId()?.getValue() === id;
          }
        );
        orderedResult.forEach((o) => {
          const id = o?.getId()?.getValue();
          if (id !== undefined) {
            this.getHouse.prime(id, o);
          }
        });
        return [orderedResult];
      },
      {
        batch: false,
        cacheKeyFn: (k: number[]) => {
          return k.join("-");
        },
      }
    );
  }
}

export function orderArrayPayloadWithInput<T, P>(
  inputs: readonly T[],
  responses: P[],
  predicate: (item: P, input: T) => boolean
): (P | undefined)[] {
  const orderedArray: (P | undefined)[] = [];
  inputs.forEach((input: T) => {
    const payload = responses.find((response) => predicate(response, input));
    orderedArray.push(payload); // Good if undefined as well, means we do not have a response
  });
  console.assert(
    inputs.length === orderedArray.length,
    "Returned array must be the same size of the input array",
    {
      inputLength: inputs.length,
      outputLength: orderedArray.length,
    }
  );
  return orderedArray;
}
