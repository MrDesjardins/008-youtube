import grpc from "grpc";

import { HouseService } from "./services/houseService";
import { PersonService } from "./services/personService";
import {
  IHouseServiceServer,
  HouseServiceService,
} from "../generated/grpcServer/house_grpc_pb";
import {
  IPersonServiceServer,
  PersonServiceService,
} from "../generated/grpcServer/person_grpc_pb";

const server = new grpc.Server();
server.addService<IHouseServiceServer>(HouseServiceService, new HouseService());
server.addService<IPersonServiceServer>(
  PersonServiceService,
  new PersonService()
);
server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
server.start();
