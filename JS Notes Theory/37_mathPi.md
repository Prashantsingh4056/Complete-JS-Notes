# Code : 
---

```js

// Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);  // this will not get updated !!


const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// const myNewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai not made");
        
    }

}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai , "name"));

// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai , "name" , {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (const [key , value] of Object.entries(chai)) {
    
    if(typeof value !== 'function'){   // to avoid function enumeration

        console.log(`${key} : ${value}`);
    }
    
}

```

---

# Explanation :

---

# Topic: Object Property Descriptors (`getOwnPropertyDescriptor` & `defineProperty`)

This topic explains **why some object properties can be modified and some cannot**.

---

# 1. Why can't we change `Math.PI`?

```js
console.log(Math.PI);

Math.PI = 5;

console.log(Math.PI);
```

### Output

```js
3.141592653589793
3.141592653589793
```

Even after assigning:

```js
Math.PI = 5
```

the value does not change.

---

## Why?

Every property in JavaScript has some hidden metadata called a **Property Descriptor**.

Let's inspect it:

```js
console.log(
    Object.getOwnPropertyDescriptor(Math, "PI")
);
```

Output:

```js
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
```

---

# Property Descriptor Meaning

```js
{
  value: 3.14,
  writable: false,
  enumerable: false,
  configurable: false
}
```

| Property     | Meaning                                   |
| ------------ | ----------------------------------------- |
| value        | Actual stored value                       |
| writable     | Can value be modified?                    |
| enumerable   | Will it appear in loops?                  |
| configurable | Can descriptor itself be changed/deleted? |

---

### writable: false

```js
Math.PI = 5
```

❌ Not allowed

---

### enumerable: false

```js
for(let key in Math){
    console.log(key)
}
```

`PI` won't appear.

---

### configurable: false

Cannot delete or redefine the property.

```js
delete Math.PI
```

❌ Not allowed

---

# 2. Creating Our Own Object

```js
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}
```

---

## Check Descriptor

```js
Object.getOwnPropertyDescriptor(chai, "name")
```

Output:

```js
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
```

---

### Meaning

```js
chai.name = "masala chai"
```

✅ Allowed

---

```js
for(let key in chai){
    console.log(key)
}
```

✅ `name` appears

---

```js
delete chai.name
```

✅ Allowed

---

# 3. Modifying Property Behavior

Using:

```js
Object.defineProperty()
```

---

## Syntax

```js
Object.defineProperty(
    object,
    propertyName,
    {
        writable: true/false,
        enumerable: true/false,
        configurable: true/false
    }
)
```

---

### Example

```js
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
```

Now:

```js
Object.getOwnPropertyDescriptor(chai, "name")
```

Output:

```js
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
```

---

# 4. Effect of `writable: false`

```js
chai.name = "masala chai"

console.log(chai.name)
```

Output:

```js
ginger chai
```

Value remains unchanged.

---

# 5. Effect of `enumerable: false`

Before:

```js
for (const [key,value] of Object.entries(chai)){
    console.log(key);
}
```

Output:

```js
name
price
isAvailable
```

---

After:

```js
Object.defineProperty(chai,"name",{
    enumerable:false
})
```

Output:

```js
price
isAvailable
```

`name` is hidden from iteration.

---

# 6. Why is `orderChai()` filtered?

Your code:

```js
for (const [key,value] of Object.entries(chai)) {

    if(typeof value !== "function"){

        console.log(`${key} : ${value}`);
    }
}
```

---

Without condition:

```js
name : ginger chai
price : 250
isAvailable : true
orderChai : function(){}
```

---

With condition:

```js
if(typeof value !== "function")
```

Output:

```js
price : 250
isAvailable : true
```

Functions are skipped.

---

# Interview Questions

### Q1. What does `Object.getOwnPropertyDescriptor()` do?

Returns metadata of a property.

```js
Object.getOwnPropertyDescriptor(obj, "key")
```

---

### Q2. What is `writable`?

Controls whether a property's value can be changed.

---

### Q3. What is `enumerable`?

Controls whether a property appears in loops like:

```js
for...in
Object.keys()
Object.entries()
```

---

### Q4. What is `configurable`?

Controls whether a property can be deleted or redefined.

---

### Q5. Why can't we modify `Math.PI`?

Because its descriptor is:

```js
{
  writable: false,
  configurable: false
}
```

---

# Quick Revision

```js
Object.getOwnPropertyDescriptor(obj, "key")
```

➡️ View property metadata

---

```js
Object.defineProperty(obj, "key", {
    writable: false
})
```

➡️ Prevent value modification

---

```js
Object.defineProperty(obj, "key", {
    enumerable: false
})
```

➡️ Hide property from loops

---

```js
Object.defineProperty(obj, "key", {
    configurable: false
})
```

➡️ Prevent deletion/redefinition

---

### Memory Trick

Think of every object property as:

```js
{
  value,
  writable,
  enumerable,
  configurable
}
```

The actual value is only one part; the other three flags control how JavaScript treats that property.
