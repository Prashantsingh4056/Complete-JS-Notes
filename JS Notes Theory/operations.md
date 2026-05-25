# JavaScript Notes — Operations (Continued)

---

# Negative Value

## Code

```javascript id="r6m2tx"
let value = 3
let negValue = -value

console.log(negValue);
```

---

# Output

```javascript id="j8p4qy"
-3
```

---

# Explanation

```javascript id="c7n1zw"
-value
```

converts positive number into negative number.

---

# String Concatenation

## Code

```javascript id="g4x9ke"
let str1 = "hello"
let str2 = " Prashant"

let str3 = str1 + str2

console.log(str3);
```

---

# Output

```javascript id="y2w6fh"
hello Prashant
```

---

# Explanation

`+` operator joins strings.

This is called:

```javascript id="u9d3pl"
String Concatenation
```

---

# Addition with Strings and Numbers

## Code

```javascript id="m4v7ra"
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
```

---

# Output

```javascript id="t7q5xn"
12
12
122
32
```

---

# Explanation

---

## Case 1

```javascript id="n8k3fs"
"1" + 2
```

Output:

```javascript id="b4z1qp"
12
```

Number converts into string.

---

## Case 2

```javascript id="k1m7ty"
1 + "2"
```

Output:

```javascript id="r5u9eh"
12
```

Again number converts into string.

---

## Case 3

```javascript id="f2x8wd"
"1" + 2 + 2
```

Output:

```javascript id="z3v6pk"
122
```

Evaluation happens left → right.

Step-by-step:

```javascript id="e8c4ny"
"1" + 2   → "12"
"12" + 2  → "122"
```

---

## Case 4

```javascript id="w7n2qb"
1 + 2 + "2"
```

Output:

```javascript id="m5p8jr"
32
```

Step-by-step:

```javascript id="u1y6kc"
1 + 2     → 3
3 + "2"   → "32"
```

---

# Unary Plus (`+`)

## Code

```javascript id="h3v7fd"
console.log(+true);
console.log(+"");
```

---

# Output

```javascript id="x8m2qw"
1
0
```

---

# Explanation

Unary `+` converts value into number.

| Expression | Output |
| ---------- | ------ |
| `+true`    | `1`    |
| `+false`   | `0`    |
| `+""`      | `0`    |

---

# Multiple Variable Assignment

## Code

```javascript id="p6t9wr"
let num1, num2, num3

num1 = num2 = num3 = 2 + 2
```

---

# Result

```javascript id="v2q5mk"
num1 = 4
num2 = 4
num3 = 4
```

---

# Important Point

This works, but:

❌ Less readable
❌ Not recommended in real projects

---

# Increment Operator (`++`)

## Code

```javascript id="r8k1xy"
let gameCounter = 100;

gameCounter++;

console.log(gameCounter);
```

---

# Output

```javascript id="w4m7zc"
101
```

---

# Explanation

```javascript id="z6p3lh"
gameCounter++
```

increases value by `1`.

Equivalent to:

```javascript id="s5v8fd"
gameCounter = gameCounter + 1
```

---

# Quick Revision

| Operation   | Example     | Output         |
| ----------- | ----------- | -------------- |
| Negative    | `-3`        | `-3`           |
| String Join | `"a" + "b"` | `"ab"`         |
| Increment   | `x++`       | increases by 1 |
| Unary Plus  | `+true`     | `1`            |

---

# Important Interview Point

When `+` is used with strings:

```javascript id="n4y8wt"
JavaScript prefers string conversion
```

---

# Quick Revision Examples

```javascript id="q1x6mp"
"1" + 2      // "12"
1 + 2 + "2" // "32"

+true        // 1
+""          // 0

x++          // increment by 1
```
