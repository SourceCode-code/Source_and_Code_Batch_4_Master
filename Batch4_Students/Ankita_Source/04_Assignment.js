// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.

//Ans-
//Single Line Comment
//I am becoming better QA 

//Multi Line Comment
/*I am
becoming
better 
QA*/

// Q2. Print "Welcome to JavaScript Assignment" using console.log.
  
//Ans
console.log("Welcome to JavaScript Assignment")

// Q3. Declare a variable using var, reassign it with a new value, and print both values.

//Ans
var num1 = 25
console.log("Firstvalue=", num1)
num1= 56
console.log("updated_valur=", num1)


// Q4. Declare a variable using let, update its value, and print it.

//Ans-
let age = 27
age = 29
console.log("Age=", age)


// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.

//Ans
/*const pi1= 3.14
console.log(pi1)
pi1= 3.16
console.log(pi1)*/

// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)

//Ans
let firstName= "Ankita"
let middleName= "Hanumant"
let lastName= "Fartade"
console.log(firstName + " " +middleName+ " "+lastName)

// Q7. Create variables using valid names: city1, _city, $city and print them.

// Ans-
let city1 = "Osmanabad"
let _city= "Tuljapur"
let $city= "Solapur"
console.log(city1 , _city,$city  )
console.log(city1)
console.log(_city)
console.log($city)


// Q8. Show with an example that variable names are case-sensitive in JavaScript.

//Ans-
let firstname= "Ankita" //variable name is in lower case
let firstNAme= "Ankita" // one character of variable name is in upper case
console.log(firstname)
console.log(firstNAme)
//Hence proved Javascript is case sensitive


// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null

//Ans
let a = 25
let str = "hello"
let isBoy= true
let value = (null)
let x 

console.log(typeof (a))
console.log(typeof (str))
console.log(typeof (isBoy))
console.log(typeof (value))
console.log(typeof (x))

// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %

//Ans
let num2= 16
num3= 2
console.log("add=", num2+num3)
console.log("sub=", num2-num3)
console.log("multi=", num2*num3)
console.log("Divi=", num2/num3)
console.log("module=", num2%num3)

// Q11. Round the number 10.99 down to nearest integer using Math.floor.
console.log(Math.floor(10.99)) 

// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
console.log(Math.ceil(10.01))

// Q13. Round 10.05 and 10.99 using Math.round.
console.log(Math.round(10.55))
console.log(Math.round(10.99))


// Q14. Generate a random number between 0 and 1 using Math.random.

//Ans
console.log(Math.random())

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).

//Ans-
let min =1
let max=6
console.log(Math.floor(Math.random()*(max-min+1))+min)

// Q16. Generate a random number between 10 and 20.

//Ans= 
let min1 =10
let max1= 20
console.log(Math.floor(Math.random()*(max1-min1+1))+min1)

// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30

//Ans
let num4 = 28
let num5 = 32
console.log(Math.round(num4/5)*5)
console.log(Math.round(num5/5)*5)

// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
let min3= 1000
let max3 = 9999
let OTP = Math.floor(Math.random()*(max3-min3+1)+min3)
console.log("OTP=", OTP)

// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).

//Ans-
let min2=1000
let max2= 9999
let digit=Math.floor(Math.random()*(max2-min2+1))+min2
let digit1=Math.floor(Math.random()*(max2-min2+1))+min2
let digit2=Math.floor(Math.random()*(max2-min2+1))+min2
console.log("AadharNo=", digit,digit1,digit2)

// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character


let str9 = "Siddhant Arjun Gadakh"
console.log("Lenght=", str9.length)
console.log("FirstChracter=", str9[0])
console.log("LastCharacter=", str9[str9.length-1])



// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.

//Ans-
let pr = "Siddhant\nArjun\nGadakh"
console.log(pr)

// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.

//Ans-
let str7= "my name \is \'Siddhant'"
console.log(str7)

// Q23. Convert "javascript" into UPPERCASE using string method.

//Ans-
let str6= "javascript"
console.log(str6.toUpperCase())

// Q24. Convert "HELLO WORLD" into lowercase using string method.

//Ans
let str5 = "HELLO WORLD"
console.log (str5.toLowerCase())

// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.

//Ans-
let chain = "hello world"
console.log(chain.toUpperCase().toLowerCase() .length)

// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.

//Ans
 let str8= "Siddhant Arjun Gadakh" 
 let newsubstr = str8.substr(0, 8)
 console.log(newsubstr)

// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.

//Ans
let str11= "Siddhant Arjun Gadakh" 
let newStr= str11.substring(9, 14)
console.log("NewStr=", newStr)

// Q28. Split the string "I love JavaScript" into an array by spaces.

//Ans
let str12="I love JavaScript" 
console.log(str12.split(" "))

// Q29. Split the string "banana" into parts wherever "a" occurs.

//Ans
let str13="Banana"
console.log(str13.split('a'))

// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";

//Ans
let ankitaHanumantFartade = "Ankita Hanumant Fartade";
console.log(ankitaHanumantFartade);


// Q31. Generate a random integer between 50 and 100.

//Ans
let min5 =50
let max5= 100
console.log(Math.floor(Math.random()*(max5-min5+1))+min5)

// Q32. Generate a random integer between -20 and -10.

//Ans
let min6= -20
let Max6= -10
console.log(Math.floor(Math.random()*(Max6-min6+1))+min6) 

// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").

// Q34. Generate a random integer between 100 and 999 (3-digit number).

//Ans
let min4=100
let max4=999
console.log(Math.floor(Math.random()*(max4-min4+1))+min4)

// Q36. Generate a random number between 1 and 100 and check if it is even or odd.


// Q37. Generate 5 random numbers between 1 and 10 

//Ans
let min7= 1
let max7=10
console.log(Math.floor(Math.random()*(max7-min7+1))+min7)
console.log(Math.floor(Math.random()*(max7-min7+1))+min7)
console.log(Math.floor(Math.random()*(max7-min7+1))+min7)
console.log(Math.floor(Math.random()*(max7-min7+1))+min7)
console.log(Math.floor(Math.random()*(max7-min7+1))+min7)

// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).
