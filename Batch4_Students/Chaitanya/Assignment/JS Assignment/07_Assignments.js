
//------------------------------------------------------------------------------------------------

//          1. Math.floor()

// 1.Generate a random decimal number between 0 and 10 and use Math.floor() to round it down.
let q1 = Math.random() * (10 + 1)
let q1a = Math.floor(q1);
console.log(q1a)

// 2. Take user input as a decimal and print its floor value.
let input = 10.99999999;
console.log(Math.floor(input));

// 3. Divide two numbers (e.g., 17 / 4) and print only the whole part using Math.floor().
let q3 = 17 / 4;
console.log(Math.floor(q3));

//------------------------------------------------------------------------------------------------

//          2. Math.ceil()

// 4. Round up 4.2 and 9.7 using Math.ceil().
let q4 = 4.2, q5 = 9.7;
console.log(Math.ceil(q4));
console.log(Math.ceil(q5));

// 5. Find how many boxes are needed to pack 53 apples if one box holds 10 apples.
let apples = 53;
let box = 10
let boxneeded = (Math.ceil(apples / box));
console.log(boxneeded);

// 6. Generate a decimal random number and round it up using Math.ceil().
let q6 = (Math.ceil(Math.random()));
console.log(q6);

//------------------------------------------------------------------------------------------------

//          3. Math.random()

// 7. Generate a random number 12 digit number
let q7 = (Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000);
console.log(q7);

// 8. Generate a random Adhaar Number
let q81 = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
let q82 = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
let q83 = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
let q84 = (`${q81} ${q82} ${q83}`);
console.log(q84);

// 9. Generate a random number between -10.50 to -1500.50
let q9 = (Math.floor(Math.random() * ((-1500.50) - (-10.50) + 1)) + (-10.50));
console.log(q9);

//------------------------------------------------------------------------------------------------

//          4. Number.toFixed()

// 10. Display 3.141592 up to 2 decimal places.
let q10 = 3.141592;
console.log(q10.toFixed(2));

// 11. Convert a random decimal to 3 fixed decimal places.
let q11 = 1.1234567889;
console.log(q11.toFixed(3))

// 12. Show total bill amount with 2 decimal precision.
let bill = 123.45678;
console.log(bill.toFixed(2));

//------------------------------------------------------------------------------------------------

//          5. Math.random() with range logic

// 13. Generate a random number between 50 and 100.
let q13 = (Math.floor(Math.random() * (100 - 50 + 1)) + 50);
console.log(q13);

// 14. Create a random OTP between 1000 and 9999.
let q14 = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
console.log(q14);

// 15. Simulate two dice roll (values 1–6).and print values together
let q15 = (Math.floor(Math.random() * 6) + 1);
let q15a = (Math.floor(Math.random() * 6) + 1);
let dieroll = (q15 + " " + q15a)
console.log(dieroll);

//------------------------------------------------------------------------------------------------

//          6. + Operator

// 16. Add two numbers variables using + operator
let q16 = 2;
let q161 = 4;
let add = (q16 + "" + q161);
console.log(add);

// 17. Concatenate two strings using +.
let q17 = "Chaitanya Bhausaheb Kute";
let q171 = "Patil";
console.log(q17 + " " + q171);

// 18. Demonstrate how + behaves with numbers and strings mixed (e.g., 5 + "5").
let a = 10 + 20;    // 30
console.log(a)
let b = "10" + "20";    //1020
console.log(b)
let c = 10 + "20";  //1020
console.log(c)
let d = "10" + 20;  //1020
console.log(d)

//------------------------------------------------------------------------------------------------

//          7. Template Literals `${}

// 19. Print your name and age using a template literal.
let q19 = "Chaitanya Bhausaheb Kute"
let q191 = 26;
console.log(`${q19} ${q191}`)

// 20. Display a message using variables inside backticks.
let name = "Chaitanya Bhausaheb Kute"
let age = 26
let city = "Sangamner"
let q20 = `Hello my name is ${name}. I am ${age} years old and I am from ${city}`
console.log(q20);

// 21. Join two numbers using template literals.
let q21 = 50;
let q212 = 100;
console.log(`${q21}${q212}`)

//------------------------------------------------------------------------------------------------

//          8. Long Literal String

// 22. Store a paragraph in one string using backticks.
let q22 = " paragraph will be to big\
            so i will demonstrate it\
            in few lines\
            just to show that concept is clear"

// 23. Create a multi-line quote using template literals.
let q23 = `“The greatest glory in living
lies not in never falling,
but in rising every time we fall."
- Nelson Mandela"`
console.log(q23)

// 24. Store an address (with line breaks) in a single string literal.
let address = `Chaitanya Bhausaheb Kute
AP- Ahire
Tal-Khandala
Dist-Satara
Maharashtra - 422605
India`;
console.log(address);

//------------------------------------------------------------------------------------------------

