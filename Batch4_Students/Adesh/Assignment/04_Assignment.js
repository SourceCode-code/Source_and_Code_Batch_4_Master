//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
 // single-line comment
 /* multi-line
    comment */

// Q2. Print "Welcome to JavaScript Assignment" using console.log.
console.log("Welcome to JavaScript Assignment");

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var a = 5;
console.log("Initial:", a);
a = 10;
console.log("Reassigned:", a);
// Q4. Declare a variable using let, update its value, and print it.
let b = 20;
b = 25;
console.log(b);
// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pi = 3.14;
console.log(pi);
// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
let firstName = "Adesh", middleName = "Vyankat", lastName = "Devkar";
console.log(firstName + " " + middleName + " " + lastName);
console.log(`${firstName} ${middleName} ${lastName}`);
// Q7. Create variables using valid names: city1, _city, $city and print them.
let city1 = "Pune", _city = "Mumbai", $city = "Delhi";
console.log(city1, _city, $city);
// Q8. Show with an example that variable names are case-sensitive in JavaScript.
let num = 5;
let Num = 10;
console.log(num, Num);
// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null
console.log(typeof 25);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %
let x = 12, y = 5;
console.log(x + y, x - y, x * y, x / y, x % y);


// Q11. Round the number 10.99 down to nearest integer using Math.floor.
console.log(Math.floor(10.99));
// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
console.log(Math.ceil(10.01));
// Q13. Round 10.05 and 10.99 using Math.round.
console.log(Math.round(10.05), Math.round(10.99));
// Q14. Generate a random number between 0 and 1 using Math.random.
console.log(Math.random());

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
console.log(Math.floor(Math.random() * 6) + 1);

// Q16. Generate a random number between 10 and 20.
console.log(Math.floor(Math.random() * 11) + 10);

// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
let num2=28;
let round =Math.round(num2/5)
console.log(round)
// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
console.log(Math.floor(Math.random() * 9000) + 1000);
// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).
console.log(Math.floor(Math.random() * 900000000000) + 1000);
// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character
let full = "Siddhant Arjun Gadakh";
console.log(full.length);
console.log(full[0]);
console.log(full[full.length - 1]);

// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
console.log("Siddhant\nArjun\nGadakh");
// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
console.log("my name is 'Siddhant'");
// Q23. Convert "javascript" into UPPERCASE using string method.
console.log("javascript".toUpperCase());
// Q24. Convert "HELLO WORLD" into lowercase using string method.
console.log("HELLO WORLD".toLowerCase());
// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
console.log("hello world".toUpperCase().toLowerCase().length);
// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
console.log("Siddhant Arjun Gadakh".substr(0,8));
// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
console.log("Siddhant Arjun Gadakh".substring(9,14));
// Q28. Split the string "I love JavaScript" into an array by spaces.
console.log("I love JavaScript".split(" "));

// Q29. Split the string "banana" into parts wherever "a" occurs.
console.log("banana".split("a"));

// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
let siddhantArjunGadakh = "Adesh Devkar";
console.log(siddhantArjunGadakh);


// Q31. Generate a random integer between 50 and 100.
console.log(Math.floor(Math.random() * 51) + 55);
// Q32. Generate a random integer between -20 and -10.
console.log(Math.floor(Math.random() * 11) - 20);
// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").
let cheak="head Taills"
let cheak2= cheak.split(" ")
let randcheak =Math.floor(Math.random()*2)
console.log(cheak2[randcheak])
// Q34. Generate a random integer between 100 and 999 (3-digit number).
console.log(Math.floor(Math.random() * 900) + 100);
// Q36. Generate a random number between 1 and 100 and check if it is even or odd.
let num1=Math.floor(Math.random()*100)+1
console.log(num1)
console.log(num1%2===0);

// Q37. Generate 5 random numbers between 1 and 10 
console.log(Math.floor(Math.random()*11)+1)
// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).
let characters="abcdefghijklmnopqrstu"
let strNew=characters.substr(Math.random()*characters.length-6,5);
let num3 =Math.round(Math.random()*999);
console.log(strNew + num3);



