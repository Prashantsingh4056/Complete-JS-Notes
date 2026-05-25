const accountId = 212123
var accountEmail = "prashantSingh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// generally we don't use var

// accountId = 2  // not allowed

accountEmail = "ps@ps.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId);

/*
 
Prefer not to use var 
because of issue in block scope and functional scope

*/


console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
