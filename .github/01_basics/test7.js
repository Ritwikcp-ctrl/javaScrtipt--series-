// We talk about the array
const myArr = [3,4,6,5,7,8,9,8]
// const myBrr = myArr[0]
console.log(myArr[3])

//Another way to write Array
const myArr2 = new Array (1,3,3,4,4,5,5,6,7,7)
const newArr= myArr.join()// this convert the array into string 
console.log(typeof newArr);
console.log(myArr)
console.log(myArr2)

// There is nother method  which is used mostly that is , slice and splice

const Arr = [1,3,4,5,6,6,8]
console.log(Arr.slice(1,3)) // it prints 3,4 but it do not changes the main array.
console.log(Arr.splice(1,3)) //it prints 3,4,5 but manipulates the main array , means make changes in the array
console.log(Arr)

//lets talk one more  thing 

const marVel= ["sunnjy", "rit", "sat", "kaju", "tashu"]
const avanGer = ["cat","dog","mokl", "loan"]

// marVel.push(avanGer) // this put the array into  array 
//we can use the concatnate method
// const allHero= marVel.concat(avanGer) //but this concat mathod add the array and make a single array out of this.
// console.log(allHero)

// We use another method  sprade like ,
const allHero = [...marVel, ...avanGer]
console.log(allHero)
//Thsi do the same thing as concat does

console.log(Array.from("sunny")) //this statement convert into array
console.log(Array.from({name:"sunny"}))// interesting , because it returns an empty array.

//let's take another example :-
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4)) // This convert all thsoe into an array.

