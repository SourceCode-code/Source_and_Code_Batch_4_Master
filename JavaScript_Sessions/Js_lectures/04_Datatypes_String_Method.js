// Strings methods

// String is a immutable datatype --> there can be now change in the string properties 

// .toUpperCase() --> this method is used to convert string into upper case 
let str = "Siddhant Arjun Gadakh"



// the way to use any method on string is 

// nameofstring/varaible.methodname(parameter)

console.log(str.toUpperCase()) //SIDDHANT ARJUN GADAKH
let str1 = str.toUpperCase()

// .toLowercase() --this method is used to convert string into lower case 
console.log(str1.toLowerCase()) //siddhant arjun gadakh

// string concatiation --> (+), ` ${}`


// method concatenation --> method chaining 
// method chaning will only work when output of one method is the valid input for another method 
// example str.toUppercase().lenth retrun a number but to lowercase is string method  so it cant be applied to a number 

let str3 = "hello my name is Siddhant aNd my aGe is 26"
console.log(str3.length)
console.log(typeof (str3.length))

// let methodconcat = str3.toUpperCase().toLowerCase().toUpperCase().length.toLowerCase() //
// 42


// console.log(methodconcat)

// note every method has something called as output as well as return type 

// Substr()    -->Substr is method which get a part of string (starting index,numbr of characters )
let str4 = "Siddhant Arjun Gadakh"
let newstr1 = str4.substr(0, 8)
console.log(newstr1)

// substring   -->subString is method which get a part of string (starting index,ending index) (it will not include the 
// ending index)

// this will help to retrun certain part of string 

let newstr2 = str4.substring(0, 7)
console.log(newstr2)

// what is difference between substr and substring
// the use of both the methods are one and the same it gets us a part of the string but the difference is the syntax
// substr () --uses (starting index,number of characters )
// subString()-- uses (starting index,ending index) (it will not include the ending index in the output)

// split() --> this method is used to convert one string into many  new string --> this return an array

//let str4 = "Siddhant Arjun Gadakh"
 

console.log(str4.split(""))

// //[
//   'S', 'i', 'd', 'd', 'h',
//   'a', 'n', 't', ' ', 'A',
//   'r', 'j', 'u', 'n', ' ',
//   'G', 'a', 'd', 'a', 'k',
//   'h'
// ]

console.log(str4.split(" ")) //[ 'Siddhant', 'Arjun', 'Gadakh' ]

console.log(str.split("a")) //[ 'Siddh', 'nt Arjun G', 'd', 'kh' ]

//


// generate a radom head or tails 


let str7="HT"

console.log(str7[0]) //H
console.log(str7[1]) // T

let num =Math.round(Math.random()) 

console.log(str7[num])