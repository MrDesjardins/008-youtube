import { Person as PersonGrpc } from "../../generated/grpcServer/person_pb";
import { House as HouseGrpc } from "../../generated/grpcServer/house_pb";
import {
  Person as PersonGraphql,
  House as HouseGraphql,
} from "../../generated/graphql/types";
export class Mapper {
  public person(personGrpc: PersonGrpc.AsObject | undefined): PersonGraphql {
    if (personGrpc === undefined) {
      return { id: 324, firstname: "Bank", lastname: "", fullname: "" };
    }
    return {
      id: personGrpc.id?.value ?? -1,
      firstname: personGrpc.firstname?.value ?? "",
      lastname: personGrpc.lastname?.value ?? "",
      fullname: personGrpc.firstname?.value + " " + personGrpc.lastname?.value,
    };
  }

  public people(personGrpc: PersonGrpc.AsObject[]): PersonGraphql[] {
    return personGrpc.map((p) => this.person(p));
  }
  public peopleFromResponse(
    personGrpc: (PersonGrpc | undefined)[]
  ): PersonGraphql[] {
    return personGrpc
      .map((p) => (p === undefined ? p : PersonGrpc.toObject(true, p)))
      .map((pp) => this.person(pp));
  }

  public house(houseGrpc: HouseGrpc.AsObject | undefined): HouseGraphql {
    if (houseGrpc === undefined) {
      return {
        id: -1,
        Owner: this.person(undefined),
        address: {},
        numberOfBedrooms: 0,
        onSale: false,
        squarefeet: 0,
        isRental: false,
      };
    }
    return {
      id: houseGrpc.id?.value ?? -1,
      address: {
        streetname: houseGrpc.address?.streetname?.value ?? "",
        housenumber: houseGrpc.address?.housenumber?.value ?? "",
      },
      numberOfBedrooms: houseGrpc.numberofbedrooms?.value ?? 0,
      onSale: houseGrpc.onsale?.value ?? false,
      squarefeet: houseGrpc.squarefeet?.value ?? 0,
      isRental: houseGrpc.isrental?.value ?? false,
      Owner: { id: houseGrpc.ownerid?.value } as PersonGraphql,
    };
  }
  public houses(housesGrpc: HouseGrpc.AsObject[]): HouseGraphql[] {
    return housesGrpc.map((p) => this.house(p));
  }

  public houseFromResponse(
    houseGrpc: (HouseGrpc | undefined)[]
  ): HouseGraphql[] {
    return houseGrpc
      .map((h) => (h === undefined ? h : HouseGrpc.toObject(true, h)))
      .map((hh) => this.house(hh));
  }
}

export const grpcGraphqlMapper = new Mapper();
