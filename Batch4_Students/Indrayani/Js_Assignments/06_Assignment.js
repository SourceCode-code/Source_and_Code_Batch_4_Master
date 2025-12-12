/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
//Ans:
// check if type of '10' is equal to 10
let strTen = '10';
let numTen = 10;
console.log ( strTen === numTen)
// convert '10' to a number
strTen = Number(strTen)
console.log(strTen === numTen)

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
//Ans:
// check 9.8 is equal to 10
let num = parseFloat('9.8')
console.log(num === 10)
// round 9.8 to 10
num = Math.round(num)
console.log(num === 10)


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
//Ans:
//include() method check 'on' is in both string or not
console.log(word1.includes('on') && word2.includes('on'))


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";

console.log(sentence.includes('jargon'))


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.substr(31, 23))


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstname = "Indrayani"
let lastname = "Suryawanshi"
let country = "India"
let city = "Mumbai"
let age = 34
let isMarried = true
let year = 2025
console.log(typeof(firstname))
console.log(typeof(lastname))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))


// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let strTen1 = '10'
let numTen1 = 10
console.log(strTen1 === numTen1)
strTen1 = parseInt(strTen1)
console.log(strTen1 === numTen1)


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.


console.log(Boolean("hi"))
console.log(Boolean(652))
console.log(Boolean(1,2,3))

// 9. Write three JavaScript statements that provide falsy values.

//false is falsy value
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))




// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log( 'greater', 4 > 3 ); // true             
console.log( 'greater=', 4 >= 3); // true            
console.log('less', 4 < 3); // false          
console.log('less=', 4 <= 3); // false             
console.log('equal', 4 == 4);  // true          
console.log('equal=', 4 === 4);  // true         
console.log('not equal', 4 != 4);            
console.log('not equal=', 4 !== 4);            
console.log('not equal', 4 != '4');           
console.log('equal', 4 == '4');           
console.log('equal=', 4 === '4');         

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.

let word3 = "python"
let word4 = "jargon"
let length = word3.length
let length1 = word4.length
console.log(length !== length1)

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   
console.log(4 > 3 && 10 > 12);   
console.log(4 > 3 || 10 < 12);   
console.log(4 > 3 || 10 > 12);   
console.log(!(4 > 3));          
console.log(!(4 < 3));           
console.log(!(false));           
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4'));        


// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let word_1 = 'python'
console.log(!dragon.includes('on') && !word_1.includes('on'))

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

let base = prompt("Enter base of triangle:")
let height = prompt("Enter height of triangle:")
let area = 0.5 * base * height
console.log("Area of triangle is:" + area)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let sideA = prompt("Enter side a of triangle:")
let sideB = prompt("Enter side b of triangle:")
let sideC = prompt("Enter side c of triangle:")
let perimeter = Number(sideA) + Number(sideB) + Number(sideC)
console.log("Perimeter of triangle is:" + perimeter)
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length2 = prompt("Enter length of rectangle:")
let width = prompt("Enter width of rectangle:")
let areaOfRectangle = length2 * width
let perimeterOfRectangle = 2 * (Number(length2) + Number(width))
console.log("Area of rectangle is:" + areaOfRectangle)
console.log("Perimeter of rectangle is:" + perimeterOfRectangle)
// 17. Get the radius   calculate the area and circumference of a circle.

let radius = prompt("Enter radius of circle:")
let areaOfCircle = Math.PI * radius * radius
let circumference = 2 * Math.PI * radius
console.log("Area of circle is:" + areaOfCircle)
console.log("Circumference of circle is:" + circumference)
// 22. Compare the length of your first name and your family name and you should get an output.

let firstName = "Indrayani"
let familyName = "Suryawanshi"
console.log(firstName.length > familyName.length)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.

let myage = 34
let yourage = 38
let agedifference = yourage-myage
console.log(  agedifference)
// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.

let birthYear = prompt("Enter your birth year:")
let currentYear = new Date().getFullYear()
let age1 = currentYear - birthYear
age1 >=18 ? console.log("You are old enough to drive") : console.log("You are not old enough to drive")
//25  using ternary opertor check number is even or odd
let number = prompt("Enter a number:")
number % 2 == 0 ? console.log("Number is even") : console.log("Number is odd")
