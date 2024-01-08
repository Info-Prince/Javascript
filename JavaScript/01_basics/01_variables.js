const accountId = 144323;
let accountEmail= "abc@gmail.com";
var accountPassword =  "12434";
accountCity = "jaipur";

// accountId = 2; //not allowed


accountEmail = "asdf@gmail.com";
accountPassword =  " 23432312w";
accountCity = "Patna";
let accountState;
/* prefer not to use var 
because of issue in block scope and functional scope. */

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);