//          9. Escape Characters (\n, \t, ', ")

// 25. Print your name and city on separate lines.
let q25 = "Chaitanya Bhausaheb Kute \n and i am from Sangamner"
console.log(q25);

// 26. Print 'I' in I am learning JavaScript'.
let q26 = "'\I'\ am learning JS"
console.log(q26)

// 27. Use \t to align words in a column format.

console.log("Name\t\tAge\tCity");
console.log("Chaitanya\t26\tSatara");
console.log("Aniket\t\t30\tPune");
console.log("Prashant\t29\tJunnar");

//------------------------------------------------------------------------------------------------

//         10. toUpperCase()

// 28. Convert "javascript" to uppercase.
let q28 = "javaScript"
console.log(q28.toUpperCase());

// 29. Convert user input text to uppercase
let q29 = "user input text"
console.log(q29.toUpperCase())

// 30. Convert second word of a sentence to uppercase.
let q30 = "Learning JavaScript is Fun"
console.log(q30.indexOf("J"))
console.log(q30.indexOf("t"))
let UC = q30.substring(9, 19).toUpperCase();
console.log(UC)
let q301 = "Learning"
let q302 = "is Fun"
console.log(q301 + " " + UC + " " + q302);
//------------------------------------------------------------------------------------------------

//          11. toLowerCase()

// 31. Convert "HELLO WORLD" to lowercase.
let q31 = "HELLO WORLD"
console.log(q31.toLowerCase())

// 32. Convert a mixed-case string to lowercase.
let q32 = "let This be A Mixed case StRing"
console.log(q32.toLowerCase())

// 33. Check if two strings are equal by converting both to lowercase.

let str1 = "JavaScript";
let str2 = "javascript";

if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Both strings are equal");
} else {
  console.log("Strings are not equal");
}


//------------------------------------------------------------------------------------------------

//         12. Method Chaining (Concatenation of methods)

// 34. Convert "hello world" → uppercase → lowercase → print length.
let q34 = "hello world"
console.log(q34.toUpperCase().toLowerCase().length)

// 35. Trim and convert " JavaScript " to uppercase.
let q35 = "JavaScript"
console.log(q35.trim().toUpperCase())

// 36. Replace "bad" with "good" and then convert the result to uppercase.
let q36 = "Smoking is bad for Health"
console.log(q36.replace("bad", "good").toUpperCase())

//------------------------------------------------------------------------------------------------

//          13. substr()

// 37. Extract first 4 characters from "JavaScript".
let q37 = "JavaScript"
console.log(q37.substr(0, 4))

// 38. Extract last 3 characters from a given string.
let q38 = "JavaScript is a programming language"
console.log(q38.length)
console.log(q38.substr(33, 3))

// 39. Extract middle part from "Beautiful" starting at index 3, length 4.
let q39 = "Beautiful"
console.log(q39.substr(3, 4))
//------------------------------------------------------------------------------------------------

//          14. substring()

// 40. Extract "Script" from "JavaScript".
let q40 = "JavaScript"
console.log(q40.length)
console.log(q40.indexOf("S"))
console.log(q40.substring(4, 11))

// 41. Extract the first half of "Programming".
let q41 = "Programming"
console.log(q41.length)
console.log(q41.indexOf("a"))
console.log(q41.substring(0, 6))

// 42. Swap substrings of two words.






//------------------------------------------------------------------------------------------------

//          15. split()

// 43. Split "Cypress is fun" into words.
let q43 = "Cypress is fun"
console.log(q43.split(" "))

// 44. Split a sentence by commas.
let q44 = "violet,indigo,blue,green,yellow,orange,red"
console.log(q44.split(","))

// 45. Split a string into characters.
let q45 = "Split a string into characters"
console.log(q45.split(""))

//------------------------------------------------------------------------------------------------

//          16. trim()

// 46. Remove extra spaces from " Hello ".
let q46 = " Hello "
console.log(q46.trim())

// 47. Check string length before and after trim().
let q47 = " Hello "
console.log(q47.length)
console.log(q47.trim().length)

// 48. Combine trim() with toUpperCase().
let q48 = " Hello "
console.log(q48.trim().toUpperCase())
//------------------------------------------------------------------------------------------------

//          17. trimStart()

// 49. Remove spaces only from start of "   JS Rocks  ".
let q49 = "   JS Rocks  .  "
console.log(q49.trimStart())

// 50. Compare above string before and after trimming.
console.log(q49.length)
console.log(q49.trimStart().length)

// 51. Show difference between trimStart() and trim().
console.log(q49.trim()) // it removes all spaces from start and end but not in between
console.log(q49.trimStart())  //  it only removes spaces from the starting of the string or word.

//------------------------------------------------------------------------------------------------

//          18. trimEnd()

// 52. Remove spaces only from end of "Hello ".

// 53. Count characters before and after trimEnd().
let q53 = "my p key got stuck.but i managed                it.                "
console.log(q53.length)
console.log(q53.trimEnd().length)

