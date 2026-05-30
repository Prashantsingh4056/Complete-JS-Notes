# JavaScript Notes — `reduce()`

---

# What is `reduce()`?

`reduce()` is an array method used to:

```javascript id="g4k8tq"
reduce an entire array into a single value
```

Examples:

* Sum of elements
* Product of elements
* Total cart price
* Counting occurrences
* Building objects

---

# Syntax

```javascript id="g5ep0z"
array.reduce(
    (accumulator, currentValue) => {
        return updatedAccumulator;
    },
    initialValue
)
```

---

# Parameters

| Parameter               | Meaning                               |
| ----------------------- | ------------------------------------- |
| `accumulator` (`acc`)   | Stores result from previous iteration |
| `currentValue` (`curr`) | Current element being processed       |
| `initialValue`          | Starting value of accumulator         |

---

# Basic Example

## Code

```javascript id="rgnkjy"
const array = [1,2,3,4];

const sum =
array.reduce(
    (acc,curr) => acc + curr,
    0
);

console.log(sum);
```

---

# Output

```javascript id="2gxjoo"
10
```

---

# How It Works

### Array

```javascript id="cgb34m"
[1,2,3,4]
```

### Initial Value

```javascript id="1k5dya"
acc = 0
```

---

| Iteration | acc | curr | Return |
| --------- | --- | ---- | ------ |
| 1         | 0   | 1    | 1      |
| 2         | 1   | 2    | 3      |
| 3         | 3   | 3    | 6      |
| 4         | 6   | 4    | 10     |

---

# Final Result

```javascript id="yl1ad3"
10
```

---

# Visual Representation

```javascript id="yj97aq"
acc = 0

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

Final Answer:

```javascript id="9nl7gq"
10
```

---

# Example with Normal Function

## Code

```javascript id="ijiv9n"
const myNums = [1,2,3]

const myTotal =
myNums.reduce(function(acc,curr){

    return acc + curr;

}, 0);

console.log(myTotal);
```

---

# Output

```javascript id="y54nyn"
6
```

---

# Arrow Function Version

## Code

```javascript id="ic42uz"
const myNums = [1,2,3]

const myTotal =
myNums.reduce(
    (acc,curr) => acc + curr,
    0
)

console.log(myTotal);
```

---

# Output

```javascript id="vllzk9"
6
```

---

# Understanding `acc` and `curr`

## Code

```javascript id="e6rh9m"
const myNums = [1,2,3]

myNums.reduce((acc,curr) => {

    console.log(
        `acc: ${acc},
         curr: ${curr}`
    );

    return acc + curr;

},0);
```

---

# Output

```javascript id="eqkikg"
acc: 0 curr: 1
acc: 1 curr: 2
acc: 3 curr: 3
```

---

# Step-by-Step

### Iteration 1

```javascript id="tbbk9j"
acc = 0
curr = 1
```

Return:

```javascript id="4z4lko"
1
```

---

### Iteration 2

```javascript id="8xh95d"
acc = 1
curr = 2
```

Return:

```javascript id="dq1l2z"
3
```

---

### Iteration 3

```javascript id="ibck7s"
acc = 3
curr = 3
```

Return:

```javascript id="lnf8jx"
6
```

---

# Real World Example — Shopping Cart

This is one of the most common interview examples.

---

## Data

```javascript id="qbrcgr"
const shoppingCart = [

    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    }

]
```

---

# Goal

Calculate:

```javascript id="n8pwht"
Total Price
```

---

# Code

```javascript id="9f6iwq"
const priceToPay =
shoppingCart.reduce(
    (acc,item) =>
        acc + item.price,
    0
)

console.log(priceToPay);
```

---

# Calculation

```javascript id="sllpyo"
0 + 2999
= 2999

2999 + 999
= 3998

3998 + 5999
= 9997

9997 + 12999
= 22996
```

---

# Output

```javascript id="jkx1fx"
22996
```

---

# Why Use `reduce()`?

Without `reduce()`:

```javascript id="10fxya"
let total = 0;

for(let item of shoppingCart){
    total += item.price;
}
```

With `reduce()`:

```javascript id="i4kkro"
const total =
shoppingCart.reduce(
    (acc,item) =>
        acc + item.price,
    0
);
```

Cleaner and more readable.

---

# Common Uses of `reduce()`

---

## Sum of Array

```javascript id="3j36xt"
[1,2,3,4]
.reduce(
    (acc,curr) => acc + curr,
    0
)
```

Output:

```javascript id="6qllov"
10
```

---

## Product of Array

```javascript id="rtx9gb"
[1,2,3,4]
.reduce(
    (acc,curr) => acc * curr,
    1
)
```

Output:

```javascript id="pn9eza"
24
```

---

## Find Maximum

```javascript id="8chf9m"
const max =
[2,5,1,8,3]
.reduce(
    (acc,curr) =>
        Math.max(acc,curr)
);
```

Output:

```javascript id="lklhm0"
8
```

---

## Count Elements

```javascript id="6m4nkx"
const fruits =
["apple","banana","apple"];

const count =
fruits.reduce((acc,fruit)=>{

    acc[fruit] =
        (acc[fruit] || 0) + 1;

    return acc;

},{});
```

Output:

```javascript id="yjlwmu"
{
  apple: 2,
  banana: 1
}
```

---

# `map()` vs `filter()` vs `reduce()`

| Method     | Purpose                    |
| ---------- | -------------------------- |
| `map()`    | Transform each element     |
| `filter()` | Select elements            |
| `reduce()` | Convert array to one value |

---

### Example

Array:

```javascript id="z0pdqs"
[1,2,3,4]
```

---

### map()

```javascript id="vvjg4h"
arr.map(num => num * 2)
```

Output:

```javascript id="e6r3za"
[2,4,6,8]
```

---

### filter()

```javascript id="luuvn0"
arr.filter(num => num > 2)
```

Output:

```javascript id="zktw7l"
[3,4]
```

---

### reduce()

```javascript id="s2tr8t"
arr.reduce(
    (acc,curr) =>
    acc + curr,
    0
)
```

Output:

```javascript id="okxb0j"
10
```

---

# Interview Questions

### Q1. What does `reduce()` return?

```javascript id="0mfbvx"
A single value
```

(Number, String, Object, Array, etc.)

---

### Q2. What is the role of `accumulator`?

It stores the result of previous iterations.

---

### Q3. What is `initialValue`?

Starting value of accumulator.

Example:

```javascript id="pmmad7"
.reduce(
    (acc,curr)=>acc+curr,
    0
)
```

Here:

```javascript id="ecw4bd"
0
```

is the initial value.

---

# Quick Revision

### Syntax

```javascript id="g0klvp"
array.reduce(
    (acc,curr)=>{
        return updatedAcc;
    },
    initialValue
)
```

---

### Sum Example

```javascript id="ysw4do"
const total =
[1,2,3,4]
.reduce(
    (acc,curr)=>
        acc+curr,
    0
)
```

Output:

```javascript id="it28mj"
10
```

---

### Shopping Cart Example

```javascript id="jsk7vc"
const total =
cart.reduce(
    (acc,item)=>
        acc + item.price,
    0
)
```

---

# Most Important Interview Point

Think of `reduce()` as:

```javascript id="x5m3dj"
Take an array
↓
Process every element
↓
Produce ONE final value
```

### Easy Memory Trick

```javascript id="bfw2gd"
map()    → Modify

filter() → Select

reduce() → Combine
```

These three (`map`, `filter`, `reduce`) are the most frequently used array methods in React, Node.js, frontend development, and JavaScript interviews.
