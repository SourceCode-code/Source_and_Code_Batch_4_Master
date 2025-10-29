/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
*/

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
/* let strTen = '10'
let numTen = 10

if(strTen===numTen);

console.log(strTen === numTen) //false

let newNum = parseInt(strTen) // Change the data type of strTen to number by usinng partInt
console.log(typeof(newNum)) //number 

//closole.log (typeof (numTen) == typeof (newNum))
console.log (typeof (numTen) == typeof (newNum))  //true 
*/

/*// // 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let num1 = "9.8"
let num2 = 10
let num3 = (Math.round(num1)) // output will be 10
console.log(num2 === num3)  // true
*/

// 3. Check if 'on' is found in both 'python' and 'jargon'.
/* let word1 = 'python';
 let word2 = 'jargon';
 let found = (word1 ,word2 .includes('On') )? " found in both " : "no found in both "
console.log(found) 
*/


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
// let sentence = "I hope this course is not full of jargon.";
 //console.log(sentence . includes('jargon'))  //true

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
 //let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
 // console.log(longSentence . indexOf("because")) // 31
 // console.log(longSentence . substr(31 , 23)) // because because because 
 //let str="Learning JavaScript is fun"
 //let word=str.slice(-7)
 //console.log(word)

// // 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
// let firstName = "Rushikesh"
// let lastName = 'Jadhav'
// let country = "India"
// let city = "Pune"
// let age = 26
// let isMarried = "unmarried"
// let year = 2025
// console.log(typeof firstName , typeof lastName,typeof country, typeof city, typeof age, typeof isMarried, typeof year)
// Output Will Be   string             string          string        string       number       string           number    

// // 7. Check if the type of '10' is equal to 10 using `parseInt`.
// let str2 = 10
// let str3 = "10"
// let num10= parseInt(str3)
// console.log(num10)
// console.log(typeof num10) // number
// console.log( typeof str2) // number


// // 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
// console.log(10 > 9)
// console.log(-1 > -5 )
// console.log(9 !== "9" )

// // 9. Write three JavaScript statements that provide falsy values.
// console.log(10 < 9)
//  console.log(-5 > -1 )
//  console.log(9 === "9" )

// // 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
// //write the output in the comments 
// console.log(4 > 3);  // true            
// console.log(4 >= 3); // true         
// console.log(4 < 3);  // false
// console.log(4 <= 3);  // false      
// console.log(4 == 4); // true         
// console.log(4 === 4); // true         
// console.log(4 != 4);  // false          
// console.log(4 !== 4); // false            
// console.log(4 != '4'); // false          
// console.log(4 == '4'); // true         
// console.log(4 === '4'); // false       

// // 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
// let str = 'python'
// let str1 = 'jargon' 
// console.log(str.length !== str1.length) // false

// // 12. Evaluate the following expressions and confirm with `console.log()`:
// //write the output in the comments 
// console.log(4 > 3 && 10 < 12);// true
// console.log(4 > 3 && 10 > 12); // false  
// console.log(4 > 3 || 10 < 12);  // true
// console.log(4 > 3 || 10 > 12); // true  
// console.log(!(4 > 3));   // false       
// console.log(!(4 < 3));   // ture        
// console.log(!(false));   // true        
// console.log(!(4 > 3 && 10 < 12));  // false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log(!(4 === '4'));  // ture      

// // 13. Check if there is no 'on' in both 'dragon' and 'python'.
// let dragon = 'dragon';
// let dragon = 'dragon'
// let python = 'python'
// let check = !dragon.includes('on') && !python.includes('on')
// console.log(check) 

/// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
// let base = 10
// let height = 20
// let area = base*height
// console.log(area)


// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

// let a = 10
// let b = 20
// let c = 30
// let primeter = a+b+c
// console.log(primeter)
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
// let length1 = 10
// let width1 = 20
// let area1 = length1*width1
// let perimeter = 2*(length1+width1)
// console.log(area1)
// console.log(perimeter)

// 17. Get the radius   calculate the area and circumference of a circle.
// let radius = 8
// let area2 = 3.14*3.14**2
// console.log(area2)
// let circum = 2*3.14*radius
// console.log(circum)

// // 22. Compare the length of your first name and your family name.
// let firstName = "rushi"
// let familyName = "jadhav"
// console.log( firstName.length > familyName.length  && firstName.length < familyName.length )? 'length of your first name is grateer then length of your Family name': 'length of your first name is smaller then length of your Family name'

// // 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
// let myAge = 26
// let yourAge = 20
// let difference = (myAge - yourAge)
// console.log(`${difference} years is the differance between my age and your age `)

// // 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
// let birthYear = 2015
// let currentYear = 2025
// let calculate = currentYear - birthYear 
// console.log((calculate >= 18)? " old enough to drive":" not enough to drive")

// //25  using ternary opertor check number is even or odd
// let num = 12
// console.log((num % 2 == 0)? "number is Even": "number is Odd")



// Not Understand 14 - 22


let new1 = new Date()
console.log(new1)
