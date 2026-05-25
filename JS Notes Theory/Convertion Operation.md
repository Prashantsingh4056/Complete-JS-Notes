# JavaScript Notes — Conversion Operations

---

# Type Conversion in JavaScript

JavaScript allows conversion from one datatype to another.

Main conversion functions:

| Function    | Converts To |
| ----------- | ----------- |
| `Number()`  | Number      |
| `Boolean()` | Boolean     |
| `String()`  | String      |

---

# Converting to Number

## Syntax

```javascript id="d6t7vx"
Number(value)
```

---

# Code

```javascript id="d2l8ws"
let score = "Prashant"

console.log(typeof score)

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);
```

---

# Output

```javascript id="w9y2hk"
string
number
NaN
```

---

# Explanation

```javascript id="x4m8qe"
let score = "Prashant"
```

Initially datatype is:

```javascript id="z7u5qn"
string
```

After conversion:

```javascript id="w5j0pl"
let valueInNumber = Number(score)
```

Datatype becomes:

```javascript id="b7r1ec"
number
```

But value becomes:

```javascript id="v4t9zk"
NaN
```

---

# What is `NaN`?

```javascript id="m6h2pw"
NaN = Not a Number
```

Occurs when conversion to number fails.

---

# Important Conversion Cases

| Value        | `Number(value)` Output |
| ------------ | ---------------------- |
| `"33"`       | `33`                   |
| `"33abc"`    | `NaN`                  |
| `null`       | `0`                    |
| `undefined`  | `NaN`                  |
| `true`       | `1`                    |
| `false`      | `0`                    |
| `"Prashant"` | `NaN`                  |

---

# Converting to Boolean

## Syntax

```javascript id="j4k8pw"
Boolean(value)
```

---

# Code

```javascript id="n8x5rb"
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
```

---

# Output

```javascript id="t6u4pa"
true
```

---

# Important Boolean Conversions

| Value        | Boolean Output |
| ------------ | -------------- |
| `1`          | `true`         |
| `0`          | `false`        |
| `""`         | `false`        |
| `"Prashant"` | `true`         |
| `null`       | `false`        |
| `undefined`  | `false`        |

---

# Converting to String

## Syntax

```javascript id="v3q8nk"
String(value)
```

---

# Code

```javascript id="k5m2wy"
let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
```

---

# Output

```javascript id="u9w1jx"
33
string
```

---

# Explanation

```javascript id="h7r3fd"
33
```

gets converted into:

```javascript id="s2v8qm"
"33"
```

Datatype changes from:

* `number` → `string`

---

# Important Interview Point

Even if result is `NaN`:

```javascript id="g8w4kt"
typeof NaN
```

Output:

```javascript id="m0c7qy"
number
```

Because JavaScript treats `NaN` as a special numeric value.

---

# Quick Revision

| Conversion      | Syntax           |
| --------------- | ---------------- |
| String → Number | `Number(value)`  |
| Value → Boolean | `Boolean(value)` |
| Number → String | `String(value)`  |

---

# Quick Revision Examples

```javascript id="a5n9zr"
Number("33")        // 33
Number("abc")       // NaN

Boolean(1)          // true
Boolean(0)          // false

String(33)          // "33"
```
