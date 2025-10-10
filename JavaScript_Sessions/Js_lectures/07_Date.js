// Date keywords/ object shows you the time and date of your system

//Get the currrent date and time 
let date = new Date()

console.log(date) //2025-10-09T15:41:24.119Z


// getFullYear()--> returns the current year in 4 digits 
let year = date.getFullYear()
console.log(year) //2025

// getMonth() --> it will return the current month but (0-11) 0 is for jan and 11 is for dec
// if you want your month shown in number format
let month = date.getMonth()+1
console.log(month) //10

// short form of month 
let shortmonth = date.toLocaleString("en-gb",{month:"short"})
console.log(shortmonth) //Oct

// long form of month
const longmonth = date.toLocaleString("en-gb",{month:"long"})
console.log(longmonth) //October

// getDate() --> it will return the current date (1-31)
let currentdate =date.getDate()
console.log(currentdate)



// human format date 
let humanDateformat = `${currentdate}/${month}/${year}`
console.log(humanDateformat)


// FOR TIME 

// by default the system time is in 24 hours format

// getHours() --> it will return the current hour (0-23) 

let hours = date.getHours()
console.log(hours)

// getMinutes() --> it will return the current minute (0-59)
let min = date.getMinutes()
console.log(min)

// getseconds() --> it will return the current seconds (0-59)
let sec = date.getSeconds()
console.log(sec)

// time in hh:MM:SS format
let currenttime = `${hours}:${min}:${sec}`
console.log(currenttime)


