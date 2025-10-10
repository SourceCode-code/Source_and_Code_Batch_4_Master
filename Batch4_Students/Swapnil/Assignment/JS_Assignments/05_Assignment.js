// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
let minNum = 50;
let maxNum = 100;

let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(randomNum)
// -----------------------------------------------------

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
let floatingNum = 45.6789;
console.log(floatingNum.toFixed(2))
// -----------------------------------------------------

// 3. Create a program to roll two dice (1–6 each) and print their sum.
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let sum = dice1 + dice2;
console.log("Dice 1:", dice1, "Dice 2:", dice2, "Sum:", sum)
// -----------------------------------------------------

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
let userNum = 123
console.log(Math.round(userNum / 10) * 10)
// -----------------------------------------------------

// 5. Generate a random 6-digit OTP using Math methods.
let otp = Math.floor( Math.random() * 900000 ) + 100000
console.log(otp)
// -----------------------------------------------------


// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
let str11 = "JavaScript";
console.log(str11[0], str11[str11.length - 1])  
// -----------------------------------------------------

// 8. Write a program to count how many characters (excluding spaces) are in a string.
let str11 = "a program to count how many characters are in a string.";
let counting = str11.length
let str12= str11.replaceAll(" " ,"")
counting = str12.length
console.log(counting)


// -----------------------------------------------------

// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName = "Swapnil"
let middleName = "Bansi"
let lastName = "Gaikwad"
console.log(`${firstName} ${middleName} ${lastName}`)
// -----------------------------------------------------

// 10. Write a program that takes a long sentence and prints it in uppercase.
let upperStr = "Write a program that takes a long sentence and prints it in uppercase";
console.log(upperStr.toUpperCase())
// -----------------------------------------------------

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let str13 = "   Swapnil Bansi Gaikwad   ";
console.log(str13.trim())
// -----------------------------------------------------

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let str14 = " Hey there I am learning JavaScript ";
console.log(str14.includes("JavaScript"))
// -----------------------------------------------------

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
let str15 = "This is a bad idea";
let newStr15 = str15.replace("bad","good")
console.log(newStr15)   
// -----------------------------------------------------

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let str16 = "I like to eat apple. apple is good for our health. apple is very juicy"
let newStr17 = str16.replaceAll("apple","mango")
console.log(newStr17)   
// -----------------------------------------------------

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let str18 = "red,green,blue,yellow"
let splitedColours = str18.split(",")
console.log(splitedColours) 
console.log(splitedColours[0])
console.log(splitedColours[1])
console.log(splitedColours[2])
console.log(splitedColours[3])
// -----------------------------------------------------

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let str19 = "JavaScript is the most popular programming language";
console.log (str19.length)
console.log(str19.indexOf("a"))
console.log(str19.lastIndexOf("a"))
// -----------------------------------------------------

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
let str20 = "JavaScript";
console.log(str20.substring(4,10));
// -----------------------------------------------------

// 18. Extract the first 4 characters of the string "Programming" using substr().
let str21 = "Programming";
console.log(str21.substr(0,4));
// -----------------------------------------------------

// 19. Write a program that takes two strings and joins them using concat().
let str22 = "Swapnil" 
let str23 = "Gaikwad"
console.log(str22.concat(" ",str23))        
// -----------------------------------------------------

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
//let randomNumber = Math.random() * 1000;
let randNum1 = Math.random() * 9999;
console.log(randNum1)
let roundUp = Math.ceil(randNum1);

let randNum2 = Math.random() * 9999;
console.log(randNum2)
let roundDown = Math.floor(randNum2);
console.log(roundUp,roundDown) 

// -----------------------------------------------------


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str31 = "hello world";
console.log(str31.length)

// 2. Retrieve the last character of the string "automation".
let str32 = "automation";    
console.log(str32[str32.length-1])

// 3. Convert the string "learning" to uppercase.
let str33 = "learning";
console.log(str33.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
let str34 = "coding";
console.log(str34.includes("code")) 

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())
// -----------------------------------------------------


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let splitcharacters = str7.split(" ")
console.log(splitcharacters)
console.log(splitcharacters[0])
console.log(splitcharacters[1])
console.log(splitcharacters[2]) 

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
let str80 = str8.replaceAll("banana","pineapple")
console.log(str80)

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase()) 

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10.charAt(4))    

// 11. Write a check for a string and return true if it includes the word "API".
let str111 = "API stands for Application Programming Interface.";
console.log(str111.includes("API"))
// -----------------------------------------------------

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.substr(str12.length - 4))

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())
// -----------------------------------------------------

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
let str140 = str14.replace("test","exam")
console.log(str140) 
