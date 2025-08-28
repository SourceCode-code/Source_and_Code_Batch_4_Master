// datatypes --> 
// js has two type datatypes
// 1. primitive datatypes --primitive datatypes is data type that cannot be changed
//    primitive datatypes include string, number, boolean, null, undefined, and symbol  

// null is a special value that represents the absence of any value
let a = null;
console.log(a);
// if you want to check the data type of a variable, you can use the typeof operator
console.log(typeof a); // null is an object in js

// undefined is a special value that represents a variable that has been declared but not assigned a value
let b;
console.log(b);

console.log(typeof b); // undefined is a type in js


//boolean is a data type that can be either true or false (on / off)

let isTrue = true;
console.log(isTrue); //  value of isTrue is true
console.log(typeof isTrue); // boolean is a type in js

//number is a data type that can be either an integer (-infity to infity) or a floating point number (-infity.00 to infity.00)
let num = 42
console.log(num);  // value of num is 42
console.log(typeof num); // number is a type in js

// string is a data type that can be either a single character or a sequence of characters
// a string can be enclosed in single quotes('..single quotes '), ("double quotes"), or `backticks`
let str = "Hello, World!";
console.log(str); // value of str is "Hello, World!"
console.log(typeof str); // string is a type in js  

let str2 ="12345_gmail @12 hello true null undefined "
console.log(str2); // value of str2 is "12345_gmail @12 hello true null undefined "
console.log(typeof str2); // string is a type in js


// 2. non primitive datatypes --non primitive datatypes is data type that can be changed
//    non primitive datatypes include object, array



// number is a data type that can be either an integer (-infity to infity) or a floating point number (-infity.00 to infity.00)

let num2 = 42.5;
console.log(num2);
console.log(typeof num2); // number is a type in js

// every datatype has its use case  
// every datatype has its own methods and properties

// propterties in data types are used to access the data  
// methods in data types are used to perform operations on the data 


// human 

// propertioes of human  -->  height , weight, age , name 

// methods of human  -->  walk(), talk(), eat(), sleep()


// similarly number will also have its own properties and methods

// methods of number -->  used to perform operations on numbers


// ------------------------------------------------------------
// if i have to convert a floating point number to an integer, i can use the Math object
let num3 = 10.4
// 11 
//10 

// difference between ceil and floor 

// lower part of the number is called floor
// upper part of the number is called ceil

// math.ceil() - rounds up to the nearest  higher integer
console.log(Math.ceil(num3)); // 11 - rounds up to the nearest integer

//math.floor() - rounds down to the nearest lower integer
console.log(Math.floor(num3));// 10 - rounds down to the nearest integer


// math.round() - rounds to the nearest integer
//  // if the decimal part is greater than or equal to 0.5, it rounds up, otherwise it rounds down


// 10.23 --> 10
// 10 .5 --> 11
// 10.62 --> 11
let num4 = 10.5;
console.log(Math.round(num4)); // 10 - rounds to the nearest integer

// math.random() - generates a random number between 0 and 1
// math.random generates a random number between 0 and 1, but it does not include 1
// its genrates number between (0,0.9999999999999)


console.log(Math.random()); // generates a random number between 0 and 1 range is (0-- 0.9999999)
// 0
// 10 // 10.999


// generating a random number between 1 and 10

console.log(Math.floor(Math.random()*10))// 0 -- 9.999999999 //  0-10

// generating a random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1); // 1 -- 10.999999999 // if we use floor -> 1 -- 10


// Assignment

// 1. create a variable of type string and print it
// 2. create a variable of type number and print it
// 3. create a variable of type boolean and print it
// 4. create a variable of type null and print it
// 5. create a variable of type undefined and print it
// generate a random number between 1 and 100 and print it
//  generate a program that simulates a dice roll (1-6) and print the result