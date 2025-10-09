// Datatypes in Javascript 
// 2 String --> 
// String are seqeuences of character and can be defined by ("double quotes  ") , ('Single quotes '), (`backticks `)

// Examples of string 

let str = " " // empty string
let str1 = 'siddhant'// string in single quotyes
let str2 = `123456789` // string in backticks
let str3 = " true" // string 
let str4 = "null"

console.log(typeof (str))
console.log(typeof (str1))
console.log(typeof (str2))
console.log(typeof (str3))
console.log(typeof (str4))

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

console.log(str10)

//2 (\t) -- this indicates tab key (8 spaces )

let str11= "siddhant \t gadakh"
console.log(str11)

//siddhant         arjun   gadakh
//siddhant        arjun   gadakh

//3) (\') -- adding single quotes in a string declared  by single quotes 

let str12 = 'my name is \'Siddhant arjun gadakh\''

console.log(str12)

//3) (\") -- adding single quotes in a double declared  by double quotes 

let str13 = "my name is \"Siddhant arjun gadakh\""

console.log(str13)



