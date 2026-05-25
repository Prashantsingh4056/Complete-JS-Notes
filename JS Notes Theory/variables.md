# Variables

---

# Declaring Variables in JavaScript

JavaScript provides 3 ways to declare variables:

| Keyword | Reassign Allowed? | Scope          | Recommended |
| ------- | ----------------- | -------------- | ----------- |
| `const` | ❌ No              | Block Scope    | ✅ Yes       |
| `let`   | ✅ Yes             | Block Scope    | ✅ Yes       |
| `var`   | ✅ Yes             | Function Scope | ❌ Avoid     |

---

# Syntax

## `const`

```javascript id="g7z3ny"
const accountId = 212123
```

* Value cannot be changed later.

---

## `let`

```javascript id="z3i8tr"
let accountState;
```

* Value can be changed later.
* Preferred over `var`.

---

## `var`

```javascript id="jps5lb"
var accountEmail = "abc@gmail.com"
```

* Old way of declaring variables.
* Avoid using because of scope issues.

---

# Full Code

```javascript id="r1k0cs"
const accountId = 212123
var accountEmail = "prashantSingh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   // not allowed

accountEmail = "ps@ps.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId);

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])
```

---

# Output

## `console.log(accountId)`

```javascript id="lm2wq0"
212123
```

---

## `console.table()`

| (index) | Values                        |
| ------- | ----------------------------- |
| 0       | 212123                        |
| 1       | [ps@ps.com](mailto:ps@ps.com) |
| 2       | 21212121                      |
| 3       | Bangaluru                     |
| 4       | undefined                     |

---

# Important Points

## Why `undefined`?

```javascript id="1yzl22"
let accountState;
```

No value assigned → JavaScript stores `undefined`.

---

## Why `const` Cannot Change?

```javascript id="mx8lzm"
const accountId = 212123
```

`const` creates a constant value.

❌ Not Allowed:

```javascript id="z5j2k5"
accountId = 2
```

---

# Best Practices

✅ Use `const` by default
✅ Use `let` when value changes
❌ Avoid `var`

---

# Quick Revision

```javascript id="7iy6va"
const → fixed value
let   → changeable value
var   → old method (avoid)
```
