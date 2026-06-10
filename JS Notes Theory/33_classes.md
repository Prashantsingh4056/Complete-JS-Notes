## Code :

```js

// ES6

class User {

    constructor(username , email , password){

        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai" , "chai@gmail.com" , "123")

console.log(chai);

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the scene what happens

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

// use 
const tea = new User("tea" , "tea@gm.com" , "123");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());


```


# JavaScript Classes (ES6)

## What is a Class?

A **class** is a blueprint for creating objects.

Instead of writing constructor functions and prototypes manually, ES6 introduced a cleaner syntax:

```js
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return this.username.toUpperCase()
    }
}
```

---

## Creating Objects

```js
const chai = new User(
    "chai",
    "chai@gmail.com",
    "123"
)
```

### Behind the scenes

```text
new User(...)
      ↓
Creates empty object {}
      ↓
this → {}
      ↓
constructor executes
      ↓
properties added
      ↓
object returned
```

Result:

```js
{
    username: "chai",
    email: "chai@gmail.com",
    password: "123"
}
```

---

## Constructor

### Syntax

```js
constructor(parameters){
    // initialization code
}
```

The constructor runs automatically whenever `new` is used.

Example:

```js
constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
```

---

## Methods

Methods are functions inside a class.

```js
encryptPassword(){
    return `${this.password}abc`
}
```

Usage:

```js
console.log(chai.encryptPassword());
```

Output:

```js
123abc
```

---

### Another Method

```js
changeUserName(){
    return this.username.toUpperCase()
}
```

Usage:

```js
console.log(chai.changeUserName());
```

Output:

```js
CHAI
```

---

# What Happens Internally?

This:

```js
class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return this.username.toUpperCase()
    }
}
```

is converted internally to something similar to:

```js
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return this.username.toUpperCase()
}
```

---

# Prototype Connection

When you create:

```js
const tea = new User("tea", "tea@gm.com", "123")
```

JS creates:

```text
tea
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null
```

So when JS sees:

```js
tea.encryptPassword()
```

it searches:

```text
tea ❌
User.prototype ✅
```

and finds the method.

---

# Why Use Classes?

### Constructor Function Style

```js
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
```

---

### Class Style

```js
class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}
```

Same functionality ✅

Cleaner syntax ✅

Easier to read ✅

---

# Important Interview Question

### Are Classes in JavaScript real classes like Java/C++?

**Answer: No.**

JavaScript classes are **syntactic sugar** over the prototype system.

Internally:

```js
class User {}
```

still uses:

```js
User.prototype
```

behind the scenes.

---

# Output of Your Code

```js
const chai = new User("chai","chai@gmail.com","123")

console.log(chai)
```

Output:

```js
User {
  username: 'chai',
  email: 'chai@gmail.com',
  password: '123'
}
```

---

```js
console.log(chai.encryptPassword())
```

Output:

```js
123abc
```

---

```js
console.log(chai.changeUserName())
```

Output:

```js
CHAI
```

---

# Revision Notes

### Class Syntax

```js
class ClassName {
    constructor(args){
        // initialization
    }

    method(){
        // code
    }
}
```

### Create Object

```js
const obj = new ClassName(...)
```

### Key Points

* `constructor()` runs automatically with `new`
* Methods are stored in `prototype`
* Objects access methods through prototype chaining
* Classes are syntactic sugar over constructor functions + prototypes
* `new` creates an object, binds `this`, executes constructor, returns object

### Internal Conversion

```js
class User {}
```

≈

```js
function User(){}
User.prototype.method = function(){}
```

**One-line interview answer:**

> ES6 classes provide a cleaner syntax for working with JavaScript's prototype-based inheritance system; they are syntactic sugar over constructor functions and prototypes.
