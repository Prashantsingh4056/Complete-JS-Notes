//  (IIFE) Immediately Invoked Function Expressions 


// simple function
// function DB(){
//     console.log(`DB Connected`);
    
// }
// DB();


// IIFE 
(function DB(){
    console.log(`DB CONNECTED`);  // DB CONNECTED 
})()  ;  // ; to end the context  

// why use IIFE ?

// Avoid Global Pollution: Variables declared inside an IIFE are local to that function. This prevents them from cluttering the global namespace or causing "name collisions" with other scripts

(function db() {      // named IIFE
    console.log(`DB CONNECTED TWO`);
    
})();

// with arrow function

(() => {               // un named IIFE
    console.log(`DB CONNECTED TWO`);
    
})();

// with arguments

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);  // DB CONNECTED TWO Prashant
    
})("Prashant")

// Important Note : always use ';' when execurting two IIFE's one after the other 