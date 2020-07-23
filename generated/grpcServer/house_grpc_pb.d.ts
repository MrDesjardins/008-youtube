// package: houseservice
// file: grpcServer/house.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grpcServer_house_pb from "../grpcServer/house_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IHouseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHousesBySize: IHouseServiceService_IGetHousesBySize;
    getHouse: IHouseServiceService_IGetHouse;
    getHouses: IHouseServiceService_IGetHouses;
}

interface IHouseServiceService_IGetHousesBySize extends grpc.MethodDefinition<grpcServer_house_pb.HousesBySizeRequest, grpcServer_house_pb.HousesBySizeResponse> {
    path: string; // "/houseservice.HouseService/GetHousesBySize"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcServer_house_pb.HousesBySizeRequest>;
    requestDeserialize: grpc.deserialize<grpcServer_house_pb.HousesBySizeRequest>;
    responseSerialize: grpc.serialize<grpcServer_house_pb.HousesBySizeResponse>;
    responseDeserialize: grpc.deserialize<grpcServer_house_pb.HousesBySizeResponse>;
}
interface IHouseServiceService_IGetHouse extends grpc.MethodDefinition<grpcServer_house_pb.HouseRequest, grpcServer_house_pb.HouseResponse> {
    path: string; // "/houseservice.HouseService/GetHouse"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcServer_house_pb.HouseRequest>;
    requestDeserialize: grpc.deserialize<grpcServer_house_pb.HouseRequest>;
    responseSerialize: grpc.serialize<grpcServer_house_pb.HouseResponse>;
    responseDeserialize: grpc.deserialize<grpcServer_house_pb.HouseResponse>;
}
interface IHouseServiceService_IGetHouses extends grpc.MethodDefinition<grpcServer_house_pb.HousesRequest, grpcServer_house_pb.HousesResponse> {
    path: string; // "/houseservice.HouseService/GetHouses"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcServer_house_pb.HousesRequest>;
    requestDeserialize: grpc.deserialize<grpcServer_house_pb.HousesRequest>;
    responseSerialize: grpc.serialize<grpcServer_house_pb.HousesResponse>;
    responseDeserialize: grpc.deserialize<grpcServer_house_pb.HousesResponse>;
}

export const HouseServiceService: IHouseServiceService;

export interface IHouseServiceServer {
    getHousesBySize: grpc.handleUnaryCall<grpcServer_house_pb.HousesBySizeRequest, grpcServer_house_pb.HousesBySizeResponse>;
    getHouse: grpc.handleUnaryCall<grpcServer_house_pb.HouseRequest, grpcServer_house_pb.HouseResponse>;
    getHouses: grpc.handleUnaryCall<grpcServer_house_pb.HousesRequest, grpcServer_house_pb.HousesResponse>;
}

export interface IHouseServiceClient {
    getHousesBySize(request: grpcServer_house_pb.HousesBySizeRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    getHousesBySize(request: grpcServer_house_pb.HousesBySizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    getHousesBySize(request: grpcServer_house_pb.HousesBySizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    getHouse(request: grpcServer_house_pb.HouseRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    getHouse(request: grpcServer_house_pb.HouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    getHouse(request: grpcServer_house_pb.HouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    getHouses(request: grpcServer_house_pb.HousesRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    getHouses(request: grpcServer_house_pb.HousesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    getHouses(request: grpcServer_house_pb.HousesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
}

export class HouseServiceClient extends grpc.Client implements IHouseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getHousesBySize(request: grpcServer_house_pb.HousesBySizeRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    public getHousesBySize(request: grpcServer_house_pb.HousesBySizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    public getHousesBySize(request: grpcServer_house_pb.HousesBySizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesBySizeResponse) => void): grpc.ClientUnaryCall;
    public getHouse(request: grpcServer_house_pb.HouseRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    public getHouse(request: grpcServer_house_pb.HouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    public getHouse(request: grpcServer_house_pb.HouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HouseResponse) => void): grpc.ClientUnaryCall;
    public getHouses(request: grpcServer_house_pb.HousesRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    public getHouses(request: grpcServer_house_pb.HousesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
    public getHouses(request: grpcServer_house_pb.HousesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_house_pb.HousesResponse) => void): grpc.ClientUnaryCall;
}
