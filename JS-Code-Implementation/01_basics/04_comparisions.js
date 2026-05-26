// here problem happens when we don't compare same datatypes

console.log("2" > 1);  // true
console.log("02" > 1);  // true

// Typescript won't allow to compare two diff. data types


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true , comparision convert null -> number , treating as 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// ===
console.log("2" === 2); // false




