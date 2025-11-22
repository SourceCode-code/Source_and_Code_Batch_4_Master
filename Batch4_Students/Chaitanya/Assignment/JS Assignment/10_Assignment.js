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
let name = 'Chaitanya Bhausaheb Kute';
let age = 26;
let goal = 'completing this assignment today';
console.log(name);
console.log(age)
console.log(goal)

// Q2. Declare 3 variables in one line and print them.
let a = 'declare', b= 3, c = 'variables';
console.log(a,b,c)

// Q3. Write a program that swaps two numbers without using a third variable.




// Q4. Display the type of each of these: 45, "45", true, undefined, null.

let q = 45, w = "45" , e = null
let r;
console.log(typeof(q))
console.log(typeof(w))
console.log(typeof(e))
console.log(typeof(r))

// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
let message = 'Happy Diwali'
console.log(message.repeat(10))


// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x = 10;
console.log(x++)
console.log(x--)


// Q7. Print the result of typeof NaN — explain what you see.
console.log(typeof(NaN))
// the output shows number datatype

// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
let sumNatNum = 0;

for (let c = 1 ; c <= 100 ; c++){
sumNatNum = sumNatNum + c
}
console.log(sumNatNum)

// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).







// Q10. Find the factorial of a number using a for loop.





// Q11. Write a program to check if a number is prime.





// Q12. Write a program to find the number of digits in a given number.
let q12 = 1234567890;
console.log(q12.length)

// length is a proprty of string check another method to get output



// Q13. Generate a random number between 1 and 100.
console.log(Math.floor(Math.random()*(100 - 1 + 1 ) + 1 ))


// Q14. Check if a number is a perfect square.



// Q15. Write a program that prints multiplication table of 9.
for(let i = 1 ; i <= 10 ; i++){
    console.log('9 x ${i}= ${9*i}')
}


// output proper nahi yet




// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let q16= "write \na \nprogramme\n that \nprints\n new line"
console.log(q16)

// Q17. Given a name string, print only the vowels from it.


// Q18. Check if two strings are equal (case insensitive).
// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
// Q20. Create a string that repeats “✨” 20 times using repeat().

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
// Q22. Extract the last 4 characters of any given string.
// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
// Q25. Find if a string starts with “Happy” and ends with “Diwali”.

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
// Q27. Convert string “99.9” to number and round it.
// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
// Q29. Convert true → 1 and false → 0 using Number().
// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?

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
