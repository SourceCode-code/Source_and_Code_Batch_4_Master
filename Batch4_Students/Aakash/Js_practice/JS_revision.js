// // let arr = ["akkash","swapnil",124356]
// // let [n1,n2,n3] = arr
// // console.log(n1,n2,n3)

// // let fullStack = [
// //   ["HTML", "CSS", "JS", "React", "Angular"], // Frontend stack
// //   ["Node", "Express", "MongoDB", "SQL"], // Backend stack
// // ];

// // let [frontend,backend] = fullStack
// // console.log(frontend)

// // let [
// //     [f1,f2,f3,f4,f5],
// //     [f6,f7,f8,f9,f10]
// // ]=fullStack
// // console.log(f1)

// // // 3. Skipping Elements during Destructuring
// // let numbers = [1, 2, 3, 4];

// // let [num11, , , num44] = numbers;
// // console.log(num11, num44);
// // // using destructing with spread opertaor
// // let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let [q, x, ...n] = moreNumbers;
// // console.log(q, x);
// // console.log(n);


// // let obj = {
// //     firstname: "akash",
// //     age: 26,
// //     exp:3,
// //     skill:["cypress ", "playwright", "js", "ts", "react"],
// //     position: "Senior Software engineer"
// // }
// // let {firstname,age,exp,skill,position} = obj
// // console.log(firstname,age,exp,skill,position)

// // let {firstname:fn,age:ag,exp:ex,skill:sk,position:ps}=obj
// // console.log(ps)

// // let [cy,pw,js,ts,react] =sk
// // console.log(cy,pw,js,ts,react)
// // let {firstname:fnn,age:agg,exp:exx,skill:[cyy,pww,jss,tss,reactt],position:pss}=obj
// // console.log(pww,jss,tss)

// // let arr2 = [1,2,3,4,5,6,7,8,9]
// // console.log(...arr2)

// // let arr3 = [...arr2]
// // console.log(arr3)

// // let xss = 10
// // let yss = 20

// // xss = xss+yss
// // yss = xss-yss
// // xss = xss-yss
// // console.log(xss)
// // console.log(yss)


// const ste1 = new Set()
// console.log(ste1)

// let arr1 = [1,1,1,1,1,1,1,1,1]
// let ste2 = new Set(arr1)
// console.log(ste2)

// let lang = [
//   "english",
//   "hindi",
//   "marathi",
//   "english",
//   "chinese",
//   "marathi",
//   "english"
// ]

// let ste3 = new Set(lang)
// console.log(ste3)

// for (const i of ste3){
//   console.log(i)

// }

// let comparr = ["google", "amazon", "microsoft", "netflix", "facebook"];
// let comset = new Set()

// for (let company of comparr){
//   comset.add(company)
// }
// console.log(comset)

// comset.add("oracle")
// console.log(comset)
// comset.delete("amazon")
// console.log(comset)

// comset.clear()
// console.log(comset)

// let arr2 = [1, 2, 3, 4];
// let arr3 = [4, 5, 6, 7, 8];

// let arr4 = [...arr2,...arr3]
// console.log(arr4)

// setofnum1 = new Set(arr4);
// console.log(setofnum1)


// let x = [1, 2, 3, 4, 5, 6, 6, 4];
// let y = [5, 6, 7, 8, 9, 10, 6, 5];
// let setx = new Set(x)
// let sety = new Set(y)
// console.log(setx)
// console.log(sety) 
// // let intersection = x.filter((el) => sety.has(el))
// // let inset = new Set(intersection)
// // console.log(inset)

// let intersection = x.filter((el) => sety.has(el))
// let inset = new Set(intersection)
// console.log(inset)

// let diff = x.filter((el) => !sety.has(el))
// console.log(diff)
// let diff1 = y.filter((el) => !setx.has(el))
// console.log(diff1)

// let diff3 = [...diff,...diff1]
// console.log(diff3)
// let diff4 = new Set(diff3)
// console.log(diff4)

// let countarr = [
//   ["indian", "hindi"],
//   ["usa", "english"],
//   ["germnay", "german"],
// ]

// let map1 = new Map(countarr)
// console.log(map1)


// let pattern = "akash"
// let regex = new RegExp(pattern)
// console.log(regex)

// let regex2 = /"akash"/gi
// console.log(regex2)

