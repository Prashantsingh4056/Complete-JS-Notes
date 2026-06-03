# Code :

```js

<!-- XMLHttpRequest -->
 <!-- Ajax -->

<!-- Asynchronous JavaScript and XML (Ajax, or AJAX) is a web development 
 technique in which a web app fetches content from the server by making 
 asynchronous HTTP requests, and uses the new content to update the relevant 
 parts of the page without requiring a full page load. This can make the page more 
 responsive, because only the parts that need to be updated are requested. -->

 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 </head>
 <body>

    <!-- XMLHttpRequest: readyState property -->

    <!-- The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states: -->

    <!--
    Value	 State	             Description

    0	     UNSENT	            Client has been created. open() not called yet.

    1	     OPENED	            open() has been called.

    2	     HEADERS_RECEIVED	send() has been called, and headers and status are available.

    3	     LOADING	        Downloading; responseText holds partial data.

    4	     DONE	            The operation is complete. -->
    
 </body>
 <script>
    const requestUrl = "https://api.github.com/users/prashantsingh4056"
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , requestUrl);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState === 4){
            // console.log(xhr.response);

            const data = this.responseText;  // responseText is a string

            // to convert it into an object we use JSON.parse()
            const objData = JSON.parse(data);
            console.log(typeof data); // string
            console.log(typeof objData); // object

            console.log(objData.followers);  // to access followers property of the object
            console.log(this.responseText);
        }
    }

    xhr.send();

    // v8 engine provides developer tools in the browser which can be used to test the API request and response
    // we can also use fetch API to make API requests which is more modern and easier to use than XMLHttpRequest
    // console.log() is given by v8 engine to print the output in the console of the browser

     
 </script>
 </html>
```

---
---


# JavaScript Notes — XMLHttpRequest (XHR) & AJAX

---

# What is AJAX?

**AJAX (Asynchronous JavaScript and XML)** is a technique used to communicate with a server **without reloading the webpage**.

### Before AJAX

```text
User Action
     ↓
Request Sent
     ↓
Entire Page Reloads
     ↓
New Data Displayed
```

### With AJAX

```text
User Action
     ↓
Request Sent
     ↓
Receive Data
     ↓
Update Only Required Part
```

Result:

✅ Faster websites

✅ Better user experience

✅ No full page refresh

---

# What is XMLHttpRequest (XHR)?

Before `fetch()`, JavaScript used **XMLHttpRequest** to make HTTP requests.

```js
const xhr = new XMLHttpRequest();
```

This creates an XHR object that can communicate with a server.

---

# Basic Flow

```text
1. Create XHR Object

2. Open Connection

3. Listen for Response

4. Send Request

5. Process Response
```

---

# Your Code

```js
const requestUrl =
"https://api.github.com/users/prashantsingh4056"

const xhr = new XMLHttpRequest();

xhr.open("GET", requestUrl);

xhr.onreadystatechange = function(){

}

xhr.send();
```

---

# Step 1: Create XHR Object

```js
const xhr = new XMLHttpRequest();
```

Creates a request object.

---

# Step 2: Open Connection

### Syntax

```js
xhr.open(method, url)
```

Example:

```js
xhr.open(
    "GET",
    "https://api.github.com/users/prashantsingh4056"
);
```

### Meaning

| Parameter | Meaning       |
| --------- | ------------- |
| GET       | Retrieve data |
| POST      | Send data     |
| PUT       | Update data   |
| DELETE    | Delete data   |

---

# Step 3: onreadystatechange

Whenever request state changes:

```js
xhr.onreadystatechange = function(){

}
```

This function runs automatically.

---

# readyState Property

XHR moves through 5 states.

| Value | State            | Meaning                   |
| ----- | ---------------- | ------------------------- |
| 0     | UNSENT           | open() not called         |
| 1     | OPENED           | open() called             |
| 2     | HEADERS_RECEIVED | Response headers received |
| 3     | LOADING          | Response downloading      |
| 4     | DONE             | Request complete          |

---

## Example

```js
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
}
```

Output:

```text
1
2
3
4
```

---

# Why Check readyState === 4 ?

Because only then is the response fully available.

```js
if(xhr.readyState === 4){

}
```

Without this:

```js
xhr.responseText
```

may be incomplete.

---

# Step 4: Send Request

```js
xhr.send();
```

Actually sends request to server.

Until `send()` is called:

```text
No request is made
```

---

# Response Handling

```js
const data = this.responseText;
```

Response received from GitHub API.

---

## Important

`responseText` is always a string.

Example:

```js
console.log(typeof data);
```

Output:

```text
string
```

---

# Why Use JSON.parse()?

GitHub returns:

```json
{
    "login": "prashantsingh4056",
    "followers": 10
}
```

But JavaScript receives:

```js
'{"login":"prashantsingh4056","followers":10}'
```

which is a string.

Convert it into an object:

```js
const objData = JSON.parse(data);
```

---

# After Conversion

```js
console.log(typeof objData);
```

Output:

```text
object
```

---

# Accessing Data

```js
console.log(objData.followers);
```

Example Output:

```text
10
```

(Actual value depends on current GitHub profile.)

---

# Complete Flow Diagram

```text
xhr.open()
      ↓
readyState = 1

xhr.send()
      ↓
Request Sent

readyState = 2
      ↓
Headers Received

readyState = 3
      ↓
Data Downloading

readyState = 4
      ↓
Response Complete
      ↓
JSON.parse()
      ↓
Use Data
```

---

# Understanding `this`

Inside:

```js
xhr.onreadystatechange = function(){

}
```

`this` refers to:

```js
xhr
```

So these are equivalent:

```js
xhr.responseText
```

and

```js
this.responseText
```

---

# Expected Console Output

```js
console.log(xhr.readyState);
```

Output:

```text
1
2
3
4
```

Then:

```js
console.log(typeof data);
```

Output:

```text
string
```

Then:

```js
console.log(typeof objData);
```

Output:

```text
object
```

Then:

```js
console.log(objData.followers);
```

Output:

```text
<number of followers>
```

---

# Modern Alternative — Fetch API

Today we usually use:

```js
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
```

instead of:

```js
XMLHttpRequest
```

because:

✅ Cleaner

✅ Promise-based

✅ Easier error handling

---

# Interview Questions

### Q1: What is AJAX?

A technique that allows JavaScript to communicate with a server asynchronously without reloading the webpage.

---

### Q2: What is XMLHttpRequest?

A browser API used to send HTTP requests and receive responses from a server.

---

### Q3: Why use JSON.parse()?

Because API responses are usually received as strings, and `JSON.parse()` converts them into JavaScript objects.

---

### Q4: What does `readyState === 4` mean?

```text
DONE
```

Request is complete and response is available.

---

### Q5: Difference Between XHR and Fetch?

| XMLHttpRequest            | Fetch                          |
| ------------------------- | ------------------------------ |
| Older API                 | Modern API                     |
| Callback-based            | Promise-based                  |
| More verbose              | Cleaner syntax                 |
| Uses `onreadystatechange` | Uses `.then()` / `async-await` |

---

# Quick Revision

```js
const xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.onreadystatechange = function(){

    if(xhr.readyState === 4){

        const data = JSON.parse(this.responseText);

        console.log(data.followers);
    }
}

xhr.send();
```

### Remember

```text
Create XHR
     ↓
open()
     ↓
onreadystatechange
     ↓
readyState === 4
     ↓
JSON.parse()
     ↓
Use Data
```

⭐ This topic is important because it connects directly with **APIs, AJAX, Event Loop, Web APIs, Callbacks, Promises, and Fetch API**, which are core concepts for frontend and full-stack development.
