# Code

```js

class User {
    constructor(username){

        this.username = username

    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{

    constructor(username , email , password){
        super(username) // no need to use .call , this 

        this.enail = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai" , "chai@gm.com" , "123");
const newTea = new User("newTea");

chai.addCourse()
// newTea.addCourse()  // TypeError: newTea.addCourse is not a function

chai.logMe()  // Username is chai

// inherited class can have parent's class methods
newTea.logMe()


// 
console.log(chai === newTea);   // false

// instanceof
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User);  // true


```

# Topic: Inheritance in Classes (`extends`, `super`, `instanceof`)

This topic shows how one class can **inherit properties and methods** from another class.

---

# 1. Parent Class

```js
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
```

The `User` class contains:

### Property

```js
this.username
```

### Method

```js
logMe()
```

---

# 2. Child Class using `extends`

```js
class Teacher extends User {
```

`extends` means:

> Teacher inherits everything from User.

So Teacher automatically gets:

* username property
* logMe() method

without writing them again.

---

## Syntax

```js
class ChildClass extends ParentClass {

}
```

Example:

```js
class Teacher extends User {

}
```

---

# 3. Constructor in Child Class

```js
constructor(username, email, password){
    super(username)

    this.email = email
    this.password = password
}
```

---

## What is `super()`?

`super()` calls the constructor of the parent class.

Equivalent to:

```js
User constructor(username)
```

---

### Internally

```js
super(username)
```

roughly behaves like:

```js
User.call(this, username)
```

That's why you don't need:

```js
User.call(this, username)
```

yourself.

ES6 handles it automatically.

---

# Why is super() required?

Without:

```js
super(username)
```

this code:

```js
constructor(username,email,password){
    this.email = email
}
```

throws:

```js
ReferenceError:
Must call super constructor before using 'this'
```

Because the parent class must initialize first.

---

# Object Creation Flow

```js
const chai = new Teacher(
    "chai",
    "chai@gm.com",
    "123"
)
```

### Step 1

```js
new Teacher(...)
```

creates an empty object.

```js
{}
```

---

### Step 2

Teacher constructor starts.

```js
constructor(username,email,password)
```

---

### Step 3

```js
super(username)
```

calls User constructor.

```js
this.username = username
```

Object becomes:

```js
{
    username: "chai"
}
```

---

### Step 4

Teacher constructor continues.

```js
this.email = email
this.password = password
```

Object becomes:

```js
{
    username: "chai",
    email: "chai@gm.com",
    password: "123"
}
```

---

# 4. Child-specific Methods

```js
addCourse(){
    console.log(
      `A new course was added by ${this.username}`
    );
}
```

Usage:

```js
chai.addCourse()
```

Output:

```js
A new course was added by chai
```

---

# 5. Inherited Methods

Teacher never defines:

```js
logMe()
```

yet:

```js
chai.logMe()
```

works.

Output:

```js
Username is chai
```

Why?

Because JS searches:

```text
chai
 ↓
Teacher.prototype
 ↓
User.prototype  ✅
```

and finds `logMe()` there.

---

# Prototype Chain

For:

```js
const chai = new Teacher(...)
```

the chain is:

```text
chai
 ↓
Teacher.prototype
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 6. Why Doesn't This Work?

```js
const newTea = new User("newTea")

newTea.addCourse()
```

Error:

```js
TypeError:
newTea.addCourse is not a function
```

Because:

```text
newTea
 ↓
User.prototype
 ↓
Object.prototype
```

There is no:

```text
Teacher.prototype
```

in its chain.

So User objects cannot access Teacher methods.

---

# 7. Comparing Objects

```js
console.log(chai === newTea)
```

Output:

```js
false
```

Because:

```js
chai
```

and

```js
newTea
```

are two different objects in memory.

---

# 8. instanceof Operator

Used to check whether an object belongs to a class.

---

## Syntax

```js
object instanceof ClassName
```

---

### Example 1

```js
console.log(
    chai instanceof Teacher
)
```

Output:

```js
true
```

Because:

```text
chai
 ↓
Teacher.prototype ✅
```

exists in the prototype chain.

---

### Example 2

```js
console.log(
    chai instanceof User
)
```

Output:

```js
true
```

Because:

```text
chai
 ↓
Teacher.prototype
 ↓
User.prototype ✅
```

also exists.

---

### Example 3

```js
console.log(
    newTea instanceof Teacher
)
```

Output:

```js
false
```

Because:

```text
newTea
 ↓
User.prototype
```

never reaches:

```text
Teacher.prototype
```

---

# Behind the Scenes (ES5 Style)

Your ES6 code:

```js
class Teacher extends User {

}
```

is conceptually similar to:

```js
function User(username){
    this.username = username
}

User.prototype.logMe = function(){
    console.log(this.username)
}

function Teacher(
    username,
    email,
    password
){
    User.call(this, username)

    this.email = email
    this.password = password
}

Teacher.prototype =
    Object.create(User.prototype)

Teacher.prototype.addCourse =
function(){
    console.log("Course added")
}
```

ES6 simply makes this cleaner.

---

# Quick Revision

### extends

```js
class Teacher extends User
```

→ inherits from User

---

### super()

```js
super(username)
```

→ calls parent constructor

---

### Child gets Parent Methods

```js
chai.logMe()
```

✅ Works

---

### Parent does NOT get Child Methods

```js
newTea.addCourse()
```

❌ Error

---

### instanceof

```js
chai instanceof Teacher
```

✅ true

```js
chai instanceof User
```

✅ true

```js
newTea instanceof Teacher
```

❌ false

---

## Interview One-Liner

> `extends` creates inheritance between classes, `super()` calls the parent constructor, and `instanceof` checks whether a class exists in an object's prototype chain.
