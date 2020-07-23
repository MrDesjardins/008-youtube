import { PersonDataLoader } from "./personDataloader";
import { HouseDataLoader } from "./houseDataloader";
import { GraphQLCustomDataSources } from "../datesources/graphqlCustomDataSources";

export class DataLoaders {
  private person: PersonDataLoader;
  private house: HouseDataLoader;

  public constructor(dataSource: GraphQLCustomDataSources) {
    this.person = new PersonDataLoader(dataSource);
    this.house = new HouseDataLoader(dataSource);
  }
  get Person() {
    return this.person;
  }
  get House() {
    return this.house;
  }
}
