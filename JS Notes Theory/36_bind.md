# Code :

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React{
        constructor(){
            this.library = "React"
            this.server = "https://localhost:3000"

            // requirement
            document
                    .querySelector("button")
                    .addEventListener("click" , this.handleClick.bind(this))  // this -> context of button
        }

        handleClick(){
            console.log("button clicked");
            console.log(this);  

            console.log(this.server);
            
        }
    }

    const app = new React();
</script>
</html>

```

# Explanation :

# Topic: Understanding `bind(this)` in the React Class Example

This is one of the most important JavaScript concepts for React interviews.

---

## Complete Code

```js
class React{
    constructor(){
        this.library = "React"
        this.server = "https://localhost:3000"

        document
                .querySelector("button")
                .addEventListener("click", this.handleClick.bind(this))
    }

    handleClick(){
        console.log("button clicked");
        console.log(this);
        console.log(this.server);
    }
}

const app = new React();
```

---

# Step 1: `new React()` is executed

```js
const app = new React();
```

When `new` is used:

### Behind the scenes

1. Empty object created

```js
{}
```

2. `this` points to that object

3. Constructor executes

```js
this.library = "React"
this.server = "https://localhost:3000"
```

Object becomes:

```js
{
    library: "React",
    server: "https://localhost:3000"
}
```

---

# Step 2: Event Listener is Added

```js
document
    .querySelector("button")
    .addEventListener("click", this.handleClick.bind(this))
```

At this moment:

```js
this === app
```

So:

```js
this.handleClick
```

means

```js
app.handleClick
```

---

# What happens WITHOUT bind?

Suppose we write:

```js
.addEventListener("click", this.handleClick)
```

Now browser stores only the function reference.

```js
button.onclick = handleClick
```

Later when button is clicked:

```js
handleClick()
```

Browser automatically sets:

```js
this = button
```

inside the callback.

So:

```js
handleClick(){
    console.log(this);
}
```

prints

```html
<button>Button Clicked</button>
```

and

```js
console.log(this.server)
```

prints

```js
undefined
```

because button doesn't have a `server` property.

---

# Why `bind(this)`?

```js
this.handleClick.bind(this)
```

creates a new function.

The new function permanently remembers:

```js
this = app
```

No matter who calls it later.

---

## Visualization

Without bind:

```js
Button Click
      ↓
handleClick()
      ↓
this = button
```

With bind:

```js
Button Click
      ↓
boundHandleClick()
      ↓
this = app
```

---

# Step 3: User Clicks Button

Browser executes:

```js
boundHandleClick()
```

Since we used:

```js
.bind(this)
```

the value of `this` remains:

```js
app
```

Object:

```js
{
    library: "React",
    server: "https://localhost:3000"
}
```

---

# Output

```js
button clicked
```

```js
React {
    library: 'React',
    server: 'https://localhost:3000'
}
```

```js
https://localhost:3000
```

---

# What Does `bind()` Return?

```js
const newFunc = oldFunc.bind(obj)
```

returns a brand new function.

Example:

```js
function greet(){
    console.log(this.name);
}

const user = {
    name: "Prashant"
}

const newGreet = greet.bind(user);

newGreet();
```

Output:

```js
Prashant
```

---

# Why React Uses This Frequently?

In class-based React components:

```js
class App extends React.Component{

    handleClick(){
        console.log(this);
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                Click
            </button>
        )
    }
}
```

Without binding:

```js
this === undefined
```

inside `handleClick`.

So developers used:

```js
this.handleClick = this.handleClick.bind(this);
```

inside constructor.

---

# Easy Interview Answer

### Why do we use `bind(this)`?

`bind(this)` creates a new function whose `this` value is permanently fixed to the current object. It prevents JavaScript from changing the context when the function is used as a callback (such as an event listener).

Without `bind(this)`:

```js
this -> button element
```

With `bind(this)`:

```js
this -> React object instance
```

---

# One-line Memory Trick

👉 **"bind() locks the value of `this` forever."**

```js
this.handleClick.bind(this)
```

means

> "No matter who calls `handleClick` later, always keep `this` equal to my React object."
