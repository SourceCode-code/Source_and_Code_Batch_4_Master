// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
//this is a songle line comment
 /* This is the example of multi line comment example.
 hello my name is Swapnil Gaikwad.*/

// Q2. Print "Welcome to JavaScript Assignment" using console.log.
console.log("Welcome to JavaScript Assignment")

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var count = 11
console.log(count)
count = 22
console.log(count)

// Q4. Declare a variable using let, update its value, and print it.
let myWeight = 60
console.log(myWeight)
myWeight = 65
console.log(myWeight)

// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pi = 3.14
console.log(pi)
//pi = 3.33

// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)

let firstName = "Swapnil"
let middleName = " Bansi "
let lastName = " Gaikwad "
console.log(firstName + " " + middleName + " " + lastName)
console.log(`${firstName} ${middleName} ${lastName}`)


// Q7. Create variables using valid names: city1, _city, $city and print them.

let city1 = "Sangamner"
let _city = "Loni"
let $city = "Nashik"
console.log( city1 + " " + _city + " " + $city) 

// Q8. Show with an example that variable names are case-sensitive in JavaScript
let cityName = "Sangamner"
 console.log(cityname)
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
let num1 = 30
let num2 = 200
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
console.log(Math.ceil(num4))

// Q13. Round 10.05 and 10.99 using Math.round.
let num5 = 10.05
let num6 = 10.99
console.log(Math.round(num5))
console.log(Math.round(num6))

// Q14. Generate a random number between 0 and 1 using Math.random.
console.log(Math.random())  

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
let diceRoll = Math.floor(Math.random() * 6) + 1
console.log(diceRoll)

// Q16. Generate a random number between 10 and 20.
let randomNum = Math.floor(Math.random() * 11) + 10
console.log(randomNum)  

// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
let num10 = 28
let rounded5 = Math.round(num10 / 5) * 5
console.log(rounded5)
let num11 = 32    
let roundedTo5 = Math.round(num11 / 5) * 5
console.log(roundedTo5)  

// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
let OTP = Math.floor(Math.random() * 9999) + 1000
console.log(OTP)    

// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).
let AAdharNumber = Math.floor(Math.random() * 900000000000) + 100000000000
console.log(AAdharNumber)   
/* Method 2 
let AAdharNumber1 =Math.floor(Math.random() * 9999) + 1000
let AAdharNumber2 =Math.floor(Math.random() * 9999) + 1000
let AAdharNumber3 =Math.floor(Math.random() * 9999) + 1000
console.log(`${AAdharNumber1} ${AAdharNumber2} ${AAdharNumber3}`)*/

// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character

let str01 = "Siddhant Arjun Gadakh"
console.log(str01.length)
console.log(str01[0])
console.log(str01[str01.length - 1])

// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
console.log ("Siddhant\nArjun\nGadakh")


// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
let str10 = 'my name is \'Siddhant\''
console.log(str10)

// Q23. Convert "javascript" into UPPERCASE using string method.
let str20 = "javascript"
console.log(str20.toUpperCase())    

// Q24. Convert "HELLO WORLD" into lowercase using string method.
let str30 = "HELLO WORLD"
console.log(str30.toLowerCase())    

// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
let str40 = "hello world"
console.log(str40.toUpperCase().toLowerCase().length)

// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
let str50 = "Siddhant Arjun Gadakh"
console.log(str50.substr(0,8))     

// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
let str60 = "Siddhant Arjun Gadakh"
console.log(str60.substring(9,14))  

// Q28. Split the string "I love JavaScript" into an array by spaces.
let str70 = "I love JavaScript"
let split1 = str70.split(" ")
console.log(split1)   

// Q29. Split the string "banana" into parts wherever "a" occurs.
let str80 = "banana"
let split2 = str80.split("a")
console.log(split2)

// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
let swapnilBansiGaikwad = "Swapnil Bansi Gaikwad"
console.log(swapnilBansiGaikwad)    



// Q31. Generate a random integer between 50 and 100.
let randomInt = Math.floor(Math.random() * 51) + 50
console.log(randomInt)

// Q32. Generate a random integer between -20 and -10.
let randomInteger = Math.floor(Math.random() * 11) - 20
console.log(randomInteger)

// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").
let coin1 = "Heads"
let coin2 = "Tails"
let tosscoin = Math.floor(Math.random()*2)+1;
if(tosscoin==1){
    tosscoin=coin1
}       
else{
    tosscoin=coin2
}   
console.log(tosscoin)


// Q34. Generate a random integer between 100 and 999 (3-digit number).
let random_3digit = Math.floor(Math.random() * 900) + 100
console.log(random_3digit)  

// Q36. Generate a random number between 1 and 100 and check if it is even or odd.
let randomnum1 = Math.floor(Math.random() * 100) + 1

// Q37. Generate 5 random numbers between 1 and 10 


// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).

 function generatePassword() {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@##%&*()_+";
  let password = "";

  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

console.log("Random Password: " + generatePassword());


