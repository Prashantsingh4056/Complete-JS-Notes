# Full Code 
---

```js

const user = {
    username: "prashant",
    price: 999,

    // this means current context
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // we are referring current context inside the curly braces ,so we use this.username   
        console.log(this);
        
    }
}

// we don't have 'this' inside arrow function 

user.welcomeMessage()  // prashant , welcome to website
user.username = "sam"
user.welcomeMessage()  // sam , welcome to website

console.log(this);   // {}

// but in browser , it is window  ->  global object in browser

// function chai(){
//     let username = "prashant"
//     console.log(this.username);  // undefined , so the context is working only inside objects not functions

// }
// chai()

const chai= function(){
    let username = "prashant"
    
    console.log(this.username);  // undefined , so the context is working only inside objects not functions

}
chai()


// ____________________ Arrow Functions ___________________________

const Chai = () => {
    let username = "prashant"
    console.log(this);  // {}
    console.log(this.username);  // {}
}

Chai();  // undefined

// -------------------------------------------------------------

//====> basic arrow function (Explicit return)

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,4))

//====>  implicit return

// const addTwo = (num1 , num2) => (num1 + num2);

// console.log(addTwo(3,4));

// ----------------------------------------------------------------------

// simple Rule -> 
                     // if we use {} , return keyword is neccessary
                     // if we use () only , don't need to write return keyword


// to return an object using implicit return 

// const addTwo = (num1 , num2) => {username : "prashant"}  // undefined ❌
const addTwo = (num1 , num2) => ({username : "prashant"})  // ✅


console.log(addTwo(3,4));

//------------------------------------------------

// const myArray = [2,4,6,4,3]

// myArray.forEach()

```

---

# Explanation

---

# JavaScript Notes — Arrow Functions and `this`

---

# `this` Keyword

`this` refers to:

```javascript id="q7m2wp"
current context/current object
```

---

# Object Example

## Code

```javascript id="x4r8ty"
const user = {
    username: "prashant",
    price: 999,

    welcomeMessage: function(){

        console.log(
          `${this.username}, welcome to website`
        );

        console.log(this);
    }
}
```

---

# Function Call

## Code

```javascript id="v9m1qz"
user.welcomeMessage()
```

---

# Output

```javascript id="t5x7rk"
prashant, welcome to website
```

---

# Explanation

```javascript id="n8q3tw"
this.username
```

means:

```javascript id="m2x7qp"
user.username
```

because current context is:

```javascript id="k5m9rz"
user object
```

---

# Changing Object Values

## Code

```javascript id="u7m2qy"
user.username = "sam"

user.welcomeMessage()
```

---

# Output

```javascript id="d4x8pk"
sam, welcome to website
```

---

# Explanation

`this` always refers to current object values.

---

# `this` in Global Scope

## Code

```javascript id="f9q3tw"
console.log(this);
```

---

# Output in Node.js

```javascript id="w3x7qk"
{}
```

---

# Output in Browser

```javascript id="r8m2ty"
window object
```

---

# Important Interview Point

In browser:

```javascript id="v5q9wp"
window
```

is global object.

---

# `this` Inside Normal Function

## Code

```javascript id="n1x4rz"
const chai = function(){

    let username = "prashant"

    console.log(this.username);
}

chai()
```

---

# Output

```javascript id="k1m6rp"
undefined
```

---

# Explanation

`this` works properly inside objects,
NOT regular functions.

---

# Arrow Functions

---

# Syntax

## Code

```javascript id="c8x3qw"
const demo = () => {

}
```

---

# Arrow Function Example

## Code

```javascript id="m5q7rz"
const Chai = () => {

    let username = "prashant"

    console.log(this);

    console.log(this.username);
}

Chai()
```

---

# Output

```javascript id="t9m2wp"
{}
undefined
```

---

# Explanation

Arrow functions do NOT have their own:

```javascript id="u4x8pk"
this
```

They inherit surrounding context.

---

# Arrow Function with Explicit Return

---

# Syntax

```javascript id="f2q7ty"
const addTwo = (num1, num2) => {
    return num1 + num2;
}
```

---

# Example

## Code

```javascript id="v6m1rz"
console.log(addTwo(3,4));
```

---

# Output

```javascript id="j3x9qp"
7
```

---

# Implicit Return

When function has single expression.

---

# Syntax

```javascript id="n8m4tw"
const addTwo = (num1, num2) => (
    num1 + num2
)
```

---

# Output

```javascript id="w5q2rk"
7
```

---

# Important Rule

| Syntax | Need `return`? |
| ------ | -------------- |
| `{}`   | ✅ Yes          |
| `()`   | ❌ No           |

---

# Example

---

## Explicit Return

```javascript id="r1m7pz"
const demo = () => {
   return 5
}
```

---

## Implicit Return

```javascript id="x9q4tw"
const demo = () => (
   5
)
```

---

# Returning Objects from Arrow Functions

---

# Wrong Way

## Code

```javascript id="k6m2ry"
const addTwo = () => {
    username: "prashant"
}
```

---

# Output

```javascript id="b7x3qp"
undefined
```

---

# Explanation

Curly braces are treated as:

* function body

NOT object.

---

# Correct Way

## Code

```javascript id="p4m8tw"
const addTwo = () => (
    { username: "prashant" }
)
```

---

# Output

```javascript id="d2q7rz"
{ username: "prashant" }
```

---

# Explanation

Wrapping object inside:

```javascript id="t5m1wp"
()
```

tells JavaScript to return object implicitly.

---

# Important Interview Points

---

# `this` in Objects

```javascript id="x8q4pk"
this
```

refers to current object.

---

# `this` in Arrow Functions

Arrow functions do NOT have their own `this`.

---

# Explicit vs Implicit Return

| Type     | Syntax             |
| -------- | ------------------ |
| Explicit | `{ return value }` |
| Implicit | `( value )`        |

---

# Returning Objects

Must wrap object inside:

```javascript id="r9m2qy"
()
```

---

# Quick Revision Table

| Concept            | Meaning                 |
| ------------------ | ----------------------- |
| `this`             | current context         |
| arrow function     | shorter function syntax |
| explicit return    | uses `return`           |
| implicit return    | automatic return        |
| `()` around object | return object           |

---

# Quick Revision Examples

```javascript id="k3x7tw"
const demo = () => {}
```

---

```javascript id="m6q1rz"
const add = (a,b) => a+b
```

---

```javascript id="g4m9qp"
const add = (a,b) => (
   a+b
)
```

---

```javascript id="u1x7rk"
const obj = () => (
   {name:"Prashant"}
)
```

---

# Most Important Interview Question

## Why does this give `undefined`?

```javascript id="v8q2tw"
const demo = () => {
   name:"Prashant"
}
```

Because `{}` is treated as function body, not object.

---

## Correct Way

```javascript id="y4m7rz"
const demo = () => (
   {name:"Prashant"}
)
```
