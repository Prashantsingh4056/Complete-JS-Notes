# JavaScript Notes — Strings

---

# Declaring Strings

## Normal String

```javascript id="n4x8qp"
const name = "Prashant"
```

---

## String Object

```javascript id="v7m2rk"
const gameName = new String("prashantpc")
```

Creates a String object.

---

# Old vs Modern String Concatenation

## Old Syntax (Outdated)

```javascript id="q5r1tx"
console.log(name + repoCount + " value");
```

---

## Modern Syntax — Template Literals

```javascript id="w8m4zy"
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
```

---

# Output

```javascript id="j3x7pk"
Hello my name is Prashant and my repo count is 20
```

---

# Template Literals

Uses:

```javascript id="k6v9tw"
` `
```

and variables are inserted using:

```javascript id="h2q8mp"
${variable}
```

---

# Accessing Characters

## Code

```javascript id="b7m1xr"
console.log(gameName[0]);
```

---

# Output

```javascript id="d4x9qp"
p
```

---

# Explanation

Strings can be accessed using index numbers.

| Index | Character |
| ----- | --------- |
| 0     | p         |
| 1     | r         |
| 2     | a         |

---

# Prototype

## Code

```javascript id="f9q2vk"
console.log(gameName.__proto__);
```

---

# Output

```javascript id="s6m8tw"
{}
```

---

# Definition

Prototype is the mechanism through which objects inherit properties and methods.

String methods like:

* `length`
* `toUpperCase()`
* `charAt()`

come from prototype.

---

# String Methods

---

# 1. `length`

## Code

```javascript id="x4r7zp"
console.log(gameName.length);
```

---

# Output

```javascript id="v1m5qy"
10
```

Returns total number of characters.

---

# 2. `toUpperCase()`

## Code

```javascript id="k8q3wt"
console.log(gameName.toUpperCase());
```

---

# Output

```javascript id="c5m9rx"
PRASHANTPC
```

Converts string to uppercase.

---

# 3. `charAt()`

## Code

```javascript id="r7x2pk"
console.log(gameName.charAt(5));
```

---

# Output

```javascript id="m4v8qy"
a
```

Returns character at given index.

---

# 4. `indexOf()`

## Code

```javascript id="p1q7zw"
console.log(gameName.indexOf("t"));
```

---

# Output

```javascript id="u8m3rx"
7
```

Returns first index of character.

---

# `substring()`

## Syntax

```javascript id="g5x9tw"
string.substring(start, end)
```

* End index not included
* Negative values not allowed

---

# Code

```javascript id="y2m6qp"
const newString = gameName.substring(0,4)

console.log(newString);
```

---

# Output

```javascript id="h7r1vk"
pras
```

---

# `slice()`

## Syntax

```javascript id="w4q8my"
string.slice(start, end)
```

* Supports negative indexing

---

# Code

```javascript id="j9x2pr"
const anotherString = gameName.slice(-8,4)

console.log(anotherString);
```

---

# Output

```javascript id="b6m7qw"
as
```

---

# Explanation

Negative index starts from end.

For:

```javascript id="n3q8tx"
"prashantpc"
```

`-8` points to:

```javascript id="v5m1rk"
a
```

Then slice continues till index `4`.

---

# `trim()`

Removes extra spaces from start and end.

---

# Code

```javascript id="f8q4zp"
const newStringOne = "  Prashant      "

console.log(newStringOne.trim());
```

---

# Output

```javascript id="s2m9wx"
Prashant
```

---

# `replace()`

Replaces part of string.

---

# Code

```javascript id="r5x1qp"
const url = "https://xyz.com/prashant%20singh"

console.log(url.replace('%20', '-'));
```

---

# Output

```javascript id="u4m7zy"
https://xyz.com/prashant-singh
```

---

# `includes()`

Checks whether value exists in string.

---

# Code

```javascript id="m8q2vk"
console.log(url.includes("xyz"));
```

---

# Output

```javascript id="x3r6pw"
true
```

---

# `split()`

Converts string into array.

---

# Code

```javascript id="c7m1tx"
console.log(gameName.split('-'));
console.log(typeof gameName.split('-'));
```

---

# Output

```javascript id="v9q4rk"
[ 'prashantpc' ]
object
```

---

# Explanation

Since `-` does not exist in string:

```javascript id="k2x8mw"
"prashantpc"
```

whole string becomes single array element.

---

# Important Interview Point

Arrays return:

```javascript id="p5m7qy"
object
```

when checked using:

```javascript id="z1q9rx"
typeof
```

---

# Quick Revision Table

| Method          | Purpose                                |
| --------------- | -------------------------------------- |
| `length`        | total characters                       |
| `toUpperCase()` | uppercase conversion                   |
| `charAt()`      | character at index                     |
| `indexOf()`     | index of character                     |
| `substring()`   | extract part of string                 |
| `slice()`       | extract part (supports negative index) |
| `trim()`        | remove spaces                          |
| `replace()`     | replace text                           |
| `includes()`    | check existence                        |
| `split()`       | convert to array                       |

---

# Quick Revision Examples

```javascript id="a4m8tw"
str.length
str.toUpperCase()
str.charAt(0)
str.indexOf('a')

str.substring(0,4)
str.slice(-3)

str.trim()

str.replace('a','b')

str.includes('abc')

str.split('-')
```
