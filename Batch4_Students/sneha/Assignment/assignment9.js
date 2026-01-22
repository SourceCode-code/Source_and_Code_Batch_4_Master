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
let name="sneha"
let age=27
let goal="make a automation tester"
// Q2. Declare 3 variables in one line and print them.
let a=12,b=23,c="name"
console.log(a,b,c)
// Q3. Write a program that swaps two numbers without using a third variable.
let s=12
let q=13
s=13
q=12
console.log(s,q)
// Q4. Display the type of each of these: 45, "45", true, undefined, null.
let num=45
let string="45"
let bool=true
// let undefined=
var n=null
console.log(typeof(num),typeof(string),typeof(bool),typeof(n))
// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
for(let i=0;i<10;i++){
    console.log("happy diwali")
}
// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x=10

// Q7. Print the result of typeof NaN — explain what you see.
console.log(typeof NAN)
//IT GIVES THE result is undefined

// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
sum=0
for(let i=1;i<=100;i++){
sum=sum+i

}
console.log(sum)

// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).///////////////////////
let z=23
let y=45
let u=89
console.log(Math.max())
// Q10. Find the factorial of a number using a for loop./////////////////
let v=4

console.log(v*v*v*v)
// Q11. Write a program to check if a number is prime.
j=3
for(let i=j;i<=j;i++){
  if(j%2===0){
    console.log("given no is even")
}

else{
    console.log("given no is odd")

}
}

// Q12. Write a program to find the number of digits in a given number.

// Q13. Generate a random number between 1 and 100.
console.log(Math.floor(Math.random()*100))
// Q14. Check if a number is a perfect square.


// Q15. Write a program that prints multiplication table of 9.

for(let i=1;i<=10;i++){

    console.log(9*i)
}

// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let name1="sneha"
// for(let i=0;i<=name1.length;i++){
//     console.log(name1[i])
// }

// Q17. Given a name string, print only the vowels from it.
let vowelslist="aeiou"
let vowels=""
for(let i=0;i<name1.length;i++){
 
if(vowelslist.includes(name1[i].toLowerCase())){

vowels=vowels+name1[i]
}
}

console.log(vowels)
//==========using array method------
let vowels1=name1.split("").filter(ch=>"aeiou".includes(ch)).join("")
console.log(vowels1)


// Q18. Check if two strings are equal (case insensitive).
let a3="sneha"
let a4="SNEHA"
if(a3===a4){
    console.log("equal sting")

}
else{
    console.log("not equal")

}


// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
let str="happy diwali to everyone"
let spli=str.split(" ").length
console.log(spli)
// Q20. Create a string that repeats “✨” 20 times using repeat().
let star=""
for(let i=1;i<=20;i++){
    star=star+"*"
    
}
console.log(star)

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
let gstring="  Diwali Celebration  "
let new3=(gstring.trim())
console.log(new3)
// Q22. Extract the last 4 characters of any given string.
let nstring="sneha anap"
let y2=(nstring.slice(-4))
console.log(y2)
// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let convert= "Javascript is fun"
console.log(convert.toUpperCase().toLowerCase())
// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let replace="Festival of lights brings light"
console.log(replace.replaceAll("lights","spark"))
// Q25. Find if a string starts with “Happy” and ends with “Diwali”.

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let number=2025
let num2=(number.toString())
console.log(typeof(num2))

// Q27. Convert string “99.9” to number and round it.
let st="99.9"
let stri=(Math.round(st))
console.log(stri)
// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log(5+"5")//55
console.log(5-"5")//0
// Q29. Convert true → 1 and false → 0 using Number().

// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?
console.log(String(10) + String(5))//105
console.log(String(10+5))//15//because s is capital String convert to number and output is given 15
// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
// Q32. Create a program that checks if a number is divisible by both 3 and 5.
// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.

// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.
let date=new Date()
console.log(date)
// Q37. Print current time in format “HH:MM:SS”.
// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
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


