const name = "Prashant"
const repoCount = 20

console.log(name + repoCount + " value"); // outdated syntax

// new 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaring a string
const gameName = new String("prashantpc")

console.log(gameName[0]); // p
console.log(gameName.__proto__); // {}

// In JavaScript, prototypes are the mechanism by which objects inherit features and properties from one another. Almost every object in JavaScript has an internal link to another object, called its prototype, which acts as a template or blueprint for sharing methods and properties.

// Some Examples of it 
console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // PRASHANTPC
console.log(gameName.charAt(5)); // a
console.log(gameName.indexOf("t"));  // 7

// substring
const newString = gameName.substring(0,4)
console.log(newString); // pras

// slice
const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);


// trim()
const newStringOne = "  Prashant      "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://xyz.com/prashant%20singh"
console.log(url.replace('%20' , '-'));  // https://xyz.com/prashant-singh

// includes
console.log(url.includes("xyz")); // true

// split
console.log(gameName.split('-')); // [ 'prashantpc' ]
console.log(typeof gameName.split('-')); // object

