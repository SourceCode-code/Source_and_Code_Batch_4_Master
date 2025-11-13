/*//Remove Blank screen from given string
let str = " he llo m y name is sidd hant gadak h and m y age is 2 6 "
let output= str.
console.log(output)
*/
//2) slove  and print pattern 
/*let str = "tomorrow"
let out= str.replace(/[o]/g,"#")
console.log(out)
*/
console.log("-----------------------------------------------")
/*//console.log(Math.random()*10)
let RandomNumber = Math.random()*100  // 0 -- 100.99
//console.log(RandomNumber); 
// generic fromula to generate random number between any two numbers
// (Math.floor(Math.random() * (max - min + 1)) + min)
let number=Math.floor(Math.random()*(10000-1000)+1*9999)//Add *9999 expected digit outpute of randome numbers
console.log(number)
console.log("-----------------------------------------------")
let numToRound = 94;
 let roundedNum =Math.round(numToRound/5)
 console.log(numToRound/5)
// // 94 /5 = 18.8 --> 19 -->18
console.log(Math.round(numToRound/5)) //19*5 =95

//console.log(roundedNum*5) 
console.log("-------------------------------------------------")
let adhar4num1 =Math.floor(Math.random()*(9999-1000+1)+1000)
console.log(adhar4num1)
console.log("----------------------Number---------------------------")
 let randomNum1 = Math.round(Math.random()*100 /10)*10
console.log(randomNum1);*/
/*
let str4 = "Uday Narayan Patil"
let newstr1 = str4.substr(0, 7)
console.log(newstr1)
let newstr2 = str4.substring(0,7)
console.log("-------------------------------------")
console.log(newstr2)*/
/*
let Marray = ["siddhant", "arjun", "gadakh",26,7020400749]
let arrsplice = Marray.splice(0,3)
console.log(arrsplice) 
console.log(Marray)
console.log("-------------------------------------")
let bArray = [ 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]
let arrslice = bArray.slice(0,3)

console.log(arrslice)
console.log(bArray)


let Marray = ["siddhant", "arjun", "gadakh",26,7020400749]
let arrslice = Marray.slice(0,1)
console.log(arrslice) 
console.log(Marray)
console.log("-------------------------------------")
let bArray = [ 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]
let arrSPlice = bArray.splice(0,1)

console.log(arrSPlice)
console.log(bArray)

let carr = [1,2,3,4,5]

carr.splice(1,0,8,9,10)
console.log(carr) //[ 0, 1, 2, 3, 4 ]*/


// Substr()    -->Substr is method which get a part of string (starting index,numbr of characters )
/*
let str4 = "Siddhant Arjun Gadakh"
let newstr1 = str4.substr(0, 8)
console.log(newstr1)
console.log("-------------------------------------")

// substring   -->subString is method which get a part of string (starting index,ending index) (it will not include the 
// ending index)

// this will help to retrun certain part of string 

let newstr2 = str4.substring(0, 7)
console.log(newstr2)*/

//5 METHOD splice() --> Used to add or remove a value at any index of the array 

// example --> splice( starting index , number character) == substr()
//let Marray = ["uday", "narayan", "Patil",26,9841]
//let arrsplice = Marray.splice(0,3)
//let brrsplice = Marray.slice(0,3)
//console.log("slplice OutPut",brrsplice) //[ 'siddhant', 'arjun', 'gadakh' ]
//console.log("Original Array",Marray)
/*
// Get Todats date
let date = new Date()
console.log(date)// 2025-11-11T01:44:45.304Z

// Get current Year
let year = new Date().getFullYear()
console.log(year)// 2025

//Get the current Day for ex 0=Sunday and 6=Saturday
let cDay = new Date().getDay()
console.log(cDay)// 2
*/
//Display the date in DD/MM/YYYY format
let date1 = new Date()
let DD = date1.getDate()
console.log(DD)

let MM = date1.getMonth()
console.log(MM)

let YYYY = date1.getFullYear()
console.log(YYYY)

console.log(`DD/MM/YYYY Format:${DD}/${MM}/${YYYY}`)

