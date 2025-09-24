
// JAVASCRIPT --> Js is interactive and new gen deveoplment langauge used to create dynamic web application (webiste)


// HTML --> (hypertext markup langauge ) --> was used to only display text and provide a stucture

// CSS --> Cascading style sheet  --> css was for style the webpage  

//JAVASCRIPT -> ES6 --> this was used to make your interactive 
 

//------------------------------------------------------------------//

// why to learn js as automation testor ?

// you need js to create logic in the automation  for test scripts 
// remember your js concepts will make you a better automation testor 


// ------------------------------------------------------------------------------

// Basic of JS 

// when is one file consider js --> filename.js

// to print anything ( logging ) 

// this code is used to print hello world 
console.log("hello  world ")

// note always make sure to save your file first 
// if you want to print anything is vs code in terminal 
// 1 right click on the file and select open intergrated terminal
//2 in terminal type node filename.js

// comments -->  comments are the line which are used to describe and line will not affect code 

//why ?
// comments are used to decribe the code writteen
// its the understanding of the code easy 
// its makes the code maintable 


// single line  comments --> the comment which is used to decirbe a code in single is called single comment 
//  it is given by (//)

// welcome to source and code 

// multi line comments --> the comment which is used to decirbe a code in multi is called multi comment 

// its denoted by (/*     jb    */)


/* hello 
this 
is 
source
and code 
*/

//--------------------
// there are some rules you need follow 

//1 comments are used to explain the complex logics 
//2  avoid obvious comments that do not add value  
//3  keep comments updated with code changes 
//4 comments should be clear and precise


//----------------- 23-09-2025 ----------------------------------------------------

//Variables --> a conatiner with a unique name used to store the value of data 

//10 if i have to store this value in a varaible 

// how define varaibles 
//keyword varaiblename = value
let x =10
console.log(x)

// there are 3 types of varaibles let const var

// let --> used when the value can be  changed or upadated
//block is scope variable 

let num = 100
console.log(num)/100
num =1000
console.log(num)//1000

//const --> constant --> if we delcare a varaible with const we cannot update or change value 
//block is scope variable 
const pi =3.143
console.log(pi)

// pi = 5
// console.log(pi)


// var -->  used when the value can be  changed or upadated
// this is function scope or gobal scope varaible 

var num2 = 50
console.log(num2)

num2 = 500
console.log(num2)

var num2=100
console.log(num2)//100
// rules to define a variable

//1 VaRAIBLE name should begin with a number 

// let 1num = 10 inccorect

// let num1 = 10 correct

//2 Varibale name should not have any special charcater expect (_) ($)

// let num5@#@  = "" inccorect

let num_1 = "" // correct 

//3 variable can be only defined once ( the name of varaible should always be unqiue )

// let num6 = 10

// let num6=2000


// 4 your name should always follow camel case 

let fullName ="siddhant gadakh"

let myNameIsThe="s"


// ------------------------------------------------------------------------

// delcaring vraibles

let a = 10 
let b =20

let c =50 ,d =60

console.log(a ,b)


// Datatypes --> there are 2 types of datatypes in js 

// primitive data types     --> primitive datatypes are simple data whose value cannot be changes they fix or immutabel

// primitive datattypes inculdes 
// number  --> 
// string  --> "42hgcjvk   ",'',``
// null --> 0
let mm =null
//boolean --> true faLSE
let yes = true
console.log( typeof yes) //boolean --> datatype
console.log(  yes) // true --> value 
//undefined --> variable whose value not defined
let num11
console.log( typeof num11)

// non primitive datatypes  -->are dtatypes which are complex and can there value and property changes 
// non primitive datattypes inculdes 
// arrays 
// object


// how to check datatype of a data

// typeof


