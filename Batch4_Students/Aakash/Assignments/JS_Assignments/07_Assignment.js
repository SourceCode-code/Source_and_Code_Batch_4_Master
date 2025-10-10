/** 
 * ASSIGNMENT 6 and 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(strTen===numTen)
console.log(parseInt(strTen)===numTen)

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let str1 = '9.8'
let num1 = 10
console.log(str1==num1)
console.log(Math.round(str1)==num1)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes("on"),word2.includes("on"))


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"))


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.length)
console.log(longSentence.substr(31,23))


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) 
// and use the `typeof` operator to check different data types.
let firstName = "Akash Manik jadhav"
let lastName = "Jadhav"
let country = "INDIA"
let city = "Sangamner"
let age = 26
let isMarried = true
let year1 = 1999
console.log(typeof (firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof (city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year1) )

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let str2 = "10"
console.log(parseInt(str2)==10)


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log("ans 8",50=="50")
console.log(50>="50")
console.log(100>"50")

// 9. Write three JavaScript statements that provide falsy values.
console.log(50==="50")
console.log(100<="50")
console.log("ans 9",100<"50")

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log("ans",4 > 3); //true             
console.log(4 >= 3); //true            
console.log(4 < 3);  //false           
console.log(4 <= 3); //false            
console.log(4 == 4);  //true          
console.log(4 === 4); //true          
console.log("ans 10",4 != 4); //false      
console.log(4 !== 4); //false           
console.log(4 != '4'); //false          
console.log(4 == '4'); //true          
console.log(4 === '4'); //true         

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let str3 = 'python'
let str4 = 'jargon'
let lengthOfstr3 = str3.length
let lengthOfstr4 = str4.length
console.log("ans of 11", lengthOfstr3!==lengthOfstr4)

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log("ans 12", 4 > 3 && 10 < 12);  //true 
console.log(4 > 3 && 10 > 12); //false  
console.log(4 > 3 || 10 < 12); //true  
console.log(4 > 3 || 10 > 12);  //true 
console.log(!(4 > 3)); //false         
console.log(!(4 < 3)); //true          
console.log(!(false)); //true          
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true       

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon'
let jargon = 'jargon'

let result = !dragon.includes("on") && !jargon.includes("on")
console.log("ans 13", result)


// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = 10
let height = 20
let area = base*height
console.log(area)


// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let a = 10
let b = 20
let c = 30
let primeter = a+b+c
console.log(primeter)
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length1 = 10
let width1 = 20
let area1 = length1*width1
let perimeter = 2*(length1+width1)
console.log(area1)
console.log(perimeter)

// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 8
let area2 = 3.14*3.14**2
console.log(area2)
let circum = 2*3.14*radius
console.log(circum)
// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
let slope = 2
let yintercept = -2


// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let firstName1 = "akash"
let lastName1 = "jadhav"
let lenDiff = firstName.length<lastName.length
 
console.log("ans of 22", lenDiff)

/**
 * > (greater than) 
 * <  (less than)
 * >= (greater than or equal to) 
 * <= (less than or equal to)
 * == (equal value)
 * === (equal value and equal datatype)
 * != (not equal)
 * !==(not equal value nor datatype are same)
 */
// this is for push
// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 26
let yourAge = 27
let ageDiff = yourAge-myAge
console.log(ageDiff)


// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.


let birthyear = 2020
let currentyear = 2025
let currentAge = currentyear-birthyear
console.log(currentAge)
let ageToDrive = 18
let canDrive = (currentAge >=ageToDrive)? "yes you can drive" : "no you cannot drive "
console.log(canDrive)

//25  using ternary opertor check number is even or odd

let oddNum = 55

let oddevenNum = (oddNum%2)? "odd" : "even"
console.log(oddevenNum)




// Date keywords/ object shows you the time and date of your system

//Get the currrent date and time 
let date = new Date()

console.log(date) //2025-10-10T10:01:09.472Z


// getFullYear()--> returns the current year in 4 digits 
let year = date.getFullYear()
console.log(year) //2025

let year2 = date.getFullYear()
console.log(year2)//2025


// getMonth() --> it will return the current month but (0-11) 0 is for jan and 11 is for dec
// if you want your month shown in number format
let month = date.getMonth()+1
console.log(month) //10

let month1 = date.getMonth()+1
console.log(month1)//10

// short form of month 
let shortmonth = date.toLocaleString("en-gb",{month:"short"})
console.log(shortmonth) //Oct

let shortmonth1 = date.toLocaleString("en-gb",{month:"short"})
console.log(shortmonth1) //Oct
// long form of month
const longmonth = date.toLocaleString("en-gb",{month:"long"})
console.log(longmonth) //October

let longmonth1 =  date.toLocaleString("en-gb",{month:"long"})
console.log(longmonth1) //October

// getDate() --> it will return the current date (1-31)
let currentdate =date.getDate()
console.log(currentdate)

let currentdate1 = date.getDate()
console.log(currentdate1)



// human format date 
let humanDateformat = `${currentdate}/${month}/${year}`
console.log(humanDateformat)
let humanDateformat1 = `${currentdate1}/${month1}/${year1}`
console.log(humanDateformat1)
// FOR TIME 

// by default the system time is in 24 hours format

// getHours() --> it will return the current hour (0-23) 

let hours = date.getHours()
console.log(hours)

let hours1 = date.getHours()
console.log(hours1)

// getMinutes() --> it will return the current minute (0-59)
let min = date.getMinutes()
console.log(min)
let min1 = date.getMinutes()
console.log(min1)
// getseconds() --> it will return the current seconds (0-59)
let sec = date.getSeconds()
console.log(sec)
let sec1 = date.getSeconds()
console.log(sec1)

// time in hh:MM:SS format
let currenttime = `${hours}:${min}:${sec}`
console.log(currenttime)

let currenttime1 = `${hours1}:${min1}:${sec1}`
console.log(currenttime1)

