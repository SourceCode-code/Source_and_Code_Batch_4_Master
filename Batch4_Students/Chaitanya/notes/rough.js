/* 
1.javascript is a versatile programming language used for web devlopment which allows developers to create
 dynamic and interactive web pages.

 2. comments are used to explain the code and they make code more readable and maintainable 

 3. variables are used to store data value. In JS there are 3 ways to declare variables var, let and const 
 a. var is used to declare a variable that can be reassigned 
 b. let is used to declare a block scoped variable which can be updated.
 */
let name = "Chaitanya";
name = "Sahil";
console.log(name) // here the last updated value will be displayed.

// c. const is used to declare a block scoped variable that cannot be reassigned or updated.

let a = "Chaitanya", b = "Bhausaheb", c = "kute", d = "patil ";
console.log(a + b + c + d); 

// DATETYPES IN JAVASCRIPT 

// there are 2 main types of datatypes in javascript 
//1. primitive datatypes - these are simple datatypes which cannot be changed. 
// they include numbers, string, null, boolean , undefined ans dymbols 
// numbers contain all possible forms of numbers (integers and floating) e.g let rollno = 25; 
// string is anything that is wrapped in single quotes, doubl quotes or backticks e.g let name = `Chaitanya`
// boolean represents a loical value i.e true or false e.g let boolean1 = true
// null is intentioanl absence of any value let a = null
//undefined represents a variable which has been declared but has not been assigned any value let a;
// symbols represents a unique identifier

// type of operator is used to check the datatype of the variable

//methods are udes to perform operations on the dataype 
//properties are used to access information about the datatype.


// METHODS USED FOR NUMBER DATATYPES
//1. Math.floor() ---> this methods round down the floating number to its nearest integer 
let x = 25;.999999999;
console.log(Math.floor(x))
// output -->25

// 2. Math.ceil()------> this method rounds up the floating number to nearest integer
let lays = 5.35;
console.log(Math.ceil(lays))

// Math.round()----------> this method rounds to the nearest integer (0.5< round down, 0.5>round up)
let dell = 19.750;
console.log(Math.round(dell))

//Math.toFixed()---> this method formats a number using fixed point noatation.
let tofix = 9.9999999999999999999999999999999999999999999999999999999999999999999999999999999
console.log(tofix.toFixed(11))

//// Math.random() - generates a random number between 0  and 1 -- > (0 , 0.9)

console.log(Math.random()); // Output: a random number between 0 and 1

// generic fromula to generate random number between any two numbers
// (Math.floor(Math.random() * (max - min + 1)) + min)
// Math.floor(Math.random()*(max-min)+min)

// generate a random string in which we have 3 aplhabtes 2 numbers 1 symbol 

let aplhastr = "qwertyuiopasdfghjklzxcvbnm"
let symstr = "!@#$%^&*()_+"

let letter1 = Math.floor(Math.random()*(aplhastr.length))
let letter2 = Math.floor(Math.random()*(aplhastr.length))
let letter3= Math.floor(Math.random()*(aplhastr.length))

let strnum = Math.floor(Math.random()*(99-10)+10)
console.log(strnum)

let randsym = Math.floor(Math.random()*(symstr.length))

console.log(`${aplhastr[letter1]}${aplhastr[letter2]}${aplhastr[letter3]}${strnum}${symstr[randsym]}`)

// string has a property called as length 
// string also has many methods 


//1 String has a property called as length 
let str5 = "siddhant arjun gadakh" // length is 21
let str6 = `siddhant arjun gadakh`
console.log(str5.length)// this used to print the length string 
console.log(str6.length)
let str8 = "Siddhant"

console.log(str8[0])//----> output S

console.log(str8[7])// output -----> t

//2  Characters in string are stored by indexes in strings

// example 

//let str7 =   "S I D D H A N T"
// indexing =   0 1 2 3 4 5 6 7

let Str8 = "Siddhant"

console.log(Str8[0])

console.log(Str8[7])

// The last index is always length -1 

console.log(str8[str8.length - 1])

//String concatenation:

let firstName = "siddhant"
let midddleName = "Arjun"
let lastName = "Gadakh"

// use + opertor 

console.log(firstName + " " + midddleName + " " + lastName)

//2 way use es6 string literal (template literal)
//  note this only works when the string is defined by backticks 

let fullname = `${firstName} ${midddleName} ${lastName}`

console.log(fullname)



//Long literal string (\)

let str9 = "qwertyuiopasdfghjklzxcvbnmjhgtfrdsxzcvbnhjuytfrdcvbnjuhytgfcv bnjhygtfvbnjhgv\
hgnbmjkhughvm,bknlhvhm\
ajchvask,c\
ythgasv"

console.log(str9)

// Escape Characters :
// escape character are the special characters used in strings starting with a backslash (\)

// Examples of commonly used escapse character 

//1) new line - (\n) -- this allows you to print your output in multiline in terminal 
let str10= "siddhant\narjun\ngadakh"  
console.log(str10)                       //siddhant
                                        // arjun
                                        // gadakh 

//2 (\t) -- this indicates tab key (8 spaces )

let str11= "siddhant \t gadakh"
console.log(str11)

//siddhant         arjun   gadakh
//siddhant        arjun   gadakh

//3) (\') -- adding single quotes in a string declared  by single quotes 

let str12 = 'my name is \'Siddhant arjun gadakh\''

console.log(str12)  //my name is 'Siddhant arjun gadakh'

//3) (\") -- adding single quotes in a double declared  by double quotes 

let str13 = "my name is \"Siddhant arjun gadakh\""

console.log(str13) // my name is "Siddhant arjun gadakh"


