
// Q1. Write a single-line comment and a multi-line comment in JS.
//this is a songle line comment
/*this is
a multiple line 
comment*/


// Q2. Print "Welcome to JavaScript Assignment" using console.log.
console.log("Welcome to JavaScript Assignment")

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var count = 30
console.log(count)
count = 20
console.log(count)

// Q4. Declare a variable using let, update its value, and print it.
let myheight = 6
console.log(myheight)
myheight = 7
console.log(myheight)

// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pi = 3.14
console.log(pi)
//pi = 3.33

// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
let firstName = "Akash"
let middleName = "Manik"
let lastName = "Jadhav"
console.log(firstName + " " + middleName + " " + lastName)
console.log(`${firstName} ${middleName} ${lastName}`)


// Q7. Create variables using valid names: city1, _city, $city and print them.

let city1 = "Sangamner"
let _city = "Loni"
let $city = "Nashik"
console.log( city1 + " " + _city + " " + $city) 

// Q8. Show with an example that variable names are case-sensitive in JavaScript
let cityName = "Pune"
// console.log(cityname)
//it will throw error because n in console.log(cityname) variable should be capital 

// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null

let var1 = 25
let var2 = "Hello"
let var3 = true
let var4
let var5 = null
console.log(typeof var1)
console.log(typeof var2)
console.log(typeof var3)
console.log(typeof var4)
console.log(typeof var5)


// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %
let num1 = 50
let num2 = 150
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)

// Q11. Round the number 10.99 down to nearest integer using Math.floor.

let num3 = 10.99
console.log(Math.floor(num3))

// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
let num4 = 10.01
console.log(Math.round(num4))

// Q13. Round 10.05 and 10.99 using Math.round.
let num5 = 10.05
let num6 = 10.99
console.log(Math.round (num5))
console.log(Math.round (num6))

// Q14. Generate a random number between 0 and 1 using Math.random.
console.log(Math.random())

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
let num7 = 6
console.log(Math.floor(Math.random()*6)+1)

// Q16. Generate a random number between 10 and 20.
let num8 = 10
let num9 = 20
console.log(Math.round(Math.random()*10)+10)

// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
let num10 = 28
let num11 = 32
console.log(Math.round(num10/5)* 5)
console.log(Math.round(num11/5)* 5)

// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
let OTP = Math.floor(Math.random() * 8999 +1) + 1000
console.log(OTP)

// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).

let aadhar1 = Math.floor(Math.random() * 8999 +1) + 1000
let aadhar2 = Math.floor(Math.random() * 8999 +1) + 1000
let aadhar3 = Math.floor(Math.random() * 8999 +1) + 1000
console.log(aadhar1+ " "+ aadhar2+ " "+ aadhar3)

// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character

let str1 = "Sidhhant Arjun Gadakh"
console.log(str1.length)
console.log(str1[0])
console.log(str1[str1.length - 1])

// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
console.log("\"Sidhhant\nArjun\nGadakh\"")

// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
console.log("\"my name is \'Siddhant'\"")

// Q23. Convert "javascript" into UPPERCASE using string method.
let str2 = "javascript"
console.log(str2.toUpperCase())

// Q24. Convert "HELLO WORLD" into lowercase using string method.
let str3 ="HELLO WORLD"
console.log(str3.toLowerCase())

// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
let str4 = "hello world"
console.log(str4.toUpperCase().toLowerCase().length)

// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
let str5 = "Siddhant Arjun Gadakh"
console.log(str5.substr(0, 8))

// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
let str6 = "Siddhant Arjun Gadakh"
console.log(str6.substring(9,14))

// Q28. Split the string "I love JavaScript" into an array by spaces.
let str7 = "I love JavaScript"
console.log(str6.split(""))

// Q29. Split the string "banana" into parts wherever "a" occurs.
let str8 = "banana"
console.log(str8.split("a"))


// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
let 

//need more understanding on this