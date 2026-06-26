// Lets study object 
//Object Literals
const mySem = Symbol("key1")
const JsUser = {
    name:"sunny",
    "fullname" :"sunnyrai",
    [mySem]:"mykey1",//now it will return the Symbol
    age: "34",
    locartion:"kanp",
    email :"sunny@gmail.com",
    isLogged : false,
    lastLoginDays : ["Monday","sunday"],
}

console.log(JsUser.email) // This is very common way of accessing the value from the object 
console.log(JsUser["email"]) // This is the best way of accessing the value form the object 
console.log(JsUser["fullname"])
console.log(JsUser[mySem])

//in order to make some changes 
JsUser.email = "su30rai13@gmail.com"
//if i want to freeze the the object 
// Object.freeze(JsUser) // Whatever the changes you will made won't be affecting the object
console.log(JsUser)

//lets add the greeting function:-
JsUser.greeting = function(){
    console.log("Hello there !")
}

JsUser.greeting2 = function(){
    console.log(`Hello there how are you ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2())
