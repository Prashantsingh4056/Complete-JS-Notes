let myName = "Prashant"

let myname2 = "prashant       "

console.log(myName.length);


// we want our custom property that returns the true length of string excluding trailing spaces
// console.log(myname2.trueLength);


let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

// here we are declaring custom methods directly on the Object to make it accessible by array ,string , ...
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all  objects");
}

// calling

// with objects
heroPower.hitesh()

// with arrays
myHeros.hitesh()


// Q. But if we inject a method to array only , will it be available in Object
Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

myHeros.heyHitesh();
// heroPower.heyHitesh();   // error : heroPower.heyHitesh is not a function



// Inheritance 

const user = {
    name: "john",
    email: "john@gm.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignments",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= user  // outdated approach 

// protypal inheritance
Object.setPrototypeOf(TeachingSupport , Teacher);


// Coming back to main Question : 
let anotherUserName = "PrashantSingh   "     

String.prototype.trueLength = function(){
    console.log(`${this}`);   // PrashantSingh   
    // console.log(`${this.name}`);   // undefined
    console.log(`The true Length is : ${this.trim().length}`);  // The true Length is : 13
}

anotherUserName.trueLength()


"prashant".trueLength()
// Output : 
// prashant
// The true Length is : 8


"iceTea".trueLength()
// iceTea
// The true Length is : 6