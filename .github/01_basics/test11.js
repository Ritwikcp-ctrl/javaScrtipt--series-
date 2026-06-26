//Lets study about the destructuring the objects 
const course ={
    coursename : "javascript",
    price : "free",
    courseInstructor : "Sunny",
}

console.log(course.coursename)
console.log(course["courseInstructor"])
//This method below is known as destructure
const {coursename,courseInstructor,price} = course
console.log(courseInstructor,price,coursename)

//one more thing :here we are declaring the shortcut for the names that seems to long as cn,cI,pr.
const {coursename:cn,courseInstructor:cI,price:pr} =course
console.log(cn,cI,pr);