// let str = " i am Learning js and the topic in js is regex"
// let result = /learning/gi
// let output = result.test(str)
// console.log(output)
// // let str = " i am Learning js and the topic in js is regex";

// // let result = /learning/gi;

// // let output = result.test(str);
// // console.log(output);

// class details_data (){
//   constructor(fn,mn,ln,age){
//     this.fn = fn
//     this.mn = mn
//     this.ln = ln
//     this.age = age
//   }

// get getAge(){}
// }

// let my_data = new details_data("akash","manik","jadhav",26)
// console.log(my_data)

// function BankAccount(startbalance) {
//   let initalbalance = startbalance;

//   return {
//     deposit(amount) {
//       if (amount > 0) {
//         initalbalance += amount;
//         console.log(
//           ` your amount ${amount} has been deposited and your total balanace is ${initalbalance}`
//         );
//       }
//     },
//     withdraw(amount) {
//       if (amount > 0 && amount <= initalbalance) {
//         initalbalance -= amount;
//         console.log(
//           ` your amount ${amount} has been withdraw and your total balanace is ${initalbalance}`
//         );
//       }
//       else { 
//         console.log("insufficent funds")
//       }
//     },

//     checkbalance(){
//         console.log( ` your current balance is ${initalbalance}`)
//     }
//   };
// }

// function BankAccount(startbalance){
//   let initialbalance = startbalance
// return{
//   deposit(amount){
//     if (amount>0){
//       initialbalance+=amount
//       console.log(
//         `your ${amount} has been deposited and your total balance is ${initialbalance}`
//       )
//     }
//   },
//   withdraw(amount){
//     if (amount>0 && amount<=initialbalance){
//       initialbalance-=amount
//       console.log(`your amount ${amount} has been withdrawed and your total balance is ${initialbalance}`)
//     }
//     else {
//       console.log(`insufficient funds`)
//     }
//   },
//   checkbalance(){
//     console.log(`your current balance is ${initialbalance}`)
//   }
// }
// }
// const account1 = BankAccount(1000)
// account1.checkbalance()
// account1.deposit(1000)
// account1.checkbalance(

// )
// account1.withdraw(1000)

// let interval = setInterval(() => {
//   console.log("this will repeat after 3 secs");
// }, 3000);

// setTimeout(() => {
//   clearInterval(interval);
//   console.log("program has been ended after 10 secs");
// }, 10000);

let str1 = "akash"
let regex = new RegExp(str1)
console.log(regex)

let regex2 = /akash/gi
console.log(regex2)

let str2 = "i am Learning js and the topic is regex"
let result = /learning/gi
console.log(result)

let output = result.test(str2)
console.log(output)


let str3 = "my name is akash and my js email adress is Akash333.aj@gmail.com"
let result2 = /akash/gi
let output2 = result2.test(str3)

let len1 = str3.match(/email/gi).length
console.log(len1)

let arr1 = str3.split(" ")
let count = 0
console.log(arr1)
for (let i =0; i<arr1.length;i++){
  if (arr1[i].includes("js")){
count++
  }
}
console.log(count)


//for replace method 
let str4 =
  " i am learning Javascript 1 2 4 5 678 89 9 and i am also have hands on javaSCript \
 i would reccommend every one to learn JAVASCRIPT";
//console.log(str4.replaceAll("Javascript","python"))

let strrep = str4.replace(/javascript/gim,"python")
console.log(strrep)

console.log(str4.match(/\d+/gim))
let str5 = "this is regex session conducted on 8 of jan 2025 at 9:59 pm"

console.log(str5.match(/\d+/g))

let str7 =
  " i am learning Javascript 1 2 4 5 678 89 9 and i am also have hands on javaSCript \
 i would reccommend every one to learn JAVASCRIPT";
//by using loop
let vovel = 0
for (let i= 0;i<str7.length;i++){
  if (str7[i]==="a"||str7[i]==="e"||str7[i]==="i"||str7[i]==="o"||str7[i]==="u"){
    vovel++
  }
}
console.log(vovel)

let vov = str7.match(/[aeiou]/gim)
console.log(vov.length)

let vaild_pan = "SSSSP9922F"
let invaild_PAN = "SSSS1PPP5"

//let test_pan = /[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/i.test(invaild_PAN) // true 

//console.log(test_pan) //false

