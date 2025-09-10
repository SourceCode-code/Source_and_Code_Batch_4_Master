// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
// let greeting = "Hello World"
// console.log(typeof greeting ) // string

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
// let price = 199.99
// console.log(Math.ceil(price)) // 200

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
// let name = "rushikesh omprakash jadhav"
// console.log(name.length)// 26

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
// let firstName = "rushikesh"
// let middleName = "omprakash"
// let lastName = "jadhav"
// console.log(firstName + " " + middleName + " "+ lastName) // rushikesh omprakash jadhav
// console.log(`${firstName} ${middleName} ${lastName}`) // rushikesh omprakash jadhav

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
// let  language = 'JavaScript'
// console.log(language[4])// s

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
// let num = Math.floor(Math.random()*10+1)*2
// console.log(num)

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let str1 = "ADVDGTSEROIFDHN\DBGFDT\
HGHEHFYDUDF\
VBGHUDKSLJFHDJDVG\
ICGFHYCJDTXCHCGDFU\
DFHDGCHFCXGFFHD"

console.log(str1)// ADVDGTSEROIFDHNDBGFDTHGHEHFYDUDFVBGHUDKSLJFHDJDVGICGFHYCJDTXCHCGDFUDFHDGCHFCXGFFHD

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let myWork = "I am learning JavaScript\.\nIt's \"fun\" to learn JavaScript\!"
console.log(myWork)

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
// let amount = 45.85
// console.log(Math.floor(amount)) // 45
// console.log(Math.ceil(amount)) // 46
// console.log(Math.round(amount)) // 46

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
// let quote = "Learning JavaScript is awesome!"
// console.log(quote.length) //31
// console.log(quote.indexOf("J")) // 9

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
// let str1 = 'abc';
// let str2 = 'def';
// console.log(str1 + str2) // abcdef
// console.log(`${str1}${str2}`) // abcdef

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
// let element = "qwertyuiopasdfghjklzxcvbnm"
//  console.log(element[6])

//15 write a program to generate a random odd number form 15-150

// let num = Math.ceil(Math.random()*45+15)*2+1
// console.log(num)






//1) new line - (\n) -- this allows you to print your output in multiline in terminal 
// let str10= "siddhant\narjun\ngadakh"

// console.log(str10) // siddhant
                   // arjun
                   // gadakh

//2 (\t) -- this indicates tab key (8 spaces )

// let str11= "siddhant \t gadakh"
// console.log(str11)

//siddhant         arjun   gadakh
//siddhant        arjun   gadakh

//3) (\') -- adding single quotes in a string declared  by single quotes 

// let str12 = 'my name is \'Siddhant arjun gadakh\''

// console.log(str12) // my name is 'Siddhant arjun gadakh'

//3) (\") -- adding single quotes in a double declared  by double quotes 

// let str13 = "my name is \"Siddhant arjun gadakh\""

// console.log(str13)// my name is "Siddhant arjun gadakh"