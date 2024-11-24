const accountId = 12345
let accountEmail = "shaniyaduvanshi7617@gmail.com"
var accountPassword = "12345"
accountCity = "Basti"
let accountState;
//accountId = 2  //not allowed


accountEmail = "shaniyadav@gamil.com"
accountPassword = "12341234"
accountCity = "lucknow"


console.log(accountId );

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])
