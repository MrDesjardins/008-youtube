// package: personproto
// file: grpcServer/person.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grpcServer_person_pb from "../grpcServer/person_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IPersonServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPerson: IPersonServiceService_IGetPerson;
    getPersons: IPersonServiceService_IGetPersons;
}

interface IPersonServiceService_IGetPerson extends grpc.MethodDefinition<grpcServer_person_pb.PersonRequest, grpcServer_person_pb.PersonResponse> {
    path: string; // "/personproto.PersonService/GetPerson"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcServer_person_pb.PersonRequest>;
    requestDeserialize: grpc.deserialize<grpcServer_person_pb.PersonRequest>;
    responseSerialize: grpc.serialize<grpcServer_person_pb.PersonResponse>;
    responseDeserialize: grpc.deserialize<grpcServer_person_pb.PersonResponse>;
}
interface IPersonServiceService_IGetPersons extends grpc.MethodDefinition<grpcServer_person_pb.PersonsRequest, grpcServer_person_pb.PersonsResponse> {
    path: string; // "/personproto.PersonService/GetPersons"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpcServer_person_pb.PersonsRequest>;
    requestDeserialize: grpc.deserialize<grpcServer_person_pb.PersonsRequest>;
    responseSerialize: grpc.serialize<grpcServer_person_pb.PersonsResponse>;
    responseDeserialize: grpc.deserialize<grpcServer_person_pb.PersonsResponse>;
}

export const PersonServiceService: IPersonServiceService;

export interface IPersonServiceServer {
    getPerson: grpc.handleUnaryCall<grpcServer_person_pb.PersonRequest, grpcServer_person_pb.PersonResponse>;
    getPersons: grpc.handleUnaryCall<grpcServer_person_pb.PersonsRequest, grpcServer_person_pb.PersonsResponse>;
}

export interface IPersonServiceClient {
    getPerson(request: grpcServer_person_pb.PersonRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonResponse) => void): grpc.ClientUnaryCall;
    getPerson(request: grpcServer_person_pb.PersonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonResponse) => void): grpc.ClientUnaryCall;
    getPerson(request: grpcServer_person_pb.PersonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonResponse) => void): grpc.ClientUnaryCall;
    getPersons(request: grpcServer_person_pb.PersonsRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonsResponse) => void): grpc.ClientUnaryCall;
    getPersons(request: grpcServer_person_pb.PersonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonsResponse) => void): grpc.ClientUnaryCall;
    getPersons(request: grpcServer_person_pb.PersonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonsResponse) => void): grpc.ClientUnaryCall;
}

export class PersonServiceClient extends grpc.Client implements IPersonServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPerson(request: grpcServer_person_pb.PersonRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonResponse) => void): grpc.ClientUnaryCall;
    public getPerson(request: grpcServer_person_pb.PersonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonResponse) => void): grpc.ClientUnaryCall;
    public getPerson(request: grpcServer_person_pb.PersonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonResponse) => void): grpc.ClientUnaryCall;
    public getPersons(request: grpcServer_person_pb.PersonsRequest, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonsResponse) => void): grpc.ClientUnaryCall;
    public getPersons(request: grpcServer_person_pb.PersonsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonsResponse) => void): grpc.ClientUnaryCall;
    public getPersons(request: grpcServer_person_pb.PersonsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpcServer_person_pb.PersonsResponse) => void): grpc.ClientUnaryCall;
}
