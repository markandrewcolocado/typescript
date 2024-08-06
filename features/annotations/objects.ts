const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // es2015 method of defining  a method inside of an object
  setAge(age: number): void {
    this.age = age;
  },
};

// when using destructuring, we have to write out the expected structure of profile on the right hand side

// const { age } = profile;
const { age }: { age: number } = profile;

// const { age, name } = profile;
// const { age, name }: { age: number; name: string } = profile;

// const { coords: {lat, lng}} = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
