// Talking about rest operator : 
const fun = function calculateCartPrice(...num1){
    return num1;
}

console.log(fun(200,300,400,500)) 
//These three dots works as rest as well as spred operator, here it is working as rest operator
//and it returns the array  of passed argument

//wehen we do like this :
const fun2  = function calciPrice (val1,val2,val3, ...num2){
    return num2;
}
console.log(fun2(200,300,400,500,600,700)) // Here 200,300,and 400 moved to val1,val2,val3 accordingly and rest of the number moves to num2 .

//Lets pass the object and try to access the values :
const User ={
    firstname :"sunny",
    lastname : "rai",
    age : 23,
    email : "sunnyraixu@gmail.com",
}

const Userdetails = function handleObj (User){
    console.log(` User firstname is ${User.firstname} and age is ${User.age}`);
}
console.log(Userdetails(User))
//Parameter name could be anything but the argument passed will be the name of object defined .

