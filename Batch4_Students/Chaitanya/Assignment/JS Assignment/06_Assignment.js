//----------------------------------------------------------------------------------
//Assignment_06



// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
console.log(Math.floor(Math.random()*(100-50+1))+50);

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------
let q2 = 45.6789
console.log(q2.toFixed(2));

// 3. Create a program to roll two dice (1–6 each) and print their sum.
let die1 = Math.floor(Math.random()*(6-1+1)+1);
let die2 = Math.floor(Math.random()*(6-1+1)+1)
let die = (die1 + " " + die2)
console.log(die);

// -----------------------------------------------------

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
let q4 =  47;
console.log(Math.round(47/10)*10)
// -----------------------------------------------------

// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
let q5 = (Math.floor(Math.random()*(999999-100000+1))+100000)
console.log(q5)
// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
let q7 = "JavaScript"
console.log(q7.length);
console.log(q7[0])
console.log(q7[9])
// -----------------------------------------------------

// 8. Write a program to count how many characters (excluding spaces) are in a string.
let q8 = "  Chaitanya  ";
console.log(q8.trim().length)

// -----------------------------------------------------

// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName = 'Chaitanya';
let middleName = 'Bhausaheb';
let lastName = 'Kute'
let fullName = `${firstName} ${middleName} ${lastName}`
console.log(fullName);
// -----------------------------------------------------

// 10. Write a program that takes a long sentence and prints it in uppercase.
let q10 = "My name is Chaitanya Kute. I am From Sangamner and I have completed my graduation from\
Pune University. I Have hands on experience in both manual and automation testing.\
Thats a quick overview of me"
console.log(q10.toUpperCase())

// -----------------------------------------------------

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let q11 = "           extraSpaces                    "
console.log(q11.trim())

// -----------------------------------------------------

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let q12 = "Javascript is a programming language";
console.log(q12.includes("Javascript"));

// -----------------------------------------------------

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
let q13 = "This is a bad idea";
let q133 = q13.replace("bad", "good")
console.log(q133);

// -----------------------------------------------------

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let q14 = "an apple a day keeps dr. away\
            a is for apple and apple is a fruit \
            apple is apple and apple is good in taste"
let q144 = q14.replaceAll("apple","mango")
console.log(q144)
// -----------------------------------------------------

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let q15 = "red,green,blue,yellow"
console.log(q15.split("red"))


// -----------------------------------------------------

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let q16 = 'Chaitanya Bhausaheb Kute Patil';
console.log(q16.indexOf('a'))
console.log(q16.lastIndexOf('a'))
// -----------------------------------------------------

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
let q17 = "JavaScript"
console.log(q17.indexOf("S"))
console.log(q17.indexOf("t"))
console.log(q17.substring(4,10))
// -----------------------------------------------------

// 18. Extract the first 4 characters of the string "Programming" using substr().
let q18 = "Programming"
console.log(q18.substr(0,4))
// -----------------------------------------------------

// 19. Write a program that takes two strings and joins them using concat().
let q191 = "this is first string "
let q192 = "this is second string"
let q193 = "this is third string "
console.log(q192.concat(q193,q191))
console.log(q193.concat(q192,q191))
// -----------------------------------------------------

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
let q20 = Math.random();
console.log(q20)
let q21 = Math.ceil(q20)
console.log(q21)
let q22 = Math.floor(q20);
console.log(q22);

// -----------------------------------------------------


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2.indexOf('n'))
console.log(str2.substr(9,1))

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
console.log(str6.substring(0,6))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log(str7.split(" "))

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
let q111 = "many of the pharma companies are API units"
console.log(q111.includes("API"))
// -----------------------------------------------------


// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.length)
console.log(str12.substr(14,4))

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let str131 = str13.toLowerCase().trim()
console.log(str131)

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam"))
//-------------------------------------------------------------------------------------------------------------------

//8
//15