import grpc from "grpc";
import { HouseServiceClient } from "../generated/grpcServer/house_grpc_pb";
import {
  HousesResponse,
  HouseRequest,
  HousesRequest,
  HouseResponse,
} from "../generated/grpcServer/house_pb";

export class HouseClient {
  private houseClient: HouseServiceClient;

  public constructor() {
    this.houseClient = new HouseServiceClient(
      "0.0.0.0:50051",
      grpc.credentials.createInsecure()
    );
  }

  public getListHouses(ids: number[]): Promise<HousesResponse> {
    return new Promise<HousesResponse>((resolve, reject) => {
      const request = new HousesRequest();
      request.setIdList(ids);
      this.houseClient.getHouses(
        request,
        (err: grpc.ServiceError | null, data: HousesResponse) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  public getHouse(id: number): Promise<HouseResponse> {
    return new Promise<HouseResponse>((resolve, reject) => {
      const request = new HouseRequest();
      request.setId(id);
      this.houseClient.getHouse(
        request,
        (err: grpc.ServiceError | null, data: HouseResponse) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}
