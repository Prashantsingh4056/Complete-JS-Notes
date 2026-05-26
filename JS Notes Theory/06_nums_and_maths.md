## Full Code

```js

const score = 400
console.log(score); // 400


const balance = new Number(100)
console.log(balance);  // [Number: 100]

console.log(balance.toString());
console.log(typeof balance.toString()); // string

console.log(balance.toString().length); // 3

// toFixed
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 12.89
const otherNumber2 = 122.89
console.log(otherNumber.toPrecision(3)); // 12.9
console.log(otherNumber2.toPrecision(3)); // 123  ?

const hundreds = 1000000
// US standard
console.log(hundreds.toLocaleString()); // 1,000,000
// Indian standard
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

   
// __________________________________Maths______________________________

console.log(Math);

// abs
console.log(Math.abs(-4));

// round
console.log(Math.round(4.6));

// ceil
console.log(Math.ceil(4.2));

// floor
console.log(Math.floor(4.9));

// max
console.log(Math.max(2,6,3,5,8));

// min
console.log(Math.min(2,6,3,5,8));

// random
console.log(Math.random()); 
console.log((Math.random() * 10) + 1); 
console.log(Math.floor(Math.random() * 10) + 1);  // for integer value


const min = 10
const max = 20


// Impotant Formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```

---

## Notes

# JavaScript Notes — Numbers and Maths

---

# Numbers in JavaScript

## Normal Number

```javascript id="p7m2qx"
const score = 400

console.log(score);
```

---

# Output

```javascript id="x4r8tw"
400
```

---

# Number Object

## Code

```javascript id="k6m1zp"
const balance = new Number(100)

console.log(balance);
```

---

# Output

```javascript id="v9q5rx"
[Number: 100]
```

---

# Explanation

Creates a Number object instead of primitive number.

---

# `toString()`

Converts number into string.

---

# Code

```javascript id="r2m8qy"
console.log(balance.toString());
console.log(typeof balance.toString());
```

---

# Output

```javascript id="t5x1wp"
100
string
```

---

# `length` after `toString()`

## Code

```javascript id="m7q4zk"
console.log(balance.toString().length);
```

---

# Output

```javascript id="u3x9pr"
3
```

---

# Explanation

```javascript id="f8m2tw"
"100"
```

contains 3 characters.

---

# `toFixed()`

Controls decimal places.

---

# Code

```javascript id="g5q7rx"
console.log(balance.toFixed(2));
```

---

# Output

```javascript id="v1m8zp"
100.00
```

---

# Explanation

Adds fixed decimal digits.

Mostly used in:

* prices
* finance
* calculations

---

# `toPrecision()`

Formats number with total significant digits.

---

# Code

```javascript id="n4x7qy"
const otherNumber = 12.89
const otherNumber2 = 122.89

console.log(otherNumber.toPrecision(3));
console.log(otherNumber2.toPrecision(3));
```

---

# Output

```javascript id="c8m2wp"
12.9
123
```

---

# Explanation

---

## Case 1

```javascript id="j5q8tx"
12.89 → 12.9
```

3 significant digits kept.

---

## Case 2

```javascript id="r7m1zp"
122.89 → 123
```

Rounded to 3 significant digits.

---

# `toLocaleString()`

Formats numbers according to region.

---

# Code

```javascript id="u4x9rk"
const hundreds = 1000000

console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString("en-IN"));
```

---

# Output

```javascript id="v6m3qw"
1,000,000
10,00,000
```

---

# Explanation

| Locale           | Format      |
| ---------------- | ----------- |
| Default (US)     | `1,000,000` |
| Indian (`en-IN`) | `10,00,000` |

---

# JavaScript Math Object

## Code

```javascript id="w8q2ty"
console.log(Math);
```

`Math` provides mathematical functions and constants.

---

# `Math.abs()`

Returns absolute value.

---

# Code

```javascript id="f1m7zp"
console.log(Math.abs(-4));
```

---

# Output

```javascript id="k5x9rq"
4
```

---

# `Math.round()`

Rounds to nearest integer.

---

# Code

```javascript id="d9m2wx"
console.log(Math.round(4.6));
```

---

# Output

```javascript id="q7x1tp"
5
```

---

# `Math.ceil()`

Rounds UP to nearest integer.

---

# Code

```javascript id="m3q8rz"
console.log(Math.ceil(4.2));
```

---

# Output

```javascript id="u6m4wp"
5
```

---

# `Math.floor()`

Rounds DOWN to nearest integer.

---

# Code

```javascript id="x2q7ty"
console.log(Math.floor(4.9));
```

---

# Output

```javascript id="v5m1zk"
4
```

---

# `Math.max()`

Returns largest value.

---

# Code

```javascript id="n8x3qp"
console.log(Math.max(2,6,3,5,8));
```

---

# Output

```javascript id="r4m9tw"
8
```

---

# `Math.min()`

Returns smallest value.

---

# Code

```javascript id="p6q2zy"
console.log(Math.min(2,6,3,5,8));
```

---

# Output

```javascript id="w1m7rx"
2
```

---

# `Math.random()`

Generates random number between:

```javascript id="f7q4mk"
0 and 1
```

---

# Code

```javascript id="b3x8tp"
console.log(Math.random());
```

---

# Possible Output

```javascript id="j9m1qw"
0.734829
```

(Random every time)

---

# Random Integer Formula

## Code

```javascript id="n5q7rx"
console.log(Math.floor(Math.random() * 10) + 1);
```

---

# Output Range

```javascript id="v2m8zk"
1 to 10
```

---

# Explanation

| Part            | Meaning         |
| --------------- | --------------- |
| `Math.random()` | 0 → 1           |
| `* 10`          | 0 → 9           |
| `+ 1`           | 1 → 10          |
| `Math.floor()`  | removes decimal |

---

# Important Formula

Generate random number between `min` and `max`.

---

# Code

```javascript id="x6q3tw"
const min = 10
const max = 20

console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);
```

---

# Output Range

```javascript id="c4m9zp"
10 to 20
```

---

# Formula Breakdown

```javascript id="s8x2rq"
Math.random() * (max - min + 1)
```

Creates range size.

Then:

```javascript id="t1m7wy"
+ min
```

shifts range to start from minimum value.

---

# Quick Revision Table

| Method             | Purpose            |
| ------------------ | ------------------ |
| `toString()`       | number → string    |
| `toFixed()`        | fixed decimals     |
| `toPrecision()`    | significant digits |
| `toLocaleString()` | formatted number   |
| `Math.abs()`       | absolute value     |
| `Math.round()`     | nearest integer    |
| `Math.ceil()`      | round up           |
| `Math.floor()`     | round down         |
| `Math.max()`       | largest number     |
| `Math.min()`       | smallest number    |
| `Math.random()`    | random number      |

---

# Quick Revision Examples

```javascript id="z5q8wp"
num.toFixed(2)

Math.abs(-4)

Math.round(4.5)

Math.ceil(4.1)

Math.floor(4.9)

Math.max(1,2,3)

Math.min(1,2,3)

Math.random()
```
