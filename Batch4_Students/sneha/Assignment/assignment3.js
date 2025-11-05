// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting="hello world"
console.log(typeof(greeting))

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price=199.99
console.log(Math.round(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let fullname="sneha suresh anap"
console.log(fullname.length)
// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let name=("sneha")
let middlename1=(" suresh ")
let lastname=("anap")
console.log( name +  middlename1 +lastname)

//using template literal

console.log(`${name} ${middlename1} ${lastname}`)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.

let language="javascript"
console.log(language[3])
// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.

let long="sdhwuidwhiwd\nwuwhwwuhe\nwhwehwehweghwgw\nwewewgwygeyw\kkjehgg"

console.log(long)
// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

let str123 =  "I am learning JavaScript."
console.log(str123)
//    It's "fun" to learn JavaScript!
console.log("It\'s \"fun\" to learn JavaScript!")


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.

let amount=45.85
console.log(Math.floor(amount))
console.log(Math.ceil(amount))
console.log(Math.round(amount))
// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.

let quote= "Learning JavaScript is awesome!"
console.log(quote.length)
console.log(quote.indexOf("J"))
// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str='Hello, World!'


// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log( str1 + str2)

//template literal

console.log(`${str1}  ${str2}`)

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

let string ="qwertyuiopasdfghjklzxcvbnm"
let random=(Math.round(Math.random()*(string.length)-1))
console.log(string[random])

