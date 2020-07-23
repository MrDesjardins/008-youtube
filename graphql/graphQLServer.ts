import express, { Request, Response, RequestHandler } from "express";
import {
  ApolloServerExpressConfig,
  makeExecutableSchema,
  ApolloServer,
} from "apollo-server-express";
import { CustomContext } from "./context/customContext";

import path from "path";
import { mergeTypes, fileLoader } from "merge-graphql-schemas";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import { GraphQLCustomDataSources } from "./datesources/graphqlCustomDataSources";
import { HouseClient } from "../grpcClient/houseClient";
import { PersonClient } from "../grpcClient/personClient";
import { DataLoaders } from "./dataloaders/dataloaders";
const PORT = 5600;
const app = express();

const resolverPath = path.join(__dirname, "./resolvers");
const allResolvers = loadFilesSync(resolverPath);
const mergedResolvers = mergeResolvers(allResolvers);

const schemasPath = fileLoader(path.join(__dirname, "./schemas/*.graphql"));
const schemas = mergeTypes(schemasPath);

const services: GraphQLCustomDataSources = {
  houseService: new HouseClient(),
  personService: new PersonClient(),
};
const config: ApolloServerExpressConfig = {
  schema: makeExecutableSchema({
    typeDefs: schemas,
    resolvers: mergedResolvers,
  }),
  dataSources: () => {
    return services as any;
  },
  context: (context: CustomContext) => {
    context.loaders = new DataLoaders(services);
    return context;
  },
  playground: true,
  introspection: true,
  tracing: true,
};

const server = new ApolloServer(config);
server.applyMiddleware({ app, path: "/graphql", cors: true });

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server is up");
});

app.listen(PORT, () => {
  console.log("Listening...");
});
