//Lets talk about the Memory :-
//Stack , Heap
//***************************** */

/*

stack(Primitive), Heap(Non-primitive/Prefernece)
//so , stack returns the copy of the stored variable
//and Heap returns the Reference means the exact value address

*/

let userOne = "sunnyrai";
let userTwo = userOne;
userTwo = "bullytakla"

console.log(userOne)
console.log(userTwo)

let myObj ={
    name :"sunny",
    age :"23",
}

let nyObj =myObj;
nyObj.name = "rai"

console.log(nyObj)
console.log(myObj)
