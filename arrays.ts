const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string [][] = [
    ['ford150'],
    ['supra'],
    ['camaro']
]

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100); //error carMakers can only have string in it.

// help with map
carMakers.map((car):string => {
    return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [ new Date(), '2061-01-01']

importantDates.push('2030-01-01');
importantDates.push(new Date());

