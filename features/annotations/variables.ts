const apples: number = 5;
const nothingMuch: undefined = undefined;
const nothing: null = null;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
// traditionally, we create classes with capitalized names
class Car {}
let car: Car = new Car();

// Object literal
// use semicolon to separate the properties in the declaration
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Funtion that returns the 'any' type
const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // typescript cannot infer the type of the variable coordinates because it used JSON.parse
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWord; // The type inference will be any when you declare a variable and use it later
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
    console.log(foundWord);
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// let numberAboveZero = false; // Typescript cannot infer the variable type in this case
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
