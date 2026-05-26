![alt text](image.png)

# JavaScript Notes — Datatypes Summary

---

# JavaScript Datatypes

JavaScript datatypes are divided into 2 categories:

1. Primitive Datatypes
2. Reference (Non-Primitive) Datatypes

---

# 1. Primitive Datatypes

Primitive datatypes store single/simple values.

## 7 Primitive Types

| Datatype  | Example         |
| --------- | --------------- |
| String    | `"Prashant"`    |
| Number    | `100`           |
| Boolean   | `true`          |
| Null      | `null`          |
| Undefined | `undefined`     |
| Symbol    | `Symbol('123')` |
| BigInt    | `123456789n`    |

---

# Examples

## String

```javascript id="y8r4pw"
const name = "Prashant"
```

---

## Number

```javascript id="m4q7tx"
const score = 100
const scoreValue = 100.3
```

Both integer and decimal are `number` type in JavaScript.

---

## Boolean

```javascript id="x5k2zn"
const isLoggedIn = false
```

Possible values:

* `true`
* `false`

---

## Null

```javascript id="r7m9qb"
const tempOutside = null
```

Represents an intentionally empty value.

---

## Undefined

```javascript id="v3x8kp"
let userEmail
```

Variable declared but value not assigned.

---

# Symbol

Used to create unique values.

## Code

```javascript id="n1q6tw"
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
```

---

# Output

```javascript id="p5m8zr"
false
```

---

# Explanation

Even if symbols contain same value:

```javascript id="g2x7vy"
Symbol('123')
```

they are always unique.

---

# BigInt

Used for very large numbers.

## Code

```javascript id="k8v4tp"
const bigNumber = 234332423242423333333n
```

---

# Important

`n` at end means:

```javascript id="z4m1qx"
BigInt
```

---

# 2. Reference (Non-Primitive) Datatypes

Reference types store collections or complex data.

---

# Types of Reference Datatypes

| Datatype | Example              |
| -------- | -------------------- |
| Array    | `["A", "B"]`         |
| Object   | `{name: "Prashant"}` |
| Function | `function(){}`       |

---

# Array

## Code

```javascript id="u7q2mk"
const heroes = ["A", "B", "C"]
```

Stores multiple values in a single variable.

---

# Object

## Code

```javascript id="j5r9xn"
let myObj = {
    name: "prashant",
    age: 21,
}
```

Stores data in `key : value` form.

---

# Function

## Code

```javascript id="f8m3qp"
const myFunction = function (){
    console.log("Hello World");
}
```

Functions are treated as variables in JavaScript.

---

# Dynamic Typing

JavaScript is:

```javascript id="c4x7zw"
Dynamically Typed
```

---

# Definition

You do NOT need to specify datatype while declaring variables.

Example:

```javascript id="s2v8ry"
let value = 10
value = "Prashant"
```

Same variable can store different datatypes.

---

# `typeof` Operator

Used to check datatype.

---

# Code

```javascript id="k6m2wp"
console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heroes);
```

---

# Output

```javascript id="r3x9tv"
bigint
function
object
```

---

# Important Interview Points

---

## Arrays Return `"object"`

```javascript id="n9q4zk"
typeof heroes
```

Output:

```javascript id="v7m1px"
object
```

Because arrays are internally treated as objects in JavaScript.

---

## Functions Return `"function"`

```javascript id="e4r8qy"
typeof myFunction
```

Output:

```javascript id="j2x6tn"
function
```

---

# Quick Revision Table

| Value          | typeof Output |
| -------------- | ------------- |
| `"Prashant"`   | `"string"`    |
| `100`          | `"number"`    |
| `true`         | `"boolean"`   |
| `undefined`    | `"undefined"` |
| `null`         | `"object"`    |
| `123n`         | `"bigint"`    |
| `[]`           | `"object"`    |
| `{}`           | `"object"`    |
| `function(){}` | `"function"`  |

---

# Quick Revision

```javascript id="w5q8my"
Primitive Types:
String
Number
Boolean
null
undefined
Symbol
BigInt
```

```javascript id="b7x2rp"
Reference Types:
Array
Object
Function
```
