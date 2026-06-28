//Lets talk about the scope of function :


if (true){
    let a = 10
    const b =20
    var c= 30
}

// console.log(a)
// console.log(b)
console.log(c)
//Means var could be accessed outside the scope as well, whether another c  is defined outside the scope , it wil always return the 30

//Lets discuss another interesting  thing :
function one (){
    const username = "sunny"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()
//Here child can access the parent value but parent can not access the child 
//This is called the Clousre 

//Another very intersting fact :-

console.log(addone(5))  //Here we have declared the function only 
function addone (num) {
    return num + 1
}

addTwo(6) // This is  not valid because , we have declare  the function in a variable 
const addTwo = function(num){
    return num + 2 
}
//Called as function hosting .