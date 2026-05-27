# JavaScript Notes — Arrays

---

# Arrays in JavaScript

Arrays are used to store multiple values in a single variable.

---

# Creating Arrays

## Using Square Brackets

```javascript id="q7m2wp"
const myArr = [0, 1, 2, 3, 4, 5]
```

---

# Important

Arrays can store:

* numbers
* strings
* booleans
* objects
* mixed datatypes

---

# Accessing Array Elements

## Code

```javascript id="x4r8ty"
console.log(myArr[0]);
```

---

# Output

```javascript id="v9m1qz"
0
```

---

# Explanation

Arrays use:

```javascript id="t5x7rk"
0-based indexing
```

| Index | Value |
| ----- | ----- |
| 0     | 0     |
| 1     | 1     |
| 2     | 2     |

---

# Creating Array using Constructor

## Code

```javascript id="n8q3tw"
const myArr2 = new Array(1,2,3,4)

console.log(myArr2[0]);
```

---

# Output

```javascript id="m2x7qp"
1
```

---

# Shallow Copy vs Deep Copy

---

# Shallow Copy

```javascript id="k5m9rz"
Copy shares same reference
```

Changes may affect original data.

---

# Deep Copy

```javascript id="u7m2qy"
Copy gets completely separate memory
```

Changes do NOT affect original.

---

# Array Methods

---

# `push()`

Adds element at end.

---

# Code

```javascript id="d4x8pk"
myArr.push(6);
myArr.push(7);
```

---

# Array After Push

```javascript id="f9q3tw"
[0,1,2,3,4,5,6,7]
```

---

# `pop()`

Removes last element.

---

# Code

```javascript id="w3x7qk"
myArr.pop();
```

---

# Array After Pop

```javascript id="r8m2ty"
[0,1,2,3,4,5,6]
```

---

# `unshift()`

Adds element at beginning.

---

# Code

```javascript id="v5q9wp"
myArr.unshift(9);
```

---

# Array After Unshift

```javascript id="n1x4rz"
[9,0,1,2,3,4,5,6]
```

---

# `shift()`

Removes first element.

---

# Code

```javascript id="k1m6rp"
myArr.shift();
```

---

# Array After Shift

```javascript id="c8x3qw"
[0,1,2,3,4,5,6]
```

---

# `includes()`

Checks whether value exists.

---

# Code

```javascript id="m5q7rz"
console.log(myArr.includes(9));
```

---

# Output

```javascript id="t9m2wp"
false
```

---

# `indexOf()`

Returns index of element.

---

# Code

```javascript id="u4x8pk"
console.log(myArr.indexOf(9));
```

---

# Output

```javascript id="f2q7ty"
-1
```

---

# Explanation

`-1` means:

* value not found

---

# `join()`

Converts array into string.

---

# Code

```javascript id="v6m1rz"
const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);
```

---

# Output

```javascript id="j3x9qp"
0,1,2,3,4,5,6
string
```

---

# Explanation

Array becomes comma-separated string.

---

# `slice()` vs `splice()`

Most Important Interview Question.

---

# Original Array

```javascript id="n8m4tw"
[0,1,2,3,4,5,6]
```

---

# `slice()`

## Syntax

```javascript id="w5q2rk"
array.slice(start, end)
```

* End index NOT included
* Does NOT modify original array

---

# Code

```javascript id="r1m7pz"
const myNewArr1 = myArr.slice(1,3)

console.log(myNewArr1);
console.log(myArr);
```

---

# Output

```javascript id="x9q4tw"
[1,2]

[0,1,2,3,4,5,6]
```

---

# Explanation

Extracts portion of array.

Original array remains unchanged.

---

# `splice()`

## Syntax

```javascript id="k6m2ry"
array.splice(start, count)
```

* Modifies original array
* Removes elements

---

# Code

```javascript id="b7x3qp"
const myNewArr2 = myArr.splice(1,3)

console.log(myArr);
console.log(myNewArr2);
```

---

# Output

```javascript id="p4m8tw"
[0,4,5,6]

[1,2,3]
```

---

# Explanation

Removed:

* 3 elements
* starting from index 1

Original array gets modified.

---

# Difference Between `slice()` and `splice()`

| Feature                  | `slice()`    | `splice()`          |
| ------------------------ | ------------ | ------------------- |
| Modifies original array? | ❌ No         | ✅ Yes               |
| Returns removed portion? | ✅ Yes        | ✅ Yes               |
| End index included?      | ❌ No         | count based         |
| Main Purpose             | Copy portion | Remove/Add elements |

---

# Important Interview Point

```javascript id="d2q7rz"
slice() → no change in original array
```

```javascript id="t5m1wp"
splice() → changes original array
```

---

# Quick Revision Table

| Method       | Purpose                |
| ------------ | ---------------------- |
| `push()`     | add at end             |
| `pop()`      | remove from end        |
| `unshift()`  | add at start           |
| `shift()`    | remove from start      |
| `includes()` | check existence        |
| `indexOf()`  | get index              |
| `join()`     | array → string         |
| `slice()`    | copy portion           |
| `splice()`   | modify/remove elements |

