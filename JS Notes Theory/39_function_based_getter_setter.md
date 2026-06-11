# Topic: Getters & Setters using `Object.defineProperty()` (Function-based Approach)

This is the **old ES5 way** of creating getters and setters before JavaScript classes were introduced.

---

# Code

```js
function User(email , password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);
```

---

# Why are we using `Object.defineProperty()`?

Normally:

```js
const user = {
    email: "abc@gmail.com"
}
```

Accessing:

```js
user.email
```

simply returns the value.

But sometimes we want custom behavior:

* Convert to uppercase
* Validate input
* Hide sensitive data
* Format data before returning

For this, we use **getters and setters**.

---

# Step-by-Step Execution

## Step 1: Create Object

```js
const chai = new User("chai@chai.com", "chai")
```

When `new` is used:

### New creates:

```js
{}
```

and

```js
this -> newly created object
```

---

## Step 2: Constructor Runs

```js
this._email = email
this._password = password
```

Object becomes:

```js
{
    _email: "chai@chai.com",
    _password: "chai"
}
```

---

## Step 3: Define Getter & Setter

```js
Object.defineProperty(this, "email", {...})
```

creates a special property called:

```js
email
```

which has:

```js
{
    get: function(){...},
    set: function(value){...}
}
```

---

# Object Structure

Internally:

```js
{
    _email: "chai@chai.com",
    _password: "chai",

    email: {
        get(){...},
        set(){...}
    },

    password: {
        get(){...},
        set(){...}
    }
}
```

---

# Accessing Email

```js
console.log(chai.email)
```

JavaScript sees:

```js
email
```

has a getter.

So it executes:

```js
get: function(){
    return this._email.toUpperCase()
}
```

which becomes:

```js
return "CHAI@CHAI.COM"
```

---

## Output

```js
CHAI@CHAI.COM
```

---

# Setting Email

Suppose:

```js
chai.email = "ps@gmail.com"
```

JavaScript automatically calls:

```js
set: function(value){
    this._email = value
}
```

which becomes:

```js
this._email = "ps@gmail.com"
```

---

Now:

```js
console.log(chai.email)
```

returns:

```js
PS@GMAIL.COM
```

---

# Why Use `_email`?

If you write:

```js
get: function(){
    return this.email
}
```

then:

```js
chai.email
```

↓

calls getter

↓

```js
return this.email
```

↓

calls getter again

↓

calls getter again

↓

Infinite recursion

---

### Error

```js
RangeError: Maximum call stack size exceeded
```

---

# Class Version vs Function Version

### ES6 Class

```js
class User {
    get email(){
        return this._email.toUpperCase()
    }
}
```

---

### ES5 Function

```js
Object.defineProperty(this, "email", {
    get: function(){
        return this._email.toUpperCase()
    }
})
```

Both do exactly the same thing.

The class syntax is just cleaner.

---

# Behind the Scenes

Your class code:

```js
class User{
    get email(){
        return this._email
    }
}
```

is internally similar to:

```js
function User(){}

Object.defineProperty(
    User.prototype,
    "email",
    {
        get: function(){
            return this._email
        }
    }
)
```

So classes are largely syntactic sugar over prototypes and property descriptors.

---

# Interview Questions

### Q1. What does `Object.defineProperty()` do?

It creates or modifies an object's property and allows custom descriptors such as:

```js
writable
enumerable
configurable
get
set
```

---

### Q2. Why use getters and setters?

To control how properties are read and written.

Example:

```js
get password(){
    return "*****"
}
```

---

### Q3. Why use `_email` instead of `email`?

To avoid infinite recursion.

```js
get email(){
    return this.email ❌
}
```

causes stack overflow.

---

# Quick Revision

### Create Getter

```js
Object.defineProperty(obj, "name", {
    get: function(){
        return this._name
    }
})
```

---

### Create Setter

```js
Object.defineProperty(obj, "name", {
    set: function(value){
        this._name = value
    }
})
```

---

### Access Getter

```js
user.name
```

(not `user.name()`)

---

### Access Setter

```js
user.name = "Prashant"
```

---

# Memory Trick

Think of:

```js
_email
```

as the **actual storage box** 📦

and

```js
email
```

as the **security guard** 🚪

Every read/write operation must go through the guard (getter/setter), who decides what happens before the value reaches the box.
