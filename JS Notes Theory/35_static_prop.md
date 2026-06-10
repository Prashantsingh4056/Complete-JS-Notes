# Code : 

```js

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){   //static prevents the access of methods or properties by instances
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())   // TypeError: hitesh.createId is not a function

class Teacher extends User{

    constructor(email , username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("phone" , "i@phone.com")
iphone.logMe();   // Username: i@phone.com


// child also can't access this 
// console.log(iphone.createId());  // TypeError: iphone.createId is not a function


// Works 
User.createId();  // Username: i@phone.com

```

# Topic: Static Properties and Methods (`static` keyword)

The main concept of this code is:

> `static` methods belong to the **class itself**, not to objects (instances) created from that class.

---

# 1. Static Method

```js
class User {

    constructor(username){
        this.username = username;
    }

    static createId(){
        return "123";
    }
}
```

Here:

```js
createId()
```

is marked as:

```js
static
```

which means it belongs to:

```js
User
```

and **not** to objects created using `new User()`.

---

# Accessing Static Methods

### Correct

```js
console.log(User.createId());
```

Output:

```js
123
```

✅ Works

---

### Incorrect

```js
const hitesh = new User("hitesh");

hitesh.createId();
```

Output:

```js
TypeError:
hitesh.createId is not a function
```

❌ Error

---

# Why?

When you create:

```js
const hitesh = new User("hitesh");
```

JS creates:

```text
hitesh
   ↓
User.prototype
   ↓
Object.prototype
```

Instance methods are stored inside:

```js
User.prototype
```

---

But static methods are stored on the class itself:

```text
User
  ├── createId()   ✅
  └── prototype
```

So:

```js
hitesh.createId()
```

searches:

```text
hitesh ❌
User.prototype ❌
Object.prototype ❌
```

Not found → Error

---

# Memory Diagram

```text
User
│
├── createId()      ← static method
│
└── prototype
      │
      └── logMe()
```

---

Object:

```js
const hitesh = new User("hitesh");
```

becomes:

```text
hitesh
   ↓
User.prototype
   ↓
Object.prototype
```

Notice:

```text
createId()
```

is NOT in this chain.

Therefore:

```js
hitesh.createId()
```

fails.

---

# 2. Inheritance + Static Methods

```js
class Teacher extends User {
    constructor(email, username){
        super(username)
        this.email = email
    }
}
```

---

Creating object:

```js
const iphone =
    new Teacher("phone", "i@phone.com")
```

Object:

```js
{
    username: "i@phone.com",
    email: "phone"
}
```

---

Calling:

```js
iphone.logMe()
```

Output:

```js
Username: i@phone.com
```

Why?

Because Teacher inherits User's methods.

Prototype chain:

```text
iphone
   ↓
Teacher.prototype
   ↓
User.prototype
   ↓
Object.prototype
```

`logMe()` is found in:

```text
User.prototype
```

✅ Works

---

# 3. Why Child Object Can't Access Static Method

```js
iphone.createId()
```

Output:

```js
TypeError:
iphone.createId is not a function
```

---

Search path:

```text
iphone ❌
Teacher.prototype ❌
User.prototype ❌
Object.prototype ❌
```

No `createId()` found.

Because:

```js
createId()
```

belongs to:

```js
User
```

not:

```js
User.prototype
```

---

# Important Point

Even inherited classes don't get static methods as instance methods.

This fails:

```js
const teacher = new Teacher(...)

teacher.createId()
```

❌

---

But the class itself can access it:

```js
User.createId()
```

✅

---

And even child classes inherit static methods:

```js
Teacher.createId()
```

✅ Works

Output:

```js
123
```

Because internally:

```text
Teacher
   ↓
User
```

(Class inheritance)

---

# Real-World Example

Imagine:

```js
class User {

    constructor(name){
        this.name = name;
    }

    static generateId(){
        return Math.random();
    }
}
```

Creating users:

```js
const user1 = new User("Prashant");
const user2 = new User("Sam");
```

Should every user object have:

```js
generateId()
```

No.

Because ID generation is a utility related to the class itself, not individual users.

Therefore:

```js
User.generateId()
```

makes more sense.

---

# Behind the Scenes

```js
class User {

    static createId(){
        return "123";
    }
}
```

is roughly equivalent to:

```js
function User(username){
    this.username = username;
}

User.createId = function(){
    return "123";
}
```

Notice:

```js
User.createId
```

NOT

```js
User.prototype.createId
```

That's the entire reason instances can't access it.

---

# Quick Revision

### Static Method

```js
class User {
    static createId(){
        return "123";
    }
}
```

---

### Access

```js
User.createId()
```

✅ Works

---

### Instance Access

```js
const user = new User();

user.createId()
```

❌ Error

---

### Child Instance Access

```js
const teacher = new Teacher();

teacher.createId()
```

❌ Error

---

### Child Class Access

```js
Teacher.createId()
```

✅ Works

---

## Interview Definition

> `static` methods belong to the class itself rather than its instances. They can be called using the class name but cannot be accessed through objects created from that class.
