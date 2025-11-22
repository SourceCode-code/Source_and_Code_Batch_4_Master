// // let date = new Date ()
// // let currentDate = date.getDate()
// // console.log(currentDate)
// // let currentMonth = date.getMonth()+1
// // console.log(currentMonth)
// // let currentYear = date.getFullYear()
// // console.log(currentYear)
// // let dateInreverse = `${currentYear}:${currentMonth}:${currentDate}`
// // console.log(dateInreverse)

// // let settledDate = new Date()
// // let dateToset = settledDate.getDate()
// // settledDate.setDate(dateToset-13)
// // let settledDate1 = settledDate.getDate()
// // console.log(settledDate1)

// // let strDate = String(settledDate1).padStart(2,"0")
// // console.log(strDate)
// // let settledDate2 = `${currentYear}:${currentMonth}:${strDate}`
// // console.log(settledDate2)



// // let num = -20
// // if (num>0) {console.log("given number is positive")}

// // else{console.log("given number is positive")}
// // //
// // let height = 170
// // if (height>=160){console.log("you are allowed to proceed")}

// // else{console.log("not allowed to proceed")}

// // //
// // let profit = 0

// // if (profit>50000){console.log("supertrader")}
// // else if (profit<=50000&&profit>30000){console.log("AverageTrader")}

// // else if (profit>0&&profit<30000){console.log("below average Trader")}
// // else if(profit<0){console.log(console.log("loss Making trader"))}

// // else{console.log("learn trading first")}


// // //i want to buy a property that costs 50lakh but i only i have 30 lakh cash ,
// // //  if i want to buy it any how so i  need to take a loan of 20lakhs so i can buy it 
// // //if loan did not passed then need to drop my plan

// // let requiredCash  = 5000000
// // let cashInHand = 3000000
// // let requiredLoan = 1000000
// // let toBuyProperty = cashInHand+requiredLoan
// // console.log(toBuyProperty)
// // if (requiredCash == toBuyProperty){console.log("you can buy a property")}
// // else if(cashInHand>requiredLoan){console.log("can\'t buy property")}
// // else if (requiredLoan<2000000){console.log("need to arrange remaining amount")}
// // else{console.log("need to drop my plan")}
// // //else {console.log("need to drop my plan")}

// // let mixnum = [
// //   2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// // ];

// // let odd = [];
// // let even = [];

// // for (let i = 0; i < mixnum.length; i++) {
// //   if (mixnum[i] % 2 === 0) {
// //     even.push(mixnum[i]);
// //   } else {
// //     odd.push(mixnum[i]);
// //   }
// // }

// // console.log(even); // [2,  4,  6,  8, 10,12, 14, 16, 18, 20]
// // console.log(odd); // [3,  5,  7,  9, 11,13, 15, 17, 19]

// // let mixnum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

// // let odd=[]
// // let even = []
// // for (let i = 0; i<mixnum.length;i++){
// //     if (mixnum[i]%2===0){
// //         even.push(mixnum[i])
// //     }
// //     else(odd.push(mixnum[i]))
// // }
// // console.log(even)
// // console.log(odd)

// let mixnum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
// let count = 0
// let odd = []

// let even = []
// for (let i =0 ;i<mixnum.length;i++){

//     if (mixnum[i]%2===0){
//         even.push(mixnum[i])
//     }
//     else{
//         odd.push(mixnum[i])
//     } 
//     for (let i = 0; i<push.length;i++){
//     count+=push
// }
//    console.log(count)
// }

// // let mixnum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,1234,55,6,78,9,5,63,46,57,88,5,64,];





// let  data=[{
//     name: 'Afghanistan',
//     capital: 'Kabul',
//     languages: ['Pashto', 'Uzbek', 'Turkmen'],
//     population: 27657145,
//     flag: 'https://restcountries.eu/data/afg.svg',
//     currency: 'Afghan afghani'
//   },
//   {
//     name: 'Åland Islands',
//     capital: 'Mariehamn',
//     languages: ['Swedish'],
//     population: 28875,
//     flag: 'https://restcountries.eu/data/ala.svg',
//     currency: 'Euro'
//   },
//   {
//     name: 'Albania',
//     capital: 'Tirana',
//     languages: ['Albanian'],
//     population: 2886026,
//     flag: 'https://restcountries.eu/data/alb.svg',
//     currency: 'Albanian lek'
//   },
//   {
//     name: 'Algeria',
//     capital: 'Algiers',
//     languages: ['Arabic'],
//     population: 40400000,
//     flag: 'https://restcountries.eu/data/dza.svg',
//     currency: 'Algerian dinar'
//   }]

// get the countryies name and the language spoken in it
// data = 

let numarr = [1, 1000, 100, 50, 20, 55, 65, 89, 999];

let sorted = numarr.sort()
console.log(sorted)

let sorted2 = numarr.sort((a, b)=>{
    return a-b
})
console.log(sorted2)

let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let add = []
for (let i = 0; i<larr.length;i++){
add.push(larr[i]+3)
}
console.log(add)

let filter = []

for (let i = 0; i<larr.length;i++){
if (larr[i]>=5){
    filter.push(larr[i])
}
}
console.log(filter)

let num3 = [2, 8, 7, 3, 35, 58, 69, 34567, 367, 2, 3, 4, 5, 67, 8, 9, 0];

// let add3 = num3.map((el,index,arr)=>{
//     return el+3
// })
// console.log(add3)
num3.forEach((el,index,arr)=>{
 console.log(el+2)
})

let names = ["siddhant", "amol", "vaibhav", "shree", 0, "arjun", "amal"];
// output should --> every element should in captial
// all the names that start with a should be in anew array

