//Operators -->  Symbol are the that used to perform operations

// 1 Arithmetic Operators --> used to perform mathematical operations 
// 2 Assignment Operators --> used to assign values to variables 
// 3 Comparison Operators --> used to compare two values and return boolean value 
// 4 Logical Operators    --> used to perform logical operations and return boolean value 
// 5 increment and decrement operators --> used to increase or decrease the value of variable
// 6 Ternary Operators --> used to check if else conditions 
// 7 type of operator --> used to check datatype of variable 


//----------------------Arithmetic Operators------------------------

/**
 * + (Addition)
 * - (subtraction)
 * * (multiplication)
 * / (division)
 * % (modulus)
 * **(Exponentiation)
 */




console.log(5 + 5) //10

//---------------------------type of operator -------------------

console.log(typeof (5))//number 
console.log(typeof (true))//boolean

//------------------ 2 Assignment Operators  --------------------

//used to assign values to variables 

//=  (equal to assignment)
let a = 10 // here = is assignment operator 
let b = a // b is assigned to value of a 
console.log(b)

// += (add and assignment)
let c = 5
let e = 5
//  e +=c // e = e+c --> e = 5+5
// console.log(e)

// -= (subtract and assignment)

e -= c // e = e-c //
console.log(e)


//------------------ Comparison Operators  --------------------
//used to compare two values and return boolean value 

/**
 * > (greater than) 
 * <  (less than)
 * >= (greater than or equal to) 
 * <= (less than or equal to)
 * == (equal value)
 * === (equal value and equal datatype)
 * != (not equal)
 * !==(not equal value nor datatype are same)
 */

//note : when you have 2 comprasion operators (==), it will only check the value 
//   when you use (===), it will check both value and datatype

console.log(5 == "5") // true
console.log(5 === "5") // false 
console.log(!true) //false

//------------------ Logical Operators  --------------------
console.log("logical operators")
//used to perform logical operations and return boolean value 

// AND (&&)
// OR  (||)
// NOT (!)


// AND (&&) --> if both the conditions are true then the result will be true otherwise false 

console.log(4>3 && 5<2) //true

/*
T && T ==>T
T && F ==>F
F && T ==>F
F && F ==>F
*/

// OR (||) --> if any one codition is true then the result will be true 

console.log(4>3 || 5<2) //true

/*
T || T ==>T
T || F ==>T
F || T ==>T
F || F ==>F
*/

// NOT (!) --> it will reverse the result

console.log(!(4>3))

// !T ==>F
// !F ==>T





// 5 increment and decrement operators --> used to increase or decrease the value of variable

//------------------increment and decrement operators --------------------

//++preincrement    --> it first increase the value by 1 and then use it or show it
// postincrement++  --> it first use the value and then increase by 1
// --predecrement   -->it first decrease the value by 1 and then use it or show it
// postdecrement--  --> it first use the value and then decrease by 1

//++preincrement    --> it first increase the value by 1 and then use it or show it
let prenum = 10
console.log(++prenum) //11
console.log(++prenum)  // 12


// postincrement++  --> it first use the value and then increase by 1
let postnum = 10
console.log(postnum++) //10
console.log(postnum++) //11
console.log(postnum) //12


// --predecrement   -->it first decrease the value by 1 and then use it or show it
let predecr =10

console.log(--predecr)//9
console.log(--predecr)//8
console.log(predecr)//8

// postdecrement--  --> it first use the value and then decrease by 1

let postdecr =10

console.log(postdecr--)//10
console.log(postdecr--)//9
console.log(postdecr)//8


// 6 Ternary Operators --> used to check if else conditions 


//syntax :  condition ? experssion if true : expresion if false
// example 


let age = 15

let canvote = (age >=18)? "yes you can vote" : "no you cannot vote "

console.log(canvote)

// create a program to check dsr send 

let status =1
let counter =0

let dsrdend = (status ==="SENT") ? ++counter : counter

console.log(dsrdend)


