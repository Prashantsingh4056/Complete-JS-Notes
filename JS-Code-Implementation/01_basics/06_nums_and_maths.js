const score = 400
console.log(score); // 400


const balance = new Number(100)
console.log(balance);  // [Number: 100]

console.log(balance.toString());
console.log(typeof balance.toString()); // string

console.log(balance.toString().length); // 3

// toFixed
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 12.89
const otherNumber2 = 122.89
console.log(otherNumber.toPrecision(3)); // 12.9
console.log(otherNumber2.toPrecision(3)); // 123  ?

const hundreds = 1000000
// US standard
console.log(hundreds.toLocaleString()); // 1,000,000
// Indian standard
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

   
// __________________________________Maths______________________________

console.log(Math);

// abs
console.log(Math.abs(-4));

// round
console.log(Math.round(4.6));

// ceil
console.log(Math.ceil(4.2));

// floor
console.log(Math.floor(4.9));

// max
console.log(Math.max(2,6,3,5,8));

// min
console.log(Math.min(2,6,3,5,8));

// random
console.log(Math.random()); 
console.log((Math.random() * 10) + 1); 
console.log(Math.floor(Math.random() * 10) + 1);  // for integer value


const min = 10
const max = 20


// Impotant Formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);