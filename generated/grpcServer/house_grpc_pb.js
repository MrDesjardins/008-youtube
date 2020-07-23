// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpcServer_house_pb = require('../grpcServer/house_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_houseservice_HouseRequest(arg) {
  if (!(arg instanceof grpcServer_house_pb.HouseRequest)) {
    throw new Error('Expected argument of type houseservice.HouseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_houseservice_HouseRequest(buffer_arg) {
  return grpcServer_house_pb.HouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_houseservice_HouseResponse(arg) {
  if (!(arg instanceof grpcServer_house_pb.HouseResponse)) {
    throw new Error('Expected argument of type houseservice.HouseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_houseservice_HouseResponse(buffer_arg) {
  return grpcServer_house_pb.HouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_houseservice_HousesBySizeRequest(arg) {
  if (!(arg instanceof grpcServer_house_pb.HousesBySizeRequest)) {
    throw new Error('Expected argument of type houseservice.HousesBySizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_houseservice_HousesBySizeRequest(buffer_arg) {
  return grpcServer_house_pb.HousesBySizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_houseservice_HousesBySizeResponse(arg) {
  if (!(arg instanceof grpcServer_house_pb.HousesBySizeResponse)) {
    throw new Error('Expected argument of type houseservice.HousesBySizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_houseservice_HousesBySizeResponse(buffer_arg) {
  return grpcServer_house_pb.HousesBySizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_houseservice_HousesRequest(arg) {
  if (!(arg instanceof grpcServer_house_pb.HousesRequest)) {
    throw new Error('Expected argument of type houseservice.HousesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_houseservice_HousesRequest(buffer_arg) {
  return grpcServer_house_pb.HousesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_houseservice_HousesResponse(arg) {
  if (!(arg instanceof grpcServer_house_pb.HousesResponse)) {
    throw new Error('Expected argument of type houseservice.HousesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_houseservice_HousesResponse(buffer_arg) {
  return grpcServer_house_pb.HousesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HouseServiceService = exports.HouseServiceService = {
  getHousesBySize: {
    path: '/houseservice.HouseService/GetHousesBySize',
    requestStream: false,
    responseStream: false,
    requestType: grpcServer_house_pb.HousesBySizeRequest,
    responseType: grpcServer_house_pb.HousesBySizeResponse,
    requestSerialize: serialize_houseservice_HousesBySizeRequest,
    requestDeserialize: deserialize_houseservice_HousesBySizeRequest,
    responseSerialize: serialize_houseservice_HousesBySizeResponse,
    responseDeserialize: deserialize_houseservice_HousesBySizeResponse,
  },
  getHouse: {
    path: '/houseservice.HouseService/GetHouse',
    requestStream: false,
    responseStream: false,
    requestType: grpcServer_house_pb.HouseRequest,
    responseType: grpcServer_house_pb.HouseResponse,
    requestSerialize: serialize_houseservice_HouseRequest,
    requestDeserialize: deserialize_houseservice_HouseRequest,
    responseSerialize: serialize_houseservice_HouseResponse,
    responseDeserialize: deserialize_houseservice_HouseResponse,
  },
  getHouses: {
    path: '/houseservice.HouseService/GetHouses',
    requestStream: false,
    responseStream: false,
    requestType: grpcServer_house_pb.HousesRequest,
    responseType: grpcServer_house_pb.HousesResponse,
    requestSerialize: serialize_houseservice_HousesRequest,
    requestDeserialize: deserialize_houseservice_HousesRequest,
    responseSerialize: serialize_houseservice_HousesResponse,
    responseDeserialize: deserialize_houseservice_HousesResponse,
  },
};

exports.HouseServiceClient = grpc.makeGenericClientConstructor(HouseServiceService);
