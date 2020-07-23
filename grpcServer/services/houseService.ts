import { mapper } from "../mapper";
import grpc from "grpc";
import { allHouse } from "../../database/fake";
import { IHouseServiceServer } from "../../generated/grpcServer/house_grpc_pb";
import {
  HousesBySizeRequest,
  HousesBySizeResponse,
  HouseRequest,
  HouseResponse,
  House,
  HousesRequest,
  HousesResponse,
} from "../../generated/grpcServer/house_pb";
export class HouseService implements IHouseServiceServer {
  public getHousesBySize(
    call: grpc.ServerUnaryCall<HousesBySizeRequest>,
    callback: grpc.sendUnaryData<HousesBySizeResponse>
  ): void {
    const request = call.request;
    const min = request.getMinsquarefeet();
    const ids = (allHouse
      .filter((d) => d.squarefeet?.value ?? 0 >= min)
      .map((f) => f.id)
      .filter((d) => d !== undefined) as unknown) as number[];
    const response = new HousesBySizeResponse();
    response.setIdsList(ids);
    callback(null, response);
  }

  public getHouse(
    call: grpc.ServerUnaryCall<HouseRequest>,
    callback: grpc.sendUnaryData<HouseResponse>
  ): void {
    const request = call.request;
    const house = allHouse
      .filter((d) => d.id?.value === request.getId())
      .shift();
    const response = new HouseResponse();
    let houseGrpc: House = new House();
    if (house !== undefined) {
      houseGrpc = mapper.house(house);
    }
    response.setHouse(houseGrpc);
    console.log("getHouse");
    callback(null, response);
  }

  public getHouses(
    call: grpc.ServerUnaryCall<HousesRequest>,
    callback: grpc.sendUnaryData<HousesResponse>
  ): void {
    const request = call.request;
    const houses = request.getIdList();
    const response = new HousesResponse();
    const housesObj = houses
      .map((d) => allHouse.find((ff) => ff.id?.value === d))
      .filter((d) => d !== undefined) as House.AsObject[];
    response.setHousesList(mapper.houses(housesObj));
    console.log("getHouses");
    callback(null, response);
  }
}
