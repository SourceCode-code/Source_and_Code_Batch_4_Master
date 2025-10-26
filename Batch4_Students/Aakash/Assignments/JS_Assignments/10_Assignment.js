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
console.log("Akash Manik Jadhav")
console.log("26")
console.log("my goal is to revise all the topics that we have covered")

// Q2. Declare 3 variables in one line and print them.
let v1 =1, v2 = 3, v3 = 4
console.log(v1,v2,v3)
// Q3. Write a program that swaps two numbers without using a third variable.
let num1 = 10
let num2 = 20
console.log("swapped values","num2", num1)
console.log("swapped values","num1",num2)


// Q4. Display the type of each of these: 45, "45", true, undefined, null.
let str1 = 45
console.log(typeof(str1))
let str2 = "45"
console.log(typeof(str2))
let str3 = true
console.log(typeof(str3))
let str4 
console.log(typeof(str4))
let str5 = null
console.log(typeof(str5))


let status =1
let counter =10

let dsrdend = (status ==="SENT") ? ++counter : counter

console.log("ss",dsrdend)
// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
//let count = 3
//et count2 = 10
let message1 = "happy diwali"
let message2 = "Happy Diwali";

for (let i = 0; i < 10; i++) {
  console.log(message1);
}


// Q6. Create a variable x = 10; increment and decrement it, printing value each time.

let x = 10
console.log(++x)
console.log(++x)
console.log(x++)
console.log(x++)
console.log(--x)
console.log(--x)
console.log(x--)
console.log(x--)
// Q7. Print the result of typeof NaN — explain what you see.
let xyz = 0/0
console.log(xyz)
//this happens when given out data is not a number or can't perform any mathematical operation

// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
//let randomNaturalnum = Math.ceil(Math.random()*100)*1
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i; // same as sum = sum + i
}

console.log("The sum of the first 100 natural numbers is:", sum);
// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).

// Q10. Find the factorial of a number using a for loop.
//need more explaination on this
// Q11. Write a program to check if a number is prime.
// Q12. Write a program to find the number of digits in a given number.
let num = 12345

// Q13. Generate a random number between 1 and 100.
console.log("ans of 13",Math.floor(Math.random()*99+1))
// Q14. Check if a number is a perfect square.
// Q15. Write a program that prints multiplication table of 9.

// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let str6 = "w\na\ns\nd\n"
console.log(str6)
// Q17. Given a name string, print only the vowels from it.
let strrrr3 = "Given a name string ou"
let vovels = strrrr3[strrrr3.indexOf("a")]
let vovels2 = strrrr3[strrrr3.indexOf("e")]
let vovels3 = strrrr3[strrrr3.indexOf("i")]
let vovels4 = strrrr3[strrrr3.indexOf("o")]
let vovels5 = strrrr3[strrrr3.indexOf("u")]

console.log(vovels+vovels2+vovels3+vovels4+vovels5)

// Q18. Check if two strings are equal (case insensitive).

// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
let strrrr1 = "Happy Diwali to Everyone"
console.log(strrrr1.replaceAll(" ","").length)
// Q20. Create a string that repeats “✨” 20 times using repeat().
let strrrr = "A"
console.log(strrrr.repeat(10))
// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
let strr ="  Diwali Celebration  "
console.log(strr.trim())
// Q22. Extract the last 4 characters of any given string.
let strr1 ="  Diwali Celebration"
console.log(strr1.substring(16,20))
// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let strr2 = "Javascript is fun"
console.log(strr2.toUpperCase().toLowerCase())
// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let strrr = "Festival of lights brings light"
console.log(strrr.replaceAll("light","spark"))
// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
let strr3 = "Happy Diwali"
console.log(strr3.startsWith("Happy"))
console.log(strr3.endsWith("Diwali"))


// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let nu1 = 2025
console.log(typeof(String(nu1)))
// Q27. Convert string “99.9” to number and round it.
let nu2 = 99.9
console.log(typeof(String(Math.round(nu2))))

// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log(5 +"5")
//+ operator concats number and string
console.log(5 -"5")
//concation only happens for + operator other operators performs arithmatic operations

// Q29. Convert true → 1 and false → 0 using Number().
console.log("ans of 29",Number(true))  // 1
console.log(Number(false)) //0
// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?
console.log("ans 30",String(10 + 5));     //output will be 15    
console.log(String(10) + String(5))       // output will be 105
// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
console.log("ans of 31", (10 + 3) ** 2)/13
// Q32. Create a program that checks if a number is divisible by both 3 and 5.
let numRandom = 60
switch(numRandom){
    case numRandom%3===0 : console.log("given number is divisible by 3")
    case numRandom%5===0 : console.log("given number is divisible by 5")
    break
    default: console.log("enter correct data")

}
// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
let age = 19

if (age<25 && age>18){
    console.log("ans of 33", "age is between 18 to 25")
}
else {
    console.log("age is not between 18 to 25")
}
// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
let passingmarks = 35
let marks = 40
if (marks>=passingmarks){
    console.log("pass")
}
else{console.log("fail")}
// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.
console.log(5 + 3 * 2 ** 2)

// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.
let _Date = new Date()
let todaysdate = _Date.getDate()
let aajkamonth = _Date.getMonth()+1
let yeSaal = _Date.getFullYear()
console.log(`${todaysdate}-${aajkamonth}-${yeSaal}`)
// Q37. Print current time in format “HH:MM:SS”.
let hour11 = _Date.getHours()
let minS = _Date.getMinutes()
let secS = _Date.getSeconds()
console.log(`${hour11}-${minS}-${secS}`)
// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
let date22 = new Date
let date33 = date22.getDate()
date22.setDate(date33-2)

console.log(date22.getDate())
let month11 = date22.getMonth()+1
let month11short = date22.toLocaleString("en-gb", {month: "short"})
let year22 = date22.getFullYear()
let day11 = date22.toLocaleString("en-gn" , {weekday : "long"})
console.log(day11)
console.log("ans of 38",`${date22} ${month11short} ${year22} ${day11}`)
// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
/*let manipDate= new Date() //13+5 -->18

let futuredate = manipDate.getDate() // new Date().getDate() --> current 13
console.log(futuredate+20)

manipDate.setDate(futuredate+20)

console.log(manipDate.getDate()) //18

let date11 = new Date()
let manidate11  = date11.getDate()
console.log(date11+379)
date11.setDate(manidate11+379)
console.log(manidate11.getDate())*/


// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.
let crdate = new Date()
let crhours = crdate.getHours()
if (crhours<12){
    console.log("good morning")
}
else if (crhours>12 || crhours<17){
    console.log("good afternoon")
}
else{
    console.log("good evening")
}


/* ------------------------------------------------------------------
🌟 BONUS CHALLENGE (Optional)
Create a program called “Diwali Countdown”.
It should print today’s date and how many days left until Diwali.
Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.
------------------------------------------------------------------ 


🎉 Remember: Programming is not about writing code —
it’s about breaking problems into logic.
------------------------------------------------------------------ */
