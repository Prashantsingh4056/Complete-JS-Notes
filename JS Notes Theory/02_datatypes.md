# JavaScript Notes — Datatypes

---

# `"use strict"`

```javascript id="10r8yk"
"use strict";
```

### Definition

Treats all JavaScript code as newer/modern version.

### Benefits

* Helps write safer code
* Prevents some common mistakes
* Improves debugging

---

# Variables

```javascript id="q98vwe"
let name = "Prashant"
let age = 18
let isLoggedIn = false
```

| Variable     | Value        | Datatype |
| ------------ | ------------ | -------- |
| `name`       | `"Prashant"` | String   |
| `age`        | `18`         | Number   |
| `isLoggedIn` | `false`      | Boolean  |

---

# JavaScript Datatypes

## 1. Number

```javascript id="yhdxmu"
let age = 18
```

* Stores numeric values
* Range: approximately `2^53`

Examples:

```javascript id="kj5m6v"
10
3.14
999
```

---

## 2. BigInt

Used for very large integers.

```javascript id="2r7p2n"
let bigNumber = 1234567890123456789n
```

---

## 3. String

```javascript id="z2x8f5"
let name = "Prashant"
```

* Stores text
* Written inside `" "` or `' '`

---

## 4. Boolean

```javascript id="8s5x8m"
let isLoggedIn = false
```

Only 2 values:

* `true`
* `false`

---

## 5. Null

```javascript id="t0f4zq"
let temperature = null
```

### Definition

Represents an intentionally empty value.

### Important

`null` is a standalone value.

---

## 6. Undefined

```javascript id="l6a4yn"
let state;
```

### Definition

Variable declared but value not assigned.

---

## 7. Symbol

Used for unique values.

```javascript id="g4h7lm"
let id = Symbol('123')
```

---

# Object

Objects are used to store collections of data.

```javascript id="9xq1er"
let user = {
    name: "Prashant",
    age: 18
}
```

---

# `typeof` Operator

Used to check datatype of a value.

---

# Code

```javascript id="p8s6rn"
console.log(typeof "Prashant");
console.log(typeof null);
console.log(typeof undefined);
```

---

# Output

```javascript id="z4c3hp"
string
object
undefined
```

---

# Important Interview Point

## Why is `typeof null` = `"object"` ?

```javascript id="3g2p7y"
typeof null
```

Output:

```javascript id="m4n7kt"
object
```

This is a known bug in JavaScript from old versions.

---

# Quick Revision Table

| Datatype  | Example                        |
| --------- | ------------------------------ |
| Number    | `18`                           |
| String    | `"Prashant"`                   |
| Boolean   | `true`                         |
| Null      | `null`                         |
| Undefined | variable declared but no value |
| BigInt    | `123456789n`                   |
| Symbol    | `Symbol('id')`                 |

---

# Quick Revision

```javascript id="7w1j9x"
typeof "abc"      // string
typeof 18         // number
typeof true       // boolean
typeof null       // object
typeof undefined  // undefined
```
