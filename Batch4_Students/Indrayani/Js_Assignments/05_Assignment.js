// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------

//Ans:

let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum)
console.log(randomNum)


// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.

//Ans:

let floatingNum = 45.6789;
console.log(floatingNum.toFixed(2));


// 3. Create a program to roll two dice (1–6 each) and print their sum.

//Ans:

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die = (die1 + " " + die2);
console.log(die);

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------

//Ans: 

let userNum = 47;
console.log(Math.round(userNum / 10) * 10)


// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
//Ans:
let otp = Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000;
console.log(otp)

// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
//Ans:
let givenstring = "JavaScript"
console.log(givenstring.length)
console.log(givenstring[0])
console.log(givenstring[9])


// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
//Ans:
let stringwithspaces = "  Indrayani  ";
console.log(stringwithspaces.trim().length)


// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------
//Ans:
let firstName = 'Indrayani'
let middleName = 'Prataprao'
let lastName = 'Suryawanshi'
let fullName = `${firstName} ${middleName} ${lastName}`
console.log(fullName)

// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------
//Ans:
let longsentense = " My name is Indrayani Suryawanshi. I am from NaviMumbai and I have completed my postgraduation from\
 Pune University. I have get hands on experience in both mannual and automation testing.\
 That's quick review of me. "
console.log(longsentense.toUpperCase())

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
//Ans:
let extraspaces = "      extraspaces      "
console.log(extraspaces.trim())


// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------
//Ans:
let sentense = "Javascript is a programing language"
console.log(sentense.includes("Javascript"));

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------
//Ans:
let str = "This is bad idea"
let newstr = str.replace("bad", "good")
console.log(newstr)

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------
//Ans:
let q14 = "an apple keeps a Dr.away\
a is for apple and apple is a fruit\
apple is apple and it is good in taste"
let q15 = q14.replaceAll("apple", "mango")
console.log(q15)

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------
//Ans:
let colours = "red,green,blue,yellow"
console.log(colours.split(","))

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
//Ans:
let strindex = "Indrayani Prataprao Suryawanshi"
console.log(strindex.indexOf('a'))
console.log(strindex.lastIndexOf('a'))

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------
//Ans:
let lang = "Javascript"
console.log(lang.substring(4, 10))

// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
//Ans:
let prog = "Programming"
console.log(prog.substr(0, 4))

// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
//Ans:
let string1 = "Hello"
let string2 = "World"
let string3 = "From"
console.log(string1.concat(" ", string2, " ", string3))


// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// ----------------------------------------------------
//Ans:
let randomNumber = Math.random()
console.log(randomNumber)
let roundedNumber = Math.ceil(randomNumber)
console.log(roundedNumber)
let roundeddownNumber = Math.floor(randomNumber)
console.log(roundeddownNumber)


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
//Ans:
console.log(str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
//Ans
console.log(str2.indexOf('n'))
console.log(str2.substr(9 , 1))

// 3. Convert the string "learning" to uppercase.
//Ans:
let str3 = "learning";
console.log(str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
//Ans:
let str4 = "coding";
console.log(str4.includes("code"))


// 5. Trim the spaces from the string "   JavaScript   ".
//Ans:
let str5 = "   JavaScript   ";
console.log(str5.trim())


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substring(0 ,6))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.

let str7 = "Cypress is fun";
console.log(str7.split(" "))

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana", "pineapple"))

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[5])

// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------
 let str11 = "Rest API testing is important"
 console.log(str11.includes("API"))

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.length)
console.log(str12.substr(14,4))

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test", "exam"))


