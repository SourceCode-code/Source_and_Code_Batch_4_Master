
//display date in below format

// let date = new Date()
// let newDate = date.getDate()
// let newDate1 = newDate<10?`0${newDate}`:`${newDate}`
// let newMonth = date.getMonth()+1
// let newMonth1 = String(newMonth).padStart(0,2)
// let shortmonth = date.toLocaleString("en-gb",{month:"short"})
// let longmonth = date.toLocaleString("en-gb",{month:"long"}) 
// let newYear = date.getFullYear()
// let newhour = date.getHours()
// let newhour1 = newhour%12 
// let newhour2 = newhour1<10?`0${newhour1}`:`${newhour1}`
// let newmin = date.getMinutes()i
// let newMin1 = newmin<10?`0${newmin}`:`${newmin}`

// // dd:mm:yyyy HH:mm (24 hours)
// console.log(`${newDate1}/${newMonth1}/${newYear} ${newhour1}:${newMin1}`)

// // dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// console.log(`${newDate1}/${shortmonth}/${newYear} ${newhour2}:${newMin1}`)

// // dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// console.log(`${newDate1}/${longmonth}/${newYear} ${newhour2}:${newMin1}`)

// // yyyy:mm:DD mm:hh 
// console.log(`${newYear}:${newMonth1}:${newDate1} ${newhour2}:${newMin1}`)

// let age = 25

//  let secondslived = age*(365*24*60*60) 
// console.log(secondslived) //788400000

// let assumption = 100
// let secondslived33 = assumption*(365*24*60*60) 
// console.log(secondslived33)  /


// Question 2: 
// Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
// (e.g., "Monday, 02 October 2024 15:30").
// (e.g., "Monday, 02 October 2024 3:30 pm").
console.log(date.toLocaleString("en-gb",{weekday:"long",day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}))
console.log(date.toLocaleString("en-gb",{weekday:"long",day:"2-digit",month:"long",year:"numeric",hour:"2-digit",hourCycle:"h12",minute:"2-digit"}))


// Question 3: 
// Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
// 31 -dec
let date1 = new Date(12-12-2024)
let date2 = new Date(31-12-2024)
let diffdays = Math.abs(date2-date1)
console.log(diffdays)


// Question 4: 
// Check if a current  year is a leap year.
let date3 = new Date()
let curYear = date3.getFullYear()
curYear%4==0||curYear%100!==0&&curYear%400==0?console.log(`${curYear} is a leap year`):console.log(`${curYear} is not leap year`)