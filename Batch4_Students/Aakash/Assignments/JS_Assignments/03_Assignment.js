// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello world"
console.log(typeof greeting)

/* 2. Declare a number variable `price` with a value of 199.99,
then use Math.ceil() to round it up to the nearest whole number and log the result.*/

let price = 199.99
console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "Akash Manik jadhav"
let stringLength = name.length
console.log(stringLength)

/*4. Write a program that concatenates three string variables
`firstName`, `middleName`, and `lastName` using both the `+` operator
and template literals, then log the full name.*/

let firstname1 = "Akash"
let middleName1 = "Manik"
let lastName1 = "Jadhav"
console.log(firstname1 + " " + middleName1 + " " + lastName1)
console.log(`${firstname1} ${middleName1} ${lastName1}`)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'JavaScript'
console.log(language)
// need explaination again

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
console.log(Math.round(Math.random()*10)*2)

// 7. Create a long literal string that spans multiple lines and log it.
let str11 = "akash\
manik\
jadhav"
console.log(str11)

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

let str12 = "I am learning \"JavaScript\""
console.log(str12)
let str13 = " Its\'s \"fun\" to learn JavaScript !"
console.log(str13) 

/*9. Write a program that declares a variable `amount = 45.85`,
 then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.*/
 let amount = 45.85
 console.log(Math.floor(amount))
 console.log(Math.ceil(amount))
 console.log(Math.round(amount))

 /* 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.
length` property to find the length of the string and the index of the character 'J'.*/
let quote = "Learning JavaScript is awesome!"
console.log(quote.length)


// 12. Create a string variable `str = 'Hello, World!'` and use an
//  escape character to insert a tab between the words "Hello," and "World!" and 
// log the result.
let str14 = "\"Hello\", \t \"World\""
console.log(str14)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1 + " " + str2)
console.log(`${str1} ${str2}`)

/* 14. Write a program to pick a random element from 
string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.*/
let str3 = "qwertyuiopasdfghjklzxcvbnm"
console.log(str3.length)
let num1 = Math.floor(Math.random()*str3.length)
console.log(num1)
// need more explaination on this 

//15 write a program to generate a random odd number form 15-150
let minNumber = 15
let maxNumner = 150
console.log(Math.round(Math.random()*135)+15)/2+1
//need more explaination on this 

