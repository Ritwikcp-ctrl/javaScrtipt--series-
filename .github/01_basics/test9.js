// Now lets talk about object literals:-

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(`hey there ${this.name}`); //It will return Undefined
tinderUser.greeting = function (){
    console.log(`Hello there ${this.isLoggedIn}`)
}
console.log(tinderUser.greeting())

// Another object scenario :\
const regularUser = {
    email : "sunnyraixu@gmail.com",
    fullname : {
        firstname : "sunny",
        lastname : "rai",
    },
    age : "23",
}
console.log(regularUser)

console.log(regularUser.fullname.firstname)