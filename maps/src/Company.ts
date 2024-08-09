// When creating a file whose primary purpose is to create an export of a class,
// we're usually going to five it a capital name
import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// In general, any time we create a file that houses a single class in TypeScipt,
// we're not going to have any actual code in here that does anything with the class
// Instead, we will usually import this class into some other more central location and use it from there
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
