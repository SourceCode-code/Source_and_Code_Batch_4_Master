// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment

//Answer- 7


// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.

console.log(typeof gravity)
//Answer- Number


// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.

// formula Math.floor(Math.random()*(max-min +1))+min
let min = 1
let max = 10
let randomNum= Math.floor(Math.random()*(10-1+1))+1
console.log("randomNum=",randomNum)


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.

let num1 = 5.7;
console.log("ceilNum=",Math.ceil(num1))
console.log("floorNum=",Math.floor(num1))

//Ans- 6 & 5


// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
 
// formula Math.floor(Math.random()*(max-min +1))+min
//(Math.floor(Math.random()*((max-min)+1)+min))
let dice1= Math.floor(Math.random()*(6-1+1))+1 //simulate dice 1
let dice2= Math.floor(Math.random()*(6-1+1))+1//simulate dice 2
let total = (dice1+dice2); // add both the dices


console.log("dice1=",dice1)
console.log("dice2=",dice2)
console.log("total=", total)


// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random()
console.log(Math.floor(randomVal * 10) + 5)

//0.9*10 --> 9    6--->  14
// write the output and reason in commnets 

// Hint: Understand how the number is being generated and what range it falls in.

//Ans-
let randomVal1 = Math.random(); //randomVal is between 0 and 1
 console.log(Math.floor(randomVal * 10) + 5)
//randomVal *10 is between 0 and 10
// Math.floor makes it an integer between 0 and 9
// Adding 5 → result will be between 5 and 14


//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
 
//Ans-
//Math.floor(Math.random()*(max-min +1))+min
//(Math.floor(Math.random()*((max-min)+1)+min))
 let min2= 10
 let max2= 20
 let number2 =(Math.floor(Math.random()*(20-10)+1)+10)
console.log ("number2=",number2)

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

//Ans-
// formula Math.floor(Math.random()*(max-min))+min
let min1 = 5.5
let max1= 9.3
let randomFloat = Math.random()*(9.3-5.5)+5.5
console.log ("randomfloat=", randomFloat)


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57

//Ans-
let x1 = 1234.56789
x1= Number (x.toFixed(2))
console.log("fixedNum=",x1)


// 10. Write 
// a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

let number=32
let roundedNum1= Math.round(number/5)*5
console.log ("roundedNum1=", roundedNum1);



