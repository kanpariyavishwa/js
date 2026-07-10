const accountId = 144553     //not change const value
let accountEmail = "v@gmail.accountEmail"   
var accountPassword ="123456789"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail="vs@gmail.com"
accountPassword="121212"
accountCity="ahmedabad"

/*prefer not to use var
because of issue in block scope    and functional scope
 */

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
