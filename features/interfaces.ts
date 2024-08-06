// When creating an interface, we always use a capital letter on the leading edge of the word
// use a generic name
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // function that returns a string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

// printVehicle(oldCivic);

// General Strategy
// 1) For code re-use in Typescript is to create functions that accept arguments that are typed with interfaces
