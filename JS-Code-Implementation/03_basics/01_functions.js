function sayMyName(){
    console.log("Prashant");
    
}

sayMyName  // reference
sayMyName() // execution

function addTwoNums(number1 , number2){
    console.log(number1  + number2);
    
}

// number1 , number2 => parameters
// 2 , 4  => arguments

addTwoNums(2,4)
addTwoNums(2,"4")
addTwoNums(4,'a')

const result = addTwoNums(3,5);
console.log("Result : " , result);  // Result :  undefined  ?

// actual way : 
function addTwoNumbers(number1 , number2){
    
    // let result = number1 + number2;
    // return result

    // directly
    return number1 + number2;

    console.log("Prashant"); // unreachable code
    
}

const Result = addTwoNumbers(3,5)
console.log("Result : " , Result);  // Result :  8


// --------------------------------------------

function loginUserMessage(username){

    return `${username} just logged in`
}

loginUserMessage("prashant")  // function executed and returned a value but not printed 

console.log(loginUserMessage("Prashant"));   // Prashant just logged in

// important -> if no argument passed : 
console.log(loginUserMessage());   // undefined just logged in


// fix :
function loginUserMessage1(username){

    // if no arguments passed :
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage1()); // Please enter a username , undefined


// Preventing this situation by giving a default value
function loginUserMessage2(username = "sam"){

    // if no arguments passed :
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage2());  // sam just logged in

// ------------------------------------------------Part 2------------------------------------------------------


// use of rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(21, 23, 344))  // [ 21, 23, 344 ]

function calculateCartPrice1(val1 , val2 , ...num1){
    return num1
}

console.log(calculateCartPrice1(21, 23, 344 , 333))  // [ 344, 333 ]

// --------

const user = {
    username: "prashant",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// Passing direct object
handleObject({
    username: "sam",
    price: 399
})

// ------------------   passing arrays

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // 400
// similarly
console.log(returnSecondValue([11,22,33,44])); // 22



