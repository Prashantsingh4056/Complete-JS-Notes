# JavaScript Notes — Getters & Setters using `Object.create()`

## What are Getters and Setters?

Getters and Setters allow us to control how object properties are **read** and **updated**.

* **Getter (`get`)** → Runs when a property is accessed.
* **Setter (`set`)** → Runs when a property is assigned a value.

---

## Code

```javascript
const User = {
    _email: "p@ps.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)

console.log(tea.email);
```

---

# Understanding Step by Step

## Step 1: Create an Object

```javascript
const User = {
    _email: "p@ps.com",
    _password: "abc",
}
```

`User` is a normal object.

```javascript
{
   _email: "p@ps.com",
   _password: "abc"
}
```

---

## Step 2: Define Getter

```javascript
get email() {
    return this._email.toUpperCase()
}
```

Whenever someone writes:

```javascript
obj.email
```

JavaScript automatically executes:

```javascript
get email()
```

instead of directly returning a value.

Example:

```javascript
console.log(User.email);
```

Output:

```javascript
P@PS.COM
```

---

## Step 3: Define Setter

```javascript
set email(value) {
    this._email = value
}
```

Whenever someone writes:

```javascript
User.email = "john@gmail.com"
```

JavaScript automatically runs:

```javascript
set email("john@gmail.com")
```

which updates:

```javascript
this._email
```

---

# What does `Object.create()` do?

```javascript
const tea = Object.create(User)
```

Creates a new empty object:

```javascript
const tea = {}
```

and links its prototype to `User`.

Visualization:

```text
tea
 ↓
User
```

Prototype Chain:

```text
tea
  |
  ▼
User
```

---

# Why can `tea.email` access User's getter?

Because JavaScript searches properties in this order:

```text
1. tea object
2. tea's prototype (User)
3. Object prototype
4. null
```

When we write:

```javascript
tea.email
```

JS checks:

```javascript
tea.email ❌ not found
```

Then:

```javascript
User.email ✅ found
```

So the getter executes.

---

# What is `this` here?

When you do:

```javascript
tea.email
```

Getter executes from User:

```javascript
get email() {
    return this._email.toUpperCase()
}
```

But:

```javascript
this === tea
```

NOT User.

This is very important.

---

### Internally

```javascript
tea.email
```

becomes:

```javascript
User.email.call(tea)
```

Therefore:

```javascript
this._email
```

means:

```javascript
tea._email
```

---

# Why does it still work if tea has no `_email`?

Initially:

```javascript
tea = {}
```

No `_email` exists.

So JS searches prototype:

```javascript
tea._email ❌
User._email ✅
```

Value found:

```javascript
"p@ps.com"
```

Then:

```javascript
toUpperCase()
```

returns:

```javascript
P@PS.COM
```

---

# Output

```javascript
console.log(tea.email);
```

Output:

```text
P@PS.COM
```

---

# Updating the Email

```javascript
tea.email = "john@gmail.com"
```

Setter runs:

```javascript
set email(value){
    this._email = value
}
```

Since:

```javascript
this === tea
```

JS creates:

```javascript
tea._email = "john@gmail.com"
```

Now:

```javascript
tea
```

becomes:

```javascript
{
    _email: "john@gmail.com"
}
```

---

## After Update

```javascript
console.log(tea.email);
```

Output:

```text
JOHN@GMAIL.COM
```

Because now JS finds:

```javascript
tea._email
```

before checking the prototype.

---

# Memory Diagram

### Before Assignment

```text
tea {}
   |
   ▼
User
{
  _email: "p@ps.com"
}
```

---

### After

```javascript
tea.email = "john@gmail.com"
```

```text
tea
{
  _email: "john@gmail.com"
}
   |
   ▼
User
{
  _email: "p@ps.com"
}
```

---

# Interview Points

### `Object.create(obj)`

Creates a new object whose prototype is `obj`.

```javascript
const child = Object.create(parent)
```

---

### Getter Syntax

```javascript
get propertyName() {
    return value;
}
```

---

### Setter Syntax

```javascript
set propertyName(value) {
    this.value = value;
}
```

---

### Important

```javascript
const tea = Object.create(User)
```

does **not copy** User.

It creates a prototype link:

```text
tea ---> User
```

which allows `tea` to inherit properties and methods from `User`.

---

## Quick Revision

```javascript
const User = {
    _email: "p@ps.com",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)

console.log(tea.email); // P@PS.COM

tea.email = "john@gmail.com"

console.log(tea.email); // JOHN@GMAIL.COM
```

### Key Takeaway

✅ `Object.create()` creates inheritance through the prototype chain.

✅ Getters run when reading a property.

✅ Setters run when assigning a property.

✅ Inside getters/setters, `this` refers to the object that accessed the property (`tea`), not the object where the getter/setter was originally defined (`User`).
