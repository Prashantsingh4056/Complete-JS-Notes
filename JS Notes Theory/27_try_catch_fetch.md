This is a very common interview question, and the answer lies in the **Event Loop**, **Web APIs**, and **Microtask Queue vs Callback Queue**.

---

## First, understand your code

You have:

```js
// Promise 1
setTimeout(() => {
    console.log("Asynchronous task is completed")
}, 1000)

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
```

Many people expect:

```text
Asynchronous task is completed
[API Data]
```

But often you see:

```text
[API Data]
Asynchronous task is completed
```

even though both have a delay.

---

# The reason: Promise callbacks have higher priority

JavaScript has **two queues**:

### 1. Microtask Queue (High Priority)

Contains:

* Promise `.then()`
* `.catch()`
* `.finally()`
* `async/await`

Example:

```js
Promise.resolve().then(() => {
    console.log("Promise");
});
```

---

### 2. Callback Queue / Task Queue (Low Priority)

Contains:

* setTimeout
* setInterval
* DOM events

Example:

```js
setTimeout(() => {
    console.log("Timeout");
}, 0);
```

---

# Event Loop Rule

When Call Stack becomes empty:

### Step 1

Execute **ALL Microtasks**

### Step 2

Execute one Task from Callback Queue

So:

```text
Microtask Queue
       ↑
Higher Priority

Callback Queue
       ↑
Lower Priority
```

---

# Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
Timeout
```

Why?

```text
Call Stack:
Start
End

Microtask Queue:
Promise

Callback Queue:
Timeout
```

Event Loop checks:

```text
Stack Empty?
YES

Run all microtasks first
=> Promise

Then callback queue
=> Timeout
```

---

# Now Let's Apply This To Fetch

When you do:

```js
fetch(url)
```

the request goes to the browser's Web API.

```text
JS Engine
   |
   |
 fetch()
   |
   ↓
Browser/Web API
```

The browser starts the network request.

Meanwhile JS continues running.

---

When the response arrives:

```js
.then(...)
```

is not placed in the Callback Queue.

It is placed in the:

```text
Microtask Queue
```

because Promise callbacks are microtasks.

---

# Meanwhile setTimeout

```js
setTimeout(() => {
   console.log("Done")
},1000)
```

After 1 second:

```text
Callback Queue
    ↓
"Done"
```

---

# Event Loop Decision

Suppose at some moment:

```text
Microtask Queue:
fetch .then()

Callback Queue:
setTimeout callback
```

Event Loop always does:

```text
1. Execute all Microtasks
2. Execute Callback Queue
```

So:

```text
fetch data printed
then
setTimeout printed
```

---

# Visual Diagram

```text
              ┌──────────────┐
              │ Call Stack   │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ Event Loop   │
              └──────┬───────┘
                     │
         ┌───────────┴───────────┐
         ▼                       ▼

 ┌────────────────┐     ┌────────────────┐
 │ Microtask Queue│     │ Callback Queue │
 │ Promise.then() │     │ setTimeout()   │
 │ async/await    │     │ setInterval()  │
 └────────────────┘     └────────────────┘

      Higher Priority        Lower Priority
```

---

# Another Important Example

```js
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => {
    console.log(3);
});

console.log(4);
```

Output:

```text
1
4
3
2
```

Execution:

```text
Call Stack:
1
4

Microtask Queue:
3

Callback Queue:
2

Event Loop:
3 first
2 later
```

---

# One correction in your notes

You wrote:

```js
console.log() is given by v8 engine
```

Not exactly.

`console.log()` is usually provided by the **host environment**:

* Browser → Web APIs / DevTools
* Node.js → Node runtime

V8 executes JavaScript, but `console.log()` itself is not part of the ECMAScript language specification.

---

## Interview Summary

When asked:

> Why is API data printed before `"Asynchronous task is completed"`?

Answer:

> `fetch()` returns a Promise. Promise callbacks (`then`, `catch`, `finally`) are placed in the **Microtask Queue**, while `setTimeout` callbacks are placed in the **Callback Queue**. The Event Loop always processes the Microtask Queue completely before taking tasks from the Callback Queue. Therefore, the fetch result is often printed before the `setTimeout` callback, even when both are asynchronous.
