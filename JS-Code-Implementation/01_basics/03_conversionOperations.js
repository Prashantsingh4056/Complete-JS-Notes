// let score = "23" // string
// let score = 23  // number
// let score = "33abc"
// let score = null 
// let score = undefined
// let score = true
let score = "Prashant"

// const {score} = req.body

console.log(typeof score)

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  //true

// 1 => true , 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);  // 33
console.log(typeof stringNumber);  // string


// *********************************Operations**********************************

let value  = 3
let negValue = -value
console.log(negValue); // -3

let str1 = "hello"
let str2 = " Prashant"

let str3 = str1 + str2
console.log(str3);  // hello Prashant

console.log("1" + 2); // 12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log(true);  // true
console.log(+true); // 1
console.log(+""); // 0

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2  // (less readable)

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);










