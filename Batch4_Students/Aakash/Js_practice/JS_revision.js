let date = new Date
let todayDate = date.getDate()
console.log(todayDate)
let currentMonth = date.getMonth()+1
console.log(currentMonth)
let currentYear = date.getFullYear()
console.log(currentYear)
let dateInLine = `${todayDate}/${currentMonth}/${currentYear}`
console.log(dateInLine)

let hours = date.getHours()
console.log(hours)
let minutes = date.getMinutes()
console.log(minutes)
let seconds = date.getSeconds()
console.log(seconds)

let shortMonth = date.toLocaleString("en-gb",{month : "short"})
console.log(shortMonth)

let longMonth = date.toLocaleString("en-gb",{month:"long"})
console.log("month",longMonth)

let weekDay = date.toLocaleString("en-gb",{weekday:"long"})
console.log(weekDay)
let weekDayShort = date.toLocaleString("en-gb",{weekday:"short"})
console.log(weekDayShort)

let humanDateFormat = `${todayDate}:${currentMonth}:${currentYear}`
console.log(humanDateFormat)

let humanFormat = todayDate < 10 ? `0${todayDate}`:todayDate
console.log(humanFormat)
let humanFormat1 = todayDate < 10? `0${todayDate}`:todayDate
console.log(humanFormat1)
let humanFormat2 = todayDate<10?`0${todayDate}`:todayDate
console.log(humanFormat2)
let humanFormat3 = todayDate<10?`0${todayDate}`:todayDate
console.log(humanFormat3)

let humanMonth = currentMonth<10?`0${currentMonth}`:currentMonth
console.log(humanMonth)
let humanMonth1 = currentMonth<10? `0${currentMonth}`:currentMonth
console.log(humanMonth1)
let humanMonth2 = currentMonth<10?`0${currenMonth}`:currentMonth
console.log(humanMonth2)



// includes()--> this method is used to check whether a string contains a particular substring or not 