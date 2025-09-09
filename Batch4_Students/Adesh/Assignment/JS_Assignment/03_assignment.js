// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World";
console.log(typeof greeting); 
// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.

let value= 199.99;
console.log(Math.ceil(value));
// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.

let name = "Adesh Vyankat Devkar";  
console.log(name.length);
// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.

let firstName = "Adesh";
let middleName = "Vyankat";
let lastName = "Devkar";

console.log(firstName + " " + middleName + " " + lastName);
console.log(`${firstName} ${middleName} ${lastName}`);

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = "JavaScript";
console.log(language[4]);

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let Randomeven = Math.floor(Math.random() * 11) * 2;
console.log(Randomeven);

// Advanced Session Assignments:

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;

console.log(Math.floor(amount));

console.log(Math.ceil(amount));

console.log(Math.round(amount));

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.

let quote = "Learning JavaScript is awesome!";

console.log(quote.length);

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';

console.log(str1 + str2);

console.log(`${str1}${str2}`);


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.


//15 write a program to generate a random odd number form 15-150