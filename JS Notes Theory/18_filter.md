# JavaScript Notes — `filter()`

---

# What is `filter()`?

`filter()` is an array method used to:

```javascript
create a new array containing only the elements
that satisfy a given condition
```

The original array remains unchanged.

---

# Syntax

## Arrow Function

```javascript
const newArray = array.filter((element) => {
    return condition;
});
```

---

## Implicit Return

```javascript
const newArray = array.filter(
    (element) => condition
);
```

---

# Important

`filter()` always returns:

```javascript
A NEW ARRAY
```

Unlike `forEach()`, it does not return `undefined`.

---

# Why `forEach()` Doesn't Work for Filtering

## Code

```javascript
const coding = ["js", "ruby", "java"]

const values = coding.forEach((item) => {
    return item;
})

console.log(values);
```

---

# Output

```javascript
undefined
```

---

# Why?

`forEach()` is designed for:

```javascript
performing actions
```

not returning data.

---

# `filter()` Example

## Code

```javascript
const myNums =
[1,2,3,4,5,6,7,8,9,10]

const newNums =
myNums.filter((num) => {
    return num > 4
})

console.log(newNums);
```

---

# Output

```javascript
[5, 6, 7, 8, 9, 10]
```

---

# Short Syntax (Implicit Return)

## Code

```javascript
const newNums =
myNums.filter(num => num > 4)

console.log(newNums);
```

---

# Output

```javascript
[5, 6, 7, 8, 9, 10]
```

---

# Important Rule

### Using `{}`

```javascript
myNums.filter((num) => {
    return num > 4
})
```

✅ Must write `return`

---

### Without `{}`

```javascript
myNums.filter((num) => num > 4)
```

✅ Return happens automatically

---

# Doing the Same Thing with `forEach()`

## Code

```javascript
const newNums = []

myNums.forEach((num) => {

    if(num > 4){
        newNums.push(num)
    }

})

console.log(newNums);
```

---

# Output

```javascript
[5, 6, 7, 8, 9, 10]
```

---

# Comparison

| Method      | Returns New Array? |
| ----------- | ------------------ |
| `forEach()` | ❌ No               |
| `filter()`  | ✅ Yes              |

---

# Filtering Array of Objects

This is one of the most important uses of `filter()`.

---

## Dataset

```javascript
const books = [
    {
        title: "Book One",
        genre: "Fiction",
        publish: 1981
    },

    {
        title: "Book Three",
        genre: "History",
        publish: 1999
    },

    {
        title: "Book Seven",
        genre: "History",
        publish: 1986
    }
]
```

---

# Example 1: Find All History Books

## Code

```javascript
let userBooks =
books.filter(
    (bk) => bk.genre === "History"
)

console.log(userBooks);
```

---

# Output

```javascript
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999
  },

  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986
  }
]
```

---

# Example 2: Multiple Conditions

## Code

```javascript
let userBooks =
books.filter((bk) => {

    return bk.publish >= 1995
           &&
           bk.genre === "History"

})

console.log(userBooks);
```

---

# Output

```javascript
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999
  }
]
```

---

# How It Works

For every book:

```javascript
bk.publish >= 1995
```

AND

```javascript
bk.genre === "History"
```

must both be true.

Only then the book is included.

---

# Common Conditions Used with `filter()`

### Numbers

```javascript
arr.filter(num => num > 10)
```

---

### Even Numbers

```javascript
arr.filter(num => num % 2 === 0)
```

---

### Odd Numbers

```javascript
arr.filter(num => num % 2 !== 0)
```

---

### Strings

```javascript
users.filter(
    user => user.name === "Prashant"
)
```

---

### Objects

```javascript
books.filter(
    book => book.genre === "Science"
)
```

---

# `filter()` vs `forEach()`

| Feature               | `filter()` | `forEach()` |
| --------------------- | ---------- | ----------- |
| Returns new array     | ✅          | ❌           |
| Used for selection    | ✅          | ❌           |
| Used for side effects | ❌          | ✅           |
| Can chain methods     | ✅          | ❌           |

---

# Interview Questions

### Q1. Does `filter()` modify the original array?

```javascript
No
```

It returns a new array.

---

### Q2. What does `filter()` return?

```javascript
A new array
```

containing only matching elements.

---

### Q3. Why does this return an empty array?

```javascript
arr.filter((num) => {
    num > 4
})
```

Because:

```javascript
return
```

is missing.

Correct:

```javascript
arr.filter((num) => {
    return num > 4
})
```

---

### Q4. Difference Between `filter()` and `forEach()`?

| `filter()`              | `forEach()`             |
| ----------------------- | ----------------------- |
| Returns array           | Returns undefined       |
| Used to select elements | Used to perform actions |

---

# Quick Revision

### Syntax

```javascript
array.filter((element) => {
    return condition;
})
```

---

### Short Syntax

```javascript
array.filter(
    element => condition
)
```

---

### Example

```javascript
const nums =
[1,2,3,4,5]

const result =
nums.filter(num => num > 3)
```

Output:

```javascript
[4,5]
```

---

# Most Important Interview Point

```javascript
filter()
```

returns only those elements for which the callback returns:

```javascript
true
```

Example:

```javascript
[1,2,3,4,5].filter(
    num => num > 3
)
```

Output:

```javascript
[4,5]
```

So remember:

```javascript
forEach() → perform action

filter() → select elements
```
