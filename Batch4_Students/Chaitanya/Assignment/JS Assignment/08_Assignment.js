/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */
console.log("-------------------------------------------------------------------------------------------------")

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(strTen === numTen)
strTen = Number(strTen)
console.log("q1", strTen === numTen)

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let q2 = parseFloat('9.8');
console.log(q2 === 10);
q2 = Math.round(q2)
console.log("q2", q2 === 10)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log("q3", word1.includes("on") && word2.includes('on'));


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log("q4", sentence.includes('jargon'))


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.indexOf("b"));
console.log(longSentence.lastIndexOf('e'))
console.log(longSentence.substr(31, 23))

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = 'chaitanya', lastName = 'kute', country = 'India', city = 'sangamner', age = 26, isMarried = 'no', year = 2025;
console.log(typeof (firstName), typeof (lastName), typeof (country), typeof (city), typeof (age), typeof (isMarried), typeof (year))

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let q7 = '10'
q7 = (parseInt(q7));
console.log(q7 === 10)


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log('q8', 10 == 5)
console.log(5 != '5')
console.log(1 != 5 && 6 != 11)
console.log(6 < 7 || 4 < 1)

// 9. Write three JavaScript statements that provide falsy values.
console.log('q91', 0 == 20)
console.log(true == false)
console.log(false != false)


// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log("1", 4 > 3);  //true 1           
console.log('2', 4 >= 3);   //true 2
console.log('3', 4 < 3);  //false   3        
console.log('4', 4 <= 3);  //false   4      
console.log('5', 4 == 4);  //true     5     
console.log('6', 4 === 4);  //true     6   
console.log('7', 4 != 4);   //false     7 
console.log('8', 4 !== 4);   //false    8      
console.log('9', 4 != '4'); //false       9  
console.log('10', 4 == '4');   //true       10 
console.log('11', 4 === '4');   //false   11

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let q11 = 'python'
console.log(q11.length)
let q12 = 'jargon'
console.log(q12.length)
console.log(q11.length !== q12.length)

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log('q12', 4 > 3 && 10 < 12); //true  
console.log(4 > 3 && 10 > 12);  //false 
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));          //false
console.log(!(4 < 3));           //true
console.log(!(false));           //true
console.log(!(4 > 3 && 10 < 12));  //false
console.log(!(4 > 3 && 10 > 12));  //true
console.log(!(4 === '4'));        //true



// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon', python = 'python'
console.log('q13', dragon.includes('dragon') && python.includes("python"))

// 14. Write a script the user to enter the base and height of a triangle, then calculate its area.
let base = 22;
let height = 10;
let area = (1 / 2 * 22 * 10)
console.log(area)

//or

let base2 = '22'
let height2 = '10'
base2 = parseFloat(base2)
height2 = parseFloat(height2)
let area2 = (1 / 2 * base2 * height2)
console.log(area2)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let sidea = '10';
let sideb = '20';
let sidec = '30';
sidea = parseFloat(sidea)
sideb = parseFloat(sideb)
sidec = parseFloat(sidec)
console.log("perimeter of triangle = ", sidea + sideb + sidec)

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length = 10;
let width = 20;
let areaOfRect = (length * width)
let pmtrOfRect = (2 * (length + width))
console.log("area of Rectangle =",areaOfRect)
console.log('perimeter of Rectangle =',pmtrOfRect)

// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 47;
let circleArea = Math.PI * radius * radius;
let circleCircumference = 2 * Math.PI * radius;
console.log(circleArea)
console.log(circleCircumference)

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let firstname = 'Chaitanya' , familyname = 'kute'

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 26;
let yourAge = 23;

if (myAge>yourAge){
    console.log(`i am elder to you by ${myAge-yourAge} years`)
}
else if(yourAge>myAge){
console.log(`your are older than me by ${yourAge-myAge} years`)
}
else 
{console.log('we are of same age')}


// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let validage = 18;

let canDrive = validage >= 18 ? "can drive" : 'cannot drive'
console.log(canDrive)

//25  using ternary opertor check number is even or odd

let eo = 1234567890;
let eooutput = eo % 2 === 0 ? 'even number ' : 'odd number '
console.log(eooutput)



