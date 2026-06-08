# Code: 

```js

let myName = "Prashant"

let myname2 = "prashant       "

console.log(myName.length);


// we want our custom property that returns the true length of string excluding trailing spaces
// console.log(myname2.trueLength);


let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

// here we are declaring custom methods directly on the Object to make it accessible by array ,string , ...
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all  objects");
}

// calling

// with objects
heroPower.hitesh()

// with arrays
myHeros.hitesh()


// Q. But if we inject a method to array only , will it be available in Object
Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

myHeros.heyHitesh();
// heroPower.heyHitesh();   // error : heroPower.heyHitesh is not a function



// Inheritance 

const user = {
    name: "john",
    email: "john@gm.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= user  // outdated approach 

// protypal inheritance
Object.setPrototypeOf(TeachingSupport , Teacher);


// Coming back to main Question : 
let anotherUserName = "PrashantSingh   "     

String.prototype.trueLength = function(){
    console.log(`${this}`);   // PrashantSingh   
    // console.log(`${this.name}`);   // undefined
    console.log(`The true Length is : ${this.trim().length}`);  // The true Length is : 13
}

anotherUserName.trueLength()


"prashant".trueLength()
// Output : 
// prashant
// The true Length is : 8


"iceTea".trueLength()
// iceTea
// The true Length is : 6
```

--- 

# Explanation

---

Excellent. You have now reached one of the most important topics in JavaScript: **Prototypes and Inheritance**.

What you studied in this code can be summarized as:

---

# 1. Everything in JavaScript is an Object (almost)

You created:

```js
let myName = "Prashant"
let myHeros = ["thor", "spiderman"]
```

Even though these look like a string and an array, JavaScript internally wraps them with objects.

That's why:

```js
myName.length
myHeros.push("ironman")
```

work.

Because:

```js
String.prototype
Array.prototype
```

already contain methods and properties.

---

# 2. Adding Custom Methods Using Prototype

You wrote:

```js
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
}
```

Now every object inherits from `Object.prototype`.

Therefore:

```js
heroPower.hitesh()
```

works.

And surprisingly:

```js
myHeros.hitesh()
```

also works.

Output:

```js
hitesh is present in all objects
```

---

## Why does Array get it too?

Because the prototype chain is:

```text
myHeros
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null
```

When JS cannot find:

```js
myHeros.hitesh
```

inside the array, it climbs up:

```text
Array.prototype
```

not found →

```text
Object.prototype
```

found ✅

and executes it.

---

# 3. Array Specific Prototype Methods

You added:

```js
Array.prototype.heyHitesh = function(){
    console.log("hitesh says hello");
}
```

Now only arrays can access it.

```js
myHeros.heyHitesh()
```

✅ Works

Output:

```js
hitesh says hello
```

---

### Why doesn't this work?

```js
heroPower.heyHitesh()
```

❌ Error

Because:

```text
heroPower
   ↓
Object.prototype
   ↓
null
```

There is no:

```text
Array.prototype
```

in its prototype chain.

---

# 4. Prototype Chain

Consider:

```js
let myHeros = ["thor", "spiderman"]
```

Prototype chain:

```text
myHeros
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null
```

---

For strings:

```js
"Prashant"
```

Prototype chain:

```text
String.prototype
   ↓
Object.prototype
   ↓
null
```

---

# 5. Inheritance

You created:

```js
const user = {
    name: "john",
    email: "john@gm.com"
}
```

---

```js
const Teacher = {
    makeVideo: true
}
```

---

### Old Style Inheritance

```js
Teacher.__proto__ = user
```

Now:

```js
Teacher.name
```

Output:

```js
john
```

because JS searches:

```text
Teacher
   ↓
user
```

and finds `name`.

---

### Modern Way

```js
Object.setPrototypeOf(TeachingSupport, Teacher)
```

Now:

```text
TeachingSupport
       ↓
Teacher
       ↓
user
       ↓
Object.prototype
```

---

Therefore:

```js
TeachingSupport.makeVideo
```

returns:

```js
true
```

even though it doesn't have that property directly.

---

# Visualizing the Full Chain

After:

```js
Teacher.__proto__ = user

Object.setPrototypeOf(
    TeachingSupport,
    Teacher
)
```

the chain becomes:

```text
TeachingSupport
      ↓
Teacher
      ↓
user
      ↓
Object.prototype
      ↓
null
```

Property lookup:

```js
TeachingSupport.name
```

Search order:

```text
TeachingSupport ❌
Teacher ❌
user ✅
```

Result:

```js
"john"
```

---

# 6. Creating a Custom Method for Strings

Main goal:

```js
let anotherUserName = "PrashantSingh   "
```

You wanted:

```js
anotherUserName.trueLength()
```

to ignore spaces.

---

You added:

```js
String.prototype.trueLength = function(){
    console.log(this.trim().length);
}
```

---

Now every string gets this method.

Example:

```js
"Prashant   ".trueLength()
```

Output:

```js
8
```

because:

```js
"Prashant   ".trim()
```

becomes:

```js
"Prashant"
```

Length:

```js
8
```

---

# What is `this` here?

Inside:

```js
String.prototype.trueLength = function(){
    console.log(this);
}
```

When:

```js
"iceTea".trueLength()
```

runs,

`this` becomes:

```js
"iceTea"
```

So:

```js
this.trim()
```

means:

```js
"iceTea".trim()
```

---

# Most Important Interview Concept

When JS looks for a property:

```js
obj.property
```

it searches:

```text
1. Inside obj
2. Inside obj's prototype
3. Inside prototype's prototype
4. ...
5. Until null
```

This process is called:

### Prototype Chaining

Example:

```js
myHeros.hitesh()
```

Search:

```text
myHeros ❌
Array.prototype ❌
Object.prototype ✅
```

Found and executed.

---

# Real-world Takeaway

In interviews and production code:

❌ Avoid doing this:

```js
Object.prototype.myMethod = ...
```

because it affects every object in the application and can create bugs.

Use:

```js
class
constructor
extends
```

or specific prototypes instead.

Example:

```js
Array.prototype.customMethod = ...
```

is much safer than:

```js
Object.prototype.customMethod = ...
```

because it only affects arrays.

This topic is the foundation for understanding **classes, inheritance, `extends`, constructor functions, and how JavaScript implements OOP internally**. Once prototypes click, JavaScript classes become much easier to understand because classes are essentially syntactic sugar over the prototype system.
