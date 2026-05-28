## Code: 

```js

function sayMyName(){
    console.log("Prashant");
    
}

sayMyName  // reference
sayMyName() // execution

function addTwoNums(number1 , number2){
    console.log(number1  + number2);
    
}

// number1 , number2 => parameters
// 2 , 4  => arguments

addTwoNums(2,4)
addTwoNums(2,"4")
addTwoNums(4,'a')

const result = addTwoNums(3,5);
console.log("Result : " , result);  // Result :  undefined  ?

// actual way : 
function addTwoNumbers(number1 , number2){
    
    // let result = number1 + number2;
    // return result

    // directly
    return number1 + number2;

    console.log("Prashant"); // unreachable code
    
}

const Result = addTwoNumbers(3,5)
console.log("Result : " , Result);  // Result :  8


// --------------------------------------------

function loginUserMessage(username){

    return `${username} just logged in`
}

loginUserMessage("prashant")  // function executed and returned a value but not printed 

console.log(loginUserMessage("Prashant"));   // Prashant just logged in

// important -> if no argument passed : 
console.log(loginUserMessage());   // undefined just logged in


// fix :
function loginUserMessage1(username){

    // if no arguments passed :
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage1()); // Please enter a username , undefined


// Preventing this situation by giving a default value
function loginUserMessage2(username = "sam"){

    // if no arguments passed :
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage2());  // sam just logged in

```


---
# **__Explanation__**
---

# JavaScript Notes — Functions

---

# Functions in JavaScript

Functions are reusable blocks of code.

---

# Function Declaration

## Code

```javascript id="q7m2wp"
function sayMyName(){
    console.log("Prashant");
}
```

---

# Function Reference vs Execution

---

# Function Reference

## Code

```javascript id="x4r8ty"
sayMyName
```

---

# Explanation

Only gives function reference.

Function does NOT execute.

---

# Function Execution

## Code

```javascript id="v9m1qz"
sayMyName()
```

---

# Output

```javascript id="t5x7rk"
Prashant
```

---

# Explanation

`()`

executes the function.

---

# Function with Parameters

## Code

```javascript id="n8q3tw"
function addTwoNums(number1, number2){
    console.log(number1 + number2);
}
```

---

# Parameters vs Arguments

| Term       | Meaning                              |
| ---------- | ------------------------------------ |
| Parameters | variables inside function definition |
| Arguments  | actual values passed                 |

---

# Example

```javascript id="m2x7qp"
function addTwoNums(number1, number2)
```

`number1`, `number2` → Parameters

---

```javascript id="k5m9rz"
addTwoNums(2,4)
```

`2`, `4` → Arguments

---

# Different Outputs

## Code

```javascript id="u7m2qy"
addTwoNums(2,4)
addTwoNums(2,"4")
addTwoNums(4,"a")
```

---

# Output

```javascript id="d4x8pk"
6
24
4a
```

---

# Explanation

JavaScript performs:

* automatic type coercion

So:

```javascript id="f9q3tw"
2 + "4"
```

becomes:

```javascript id="w3x7qk"
"24"
```

---

# Why `undefined` Came?

## Code

```javascript id="r8m2ty"
const result = addTwoNums(3,5)

console.log("Result :", result);
```

---

# Output

```javascript id="v5q9wp"
8
Result : undefined
```

---

# Explanation

Function printed value using:

```javascript id="n1x4rz"
console.log()
```

but did NOT return anything.

Default return value becomes:

```javascript id="k1m6rp"
undefined
```

---

# Correct Way — Using `return`

## Code

```javascript id="c8x3qw"
function addTwoNumbers(number1, number2){

    return number1 + number2;
}
```

---

# Calling Function

## Code

```javascript id="m5q7rz"
const Result = addTwoNumbers(3,5)

console.log("Result :", Result);
```

---

# Output

```javascript id="t9m2wp"
Result : 8
```

---

# Important Interview Point

Code written after `return` never executes.

---

# Example

```javascript id="u4x8pk"
return number1 + number2;

console.log("Prashant");
```

---

# Explanation

This becomes:

```javascript id="f2q7ty"
unreachable code
```

---

# Function Returning String

## Code

```javascript id="v6m1rz"
function loginUserMessage(username){

    return `${username} just logged in`
}
```

---

# Calling Function

## Code

```javascript id="j3x9qp"
console.log(loginUserMessage("Prashant"));
```

---

# Output

```javascript id="n8m4tw"
Prashant just logged in
```

---

# Important Point

## Code

```javascript id="w5q2rk"
loginUserMessage("prashant")
```

---

# Explanation

Function executes and returns value,
but value is NOT printed.

---

# Missing Arguments

## Code

```javascript id="r1m7pz"
console.log(loginUserMessage());
```

---

# Output

```javascript id="x9q4tw"
undefined just logged in
```

---

# Explanation

No argument passed.

So:

```javascript id="k6m2ry"
username = undefined
```

---

# Handling Missing Values

## Code

```javascript id="b7x3qp"
function loginUserMessage1(username){

    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}
```

---

# Output

```javascript id="p4m8tw"
Please enter a username
undefined
```

---

# Explanation

---

## `if(!username)`

Checks for:

* undefined
* null
* empty string
* false

---

## `return`

Stops function execution immediately.

---

# Default Parameters

Best way to avoid undefined values.

---

# Code

```javascript id="d2q7rz"
function loginUserMessage2(username = "sam"){

    return `${username} just logged in`
}
```

---

# Calling Function

## Code

```javascript id="t5m1wp"
console.log(loginUserMessage2());
```

---

# Output

```javascript id="x8q4pk"
sam just logged in
```

---

