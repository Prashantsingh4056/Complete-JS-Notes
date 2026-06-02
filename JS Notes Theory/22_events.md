# JavaScript Notes — Events

---

# What are Events?

An **event** is an action performed by the user or browser.

Examples:

* Clicking a button
* Pressing a key
* Moving the mouse
* Submitting a form
* Loading a page

```js
button.addEventListener("click", function(){
    console.log("Button clicked");
});
```

---

# Old Way of Handling Events ❌

```js
document.getElementById("owl").onclick = function(){
    alert("owl clicked");
}
```

### Why avoid this?

* Only one event handler can exist.
* Less flexible.
* Cannot easily control propagation.

---

# Modern Way — addEventListener() ✅

### Syntax

```js
element.addEventListener(
    eventType,
    callbackFunction,
    useCapture
)
```

### Example

```js
document.getElementById("owl")
.addEventListener("click", function(){
    alert("owl clicked");
}, false);
```

---

# Event Object (e)

Whenever an event occurs, JavaScript passes an **event object**.

```js
document.getElementById("owl")
.addEventListener("click", function(e){
    console.log(e);
});
```

### Common Properties

| Property            | Meaning                      |
| ------------------- | ---------------------------- |
| e.type              | Event type                   |
| e.target            | Element that triggered event |
| e.currentTarget     | Element handling event       |
| e.clientX           | Mouse X position             |
| e.clientY           | Mouse Y position             |
| e.preventDefault()  | Stop default action          |
| e.stopPropagation() | Stop propagation             |

---

# Event Bubbling (Default Behavior)

### Flow

```text
Child → Parent → Grandparent
```

### Example

```js
document.getElementById("images")
.addEventListener("click", function(){
    console.log("UL clicked");
}, false);

document.getElementById("owl")
.addEventListener("click", function(){
    console.log("OWL clicked");
}, false);
```

### Click on Owl

Output:

```text
OWL clicked
UL clicked
```

### Why?

Event first occurs on child (`img`)
then bubbles upward to parent (`ul`).

---

## Visualization

```text
<img id="owl">
      ↑
      |
<ul id="images">
```

Click:

```text
IMG → UL
```

---

# Event Capturing

Opposite of Bubbling.

### Flow

```text
Parent → Child
```

To enable capturing:

```js
addEventListener(event, callback, true)
```

---

### Example

```js
document.getElementById("images")
.addEventListener("click", function(){
    console.log("UL clicked");
}, true);

document.getElementById("owl")
.addEventListener("click", function(){
    console.log("OWL clicked");
}, true);
```

### Output

```text
UL clicked
OWL clicked
```

---

## Visualization

```text
UL → IMG
```

---

# stopPropagation()

Stops event from moving further.

### Example

```js
document.getElementById("owl")
.addEventListener("click", function(e){

    console.log("owl clicked");

    e.stopPropagation();

}, false);
```

### Output

```text
owl clicked
```

`UL clicked` will NOT run.

---

# preventDefault()

Stops browser's default behavior.

---

### Example

```html
<a href="https://google.com">Google</a>
```

Normally:

```text
Click → Opens Google
```

---

### Prevent It

```js
document.getElementById("google")
.addEventListener("click", function(e){

    e.preventDefault();

    console.log("Google clicked");

});
```

### Output

```text
Google clicked
```

Google page will NOT open.

---

# Event Delegation ⭐ Important

Instead of attaching event listeners to every image:

```js
img1.addEventListener(...)
img2.addEventListener(...)
img3.addEventListener(...)
```

Attach one listener to parent:

```js
document.querySelector("#images")
.addEventListener("click", function(e){

});
```

This is called **Event Delegation**.

### Benefits

✅ Less memory

✅ Better performance

✅ Handles dynamically added elements

---

# e.target

Returns the actual clicked element.

### Example

```js
console.log(e.target);
```

Output if Owl clicked:

```html
<img id="owl">
```

---

# parentNode

Gets parent element.

```js
console.log(e.target.parentNode);
```

Output:

```html
<li>
    <img id="owl">
</li>
```

---

# Removing Elements

---

## Method 1

```js
document.querySelector("#images")
.removeChild(removeIt);
```

Removes child from parent.

---

## Method 2

```js
removeIt.remove();
```

Modern and cleaner.

---

## Method 3

```js
removeIt.parentNode.removeChild(removeIt);
```

Most compatible method.

---

# Problem Encountered

When clicking anywhere inside `<ul>`:

```js
let removeIt = e.target.parentNode;
removeIt.parentNode.removeChild(removeIt);
```

Suppose user clicks:

```html
<li>
```

instead of

```html
<img>
```

Then entire structure may get removed incorrectly.

---

# Solution

Check whether clicked element is an image.

```js
if(e.target.tagName === "IMG"){
    let removeIt = e.target.parentNode;
    removeIt.parentNode.removeChild(removeIt);
}
```

---

# Final Working Logic

```js
document.querySelector("#images")
.addEventListener("click", function(e){

    if(e.target.tagName === "IMG"){

        let removeIt = e.target.parentNode;

        removeIt.parentNode.removeChild(removeIt);
    }

}, false);
```

---

# Output

Initial:

```text
Javascript
Japan
River
Owl
Prayer
Google
```

Click on:

```text
Owl
```

After click:

```text
Javascript
Japan
River
Prayer
Google
```

The Owl image disappears.

---

# Interview Questions

### Difference between Bubbling and Capturing?

| Bubbling           | Capturing       |
| ------------------ | --------------- |
| Child → Parent     | Parent → Child  |
| Default behavior   | Must set `true` |
| Most commonly used | Rarely used     |

---

### Difference between preventDefault() and stopPropagation()?

| preventDefault()             | stopPropagation()         |
| ---------------------------- | ------------------------- |
| Stops default browser action | Stops event flow          |
| Link won't open              | Parent handlers won't run |

---

### What is Event Delegation?

Attaching a single event listener to a parent element and handling events of child elements using `e.target`.

```js
parent.addEventListener("click", function(e){
    console.log(e.target);
});
```

⭐ This is one of the most commonly asked JavaScript DOM interview topics.
