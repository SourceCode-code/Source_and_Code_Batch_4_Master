// Datatypes in Javascript 
// 2 String --> 
// String are seqeuences of character and can be defined by ("double quotes  ") , ('Single quotes '), (`backticks `)

// Examples of string 

let str =" " // empty string
let str1 ='siddhant'// string in single quotyes
let str2 =`123456789` // string in backticks
let str3 =" true" // string 
let str4 ="null"

console.log( typeof(str))
console.log( typeof(str1))
console.log( typeof(str2))
console.log( typeof(str3))
console.log( typeof(str4))

// NUMBER DATATYPE 

// methods --> 
//Math.floor,Math.ceil,Math.random,etc

// String dataypes aslo have properties and methods

// string has a property called as length 
// string also has many methods 


//1 String has a property called as length 
let str5 = "siddhant arjun gadakh" // length is 20
let str6 = `siddhant arjun gadakh` 
console.log(str5.length)// this used to print the length string 
console.log(str6.length)

//2  Characters in string are stored by indexes in strings

// example 

//let str7 =   "S I D D H A N T"
// indexing =   0 1 2 3 4 5 6 7

let str8 = "Siddhant"

console.log(str8[0])

console.log(str8[7])

// The last index is always length -1 

console.log(str8[str8.length-1])

//String concantions --> combine 2  or more string 

let firstName = "siddhant"
let midddleName = "Arjun"
let lastName  ="Gadakh"

// use + opertor 

console.log(firstName + " " +midddleName + " "+ lastName)

//2 way use es6 string literal (template literal)

let fullname = `${firstName} ${midddleName} ${lastName}`

console.log(fullname)
