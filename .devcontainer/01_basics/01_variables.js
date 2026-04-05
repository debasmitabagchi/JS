const accountId = 144553
let accountEmail = "debasmita@gmail.com" // to ease the scope problem that is{} used in loops, conditions,etc
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "db.db@gmail.com"
accountPassword = "21212211"
accountCity - "Delhi"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity, accountState])