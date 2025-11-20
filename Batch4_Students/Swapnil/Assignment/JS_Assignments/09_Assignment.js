/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.


/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */
let yourAge = 15
let yourAge1 = Number(yourAge)
if (yourAge1 >= 18) {
    console.log("You are old enough to drive.")
}   
else {
    let yearsLeft = 18 - yourAge1
    console.log(`You are left with ${yearsLeft} years to drive.`)
}


// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
/**
 * Enter your age: 30
 * You are 5 years older than me.
 */
let myAge = 35
let yourAge2 = 30
if (yourAge2 > myAge) {
    let ageDiff = yourAge2 - myAge
    console.log(`You are ${ageDiff} years older than me.`)
}       
else if (myAge > yourAge2) {
    let ageDiff = myAge - yourAge2
    console.log(`I am ${ageDiff} years older than you.`)
}

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;
let num1 = Number(a)
let num2 = Number(b)
// Using if...else

if (num1 > num2) {
    let result = num1 - num2
    console.log(`${num1} is greater than ${num2}`)
}
else if (num2 > num1) {
    let result = num2 - num1
    console.log(`${num2} is greater than ${num1}`)  
}       
// Using ternary operator
let result2 = (num1 > num2) ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`;
console.log(result2)

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let num4 = 99
if (num4 % 2 == 0) {
    console.log(`${num4} is an even number.`)   
}
else {
    console.log(`${num4} is an odd number.`)
}

/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let studentGrade = 50
let num6 = Number(studentGrade)
if (num6 >=80 && num6 <=100 ) {
    console.log("A")
}
else if (num6 >=70 && num6 <=79 ) {
    console.log("B")
}
else if (num6 >=60 && num6 <=69 ) {
    console.log("C")
}
else if (num6 >=50 && num6 <=59 ) {
    console.log("D") 
}
else  
 {
    console.log("F")
}



// 2. Check the season based on user input month.
let month = "may"
month = month.toLowerCase()
switch (month){
   case 'november':
   case 'december':
   case 'january':
   case 'february': console.log("This is a Winter season.Enjoy..!")
   break
   case 'march':
   case 'april':
   case  'may':
   case  'june': console.log("This is a Summer Season.Enjoy..!");
     break
   case 'july':
   case 'august':
   case  'september':
   case  'october': console.log("This is a Rainy Season.Enjoy..!");
}


// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let day = "sunday"
let day1= day.toLowerCase()
switch(day1){
case "monday":
case "tuesday":
case "wednesday":
case "thursday":
case "friday": console.log(`What is the day today ? ${day}`)
console.log(`${day1} is a working Day.`)

break
case "saturday":
case "sunday": console.log(`What is the day today ? ${day}`)
console.log(`${day1} is a weekend.`)
break
default : console.log("Please enter valid details")
}


/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */



//1. Write a program that tells the number of days in a month.
let newD = new Date()

/**
 * Enter a month: January
 * January has 31 days.
 */
let month = 1;  // January
let year = 2024; // You can change the year if needed

let days = new Date(year, month, 0).getDate();

console.log(`January ${year} has ${days} days.`);
