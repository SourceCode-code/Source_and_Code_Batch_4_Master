// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
//Hey my name is akash jadhav
/*i am from samgamner maharasthra
i have completed my graduation from
pune university*/

// Q2. Print "Welcome to JavaScript Assignment" using console.log.

console.log("Welcome to JavaScript Assignment")

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var xyz = 123
console.log(xyz)
var xyz = 456
console.log(xyz)
// Q4. Declare a variable using let, update its value, and print it.
let abc = 666
console.log(abc)
abc = 777
console.log(abc)
// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pi = 3.14
console.log(pi)
//const pi = 2.15 (it has been already declared with const)

// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
let firstName = "akash"
let middleName = "manik"
let lastName = "jadhav"
console.log(firstName + " " + middleName + " " + lastName)
console.log(`${firstName} ${middleName} ${lastName}`)

// Q7. Create variables using valid names: city1, _city, $city and print them.
let city1 = "sangamner"
let _city = "sangamner"
let $city = "sangamner"
console.log(city1, _city, $city)

// Q8. Show with an example that variable names are case-sensitive in JavaScript.
let villageName = "wadgaonpan"
//console.log(villagename) - It will throw a syntax error

// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null
let str1 = 25
let str2 = "hello"
let str3 = true
let str4 
let str5 = null
console.log(typeof (str1))
console.log(typeof (str2))
console.log(typeof (str3))
console.log(typeof (str4))
console.log(typeof (str5))


// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %

let str6 = "20"
let str7 = "25"
console.log(str6 + str7)
console.log(str6 - str7)
console.log(str6 * str7)
console.log(str6 / str7)
console.log(str6 % str7)

// Q11. Round the number 10.99 down to nearest integer using Math.floor.
let num1 = 10.99
console.log(Math.floor(num1))

// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
let num2 = 10.01
console.log(Math.ceil(num2))
// Q13. Round 10.05 and 10.99 using Math.round.
let num3 = 10.05
let num4 = 10.99
console.log(Math.round(num3))
console.log(Math.round(num4))

// Q14. Generate a random number between 0 and 1 using Math.random.
console.log(Math.random())

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
let randomNum = Math.floor(Math.random()*6)+1
console.log(randomNum)
// Q16. Generate a random number between 10 and 20.
let minNum = 10
let maxNum = 20
let randomNum2 = Math.floor(Math.random()*(maxNum-minNum))+minNum
console.log(randomNum2)
// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
let num5 = 28
let num6 = 32
console.log(Math.round(num5/5)*5)
console.log(Math.round(num6/5)*5)
// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
let minNum1 = 1000
let maxNum1 = 9999
let OTP = Math.floor(Math.random() * (maxNum1-minNum1) + minNum1)
console.log(OTP)
// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).
let minNum2 = 1000
let maxNum2 = 9999
let aadharNum1 = Math.floor(Math.random() * (maxNum2-minNum2) + minNum2)
let aadharNum2 = Math.floor(Math.random() * (maxNum2-minNum2) + minNum2)
let aadharNum3 = Math.floor(Math.random() * (maxNum2-minNum2) + minNum2)
console.log(aadharNum1 + " " + aadharNum2+ " " + aadharNum3)

// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character
let str8 = "Siddhant Arjun Gadakh"
console.log(str8.length)
console.log(str8[0])
console.log(str8[str8.length-1])

// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
let str9 = "Sidhhant\nArjun\nGadakh"
console.log(str9)

// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
let str10 = "my name is \'Sidhhant\'"
console.log(str10)
// Q23. Convert "javascript" into UPPERCASE using string method.
let str11 = "javascript"
console.log(str11.toUpperCase())
// Q24. Convert "HELLO WORLD" into lowercase using string method.
let str12 = "HELLO WORLD"
console.log(str12.toLowerCase())
// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
let str13 = "hello world"
let methodconct = str13.toUpperCase().toLowerCase().length
console.log(methodconct)
// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
let str14 = "Sidhhant Arjun Gadakh"
console.log(str14.substr(0,8))
// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
let str15 = "Sudhhant Arjun Gadakh"
console.log(str15.substring(9,14))
// Q28. Split the string "I love JavaScript" into an array by spaces.
let str16 = "I love JavaScript"
console.log(str16.split(" "))

// Q29. Split the string "banana" into parts wherever "a" occurs.
let str17 = "banana"
console.log(str17.split("a"))
// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
let akashManikJadhav = "akashManikJadhav"
console.log(akashManikJadhav)

// Q31. Generate a random integer between 50 and 100.
let maxNum3 = 100
let minNum3 = 50
let randomNum3 = Math.floor(Math.random()*(maxNum3-minNum3)+minNum3)
console.log(randomNum3)
// Q32. Generate a random integer between -20 and -10.
let maxNum4 = -10
let minNum4 = -20
let randomNum4 = Math.floor(Math.random()*(maxNum4- minNum4)+minNum4)
console.log(randomNum4)
// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").
let coin0 = "Heads,Tails"
let coin11 = coin0.substring(0,5)
let coin12 = coin0.substring(6,11)
let tossedcoin1 = Math.round(Math.random()*coin11)
console.log(coin0[tossedcoin1])
let tossResult = Math.random();
if ( toss< 0.5) {
    console.log("Heads");
}else
{
    console.log("Tails")
}


// Q34. Generate a random integer between 100 and 999 (3-digit number).
let maxnum5 = 999
let minnum5 = 100
let randomNum5 = Math.floor(Math.random()*(maxnum5-minnum5)+minnum5)
console.log(randomNum5)


// Q36. Generate a random number between 1 and 100 and check if it is even or odd.
let randomNum50 = Math.floor(Math.random()*99 + 1)
let result11=  ((randomNum50)/2 * 2)
console.log(result11,)



// Q37. Generate 5 random numbers between 1 and 10 
let num111= (Math.round(Math.random()*(9)+1))
let num200= (Math.round(Math.random()*(9)+1))
let num30= (Math.round(Math.random()*(9)+1))
let num40= (Math.round(Math.random()*(9)+1))
let num50= (Math.round(Math.random()*(9)+1))
console.log(num111 ,num200, num30, num40,num50)
// Q38. Create a random password of 8 charalet num1= (Math.round(Math.random()*(9)+1))cters using letters and numbers (hint: use Math.random and string methods).