---

# Quick Revision Examples

```javascript id="x8q4pk"
arr.push(10)

arr.pop()

arr.unshift(1)

arr.shift()

arr.includes(5)

arr.indexOf(5)

arr.join()

arr.slice(1,3)

arr.splice(1,3)
```

---
---

# JavaScript Notes — Arrays Part 2

---

# Adding Arrays

## Arrays

```javascript id="q7m2wp"
const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]
```

---

# Using `push()`

## Code

```javascript id="x4r8ty"
marvel_heros.push(dc_heros)

console.log(marvel_heros);
```

---

# Output

```javascript id="v9m1qz"
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ]
]
```

---

# Explanation

`push()` adds entire array as a SINGLE element.

So nested array is created.

---

# Accessing Nested Array Elements

## Code

```javascript id="t5x7rk"
console.log(marvel_heros[3][1]);
```

---

# Output

```javascript id="n8q3tw"
flash
```

---

# `concat()`

Used to merge arrays.

---

# Code

```javascript id="m2x7qp"
const allHeroes = marvel_heros.concat(dc_heros)

console.log(allHeroes);
```

---

# Output

```javascript id="k5m9rz"
[
 'thor',
 'Ironman',
 'spiderman',
 'superman',
 'flash',
 'batman'
]
```

---

# Explanation

Creates NEW merged array.

Original arrays remain unchanged.

---

# Spread Operator (`...`)

Modern and easiest way to merge arrays.

---

# Code

```javascript id="u7m2qy"
const AllNewHeros = [...marvel_heros, ...dc_heros]

console.log(AllNewHeros);
```

---

# Output

```javascript id="d4x8pk"
[
 'thor',
 'Ironman',
 'spiderman',
 'superman',
 'flash',
 'batman'
]
```

---

# Explanation

```javascript id="f9q3tw"
...
```

spreads elements individually.

---

# `flat()`

Flattens nested arrays.

---

# Code

```javascript id="w3x7qk"
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);
```

---

# Output

```javascript id="r8m2ty"
[1,2,3,4,5,6,7,6,7,4,5]
```

---

# Explanation

```javascript id="v5q9wp"
flat(Infinity)
```

removes all nesting levels.

---

# `Array.isArray()`

Checks whether value is array.

---

# Code

```javascript id="n1x4rz"
console.log(Array.isArray("prashant"));
```

---

# Output

```javascript id="k1m6rp"
false
```

---

# Explanation

```javascript id="c8x3qw"
"prashant"
```

is string, not array.

---

# `Array.from()`

Converts iterable/string into array.

---

# Code

```javascript id="m5q7rz"
console.log(Array.from("Prashant"));
```

---

# Output

```javascript id="t9m2wp"
['P', 'r', 'a', 's', 'h', 'a', 'n', 't']
```

---

# Explanation

Each character becomes array element.

---

# Important Interview Point

## Code

```javascript id="u4x8pk"
console.log(Array.from({name: 'prashant'}));
```

---

# Output

```javascript id="f2q7ty"
[]
```

---

# Explanation

Object is NOT directly iterable.

We must explicitly specify:

* keys
* values

Example:

```javascript id="v6m1rz"
Array.from(Object.keys(obj))

Array.from(Object.values(obj))
```

---

# `Array.of()`

Creates array from multiple values.

---

# Code

```javascript id="j3x9qp"
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
```

---

# Output

```javascript id="n8m4tw"
[100, 200, 300]
```

---

# Explanation

Combines values into single array.

---

# Difference Between `concat()` and Spread Operator

| Feature       | `concat()` | Spread `...` |
| ------------- | ---------- | ------------ |
| Merges arrays | ✅ Yes      | ✅ Yes        |
| Modern syntax | ❌ No       | ✅ Yes        |
| Readability   | Medium     | Better       |

---

# Important Interview Points

---

## `push(array)` creates nested array

```javascript id="w5q2rk"
arr.push(arr2)
```

Output:

```javascript id="r1m7pz"
[1,2,[3,4]]
```

---

## Spread Operator

```javascript id="x9q4tw"
[...arr1, ...arr2]
```

is most commonly used in React and modern JS.

---

## `flat(Infinity)`

Removes all nested levels.

---

# Quick Revision Table

| Method            | Purpose                  |
| ----------------- | ------------------------ |
| `concat()`        | merge arrays             |
| `...`             | spread elements          |
| `flat()`          | flatten nested arrays    |
| `Array.isArray()` | check array              |
| `Array.from()`    | convert to array         |
| `Array.of()`      | create array from values |

---

# Quick Revision Examples

```javascript id="k6m2ry"
arr1.concat(arr2)

[...arr1, ...arr2]

arr.flat(Infinity)

Array.isArray(arr)

Array.from("hello")

Array.of(1,2,3)
```
