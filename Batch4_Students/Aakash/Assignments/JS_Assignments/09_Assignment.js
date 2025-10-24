/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
let date = new Date()
let currentYear = date.getFullYear()
let birthYear = 2010
let age = currentYear-birthYear
let yearsLeft = 18-age
if (age>=18)
    {console.log("You are old enough to drive")}
else{console.log(`${yearsLeft} years are left to turn 18`)}
/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */



// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.

let myAge = 20
let yourAge = 15

if (yourAge>myAge){
    console.log(`you are ${yourAge-myAge} years older than me`)
}
else (yourAge<myAge)
{
    console.log(`You are ${myAge-yourAge} years elder than me`)

}


/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 1;

// Using if...else
let num1 = Number(a)
let num2 = Number(b)
if (num1>num2){
    console.log(`${a} is greater than ${b}`)
    
}
if (num1<num2)
{
    console.log(`${a} is smaller than ${b}`)
}


// Using ternary operator
num1>num2 ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is smaller than ${b}`)
/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let num3 = 22
 if (num3 % 2 === 0) {
    console.log(num3 + " is Even");
  } else {
    console.log(num3 + " is Odd");
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
let num4 = Number(studentGrade)
if (num4 >=80 && num4 <=100 ) {
    console.log("A")
}
else if (num4 >=70 && num4 <=79 ) {
    console.log("B")
}
else if (num4 >=60 && num4 <=69 ) {
    console.log("C")
}
else if (num4 >=50 && num4 <=59 ) {
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


/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.



/**
 * Enter a month: January
 * January has 31 days.
 */