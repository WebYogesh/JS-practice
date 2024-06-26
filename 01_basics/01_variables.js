const accountId = 144553
let accountEmail = "yogesh123@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur"
let accountState;

// accountId = 21534 not Allowed because const can not be changed

accountEmail = "hdfc@gmail.com"
accountPassword = "1590"
accountCity = "Indore"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Another way to console the element

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer ot to use var because of issue in block scope and functional scope
*/


