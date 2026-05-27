// singleton 

// object literals
// object.create

const mySym = Symbol("key1");  // how to declare symbol as a key in an object 

const jsUser = {
    name: "Prashant",
    "full name": "Prashant Singh",  // cannot access with '.'
    // mySym: "mykey1",  
    [mySym]: "mykey1",
    age: 21,
    location: "kanpur",
    email: "prashantsingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"],


}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

console.log(jsUser[mySym]); // correct way to use symbol inside object 


// freeze
jsUser.email = "Prashant@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "prashantsi@gmail.com"  // jsUser will not get updated
console.log(jsUser);


// functions inside object 
jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this -> to take reference of same object
}

console.log(jsUser.greeting);  // [Function (anonymous)] , gives function reference
console.log(jsUser.greeting()); // Hello JS User

console.log(jsUser.greetingTwo());
