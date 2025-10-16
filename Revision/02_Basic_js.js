
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
console.log(xx.toFixed(2)) // 10.99
console.log(xx.toFixed(5)) // 10.98542


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


// incusley  -->
// Math.floor((Math.random()*(max -min)+min))
console.log( Math.floor((Math.random()*(30 -20)+20)))
// exculsive --> 
// Math.floor((Math.random()*((max -min+1)+min))




//-----------------------------------------------------------------------------


// incusley  --> from zero to hunderd --> 0-100
// Math.floor((Math.random()*((max -min+1)+min))

// exculsive --> > from 0 to 99--> 0-99
// Math.floor((Math.random()*(max -min)+min))



// generate a random between 0-100    --->1--99 // 0-100
// genarte a random number form 0-100 --->0-100


// genrate a random adhar number 

// generate a raNDOM 12 didgit 

let digit1 = Math.floor(Math.random()*(9999-1000)+1000)
let digit2 =Math.floor(Math.random()*(9999-1000)+1000)
let digit3 =Math.floor(Math.random()*(9999-1000)+1000)
let digit4 =Math.floor(Math.random()*(9999-1000)+1000)
console.log(digit1 , digit2 ,digit3 ,digit4)


// generate a random moblie number 
// 
let mobnum = Math.floor(Math.random()*(9999999999-100000000)+100000000) //735943614 //6914172218
console.log(mobnum)



// 10 digit  -- > 1000000000 ---> 9999999999
//12345678910



//----------------------------String --------------------------------------

// String --> any data (squence of character ) wrapped in 'single quotes ' , "double quotes " or `backticks ` is define as string

// example 

let str1="            " // empty string
let str2 = "1234567852"
let str3 = ` true `
let str4 = "null"
let str5 = ""

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(typeof str4)
console.log(typeof str5)


// everydata type will have its methods and properties 

// in relations of number --> method --> floor , ceil , random 


// so string also have method and properties 

//string has property called as length
// string has many method 

// note :- string are immutable  (cannot changed)


// length --->  string has property called as length 

let str6 = "siddhant"

console.log(str6.length) //8
// it will inculde every character including space 
 
// every charcter in string is stored in indexes 


// s  i  d  d  h  a  n  t  
// 0  1  2  3  4  5  6  7 

console.log(str6[0]) // s
console.log(str6[1]) //i

// the last character is always  length - 1


console.log(str6[str6.length-1])


// String concatenations -- when we merge or combine 2 or more string that called as string concatenations


// examples 

let firstname = "siddhant"
let middlename = "arjun"
let lastname ="gadakh"


// there are 2 ways 

// 1 using + operator 
let fullname = firstname+ " "+middlename+" "+lastname

console.log(fullname)

//2 ES6 Class --> ` back ticks `-- string literal or template literal 

let full = `${firstname} ${middlename} ${lastname}`

console.log(full)


// Escape character --> there are some properties of string --> we can by pass them for our conviceing using escape character 

//1 long literal string --> if we want to define string in more than one line we use (\)

let longstring = "trfyhgcjvhkuydtjxgchkmv,lbh.igufkydjtgxfchmvkgufiydtshxfgncjmvk,\
gfydgthxfbsdg\nsgsdfsdfsdfsdfgsdfgsdfgsdfgsdfgsdfggsdfgsdfgsdfgsdfgdfgdfdfdfdfgdfddhfa9s\
hugfonNGON0SDJGNOfdfdfdfdfdfdfdfdf"

console.log(longstring)

//2 newline (\n) --> 

let ss = "siddhant\n arjun\n gadakh"

console.log(ss)
//siddhant
//arjun
//gadakh

// 3 \' --> if you want to add a single quotes in a string defined by single quotes 

let qq = '\"Siddhant\" \'arjun\' gadakh'
console.log(qq)

// 4 \" --> if you want to add a double quotes in a string defined by double quotes 

let qqq = "Siddhant \"arjun\" gadakh"
console.log(qqq) //Siddhant "arjun" gadakh

let er = "i am learning js.\nit's \"fun\" to learn js"
console.log(er)



//-----------------------26-09-2025---------------------------------------


// Methods of string -->

//1 toUppercase()--> this method will return a aplhabatical string in uppercase (capital)

let str7 = "Learning string methods"

console.log(str7.toUpperCase()) //LEARNING STRING METHODS

//2 .toLowerCase() -->this method will return a aplhabatical string in Lower case (small)

let str8 ='LEARNING STRING METHODS 51365163'

console.log(str8.toLowerCase()) //learning string methods 51365163


let str9 = "Learning string methods conact"
console.log(str9.length)
console.log(typeof str9.length)
console.log(str9.toUpperCase().toLowerCase())  //LEARNING STRING METHODS CONACT //learning string methods conact
////LEARNING STRING METHODS CONACT.tolwercase() -->learning string methods conact


// method concatination -> when we apply 2 or more methods simulatenously where the output of first method is valid  input 
//  to second

                                                    //         30  .tolowercase()
//console.log(str9.toUpperCase().toLowerCase().toUpperCase().length.toUppercase().substr(0,8))
//


//28 

//error 


// note when we use any method we get 2 things output 2 is a return type 

//LEARNING STRING METHODS CONACT  --> string


//3 Substr() --> substr is method which is used to get a part of string  (starting index , number of charcter )
let str10 = "Learning string methods conact"
//                     (starting index, number character)
let newsub= str10.substr(5,8) //Learning

console.log(newsub)


//4 Substring()-->  subString is method which used to get a part of a string (starting index , ending index) // it wil not inculde the  ending 
// index in the output

// // 0-10 
// 0 ---9

console.log(str10[7])
let newsubstr =str10.substring(0,7)
console.log(newsubstr)



//5 spilt() --> this  is used to convert one string into many new strings   --> this has a return type of array 

let str11 = " hello my name is siddhant "
 
console.log(str11.split(" ")) //[ '', 'hello', 'my', 'name', 'is', 'siddhant', '' ]

console.log(str11.split("e")) 

console.log(str11.split(""))


let str12 = "12582685265"

console.log(str12.split(""))

