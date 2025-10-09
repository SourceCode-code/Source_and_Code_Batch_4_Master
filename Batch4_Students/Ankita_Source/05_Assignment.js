// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------

//An
let min = 50
let max= 100
let randomNum =Math.floor(Math.random()*(max-min+1))+min
console.log("randomNum=", randomNum)

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------

//Ans
let num = 45.6789
console.log(num.toFixed(2))

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------

//Ans
let max1=6
let min1=1
let dice1 = Math.floor(Math.random()*(max1-min1+1))+min1
let dice2= Math.floor(Math.random()*(max1-min1+1))+min1
let Total = dice1+ dice2
console.log("dice1=", dice1)
console.log("dice2=", dice2)
console.log("Total=", Total)

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------

//Ans
 

// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
let min2 = 100000
let max2= 999999
let OTP= Math.floor(Math.random()*(max2-min2+1))+min2
console.log("OTP=", OTP)

// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------

//Ans
let str = "JavaScript"
console.log(str.substring(0,1))
console.log(str [str.length-1])

// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
 
//Ans
let str20 = "You can do it      "
console.log(str.trim().length)



// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------

//Ans
//template literals `${}`
let firstName = "Ankita"
let middleName= "Hanumant"
let lastName= "Fartade"
console.log(`${firstName} ${middleName} ${lastName}`)

// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------

//Ans
let stra= "Good Evening Everyone, my name is Ankita Hanumant Fartade. currently I'm focusing to improve my coding & technical skills to become a better QA professional"
console.log(stra.toUpperCase())


// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------

//Ans
let strb= "      Ankitahanumantfartade     "
console.log(strb.trim())


// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------

//Ans
let strbb= "I love JavaScript hgasduytadjahgsdjgfasdutqrdyqwgdgfsdtuqdruydgshdvcjgf"
 let exist= strbb.includes("JavaScript")
 console.log(" JavaScript exist=", exist)

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------

//Ans
let strbbb= "This is bad idea"
let newstr = strbbb.replace("bad" , "good")
console.log(newstr)


// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------

//Ans
let straa= "mango apple mango apple mango apple mango mango mango apple apple apple"
let newstr1= straa.replaceAll("apple" , "mango")
console.log(newstr1)

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------

//Ans
let strrr= "red,green,blue,yellow"
let colors = strrr.split(" ")
console.log(colors)

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
 
//Ans
let strq= "hbsjdytfsdgcbhsgdcuysahjbvudshaui"
console.log(strq.indexOf("a"))

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------

let strqq= "JavaScript"
let substr=strqq.substring("4")
console.log(substr)

// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------

//Ans
let strqqq= "Programming"
let newWord= strqqq.substr(0,4)
console.log(newWord)

// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------

//Ans
let str22= "Ankita Hanumant"
let str222= "Fartade"
let newStr=(str22.concat(str222))
console.log(newStr)

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------

//Ans
//generate a random number between 0 and 25
let randomN=Math.random()*25
let roundUp= Math.ceil(randomN)
let roundDown=Math.floor(randomN)
console.log("randomN=", randomN)
console.log("Round Up=", roundUp)
console.log("RoundDown=", roundDown)

// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
let newstr11=str2[str2.length-1]
console.log("Last Char=", newstr11)

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
let exist1 = str4.includes("code")
console.log("exist=", exist1)

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
let new1= str5.trim()
console.log(new1)

// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
let new12= str6.substring(0,5)
console.log(new12)

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.

//Ans
let str7 = "Cypress ,is, fun";
let strword= str7.split(" ")
console.log(strword)
 
// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
let newa= str8.replaceAll("banana", "pineapple")
console.log(newa)

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.

//Ans
let str9 = "JavaScript";
let chain = str9.toUpperCase().toLowerCase().toUpperCase()
console.log(chain)

// 10. Find the character at the 5th position in the string "Functional Testing".

//Ans
let str10 = "Functional Testing";
let newChar= str10.substring(4,5)
console.log(newChar)

// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------

let strNew= "this project uses API "
let find = strNew.includes("API")
console.log("Find=", find)

// 12. Extract the last 4 characters from the string "automation testing".

//Ans
let str12 = "automation testing";
let  lastStr= str12.substring(str12.length-4)
console.log(lastStr)

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let newstr111= str13.trim().toLowerCase()
console.log(newstr111)

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".

//Ans
let str14 = "test your code with a test case";
let newstr123= str14.replace("test", "exam")
console.log(newstr123)
