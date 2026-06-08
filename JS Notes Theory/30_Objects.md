```js

function multiplyBy5(num){
    this.num = num
    return num*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));     // 25
console.log(multiplyBy5.power);    // 2
console.log(multiplyBy5.prototype);    // {}


function createUser(username , score){
    this.username = username
    this.score = score
}


// creating custom properties / methods

createUser.prototype.increment = function(){
    // score++  // incorrect way
    this.score++; 
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

// new keyword is impotant here to add new properties we created
const chai = new createUser("chai" , 25);
const tea = new createUser("tea" , 250)

chai.printMe()


// Notes : 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
```


This topic is the bridge between **constructor functions** and **JavaScript prototypes**. Understanding this will make classes in JavaScript much easier later.

---

# Functions are Objects in JavaScript

Most languages treat functions differently.

In JavaScript:

```js
function sayHello() {
    console.log("Hello");
}
```

is actually an object.

That's why you can do:

```js
sayHello.power = 2;
```

or

```js
multiplyBy5.power = 2;
```

---

## Example

```js
function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2;
```

Now the function object looks roughly like:

```text
multiplyBy5
│
├── code() { return num*5 }
├── power = 2
└── prototype = {}
```

Therefore:

```js
console.log(multiplyBy5.power);
```

Output:

```text
2
```

---

# Why does prototype exist?

Every normal function automatically gets a:

```js
function abc(){}
```

↓

```js
abc.prototype
```

Output:

```js
{}
```

So:

```js
console.log(multiplyBy5.prototype);
```

prints:

```js
{}
```

Initially it's just an empty object.

---

# Constructor Function

```js
function createUser(username, score){
    this.username = username;
    this.score = score;
}
```

This is intended to be used with:

```js
new createUser(...)
```

---

# Adding Methods Using Prototype

Instead of:

```js
function createUser(username, score){
    this.username = username;
    this.score = score;

    this.increment = function(){
        this.score++;
    };
}
```

which creates a new function for every user,

we do:

```js
createUser.prototype.increment = function(){
    this.score++;
}
```

and

```js
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
```

---

## What does this mean?

Now:

```js
createUser.prototype
```

contains:

```text
{
   increment: fn(),
   printMe: fn()
}
```

---

# Why use Prototype?

Without prototype:

```text
chai
 ├── username
 ├── score
 ├── increment()
 └── printMe()

tea
 ├── username
 ├── score
 ├── increment()
 └── printMe()
```

Each object gets its own copy.

---

With prototype:

```text
chai
 ├── username
 └── score
        │
        ▼
createUser.prototype
 ├── increment()
 └── printMe()

tea
 ├── username
 └── score
        │
        ▼
createUser.prototype
```

Both share the same methods.

Much more memory efficient.

---

# Why is `new` Required?

Suppose:

```js
const chai = createUser("chai", 25);
```

without `new`.

Inside constructor:

```js
this.username = username;
```

`this` refers to the global object.

So:

```js
window.username = "chai";
window.score = 25;
```

in browser.

And:

```js
chai
```

becomes:

```js
undefined
```

because constructor returns nothing.

---

# What Happens with `new`?

```js
const chai = new createUser("chai", 25);
```

JavaScript does:

---

### Step 1

Creates empty object

```js
{}
```

---

### Step 2

Sets

```js
this = {}
```

---

### Step 3

Runs constructor

```js
this.username = "chai";
this.score = 25;
```

Object becomes:

```js
{
    username: "chai",
    score: 25
}
```

---

### Step 4

Links prototype

```text
chai
   │
   ▼
createUser.prototype
```

This is the most important step.

---

### Step 5

Returns the object

```js
chai
```

becomes:

```js
{
    username: "chai",
    score: 25
}
```

---

# How does `chai.printMe()` work?

Object:

```js
const chai = new createUser("chai", 25);
```

contains:

```js
{
   username: "chai",
   score: 25
}
```

Notice:

```js
printMe
```

is NOT inside the object.

When JS sees:

```js
chai.printMe()
```

it searches:

### 1. Inside chai

```text
username ✓
score ✓
printMe ✗
```

Not found.

---

### 2. Go to Prototype

```text
createUser.prototype
```

Finds:

```js
printMe()
```

and executes it.

Output:

```text
price is 25
```

---

# Prototype Chain Visualization

```text
chai
│
├── username = "chai"
├── score = 25
│
▼
createUser.prototype
│
├── increment()
├── printMe()
│
▼
Object.prototype
│
├── hasOwnProperty()
├── toString()
├── valueOf()
│
▼
null
```

This chain is called the **Prototype Chain**.

---

# Why `this.score++` Works

When:

```js
chai.increment();
```

runs,

inside:

```js
createUser.prototype.increment = function(){
    this.score++;
}
```

`this` refers to the object that called the method.

So:

```js
this === chai
```

Therefore:

```js
this.score++;
```

becomes:

```js
chai.score++;
```

25 → 26

---

# Interview Question

What is the difference between:

```js
this.method = function(){}
```

and

```js
Constructor.prototype.method = function(){}
```

### First Approach

```js
this.method = function(){}
```

Every object gets its own copy.

```text
1000 objects
=
1000 method copies
```

---

### Second Approach

```js
Constructor.prototype.method = function(){}
```

All objects share one method.

```text
1000 objects
=
1 method copy
```

Preferred approach.

---

## Final Mental Model

```text
Function
   │
   ├── Own Properties
   │     power = 2
   │
   ├── Prototype Object
   │     increment()
   │     printMe()
   │
   ▼
new Constructor()
   │
Creates Object
   │
Links Object → Constructor.prototype
   │
Returns Object
```

This prototype mechanism is exactly what the `class` syntax in JavaScript uses internally. When you learn ES6 classes, you'll see they're largely syntactic sugar over constructor functions and prototypes.
