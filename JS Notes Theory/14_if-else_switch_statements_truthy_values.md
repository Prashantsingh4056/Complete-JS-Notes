# JavaScript Notes — `if-else`, Switch Case, Truthy & Falsy Values

---

# `if-else` Statements

Used for:

```javascript id="q7m2wp"
decision making
```

---

# Basic Syntax

```javascript id="x4r8ty"
if(condition){

}
else{

}
```

---

# Example

## Code

```javascript id="v9m1qz"
const temperature = 41

if(temperature === 40){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
```

---

# Output

```javascript id="t5x7rk"
temperature is greater than 50
```

---

# Comparison Operators

| Operator | Meaning            |
| -------- | ------------------ |
| `>`      | greater than       |
| `<`      | less than          |
| `>=`     | greater than equal |
| `<=`     | less than equal    |
| `==`     | loose equality     |
| `===`    | strict equality    |
| `!=`     | not equal          |
| `!==`    | strict not equal   |

---

# `==` vs `===`

---

## Loose Equality (`==`)

Checks only values.

```javascript id="n8q3tw"
"2" == 2
```

↓

```javascript id="m2x7qp"
true
```

---

## Strict Equality (`===`)

Checks:

* value
* datatype

```javascript id="k5m9rz"
"2" === 2
```

↓

```javascript id="u7m2qy"
false
```

---

# Scope Inside `if`

## Code

```javascript id="d4x8pk"
if(score > 100){

   let power = "fly"
}
```

---

# Explanation

Variables declared using:

* `let`
* `const`

exist only inside block.

---

# One-Line `if`

## Code

```javascript id="f9q3tw"
if(balance > 500)
   console.log("test")
```

---

# Multiple Statements

## Code

```javascript id="w3x7qk"
if(balance > 500)
   console.log("test"),
   console.log("test2")
```

---

# Important

This style is:

* less readable
* not recommended

---

# `else if`

Used for multiple conditions.

---

# Example

## Code

```javascript id="r8m2ty"
if(balance < 500){

}
else if(balance < 750){

}
else{

}
```

---

# Logical Operators

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |

---

# AND Operator (`&&`)

All conditions must be true.

---

# Example

## Code

```javascript id="v5q9wp"
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
```

---

# OR Operator (`||`)

At least one condition must be true.

---

# Example

## Code

```javascript id="n1x4rz"
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
```

---

# Output

```javascript id="k1m6rp"
User logged in
```

---

# Switch Case Statements

Used for multiple fixed conditions.

---

# Syntax

```javascript id="c8x3qw"
switch(key){

   case value:
      break;

   default:
      break;
}
```

---

# Example

## Code

```javascript id="m5q7rz"
const month = "march"

switch(month){

   case "jan":
      console.log("January");
      break;

   case "march":
      console.log("march");
      break;

   default:
      console.log("default case");
}
```

---

# Output

```javascript id="t9m2wp"
march
```

---

# Why `break` is Important?

Without `break`,
execution continues into next cases.

This is called:

```javascript id="u4x8pk"
fall through
```

---

# Example Without `break`

## Code

```javascript id="f2q7ty"
switch(month){

   case "march":
      console.log("march")

   case "april":
      console.log("april")
}
```

---

# Output

```javascript id="v6m1rz"
march
april
```

---

# Explanation

After matching `"march"`:

JavaScript keeps executing next cases until:

* `break`
* switch ends

---

# `default` Case

Runs when no case matches.

---

# Truthy and Falsy Values

Every value in JavaScript behaves as:

* truthy
* falsy

inside conditions.

---

# Falsy Values

Only these values are falsy:

```javascript id="j3x9qp"
false
0
-0
0n
""
null
undefined
NaN
```

---

# Everything Else is Truthy

Examples:

```javascript id="n8m4tw"
"0"
"false"
[]
{}
function(){}
```

---

# Example

## Code

```javascript id="w5q2rk"
const userEmail = []

if(userEmail){
    console.log("Got user email");
}
```

---

# Output

```javascript id="r1m7pz"
Got user email
```

---

# Important Interview Point

Empty arrays:

```javascript id="x9q4tw"
[]
```

and empty objects:

```javascript id="k6m2ry"
{}
```

are truthy.

---

# Checking Empty Array

## Code

```javascript id="b7x3qp"
if(userEmail.length === 0){
    console.log("Array is empty");
}
```

---

# Checking Empty Object

## Code

```javascript id="p4m8tw"
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
```

---

# Output

```javascript id="d2q7rz"
Object is empty
```

---

# `Object.keys()`

Returns array of object keys.

Example:

```javascript id="t5m1wp"
Object.keys(obj)
```

---

# Nullish Coalescing Operator (`??`)

Used for:

* `null`
* `undefined`

handling.

---

# Syntax

```javascript id="x8q4pk"
value1 ?? value2
```

---

# Example

## Code

```javascript id="r9m2qy"
let val1

val1 = null ?? 10
```

---

# Output

```javascript id="k3x7tw"
10
```

---

# Explanation

If left side is:

* `null`
* `undefined`

then right value is used.

---

# More Examples

| Expression         | Output |
| ------------------ | ------ |
| `5 ?? 10`          | `5`    |
| `null ?? 10`       | `10`   |
| `undefined ?? 15`  | `15`   |
| `null ?? 10 ?? 20` | `10`   |

---

# Ternary Operator

Short form of `if-else`.

---

# Syntax

```javascript id="m6q1rz"
condition ? true : false
```

---

# Example

## Code

```javascript id="g4m9qp"
iceTeaPrice <= 80
? console.log("less than 80")
: console.log("more than 80")
```

---

# Output

```javascript id="u1x7rk"
more than 80
```

---

# Important Interview Points

---

# `===` Preferred Over `==`

Because it checks:

* datatype
* value

---

# `break` Prevents Fall Through

Always use `break` in switch cases.

---

# Empty Arrays & Objects are Truthy

```javascript id="v8q2tw"
[]
{}
```

are truthy.

---

# `??` Only Handles

```javascript id="y4m7rz"
null
undefined
```

---

# Ternary Operator

Used for short conditions.

---

# Quick Revision Table

| Concept   | Meaning                   |   |    |
| --------- | ------------------------- | - | -- |
| `if-else` | conditional execution     |   |    |
| `switch`  | multiple fixed conditions |   |    |
| `&&`      | AND                       |   |    |
| `         |                           | ` | OR |
| truthy    | behaves like true         |   |    |
| falsy     | behaves like false        |   |    |
| `??`      | nullish operator          |   |    |
| ternary   | short if-else             |   |    |

---

# Quick Revision Examples

```javascript id="z7m2pk"
if(condition){}
```

---

```javascript id="h4x8tw"
switch(value){}
```

---

```javascript id="c9q1rz"
value ?? 10
```

---

```javascript id="s5m3qp"
condition ? true : false
```

---

# Most Important Interview Question

## Why does this run?

```javascript id="n2x7rk"
if([]){
   console.log("Hello")
}
```

Because empty arrays are:

```javascript id="m8q1tw"
truthy values
```
