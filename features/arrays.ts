const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extacting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map', shows the methods available in autocomplete
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-12-13');
importantDates.push(new Date());
