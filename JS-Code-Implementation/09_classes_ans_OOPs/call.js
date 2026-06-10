function setUserName(username) {
    
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username , email , password){

    // this.username = username;
    setUserName(username);    // this doesn't work

    
    setUserName.call(username)  // createUser { email: 'chai@fb.com', password: '123' }

    // correct
    setUserName.call(this , username);  // { username: 'chai', email: 'chai@fb.com', password: '123' }

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai" , "chai@fb.com" , "123")
console.log(chai);  // createUser { email: 'chai@fb.com', password: '123' }                                                                                                                             
 