import { GraphQLResolveInfo } from "graphql";
import {
  House as HouseGraphql,
  Person as PersonGraphql,
  PersonResolvers,
  Query,
  QueryPeopleArgs,
  QueryResolvers,
} from "../../generated/graphql/types";
import { Person as PersonGrpc } from "../../generated/grpcServer/person_pb";
import { CustomContext } from "../context/customContext";
import { grpcGraphqlMapper } from "../mappers/mapper";
export const personresolver: {
  Person: PersonResolvers;
  Query: QueryResolvers;
} = {
  Query: {
    people: async (
      source: Partial<Query>,
      args: QueryPeopleArgs,
      context: CustomContext,
      info: GraphQLResolveInfo
    ): Promise<PersonGraphql[]> => {
      const allPeople = await context.loaders.Person.getPeople.load(args.ids);
      const allPeopleObj: (PersonGrpc | undefined)[] = allPeople;
      return grpcGraphqlMapper.peopleFromResponse(allPeopleObj);
    },
  },
  Person: {
    fullname: async (
      source: Partial<PersonGraphql>,
      args: {},
      context: CustomContext,
      info: GraphQLResolveInfo
    ): Promise<string> => {
      return source.firstname + " " + source.lastname;
    },
    houses: async (
      source: Partial<PersonGraphql>,
      args: {},
      context: CustomContext,
      info: GraphQLResolveInfo
    ): Promise<HouseGraphql[]> => {
      if (source.id !== undefined) {
        const personFrpmGrpc = await context.loaders.Person.getPerson.load(
          source.id
        );
        const housesOfPersonIds =
          personFrpmGrpc?.getHouseidList().map((d) => d.getValue()) ?? [];
        const housesForPerson = await context.loaders.House.getHouses.load(
          housesOfPersonIds
        );
        const housesForPersonMapped = grpcGraphqlMapper.houseFromResponse(
          housesForPerson
        );
        return housesForPersonMapped;
      }
      return [];
    },
  },
};
export default personresolver;
