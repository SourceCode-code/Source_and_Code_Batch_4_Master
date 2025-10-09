
//Q1. Declare a number variable and print its type.

let myNumber = 9876543312
console.log(typeof myNumber)

//Q2. Declare a string variable "Hello" and print its type.

let myName = "AKASHH"
console.log(typeof myName)

//Q3. Declare a boolean variable true and print its type.

let isTeacherr= true
console.log(typeof isTeacherr)

//Q4. Declare null in a variable and print its type.

let a=null
console.log(a)


//Q5. Create 5 numbers and print it.

let num1 = [1,2,3,4,5]
console.log(num1)

//Q6. Declare string name and number age and print it.

let name1 = "Ankita"
let age = 23
console.log(name1, age)

//Q7. Declare "Hello JS" and call it.

let str12= "Hello JS"
console.log(str12)


//Q8. Declare fullName, Age,Address, MobileNumber, Email and print it

let fullName= "Ankita Hanumant Fartade"
let age1 = 23
let address= "Terkheda Dharashiv Maharashtra"
let mobileNo= 8080962459
let email= "ankitafartade@gmail.com"
console.log("Full name=", fullName)
console.log("Age=", age)
console.log("Address=", address)
console.log("Mobile No=", mobileNo)
console.log("Email=", email)



//Q9. Create a string "JavaScript" and print it.

let str11= "JavaScript"
console.log(str11)

//Q10. Print the length of the string "VS Code".

let str123 = "VS Code"
console.log(str123.length)

//Q11. Access the first character of "Hello" and print it.

let strr= "Hello"
let newStr = strr.substring(0,1)
console.log(newStr)

//Q12. Check if "Code" exists in "VS Code" using includes().

let stra = "VS Code"
let newStra= stra.includes("Code")
console.log(newStra)


//Q13. Assign true to a variable isActive and print it.

let isActive= true
console.log(isActive)


//Q14. Check if 10 > 20 and print the result.

let result = 10>20
console.log(result)

//Q15. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
let min = 1
let max = 6
let dice1 = Math.floor(Math.random()*(max-min+1))+min
let dice2= Math.floor(Math.random()*(max-min+1))+min
console.log(dice1+dice2)

//Q16. Convert 0 to boolean and print the result.

let num = 0
let valueBoolean= Boolean(num)
console.log(valueBoolean)

//Q17. Declare a variable without assigning a value and print it.

let b
console.log(b)

//Q18. Assign undefined to a variable and print it.

let m = undefined
console.log(m)

//Q19. Assign null to a variable and print it.

 let str1231= null
 console.log(str1231)

//Q20. Given a number `p = 1234.50789`, write code to round this number to 2 decimal places.

let p = 1234.50789
p= number=(p.toFixed(2))
console.log("Fixed Number=", p)

//Q21. Round 4.7 using Math.round() and print it.

let num12= 4.7
let newNum= Math.round(num12)
console.log(newNum)

//Q22. Floor 5.9 using Math.floor() and print it.

let number1= 5.9
let newNum1= Math.floor(5.9)
console.log(newNum1)

//Q23. Ceil 3.2 using Math.ceil() and print it.

let number12= 3.2
let newNum12= Math.ceil(3.2)
console.log(newNum12)

//Q24. Generate a random number between 0 and 1.

let randomNum= Math.random()
console.log(randomNum)

//Q25. Generate a random number between 1 and 10.

let min1= 1
let max1= 10
let newNum11= Math.floor(Math.random()*(max1-min1+1))+min1
console.log(newNum11)

//Q26. Generate a random integer between 1 and 100.

let min2= 1
let max2= 100
let randomInt= Math.floor(Math.random()*(max2-min2+1))+min2
console.log(randomInt)

//Q27. Generate a random 4-digit OTP.

let min3= 1000
let max3= 9999
let OTP = Math.floor(Math.random()*(max3-min3+1))+min3
console.log("OTP=", OTP)

//Q28. Convert "hello world" to uppercase.

let str1= "hello world"
console.log(str1.toUpperCase())

//Q29. Convert "HELLO" to lowercase.

let str111= "HELLO"
console.log(str111.toLowerCase())

//Q30. Concatenate "Hello" and "JS" using + and print.