let testpan1 = /[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/gim.test(vaild_pan)
console.log(testpan1)


let numarr = [1, 1000, 100, 50, 20, 55, 65, 89, 999];

let sort1 = numarr.sort()
console.log(sort1)

let sort2 = numarr.sort((a,b) =>{
  return b - a
})
console.log(sort2)

let rev1 = numarr.reverse()
console.log("aa",rev1)

// function checkprime(array){
//   let Array1 = 
// }




// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// function getPrimes(arr) {
//     return arr.filter(isPrime);
// }
// const numbers = [1,   2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const primes = getPrimes(numbers);
// console.log(primes);
// // Output: [2, 3, 5, 7, 11]

function isPrime(num){
  if (num <= 1) return false;
  if (num === 2) return false;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num);i += 2){
    if (num % i ===0) return false;
  }
  return true
}
function getPrimes(arr){
  return arr.filter(isPrime)
}

let arr2 = [10009,11,10007,4,45,5,5,5,5,5,5,55,5,,5,6,6,7,3,5,5,,,101,102,103,104,105]

console.log(getPrimes(arr2))


let lines =7
for (let i = 1; i<=lines; i++){
  let spaces = " ".repeat(lines-i)
  let repeat = "#".repeat(2*i-1)
  console.log(spaces+repeat)
}
for(let i = lines-1; i>=1; i--){
  let spaces = " ".repeat(lines-i)
  let repeat = "#".repeat(2*i-1)
  console.log(spaces+repeat)
}
let linee = 10
for (let i = 1; i<=linee; i++ ){
  let spaces = " ".repeat(linee-i)
  let star = "*".repeat(2*i-1)
  console.log(spaces+star)
}
for (let i = linee-1; i>=1 ; i--){
  let spaces = " ".repeat(linee-i)
  let star = "*".repeat(2*i-1)
  console.log(spaces+star)
}

console.log("-----------------------------------------")

let Marray = ["siddhant", "arjun", "gadakh", 26, 7020400749];

Marray.push("male")
console.log(Marray)

Marray.unshift("MR")
console.log(Marray)

Marray.pop()
console.log(Marray)

Marray.shift()
console.log(Marray)

// let splicedArr = Marray.splice(0,3)
// console.log(splicedArr)

// console.log(Marray)

let slicedArr = Marray.splice(0,3)
console.log(slicedArr)

console.log(Marray)

// adding value in anypostion in array using splice

let carr = [0, 1, 2, 4];

carr.splice(3,0,3)
console.log(carr)

//6 METHOD sort() --> this method will alphabetically sort your array

let arral = ["banana", "apple", "mango", "watermleon"];

let sortedarr = arral.sort()
console.log(sortedarr)


let numarr1 = [1, 1000, 100, 50, 20, 55, 65, 89, 999];

let sortedNum = numarr1.sort()
console.log(sortedNum)

let clearSort = numarr1.sort((a,b)=>{return a - b})
console.log(clearSort)

let revSot = numarr1.sort((a,b)=>{return b-a})
console.log(revSot)


let arral1 = ["banana", "apple", "mango", "watermleon"];
arral1.reverse()
console.log(arral1)

console.log(arral1.includes("banana"))

console.log(arral1.indexOf("banana"))

let strarr = sortedarr.join("---")
console.log(strarr)

let nu = [1, 2, 3];
let num = [4, 5, 6];
let numb = [7, 8, 9];


let combine1 = nu.concat(num,numb)
console.log(combine1)

let mixedarr = [1, 2, 3, ["qwer", ["ertyu"], "uhbvc"], [true, false]]
let solvearr = mixedarr.flat(Infinity)
console.log(solvearr)

let numarr12 = [1 , 1000,100,50,20,55,65,89,999]

let mxNum = Math.max(...numarr12)
console.log(mxNum)

let minNum = Math.min(...numarr12)
console.log(minNum)

console.log(...sortedarr)

//loops in array
let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(larr.length)

for (let i = 0; i<larr.length; i++){
  console.log(larr[i])
}

//add 3 in arr
let add3arr = []
for (let i = 0;i<larr.length;i++){
add3arr.push(larr[i]+3)
}
console.log(add3arr)


let filterarr = []

for (let i = 0; i<larr.length;i++){
  if (larr[i]>=5){
    filterarr.push(larr[i])

  }
}
console.log(filterarr)

let qarr = [100, 50, 1000, 3000, 4000, 5000, 10000, 55, 66, 788, 999];

let sum1 = 0
for (let i = 0; i<qarr.length;i++){
  sum1 =sum1 + qarr[i]
}
console.log(sum1)

