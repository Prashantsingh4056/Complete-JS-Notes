# JavaScript Notes — Scope

---

# What is Scope?

Scope determines:

```javascript id="q7m2wp"
where variables can be accessed
```

---

# Blocks in JavaScript

Anything inside:

```javascript id="x4r8ty"
{}
```

creates a block scope.

Examples:

* `if`
* `for`
* `while`
* functions

---

# Example

## Code

```javascript id="v9m1qz"
let a = 300

if (true) {

    let a = 10
    const b = 20
    var c = 30

    console.log("INNER :", a);
}
```

---

# Output

```javascript id="t5x7rk"
INNER : 10
```

---

# Explanation

Inside block:

```javascript id="n8q3tw"
let a = 10
```

creates separate variable.

It does NOT affect outer `a`.

---

# Accessing Variables Outside Block

## Code

```javascript id="m2x7qp"
console.log(a)
console.log(c)
```

---

# Output

```javascript id="k5m9rz"
300
30
```

---

# Important Observation

```javascript id="u7m2qy"
c
```

is accessible outside block.

This is the major problem with:

```javascript id="d4x8pk"
var
```

---

# Why `var` is Problematic?

`var` ignores block scope.

---

# Example

## Code

```javascript id="f9q3tw"
if(true){
   var c = 30
}

console.log(c)
```

---

# Output

```javascript id="w3x7qk"
30
```

---

# Explanation

Even though `c` was declared inside block,
it becomes globally accessible.

This can accidentally overwrite values.

---

# `let` and `const`

`let` and `const` follow:

```javascript id="r8m2ty"
Block Scope
```

---

# Example

## Code

```javascript id="v5q9wp"
if(true){
   let x = 10
}

console.log(x)
```

---

# Output

```javascript id="n1x4rz"
ReferenceError
```

---

# Explanation

`x` exists only inside block.

---

# Variable Shadowing

## Code

```javascript id="k1m6rp"
let a = 300

if(true){
   let a = 10
}
```

---

# Explanation

Inner `a` temporarily shadows outer `a`.

Outside block:

```javascript id="c8x3qw"
a = 300
```

still remains unchanged.

---

# Global Scope vs Block Scope

| Scope Type   | Accessible Where? |
| ------------ | ----------------- |
| Global Scope | everywhere        |
| Block Scope  | only inside `{}`  |

---

# Example

## Global Scope

```javascript id="m5q7rz"
let name = "Prashant"
```

Accessible everywhere.

---

## Block Scope

```javascript id="t9m2wp"
if(true){
   let age = 21
}
```

Accessible only inside block.

---

# Important Interview Points

---

# Never Prefer `var`

Because:

* no block scope
* causes unexpected bugs

---

# Prefer

```javascript id="u4x8pk"
let
```

for changing values.

---

# Use

```javascript id="f2q7ty"
const
```

when value should not change.

---

# `let` and `const`

follow block scope.

---

# Quick Revision Table

| Keyword | Scope                 |
| ------- | --------------------- |
| `var`   | function/global scope |
| `let`   | block scope           |
| `const` | block scope           |

---

# Quick Revision Examples

```javascript id="v6m1rz"
{
   let a = 10
}
```

`a` accessible only inside block.

---

```javascript id="j3x9qp"
{
   var b = 20
}
```

`b` accessible outside block too.

---

# Most Important Interview Question

## Why Avoid `var`?

```javascript id="n8m4tw"
Because var does not follow block scope
```

and may create unexpected bugs in large applications.



--- 
# Part 2
--- 

# Code : 

```js

// ------------------------------------------------- Part 2 ----------------------------------------------

// nested scope 

//  nested function

function one(){
    const username = "Prashant"

    function two(){
        const website = "youtube"
        console.log(username);   
    }

    // console.log(website);  // ReferenceError: website is not defined
    
    two()
}

one()  // Prashant , first one() will execute and then inside one() , function two() execute and prints username


// Similarly with if-else 

if(true) {
    const username = "Prashant"
    if(username === "Prashant"){
        const website = " youtube"
        console.log(username + website);
    }

    // console.log(website);  // error
}

// console.log(username);  // error


//? _____________________________________________ Interesting _______________________________________________

console.log(addOne(5))  // works perfectly 

function addOne(num){     //  Function Declaration
    return num + 1;
}

// addOne(5)


addTwo(5)  //  error
const addTwo = function(num){    //  Function Expression
    return num + 2;
}

// addTwo(5)

// ____________________________ Reason ________________________________

// 1. Function Declaration

// function addOne(num) { ... }

// Hoisted: JavaScript moves the entire function to the top of its scope during execution.
// Usage: You can call addOne(5) even before the line where the function is actually written.

// 2. Function Expression

// const addTwo = function(num) { ... }

// Not Hoisted: The function is treated like a variable.
// Usage: You cannot call addTwo(5) before it is defined in the code. If you try, you'll get a ReferenceError.
```

