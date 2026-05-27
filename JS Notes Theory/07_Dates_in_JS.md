# JavaScript Notes — Dates in JS

---

# Creating Date Object

## Code

```javascript id="q7m2wp"
let myDate = new Date()

console.log(myDate);
```

---

# Definition

```javascript id="x4r8ty"
Date object stores date and time
```

---

# Important

```javascript id="v9m1qz"
typeof myDate
```

Output:

```javascript id="t5x7rk"
object
```

---

# Date Formatting Methods

---

# `toString()`

## Code

```javascript id="n8q3tw"
console.log(myDate.toString());
```

---

# Sample Output

```javascript id="m2x7qp"
Wed May 27 2026 04:33:42 GMT+0000
```

Returns complete date + time.

---

# `toDateString()`

## Code

```javascript id="k5m9rz"
console.log(myDate.toDateString());
```

---

# Output

```javascript id="p1x4tw"
Wed May 27 2026
```

Returns only readable date.

---

# `toISOString()`

## Code

```javascript id="u7m2qy"
console.log(myDate.toISOString());
```

---

# Output

```javascript id="d4x8pk"
2026-05-27T04:34:36.872Z
```

Standard international date format.

---

# `toJSON()`

## Code

```javascript id="f9q3tw"
console.log(myDate.toJSON());
```

---

# Output

```javascript id="j6m1rp"
2026-05-27T04:34:48.249Z
```

Mostly used when sending data in APIs/JSON.

---

# `toLocaleDateString()`

## Code

```javascript id="w3x7qk"
console.log(myDate.toLocaleDateString());
```

---

# Output

```javascript id="r8m2ty"
5/27/2026
```

Returns local date format.

---

# `toLocaleString()`

## Code

```javascript id="v5q9wp"
console.log(myDate.toLocaleString());
```

---

# Output

```javascript id="n1x4rz"
5/27/2026, 4:35:17 AM
```

Returns date + time in local format.

---

# Creating Custom Dates

---

# Using Numbers

## Syntax

```javascript id="x7m2pk"
new Date(year, month, day)
```

---

# Code

```javascript id="z4q8tw"
let myCreatedDate = new Date(2023, 0, 23)

console.log(myCreatedDate.toDateString());
```

---

# Output

```javascript id="k1m6rp"
Mon Jan 23 2023
```

---

# Important Interview Point

Months in JavaScript start from:

| Month    | Index |
| -------- | ----- |
| January  | 0     |
| February | 1     |
| March    | 2     |

---

# Creating Date with Time

## Code

```javascript id="c8x3qw"
myCreatedDate = new Date(2023, 0, 23, 5, 3)

console.log(myCreatedDate.toLocaleString());
```

---

# Output

```javascript id="m5q7rz"
1/23/2023, 5:03:00 AM
```

---

# Creating Date Using String

---

# Format: `yyyy-mm-dd`

## Code

```javascript id="t9m2wp"
myCreatedDate = new Date("2023-01-14")

console.log(myCreatedDate.toLocaleString());
```

---

# Output

```javascript id="u4x8pk"
1/14/2023, 12:00:00 AM
```

---

# Format: `mm-dd-yyyy`

## Code

```javascript id="f2q7ty"
myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toDateString());
```

---

# Output

```javascript id="v6m1rz"
Sat Jan 14 2023
```

---

# Timestamps

## `Date.now()`

Returns current timestamp in milliseconds.

---

# Code

```javascript id="j3x9qp"
let myTimeStamp = Date.now()

console.log(myTimeStamp);
```

---

# Sample Output

```javascript id="n8m4tw"
1779857298249
```

---

# `getTime()`

Returns timestamp of specific date.

---

# Code

```javascript id="w5q2rk"
console.log(myCreatedDate.getTime());
```

---

# Output

```javascript id="r1m7pz"
1673654400000
```

---

# Convert Milliseconds → Seconds

## Code

```javascript id="x9q4tw"
console.log(Math.floor(Date.now()/1000));
```

---

# Output

```javascript id="k6m2ry"
1779857298
```

---

# Explanation

| Part           | Meaning            |
| -------------- | ------------------ |
| `Date.now()`   | milliseconds       |
| `/1000`        | convert to seconds |
| `Math.floor()` | remove decimal     |

---

# Date Getter Methods

---

# `getMonth()`

## Code

```javascript id="b7x3qp"
console.log(newDate.getMonth());
```

---

# Output

```javascript id="p4m8tw"
4
```

---

# Important

Months are:

* `0` based indexing

So:

```javascript id="d2q7rz"
4 = May
```

---

# `getDay()`

## Code

```javascript id="t5m1wp"
console.log(newDate.getDay());
```

---

# Output

```javascript id="x8q4pk"
3
```

---

# Day Index Table

| Day       | Index |
| --------- | ----- |
| Sunday    | 0     |
| Monday    | 1     |
| Tuesday   | 2     |
| Wednesday | 3     |

---

# `getSeconds()`

## Code

```javascript id="r9m2qy"
console.log(newDate.getSeconds());
```

Returns current seconds.

---

# Customizing `toLocaleString()`

## Code

```javascript id="k3x7tw"
newDate.toLocaleString('default', {
    weekday: "long",
})
```

---

# Possible Output

```javascript id="m6q1rz"
Wednesday
```

---

# Explanation

`weekday: "long"` gives full weekday name.

---

# Quick Revision Table

| Method             | Purpose             |
| ------------------ | ------------------- |
| `new Date()`       | current date & time |
| `toString()`       | full date string    |
| `toDateString()`   | readable date       |
| `toISOString()`    | ISO format          |
| `toLocaleString()` | local date & time   |
| `Date.now()`       | current timestamp   |
| `getTime()`        | timestamp of date   |
| `getMonth()`       | current month       |
| `getDay()`         | current day index   |

---

# Most Important Interview Points

```javascript id="g4m9qp"
Months start from 0
```

```javascript id="u1x7rk"
Date.now() gives milliseconds
```

```javascript id="v8q2tw"
typeof new Date() === "object"
```

---

# Quick Revision Examples

```javascript id="f5m3rz"
new Date()

Date.now()

date.getMonth()

date.getDay()

date.toLocaleString()
```
