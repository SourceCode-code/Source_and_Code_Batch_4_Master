// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.

//Ans:
let greeting = "Hello World";
console.log(typeof greeting);

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.

// Ans:
let price = 199.99;
console.log(Math.ceil(price));


// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.

//Ans:
let fullname1 = "Indrayani Prataprao Suryawanshi";
console.log(fullname.length);


// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.

//Ans:
let firstname = "Indrayani"
let middlename="Prataprao"
let lastname = "Suryawanshi"
 
console.log(firstname+" "+middlename+" "+lastname);
let fullname2= `${firstname} ${middlename} ${lastname}`;
console.log(fullname);

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.

//Ans:
let language = 'Javascript';
console.log(language[4]);

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.

//Ans:
let num1 = Math.floor(Math.random()* 20+1)*2;
console.log(num1);

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.

//Ans:
let longstring = "hi my name is"
Indrayani
Prataprao
Suryawanshi
console.log(longstring);

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

//Ans:

// this is for new line (\n); 
let ec = "I\nam\nlearning\njavascript";

// this is for tab (\t);
let ec1 = "I am learning\tjavascript";

// this is for double quotes (\");
let ec2 = "I am learning \"javascript\"";

// this is for single quote (\');
let ec3 = "I am learning \'javascript'";

console.log(ec);
console.log(ec1);
console.log(ec2);
console.log(ec3);

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.

//Ans:

let amount = 45.85;
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.round(amount));


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.

//Ans:

let quote ="Learning JavaScript is awesome!";
console.log(quote.length);
console.log(quote.indexOf('J'));
 

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.

 //Ans:
let str = 'Hello, World!';
let str1 = 'Hello,\tWorld!';
console.log(str1);

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. log both results.

//Ans:
let str2 = 'abc';
let str3 = 'def';
console.log(str2+" "+str3);
let str4 = `${str2} ${str3}`;
console.log(str4);

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

//Ans:
let str5 = "qwertyuiopasdfghjklzxcvbnm";


//15 write a program to generate a random odd number form 15-150

 
