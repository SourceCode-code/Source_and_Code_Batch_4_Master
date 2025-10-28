// Assignment: JavaScript Date and Time Exercises

/*
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.
*/
let date = new Date()
let birthyear = 1999
let Age = date.getFullYear() - birthyear
console.log(Age)
let maxage = 100

let secondslived = Age*365*24*60*60
console.log(secondslived)

let maxsecondslived = maxage*365*24*60*60
console.log(maxsecondslived)

// time reaming 
console.log(maxsecondslived-secondslived)


//dd:mm:yyyy HH:mm (24 hours)
let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()
console.log(`${day}/${month}/${year}`)
//dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
//yyyy:mm:DD mm:hh 



let age = 25

 //assume this is not a leap year 



 //assume this is not a leap year 


/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").


(e.g., "Monday, 02 October 2024 3:30 pm").

*/

/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec


*/

/* 
Question 4: 
Check if a current  year is a leap year.

*/