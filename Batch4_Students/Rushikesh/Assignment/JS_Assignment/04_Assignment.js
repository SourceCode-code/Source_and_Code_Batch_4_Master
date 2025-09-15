// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
// Write a single-line comment
/* this is
a multi-line
comments
*/

// Q2. Print "Welcome to JavaScript Assignment" using console.log.
// let str1 = "Welcome"
// console.log(str1)

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
// var name = 'rushi'
// console.log(name) // rushi
// var name = 'sagar'
// console.log(name)// sagar 

// Q4. Declare a variable using let, update its value, and print it.
// let name1 = "mahesh"
// name1 = "1234"
// console.log(name1)// 1234

// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
// const pi = 3.14
//  pi = 234 //TypeError: Assignment to constant variable.

// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
// let firstName = "rushi"
// let middleName = "omprakash"
// let lastName = "jadhav"

// console.log(firstName + middleName + lastName) //rushiomprakashjadhav
// console.log(`${firstName} ${middleName} ${lastName}`) // rushi omprakash jadhav

// Q7. Create variables using valid names: city1, _city, $city and print them.
// let city1 = "pune"
// let _city = "mumbai"
// let $city = "solapur"
// console.log(city1) // pune
// console.log(_city) // mumbai
// console.log($city) // solapur

// Q8. Show with an example that variable names are case-sensitive in JavaScript.
//  let newnum = 123
//  let newNum = 456
// console.log(newnum) // 123
// console.log(newNum) // 456
 // Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null
// let num = 25
// let num1 = "hello"
// let num2 = true
// let num3 =undefined 
// let num4 = null
// console.log(typeof (num)) // number
//  console.log(typeof (num1)) // string
//   console.log(typeof (num2)) // boolean
//  console.log(typeof (num3)) // undefined
//   console.log(typeof (num4)) // object


// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %
// let num = 25 + 10
// let num1 = 25 - 10
// let num2 = 25 * 10
// let num3 = 25 / 10 
// let num4 = 25 % 10
// console.log( num) //35
//  console.log(num1) // 15
//   console.log(num2) // 250
//  console.log(num3) // 2.5
//   console.log(num4) // 5

// Q11. Round the number 10.99 down to nearest integer using Math.floor.
// num = 10.99
// console.log(Math.floor(num)) // 10

// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
// let num = 10.01
// console.log(Math.ceil(num)) // 11

// Q13. Round 10.05 and 10.99 using Math.round.
// let num = 10.05
// let num1 = 10.99 
// console.log(Math.round (num)) //10
// console.log(Math.round(num1))//11

// Q14. Generate a random number between 0 and 1 using Math.random.
//  let num = Math.round(Math.random()*1)
// console.log(num)

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
//console.log(Math.floor(Math.random()*6)+1)

// Q16. Generate a random number between 10 and 20.
// console.log(Math.ceil(Math.random()*(20-9))+9)+1

// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
//  let numToRound = 32;
// console.log(Math.round(numToRound/5)*5) 

// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
// console.log(Math.floor(Math.random()*(9999 - 1000)) + 1000);

// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).
// console.log(Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000);

// Q20. Create a string "Siddhant Arjun Gadakh". Print:
// let str1 = "Siddhant Arjun Gadakh"
//      a) length of the string
// console.log(str1.length)//21
// //      b) first character
// console.log(str1.substr(0,8))//Siddhant
// //      c) last character
// console.log(str1.substring(15,21)) //Gadakh

// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
// let str2 ="Siddhant \ Arjun \ Gadakh"
// console.log(str2)// Siddhant  Arjun  Gadakh

// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
// let str3 = "my name is \'Siddhant\'"
// console.log(str3)// my name is 'Siddhant'

// Q23. Convert "javascript" into UPPERCASE using string method.
// let str4 = "javascript"
// console.log(str4.toLocaleUpperCase())// JAVASCRIPT

// Q24. Convert "HELLO WORLD" into lowercase using string method.
// let str5 ="HELLO WORLD"
// console.log(str5.toLocaleLowerCase()) //hello world

// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
// let str5 ="HELLO WORLD"
//  console.log(str5.toLocaleUpperCase().toLocaleLowerCase().length) // 11

// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
// let str1 = "Siddhant Arjun Gadakh"
// console.log(str1.substr(0,8))//Siddhant

// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
// let str1 = "Siddhant Arjun Gadakh"
//  console.log(str1.substring(9,14))//Arjun

// Q28. Split the string "I love JavaScript" into an array by spaces.
// let str6 = "I love JavaScript"
// console.log(str6.split(""))

// Q29. Split the string "banana" into parts wherever "a" occurs.
// let str7 = "banana"
// console.log(str7.split("a"))

// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
// let rushikeshOmprakashJadhav = "My Name"
// console.log(rushikeshOmprakashJadhav)//My Name

// Q31. Generate a random integer between 50 and 100.
//console.log(Math.floor(Math.random()*(100-50))+50)
// Q32. Generate a random integer between -20 and -10.
//console.log(Math.floor(Math.random()*(-10-(-20)))+(-20))

// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").

// Q34. Generate a random integer between 100 and 999 (3-digit number).
 //console.log(Math.floor(Math.random()*(999-100))+100)

// Q36. Generate a random number between 1 and 100 and check if it is even or odd.

// Q37. Generate 5 random numbers between 1 and 10 

// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).




