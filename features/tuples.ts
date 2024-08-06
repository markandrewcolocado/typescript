const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

// to represent the drink object as a tuple, we take the values and put them in the array
// the order of the values in the tuples should be specific
// first item represents the color, second item represents carbonation, and the third represents the sugar content
//we will put annotation on the tuple so we dont change the order of elements inside it
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40]; // annotation using type alias
const tea: Drink = ['brown', false, 0]; // annotation using type alias
