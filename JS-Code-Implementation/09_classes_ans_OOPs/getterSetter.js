class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()  
    }

    set email(value){
        this._email = value
    }


    get password(){
        // return this._password.toUpperCase()

        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        // this.password = value   // RangeError: Maximum call stack size exceeded

        // this._password = value.toUpperCase()

        this._password = value
    }


}

const hitesh = new User("ps@gm.com" , "abc")    // Cannot set property password of #<User> which has only a getter
console.log(hitesh.password);  

console.log(hitesh.email);



