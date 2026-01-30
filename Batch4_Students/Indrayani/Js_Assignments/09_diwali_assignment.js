/* ------------------------------------------------------------------
🎆 DIWALI JAVASCRIPT LOGICAL ASSIGNMENT - 2025 🎇

🪔 Objective:
By solving these problems, you should gain strong logical foundations
and be able to confidently write clean, working JS programs.

💡 Instructions:
- Use console.log() for output.
- Comment your logic clearly.
- Don’t copy from AI — think like a programmer!
------------------------------------------------------------------*/

// =====================================================
// 1. INTRODUCTION TO JS (BASICS & VARIABLES)
// =====================================================

// Q1. Print your name, age, and one goal for Diwali learning using variables.
//Ans:
let myname = "Indrayani"
let myAge = 34
let goal = "I want to make command on my logical code practice"
console.log(myname)
console.log(myAge)
console.log(goal)

// Q2. Declare 3 variables in one line and print them.
//Ans:
let a = 10, b = 20, c = 30
console.log(a, b, c)

// Q3. Write a program that swaps two numbers without using a third variable.

//Ans:
let num1 = 40
let num2 = 60
console.log("swap number", num1, num2)
console.log("swap number", num2, num1)

// Q4. Display the type of each of these: 45, "45", true, undefined, null.
//Ans:
console.log(typeof (45))
console.log(typeof ("45"))
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
let message = "Happy Diwali"
for (i = 0; i <= 10; i++) {
    console.log(message.repeat(10))
}
// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x = 10
console.log(++x)
console.log(x++)
console.log(--x)
console.log(x--)
// Q7. Print the result of typeof NaN — explain what you see.

// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
//Ans:
// naturalrandomnumber = Math.floor(Math.random()*100)*1

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum = sum + i
}
console.log("sum of first 100 natural number", sum)

// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
let num4 = (22, 56, 999, 78654, 8765, 99999)
console.log(num4, Math.max())

// Q10. Find the factorial of a number using a for loop.
//Ans:

// Q11. Write a program to check if a number is prime.
// Q12. Write a program to find the number of digits in a given number.
// Q13. Generate a random number between 1 and 100.
let max = 100
let min = 1
let randomnumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
console.log(randomnumber)

// Q14. Check if a number is a perfect square.
// with the help of Math.sqrt()

function isperfectsqure(num) {
    return Math.sqrt(num) % 1 === 0;
}
console.log(isperfectsqure(9))

// Q15. Write a program that prints multiplication table of 9.
let num = 9
for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + "=" + (num * i))
}
// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let str = "My\nname\nis\nIndrayani"
console.log(str)

// Q17. Given a name string, print only the vowels from it.

let str1 = "my name is Indrayani,happy diwali to you all"
let vowels =  str1[str1.indexOf("a")]
let vowels1 = str1[str1.indexOf("e")]
let vowels2 = str1[str1.indexOf("i")]
let vowels3 = str1[str1.indexOf("o")]
let vowels4 = str1[str1.indexOf("u")]
console.log(vowels + vowels1 + vowels2 + vowels3 + vowels4)

// Q18. Check if two strings are equal (case insensitive).
let str2 = "Hello"
let str3 = "hello"
function arestringequal(str2, str3) {
    return str2.tolowercase === str3.tolowercase
}
console.log(arestringequal("Hello", "hello"))

// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
let str4 = "Happy Diwali to Everyone"
console.log(str4.replaceAll(" ", " ").length)

// Q20. Create a string that repeats “✨” 20 times using repeat().
let str5 = "*"
console.log(str5.repeat(20))

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
let string = "  Diwali Celebration  "
console.log(string.trim())

// Q22. Extract the last 4 characters of any given string.

let str6 = "automation testing";
console.log(str6.length)
console.log(str6.substr(14, 4))

// anather way of solving..
//let extract = str6.substr(str6.length-4)
//console.log(extract)

// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let str7 = "javascript is fun"
//console.log(str7.toUpperCase().tolowercase().toUpperCase())

// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let str8 = "Festival of lights brings light"
console.log(str8.length)
console.log(str8.replaceAll("light", "spark"))

// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
let str9 = "Happy Diwali"
console.log(str9.startsWith("Happy"))
console.log(str9.endsWith("Diwali"))

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let num_1 = 2025
let newstr = num_1.toString()
console.log(typeof newstr)

// Q27. Convert string “99.9” to number and round it.
let str13 = "99.9"
let str_3 = parseFloat(str13)
console.log(str_3)
console.log(Math.round(str_3))

// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log(5 + "5")
// output is 55
// for + operator = datatype of any one operand is string it will perform concatination.
console.log(5 - "5")
// output is 0
// for -%*/ operator = it knows the datatypes of  both are different but automatically converts string into number and\
//  performs operations'

// Q29. Convert true → 1 and false → 0 using Number().
console.log("7" - true)
// o/p = 6---> true = 1
console.log("7" - false)
// o/p = 7 ---> false = 0

// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?

console.log("ans of 30", (10 + 5))// 115
console.log("10" + "5")// concat 105


// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
console.log("ans of q31", ((10 + 3) ** 2) / 13)

// Q32. Create a program that checks if a number is divisible by both 3 and 5.

let number = 15
if (number % 3 === 0 && number % 5 === 0) {
    console.log("divisible by both 3 and 5")
}

// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.

let studentage = 22
let studentcity = "Pune"
if (studentage >= 18 && studentage <= 25 && studentcity === "Pune") {
    console.log("student age is between 18-25 and from Pune")
}

// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.

//marks=40>=?console.log("pass"):console.log("fail")

let passingmarks = 35
let marks = 40
if (marks >= passingmarks) {
    console.log("pass")
}
else {
    console.log("fail")
}

// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.
console.log(5 + 3 * 2 ** 2)
// o/p 17
// order of evaluation is 1st exponentiation (** then multiplication(*) then addition(+))

// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.

let date = new Date()
let todaydate = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let humandateformat = (`${todaydate}-${month}-${year}`)
console.log(humandateformat)

// Q37. Print current time in format “HH:MM:SS”.

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let currenttime = (`${hours}:${minutes}:${seconds}`)
console.log(currenttime)

// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.

let date_ = new Date('24 Oct 2025')
console.log(date_.toString())
let day = date_.toLocaleString("en-gb", { weekday: "long" })
console.log(day)

// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.

/* ------------------------------------------------------------------
🌟 BONUS CHALLENGE (Optional)
Create a program called “Diwali Countdown”.
It should print today’s date and how many days left until Diwali.
Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.
------------------------------------------------------------------ 
🎉 Remember: Programming is not about writing code —
it’s about breaking problems into logic.
------------------------------------------------------------------ */

