// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpcServer_person_pb = require('../grpcServer/person_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_personproto_PersonRequest(arg) {
  if (!(arg instanceof grpcServer_person_pb.PersonRequest)) {
    throw new Error('Expected argument of type personproto.PersonRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personproto_PersonRequest(buffer_arg) {
  return grpcServer_person_pb.PersonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personproto_PersonResponse(arg) {
  if (!(arg instanceof grpcServer_person_pb.PersonResponse)) {
    throw new Error('Expected argument of type personproto.PersonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personproto_PersonResponse(buffer_arg) {
  return grpcServer_person_pb.PersonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personproto_PersonsRequest(arg) {
  if (!(arg instanceof grpcServer_person_pb.PersonsRequest)) {
    throw new Error('Expected argument of type personproto.PersonsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personproto_PersonsRequest(buffer_arg) {
  return grpcServer_person_pb.PersonsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personproto_PersonsResponse(arg) {
  if (!(arg instanceof grpcServer_person_pb.PersonsResponse)) {
    throw new Error('Expected argument of type personproto.PersonsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personproto_PersonsResponse(buffer_arg) {
  return grpcServer_person_pb.PersonsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PersonServiceService = exports.PersonServiceService = {
  getPerson: {
    path: '/personproto.PersonService/GetPerson',
    requestStream: false,
    responseStream: false,
    requestType: grpcServer_person_pb.PersonRequest,
    responseType: grpcServer_person_pb.PersonResponse,
    requestSerialize: serialize_personproto_PersonRequest,
    requestDeserialize: deserialize_personproto_PersonRequest,
    responseSerialize: serialize_personproto_PersonResponse,
    responseDeserialize: deserialize_personproto_PersonResponse,
  },
  getPersons: {
    path: '/personproto.PersonService/GetPersons',
    requestStream: false,
    responseStream: false,
    requestType: grpcServer_person_pb.PersonsRequest,
    responseType: grpcServer_person_pb.PersonsResponse,
    requestSerialize: serialize_personproto_PersonsRequest,
    requestDeserialize: deserialize_personproto_PersonsRequest,
    responseSerialize: serialize_personproto_PersonsResponse,
    responseDeserialize: deserialize_personproto_PersonsResponse,
  },
};

exports.PersonServiceClient = grpc.makeGenericClientConstructor(PersonServiceService);
