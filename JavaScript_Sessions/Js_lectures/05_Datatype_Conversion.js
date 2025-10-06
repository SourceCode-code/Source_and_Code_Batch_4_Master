// Datatype in js 
// conversion of data form number to string and vice versa

// 1 Number to String 

let num1 =123
let num2 ="456"
let num3 ="789"

console.log( (num1+num2+num3)) //123456789


// conversion of number to string 

let num4 = 123
//1 String() --> used to convert number to string
let str1 =String(num4)
// console.log(str1)
console.log(typeof str1)

//2 toString()--> use to convert number to string 

let str2 =num4.toString()
// console.log(str2)
console.log(typeof str2)


// 2 string to number 

let str3 = "456"

//a using method parseInt()--> convert string into integer number 

let num5= parseInt(str3)
console.log(num5)
console.log(typeof num5)


//b using method parseFloat()--> convert string into floating number 

let str4 = "456.123"

let num6 = parseFloat(str4)
console.log(num6)
console.log(typeof num6)

//c Number()-->converts string into numbers 

let str5="789.963"

let num7 = Number(str5)
console.log(num7)
console.log(typeof num7)


// question 

console.log("5"+5) //55    
console.log("5"+"5") // 55
console.log(5-"5")  //0
console.log("5"-5) //0
console.log("5"*5)//25
console.log("10"-true) //9  ( true = 1 & false =0)
console.log("10"-false)//10
console.log("10"+true)
console.log("10"+false)

// for + operator --> if the data type of any one operand is string it will perform concatenation ( for addition both values need to numbers )
// for -,*,/,% opertor --> it knows the datatype of both are different but it will automaticaly convert the string into number 
// and then perform operation


