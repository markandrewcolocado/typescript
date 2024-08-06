// What is Class
// Class is a blueprint of sorts.
// We are writing code here, but it's a blueprint or a model of sorts that we're going to use to create
// an object that has some different fields and methods attached to it.

// General rules
// 1) Always capitalize the name of the class
// 2) We dont call the methods attached to this class, instead we're going to use a class to create an instance of a class
// 3) When you define a field(variable) inside of a class, you should define its annotation and initialize it's value
// 4) You can skip the initialization of a field if you define it using a constructor

class Vehicle {
  color: string = 'red';

  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

// INHERITANCE
// By extending a class, we can copy the different method inside of the parent class over to the child class
// We can override different methods of the parent class in the child class
class Cars extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const honda = new Cars();
honda.drive();
honda.honk();

// FIELDS IN CLASSES
// If you are going to pass an argument to a class, you have to define a constructor inside of the class itself
// Any time that we define a constructor, it will ve instantly executed, right when we create a new instance
class Plant {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

// SHORTCUT IN IMPLEMENTING CONSTRUCTORS
// 1) Delete the implementation inside the constructor
// 2) Delete the property definition at the top
// 3) And then right in front of the color argument of the constructor, add the public modifier
// 4) We can also use the private and protected modifier, it will follow the rules as modifying methods:
//    public - can be called anywhere, any time
//    private - can only be called inside of the class
//    protected - can be called inside the class and child classes

// class Plant {
//   constructor(public color: string) {}
// }
// const calamansi = new Plant('green');
// console.log(calamansi.color);

// CHILD CLASSES HAVING ITS OWN CONSTRUCTOR
// 1. The child class should have a super call in its constructor and should be provided a value
// 2. The parameter input on parent class should also be available in the child class
class Furniture {
  constructor(public color: string) {}
}

class Cabinet extends Furniture {
  constructor(public size: string, color: string) {
    super(color);
  }
}

const drawer = new Cabinet('large', 'green');
