import { Person } from "../generated/grpcServer/person_pb";
import { House } from "../generated/grpcServer/house_pb";

export const allPeople: Person.AsObject[] = [
  {
    id: { value: 1 },
    firstname: { value: "Patrick" },
    lastname: { value: "Desjardins" },
    houseidList: [{ value: 1 }],
  },
  {
    id: { value: 2 },
    firstname: { value: "John" },
    lastname: { value: "Smith" },
    houseidList: [{ value: 2 }, { value: 3 }],
  },
];
export const allHouse: House.AsObject[] = [
  {
    id: { value: 1 },
    address: {
      streetname: { value: "Funny Street" },
      housenumber: { value: "123" },
    },
    squarefeet: { value: 1200 },
    numberofbedrooms: { value: 2 },
    onsale: { value: true },
    isrental: {
      value: true,
    },
    ownerid: { value: 1 },
  },
  {
    id: { value: 2 },
    address: {
      streetname: { value: "Another Street" },
      housenumber: { value: "500" },
    },
    squarefeet: { value: 1500 },
    numberofbedrooms: { value: 2 },
    onsale: { value: true },
    isrental: {
      value: false,
    },
    ownerid: { value: 2 },
  },
  {
    id: { value: 3 },
    address: {
      streetname: { value: "Last Street" },
      housenumber: { value: "1" },
    },
    squarefeet: { value: 600 },
    numberofbedrooms: { value: 4 },
    onsale: { value: true },
    ownerid: { value: 2 },
  },
];
