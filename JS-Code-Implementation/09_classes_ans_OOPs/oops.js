const user = {
    username : "john",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`Username : ${this.username}, Login Count : ${this.loginCount}, Signed In : ${this.signedIn}`)
    }
}

console.log(user.username) // Output : john
user.getUserDetails() // Output : Username : john, Login Count : 8, Signed In : true