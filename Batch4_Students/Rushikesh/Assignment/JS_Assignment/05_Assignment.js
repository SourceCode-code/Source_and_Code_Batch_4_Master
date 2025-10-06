// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
//console.log(Math.floor(Math.random()*(100-50)+50))
// -----------------------------------------------------

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// let num = 12346.45678
// console.log(num.toFixed(2)) // 12346.46
// -----------------------------------------------------

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// console.log(Math.floor(Math.random()*12)+1)
// -----------------------------------------------------

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// let num1 = 196
// console.log(Math.round(num1/10)*10)
// -----------------------------------------------------

// 5. Generate a random 6-digit OTP using Math methods.
//console.log(Math.floor(Math.random()*999999))
// -----------------------------------------------------


// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// way 1st
// let que7 = "JavaScript"
// console.log (que7.split("avaScrip"))

//   way 2nd 
// console.log(que7.substring(0,1))// J
// console.log(que7.substring(9,10))// t

// way 3
// console.log(que7.substr(0,1))// J
// console.log(que7.substr(9,1))// t
// -----------------------------------------------------

// 8. Write a program to count how many characters (excluding spaces) are in a string.
// let que8 = "  rushikesh "
// console.log(que8.length)// 12
// let ans = (que8.trim())
// console.log(ans.length) // 9

// -----------------------------------------------------

// 9. Concatenate first name, middle name, and last name using template literals and print it.
// let firstName = "rushikesh"
// let middName = "omprakash"
// let lastName = "jadhav"

// console.log(`${firstName}${middName}${lastName}`) // rushikeshomprakashjadhav
// console.log(`${firstName} ${middName} ${lastName}`) // rushikesh omprakash jadhav
// -----------------------------------------------------

// 10. Write a program that takes a long sentence and prints it in uppercase.
// let sent = 'qwertyeuidjkhfacddiolrhttfdbnjyfvujvmchnjb'
// console.log(sent.toUpperCase()) // QWERTYEUIDJKHFACDDIOLRHTTFDBNJYFVUJVMCHNJB
// -----------------------------------------------------

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
//  let que11 = "  rushikesh "
// console.log(que11.length)// 12
// let ans = (que11.trim())
// console.log(ans.length) // 9
// console.log(que11.trimStart())//rushikesh
// console.log(que11.trimEnd())//  rushikesh
// console.log(que11.trimStart().length)//10
// console.log(que11.trimEnd().length)//11
//-----------------------------------------------------

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// let stetment = "i like JavaScript and Python"
// console.log(stetment.includes("JavaScript"))// true
// -----------------------------------------------------

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// let stet = "This is a bad idea"
// console.log(stet.replace("bad" , "good")) // This is a good idea
// -----------------------------------------------------

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// let stetment = 'i like apple , apple juice , apple cake and apple is one of the favourite fruit'
// console.log(stetment.replaceAll("apple" , "mango")) // i like mango , mango juice , mango cake and mango is one of the favourite fruit
// -----------------------------------------------------

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// let colers = "red,green,blue,yellow"
// console.log(colers.split(" "))
// -----------------------------------------------------

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
//let stetment = 'i like apple , apple juice , apple cake and apple is one of the favourite fruit'
// console.log(stetment.indexOf("a")) // 7
// console.log(stetment.lastIndexOf("a")) // 65

// -----------------------------------------------------

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// let name = "JavaScript"
// console.log(name.substring(4,10))// Script
// -----------------------------------------------------

// 18. Extract the first 4 characters of the string "Programming" using substr().
// let name1 = "Programming"
// console.log(name1.substr(0,4))
// -----------------------------------------------------

// 19. Write a program that takes two strings and joins them using concat().
//  let firstName = "rushikesh"
//  let middName = 'omprakash'
// let lastName = "jadhav"
// console.log(firstName .concat (middName,lastName))//rushikeshjadhav
// -----------------------------------------------------

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// let num = 444.9999
// console.log(Math.floor(num))// 444
// console.log(Math.ceil(num))// 445

// -----------------------------------------------------


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length) // 11

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2.length-1) //9
console.log(str2[9])//n

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())// LEARNING

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code"))// false

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())//JavaScript


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5))//Playw

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log(str7.split(''))

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replace("banana" , "pineapple" ))

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())// JAVASCRIPT

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[5])//i

// 11. Write a check for a string and return true if it includes the word "API".
let str11 = 'i learn abut the API '
console.log(str11.includes('API'))// true
// -----------------------------------------------------

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12[4])//m

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let name = (str13.toLowerCase().trim())//helloworld
console.log(name)
console.log(str13.length)//12
console.log(name.length)//10

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace('code','exam'))// test your exam with a test case









// Question No - 5 OTP , Tough and Advanced Question No. 7(is right or wrong)