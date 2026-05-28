# JavaScript Notes — Objects

---

# Objects in JavaScript

Objects store data in:

```javascript id="q7m2wp"
key : value
```

format.

---

# Ways to Create Objects

| Method         | Example           |
| -------------- | ----------------- |
| Object Literal | `{}`              |
| Constructor    | `Object.create()` |

---

# Object Literal

## Code

```javascript id="x4r8ty"
const jsUser = {
    name: "Prashant",
    age: 21
}
```

---

# Symbol as Object Key

---

# Creating Symbol

## Code

```javascript id="v9m1qz"
const mySym = Symbol("key1");
```

---

# Wrong Way

```javascript id="t5x7rk"
mySym: "mykey1"
```

This treats symbol as normal string key.

---

# Correct Way

## Code

```javascript id="n8q3tw"
[mySym]: "mykey1"
```

---

# Explanation

Square brackets are required to use actual Symbol value as key.

---

# Complete Object

## Code

```javascript id="m2x7qp"
const jsUser = {
    name: "Prashant",
    "full name": "Prashant Singh",
    [mySym]: "mykey1",
    age: 21,
    location: "kanpur",
    email: "prashantsingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
```

---

# Accessing Object Values

---

# Dot Notation

## Code

```javascript id="k5m9rz"
console.log(jsUser.email);
```

---

# Output

```javascript id="u7m2qy"
prashantsingh@gmail.com
```

---

# Bracket Notation

## Code

```javascript id="d4x8pk"
console.log(jsUser["email"]);
```

---

# Output

```javascript id="f9q3tw"
prashantsingh@gmail.com
```

---

# Accessing Keys with Spaces

## Code

```javascript id="w3x7qk"
console.log(jsUser["full name"]);
```

---

# Output

```javascript id="r8m2ty"
Prashant Singh
```

---

# Important Interview Point

This will NOT work:

```javascript id="v5q9wp"
jsUser.full name
```

because space is not allowed with dot notation.

---

# Accessing Symbol Key

## Code

```javascript id="n1x4rz"
console.log(jsUser[mySym]);
```

---

# Output

```javascript id="k1m6rp"
mykey1
```

---

# `Object.freeze()`

Used to lock object values.

---

# Code

```javascript id="c8x3qw"
Object.freeze(jsUser)
```

---

# Explanation

After freezing:

* no changes allowed
* no new properties added
* no properties removed

---

# Example

## Code

```javascript id="m5q7rz"
jsUser.email = "new@gmail.com"
```

Value will NOT update after freeze.

---

# Functions Inside Objects

Objects can also store functions.

---

# Adding Function

## Code

```javascript id="t9m2wp"
jsUser.greeting = function(){
    console.log("Hello JS User");
}
```

---

# Calling Function

## Code

```javascript id="u4x8pk"
console.log(jsUser.greeting());
```

---

# Output

```javascript id="f2q7ty"
Hello JS User
undefined
```

---

# Why `undefined` Came?

Because:

* function itself prints value using `console.log()`
* function does NOT return anything

So return value becomes:

```javascript id="v6m1rz"
undefined
```

---

# Function Reference

## Code

```javascript id="j3x9qp"
console.log(jsUser.greeting);
```

---

# Output

```javascript id="n8m4tw"
[Function (anonymous)]
```

---

# Explanation

Without `()`:

* function is NOT executed
* only reference is shown

---

# Using `this`

## Code

```javascript id="w5q2rk"
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
```

---

# Output

```javascript id="r1m7pz"
Hello JS user, Prashant
```

---

# Definition of `this`

```javascript id="x9q4tw"
this → refers to current object
```

---

# Here

```javascript id="k6m2ry"
this.name
```

means:

```javascript id="b7x3qp"
jsUser.name
```

---

# Important Interview Points

---

# Dot vs Bracket Notation

| Dot Notation             | Bracket Notation    |
| ------------------------ | ------------------- |
| `obj.name`               | `obj["name"]`       |
| Simple access            | Dynamic access      |
| Cannot access space keys | Can access all keys |

---

# Symbol Keys

Must use:

```javascript id="p4m8tw"
[objKey]
```

inside object.

---

# `Object.freeze()`

Makes object immutable.

---

# Quick Revision Table

| Concept                | Purpose        |
| ---------------------- | -------------- |
| `{}`                   | create object  |
| `obj.key`              | access value   |
| `obj["key"]`           | access value   |
| `Object.freeze()`      | lock object    |
| `this`                 | current object |
| function inside object | object method  |

---

# Quick Revision Examples

```javascript id="d2q7rz"
obj.name

obj["full name"]

Object.freeze(obj)

this.name
```

