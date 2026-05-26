# JavaScript Notes — Comparison Operators

---

# Important Rule

```javascript id="f4q8xp"
Always compare values of same datatype
```

Different datatype comparisons can give unexpected results.

---

# Normal Comparisons

## Code

```javascript id="n7m2zk"
console.log("2" > 1);
console.log("02" > 1);
```

---

# Output

```javascript id="x5v9re"
true
true
```

---

# Explanation

JavaScript automatically converts strings into numbers during comparison.

---

## Case 1

```javascript id="r3k8yw"
"2" > 1
```

becomes:

```javascript id="c6p1tf"
2 > 1
```

Output:

```javascript id="m9x4qd"
true
```

---

## Case 2

```javascript id="j7v2nb"
"02" > 1
```

becomes:

```javascript id="u5q8lc"
2 > 1
```

Output:

```javascript id="z2r6fk"
true
```

---

# Comparison with `null`

## Code

```javascript id="b1n7xp"
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
```

---

# Output

```javascript id="q6m4rw"
false
false
true
```

---

# Explanation

---

## `null > 0`

```javascript id="w8t2ly"
false
```

During comparison:

* `null` converts to `0`

So:

```javascript id="v5k1px"
0 > 0
```

Result:

```javascript id="s9m6qe"
false
```

---

## `null == 0`

```javascript id="h3x7wa"
false
```

`==` works differently.

`null` only loosely equals:

* `undefined`

So it does NOT become `0` here.

---

## `null >= 0`

```javascript id="e7p4zt"
true
```

Comparison converts:

```javascript id="k2m8qy"
null → 0
```

So:

```javascript id="u1r5nf"
0 >= 0
```

Result:

```javascript id="g6x9pl"
true
```

---

# Comparison with `undefined`

## Code

```javascript id="n4q8tw"
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
```

---

# Output

```javascript id="d7v2kc"
false
false
false
```

---

# Explanation

`undefined` does NOT convert properly in comparisons.

So all results become:

```javascript id="x3m9qp"
false
```

---

# Strict Equality (`===`)

## Code

```javascript id="k8r4yn"
console.log("2" === 2);
```

---

# Output

```javascript id="t5p7xw"
false
```

---

# Explanation

## `===`

Checks:

* value
* datatype

---

## Comparison

| Operator | Checks           |
| -------- | ---------------- |
| `==`     | only value       |
| `===`    | value + datatype |

---

## Example

```javascript id="m2x8qb"
"2" == 2
```

Output:

```javascript id="v9k4tr"
true
```

because datatype conversion happens.

---

```javascript id="f7q1zp"
"2" === 2
```

Output:

```javascript id="j5m8wc"
false
```

because:

* string ≠ number

---

# Best Practice

✅ Prefer using:

```javascript id="q4r9xn"
===
```

because it avoids unexpected type conversion.

---

# Quick Revision Table

| Expression      | Output  |
| --------------- | ------- |
| `"2" > 1`       | `true`  |
| `null > 0`      | `false` |
| `null >= 0`     | `true`  |
| `undefined > 0` | `false` |
| `"2" == 2`      | `true`  |
| `"2" === 2`     | `false` |

---

# Important Interview Point

```javascript id="s8x3vk"
null == undefined   // true
```

But:

```javascript id="c5m7qy"
null === undefined  // false
```

because datatypes are different.

---

# Quick Revision

```javascript id="h2r8pw"
==   → checks value only
===  → checks value + datatype
```