// 54. Chain trimEnd() and toUpperCase().
let q54 = "my p key got stuck.but i managed                it.                "
console.log(q54.trimEnd().toUpperCase())
//------------------------------------------------------------------------------------------------

//          19. includes()

// 55. Check if "JavaScript" includes "Script".
let q55 = "JavaScript"
console.log(q55.includes("Script"))

// 56. Test whether "frontend developer" includes "back".
let q56 = "frontend developer"
console.log(q56.includes("back"))

// 57. Use includes() to verify a user’s email contains "@".
let q57 = "chaitanyakute.work@gmail.com"
console.log(q57.includes("@"))
//------------------------------------------------------------------------------------------------

//          20. replace()

// 58. Replace "Hello" with "Hi" in "Hello World".
let q58 = "Hello"
console.log(q58.replace("Hello", "Hi"))

// 59. Replace only the first "a" in "banana" with A.
let q59 = "banana"
console.log(q59.replace("a", "A"))

// 60. Replace "bad" with "good" in a sentence.
let q60 = "not every bad thing is a bad thing"
console.log(q60.replace("bad", "good"))
//------------------------------------------------------------------------------------------------

//          21. replaceAll()

// 61. Replace all "a" with "@" in "banana".
let q61 = "banana"
console.log(q61.replace("a", "@"))

// 62. Replace all spaces with - in "My name is John".
let q62 = "My name is John";
console.log(q62.replaceAll(" ", "-"));

// 63. Replace all "is" with "was" in a paragraph.
let q63 = "This is to show how is is used\
            bcoz is is used where is should be used\
            and is is vital as is is irreplaceable"
console.log(q63.replaceAll("is", "was"))

//------------------------------------------------------------------------------------------------

//          22. indexOf()

// 64. Find the index of "S" in "JavaScript".
let q64 = "JavaScript"
console.log(q64.indexOf("S"))

// 65. Find where "cat" appears in "concatenate".
let q65 = "concatenate";
console.log(q65.indexOf("cat"))

// 66. Check what index indexOf() returns for a missing word.
let q66 = "JavaScript is fun"
console.log(q66.indexOf("dangerous"))

//------------------------------------------------------------------------------------------------

//          23. lastIndexOf()

// 67. Find the last occurrence of "a" in "banana".
let q67 = "banana"
console.log(q67.lastIndexOf("a"))

// 68. Compare indexOf() and lastIndexOf() results.
let q68 = "banana"
console.log(q68.indexOf("a"))  //gets index of first occurence
console.log(q68.lastIndexOf("a"))  //gets index of last occurence

// 69. Find the last occurrence of "is" in "This is his wish".
let q69 = "This is his wish";
console.log(q69.lastIndexOf("is"));


//------------------------------------------------------------------------------------------------

//          24. concat()

// 70. Concatenate two strings using concat().
let q70 = "hello"
let q701 = "world"
console.log(q70.concat(q701))

// 71. Join "Hello" and "World" with a space using concat().
console.log(q70.concat(" ", q701))

// 72. Chain multiple concat() calls to form a sentence.
let q72 = "Chaitanya"
console.log(q72.concat("Bhausaheb", "Kute", "Age", "-", "26", "City", " ", "-", "Sangamner"))

//------------------------------------------------------------------------------------------------

//          25. startsWith()

// 73. Check if "JavaScript" starts with "Java".
let q73 = "JavaScript"
console.log(q73.startsWith("Java"));

// 74. Check if "Hello world" starts with "world".
let q74 = "hello world"
console.log(q74.startsWith("world"))

// 75. Validate if a mobile number starts with +91.
let no = +919970959408;      // we cant check if it starts with number so cinvert it into string and then check
let mobno = no.toString()
console.log(mobno)
console.log(mobno.startsWith(91));
//------------------------------------------------------------------------------------------------

//          26. endsWith()

// 76. Check if "photo.png" ends with ".png".
let q76 = "photo.png";
console.log(q76.endsWith(".png"));

// 77. Check if "index.html" ends with ".js".
let q77 = "index.html";
console.log(q77.endsWith(".js"));

// 78. Validate if email ends with "@gmail.com".
let email = "user@gmail.com";
console.log(email.endsWith("@gmail.com"))

//------------------------------------------------------------------------------------------------

//          27. repeat()

// 79. Print "*" 10 times.
let q79 = "*";
console.log(q79.repeat(10));

// 80. Repeat "Ha" 5 times to form a laugh.
let q80 = "Ha";
console.log(q80.repeat(5));

// 81. Repeat a user input word 3 times.

let times3 = "repeat"
console.log(times3.repeat(3))

//------------------------------------------------------------------------------------------------

//          28. match()

// 82. Find all "a" letters in "banana".
let str8 = "banana"
let str9 = (str8.match("a"))
console.log(str9)



