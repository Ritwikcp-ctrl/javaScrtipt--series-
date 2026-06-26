// Lets add the objects :
const target = {
    1 : "a",
    2 :"b",
}

const source = {
    3: "c",
    4 : "d",
}

const result = Object.assign({},target,source)
console.log (result);
//We can use the spred method :
const obj3 = {...target, ...source}//Another method of joining the objects together.

console.log(obj3)

console.log(Object.keys(target)) // They returns the array of keys of object 
console.log(Object.values(target)) // It also returns the array of values of object 

console.log(Object.entries(target)) // It returns the key and their corresponding value in array .
console.log(target.hasOwnProperty('isLogged'));//it is used to know whether thid properties exists or not 


