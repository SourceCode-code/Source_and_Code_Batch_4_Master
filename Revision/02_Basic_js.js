
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

num = "hello"
console.log(num)//1000

//const --> constant --> if we delcare a varaible with const we cannot update or change value 
//block is scope variable 
const pi =3.143
console.log(pi)

// pi = "sdkjfwsd"
// console.log(pi)
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

//------------------------24-09-2025---
console.log("---------------------------------------------------------------------------------------")
// NUMBER --> number datatype represents all the number that includes floating point number as well intergers 
// (-infity  ---> +infinty)  ---> (-infity.infity          -->infity.infity)

// example 
let numm1 = 1
let numm2 = -100
let numm3 = -100.2567
let numm4 = 100000000000

console.log(typeof numm1)

console.log(typeof numm2)

console.log(typeof numm3)

console.log(typeof numm4)

// now number are used in programing to perfome mathimatical operation 

// arthematic operaton (+ ,-,*,/,% ,**)
let numb1 =10
let numb2 = 20

console.log("addtion",numb1+numb2)
console.log("substraction",numb1-numb2)
console.log(numb1*numb2)
console.log(numb1/numb2)
console.log(numb1%numb2)
console.log(numb1**numb2)


//------------------------------------------------

// every dataype will have some proptery and methods asscotied with it

// methods --> used to perform operation on data type
//properties --> are used to access infromation about the datatype 

// because we are learning number datatype --> 

// any opertion perform on numbers will be consider as Math
// thats we add a prefix to methods in number called Math


// ---------------------------------------------------------------

// methods for numbers --> 
// conversion methods for floating number to interger 

//1 Math.floor()  --> this method will rounds down your floating number to the base vale or nearest lower interger 

// example 

let numbe1 = 10.1111111111111111111
//10
console.log(Math.floor(numbe1)) //10

//2 Math.ceil() --> this method will rounds up your floating number to the next value or nearest higher interger 

console.log(Math.ceil(numbe1)) // 11


//3 Math.round() --> this method will round down if floating decimal number is 0<=0.4  and if 
//  floating decimal number is 0.5=> 0.9999 it will round up 


let numbb=10.123
let numbb2=0.09
let numbb3=10.999999
let numbb4 = 10.5555

console.log("----------------------------")
console.log(Math.round(numbb))    //10
console.log(Math.round(numbb2))   // 0
console.log(Math.round(numbb3))     // 11
console.log(Math.round(numbb4))     //11



// 4 number.toFixed(number) -->  this method will only work floating point number and is used to fix the 
// decimal point upto given number in parameter 



let xx= 10.985423496523652054

console.log(xx.toFixed(1))
console.log(xx.toFixed(2))
console.log(xx.toFixed(5))


// 5 Math.random()---> will generate a random number between 0  and 0.99999 everything you take output
// where is this method used --> to genrate random testdata in the testscript 
console.log("---------------------------------------------")
console.log(Math.random())


// genrate a random number between 0 - 100

//Math.random() -- > 0 --0.9999
//Math.random()*100 --> lowest 0.00000 --> highest number 100.9999999 --> 101

console.log(Math.floor(Math.random()*100))


// generate a random dice roll 

// 1-6 
 // generate a random number between 1 -6
 
 //Math.random() -- > 0 --> 0.99
//(Math.random()*6) --> 0 -->5.9999
// (Math.random()*6)+1)  --> 1.45313 --> 6.65436

 
 console.log((Math.floor(Math.random()*6)+1))

 let diceroll = (Math.random()*6)+1

 let final  = console.log(Math.floor(diceroll))


 // --------------------------------------------------------

 //20-30


// the general forluma is 

// Math.floor((Math.random()*(max -min)+min))


// incusley  -->29
// Math.floor((Math.random()*(max -min)+min))
console.log( Math.floor((Math.random()*(30 -20)+20)))
// exculsive --> 30
// Math.floor((Math.random()*((max -min+1)+min))