let str10= "Hello"
let str120= "JS"
console.log(str10+str120)

//Q31. Concatenate "I", "Love", "JS" using .concat().

let str100= "I"
let str121= "Love"
let str1123= "JS"
let newCon= str100.concat(" ", str121 ," " ,str1123)
console.log(newCon)

//Q32. Get "Hello" from "Hello World" using substring().

let str1s= "Hello World"
console.log(str1s.substring(0,5))

//Q33. Get "World" from "Hello World" using substr().

let str11a= "Hello World"
console.log(str11a.substr(6, 10))

//Q34. Split "apple,banana,cherry" into an array.

let fruit= "apple,banana,cherry"
let newFruit= fruit.split(",")
console.log(newFruit)

//Q35. Trim spaces from " JavaScript " using trim().

let space= " JavaScript "
console.log(space.trim())

//Q36. Trim only leading spaces using trimStart().

let space1= "   Ankita Fartade    "
console.log(space1.trimStart())

//Q37. Trim only trailing spaces using trimEnd().

let space11= "   Ankita Fartade    "
console.log(space11.trimEnd())

//Q38. Check if "JS" exists in "I love JS" using includes().

let str1a= "I love JS"
let newStra1= str1a.includes("JS")
console.log(newStra1)

//Q39. Replace "World" with "JS" in "Hello World".

let str1aa= "Hello World"
let newStr1aa= str1aa.replace("World", "JS")
console.log(newStr1aa)

//Q40. Replace all "is" with "was" in "This is his issue".

let strz= "This is his issue"
let newStrz= strz.replaceAll("is", "was")
console.log(newStrz)

//Q41. Find index of "banana" in ["apple","banana","cherry"].

let fruits= "apple, banana, cherry"
let index=fruits.indexOf("banana")
console.log("Index=", index)

//Q42. Find last index of "a" in "banana".

let strfru= "banana"
let index1= strfru.indexOf("a")
console.log("index=", index1)


//Q43. Declare an array of 5 colors and print the array length.

let color= "green, yellow, red, blue, purple"
console.log(color.length)

//Q44. Access the first and last element of ["apple","banana","cherry","date"].

let fruits1= "apple, banana, cherry, date"
let felement = fruits1[0]
let lelement= fruits1[fruits1.length-1]
console.log(felement)
console.log(lelement)

//Q45. Join ["This","is","JS"] into a single string separated by spaces.

let str1234= ["This","is","JS"]
let newSentence= str1234.join(" ")
console.log(newSentence)

//Q46. Use indexOf() to find "banana" in ["apple","banana","cherry"].

let word= ["apple","banana","cherry"]
let index12= word.indexOf("banana")
console.log(index12)

//Q47. Generate a random number between 1 and 50.

let min6= 1
let max6= 50
let newRandom= Math.floor(Math.random()*(max6-min6+1))+min6
console.log(newRandom)

//Q48. Generate a random 3-digit OTP.

let min7= 100
let max7= 999
let OTP1= Math.floor(Math.random()*(max7-min7+1))+min7
console.log("OTP=", OTP1)

//Q49. Generate a random number between 500 and 1000.

let min8= 500
let max8= 1000
let randomNew= Math.floor(Math.random()*(max8-min8+1))+min8
console.log(randomNew)

//Q50. Generate a random number between 10 and 20.

let min9 = 10
let max9= 20
let newRandomm= Math.floor(Math.random()*(max9-min9+1))+min9
console.log(newRandomm)

//51 Finds the last occurrence of a value in a string or array.
let str1234a = "Hi my name is Ankita Hanumant Fartade"
console.log(str1234a.lastIndexOf("name"))

//52 Checks if a string starts with a given substring. Returns true or false.
let str123a= "Ankita Hanumant Fartade"
console.log(str123a.startsWith("Ankita"))

//53 Checks if a string ends with a given substring. Returns true or false.
let stra12= "Ankita Hanumant Fartade"
console.log(stra12.endsWith("Fartade"))

//54 Repeats a string n times.
let strb= "JS"
console.log(strb.repeat(3))

//55 Searches a string for matches using a regular expression. Returns an array of matches.
let strbb= "i love JS. Js is fun"
let result1= strbb.match("is")
console.log("result=", result1)