# Explanation

If no value passed:

```javascript id="r9m2qy"
username = "sam"
```

by default.

---

# Important Interview Points

---

# `return` vs `console.log()`

| `console.log()`       | `return`             |
| --------------------- | -------------------- |
| prints value          | sends value back     |
| does not store result | result can be stored |

---

# Code After `return`

Never executes.

---

# Default Parameters

```javascript id="k3x7tw"
function demo(value = 10)
```

used to avoid undefined values.

---

# Quick Revision Table

| Concept           | Purpose                       |
| ----------------- | ----------------------------- |
| Function          | reusable code                 |
| Parameters        | inputs in function definition |
| Arguments         | actual values passed          |
| `return`          | send value back               |
| default parameter | fallback value                |

---

# Quick Revision Examples

```javascript id="m6q1rz"
function demo(){

}
```

```javascript id="g4m9qp"
function add(a,b){
   return a+b
}
```

```javascript id="u1x7rk"
function user(name = "sam")
```

```javascript id="v8q2tw"
if(!username)
```


--- 
# Part 2
---

# Code : 

```js

// ------------------------------------------------Part 2------------------------------------------------------


// use of rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(21, 23, 344))  // [ 21, 23, 344 ]

function calculateCartPrice1(val1 , val2 , ...num1){
    return num1
}

console.log(calculateCartPrice1(21, 23, 344 , 333))  // [ 344, 333 ]

// --------

const user = {
    username: "prashant",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// Passing direct object
handleObject({
    username: "sam",
    price: 399
})

// ------------------   passing arrays

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // 400
// similarly
console.log(returnSecondValue([11,22,33,44])); // 22

```

--- 

# Explanation 

--- 

# JavaScript Notes — Functions Part 2

---

# Rest Operator (`...`)

Rest operator collects multiple values into an array.

---

# Syntax

```javascript id="q7m2wp"
function demo(...values)
```

---

# Example

## Code

```javascript id="x4r8ty"
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(21, 23, 344))
```

---

# Output

```javascript id="v9m1qz"
[21, 23, 344]
```

---

# Explanation

```javascript id="t5x7rk"
...num1
```

collects all arguments into array.

So:

```javascript id="n8q3tw"
num1 = [21, 23, 344]
```

---

# Rest Operator with Normal Parameters

## Code

```javascript id="m2x7qp"
function calculateCartPrice1(val1, val2, ...num1){
    return num1
}

console.log(
    calculateCartPrice1(21, 23, 344, 333)
)
```

---

# Output

```javascript id="k5m9rz"
[344, 333]
```

---

# Explanation

| Parameter | Value       |
| --------- | ----------- |
| `val1`    | `21`        |
| `val2`    | `23`        |
| `...num1` | `[344,333]` |

---

# Important Interview Point

Rest operator must be:

```javascript id="u7m2qy"
LAST parameter
```

---

# Passing Objects to Functions

---

# Object

## Code

```javascript id="d4x8pk"
const user = {
    username: "prashant",
    price: 199
}
```

---

# Function

## Code

```javascript id="f9q3tw"
function handleObject(anyObject){

    console.log(
      `Username is ${anyObject.username}
       and price is ${anyObject.price}`
    );
}
```

---

# Function Call

## Code

```javascript id="w3x7qk"
handleObject(user)
```

---

# Output

```javascript id="r8m2ty"
Username is prashant and price is 199
```

---

# Explanation

Object properties accessed using:

```javascript id="v5q9wp"
anyObject.username

anyObject.price
```

---

# Passing Direct Object

## Code

```javascript id="n1x4rz"
handleObject({
    username: "sam",
    price: 399
})
```

---

# Output

```javascript id="k1m6rp"
Username is sam and price is 399
```

---

# Explanation

Object can be directly passed without creating variable.

---

# Passing Arrays to Functions

---

# Array

## Code

```javascript id="c8x3qw"
const myNewArray = [200, 400, 100, 600]
```

---

# Function

## Code

```javascript id="m5q7rz"
function returnSecondValue(getArray){
    return getArray[1]
}
```

---

# Calling Function

## Code

```javascript id="t9m2wp"
console.log(returnSecondValue(myNewArray));
```

---

# Output

```javascript id="u4x8pk"
400
```

---

# Passing Direct Array

## Code

```javascript id="f2q7ty"
console.log(
   returnSecondValue([11,22,33,44])
);
```

---

# Output

```javascript id="v6m1rz"
22
```

---

# Explanation

```javascript id="j3x9qp"
getArray[1]
```

returns second element because:

* arrays use 0-based indexing

---

# Important Interview Points

---

# Rest Operator

```javascript id="n8m4tw"
...values
```

collects multiple arguments into array.

---

# Rest vs Spread Operator

| Operator | Use            |
| -------- | -------------- |
| Rest     | collect values |
| Spread   | expand values  |

---

# Example

## Rest

```javascript id="w5q2rk"
function demo(...nums)
```

---

## Spread

```javascript id="r1m7pz"
const arr2 = [...arr1]
```

---

# Objects and Arrays Can Be Passed Directly

No need to create separate variables.

---

# Quick Revision Table

| Concept             | Purpose            |
| ------------------- | ------------------ |
| `...` rest operator | collect arguments  |
| object in function  | pass object        |
| array in function   | pass array         |
| `arr[index]`        | access array value |

---

# Quick Revision Examples

```javascript id="x9q4tw"
function demo(...nums)
```

```javascript id="k6m2ry"
handleObject({
   name: "Prashant"
})
```

```javascript id="b7x3qp"
return arr[1]
```

```javascript id="p4m8tw"
function add(a,b,...rest)
```
