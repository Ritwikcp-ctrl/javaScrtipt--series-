//lets study functions 
// function addTwoNumbers (number1,number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,5);
// console.log( "Result:" , result)

//There is another  way of writing function which involves the retun statement 
function addTwoNumbers(n1,n2){
    let result = n1+n2;
    return result;
}
const result1 = addTwoNumbers(2,3)
console.log( "result is :", result1)

//more about taking parameter and argument
  const fun = function loginUser(username){
   
   return  username ? `${username} just logged in` : console.log("Enter username")
}
console.log(fun())