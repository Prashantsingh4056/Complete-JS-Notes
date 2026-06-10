class User {
    constructor(username){

        this.username = username

    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{

    constructor(username , email , password){
        super(username) // no need to use .call , this 

        this.enail = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai" , "chai@gm.com" , "123");
const newTea = new User("newTea");

chai.addCourse()
// newTea.addCourse()  // TypeError: newTea.addCourse is not a function

chai.logMe()  // Username is chai

// inherited class can have parent's class methods
newTea.logMe()


// 
console.log(chai === newTea);   // false

// instanceof
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User);  // true




