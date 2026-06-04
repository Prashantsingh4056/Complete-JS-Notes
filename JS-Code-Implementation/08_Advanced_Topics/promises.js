// creating a promise

const promiseOne = new Promise(function (resolve, reject){

    // Do an asynchronous task
    // DB Calls , cryptography , network calls
    setTimeout(function () {
        console.log("Asynchronous task is completed")
        resolve()
    }, 1000)
})

// Promise consumption
promiseOne.then(function () {
    console.log("Promise is consumed")
})

// we can also do it in single pass

new Promise(function (resolve, reject){

    // Do an asynchronous task
    setTimeout(function () {
        console.log("Asynchronous task 2 is completed")
        resolve()
    }, 1000) 
}).then(function () {
    console.log("Promise 2 is consumed")
})

// Promise 3
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function () {
        resolve({username : "john", email : "john@example.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log("Promise 3 is consumed")
    console.log(user)
})

// Promise 4 with error handling

const promiseFour = new Promise(function(resolve , reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "john", password : "12345"})
        }else{
            reject("An error occurred while fetching user data")
        }
    }, 1000)
})

// This syntax is not recommended as it will lead to unhandled promise rejection error

// const username =promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// console.log(username) // Promise { <pending> }



// Actual syntax for consuming promise with error handling

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) => {                 // username got its value from the previous then block
           
    console.log("Username is : " + username)  // output : Username is : john , when error = false
})
.catch(function(error){               // catch block will handle any error that occurs in the promise chain

    console.log("Error : " + error)   // output: Error : An error occurred while fetching user data , when error = true
})
.finally(() => console.log("The promise is either resolved or rejected")) // finally block will execute regardless of the promise outcome


// Promise 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "javascript", password : "12345"})
        }else{
            reject("JS Went wrong")
        }
    }, 1000)
})

// it is not neccessary to access a promise with .then() method , we can also use async/await syntax

async function consumePromiseFive(){
    const response = await promiseFive      // we don't write promiseFive() because promiseFive is already a promise object
    console.log(response)
}

consumePromiseFive() // output : { username: 'javascript', password: '12345' } when error = false

// when error = true , we need to handle the error with try catch block

// async-await can not directly handle the errors , we need to use try catch block to handle the errors

async function consumePromiseFiveWithErrorHandling(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log("Error : " + error) // output : Error : JS Went wrong when error = true
    }
}

consumePromiseFiveWithErrorHandling()   // output : { username: 'javascript', password: '12345' } when error = false

// output : "Error : JS Went wrong" when error = true



// -----------------------------

async function getAllUsers(){
    try{
        const response  =  await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()  // we also need to use await here because response.json() also returns a promise
        console.log(data)
    } catch (error) {
        console.log("Error : " + error)
    }
}

getAllUsers()  // output : Array of user objects from the API when the fetch is successful

// output : "Error : <error message>" when there is an error in fetching the data from the API



// --------------------------------------

 

// Writing the above function wuth .then() and .catch() method

function getAllUsersWithThen(){
    fetch("https://jsonplaceholder.typicode.com/users")  // we use .then() because fetch() returns a promise
    .then(function(response){
        return response.json()  // we need to return the promise returned by response.json() to chain the next then block
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log("Error : " + error)
    })
}

getAllUsersWithThen() // output : Array of user objects from the API when the fetch is successful

// output : "Error : <error message>" when there is an error in fetching the data from the API


// ---------------------------------------------

// Question : Why is API data printed before "Asynchronous task is completed"?

// fetch() returns a Promise. Promise callbacks (then, catch, finally) are placed in the Microtask Queue, 
// while setTimeout callbacks are placed in the Callback Queue. The Event Loop always processes
//  the Microtask Queue completely before taking tasks from the Callback Queue. 
// Therefore, the fetch result is often printed before the setTimeout callback,
//  even when both are asynchronous.


//  Read this => https://blog.logrocket.com/fetch-api-node-js/#evolution-http-requests

// Important Interview Question: 
// when we get error code 404 from fetch() promise , will it be found on resolve or reject block?

// Answer : It will be found in the resolve block because fetch() 
// promise only rejects when there is a network error or if the request 
// is blocked by CORS policy. It does not reject for HTTP error status 
// codes like 404 or 500. Instead, it resolves with a response object that
//  has an ok property set to false and a status property set to the HTTP
//  status code. Therefore, we need to check the response.ok property to 
// handle HTTP errors properly.


// Impotant 
// The `fetch()` method of the Window interface starts the process of fetching 
// a resource from the network, returning a promise that is fulfilled once the
//  response is available.
// The promise resolves to the Response object representing the response to your request.
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.