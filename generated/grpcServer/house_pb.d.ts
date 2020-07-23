// package: houseservice
// file: grpcServer/house.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class HousesBySizeRequest extends jspb.Message { 
    getMinsquarefeet(): number;
    setMinsquarefeet(value: number): HousesBySizeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HousesBySizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HousesBySizeRequest): HousesBySizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HousesBySizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HousesBySizeRequest;
    static deserializeBinaryFromReader(message: HousesBySizeRequest, reader: jspb.BinaryReader): HousesBySizeRequest;
}

export namespace HousesBySizeRequest {
    export type AsObject = {
        minsquarefeet: number,
    }
}

export class HousesBySizeResponse extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): HousesBySizeResponse;
    addIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HousesBySizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HousesBySizeResponse): HousesBySizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HousesBySizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HousesBySizeResponse;
    static deserializeBinaryFromReader(message: HousesBySizeResponse, reader: jspb.BinaryReader): HousesBySizeResponse;
}

export namespace HousesBySizeResponse {
    export type AsObject = {
        idsList: Array<number>,
    }
}

export class HouseRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): HouseRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HouseRequest): HouseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseRequest;
    static deserializeBinaryFromReader(message: HouseRequest, reader: jspb.BinaryReader): HouseRequest;
}

export namespace HouseRequest {
    export type AsObject = {
        id: number,
    }
}

export class HouseResponse extends jspb.Message { 

    hasHouse(): boolean;
    clearHouse(): void;
    getHouse(): House | undefined;
    setHouse(value?: House): HouseResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HouseResponse): HouseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseResponse;
    static deserializeBinaryFromReader(message: HouseResponse, reader: jspb.BinaryReader): HouseResponse;
}

export namespace HouseResponse {
    export type AsObject = {
        house?: House.AsObject,
    }
}

export class HousesRequest extends jspb.Message { 
    clearIdList(): void;
    getIdList(): Array<number>;
    setIdList(value: Array<number>): HousesRequest;
    addId(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HousesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HousesRequest): HousesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HousesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HousesRequest;
    static deserializeBinaryFromReader(message: HousesRequest, reader: jspb.BinaryReader): HousesRequest;
}

export namespace HousesRequest {
    export type AsObject = {
        idList: Array<number>,
    }
}

export class HousesResponse extends jspb.Message { 
    clearHousesList(): void;
    getHousesList(): Array<House>;
    setHousesList(value: Array<House>): HousesResponse;
    addHouses(value?: House, index?: number): House;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HousesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HousesResponse): HousesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HousesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HousesResponse;
    static deserializeBinaryFromReader(message: HousesResponse, reader: jspb.BinaryReader): HousesResponse;
}

export namespace HousesResponse {
    export type AsObject = {
        housesList: Array<House.AsObject>,
    }
}

export class House extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setId(value?: google_protobuf_wrappers_pb.Int32Value): House;


    hasSquarefeet(): boolean;
    clearSquarefeet(): void;
    getSquarefeet(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setSquarefeet(value?: google_protobuf_wrappers_pb.Int32Value): House;


    hasNumberofbedrooms(): boolean;
    clearNumberofbedrooms(): void;
    getNumberofbedrooms(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNumberofbedrooms(value?: google_protobuf_wrappers_pb.Int32Value): House;


    hasOnsale(): boolean;
    clearOnsale(): void;
    getOnsale(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOnsale(value?: google_protobuf_wrappers_pb.BoolValue): House;


    hasIsrental(): boolean;
    clearIsrental(): void;
    getIsrental(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsrental(value?: google_protobuf_wrappers_pb.BoolValue): House;


    hasOwnerid(): boolean;
    clearOwnerid(): void;
    getOwnerid(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setOwnerid(value?: google_protobuf_wrappers_pb.Int32Value): House;


    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): HouseAddress | undefined;
    setAddress(value?: HouseAddress): House;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): House.AsObject;
    static toObject(includeInstance: boolean, msg: House): House.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: House, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): House;
    static deserializeBinaryFromReader(message: House, reader: jspb.BinaryReader): House;
}

export namespace House {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        squarefeet?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        numberofbedrooms?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        onsale?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        isrental?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        ownerid?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        address?: HouseAddress.AsObject,
    }
}

export class HouseAddress extends jspb.Message { 

    hasStreetname(): boolean;
    clearStreetname(): void;
    getStreetname(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStreetname(value?: google_protobuf_wrappers_pb.StringValue): HouseAddress;


    hasHousenumber(): boolean;
    clearHousenumber(): void;
    getHousenumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setHousenumber(value?: google_protobuf_wrappers_pb.StringValue): HouseAddress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HouseAddress.AsObject;
    static toObject(includeInstance: boolean, msg: HouseAddress): HouseAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HouseAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HouseAddress;
    static deserializeBinaryFromReader(message: HouseAddress, reader: jspb.BinaryReader): HouseAddress;
}

export namespace HouseAddress {
    export type AsObject = {
        streetname?: google_protobuf_wrappers_pb.StringValue.AsObject,
        housenumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}
