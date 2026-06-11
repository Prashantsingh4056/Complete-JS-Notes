# JavaScript Notes — Closures

This is one of the **most important JavaScript concepts** and is heavily asked in interviews.

---

# What is a Closure?

### Definition

> A closure is created when a function remembers and can access variables from its lexical scope even after the outer function has finished execution.

In simple words:

> A function "remembers" the variables around it when it was created.

---

# 1. Lexical Scope

Before understanding closures, understand lexical scope.

```javascript
function outer() {
    let username = "Prashant";

    function inner() {
        console.log(username);
    }

    inner();
}

outer();
```

### Output

```text
Prashant
```

---

## Why?

`inner()` is written inside `outer()`.

Therefore `inner()` can access everything available inside `outer()`.

```text
outer()
│
├── username = "Prashant"
│
└── inner()
      ↓
   can access username
```

---

## Reverse is NOT true

```javascript
function outer() {

    function inner() {
        let secret = "123";
    }

    console.log(secret); // Error
}
```

### Output

```text
ReferenceError
```

Because parent cannot access child's variables.

```text
outer()
│
└── inner()
      │
      └── secret
```

Access allowed:

```text
child → parent ✅
```

Not allowed:

```text
parent → child ❌
```

---

# Your Example

```javascript
function outer() {
    let username = "Prashant";

    function inner() {
        console.log("inner", username);
    }

    function innerTwo() {
        console.log("innerTwo", username);
    }

    inner();
    innerTwo();
}

outer();
```

### Output

```text
inner Prashant
innerTwo Prashant
```

Both functions can access `username`.

---

# What is Lexical Environment?

Whenever a function is created, it remembers:

```text
1. The function code
2. Variables around it
```

This remembered data is called:

```text
Lexical Environment
```

---

# Actual Closure Example

```javascript
function makeFunc() {
    const name = "Mozilla";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();

myFunc();
```

### Output

```text
Mozilla
```

---

# What Happens Internally?

## Step 1

```javascript
makeFunc()
```

creates:

```javascript
name = "Mozilla"
```

and

```javascript
displayName()
```

---

## Step 2

```javascript
return displayName;
```

returns the function.

---

## Step 3

Normally we would think:

```text
makeFunc() finished
↓
name destroyed
```

But JavaScript does something special.

It stores:

```text
displayName function
+
its lexical environment
```

Together.

---

### Internally

```javascript
myFunc =
{
   function: displayName,
   lexicalScope: {
      name: "Mozilla"
   }
}
```

---

## Step 4

```javascript
myFunc();
```

runs

```javascript
console.log(name);
```

Even though `makeFunc()` already ended.

Because closure preserved:

```javascript
name = "Mozilla"
```

---

# Memory Diagram

After:

```javascript
const myFunc = makeFunc();
```

Memory:

```text
Global Memory
│
├── myFunc
│      │
│      ├── displayName()
│      │
│      └── remembers
│             name = "Mozilla"
│
```

This remembered scope is the closure.

---

# Real World Example

Suppose:

```javascript
function counter() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}

const increment = counter();

increment();
increment();
increment();
```

### Output

```text
1
2
3
```

Why?

Because returned function remembers:

```javascript
count
```

even after `counter()` finishes.

---

# Button Example (Important)

---

## Wrong Version

```javascript
document.getElementById('orange').onclick =
    clickHandler("orange");
```

and

```javascript
function clickHandler(color){
    document.body.style.backgroundColor = color;
}
```

### What happens?

Immediately executes:

```javascript
clickHandler("orange");
```

during page load.

Not on click.

---

Equivalent to:

```javascript
document.body.style.backgroundColor = "orange";
```

So color changes instantly.

---

# Correct Version

```javascript
function clickHandler(color){

    return function(){

        document.body.style.backgroundColor = color;

    }
}
```

---

## Why does it work?

When:

```javascript
clickHandler("orange")
```

runs,

it returns:

```javascript
function(){
    document.body.style.backgroundColor = color;
}
```

But this function remembers:

```javascript
color = "orange"
```

through closure.

---

### Internally

```javascript
orangeButton.onclick =
{
   function() {
      document.body.style.backgroundColor = color;
   },

   closure: {
      color: "orange"
   }
}
```

---

For green button:

```javascript
greenButton.onclick =
{
   function() {
      document.body.style.backgroundColor = color;
   },

   closure: {
      color: "green"
   }
}
```

---

# When Orange Button Clicks

Browser executes:

```javascript
function(){
    document.body.style.backgroundColor = color;
}
```

Closure provides:

```javascript
color = "orange"
```

Result:

```javascript
document.body.style.backgroundColor = "orange";
```

---

# Visual Representation

```text
clickHandler("orange")
        │
        ▼
returns function
        │
        ▼
remembers color = "orange"
        │
        ▼
stored as onclick handler
        │
        ▼
button clicked
        │
        ▼
background becomes orange
```

---

# Why Closures Are Important

Closures are used in:

### Event Handlers

```javascript
button.onclick = ...
```

### Timers

```javascript
setTimeout()
setInterval()
```

### Data Privacy

```javascript
private variables
```

### React Hooks

```javascript
useState()
useEffect()
```

### Currying

```javascript
sum(5)(10)
```

### Memoization

```javascript
Caching results
```

---

# Interview Definition

> A closure is the combination of a function and the lexical environment within which that function was declared. It allows the function to access variables from its outer scope even after the outer function has finished executing.

---

# Quick Revision

```javascript
function outer() {
    let name = "Prashant";

    return function() {
        console.log(name);
    };
}

const fn = outer();

fn(); // Prashant
```

### Why?

```text
Returned function
+
Remembered variable "name"
=
Closure
```

### One-line Memory Trick

```text
Closure = Function + Remembered Lexical Scope
```
