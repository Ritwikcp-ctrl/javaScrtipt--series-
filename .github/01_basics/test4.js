// lets discuss about the datatypes 
 //String ,Number,Boolean , Null, undefined , Symbol,
 //These are the Primitive Data Types .

 //These are the  Nom-Primitive / Reference ,
 //Array , Objects,Functions 

 const id = Symbol("123");
 const anotherId = Symbol("123");

 //Although they have the same vallue passed , but they will always returns the differnt value.
 //if i do console.log(id===anotherId) ,it returns False
 const bigNumber = 546765667657n //bigInt 

 const heros = ["suny","rai"]
 let myObj ={
    name:"sunny",
    age:33,
 }

 const myFunc = function() {
   console.log("hello") ;
 }