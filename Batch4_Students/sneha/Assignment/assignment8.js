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

let age=30
if (age>28){
    console.log("you are old enogh to drive")
}
    else{
    console.log("you  are left 3 years to drive")
}


// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.

let yourage=12
let myage=20

if(yourage==myage){
    console.log("you are older than me")
}

    else{
        console.log(" i am older than you")
    }

/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;


//using ternary operator
let a12=10
let b12=12

let r=(a12<b12)?"a is greter":"b is greater"
console.log(r)


if(a12<b12){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}
// Using if...else


// Using ternary operator


/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.==========================================================

let num=99
if(num%2==0){
    console.log(`${num} is even`)
}
else{
    console.log(`${num} is even`)
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

let grade=80
if(grade>=80&&grade<=100){
    console.log("grade A")
}
    else if(grade>=70&&grade<79){
        console.log("grade B")
    }
       else if(grade>=60&&grade<69){
        console.log("grade C")
    }
       else if(grade>=50&&grade<59){
        console.log("grade B")
    }
       else if(grade>=0&&grade<49){
        console.log("grade D")
    }

   


// 2. Check the season based on user input month.
let month="november"
let m=month.toLowerCase()
let summer='march,april,may'
let monsoon='june,july,aug'
let winter='sep,oct,nov,dec,jan,feb'
if(summer.includes(m)){
    console.log(`this is${m} enjoy summer`)
}
else if(summer.includes(month)){
    console.log(`this is ${m} enjoy monsoon`)
}
else {
    console.log(`this is ${m} enjoy winter`)
}



// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.

let day="monday"
let d=day.toLowerCase()
let workingday="monday,tuesday,wednusday,thursday,friday"
let weekend="saturday,sunday"
if(workingday.includes(d)){
    console.log(`${d} this is working day`)
}
else{
    console.log(`${d} this is weekend `)
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

let month1="september"
let m1=month.toLowerCase()
let day31='jnuary,march,may,july,aug,oct,dec'
let day30="april,june,september,november"
let day28_29="february"
if(day31.includes(m1)){
    console.log(`${m} it has 31 days`)
}
else if(day30.includes(m1)){
    console.log(`${m} it has 30 days`)
}
else {
    console.log(`${m} it has 28_29 days`)
}

/**
 * Enter a month: January
 * January has 31 days.
 */