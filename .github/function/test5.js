//Immediately Invoked Function Expression (IIFE):
(function ImmediateConnection  (){
    console.log("DB connected ")
}) (); //Now it is invoked but this does not know where to terminate so we put a semicolon
//This method is used to ignore the values from the global scope 
//If wer did not apply  semicolon then it will return error.
//through arrow implementaion :
 (() =>{
 console.log("DB connected ")
 }) () ;

 //what if it expect variable :

 ((name) =>{
    console.log(`DB connected two times ${name}`)
 }) ("sunny")