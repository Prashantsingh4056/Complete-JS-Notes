# JavaScript Notes — `map()`

---

# What is `map()`?

`map()` is an array method used to:

```javascript
transform each element of an array
and return a new array
```

The original array remains unchanged.

---

# Syntax

```javascript
const newArray = array.map(
    (element, index, array) => {
        return transformedValue;
    }
);
```

---

# Parameters

| Parameter | Meaning         |
| --------- | --------------- |
| `element` | Current element |
| `index`   | Current index   |
| `array`   | Original array  |

---

# Basic Example

## Code

```javascript
const numbers = [1, 2, 3];

const doubled =
numbers.map(num => num * 2);

console.log(doubled);
console.log(numbers);
```

---

# Output

```javascript
[2, 4, 6]
[1, 2, 3]
```

---

# Explanation

| Original | Result |
| -------- | ------ |
| 1        | 2      |
| 2        | 4      |
| 3        | 6      |

Each element is multiplied by 2.

---

# Important

`map()` does **not modify** the original array.

```javascript
console.log(numbers);
```

Output:

```javascript
[1, 2, 3]
```

remains unchanged.

---

# Explicit Return

```javascript
const newNums =
myNumbers.map((num) => {
    return num + 10;
});
```

---

# Implicit Return

```javascript
const newNums =
myNumbers.map(num => num + 10);
```

---

# Example

## Code

```javascript
const myNumbers =
[1,2,3,4,5];

const newNums =
myNumbers.map(num => num + 10);

console.log(newNums);
```

---

# Output

```javascript
[11, 12, 13, 14, 15]
```

---

# `map()` vs `forEach()`

| Feature                  | map() | forEach() |
| ------------------------ | ----- | --------- |
| Returns new array        | ✅     | ❌         |
| Used for transformation  | ✅     | ❌         |
| Original array unchanged | ✅     | ✅         |
| Chainable                | ✅     | ❌         |

---

# Example

### map()

```javascript
const nums = [1,2,3];

const result =
nums.map(num => num * 2);

console.log(result);
```

Output:

```javascript
[2,4,6]
```

---

### forEach()

```javascript
const nums = [1,2,3];

const result =
nums.forEach(num => num * 2);

console.log(result);
```

Output:

```javascript
undefined
```

---

# Chaining

One of the biggest advantages of `map()` is:

```javascript
Method Chaining
```

You can connect multiple array methods together.

---

# Your Example

## Code

```javascript
const newNums =
myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

console.log(newNums);
```

---

# Step-by-Step Execution

### Original Array

```javascript
[1,2,3,4,5,6,7,8,9,10]
```

---

### First map()

```javascript
.map(num => num * 10)
```

Output:

```javascript
[10,20,30,40,50,60,70,80,90,100]
```

---

### Second map()

```javascript
.map(num => num + 1)
```

Output:

```javascript
[11,21,31,41,51,61,71,81,91,101]
```

---

### filter()

```javascript
.filter(num => num >= 40)
```

Output:

```javascript
[41,51,61,71,81,91,101]
```

---

# Final Output

```javascript
[
  41,
  51,
  61,
  71,
  81,
  91,
  101
]
```

---

# Visualization

```javascript
[1,2,3,4,5,6,7,8,9,10]

        |
        ↓

map(num => num * 10)

        |

[10,20,30,40,50,60,70,80,90,100]

        |
        ↓

map(num => num + 1)

        |

[11,21,31,41,51,61,71,81,91,101]

        |
        ↓

filter(num => num >= 40)

        |

[41,51,61,71,81,91,101]
```

---

# Common Uses of `map()`

### Convert Numbers

```javascript
const nums = [1,2,3];

nums.map(num => num * 2);
```

Output:

```javascript
[2,4,6]
```

---

### Convert Strings

```javascript
const names =
["prashant", "rahul"];

const result =
names.map(name =>
    name.toUpperCase()
);
```

Output:

```javascript
["PRASHANT", "RAHUL"]
```

---

### Extract Property from Objects

```javascript
const users = [
    {name: "Prashant"},
    {name: "Rahul"}
];

const names =
users.map(user => user.name);
```

Output:

```javascript
["Prashant", "Rahul"]
```

---

# Interview Questions

### Q1. Does `map()` modify the original array?

```javascript
No
```

It returns a new array.

---

### Q2. What does `map()` return?

```javascript
A new transformed array
```

---

### Q3. Difference Between `map()` and `filter()`?

| map()                           | filter()            |
| ------------------------------- | ------------------- |
| Transforms elements             | Selects elements    |
| Same number of elements usually | May reduce elements |
| Returns new array               | Returns new array   |

Example:

```javascript
[1,2,3].map(num => num * 2)
```

Output:

```javascript
[2,4,6]
```

---

```javascript
[1,2,3].filter(num => num > 1)
```

Output:

```javascript
[2,3]
```

---

### Q4. Can we chain `map()` and `filter()`?

```javascript
Yes
```

Example:

```javascript
arr
 .map(...)
 .filter(...)
```

This is a very common interview and real-world pattern.

---

# Quick Revision

### Syntax

```javascript
array.map(
    (element) => transformedValue
)
```

---

### Example

```javascript
const nums = [1,2,3];

const result =
nums.map(num => num * 2);
```

Output:

```javascript
[2,4,6]
```

---

### Chaining

```javascript
arr
 .map(...)
 .map(...)
 .filter(...)
```

---

# Most Important Interview Point

### `map()` vs `filter()`

```javascript
map()
```

➡ Changes every element.

Example:

```javascript
[1,2,3].map(num => num * 2)
```

Output:

```javascript
[2,4,6]
```

---

```javascript
filter()
```

➡ Keeps only matching elements.

Example:

```javascript
[1,2,3].filter(num => num > 1)
```

Output:

```javascript
[2,3]
```

### Easy Memory Trick

```javascript
map()    → Modify

filter() → Select
```

These two methods are among the most frequently used array methods in React, Node.js, APIs, and frontend interviews.
