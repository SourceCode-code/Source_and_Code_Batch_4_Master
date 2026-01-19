// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.

//Ans:

// This is single line comment in Javascript

/* This is
multiline comment
in Javascript */


// Q2. Print "Welcome to JavaScript Assignment" using console.log.

//Ans: 
let note = "Welcome to Javascript Assignment";
console.log(note);


// Q3. Declare a variable using var, reassign it with a new value, and print both values.

//Ans:

var a = 10;
console.log(a);

 
var a = 20;
console.log(a);


// Q4. Declare a variable using let, update its value, and print it.

//Ans:
let A = 20;
Aa = 21;
console.log(Aa);


// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.

//Ans:

const pie = 3.14;
pi = 3.09;
console.log(pie);
// syntax identifier 'pi' has already been decelared.


// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)

//Ans:
let firstname = "Indrayani";
let middlename = "Prataprao";
let lastname = "Suryawanshi";
 
// using + operator 

console.log(firstname + " " + middlename + " " + lastname);

// using Es6 template literal  

let fullname = `${firstname} ${middlename} ${lastname}`;
console.log(fullname);


// Q7. Create variables using valid names: city1, _city, $city and print them.

//Ans:
 
let city1 = "Mumbai";
let _city = "Shirdi";
let $city = "Nashik";
 
console.log(city1);
console.log(_city);
console.log($city);


// Q8. Show with an example that variable names are case-sensitive in JavaScript.

//Ans: 

 let num1 = 123;
 let num2 = 456;
 console.log(num1);
 console.log(num2);

// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null

//Ans:

let f = 25;
let b = "hello";
let c = true;
let d = undefined;
let e = null;
console.log(typeof(f));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));


// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %

//Ans:

let g = 10;
let h = 5;
console.log(g+h); // addition 
console.log(g-h); // Sustraction
console.log(g*h); // multipication
console.log(g/h); // division
console.log(g%h); // modulus


// Q11. Round the number 10.99 down to nearest integer using Math.floor.

//Ans: 

let num3 = 10.99;
console.log(Math.floor(num3));


// Q12. Round the number 10.01 up to nearest integer using Math.ceil.

//Ans:

let num4 = 10.01;
console.log(Math.ceil(num4));


// Q13. Round 10.05 and 10.99 using Math.round.

//Ans:

let num5 = 10.05;
let num6 = 10.99;
console.log(Math.round(num5));
console.log(Math.round(num6));


// Q14. Generate a random number between 0 and 1 using Math.random.

//Ans:
let rnum = Math.random()
console.log(rnum);


// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).

//Ans:

let rint = Math.floor(Math.random()*6) + 1;
console.log(rint);

// Q16. Generate a random number between 10 and 20.

//Ans:
let max = 20;
let min = 10;
 // to gnerate random number formula
 //  (Math.random() * (max-min)) + min;
let r1num = (Math.random() * (20-10)) + 10;
console.log(r1num);


// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30

//Ans:

let gn = 28;
console.log((Math.round(gn/5))*5);


// Q18. Generate a random 4-digit OTP number between 1000 and 9999.

//Ans:

let max1 = 9999;
let min2 = 1000;
let otp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
console.log(otp);

// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).

//Ans:

let An1 = Math.floor(Math.random() * (9999-1000)) + 1000;
let An2 = Math.floor(Math.random() * (9999-1000)) + 1000;
let An3 = Math.floor(Math.random() * (9999-1000)) + 1000;
let An4 = Math.floor(Math.random() * (9999-1000)) + 1000;
console.log(An1, An2, An3, An4)



// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character

//Ans:

let str = "Siddhant Arjun Gadakh";
console.log(str.length);
console.log(str[0]);
console.log(str[str.length - 1]);


// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.

//Ans:

let esc1 = "Siddhant\nArjun\nGadakh";
let esc2 = 'Siddhant \tArjun \tGadakh';
let esc3 = "\"Siddhant\" Arjun Gadakh"; 
let esc4 = '\'Siddhant Arjun\' Gadakh';
console.log(esc1);
console.log(esc2);
console.log(esc3);
console.log(esc4);


// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.

//Ans:

let s1 = "my\nname\nis\n'Siddhant'";
let s2 = "my name is \t'Siddhant'";
let s3 = "my name is \"'Siddhant'\"";
let s4 = "my name is \''Siddhant'\'";
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// Q23. Convert "javascript" into UPPERCASE using string method.

//Ans:

let uc = "javascript";
console.log(uc.toUpperCase());

// Q24. Convert "HELLO WORLD" into lowercase using string method.

//Ans:

let lc = "HELLO WORLD";
console.log(lc.toLowerCase());

// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.

//Ans:

let mc = "hello world";
console.log(mc.toUpperCase().toLowerCase().length);


// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.

//Ans:

let extract = "Siddhant";
console.log(extract.length);
console.log(extract.substring(0,8));
console.log(extract.substr(0,8));


// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.

//Ans:

let Q27 = "Siddhant Arjun Gadakh"
console.log(Q27.indexOf("A"));
console.log(Q27.substring(9,14));



// Q28. Split the string "I love JavaScript" into an array by spaces.

//Ans:

let splitstr = "I love Javascript"
console.log(splitstr.split(" "));

// Q29. Split the string "banana" into parts wherever "a" occurs.

//Ans:

let splitstr2 = "banana";
console.log(splitstr2.split("a"));

// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";


//Ans:

let indrayaniPratapraoSuryawanshi = "Indrayani Prataprao Suryawanshi";
console.log(indrayaniPratapraoSuryawanshi);

// Q31. Generate a random integer between 50 and 100.

//Ans:

let max3 = 100;
let min3 = 50;
//formula = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
let rint2 = Math.floor(Math.random() * (100 - 50 +1)) + 50;
console.log(rint2);

// Q32. Generate a random integer between -20 and -10.

//Ans:
let rint3 = (Math.floor(Math.random() * (20 - 10 + 1))) + (-10);
console.log(rint3);

// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").

//Ans:

let coin = "heads tails";
let coin1 = coin.split(" ");
let coinToss = Math.floor(Math.random()*2);
console.log(coin1 [coinToss]);


// Q34. Generate a random integer between 100 and 999 (3-digit number).

//Ans:

let rint4 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
console.log(rint4);

// Q36. Generate a random number between 1 and 100 and check if it is even or odd.

//Ans: 

let rint5 = Math.floor(Math.random() * ( 100-1)+1)
console.log("Ans of 36",rint5);
// outputnumber%2==0?"Even:"Odd"
// Q37. Generate 5 random numbers between 1 and 10 

//Ans:

let rint6 = Math.floor(Math.random() * (10 -1 + 1)) + 1;
console.log(rint6);


// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).

//Ans:

let str1 = 'Abcdefghijklmnopqrstu'
let spChar = '!@#$%^&*'
let spnew = spChar[Math.round(Math.random() * spChar.length)]
let strnew = str1.substr(Math.random()* str1.length-6,4);
let num = Math.round(Math.random() * 999)
console.log(strnew + spnew + num);




