// When creating a file whose primary purpose is to create an export of a class,
// we're usually going to five it a capital name
import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// In general, any time we create a file that houses a single class in TypeScipt,
// we're not going to have any actual code in here that does anything with the class
// Instead, we will usually import this class into some other more central location and use it from there
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // Use parseFloat to convert string to number
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  // markerContent(): string {
  //   return `Username: ${this.name}`;
  // }
  markerContent(): string {
    return `
    <div>
      <h1>User Name: ${this.name}</h1>
    </div>
    `;
  }
}
