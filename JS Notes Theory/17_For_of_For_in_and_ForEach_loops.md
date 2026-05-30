# JavaScript Notes — `for...of`, `for...in`, and `forEach()`

---

# Loop Types in JavaScript

| Loop              | Used For                   |
| ----------------- | -------------------------- |
| `for...of`        | Values of iterable objects |
| `for...in`        | Keys/indices               |
| `forEach()`       | Arrays only                |
| Traditional `for` | Full control               |

---

# 1. `for...of` Loop

Used to iterate over:

* Arrays
* Strings
* Maps
* Sets

In simple words:

```javascript
for...of → gives VALUES
```

---

# Syntax

```javascript
for(const value of iterable){
    // code
}
```

---

# Example: Array

## Code

```javascript
const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}
```

---

# Output

| Iteration | num |
| --------- | --- |
| 1         | 1   |
| 2         | 2   |
| 3         | 3   |
| 4         | 4   |
| 5         | 5   |

---

# Output

```javascript
1
2
3
4
5
```

---

# Example: String

## Code

```javascript
const greetings = "Hello"

for(const char of greetings){
    console.log(char);
}
```

---

# Output

```javascript
H
e
l
l
o
```

---

# Important

Strings are iterable.

Therefore:

```javascript
for...of
```

works perfectly.

---

# Maps in JavaScript

A Map stores:

```javascript
key → value
```

pairs.

---

# Creating a Map

## Code

```javascript
const map = new Map()

map.set("IN", "India")
map.set("USA", "United States")
map.set("FR", "France")
```

---

# Important Feature

Maps store:

```javascript
unique keys
```

If same key is inserted again:

```javascript
map.set("IN","India")
map.set("IN","Bharat")
```

Only latest value remains.

---

# Iterating Over Map

## Code

```javascript
for(const [key,value] of map){
    console.log(key, value);
}
```

---

# Output

```javascript
IN India
USA United States
FR France
```

---

# Why `[key, value]`?

Each Map entry is:

```javascript
[key, value]
```

(array destructuring)

---

# `for...of` on Objects ❌

## Code

```javascript
const myObj = {
    game1: "NFS",
    game2: "Spiderman"
}

for(const value of myObj){

}
```

---

# Output

```javascript
TypeError:
myObj is not iterable
```

---

# Important Interview Point

`for...of` works only on:

```javascript
iterables
```

Examples:

✅ Arrays

✅ Strings

✅ Maps

✅ Sets

❌ Objects

---

# 2. `for...in` Loop

Used for:

```javascript
keys
```

of objects.

---

# Syntax

```javascript
for(const key in object){

}
```

---

# Example: Object

## Code

```javascript
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for(const key in myObj){

    console.log(key);
}
```

---

# Output

```javascript
js
cpp
rb
```

---

# Accessing Values

## Code

```javascript
for(const key in myObj){

    console.log(myObj[key]);
}
```

---

# Output

```javascript
javascript
C++
ruby
```

---

# Printing Both

## Code

```javascript
for(const key in myObj){

    console.log(
      `${key} shortcut is ${myObj[key]}`
    );
}
```

---

# Output

```javascript
js shortcut is javascript
cpp shortcut is C++
rb shortcut is ruby
```

---

# `for...in` with Arrays

## Code

```javascript
const programming =
[
    "js",
    "rb",
    "py"
]

for(const key in programming){

    console.log(key);
}
```

---

# Output

```javascript
0
1
2
```

---

# Explanation

For arrays:

```javascript
for...in
```

returns:

```javascript
indices
```

not values.

---

# Getting Values

## Code

```javascript
for(const key in programming){

    console.log(programming[key]);
}
```

---

# Output

```javascript
js
rb
py
```

---

# `for...in` on Map ❌

## Code

```javascript
for(const key in map){
    console.log(key);
}
```

---

# Output

```javascript
No Output
```

---

# Important

Maps are not enumerable using:

```javascript
for...in
```

Use:

```javascript
for...of
```

instead.

---

# 3. `forEach()` Loop

Used only on arrays.

---

# Syntax

```javascript
array.forEach(callbackFunction)
```

---

# Example

## Code

```javascript
const coding =
[
    "js",
    "ruby",
    "java"
]

coding.forEach(function(item){

    console.log(item);
})
```

---

# Output

```javascript
js
ruby
java
```

---

# Arrow Function Version

## Code

```javascript
coding.forEach((item) => {

    console.log(item);

})
```

---

# Output

```javascript
js
ruby
java
```

---

# Passing Function Reference

## Code

```javascript
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
```

---

# Important

Write:

```javascript
coding.forEach(printMe)
```

NOT

```javascript
coding.forEach(printMe())
```

because `forEach()` expects a function reference.

---

# Full `forEach()` Syntax

## Code

```javascript
coding.forEach(
    (item, index, arr) => {

    }
)
```

---

# Parameters

| Parameter | Meaning        |
| --------- | -------------- |
| item      | current value  |
| index     | current index  |
| arr       | original array |

---

# Example

## Code

```javascript
coding.forEach(
    (item,index,arr)=>{

        console.log(item);
        console.log(index);
    }
)
```

---

# Output

```javascript
js 0
ruby 1
java 2
```

---

# `forEach()` with Array of Objects

Very important for:

* APIs
* Database data
* JSON responses

---

# Example

## Code

```javascript
const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }

]
```

---

# Accessing Object Data

## Code

```javascript
myCoding.forEach((item)=>{

    console.log(item.languageName);

})
```

---

# Output

```javascript
javascript
java
python
```

---

# Comparison Table

| Feature                 | `for...of` | `for...in` | `forEach()` |
| ----------------------- | ---------- | ---------- | ----------- |
| Arrays                  | ✅ Values   | ✅ Indices  | ✅ Values    |
| Objects                 | ❌          | ✅ Keys     | ❌           |
| Strings                 | ✅          | ✅ Indices  | ❌           |
| Maps                    | ✅          | ❌          | ❌           |
| Returns values directly | ✅          | ❌          | ✅           |
| Most used for objects   | ❌          | ✅          | ❌           |

---

# Interview Questions

### Q1. Difference Between `for...of` and `for...in`?

| `for...of`        | `for...in`      |
| ----------------- | --------------- |
| Gives values      | Gives keys      |
| Used on iterables | Used on objects |

Example:

```javascript
const arr = ["A","B"];
```

### `for...of`

```javascript
A
B
```

### `for...in`

```javascript
0
1
```

---

### Q2. Why doesn't `for...of` work on objects?

Because plain objects are:

```javascript
not iterable
```

---

### Q3. Can `forEach()` be used on objects?

```javascript
No
```

Only arrays have:

```javascript
.forEach()
```

---

# Quick Revision

### `for...of`

```javascript
for(const value of arr){}
```

➡ Gives values

---

### `for...in`

```javascript
for(const key in obj){}
```

➡ Gives keys

---

### `forEach()`

```javascript
arr.forEach((item)=>{})
```

➡ Executes callback for each array element

---

# Most Important Interview Point

### Array

```javascript
const arr = ["js","java"];
```

### `for...of`

Output:

```javascript
js
java
```

### `for...in`

Output:

```javascript
0
1
```

This difference is asked very frequently in interviews.
