// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
console.log(randomNum)
// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------
let randomFloat = 45.6789
console.log(randomFloat.toFixed(2))

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------
let rolledDice1 = Math.floor(Math.random()*6)+1
let rolledDice2 = Math.floor(Math.random()*6)+1
console.log(rolledDice1,"+",rolledDice2,":",rolledDice1 + rolledDice2,)

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------
let Num1 = 47
console.log(Math.round(Num1/10)*10)
let Num2 = 123
console.log(Math.round(Num2/10)*10)
// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
let minOtp = 100000
let maxOtp = 999999
let OTP = Math.floor(Math.random()*(maxOtp-minOtp)+minOtp)
console.log(OTP)

// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
let str20 = "JavaScript"
console.log(str20[0])
console.log(str20[str20.length-1])
// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
let str21 = "Write a program to count how many characters (excluding spaces) are in a string."
let strlen = str21.replaceAll(" ","")
console.log(strlen.length)

// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------
let firstName = "AKASH"
let middleName = "MANIK"
let lastName = "JADHAV"
console.log(firstName + " " + middleName + " " + lastName)
console.log(`${firstName} ${middleName} ${lastName}`)
// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------
let str22 = "Write a program that takes a long sentence and prints it in uppercase."
console.log(str22.toUpperCase())

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
let str23 = "                       longspaces                   "
console.log(str23.trimEnd())
console.log(str23.trim())

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------
let str24 = "JavaScript"
console.log(str24.includes("JavaScript"))
// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------
let str25 = "This is a bad idea"
console.log(str25.replace("bad","good"))
// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------
let str26 = "Ripe mangoes are full of energy and are enjoyed by everyone.\
 Interestingly, every part of the mango tree is useful. We use raw mangoes to make chutneys, \
 pickles, and curries. We also make\
 squash, jams, juices, and syrups from mangoes. Mango is my favourite fruit because it’s sweet and pulpy."
 console.log(str26.replaceAll("mango","apple"))
// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------
let str27 = "red,green,blue,yellow"
let strColour = str27.split(",")
console.log(strColour[0])
console.log(strColour[1])
console.log(strColour[2])
console.log(strColour[3])
// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
let str28 = "aakash"
console.log(str28.indexOf("a"))
console.log(str28.lastIndexOf("a"))
console.log(str28[0])
console.log(str28[3])
// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------
let  str29 = "JavaScript"
console.log(str29.substring(5,10))
// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
let str30 = "Programming"
console.log(str30.substr(0,4))

// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
let str31 = "akash"
let str32 = "jadhav"
console.log("answer of 19 :" ,str31 + " " + str32)
console.log(`${str31} ${str32}`)
// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------
let str33 = 10.22
console.log("answer of 20",Math.floor(str33))
console.log("answer of 20",Math.ceil(str33))

// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)
// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2.length)
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
let str6 = "PlaywrightAutomation";
console.log(str6.substring(0,5))
// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress\n is\n fun";
//console.log(str7.split(" "))
console.log(str7)

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana","pineapple"))

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[5])

// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------
let str19 = "API stands for Application Programming Interface."
console.log(str19.includes("API"))
// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
let newCh = str12.length - 4
console.log(str12.substring(newCh,str12.length))

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLocaleLowerCase().trim())

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test" , "exam"))

