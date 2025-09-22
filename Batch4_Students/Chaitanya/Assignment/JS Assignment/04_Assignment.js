// ASSIGNMENT 04 JavaScript.

// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
// this is a single line comment

/* this
is a 
multi
line 
comment
*/

// Q2. Print "Welcome to JavaScript Assignment" using console.log.
let note = "Welcome to JavaScript Assignment";
console.log(note);

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var a = 12;
console.log(a);

var a = 13;
console.log(a);


// Q4. Declare a variable using let, update its value, and print it.
let A = 10;
let Aa = 11;
console.log(Aa);


// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pie = 3.14;
//const pie = 3.90; (converting it into comment for solving further)

console.log(pie);
//SyntaxError: Identifier 'pie' has already been declared


// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
let firstname = "Chaitanya";
let middlename = "Bhausaheb";
let lastname = "Kute";
console.log(firstname + " " + middlename + " " + lastname );
let fullname = `${firstname} ${middlename} ${lastname}`;
console.log(fullname);


// Q7. Create variables using valid names: city1, _city, $city and print them.
let city1 = "Bangalore";
let _city = "Bangalore";
let $city = "Bangalore";
console.log(city1);
console.log(_city);
console.log($city);


// Q8. Show with an example that variable names are case-sensitive in JavaScript.
let city = "Bangalore";
let City = "Bangalore";
let CITY = "Bangalore";
console.log(city);
console.log(City);
console.log(CITY);


// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null
let f = 25;
let b = "hello";
let c = true;
let d = undefined;
let e = null
console.log(typeof(f));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));


// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %
let num1 = (1+1);
console.log(num1);
let num2 = (6-3);
console.log(num2);
let num3 = (2*2);
console.log(num3);
let num4 = (10/2);
console.log(num4);
let num5 = (100%3);
console.log(num5);


// Q11. Round the number 10.99 down to nearest integer using Math.floor.
let number = 10.99;
console.log(Math.floor(number));


// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
let Num1 = 10.01;
console.log(Math.ceil(Num1));


// Q13. Round 10.05 and 10.99 using Math.round.
let Num2 = 10.05;
let Num3 = 10.99;
console.log(Math.round(Num2));
console.log(Math.round(Num3));

// Q14. Generate a random number between 0 and 1 using Math.random.
let rn = Math.random();
console.log(rn);


// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
let ri = Math.floor(Math.random()*6) + 1;
console.log(ri);

// Q16. Generate a random number between 10 and 20.
let RN = (Math.random() * (20 - 10)) + 10;
console.log(RN);


// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
let gn = 28;
console.log((Math.round(gn/5))*5);


// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
let otp = Math.floor(Math.random() * ( 9999 - 1000 )) + 1000;
console.log(otp);


// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).
let AN1 = Math.floor (Math.random() * (9999 - 1000)) + 1000;
let AN2 = Math.floor (Math.random() * (9999 - 1000)) + 1000;
let AN3 = Math.floor (Math.random() * (9999 - 1000))+ 1000;
let AN4 = Math.floor (Math.random() * (9999 - 1000)) + 1000;
console.log(AN1  ,  AN2  ,  AN3  ,  AN4);


// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character
let string = "Siddhant Arjun Gadakh";
console.log(string.length);
console.log(string[0]); // index starts from o
console.log(string[20]); // here last index = lemgth-1 as length = 21 so last index =20.


// Q21. Write a program to print "Siddhant Arjun Gadakh" using escape characters.
let ec1 = "Siddhant\nArjun\nGadakh"
let ec2 = "Siddhant Arjun \t Gadakh"  
let ec3 =  "\"Siddhant\" Arjun Gadakh"
let ec4 =  '\'Siddhant Arjun\' Gadakh'
console.log(ec1)
console.log(ec2)
console.log(ec3)
console.log(ec4)

// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
let str1 = "my\nname\nis\n'Siddhant'"
console.log(str1);
let str2 = "my name is \t 'Siddhant'"
console.log(str2);
let str3 = "my name is \"'Siddhant'\""
console.log(str3)
let str4 =  "my name is \''Siddhant'\'"
console.log(str4)

// Q23. Convert "javascript" into UPPERCASE using string method.
let uc = "javascript";
console.log(uc.toUpperCase())

// Q24. Convert "HELLO WORLD" into lowercase using string method.
let lc = "HELLLO WORLD";
console.log(lc.toLowerCase());


// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.

let mchaining = "hello world";
console.log(mchaining.toUpperCase().toLowerCase().length);


// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
let extract = "Siddhant";
console.log(extract.length);
console.log(extract.substring(0,8));
console.log(extract.substr(0,8));


// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
let Q27 = "Siddhant Arjun Gadakh"
console.log(Q27.indexOf("A"));
console.log(Q27.substring(9,14))

// here ending index will not be included hence ending index + 1.

// Q28. Split the string "I love JavaScript" into an array by spaces.
let Q28 = "I love JavaScript"
console.log(Q28.split(" "));

// Q29. Split the string "banana" into parts wherever "a" occurs.
let Q29 = "banana";
console.log(Q29.split("a"));


// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
let chaitanyaBhausahebKute = "Chaitanya Bhausaheb Kute"
console.log(chaitanyaBhausahebKute);


// Q31. Generate a random integer between 50 and 100.
let Q31 = Math.floor(Math.random() * (100 - 50 + 1))+50;
console.log(Q31);

// Q32. Generate a random integer between -20 and -10.
let Q32 =(Math.floor(Math.random() * ( 20 - 10 + 1 )) )+(-10);
console.log(Q32);

// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").

let coin = "heads tails";
let coin1 = coin.split(" ");
let coinToss = Math.floor(Math.random()*2);
console.log(coin1 [coinToss]);



// Q34. Generate a random integer between 100 and 999 (3-digit number).
let Q34 = Math.floor(Math.random() * ( 999 - 100 + 1)) + 100;
console.log(Q34);

// Q36. Generate a random number between 1 and 100 and check if it is even or odd.



// Q37. Generate 5 random numbers between 1 and 10 
let Q37 = Math.floor(Math.random() * ( 11 - 1 )) + 1;
console.log(Q37);


// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).
let Str1 = 'Abcdefghijklmnopqrstu'
let spChar = '!@#$%^&*'
let spNew = spChar[Math.round(Math.random() * spChar.length)]
let strNew = Str1.substr(Math.random()* str1.length-6,4);
let num = Math.round(Math.random() * 999)
console.log(strNew + spNew + num);



/*
Isuues in Question
36
*/