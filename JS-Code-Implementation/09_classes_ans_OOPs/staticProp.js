class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){   //static prevents the access of methods or properties by instances
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())   // TypeError: hitesh.createId is not a function

class Teacher extends User{

    constructor(email , username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("phone" , "i@phone.com")
iphone.logMe();   // Username: i@phone.com


// child also can't access this 
// console.log(iphone.createId());  // TypeError: iphone.createId is not a function


// Works 
User.createId();  // Username: i@phone.com