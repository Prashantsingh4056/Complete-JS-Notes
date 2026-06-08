// Object literal

const user = {
    username: "john",  // properties
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database")

        // console.log(username)  // username not defined 

        console.log(this.username);   // john

        console.log(this);
        // Output :

        // {
        //     username: 'john',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        // }

        console.log(`Username : ${this.username}, Login Count : ${this.loginCount}, Signed In : ${this.signedIn}`)
    }
}

console.log(user.username) // Output : john
console.log(user.getUserDetails()) // Output : Username : john, Login Count : 8, Signed In : true

// console.log(this);   // {}

// for browser it is a window object 


// new Keyword


// here new keyword is actually a constructor function
// const promiseOne = new Promise()
// const date = new Date()


function User(username , loginCount , isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

// const userOne = User("Prashant" , 12 , true);
// const userTwo = User("user2" , 11 , false);   

// console.log(userOne);  // unexpected behavoiur , values of user1 is overridden by user2

// Solution to this?
// Just add a 'new' keyword

// 'new' => when we use 'new' keyword , an empty object is created , then a constructor function is called , arguments injected inside this 

const userOne = new User("Prashant" , 12 , true);
const userTwo = new User("user2" , 11 , false);  

console.log(userOne);  // User { username: 'Prashant', loginCount: 12, isLoggedIn: true }
console.log(userTwo);  // User { username: 'user2', loginCount: 11, isLoggedIn: false }


console.log(userOne.constructor);  // [Function: User]


// instanceof()
