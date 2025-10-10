// ASSIGNMENT 6 & 7 QUESTIONS 

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;

// check if type of '10' is equal to 10
console.log ( strTen === numTen)
// convert '10' to a number
strTen = Number(strTen)
console.log(strTen === numTen)

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.

//check 9.8 is equals to 10
let num = parseFloat('9.8')
console.log("ParseFloat+", num=== 10)
// round 9.8 to 10
num = Math.round(num)
console.log("round=", num===10)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
//include() method check 'on' is in both string or not
let result = word1.includes("on") && word2.includes("on")
console.log("On-Result=",result)

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
let word= sentence.includes("jargon")
console.log("Jargon=", word)


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let newStr = longSentence.substr(31,54)
console.log(newStr)

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName= "Ankita"
let lastName= "Fartade"
let country= "India"
let city= "Terkheda"
let age= 23
let isMarried= false
let year= 2025
console.log("First Name=", typeof firstName)
console.log("Last Name=", typeof lastName)
console.log("Country=", typeof country)
console.log("City=", typeof city)
console.log("Age=", typeof age)
console.log("Married=", typeof isMarried)
console.log("Year=", typeof year)


// 7. Check if the type of '10' is equal to 10 using `parseInt`.

let strTen1= '10'
let numTen1= 10
//check if type of '10' is equal to 10
console.log("Equal=",strTen1===numTen1)
//convert string to number using parseInt
str = parseInt(strTen1)
console.log("ParseInt=",str===numTen1)

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.

console.log(Boolean("hi"))
console.log(Boolean(652))
console.log(Boolean(1,2,3))

// 9. Write three JavaScript statements that provide falsy values.

//false is falsy value
console.log(Boolean(false))
//empty is falsy value
console.log(Boolean(""))
//0 is falsy value
console.log(Boolean(0))

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log("greater=", 4 > 3); //true             
console.log("greater than=", 4 >= 3);   //true          
console.log("less=", 4 < 3);  //false           
console.log("less than=", 4 <= 3);    //false         
console.log("equal=", 4 == 4);    //true        
console.log("equal value=", 4 === 4);    //true       
console.log("not equal=",4 != 4);      //false      
console.log("not equal value=",4 !== 4);         // false
console.log("equal not=", 4 != '4');       //false   
console.log("equal 1=", 4 == '4'); //true        
console.log("equal 2=", 4 === '4');     //false   

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let word3= "python"
let word4= "jargon"
//check length
let length= word3.length
let length1= word4.length
//check lenght are not equal
console.log("comparision=", length !== length)


// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log("AND=",4 > 3 && 10 < 12);   //true
console.log(4 > 3 && 10 > 12);   //false
console.log("OR=", 4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!("Not=",4 > 3));      //false    
console.log(!(4 < 3));       // true
console.log(!(false));    //true       
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));    //false    

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon'
let python= "python"
let result1 = !dragon.includes("on") && !python.includes("on")
console.log("On-Result=",result1)

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = 10
let height= 15
//use area of triangle formula
let area= 0.5*base*height
console.log("Area of triangle=", area)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

//Side a,b,c
let a= 5
let b = 10
let c = 10
//add all the side
let perimeter = a+b+c
console.log("Perimeter=", perimeter)

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length5= 24
let width = 16
 let area2= length5*width
 let perimeter1= 2*(length5 +width)
 console.log("Area of rectangle=", area2)
 console.log("perimeter of rectangle=", perimeter1)

// 17. Get the radius calculate the area and circumference of a circle.

let radius= 8
//area= PI * radius * radius
let area6= Math.PI* radius*radius
//circumference = 2*PI*radius
let circumference = 2*Math.PI*radius
console.log("Area of circle=", area6)
console.log("Circumference of circle=", circumference)

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.

// Display first name and family name
let firstName1= "Ankita"
let familyName= "Fartade"
//declare length of first name and last name
console.log(firstName1.length=== familyName)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge= 23
let yourAge = 26
let ageDifference= myAge-yourAge
console.log("Age Difference=", ageDifference)

// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.

let birthYear= 2002
let currentYear= 2025
let age1= currentYear- birthYear
let canDrive= (age1>= 18)
? "You are old enough to drive." 
    : `You are too young to drive. You need ${18 - age1} more year(s).`
console.log(canDrive)

//25  using ternary opertor check number is even or odd */
let number= 13
let result2 = (number % 2 === 0) 
? "The number is even." 
    : "The number is odd."
console.log(result2)