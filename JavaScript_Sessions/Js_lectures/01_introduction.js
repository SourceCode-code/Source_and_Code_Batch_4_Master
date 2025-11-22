// Introduction to JavaScript

// JavaScript is a versatile programming language primarily used for web development.
// It allows developers to create dynamic and interactive web pages.

//html --html is used to structure the content of web pages
// It defines the elements on the page such as headings, paragraphs, links, images, etc. 
//css  -- css is uder to style the web pages
// It controls the layout, colors, fonts, and overall appearance of the web pages.
//js   -- js is used to make the web pages interactive 
// JavaScript can manipulate HTML and CSS to create dynamic content.

// basic syntax

 // comments  -->
 // comments are used to explain the code and are ignored by the browser/ complier  
 // commnets make the code more readable and maintainable

// there are two types of comments in JavaScript:
 //1 single line comment (//)
 // this is a single line comment hello


 //2 multi-line comment (/* */)
 /* !
 hello 
 this 
 is 
 multi-line comment */

 // comments etiquette --(rules for writing comments)

 // 1. Use comments to explain complex logic or algorithms.
 // 2. Avoid abnoxious comments that do not add value.
 // 3. Keep comments up to date with code changes.
 // 4. commnets should be clear and concise.

 // Get OUTPUT IN JS 
// 1. Using console.log() to print output to the console
console.log("Hello, World! welcome "); // This will print "Hello, World!" to the console

//to run any js file in terminal use the command
// node filename.js
// for example, to run this file, use the command
// node 01_introduction.js


// variables in javaScript
// Variables are used to store data values.
// In JavaScript, there are three ways to declare variables: var, let, and const.

// 1. var - used to declare a variable that can be re-assigned
var name = "John";          
console.log(name); // Output: John
name = "Doe"; // Re-assigning the variable
console.log(name);// Output: Doe


// 2. let - used to declare a block-scoped variable that can be updated.
let age = 30;              
console.log(age); // Output: 30 
age = 31; // Re-assigning the variable
console.log(age); // Output: 31

// 3. const - used to declare a block-scoped variable that cannot be re-assigned (constant )
const pi = 3.14;           
console.log(pi); // Output: 3.14
// pi = 3.14159; // This will throw an error because const variables cannot be re-assigned


// understanding variable  with simple example 

// const -- constant --> permanent marker 
//var    -- updateable --> chalk  ( can be earsed but avioded because its messy and old way of declaring variables)
// let   -- updateable --> pencil ( can be erased and updated easily)


// how to declare variables in JavaScript
// 1. Using let
// keyword 'let' is used to declare a variable that can be updated later

//keyword  varibalename = value
let                city = "New York"; // Declaring a variable using var
console.log(city); // Output: New York

// variables writing rules

//1) variable names should not begin with a number

let city1 = "Los Angeles"; // Valid
// let 1city = "Los Angeles"; // Invalid, will throw an error   

//2) variable names can   only contain letters, numbers, underscores(_), and dollar signs ($)
let _city = "Chicago"; // Valid
let $city = "Miami"; // Valid
let city_name= "San Francisco"; // Valid
//let name 12 = "Orlando"; // Valid, but not recommended (spaces are not allowed in variable names)
// let city-name = "Seattle"; // Invalid, will throw an error (hyphen is not allowed)
// let city@ = "Houston"; // Invalid, will throw an error           

//3) variable names are case-sensitive
let cityName = "Boston";    // Valid        
let cityname = "Austin";    // Valid, but different from cityName

console.log(cityName); // Output: Boston
console.log(cityname); // Output: Austin

//4) variable names should not be a reserved keyword
// let function = "test"; // Invalid, 'function' is a reserved keyword
// let if = "condition"; // Invalid, 'if' is a reserved keyword 


//5) variable names should be descriptive and meaningful and varaible should always be in camelCase
let userAge = 25;       // Valid, descriptive variable name  
let x = 10;          // Valid, but not descriptive (avoid using single letters as variable names)  

// siddhant Arjun Gadakh example of camelCase
let siddhantArjunGadakh = "Software Engineer"; // Valid, descriptive variable name in camelCase


// delecre variables in single line 

let  firstname = "siddhant" , lastname ="gadakh"




let hello="hello " 
let world = "world" , welcome = " to 30DaysOfJavaScript"

console.log(hello)

console.log(world)
console.log(welcome)

//------------------------------
console.log(hello + world + welcome)

let a = "hello"  , A= "HELLO"

console.log(a)
console.log(A)
console.log(a+A)


//------------------------------



// datatypes in JavaScript

// JavaScript has two main types of data types 

// 1. Primitive Data Types
// these are simple data types that are immutable (cannot be changed) 
// They include:        
//2 . Non-Primitive Data Types  
// these are complex data types which can be manipulated and changed


// primitive data types in JavaScript include:

/*
1. Number - represents numeric values (e.g., 10, 3.14)  --( intergers and floating )

2. String - represents a sequence of characters (e.g., "Hello", 'World')  
 anything that is warpped single qutoes (' ') or double quotes (" ")  and bacticks (` `)is a string

3. Boolean - represents a logical value (true or false)
// true 
// false 

4. Undefined - represents a variable that has been declared but not assigned a value  


5 . Null - represents an intentional absence of any value
// it is used to indicate that a variable has no value or object assigned to it
6. Symbol - represents a unique identifier (introduced in ES6)



2) non primitives data types 

// 1 arrays 
// 2 objects
*/


// exmpale of number datatype   

let rollno = 25; // Number data type
console.log(rollno); // Output: 25

console.log(typeof rollno) //number

// example of string datatype
let greeting = "Hello, World!";
let anotherGreeting = 'Hello, World! 123 @';

console.log(greeting); // Output: Hello, World! 
console.log(anotherGreeting); // Output: Hello, World! 123 @

console.log(typeof greeting); // Output: Hello, World! 
console.log(typeof anotherGreeting); // Output: Hello, World! 123 @

// example of boolean datatype
let booleanValue1 = true; // Boolean data type
let booleanValue2 = false; // Boolean data type

console.log(booleanValue1); // Output: true
console.log(booleanValue2); // Output: false

console.log(typeof booleanValue1); // Output: boolean
console.log(typeof booleanValue2); // Output: boolean

//example of undefined datatype
let undef //
console.log(undef); // Output: undefined    
console.log(typeof undef); // Output: undefined

// example of null datatype 

let nullValue = null; // Null data type
console.log(nullValue); // Output: null
console.log(typeof nullValue);  // bug error 



