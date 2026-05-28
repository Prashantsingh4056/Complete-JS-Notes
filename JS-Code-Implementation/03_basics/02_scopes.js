
// scope , when comes with functions , if - else
{}

// later added by another programmer
// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30   // the original value of 300 gets changed

    console.log("INNER : " , a);
    
}




// console.log(a); 
// console.log(b);
console.log(c);    // but this gets printed , and thats the actual problem


console.log(a)


// ------------------------------------------------- Part 2 ----------------------------------------------

// nested scope 

//  nested function

function one(){
    const username = "Prashant"

    function two(){
        const website = "youtube"
        console.log(username);   
    }

    // console.log(website);  // ReferenceError: website is not defined
    
    two()
}

one()  // Prashant , first one() will execute and then inside one() , function two() execute and prints username


// Similarly with if-else 

if(true) {
    const username = "Prashant"
    if(username === "Prashant"){
        const website = " youtube"
        console.log(username + website);
    }

    // console.log(website);  // error
}

// console.log(username);  // error


//? _____________________________________________ Interesting _______________________________________________

console.log(addOne(5))  // works perfectly 

function addOne(num){     //  Function Declaration
    return num + 1;
}

// addOne(5)


addTwo(5)  //  error
const addTwo = function(num){    //  Function Expression
    return num + 2;
}

// addTwo(5)

// ____________________________ Reason ________________________________

// 1. Function Declaration

// function addOne(num) { ... }

// Hoisted: JavaScript moves the entire function to the top of its scope during execution.
// Usage: You can call addOne(5) even before the line where the function is actually written.

// 2. Function Expression

// const addTwo = function(num) { ... }

// Not Hoisted: The function is treated like a variable.
// Usage: You cannot call addTwo(5) before it is defined in the code. If you try, you'll get a ReferenceError.