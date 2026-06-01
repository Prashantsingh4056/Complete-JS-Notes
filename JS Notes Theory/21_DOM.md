# Code : 
---

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code | DOM</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
<script>

    // general method
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

    // better method
    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //edit
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()


</script>
</html>

```

---

# JavaScript Notes — DOM Manipulation (Create, Edit, Remove Elements)

---

# What is the DOM?

**DOM (Document Object Model)** is a tree-like representation of an HTML document.

JavaScript uses the DOM to:

* Create elements
* Modify elements
* Remove elements
* Change styles
* Handle events

---

# Initial HTML

```html
<ul class="language">
    <li>Javascript</li>
</ul>
```

---

# Current DOM Structure

```text
ul.language
│
└── Javascript
```

---

# Creating Elements

## Method 1: Using `innerHTML`

### Code

```javascript
function addLanguage(langName){
    const li = document.createElement('li');

    li.innerHTML = `${langName}`;

    document
        .querySelector('.language')
        .appendChild(li);
}

addLanguage("python");
addLanguage("typescript");
```

---

## Explanation

### Create Element

```javascript
const li = document.createElement('li');
```

Creates:

```html
<li></li>
```

---

### Add Content

```javascript
li.innerHTML = `${langName}`;
```

Example:

```javascript
langName = "python"
```

Creates:

```html
<li>python</li>
```

---

### Add to DOM

```javascript
document
.querySelector('.language')
.appendChild(li);
```

Appends the new `<li>` inside `<ul>`.

---

# DOM After Execution

```html
<ul class="language">
    <li>Javascript</li>
    <li>python</li>
    <li>typescript</li>
</ul>
```

---

# Problem with `innerHTML`

```javascript
li.innerHTML = langName
```

Every time, the browser parses HTML again.

This becomes slower when working with large DOM trees.

---

# Optimized Method

## Using `createTextNode()`

### Code

```javascript
function addOptiLanguage(langName){

    const li =
        document.createElement('li');

    li.appendChild(
        document.createTextNode(langName)
    );

    document
        .querySelector('.language')
        .appendChild(li);
}

addOptiLanguage("golang");
```

---

# Explanation

### Create Element

```javascript
const li = document.createElement('li');
```

Creates:

```html
<li></li>
```

---

### Create Text Node

```javascript
document.createTextNode(langName)
```

Example:

```javascript
golang
```

Creates:

```text
golang
```

(Text node)

---

### Attach Text Node

```javascript
li.appendChild(
    document.createTextNode(langName)
);
```

Result:

```html
<li>golang</li>
```

---

# DOM After Execution

```html
<ul class="language">
    <li>Javascript</li>
    <li>python</li>
    <li>typescript</li>
    <li>golang</li>
</ul>
```

---

# Editing Elements

## Selecting the Second Element

### Code

```javascript
const secondLang =
document.querySelector(
    "li:nth-child(2)"
);
```

---

# Output

Selected Element:

```html
<li>python</li>
```

---

# Method 1 (Commented)

```javascript
secondLang.innerHTML = "Mojo";
```

Result:

```html
<li>Mojo</li>
```

---

# Better Method: `replaceWith()`

### Code

```javascript
const newli =
document.createElement('li');

newli.textContent = "Mojo";

secondLang.replaceWith(newli);
```

---

# Explanation

Creates:

```html
<li>Mojo</li>
```

and replaces

```html
<li>python</li>
```

with

```html
<li>Mojo</li>
```

---

# DOM After Replacement

```html
<ul class="language">
    <li>Javascript</li>
    <li>Mojo</li>
    <li>typescript</li>
    <li>golang</li>
</ul>
```

---

# Editing Using `outerHTML`

## Code

```javascript
const firstLang =
document.querySelector(
    "li:first-child"
);

