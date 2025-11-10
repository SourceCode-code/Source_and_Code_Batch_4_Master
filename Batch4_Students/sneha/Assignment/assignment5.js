// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
//let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
let randomNum = Math.floor(Math.random()*(100-50)+50)
console.log(randomNum)
// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------
let floT=
// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------

// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
console.log(Math.floor(Math.random()*(999999-11111)+111111))


// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
let string="javascript"
console.log(string[0])
console.log(string[9])


// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
let name="   sneha  "
console.log(name.length)
let a=(name.trim().length)
console.log(a)
// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------

// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------


let long="my name is sneha i am from sangamner"
console.log(long.toUpperCase())

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
let name1="   sneha  "

let a1=(name.trim())
console.log(a1)
// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------

// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------

// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let len  = "hello world";
console.log(len.length)


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length-1])

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code"))

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5))


// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress\n is\n fun";
console.log(str7)


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replace('banana','pineapple'))


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[5])

// 11. Write a check if  a string and returns true if it includes the word "API",
let strer="if  a string and returns true if it includes the word API"
console.log(strer.includes('API'))

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.substr(str12.length-4,str12.length))

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace('test','Exam'))