//for odd and even

let mixnum = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let odd = []
let even = []
for (let i = 0; i<mixnum.length;i++){
  if (mixnum[i]%2===0){
    even.push(mixnum[i])
  }
  else{
    odd.push(mixnum[i])
  }
}

console.log(odd)
console.log(even)


let names = ["siddhant", "amol", "vaibhav", "shree", 0, "arjun", "amal"];
// output should --> every element should in captial
// all the names that start with a should be in anew array

let capname = []

for (let i = 0;i<names.length;i++){
if (typeof names[i] === "string"){
  let cap = names[i].toUpperCase()
  capname.push(cap)
}
}
console.log(capname)
let namea = []
for (let i = 0; i < capname.length; i++){
  if (capname[i].startsWith("A")){
    namea.push(capname[i])
  }
}
console.log(namea)

let num3 = [2, 8, 7, 3, 35, 58, 69, 34567, 367, 2, 3, 4, 5, 67, 8, 9, 0];
let add5 = num3.map((el,index,arr) => {
  return el + 5
})
console.log(add5)

let add10 = num3.map((el,index,arr) => {
  return el + 10
})

console.log(add10)


let names1 = ["siddhant", "amol", "vaibhav", "shree", "arjun", "amal"];

let named = names1.map((el,index,arr) => {
  return el.toUpperCase()
})
console.log(named)


let namef = named.filter((el,index,arr) => {
  return el.startsWith("A")
})
console.log(namef)


let num_mix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_num = num_mix.filter((el,index,arr) => {
  return el%2 ===0
})
console.log(even_num)

let num_1_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let sumof = num_1_arr.reduce((acc,el,index,arr) => {
  return el + acc
},0)
console.log(sumof)

let arr_11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let check = arr_11.some((el,index,arr) => {
  return el>5
})
console.log(check)

let ev = arr_11.every((el,index,arr) => {
  return el>100
})
console.log(ev)

let numarr2 = [1, "Vaibhav","siddhant","amol",1000, 100, 50, 20, 55, 65, 89, 999];
let fname = []
let fnum = []

for (let i = 0; i<numarr2.length;i++){
  if (typeof numarr2[i]==="string"){
let cap = numarr2[i].toUpperCase()
fname.push(cap)
  }
  else{
    fnum.push(numarr2[i])
  }
}

console.log(fname)
console.log(fnum)

let srtn = fname.sort()
let srtnum = fnum.sort((a,b) => {return a-b})
let finalArr = srtn.concat(srtnum)
console.log(finalArr)



//object

let Mahindra_3x0 = {
  //key      : value
  modelName: "AX5",
  exShowroomPrice: 1300000,
  color: ["white", "yellow", "red", "black ", "green "],
  make: 2025,
  isAvailable: true,
};

console.log(Mahindra_3x0.make)

console.log(Mahindra_3x0.isAvailable)
console.log(Mahindra_3x0["isAvailable"])

Mahindra_3x0.make = '2026'
console.log(Mahindra_3x0)

Mahindra_3x0["make"] = 2027
console.log(Mahindra_3x0)


delete Mahindra_3x0.isAvailable
console.log(Mahindra_3x0)

delete Mahindra_3x0["make"]
console.log(Mahindra_3x0)

Mahindra_3x0.engineWarrenty = "1 Year"
console.log(Mahindra_3x0)

Mahindra_3x0.make  = "2025"
console.log(Mahindra_3x0)

Mahindra_3x0["extendWarranty"] = "1 year";
console.log(Mahindra_3x0);

Mahindra_3x0.color[0] = "pink"
console.log(Mahindra_3x0)

Mahindra_3x0.color.pop()
console.log(Mahindra_3x0)

for (let key in Mahindra_3x0){
  console.log(`${key} == ${Mahindra_3x0[key]}`)
}

let car1 = Object.assign({},Mahindra_3x0)
console.log(car1)

car1.modelName = "AX7"
console.log(car1)
console.log(Mahindra_3x0);

let keyVal = Object.keys(car1)
console.log(keyVal)

let entVal = Object.entries(car1)
console.log(entVal)

let vVal = Object.values(car1)
console.log(vVal)

console.log(car1.hasOwnProperty("Mileage"))

