# Code :
---

```js

class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()  
    }

    set email(value){
        this._email = value
    }


    get password(){
        // return this._password.toUpperCase()

        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        // this.password = value   // RangeError: Maximum call stack size exceeded

        // this._password = value.toUpperCase()

        this._password = value
    }


}

const hitesh = new User("ps@gm.com" , "abc")    // Cannot set property password of #<User> which has only a getter
console.log(hitesh.password);  

console.log(hitesh.email);

```

# Explanation :

---

# Topic: Getters and Setters in JavaScript

This is one of the trickiest topics in OOP, but once you understand **why `_email` and `_password` are used**, everything becomes clear.

---

# Your Code

```js
class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}
```

---

# Step 1: Object Creation

```js
const hitesh = new User("ps@gm.com", "abc")
```

When constructor runs:

```js
this.email = email
```

becomes

```js
this.email = "ps@gm.com"
```

But wait...

JavaScript sees a **setter** for `email`.

So it DOES NOT create:

```js
this.email = "ps@gm.com"
```

Instead it automatically calls:

```js
set email("ps@gm.com")
```

which executes:

```js
this._email = value
```

So:

```js
this._email = "ps@gm.com"
```

---

Similarly:

```js
this.password = password
```

calls:

```js
set password("abc")
```

which stores:

```js
this._password = "abc"
```

---

## Actual Object Created

```js
{
    _email: "ps@gm.com",
    _password: "abc"
}
```

---

# Step 2: Accessing Email

```js
console.log(hitesh.email);
```

JavaScript sees:

```js
get email()
```

and calls:

```js
return this._email.toUpperCase()
```

Output:

```js
PS@GM.COM
```

---

# Step 3: Accessing Password

```js
console.log(hitesh.password);
```

calls:

```js
get password()
```

which returns:

```js
`${this._password}hitesh`
```

Output:

```js
abchitesh
```

---

# Final Output

```js
abchitesh
PS@GM.COM
```

---

# Why Use `_email` and `_password`?

Because using:

```js
get email(){
    return this.email
}
```

creates an infinite loop.

---

Example:

```js
get email(){
    return this.email
}
```

Execution:

```js
hitesh.email
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

calls getter again

∞

---

Result:

```js
RangeError: Maximum call stack size exceeded
```

---

# Why Does This Fail?

```js
set password(value){
    this.password = value
}
```

---

Execution:

```js
this.password = "abc"
```

↓

calls setter

↓

```js
this.password = value
```

↓

calls setter again

↓

calls setter again

↓

calls setter again

∞

---

Output:

```js
RangeError: Maximum call stack size exceeded
```

---

# Why `_` (underscore)?

It is a convention used by developers to mean:

```js
_email
_password
_name
```

are internal/private-like variables.

JavaScript treats them as normal properties.

The `_` is just a naming convention.

---

# Visual Flow

### During Creation

```js
new User("ps@gm.com", "abc")
```

↓

```js
constructor()
```

↓

```js
this.email = "ps@gm.com"
```

↓

```js
set email(value)
```

↓

```js
this._email = value
```

---

### During Access

```js
hitesh.email
```

↓

```js
get email()
```

↓

```js
this._email.toUpperCase()
```

↓

```js
PS@GM.COM
```

---

# Why Use Getters and Setters?

They allow you to add logic while reading/writing properties.

Example:

```js
set password(value){
    if(value.length < 6){
        throw Error("Weak password")
    }

    this._password = value
}
```

Now every password is automatically validated.

---

# Interview Answer

### What are Getters and Setters?

* **Getter** runs when a property is read.
* **Setter** runs when a property is assigned.
* They allow controlled access to object properties.
* To avoid infinite recursion, store actual values in a different property (commonly `_propertyName`).

### Syntax

```js
class User{
    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }
}
```

---

# Quick Revision

```js
get email()
```

➡ Runs when:

```js
user.email
```

---

```js
set email(value)
```

➡ Runs when:

```js
user.email = "abc@gmail.com"
```

---

```js
this._email
```

➡ Actual storage location

---

```js
this.email
```

➡ Triggers getter/setter

---

### Memory Trick

**`email` = public door 🚪**

**`_email` = actual room 🏠**

The getter/setter controls who enters the room and what happens before entering.
