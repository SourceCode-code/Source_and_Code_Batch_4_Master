/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.

let age = 15
if (age >= 18) {
    console.log("you are old enough to drive")
}
else {
    console.log(`you are left with ${18 - age} years to drive`)
}
/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 * 
 */
// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
let myAge = 30
let yourAge = 25
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`)
}
else if (myAge < yourAge) {
    console.log(`you are ${yourAge - myAge} years older than me`)
}



/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;


// Using if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater than ${a}`);
}

// Using ternary operator
if (a > b)
    console.log(`${a} is greater than ${b}`)
else
    console.log(`${b} is greater than ${a}`)

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.

let num1 = 22
if (num1 % 2 == 0) {
    console.log(`${num1} is an even number`)
}
else {
    console.log(`${num1} is an odd number`)
}

let num_ = 99
if (num_ % 2 == 0) {
    console.log(`${num_} is an even number`)
}
else {
    console.log(`${num_} is an odd number`)
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

let scores = 75
if (scores >= 80 && scores <= 100) {
    console.log("Grade A")
}
else if (scores >= 70 && scores <= 79) {
    console.log("Grade B")
}
else if (scores >= 60 && scores <= 69) {
    console.log("Grade C")
}
else if (scores >= 50 && scores <= 59) {
    console.log("Grade D")
}
else if (scores >= 0 && scores <= 49) {
    console.log("Grade F")
}
else {
    console.log("invalid score")
}



// 2. Check the season based on user input month.
let month = "March"
if (month == "September" || month == "October" || month == "November") {
    console.log("the season is Autumn")
}
else if (month == "December" || month == "January" || month == "February") {
    console.log("the season is Winter")
}
else if (month == "March" || month == "April" || month == "May") {
    console.log("season is Spring")
}
else if (month == "June" || month == "July" || month == "Augst") {
    console.log("season is Summer")
}
else {
    console.log("invalid month")
}
// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.

let day = "friDAY"
formatday = day.toLowerCase()

switch (formatday) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": console.log("friday is a working day")
        break
    case "saturday":
    case "sunday": console.log("sunday is a weekend")
        break
    default: console.log("enter correct data")
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

let monthName = "January"
switch (monthName) {
    case"January":
    case"March":
    case"May":
    case"July":
        console.log("January has 31 days.")
        break
    case"April":
    case"June":
    case"September":
    case"November":
        console.log("January has 30 days.")
        break
    case"February":
        console.log("January has 28 days.")
        break
    default:
        console.log("Invalid month name.")
}

/**
 * Enter a month: January
 * January has 31 days.
 */