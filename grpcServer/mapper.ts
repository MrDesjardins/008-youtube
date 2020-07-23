import { House, HouseAddress } from "./../generated/grpcServer/house_pb";
import {
  BoolValue,
  Int32Value,
  StringValue,
} from "google-protobuf/google/protobuf/wrappers_pb";
import { Person } from "./../generated/grpcServer/person_pb";

export class Mapper {
  public house(house: House.AsObject): House {
    const houseGrpc: House = new House();
    houseGrpc.setId(castToNumberValue(house.id));
    houseGrpc.setAddress(this.address(house.address));
    houseGrpc.setNumberofbedrooms(castToNumberValue(house.numberofbedrooms));
    houseGrpc.setSquarefeet(castToNumberValue(house.squarefeet));
    houseGrpc.setOnsale(castToBoolValue(house.onsale));
    houseGrpc.setIsrental(castToBoolValue(house.isrental));
    houseGrpc.setOwnerid(castToNumberValue(house.ownerid));
    return houseGrpc;
  }

  public houses(houses: House.AsObject[]): House[] {
    return houses.map((h) => this.house(h));
  }

  public address(address: HouseAddress.AsObject | undefined): HouseAddress {
    const houseAddressGrpc: HouseAddress = new HouseAddress();
    houseAddressGrpc.setHousenumber(castToStringValue(address?.housenumber));
    houseAddressGrpc.setStreetname(castToStringValue(address?.streetname));
    return houseAddressGrpc;
  }

  public person(person: Person.AsObject | undefined): Person {
    const personGrpc: Person = new Person();
    personGrpc.setId(castToNumberValue(person?.id));
    personGrpc.setFirstname(castToStringValue(person?.firstname));
    personGrpc.setLastname(castToStringValue(person?.lastname));
    personGrpc.setHouseidList(
      person?.houseidList
        .filter((g) => g !== undefined)
        .map((d) => castToNumberValue(d)) as Int32Value[]
    );
    return personGrpc;
  }
  public people(people: Person.AsObject[]): Person[] {
    return people.map((h) => this.person(h));
  }
}

export function castToBoolValue(
  boolIn: BoolValue.AsObject | undefined
): BoolValue | undefined {
  if (boolIn !== undefined) {
    const boolOut = new BoolValue();
    boolOut.setValue(boolIn.value);
    return boolOut;
  }
  return undefined;
}
export function castToNumberValue(
  inVal: Int32Value.AsObject | undefined
): Int32Value | undefined {
  if (inVal !== undefined) {
    const outVal = new Int32Value();
    outVal.setValue(inVal.value);
    return outVal;
  }
  return undefined;
}
export function castToStringValue(
  inVal: StringValue.AsObject | undefined
): StringValue | undefined {
  if (inVal !== undefined) {
    const outVal = new StringValue();
    outVal.setValue(inVal.value);
    return outVal;
  }
  return undefined;
}
export const mapper = new Mapper();
