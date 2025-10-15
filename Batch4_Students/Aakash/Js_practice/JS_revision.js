let date = new Date ()
let currentDate = date.getDate()
console.log(currentDate)
let currentMonth = date.getMonth()+1
console.log(currentMonth)
let currentYear = date.getFullYear()
console.log(currentYear)
let dateInreverse = `${currentYear}:${currentMonth}:${currentDate}`
console.log(dateInreverse)

let settledDate = new Date()
let dateToset = settledDate.getDate()
settledDate.setDate(dateToset-13)
let settledDate1 = settledDate.getDate()
console.log(settledDate1)

let strDate = String(settledDate1).padStart(2,"0")
console.log(strDate)
let settledDate2 = `${currentYear}:${currentMonth}:${strDate}`
console.log(settledDate2)