firstLang.outerHTML =
'<li>TypeScript</li>';
```

---

# What is `outerHTML`?

Replaces the entire element including its tags.

---

### Before

```html
<li>Javascript</li>
```

---

### After

```html
<li>TypeScript</li>
```

---

# DOM After Edit

```html
<ul class="language">
    <li>TypeScript</li>
    <li>Mojo</li>
    <li>typescript</li>
    <li>golang</li>
</ul>
```

---

# Removing Elements

## Code

```javascript
const lastLang =
document.querySelector(
    'li:last-child'
);

lastLang.remove();
```

---

# Selected Element

```html
<li>golang</li>
```

---

# After Removal

```html
<ul class="language">
    <li>TypeScript</li>
    <li>Mojo</li>
    <li>typescript</li>
</ul>
```

---

# Final DOM Structure

```html
<ul class="language">
    <li>TypeScript</li>
    <li>Mojo</li>
    <li>typescript</li>
</ul>
```

---

# DOM Methods Used

| Method             | Purpose                  |
| ------------------ | ------------------------ |
| `createElement()`  | Create HTML element      |
| `createTextNode()` | Create text node         |
| `appendChild()`    | Add child element        |
| `querySelector()`  | Select element           |
| `replaceWith()`    | Replace element          |
| `outerHTML`        | Replace complete element |
| `remove()`         | Delete element           |
| `textContent`      | Set text content         |
| `innerHTML`        | Set HTML content         |

---

# Execution Flow of Your Code

### Initial

```html
Javascript
```

↓

### addLanguage("python")

```html
Javascript
python
```

↓

### addLanguage("typescript")

```html
Javascript
python
typescript
```

↓

### addOptiLanguage("golang")

```html
Javascript
python
typescript
golang
```

↓

### Replace 2nd Element

```html
Javascript
Mojo
typescript
golang
```

↓

### Replace 1st Element

```html
TypeScript
Mojo
typescript
golang
```

↓

### Remove Last Element

```html
TypeScript
Mojo
typescript
```

---

# Interview Questions

### Q1. Difference between `innerHTML` and `textContent`?

| innerHTML                    | textContent               |
| ---------------------------- | ------------------------- |
| Parses HTML                  | Treats everything as text |
| Slower                       | Faster                    |
| Can cause XSS if not careful | Safer                     |

Example:

```javascript
element.innerHTML = "<h1>Hello</h1>"
```

Creates:

```html
<h1>Hello</h1>
```

---

```javascript
element.textContent = "<h1>Hello</h1>"
```

Displays:

```text
<h1>Hello</h1>
```

---

### Q2. Why is `createTextNode()` preferred?

```javascript
li.appendChild(
    document.createTextNode(text)
);
```

Because:

* More efficient
* Safer
* Avoids unnecessary HTML parsing

---

### Q3. Difference between `innerHTML` and `outerHTML`?

#### innerHTML

Changes content inside element.

```html
<li>Hello</li>
```

↓

```javascript
li.innerHTML = "World"
```

↓

```html
<li>World</li>
```

---

#### outerHTML

Replaces the whole element.

```html
<li>Hello</li>
```

↓

```javascript
li.outerHTML = "<p>World</p>"
```

↓

```html
<p>World</p>
```

---

# Quick Revision

### Create Element

```javascript
const li =
document.createElement('li');
```

---

### Add Text

```javascript
li.textContent = "Java";
```

or

```javascript
li.appendChild(
    document.createTextNode("Java")
);
```

---

### Append Element

```javascript
parent.appendChild(li);
```

---

### Replace Element

```javascript
oldElement.replaceWith(newElement);
```

---

### Replace Entire Element

```javascript
element.outerHTML =
"<li>New Text</li>";
```

---

### Remove Element

```javascript
element.remove();
```

---

# Most Important Interview Point

For creating DOM elements efficiently:

```javascript
const li =
document.createElement('li');

li.appendChild(
    document.createTextNode("Java")
);

document
.querySelector('.language')
.appendChild(li);
```

✅ Faster than using `innerHTML`

✅ Safer

✅ Preferred in real projects and interviews.
