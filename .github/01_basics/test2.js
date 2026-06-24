"use strict" // treat all JS code as newer version

let score = "33"
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

//"33" => 33
//"33ah" => NaN
//true =>1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // it returns True value
 //1 => true , 0 => false
 //"" => false,
 //"sunnny" => true