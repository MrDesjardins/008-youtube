// package: personproto
// file: grpcServer/person.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class PersonRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PersonRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PersonRequest): PersonRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonRequest;
    static deserializeBinaryFromReader(message: PersonRequest, reader: jspb.BinaryReader): PersonRequest;
}

export namespace PersonRequest {
    export type AsObject = {
        id: number,
    }
}

export class PersonResponse extends jspb.Message { 

    hasPerson(): boolean;
    clearPerson(): void;
    getPerson(): Person | undefined;
    setPerson(value?: Person): PersonResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PersonResponse): PersonResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonResponse;
    static deserializeBinaryFromReader(message: PersonResponse, reader: jspb.BinaryReader): PersonResponse;
}

export namespace PersonResponse {
    export type AsObject = {
        person?: Person.AsObject,
    }
}

export class PersonsRequest extends jspb.Message { 
    clearIdList(): void;
    getIdList(): Array<number>;
    setIdList(value: Array<number>): PersonsRequest;
    addId(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PersonsRequest): PersonsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonsRequest;
    static deserializeBinaryFromReader(message: PersonsRequest, reader: jspb.BinaryReader): PersonsRequest;
}

export namespace PersonsRequest {
    export type AsObject = {
        idList: Array<number>,
    }
}

export class PersonsResponse extends jspb.Message { 
    clearPeopleList(): void;
    getPeopleList(): Array<Person>;
    setPeopleList(value: Array<Person>): PersonsResponse;
    addPeople(value?: Person, index?: number): Person;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PersonsResponse): PersonsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonsResponse;
    static deserializeBinaryFromReader(message: PersonsResponse, reader: jspb.BinaryReader): PersonsResponse;
}

export namespace PersonsResponse {
    export type AsObject = {
        peopleList: Array<Person.AsObject>,
    }
}

export class Person extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setId(value?: google_protobuf_wrappers_pb.Int32Value): Person;


    hasFirstname(): boolean;
    clearFirstname(): void;
    getFirstname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFirstname(value?: google_protobuf_wrappers_pb.StringValue): Person;


    hasLastname(): boolean;
    clearLastname(): void;
    getLastname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLastname(value?: google_protobuf_wrappers_pb.StringValue): Person;

    clearHouseidList(): void;
    getHouseidList(): Array<google_protobuf_wrappers_pb.Int32Value>;
    setHouseidList(value: Array<google_protobuf_wrappers_pb.Int32Value>): Person;
    addHouseid(value?: google_protobuf_wrappers_pb.Int32Value, index?: number): google_protobuf_wrappers_pb.Int32Value;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        firstname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lastname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        houseidList: Array<google_protobuf_wrappers_pb.Int32Value.AsObject>,
    }
}
