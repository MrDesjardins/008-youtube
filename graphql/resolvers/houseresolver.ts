import { GraphQLResolveInfo } from "graphql";
import {
  House as HouseGraphQL,
  HouseResolvers,
  Person as PersonGraphql,
  Query,
  QueryHousesArgs,
  QueryResolvers,
} from "../../generated/graphql/types";
import { CustomContext } from "../context/customContext";
import { grpcGraphqlMapper } from "../mappers/mapper";
export const houseresolver: {
  House: HouseResolvers;
  Query: QueryResolvers;
} = {
  Query: {
    houses: async (
      source: Partial<Query>,
      args: QueryHousesArgs,
      context: CustomContext,
      info: GraphQLResolveInfo
    ): Promise<HouseGraphQL[]> => {
      const allHouses = await context.loaders.House.getHouses.load(args.ids);
      return grpcGraphqlMapper.houseFromResponse(allHouses);
    },
  },
  House: {
    Owner: async (
      source: Partial<HouseGraphQL>,
      args: {},
      context: CustomContext,
      info: GraphQLResolveInfo
    ): Promise<PersonGraphql> => {
      const person = await context.loaders.Person.getPerson.load(
        source.Owner?.id ?? -1
      );
      const personGrpc = person;
      if (personGrpc !== undefined) {
        return grpcGraphqlMapper.peopleFromResponse([personGrpc])[0];
      } else {
        return grpcGraphqlMapper.person(undefined);
      }
    },
  },
};

export default houseresolver;
