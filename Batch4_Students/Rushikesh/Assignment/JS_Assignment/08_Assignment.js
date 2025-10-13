

//let date = new Date()

// Get the currrent date and time
// getFullYear()--> returns the current year in 4 digits  
// getMonth() --> it will return the current month but (0-11) 0 is for jan and 11 is for dec
// short or long 
// getDate() --> it will return the current date (1-31)
// human format date 

// FOR TIME in hh:mm:ss format 


let date = new Date() //  we use complsory for get all date methods 
console.log(date)// 2025-10-12T05:18:33.425Z

let year = date.getFullYear() // this method use for current yesr 
console.log(year) // 2025

// in mont format .getMonth() // this method use for month and
//               .getMonth()+1 // this method use for current month

let month1 = date.getMonth() // this method use for month
console.log(month1) // 9 (here this method gives you prives month becouse index of monts are strts with 0 to 11)

let month = date.getMonth()+1 // this method use for current month
console.log(month) // 10 this is the exact output 

// in moth format we use for short--> toLocaleString("en-gb", { month: "short" })
//    AND for long  --> toLocaleString("en-gb", { month: "long" })

// for short
let thisMonth = date.toLocaleString("en-gb",{month:"short"})
console.log(thisMonth) // oct

// for long 
let longMonth = date.toLocaleString("en-gb",{month:"long"})
console.log(longMonth) // October

// getDate() --> it will return the current date (1-31)

let currentdate = date.getDate()
console.log(currentdate) // 12 

// In Human Redabel Format DD/MM/YY
let currentdate1 = date.getDate()
let month2 = date.getMonth()+1
let year1 = date.getFullYear()
console.log(`${currentdate1}/${month2}/${year1}`) //12/10/2025


// FOR TIME -->  getHours(),getMinutes(),getseconds()  this methods alo apply on date ( new Date())
// time in hh:MM:SS format ?


let hour = date.getHours()
console.log(hour) // give you current hours

let min = date.getMinutes()
console.log(min) // give you current minutes 

let sec = date.getSeconds()
console.log(sec) // give you current seconds 


// time in hh:MM:SS format ?

console.log(`${hour}:${min}:${sec}`) // give you current time on hh:MM:SS format 