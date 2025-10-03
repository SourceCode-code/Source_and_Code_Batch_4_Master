// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.

let greeting= "Hello World"
console.log(typeof greeting)

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.

let price = 199.90
console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.

let fullName= "Ankita Hanumant Fartade"
console.log(fullName.length)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let fName= "Ankita"
let mName= 'Hanumant'
let lName= `Fartade`
let fullName1= fName+' '+mName+` `+lName
console.log(fullName1)
let fullName2= `${fName} ${mName} ${lName}`
console.log(fullName2)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'JavaScript'
console.log(language [4])

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let min= 0
let max= 20
let randomNo= Math.floor(Math.random()*(11))*2
console.log (randomNo)

//let randomEven = Math.floor(Math.random() * ((max - min) / 2 + 1)) * 2 + min;
let randomNumber = Math.floor(Math.random()*((20-0)/2+1))*2+0
console.log(randomNumber)

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let longStr= `hi my name is
Ankita
Hanumant
Fartade.`
console.log (longStr)

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.


// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.


// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.



//15 write a program to generate a random odd number form 15-150

