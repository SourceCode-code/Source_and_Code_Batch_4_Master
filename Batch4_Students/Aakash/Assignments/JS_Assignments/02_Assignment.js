// 1. What will be the output of the following code?
let x = 7.2;
console.log(Math.round(x));// output will be 7.

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
let gravity = 9.81;
console.log(typeof gravity)
//number

// 3. Generate a random number between 1 and 10 (inclusive) and print it.
let num1= Math.floor(Math.random()*9)+1
console.log(num1)


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num2 = 5.7
console.log(Math.ceil(num2))
console.log(Math.floor(num2))

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
let rollDice = 12
console.log(Math.floor(Math.random()*rollDice)+1)

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
//out will be between 5 to 14

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
let randomVal2 = Math.random()
console.log(Math.floor(randomVal2 * 10)+10)

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let randomFloat = (Math.random()*3.8)+5.5
console.log(Math.random()*3.8)+5.5
console.log(randomFloat)
console.log(randomFloat.toFixed(1))

// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let num6 = 1234.56789;
console.log(num6.toFixed(2))


// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let num11 = 100
console.log(Math.round(Math.random()*num11 / 5) * 5)