```javascript id="t5m1wp"
obj.greet = function(){
   console.log("Hello")
}
```

---
---------------------------------------------------------------------------
---


# JavaScript Notes — Objects Part 2

---

# Creating Objects

---

# Singleton Object

## Code

```javascript id="q7m2wp"
const tinderUser = new Object()
```

Created using constructor.

## Example  :

```js
// 1. Create the empty object
const user = new Object();

// 2. Add properties
user.firstName = "John";
user.lastName = "Doe";
user.age = 30;

// 3. Add a method (function)
user.sayHello = function() {
    console.log("Hello, my name is " + this.firstName);
};
```

---

# Non-Singleton Object

## Code

```javascript id="x4r8ty"
const tinderUser = {}
```

Most commonly used method.

---

# Adding Properties

## Code

```javascript id="v9m1qz"
tinderUser.id = "425dgef"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
```

---

# Output

```javascript id="t5x7rk"
{
  id: '425dgef',
  name: 'sammy',
  isLoggedIn: false
}
```

---

# Objects Inside Objects

Nested objects are allowed in JavaScript.

---

# Code

```javascript id="n8q3tw"
const regularUser = {
    email: "someone@gmail.com",

    fullname: {
        userfullname: {
            firstname: "Prashant",
            lastname: "Singh"
        }
    }
}
```

---

# Accessing Nested Values

## Code

```javascript id="m2x7qp"
console.log(
    regularUser.fullname.userfullname.firstname
);
```

---

# Output

```javascript id="k5m9rz"
Prashant
```

---

# Optional Chaining (`?.`)

Used for safe access.

---

# Code

```javascript id="u7m2qy"
console.log(
    regularUser.fullname?.userfullname.firstname
);
```

---

# Explanation

If:

```javascript id="d4x8pk"
fullname
```

does NOT exist,
program will NOT crash.

Mostly used with:

* APIs
* database responses

---

# Combining Objects

---

# Objects

```javascript id="f9q3tw"
const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}
```

---

# Wrong Way

## Code

```javascript id="w3x7qk"
const obj3 = {obj1, obj2}
```

---

# Output

```javascript id="r8m2ty"
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' }
}
```

---

# Explanation

Objects become nested.

---

# `Object.assign()`

Used to merge objects.

---

# Syntax

```javascript id="v5q9wp"
Object.assign(target, source1, source2)
```

---

# Code

```javascript id="n1x4rz"
const obj3 = Object.assign({}, obj1, obj2)
```

---

# Output

```javascript id="k1m6rp"
{
 '1': 'a',
 '2': 'b',
 '3': 'a',
 '4': 'b'
}
```

---

# Explanation

```javascript id="c8x3qw"
{}
```

is target object where values are copied.

---

# Spread Operator (`...`)

Modern way to merge objects.

---

# Code

```javascript id="m5q7rz"
const obj3 = {...obj1, ...obj2}

console.log(obj3);
```

---

# Output

```javascript id="t9m2wp"
{
 '1': 'a',
 '2': 'b',
 '3': 'a',
 '4': 'b'
}
```

---

# Arrays of Objects

Common in:

* APIs
* databases

---

# Code

```javascript id="u4x8pk"
const users = [
    {
        id: 1,
        email: "P@gmail.com"
    },

    {
        id: 2,
        email: "S@gmail.com"
    }
]
```

---

# Accessing Values

## Code

```javascript id="f2q7ty"
console.log(users[1].email);
```

---

# Output

```javascript id="v6m1rz"
S@gmail.com
```

---

# `Object.keys()`

Returns array of keys.

---

# Code

```javascript id="j3x9qp"
console.log(Object.keys(tinderUser));
```

---

# Output

```javascript id="n8m4tw"
['id', 'name', 'isLoggedIn']
```

---

# `Object.values()`

Returns array of values.

---

# Code

```javascript id="w5q2rk"
console.log(Object.values(tinderUser));
```

---

# Output

```javascript id="r1m7pz"
['425dgef', 'sammy', false]
```

---

# `Object.entries()`

Returns key-value pairs.

---

# Code

```javascript id="x9q4tw"
console.log(Object.entries(tinderUser));
```

---

# Output

```javascript id="k6m2ry"
[
 ['id', '425dgef'],
 ['name', 'sammy'],
 ['isLoggedIn', false]
]
```

---

# `hasOwnProperty()`

Checks whether object contains property.

---

# Code

```javascript id="b7x3qp"
console.log(
    tinderUser.hasOwnProperty("isLoggedIn")
);
```

---

# Output

```javascript id="p4m8tw"
true
```

---

# Explanation

Returns:

* `true` → property exists
* `false` → property does not exist

---

# Important Interview Points

---

# Optional Chaining

