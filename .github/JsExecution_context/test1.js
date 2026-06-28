//we will discuss here about the Truthy ad Falsy concept : -

const userEmail  = " sunnyraixu@gamil.com "
if (userEmail){
    console.log("Got user email")
} else {
    console.log("Don't have user email");
}

//Flasy value : false, 0, BigInt , "" , null , undefined , NaN
//Truthy value : "0", 'false' , " " [] , {} , function(){}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}
 
// Some fact to be noted :-
false == 0 // gives the true value
false == ' ' // gives the terue value 
0 == ' ' // gives the true value 

// Nullish Coalescing Operator (??) : null undefined
let val ;
val = 5 ?? 10
val = null ?? 15
val = null ?? 10 ?? 20

console.log(val)