# JavaScript Notes — While Loop & Do-While Loop

---

# What is a While Loop?

A `while` loop executes a block of code:

```javascript
as long as the condition remains true
```

---

# Syntax

```javascript
while(condition){
    // code
}
```

---

# Basic Example

## Code

```javascript
let index = 0

while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}
```

---

# Output

```javascript
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
```

---

# How It Works

| Iteration | index |
| --------- | ----- |
| 1         | 0     |
| 2         | 2     |
| 3         | 4     |
| 4         | 6     |
| 5         | 8     |
| 6         | 10    |

Loop stops when:

```javascript
index = 12
```

because:

```javascript
12 <= 10   // false
```

---

# Traversing an Array Using While Loop

## Code

```javascript
let myArray = [
    "flash",
    "batman",
    "superman"
]

let arr = 0

while(arr < myArray.length){

    console.log(
        `Value is ${myArray[arr]}`
    );

    arr = arr + 1
}
```

---

# Output

```javascript
Value is flash
Value is batman
Value is superman
```

---

# Explanation

### Initial State

```javascript
arr = 0
```

### Iteration 1

```javascript
myArray[0]
```

↓

```javascript
flash
```

---

### Iteration 2

```javascript
myArray[1]
```

↓

```javascript
batman
```

---

### Iteration 3

```javascript
myArray[2]
```

↓

```javascript
superman
```

---

Loop stops when:

```javascript
arr = 3
```

because:

```javascript
3 < 3
```

↓

```javascript
false
```

---

# Infinite Loop Warning

## Code

```javascript
let i = 0

while(i < 5){
    console.log(i);
}
```

---

# Problem

```javascript
i
```

never changes.

Condition remains true forever.

---

# Result

```javascript
Infinite Loop
```

---

# Correct Version

```javascript
let i = 0

while(i < 5){

    console.log(i);

    i++
}
```

---

# Do-While Loop

A `do-while` loop executes the code:

```javascript
at least once
```

even if condition is false.

---

# Syntax

```javascript
do{
    // code
}
while(condition);
```

---

# Example

## Code

```javascript
let score = 11

do{
    console.log(
        `Score is ${score}`
    );

    score++

}
while(score <= 10);
```

---

# Output

```javascript
Score is 11
```

---

# Why Does It Run?

Condition:

```javascript
score <= 10
```

↓

```javascript
11 <= 10
```

↓

```javascript
false
```

---

But in a `do-while` loop:

```javascript
do{
   // code executes first
}
while(condition)
```

The code block runs before checking the condition.

---

# Comparison: While vs Do-While

### While Loop

```javascript
let score = 11

while(score <= 10){
    console.log(score);
}
```

### Output

```javascript
No Output
```

Because condition is checked first.

---

### Do-While Loop

```javascript
let score = 11

do{
    console.log(score);
}
while(score <= 10)
```

### Output

```javascript
11
```

Because code executes once before checking condition.

---

# While vs Do-While

| Feature                                  | While | Do-While |
| ---------------------------------------- | ----- | -------- |
| Condition checked first                  | ✅     | ❌        |
| Executes at least once                   | ❌     | ✅        |
| Suitable when iterations may be 0        | ✅     | ❌        |
| Suitable when one execution is mandatory | ❌     | ✅        |

---

# Important Interview Points

### While Loop

```javascript
while(condition)
```

checks condition first.

---

### Do-While Loop

```javascript
do{
}
while(condition)
```

runs once before checking condition.

---

### Infinite Loop

Occurs when loop variable is not updated.

Example:

```javascript
while(i < 10){

}
```

---

### Array Traversal

Can be done using:

```javascript
while(index < array.length)
```

---

# Quick Revision Table

| Concept         | Purpose                        |
| --------------- | ------------------------------ |
| `while`         | repeat while condition is true |
| `do-while`      | execute at least once          |
| `array.length`  | number of elements             |
| update variable | avoid infinite loops           |
| condition       | controls loop execution        |

---

# Quick Revision Examples

```javascript
while(i < 10){
    i++
}
```

---

```javascript
while(index < arr.length){
}
```

---

```javascript
do{
    console.log("Hello");
}
while(false)
```

Output:

```javascript
Hello
```

---

# Most Important Interview Question

## Difference Between `while` and `do-while`?

| While                  | Do-While             |
| ---------------------- | -------------------- |
| Checks condition first | Executes first       |
| May run 0 times        | Runs at least 1 time |

Example:

```javascript
let x = 11
```

### While

```javascript
while(x <= 10){
}
```

Output:

```javascript
No Output
```

### Do-While

```javascript
do{
   console.log(x)
}
while(x <= 10)
```

Output:

```javascript
11
```
