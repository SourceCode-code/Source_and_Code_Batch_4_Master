
// 1. Write a single-line comment:
// This is my first JS program.

// 2.Write a multi-line comment with your name, age and city.
/*
Chaitanya Bhausaheb Kute
26
Sangamner
*/

// 3.Add a comment above each line of a small program that prints 1, 2, 3.

// Declare a variable num1 with value 1
let num1 = 1;
console.log(num1);

// Declare a variable num2 with value 2
let num2 = 2;
console.log(num2);

// Declare a variable num3 with value 3
let num3 = 3;
console.log(num3);

// 4.Declare a variable using var, print it, reassign it and print the new value. 
var A = 10;
console.log(A);
var A = 20;
console.log(A);


// 5.Declare a variable using let, update its value, and print it.
let student = 24;
let Student = 25;
console.log(Student);

// 6.Declare const pi = 3.14 and try to reassign it — observe the error.
const pi = 3.14;
//const pi = 2.14;
console.group(pi);
// SyntaxError: Identifier 'pi' has already been declared

// 7.Create firstName, middleName, lastName and print the full name using + and using a template literal.
let firstName = "Chaitanya";
let middleName = "Bhausaheb";
let lastName = "Kute";
console.log(firstName + " " + middleName + " " + lastName);
let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);

// 8.Create city1, _city, $city and print them; also show that name and Name are different (case-sensitive). 
let city1 = "Sangamner"
let city = "Sangamner"
let $city = "Sanagamner"
console.log(city1, city, $city);

let name = "cypress";
console.log(name);
let Name = "cypress";
console.log(Name);   // here we have defined both the variables same but case of the variables declared differs.

// 9.Use typeof to check types of: 25, "hello", true, undefined, null. 
let q91 = 25;
let q92 = "hello";
let q93 = true;
let q94 = undefined;
let q95 = null;
console.log(typeof (q91));
console.log(typeof (q92));
console.log(typeof (q93));
console.log(typeof (q94));
console.log(typeof (q95));

// 10.Store null in a variable and print typeof — explain the result.
let q10 = null;
console.log(typeof (q10));
// here it shows object when it should show null.

//-------------------------------------------------------------------
//11.Convert "123" (string) to a number and print its typeof.
let q11 = "123"
console.log(Number(q11))

//12.Declare one variable each for: number, string, boolean, undefined, null — print values and their typeof.
let q12 = 123;
let q121 = "JavaScript Assignment_05";
let q122 = false;
let q123;
let q124 = null;
console.log(typeof (q12));
console.log(typeof (q121));
console.log(typeof (q122));
console.log(typeof (q123));
console.log(typeof (q124));

//13.Declare a number and do all arithmetic ops: +, -, *, /, %. 
let anumber = 2
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(15 % 4);  /*here, Divide 15 by 4:  15/4 = 3.75
                      The quotient (whole number part) is 3.
                      The decimal/fractional part corresponds to the remainder. which is .75 
                     Multiply the quotient by the divisor  i.e 3*4 = 12
                     subsatract this from the divident to get reaminder i.e 15-12 = 3
                     so modulus = 3 which is result if 15 % 4
                     */

//14.Use Math.floor(10.99) and print the result.
console.log(Math.floor(10.99));

//15.Use Math.ceil(10.01) and print the result. 
console.log(Math.ceil(10.01));

//16.Use Math.round(10.05) and Math.round(10.99) and print both. 
console.log(Math.round(10.05));
console.log(Math.round(10.99));

//17.Write a small program that rounds any given number to the nearest multiple of 5 (e.g., 28 → 30, 32 → 30)
let num = 28;
console.log((Math.round(28 / 5)) * 5)

//18.For "Chaitanya Bahusaheb Kute"  print: length, first character, last character. 
let q18 = "Chaitanya Bahusaheb Kute"
console.log(q18.length);
console.log(q18[0]);
console.log(q18[23]);

let q181 = "Chaitanya\nBhausaheb\nKute"
console.log(q181);
let q182 = "Chaitanya \t Bhausaheb Kute"
console.log(q182);
let q183 = "\"Chaitanya\" Bhausaheb Kute"
console.log(q183);
let q184 = "Chaitanya \'Bhausaheb\' Kute"
console.log(q184);

console.log("Chaitanya\nBhausaheb\nKute");
console.log("Chaitanya Bhausaheb \t Kute");
console.log("\"Chaitanya\" Bhausaheb Kute");
console.log("\'Chaitanya\' Bhausaheb Kute");

//19. Create the string my name is 'Chaitanya'using proper escaping and print it.
console.log("\'Chaitanya\' Bhausaheb Kute");

//20. Convert "javascript" → uppercase
let q20 = "javaScript"
console.log(q20.toUpperCase());

//21. Split "I love JavaScript" into an array by spaces.
let q21 = "I love JavaScript";
console.log(q21.split(" "));

//22. Extract "Chaitanya"from "Chaitanya Bhausaheb Kute" using substr()
let q22 = "Chaitanya Bhausaheb Kute";
console.log(q22.length);
console.log(q22.substr(0, 9));

//23.Extract "Bhausaheb" from "Chaitanya Bhausaheb Kute" using substring()
let q23 = "Chaitanya Bhausaheb Kute"
console.log(q23.indexOf("B"));
console.log(q23.substring(10, 19));

//q24. Split "banana" wherever "a" occurs (so you get ["b", "n", "n", ""])
let q24 = "banana"
console.log(q24.split("a"));

//q25. Use method chaining: convert "hello world" to uppercase, then back to lowercase, and print the length.

let q25 = "hello world"
console.log(q25.toUpperCase().toLowerCase().length);

// 

//26. Create a camelCase variable for your full name
let chaitanyaBhausahebKute = "my name";
console.log(chaitanyaBhausahebKute);

//27. Generate a random integer between 200 and 500.
let q27 = (Math.floor(Math.random() * (500 - 200 + 1)) + 200);
console.log(q27);
// here Math.floor(Math.random() * (max - min + 1)) + min

//28. Generate a random integer between -50 and -30.
let q28 = (Math.floor(Math.random() * ((-50) - (-30) + 1)) + (-30));
console.log(q28);


//29. Simulate rolling two dice and print their individual values and total.
let die1 = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
let die2 = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
console.log(die1);
console.log(die2);
console.log(die1 + " " + die2);


//30. Generate a random 6-digit OTP (100000–999999).
let otp = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
console.log(otp);

// generate a random 5 digit otp from 10000-99999;
let otp2 = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
console.log(otp2);

// generate a random adhar number 
let n1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let n2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let n3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let n4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
console.log(n1, n2, n3, n4);

// generate a random mobile number 
let mobno = Math.ceil(Math.random() * (9999999999 - 0 + 1));
console.log(mobno);

//31.Create a random 10-character password using uppercase letters, lowercase letters, numbers, and special symbols.
let upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwc = "abcdefghijklmnopqrstuvwxyz";
let numbs = (Math.floor(Math.random() * (9999 - 1000 + 1) + 1000))
let sym = "@#$%&*"

let a1 = (Math.floor(Math.random() * (upc.length)))
let a2 = (Math.floor(Math.random() * (upc.length)))
let a3 = (Math.floor(Math.random() * (upc.length)))
let a4 = (Math.floor(Math.random() * (upc.length)))
let sym1 = (Math.floor(Math.random() * (sym.length)))
console.log(`${upc[a1]}${upc[a2]}${upc[a3]}${upc[a4]}${sym[sym1]}${numbs}`)













