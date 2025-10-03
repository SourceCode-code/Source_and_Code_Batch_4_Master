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



// trim()  [trimStart(),trimEnd()]--> this method is used to remove the extra spaces form the string 

// trim()--> this method will remove the extra spaces form both sides of the string i.e starting and ending of string


let str5 = " Sidd hant "
console.log(str5.length)

console.log(str5.trim())
console.log(str5.trim().length)

// trimStart()--> this method will remove the extra spaces form the starting of the string 
console.log(str5.trimStart())
console.log(str5.trimStart().length)

// trimEnd()--> this method will remove the extra spaces form the Ending of the string 
console.log(str5.trimEnd())
console.log(str5.trimEnd().length)

//note trim methods will not remove the spaces in between strings 

// includes()--> this method is used to check whether a string contains a particular substring or not 
let str6 ="Hello I am Learning Javascript"

console.log(str6.includes("javascript")) // here the return type is boolean
//js is case sensitive that is why you have to give input as a proper character

// note ->  when we use any method we get two things 
//1 output --> this is what we see on console --> exmaple in case of split() --> muiltple string
//2 return type --> the datatype of the output --> in case of split the return type is array 


// replace(word to replace , word to replace with)--> this method is used to replace only first occurance particular character or word in string  with another

let str7 ="hello i am learning javascript and javascript is a web development language"

let newstr4 = str7.replace("javascript","python")
console.log(newstr4)

// replaceAll()-->(word to replace , word to replace with)--> this method is used to replace all occurance particular character or word in string  with another

let newstr5 = str7.replaceAll("javascript","python")
console.log(newstr5)

//note -> both replace and replaceAll method are case sensitive 

// indexOf()--> this method is used to find the index of particular character  (first occurance)

let str8 ="qwertyuiopasdfghjklzxcvbnmp"

console.log(str8.indexOf("p"))
console.log(str8[9])

// lastIndexOf()-->this method is used to find the index of particular character  (last occurance)
console.log(str8.lastIndexOf("p"))
console.log(str8[26])

// concat()--> this method is used to join two or more strings

let str9 = "hello"
let str10="world"
let str11 ="thisisjarvis"

// +operator
// `${}` --> template literals

console.log(str9.concat(str10,str11))

console.log(str11.concat(str9,str10))

