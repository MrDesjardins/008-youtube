import DataLoader from "dataloader";
import { Person } from "../../generated/grpcServer/person_pb";
import { GraphQLCustomDataSources } from "../datesources/graphqlCustomDataSources";
export class PersonDataLoader {
  public getPerson: DataLoader<number, Person | undefined>;
  public getPeople: DataLoader<number[], (Person | undefined)[]>;

  public constructor(private dataSources: GraphQLCustomDataSources) {
    this.getPerson = new DataLoader<number, Person | undefined>(
      async (id: readonly number[]) => {
        if (id.length === 1) {
          const result = await this.dataSources.personService.getPerson(id[0]);
          return [result.getPerson()];
        } else {
          const result = await this.dataSources.personService.getListPerson(
            id as number[]
          );
          const unOrderedResult = result.getPeopleList();
          const orderedResult = orderArrayPayloadWithInput(
            id,
            unOrderedResult,
            (p: Person, id: number): boolean => {
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

    this.getPeople = new DataLoader<number[], (Person | undefined)[]>(
      async (id: readonly number[][]) => {
        const result = await this.dataSources.personService.getListPerson(
          id[0]
        );
        const unOrderedResult = result.getPeopleList();
        const orderedResult = orderArrayPayloadWithInput(
          id[0],
          unOrderedResult,
          (p: Person, id: number): boolean => {
            return p.getId()?.getValue() === id;
          }
        );
        orderedResult.forEach((o) => {
          const id = o?.getId()?.getValue();
          if (id !== undefined) {
            this.getPerson.prime(id, o);
          }
        });
        return [orderedResult];
      },
      { batch: false }
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
