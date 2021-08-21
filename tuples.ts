const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
}

//define a tuple structure to use as an alias
type Drink = [string, boolean,number];

//then you can use it like so:
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea : Drink = ['brown', false, 0];


// the tuple has a specific order for its elements.
const pepsiArr:[string, boolean, number] = ['brown', true, 40];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};

