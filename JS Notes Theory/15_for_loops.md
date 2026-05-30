
# Full Code 
---

```js
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// what if we wrote : for(let i = 0 ; i < n ; i){}  ?
 

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
```

---
# Explanation :
---

# JavaScript Notes — For Loops

---

# What is a Loop?

A loop is used to:

```javascript
execute a block of code multiple times
```

without writing the same code repeatedly.

---

# `for` Loop Syntax

```javascript
for(initialization; condition; increment/decrement){
    // code
}
```

---

# Components of a `for` Loop

```javascript
for(let i = 0; i <= 10; i++)
```

| Part        | Meaning                                |
| ----------- | -------------------------------------- |
| `let i = 0` | Initialization (runs once)             |
| `i <= 10`   | Condition (checked every iteration)    |
| `i++`       | Increment (runs after every iteration) |

---

# Basic Example

## Code

```javascript
for(let i = 0; i <= 10; i++){
    console.log(i);
}
```

---

# Output

```javascript
0
1
2
3
4
5
6
7
8
9
10
```

---

# Using Conditions Inside Loop

## Code

```javascript
for(let i = 0; i <= 10; i++){

    if(i == 5){
        console.log("5 is best number");
    }

    console.log(i);
}
```

---

# Output

```javascript
0
1
2
3
4
5 is best number
5
6
7
8
9
10
```

---

# Loop Variable Scope

## Code

```javascript
for(let i = 0; i < 5; i++){

}

console.log(i);
```

---

# Output

```javascript
ReferenceError
```

---

# Explanation

`let` is block scoped.

The variable exists only inside:

```javascript
{}
```

of the loop.

---

# Nested Loops

A loop inside another loop.

---

# Example

```javascript
for(let i = 1; i <= 3; i++){

    for(let j = 1; j <= 3; j++){

        console.log(i, j);
    }

}
```

---

# Output

```javascript
1 1
1 2
1 3

2 1
2 2
2 3

3 1
3 2
3 3
```

---

# Multiplication Table Example

## Code

```javascript
for(let i = 1; i <= 10; i++){

    for(let j = 1; j <= 10; j++){

        console.log(
            i + "*" + j + "=" + i*j
        );
    }
}
```

---

# Sample Output

```javascript
1*1 = 1
1*2 = 2
1*3 = 3
...
10*10 = 100
```

---

# Looping Through Arrays

---

# Code

```javascript
let myArray = [
    "flash",
    "batman",
    "superman"
]

for(let index = 0;
    index < myArray.length;
    index++){

    console.log(myArray[index]);
}
```

---

# Output

```javascript
flash
batman
superman
```

---

# Important

```javascript
myArray.length
```

returns:

```javascript
3
```

---

# Common Mistake

## Code

```javascript
for(let i = 0; i < n; i){

}
```

---

# Problem

```javascript
i
```

never changes.

Condition always remains true.

---

# Result

```javascript
Infinite Loop
```

or browser/program may hang.

---

# Correct Version

```javascript
for(let i = 0; i < n; i++){
}
```

or

```javascript
for(let i = 0; i < n; i += 1){
}
```

---

# `break` Statement

Used to immediately exit a loop.

---

# Example

## Code

```javascript
for(let i = 1; i <= 20; i++){

    if(i == 5){
        console.log("Detected 5");
        break;
    }

    console.log(i);
}
```

---

# Output

```javascript
1
2
3
4
Detected 5
```

---

# Explanation

As soon as:

```javascript
i == 5
```

becomes true,

the loop stops completely.

---

# `continue` Statement

Used to skip the current iteration.

---

# Example

## Code

```javascript
for(let i = 1; i <= 20; i++){

    if(i == 5){
        console.log("Detected 5");
        continue;
    }

    console.log(`Value of i is ${i}`);
}
```

---

# Output

```javascript
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4

Detected 5

Value of i is 6
Value of i is 7
...
Value of i is 20
```

---

# Explanation

At:

```javascript
i = 5
```

JavaScript:

* executes `continue`
* skips remaining code of that iteration
* moves to next iteration

---

# `break` vs `continue`

| Statement  | Effect                  |
| ---------- | ----------------------- |
| `break`    | Stops entire loop       |
| `continue` | Skips current iteration |

---

# Example Comparison

### Using `break`

```javascript
for(let i=1;i<=5;i++){

    if(i==3) break;

    console.log(i);
}
```

Output:

```javascript
1
2
```

---

### Using `continue`

```javascript
for(let i=1;i<=5;i++){

    if(i==3) continue;

    console.log(i);
}
```

Output:

```javascript
1
2
4
5
```

---

# Important Interview Points

### Loop Variable Scope

```javascript
for(let i=0;i<5;i++)
```

`i` exists only inside loop.

---

### Nested Loop Time Complexity

```javascript
for(...)
   for(...)
```

Usually:

```javascript
O(n²)
```

---

### Infinite Loop

Caused when update step is missing:

```javascript
for(let i=0;i<n;i)
```

---

### `break`

Exits loop immediately.

---

### `continue`

Skips only current iteration.

---

# Quick Revision Table

| Concept           | Purpose          |
| ----------------- | ---------------- |
| `for` loop        | repeat code      |
| nested loop       | loop inside loop |
| `array.length`    | size of array    |
| `break`           | stop loop        |
| `continue`        | skip iteration   |
| missing increment | infinite loop    |

---

# Quick Revision Examples

```javascript
for(let i=0;i<5;i++)
```

---

```javascript
myArray[index]
```

---

```javascript
break;
```

---

```javascript
continue;
```

---

# Most Important Interview Question

## What happens here?

```javascript
for(let i=0;i<5;i){

}
```

### Answer

`i` never changes, so the condition remains true forever, resulting in an:

```javascript
Infinite Loop
```
