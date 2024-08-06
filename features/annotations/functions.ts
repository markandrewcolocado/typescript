const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// will not return anything
const logger = (message: string): void => {
  console.log(message);
};

// means we are never going to reach the end of this function
const throwError = (message: string): never => {
  throw new Error(message);
};

// in cases where you might return a string or an error, use the string type
// you will only use the 'never' type if you are sure to never return anything from the function
const throwErrorTwo = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// es2015 destructuring
const logWeatherTwo = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
logWeatherTwo(forecast);
