// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment
// It will be 7 as value after decimal point is less than 0.5

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
console.log(typeof gravity)

// Hint: Use typeof to determine the data type.

// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
console.log(Math.floor(num))
console.log(Math.ceil(num));

// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.


// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
let die1 = Math.floor(Math.random()*6)+1;
let die2 = Math.floor(Math.random()*6)+1;
console.log(die1)
console.log(die2)
console.log (die1 + " " + die2);


// 6. What will be the result of the following code? Explain why.

// Hint: Understand how the number is being generated and what range it falls in.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);

// write the output and reason in commnets 

/*
the result of above code will be in the range of 5 to 14
firstly a random value will be generated from 0 to 0.99999 by using Math.random()
after this the randomVal*10 will give it scale from 0 to 10
then Math.floor will rounddown the integer to the nearest whole number i.e  0 to 9
finally the +5 in the last will add 5 to the output and give it a scale from 5 to 14
hence the output will be from 5 to 14
*/

//7 generate  random number Between(10, 20) should generate a number between 10 and 20.
let num1 = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(num1)

//let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
/*
Math.random() → gives a decimal 0–0.9999
(max - min + 1) → ensures full coverage of the range.
Math.random()*(max - min + 1) → scale it up to the range length.
Math.floor() → round down to whole number.
+ min → shift it into the desired range.
*/

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
 let num2 = Math.random() * (9.3 - 5.5) + 5.5;
 console.log(num2);


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2));


// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

let numToRound = 4;
let roundedNum =Math.round(numToRound/5)
// 94 /5 = 18.8 --> 19 
console.log(Math.round(numToRound/5)) //19*5 =95

console.log(roundedNum*5) 

