const user = {
    username: "prashant",
    price: 999,

    // this means current context
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // we are referring current context inside the curly braces ,so we use this.username   
        console.log(this);
        
    }
}

// we don't have 'this' inside arrow function 

user.welcomeMessage()  // prashant , welcome to website
user.username = "sam"
user.welcomeMessage()  // sam , welcome to website

console.log(this);   // {}

// but in browser , it is window  ->  global object in browser

// function chai(){
//     let username = "prashant"
//     console.log(this.username);  // undefined , so the context is working only inside objects not functions

// }
// chai()

const chai= function(){
    let username = "prashant"
    
    console.log(this.username);  // undefined , so the context is working only inside objects not functions

}
chai()


// ____________________ Arrow Functions ___________________________

const Chai = () => {
    let username = "prashant"
    console.log(this);  // {}
    console.log(this.username);  // {}
}

Chai();  // undefined

// -------------------------------------------------------------

//====> basic arrow function (Explicit return)

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,4))

//====>  implicit return

// const addTwo = (num1 , num2) => (num1 + num2);

// console.log(addTwo(3,4));

// ----------------------------------------------------------------------

// simple Rule -> 
                     // if we use {} , return keyword is neccessary
                     // if we use () only , don't need to write return keyword


// to return an object using implicit return 

// const addTwo = (num1 , num2) => {username : "prashant"}  // undefined ❌
const addTwo = (num1 , num2) => ({username : "prashant"})  // ✅


console.log(addTwo(3,4));

//------------------------------------------------

// const myArray = [2,4,6,4,3]

// myArray.forEach()


