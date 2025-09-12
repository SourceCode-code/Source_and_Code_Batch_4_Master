// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World";
console.log(typeof greeting);

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price = 199.99;
console.log(Math.ceil(price));

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let myName = "Chaitanya Bhausaheb Kute";
console.log(myName.length)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName = "Chaitanya";
let middleName = "Bhausaheb";
let lastName = "Kute";

console.log(firstName + " " + middleName + " " + lastName)
let fullname = `${firstName} ${middleName} ${lastName}`;
console.log(fullname);

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'JavaScript';
console.log(language[4]);

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let num1 = Math.floor(Math.random() * 20 + 1) * 2;
console.log(num1);

// Advanced Session Assignments:

// 7. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.round(amount));

// 8. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome";
console.log(quote.length);
console.log(quote.indexOf("J"));

// 9. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1 + " " + str2);
let str = `${str1} ${str2}`
console.log(str);


// 10. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let num = "qwertyuiopasdfghjklzxcvbnm";
let check = Math.floor(Math.random() * num.length)
console.log(num[check])

// 11 write a program to generate a random odd number form 15-150


// 12. Create a long literal string that spans multiple lines and log it.
let longstring = "this is just to show how literal string spans multiple lines\
work in JavaScript.\
 Its basically used to expnad the lines downwards just in case the varaible declaration\
 is to long "
console.log(longstring)

// 13. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

//this is for new line  (\n)
let ec = "I\nam\nlearning\nJS";

//this is for tabkey (\t)
let ec1 = "I am learning \t JS";

//this is for (\') -- adding single quotes in a string declared  by single quotes 
let ec2 = "I am learning \'JS\'";

//3) (\") -- adding single quotes in a double declared  by double quotes
let ec3 = "I am learning \"JS\"";

console.log(ec)
console.log(ec1)
console.log(ec2)
console.log(ec3)


// 14. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote1 = "Learning JS is awesome"
console.log(quote1.length);
console.log(quote1.indexOf("J"));


// 15. Create a string variable `strhw = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let strhw = 'Hello \t World!'
console.log(strhw);


// 16. Given two variables, `str_a = 'abc'` and `str_b = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str_a = 'abc';
let str_b = 'def';
console.log(str_a + " " + str_b);
let stra = `${str1} ${str2}`
console.log(str)



