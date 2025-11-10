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



let num = -20
if (num>0) {console.log("given number is positive")}

else{console.log("given number is positive")}
//
let height = 170
if (height>=160){console.log("you are allowed to proceed")}

else{console.log("not allowed to proceed")}

//
let profit = 0

if (profit>50000){console.log("supertrader")}
else if (profit<=50000&&profit>30000){console.log("AverageTrader")}

else if (profit>0&&profit<30000){console.log("below average Trader")}
else if(profit<0){console.log(console.log("loss Making trader"))}

else{console.log("learn trading first")}


//i want to buy a property that costs 50lakh but i only i have 30 lakh cash ,
//  if i want to buy it any how so i  need to take a loan of 20lakhs so i can buy it 
//if loan did not passed then need to drop my plan

let requiredCash  = 5000000
let cashInHand = 3000000
let requiredLoan = 1000000
let toBuyProperty = cashInHand+requiredLoan
console.log(toBuyProperty)
if (requiredCash == toBuyProperty){console.log("you can buy a property")}
else if(cashInHand>requiredLoan){console.log("can\'t buy property")}
else if (requiredLoan<2000000){console.log("need to arrange remaining amount")}
else{console.log("need to drop my plan")}
//else {console.log("need to drop my plan")}