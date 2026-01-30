// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment

//Ans: 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.

//Ans:
console.log(typeof gravity)


// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.

//Ans:
let randomNum=(Math.floor(Math.random)*10)+1;
console.log(randomNum);


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.

 //Ans:
console.log(Math.ceil)// 6
console.log(Math.floor)// 5


// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

let dice1= Math.floor(Math.random()*6)+1;
let dice2= Math.floor(Math.random()*6)+1;
let total=dice1+dice2;
console.log(total);


// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.

-----------------------------------------------------------------------------
//please explain this question.


//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
console.log(randomBetween(10, 20));

//Ans:
let num1= Math.floor(Math.random()*(20-10+1))+10;
console.log(num1);


// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3

//Ans:
let min=5.5;
let max=9.3;
let randomnumber= Math.random()*(max-min)+min;
console.log(randomnumber);


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

//Ans:
console.log(number.tofixed(2));


// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

//Ans:
let numToRound= 94;
let roundednumber= Math.round(numToRound/5);
//94/5 = 18.8-------

console.log(roundednum*5);


