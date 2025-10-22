// Date keywords/ object shows you the time and date of your system

//Get the currrent date and time 
let date = new Date()

console.log(date) //2025-10-09T15:41:24.119Z


// getFullYear()--> returns the current year in 4 digits 
let year = date.getFullYear()
console.log(year) //2025

// getMonth() --> it will return the current month but (0-11) 0 is for jan and 11 is for dec
// if you want your month shown in number format
let month = date.getMonth() + 1
console.log(month) //10

// short form of month 
let shortmonth = date.toLocaleString("en-gb", { month: "short" })
console.log(shortmonth) //Oct

// long form of month
const longmonth = date.toLocaleString("en-gb", { month: "long" })
console.log(longmonth) //October

// getDate() --> it will return the current date (1-31)
let currentdate = date.getDate()
console.log(currentdate)



// human format date 
// let humanDateformat = `${dayformat}/${monthformat}/${year}`
// console.log(humanDateformat)


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

// ------------------

// date in human readable format 
let dayformat = currentdate < 10 ? `0${currentdate}` : currentdate
let monthformat = month < 10 ? `0${month}` : month


// human format date 
let humanDateformat1 = `${dayformat}/${monthformat}/${year}`
console.log(humanDateformat1) //10/10/2025

// Padstart(what length,what charcter to add) -->using padStart method to add leading zeros 
let dayformat2 = String(currentdate).padStart(3, "0")


console.log(dayformat2)
// // PadEnd(what length,what charcter to add)  --> using to add zero at the ending of the string

let dateformat3 = String(currentdate).padEnd(3, "a")
console.log(dateformat3)

// 21:18:39

// time in 12 hours format 

let chour = date.getHours()
console.log(chour)
let cmin = date.getMinutes()
console.log(cmin)

console.log(`${chour}:${cmin}`) //21:20

// let ampm ?
let ampm = chour > 12 ? "PM" : "AM"  // 
console.log(ampm)
let chours12 = chour % 12
console.log(chours12)
let hourformat = String(chours12).padStart(2, "0")
console.log(hourformat)
let minformat = String(cmin).padStart(2, "0")
console.log(minformat)
console.log(`${hourformat}:${minformat} ${ampm}`) //09:20 PM

// console.log(curindtime)

//------------------------------------------------------------------------------

let curtime = date.toLocaleString("en-In",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric",
    hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true
})

console.log(curtime)


// MANIPULATION OF DATES WITH setDate()and setMonth() and setYear()

// example --> 

let manipDate= new Date() //13+5 -->18

let futuredate = manipDate.getDate() // new Date().getDate() --> current 13
console.log(futuredate+20)

manipDate.setDate(futuredate+20)

console.log(manipDate.getDate()) //18

let maniDate2 = new Date()

// example of setMonth()

let futuremonth = maniDate2.getMonth()+1

console.log(futuremonth)

maniDate2.setMonth(futuremonth+3)

console.log(maniDate2.getMonth()) //1 

// -------- manipluation year 

//setYear()

let maniDate3 = new Date()

let futureyear=maniDate3.getFullYear()
console.log(futureyear)

maniDate3.setFullYear(futureyear+10)
console.log(maniDate3.getFullYear())