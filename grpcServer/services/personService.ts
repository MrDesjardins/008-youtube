import { mapper } from "../mapper";
import grpc from "grpc";
import { allPeople } from "../../database/fake";
import { IPersonServiceServer } from "../../generated/grpcServer/person_grpc_pb";
import {
  PersonRequest,
  PersonResponse,
  Person,
  PersonsRequest,
  PersonsResponse,
} from "../../generated/grpcServer/person_pb";

export class PersonService implements IPersonServiceServer {
  public getPerson(
    call: grpc.ServerUnaryCall<PersonRequest>,
    callback: grpc.sendUnaryData<PersonResponse>
  ): void {
    const request = call.request;
    const person = allPeople
      .filter((d) => d.id?.value === request.getId())
      .shift();
    const response = new PersonResponse();
    let grpcPerson: Person = new Person();
    if (person !== undefined) {
      grpcPerson = mapper.person(person);
    }
    response.setPerson(grpcPerson);
    console.log("getPerson");
    callback(null, response);
  }

  public getPersons(
    call: grpc.ServerUnaryCall<PersonsRequest>,
    callback: grpc.sendUnaryData<PersonsResponse>
  ): void {
    const request = call.request;
    const people = request.getIdList();
    const response = new PersonsResponse();
    const peopleObj = people
      .map((d) => allPeople.find((ff) => ff.id?.value === d))
      .filter((d) => d !== undefined) as Person.AsObject[];
    response.setPeopleList(mapper.people(peopleObj));
    console.log("getPeople");
    callback(null, response);
  }
}