```javascript id="d2q7rz"
obj?.property
```

prevents runtime errors.

---

# Spread Operator

Most commonly used modern method:

```javascript id="t5m1wp"
{...obj1, ...obj2}
```

---

# `Object.keys()` Returns Array

So array methods can be applied.

Example:

```javascript id="x8q4pk"
Object.keys(obj).length
```

---

# Quick Revision Table

| Method             | Purpose           |
| ------------------ | ----------------- |
| `Object.assign()`  | merge objects     |
| `...`              | spread operator   |
| `Object.keys()`    | get keys          |
| `Object.values()`  | get values        |
| `Object.entries()` | key-value pairs   |
| `hasOwnProperty()` | check property    |
| `?.`               | optional chaining |

---

# Quick Revision Examples

```javascript id="r9m2qy"
obj?.name
```

```javascript id="k3x7tw"
Object.keys(obj)

Object.values(obj)

Object.entries(obj)
```

```javascript id="m6q1rz"
obj.hasOwnProperty("name")
```

```javascript id="g4m9qp"
{...obj1, ...obj2}
```


---
------------------------------------------------------------------------------------
---

# JavaScript Notes — Objects Part 3

---

# Object Destructuring

Destructuring is used to extract values from objects easily.

---

# Object

## Code

```javascript id="q7m2wp"
const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}
```

---

# Normal Way to Access Value

## Code

```javascript id="x4r8ty"
course.courseInstructor
```

---

# Destructuring

## Code

```javascript id="v9m1qz"
const { courseInstructor } = course
```

---

# Explanation

Equivalent to:

```javascript id="t5x7rk"
const courseInstructor = course.courseInstructor
```

---

# Renaming While Destructuring

## Code

```javascript id="n8q3tw"
const { courseInstructor: instructor } = course

console.log(instructor);
```

---

# Output

```javascript id="m2x7qp"
hitesh
```

---

# Explanation

Here:

```javascript id="k5m9rz"
courseInstructor
```

property is extracted and stored in variable:

```javascript id="u7m2qy"
instructor
```

---

# Syntax

```javascript id="d4x8pk"
const { objectKey : variableName } = object
```

---

# Why Destructuring?

Benefits:

* cleaner code
* shorter syntax
* widely used in React
* easier API handling

---

# Destructuring in React

Very commonly used in React props.

---

# Example

## Code

```javascript id="f9q3tw"
const navbar = ({ company }) => {
   console.log(company);
};

navbar({ company: "hitesh" });
```

---

# Output

```javascript id="w3x7qk"
hitesh
```

---

# Explanation

Instead of writing:

```javascript id="r8m2ty"
props.company
```

React developers directly destructure:

```javascript id="v5q9wp"
({ company })
```

---

# APIs and JSON

Most APIs return data in JSON format.

---

# Example JSON

```javascript id="n1x4rz"
{
   "name": "prashant",
   "coursename": "Js in Hindi",
   "price": "free"
}
```

---

# Important

JSON looks similar to JavaScript objects but:

| JavaScript Object          | JSON                       |
| -------------------------- | -------------------------- |
| keys can be without quotes | keys are usually in quotes |
| supports functions         | functions not allowed      |

---

# API Responses Can Also Be Arrays

---

# Example

```javascript id="k1m6rp"
[
   {},
   {},
   {}
]
```

---

# Explanation

Many APIs return:

* array of objects

Example:

```javascript id="c8x3qw"
[
   {
      id: 1,
      name: "Prashant"
   },

   {
      id: 2,
      name: "Rahul"
   }
]
```

---

# Accessing API Array Data

## Code

```javascript id="m5q7rz"
data[0].name
```

---

# Output

```javascript id="t9m2wp"
Prashant
```

---

# Important Interview Points

---

# Destructuring Syntax

```javascript id="u4x8pk"
const { key } = object
```

---

# Renaming Variables

```javascript id="f2q7ty"
const { key: newName } = object
```

---

# React Uses Destructuring Heavily

Especially in:

* props
* hooks
* API responses

---

# JSON Full Form

```javascript id="v6m1rz"
JavaScript Object Notation
```

---

# Quick Revision Table

| Concept           | Purpose              |
| ----------------- | -------------------- |
| Destructuring     | extract values       |
| `{ key }`         | normal destructuring |
| `{ key:newName }` | rename variable      |
| JSON              | API data format      |
| `[{},{}]`         | array of objects     |

---

# Quick Revision Examples

```javascript id="j3x9qp"
const {name} = user
```

```javascript id="n8m4tw"
const {name: username} = user
```

```javascript id="w5q2rk"
data[0].email
```

```javascript id="r1m7pz"
({ company })
```
