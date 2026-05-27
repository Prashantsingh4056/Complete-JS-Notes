# JavaScript Notes — Objects

---

# Objects in JavaScript

Objects store data in:

```javascript id="q7m2wp"
key : value
```

format.

---

# Ways to Create Objects

| Method         | Example           |
| -------------- | ----------------- |
| Object Literal | `{}`              |
| Constructor    | `Object.create()` |

---

# Object Literal

## Code

```javascript id="x4r8ty"
const jsUser = {
    name: "Prashant",
    age: 21
}
```

---

# Symbol as Object Key

---

# Creating Symbol

## Code

```javascript id="v9m1qz"
const mySym = Symbol("key1");
```

---

# Wrong Way

```javascript id="t5x7rk"
mySym: "mykey1"
```

This treats symbol as normal string key.

---

# Correct Way

## Code

```javascript id="n8q3tw"
[mySym]: "mykey1"
```

---

# Explanation

Square brackets are required to use actual Symbol value as key.

---

# Complete Object

## Code

```javascript id="m2x7qp"
const jsUser = {
    name: "Prashant",
    "full name": "Prashant Singh",
    [mySym]: "mykey1",
    age: 21,
    location: "kanpur",
    email: "prashantsingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
```

---

# Accessing Object Values

---

# Dot Notation

## Code

```javascript id="k5m9rz"
console.log(jsUser.email);
```

---

# Output

```javascript id="u7m2qy"
prashantsingh@gmail.com
```

---

# Bracket Notation

## Code

```javascript id="d4x8pk"
console.log(jsUser["email"]);
```

---

# Output

```javascript id="f9q3tw"
prashantsingh@gmail.com
```

---

# Accessing Keys with Spaces

## Code

```javascript id="w3x7qk"
console.log(jsUser["full name"]);
```

---

# Output

```javascript id="r8m2ty"
Prashant Singh
```

---

# Important Interview Point

This will NOT work:

```javascript id="v5q9wp"
jsUser.full name
```

because space is not allowed with dot notation.

---

# Accessing Symbol Key

## Code

```javascript id="n1x4rz"
console.log(jsUser[mySym]);
```

---

# Output

```javascript id="k1m6rp"
mykey1
```

---

# `Object.freeze()`

Used to lock object values.

---

# Code

```javascript id="c8x3qw"
Object.freeze(jsUser)
```

---

# Explanation

After freezing:

* no changes allowed
* no new properties added
* no properties removed

---

# Example

## Code

```javascript id="m5q7rz"
jsUser.email = "new@gmail.com"
```

Value will NOT update after freeze.

---

# Functions Inside Objects

Objects can also store functions.

---

# Adding Function

## Code

```javascript id="t9m2wp"
jsUser.greeting = function(){
    console.log("Hello JS User");
}
```

---

# Calling Function

## Code

```javascript id="u4x8pk"
console.log(jsUser.greeting());
```

---

# Output

```javascript id="f2q7ty"
Hello JS User
undefined
```

---

# Why `undefined` Came?

Because:

* function itself prints value using `console.log()`
* function does NOT return anything

So return value becomes:

```javascript id="v6m1rz"
undefined
```

---

# Function Reference

## Code

```javascript id="j3x9qp"
console.log(jsUser.greeting);
```

---

# Output

```javascript id="n8m4tw"
[Function (anonymous)]
```

---

# Explanation

Without `()`:

* function is NOT executed
* only reference is shown

---

# Using `this`

## Code

```javascript id="w5q2rk"
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
```

---

# Output

```javascript id="r1m7pz"
Hello JS user, Prashant
```

---

# Definition of `this`

```javascript id="x9q4tw"
this → refers to current object
```

---

# Here

```javascript id="k6m2ry"
this.name
```

means:

```javascript id="b7x3qp"
jsUser.name
```

---

# Important Interview Points

---

# Dot vs Bracket Notation

| Dot Notation             | Bracket Notation    |
| ------------------------ | ------------------- |
| `obj.name`               | `obj["name"]`       |
| Simple access            | Dynamic access      |
| Cannot access space keys | Can access all keys |

---

# Symbol Keys

Must use:

```javascript id="p4m8tw"
[objKey]
```

inside object.

---

# `Object.freeze()`

Makes object immutable.

---

# Quick Revision Table

| Concept                | Purpose        |
| ---------------------- | -------------- |
| `{}`                   | create object  |
| `obj.key`              | access value   |
| `obj["key"]`           | access value   |
| `Object.freeze()`      | lock object    |
| `this`                 | current object |
| function inside object | object method  |

---

# Quick Revision Examples

```javascript id="d2q7rz"
obj.name

obj["full name"]

Object.freeze(obj)

this.name
```

```javascript id="t5m1wp"
obj.greet = function(){
   console.log("Hello")
}
```