const profiles = [
  {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,
    experience: 6,
    skills: ["TypeScript", "CI/CD"],
    position: "Automation Tester",
  },
  {
    firstName: "Rohan",
    lastName: "Joshi",
    age: 29,
    experience: 11,
    skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
    position: "Technical Lead",
  },
  {
    firstName: "Vihaan",
    lastName: "Deshmukh",
    age: 32,
    experience: 1,
    skills: ["Python", "TypeScript"],
    position: "Software Engineer",
  },
  {
    firstName: "Ishaan",
    lastName: "Pandey",
    age: 31,
    experience: 14,
    skills: ["Python", "Cypress"],
    position: "Systems Engineer",
  },
  {
    firstName: "Ishaan",
    lastName: "Deshmukh",
    age: 25,
    experience: 1,
    skills: ["Java", "Playwright", "JavaScript", "SQL"],
    position: "Systems Engineer",
  },
  {
    firstName: "Rohan",
    lastName: "Joshi",
    age: 33,
    experience: 3,
    skills: ["JavaScript", "Java", "Docker", "TypeScript"],
    position: "Full-Stack Developer",
  },
  {
    firstName: "Pranav",
    lastName: "Joshi",
    age: 24,
    experience: 2,
    skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
    position: "Data Analyst",
  },
  {
    firstName: "Rohan",
    lastName: "Nayak",
    age: 24,
    experience: 10,
    skills: ["JavaScript", "GitHub Actions", "Playwright"],
    position: "Backend Developer",
  },
  {
    firstName: "Arjun",
    lastName: "Nayak",
    age: 36,
    experience: 4,
    skills: ["Java", "Playwright", "Docker"],
    position: "Systems Engineer",
  },
  {
    firstName: "Vikram",
    lastName: "Joshi",
    age: 34,
    experience: 1,
    skills: "poython",
    position: "Full-Stack Developer",
  },
];

profiles.forEach((el,index,arr) => {
  if (el.skills.includes("Cypress")){
    console.log(`${el.firstName} ${el.lastName}`)
  }
})

let above3 = profiles.filter((el,index,arr) => {
  return el.experience>5
})
console.log(above3)


//calculator function

function calculator (a,b) {
  console.log(a+b)
  console.log(a-b)
  console.log(a*b)
  console.log(a%b)
  console.log(a**b)
  console.log(a / b)


}

calculator(20,25)

calculator(1000,2000)

let arr = [1, 2, 3, 4, 5];

let num1 = arr[0];
let num2 = arr[1];
let num6 = arr[2];
let num4 = arr[3];
let num5 = arr[4];

console.log(num1, num2, num6, num4, num5);

//example of destructuring an array

let [number1, number2, number3, number4, number5] = arr;

console.log(number1, number2, number3, number4, number5);
let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [q, x, ...n] = moreNumbers;
console.log(q, x);
console.log(n);


let arr5 = [1,2,3,4,5,6,7,8,9]

console.log(...arr5)

let numarr123 =[...arr5]

console.log(numarr123)

let xs = 10
let yss=20
xs = xs ^ yss
yss = xs ^ yss
xs = xs ^ yss

console.log(xs)
console.log(yss)

// let pro = new Promise((resloves, rejected) => {
//   let successful = true;

//   if (successful === true) {
//     resloves("the promise has been fullfiled");
//   } else {
//     rejected(" the promise has been rejected ");
//   }
// })
//   .then((message) => {
//     // if the promise is successfull
//     console.log(message);
//   })
//   .catch((error) => {
//     // if the promise is rejected
//     console.log(error);
//   });


// 2 experssion type --> because the here the function is stored in a expression

// let fullname1 = function (firstname, lastname) {
//   return `${firstname} ${lastname}`;
// };

// console.log(fullname1("sid", "gadakh"));
let fullName = function (firstname, lastname) {
  return `${firstname} ${lastname}`
}

console.log(fullName("akash", "jadhav"))

let fullName1 = (firstname,lastname) => {
  return `${firstname} ${lastname}`
}

console.log(fullName1("akash","jadhav"))

function fullName2(first,last){

}

function PrintX() {
  let x = 100;
  console.log(x); //100
  x = 200;
  console.log(x);
}

// PrintX();
// let x = "sidhant";
// console.log(x); 
const pii = 3.1432;

function printpi() {
  const pii = 3.14;
  console.log(pii);
}

console.log(pii);
printpi();


var xx =10

console.log(xx)

function printxx(){
    console.log(xx)
}

printxx()