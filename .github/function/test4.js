// Arraow function : 

const user ={
    username : "sunny",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username},welcome to website`)
        console.log(this); // it will print the current context 
    }
}
user.welcomeMessage()
user.username ="ritwikrai"
user.welcomeMessage()
console.log(this) // It will print the empty object as it is outside the scope and it context is empty

function Tea (){
    console.log(this)
}
Tea()

const SiginUser = ()=>{
    console.log(this)
}
SiginUser() //it gives the {} this , empty object

//few more thing about arrow function  :
const addTwo = (num1,num2) =>{
    return num1 + num2;
}

// or

const addTwo = (num1,num2) => (num1 + num2);
 //When you are writing inside the curly braces then you have to write the return word 
 //While if you are using inside the parenthesis you dont need to write the return word.


 //How to return the object : 
 const returnOb = (num,nub) => ({
    username : "sunny"
 })