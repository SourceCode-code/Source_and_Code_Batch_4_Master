// programing --> is a set of instructions that we give to a computer to perform specific tasks

// when creating new file you can use extension .js 
// website is made up of three main components: 

// html -- provides the structure and content of the webpage
// css  -- provides the styling and layout of the webpage
// js   -- provides the interactivity and functionality of the webpage

// js is case sensitive, which means that it treats uppercase and lowercase letters as different characters
// when we combine these three components, we can create a fully functional and interactive webpage

// hello world
// console --> browser's console / terminal 
// log -->  to print something to the console
// hello world --> is a simple message 
console.log("Hello, World!");

// how to run ths code in terminal
// node filename.js

// comments in js --> comments are used to explain the code and make it more readable and it doesnt affect the code execution
// comments are of two type -->
// single line comment --> starts with (//) and continues to the end of the line
// multi-line comment --> starts with( /* and ends with */) and can span multiple lines
// example of single line comment

/* 
this  
is 
a 
multi 
line 
comment 
*/

//

// assignment  -->

//1 write a single line comment  -- write your full name 
//2 write a multi-line comment --> write your introduction 
//3 print your full name 

// datatypes in js --> are used to define the type of data that can be stored in a variable
// there are two types of datatypes in js --> primitive and non-primitive

// primitive datatypes --> are the basic building blocks of data in js andf they cannot modifed or changed
//non-primitive datatypes --> are more complex data structures that can hold multiple values and can be modified or changed

// primitive datatypes in js --> string, number, boolean, null, undefined
// number --> is used to represent numeric values, both integers and floating-point numbers
//( -infinity, +infinity, ) --> are special numeric values intergers 
// flaoting-point numbers --> are numbers with decimal points, such as 3.14 or -0.5

let age = 25; // example of a number datatype

console.log(age)

console.log(typeof age)

//typeof operator --> is used to determine the datatype of a variable 

// boolean --> is a datatype that can have only two values: true or false

let isStudent = true; // example of a boolean datatype
console.log(typeof isStudent)

// null --> is a special datatype that represents the absence of any value 
let emptyValue = null; // example of a null datatype
console.log(typeof emptyValue)  // object (this is a quirk in JavaScript, as null is considered an object)
let value =0// example of a number datatype

// undefined --> is a datatype that represents a variable that has been declared but has not been assigned a value
let notAssigned; // example of an undefined datatype
console.log(typeof notAssigned) // undefined
//string --> is a datatype that represents a sequence of characters, such as letters, numbers, and symbols
// string is anything that is enclosed in single qutoes ('.. ')  or double quotes (".. ") or backticks (`.. `)
let name = "John Doe"; // example of a string datatype
let num = "12345"; // example of a string datatype with numbers
let greeting = `true`; // example of a string datatype with template literals
console.log(typeof name)
console.log(typeof num)
console.log(typeof greeting)

// non-primitive datatypes in js --> are more complex data structures that can hold multiple values and can be modified or changed
// array
// object


//how to declare a variable in js --> 

// variables are used to store data  in the program
// there are three ways to declare a variable in js:

// using var, let, const keywords

// way to declare a variable using var keyword

var mydata = "hello world"
console.log(mydata)
let data2 = "hello world"
const data3 = 10


// let and var delacred variables can be reassigned or updated later in the code

mydata="my name is jhon"
console.log(mydata)

data2 ="hey"
console.log(data2)

// const declared variables cannot be reassigned or updated later in the code
// console.log(data3)
// data3 = 20
// console.log(data3) // this will throw an error because const variables cannot be reassigned


//  const name1 = "akash"

//  console.log(name1)

//  name1 = "suresh" // this will throw an error because const variables cannot be reassigned

//   console.log(name1)

// assignment 2 --> 

// 1. declare a variable using var  let and const keyword and assign it a value of your choice
// 2  delecre varaible and check the dataypes of all primitive datatypes in js (typeof operator)

