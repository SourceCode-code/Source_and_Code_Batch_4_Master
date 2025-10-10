let date = new Date()
console.log(date)

let currentYear= date.getFullYear()
console.log(currentYear)
let currentMonth = date.getMonth()+1
console.log()

let shortMonth =date.toLocaleString("en-gb",{month:"short"})
console.log(shortMonth)

let longMonth =date.toLocaleString("en-gb",{month:"long"})
console.log(longMonth)

let curDay= date.toLocaleString("en-gb",{weekday:"short"})
console.log(curDay)

let curDate = date.getDate()
console.log(curDate)

console.log(`${curDate}/${longMonth}/${currentYear}`)

// getDate()
// getMonth()
// getFullYear()
// getHours()
// getMinutes()
// getSeconds()
