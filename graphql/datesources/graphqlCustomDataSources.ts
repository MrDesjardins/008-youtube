import { PersonClient } from "../../grpcClient/personClient";
import { HouseClient } from "../../grpcClient/houseClient";

export interface GraphQLCustomDataSources {
  houseService: HouseClient;
  personService: PersonClient;
}