---

# Explanation : 
---

# JavaScript Notes — Scope Part 2

---

# Nested Scope

Functions inside functions can access parent variables.

This is called:

```javascript id="q7m2wp"
Lexical Scope
```

---

# Nested Functions

## Code

```javascript id="x4r8ty"
function one(){

    const username = "Prashant"

    function two(){

        const website = "youtube"

        console.log(username);
    }

    two()
}

one()
```

---

# Output

```javascript id="v9m1qz"
Prashant
```

---

# Explanation

Inner function:

```javascript id="t5x7rk"
two()
```

can access variables of outer function:

```javascript id="n8q3tw"
username
```

---

# Important Rule

Child functions can access parent variables.

But parent functions CANNOT access child variables.

---

# Example

## Code

```javascript id="m2x7qp"
function one(){

   function two(){
      const website = "youtube"
   }

   console.log(website)
}
```

---

# Output

```javascript id="k5m9rz"
ReferenceError
```

---

# Explanation

```javascript id="u7m2qy"
website
```

exists only inside:

```javascript id="d4x8pk"
two()
```

---

# Nested Scope with `if`

Works same way as functions.

---

# Code

```javascript id="f9q3tw"
if(true){

    const username = "Prashant"

    if(username === "Prashant"){

        const website = " youtube"

        console.log(username + website);
    }
}
```

---

# Output

```javascript id="w3x7qk"
Prashant youtube
```

---

# Explanation

Inner block can access outer block variables.

---

# Example of Error

## Code

```javascript id="r8m2ty"
console.log(website)
```

---

# Output

```javascript id="v5q9wp"
ReferenceError
```

---

# Explanation

`website` exists only inside inner block.

---

# Hoisting in JavaScript

Hoisting means:

```javascript id="n1x4rz"
JavaScript moves declarations to top
```

during execution.

---

# Function Declaration

## Code

```javascript id="k1m6rp"
console.log(addOne(5))

function addOne(num){
    return num + 1
}
```

---

# Output

```javascript id="c8x3qw"
6
```

---

# Explanation

Function declarations are:

```javascript id="m5q7rz"
Hoisted completely
```

So function can be called before definition.

---

# Function Expression

## Code

```javascript id="t9m2wp"
addTwo(5)

const addTwo = function(num){
    return num + 2
}
```

---

# Output

```javascript id="u4x8pk"
ReferenceError
```

---

# Explanation

Here:

```javascript id="f2q7ty"
addTwo
```

is treated like variable.

Variables declared using:

```javascript id="v6m1rz"
const
```

are NOT fully hoisted.

So function cannot be used before declaration.

---

# Function Declaration vs Function Expression

| Feature                     | Function Declaration | Function Expression        |
| --------------------------- | -------------------- | -------------------------- |
| Syntax                      | `function add(){}`   | `const add = function(){}` |
| Hoisted?                    | ✅ Yes                | ❌ No                       |
| Can call before definition? | ✅ Yes                | ❌ No                       |

---

# Important Interview Points

---

# Lexical Scope

Inner function can access outer variables.

---

# Parent Cannot Access Child Variables

Scope works inward, not outward.

---

# Hoisting

Only declarations are hoisted properly.

---

# Function Declaration

```javascript id="j3x9qp"
function demo(){}
```

fully hoisted.

---

# Function Expression

```javascript id="n8m4tw"
const demo = function(){}
```

NOT callable before declaration.

---

# Quick Revision Table

| Concept              | Meaning               |
| -------------------- | --------------------- |
| Nested Scope         | scope inside scope    |
| Lexical Scope        | child accesses parent |
| Hoisting             | declarations moved up |
| Function Declaration | fully hoisted         |
| Function Expression  | not fully hoisted     |

---

# Quick Revision Examples

```javascript id="w5q2rk"
function one(){

   function two(){

   }
}
```

---

```javascript id="r1m7pz"
function add(){

}
```

---

```javascript id="x9q4tw"
const add = function(){

}
```

---

# Most Important Interview Question

## Why does this work?

```javascript id="k6m2ry"
addOne(5)

function addOne(){}
```

Because function declarations are hoisted.

---

## Why does this fail?

```javascript id="b7x3qp"
addTwo(5)

const addTwo = function(){}
```

Because function expressions behave like variables and are not fully hoisted.
