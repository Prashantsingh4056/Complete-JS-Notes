// Primitive 

// 7 types 
//         => String
//         => Number
//         => Boolean
//         => null  
//         => undefined
//         => Symbol
//         => BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const tempOutside = null
let userEmail = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234332423242423333333n

// Reference (Non primitive)

//         => Array
//         => Objects
//         => Functions

// * JavaScript is dynamically typed. This means you do not need to specify data types when declaring variables, and variables can hold values of different types (e.g., numbers, strings, or objects) while the program is running.

const heroes = ["A" , "B" , "C"]

let myObj = {
    name: "prashant",
    age: 21,
}

const myFunction = function (){
    console.log("Hello World");
    
}

console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function
console.log(typeof heroes);  // object

// Study here : 
// https://262.ecma-international.org/5.1/#sec-11.4.3

