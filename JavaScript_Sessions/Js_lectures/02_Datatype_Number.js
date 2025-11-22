//primitive data type -- primitive are simple data types that cannot be changed

// 1 Number: - // represents numeric values (e.g., 10, 3.14)  --( integers and floating ) 
// it inculdes both integers (-infinity to infity) and floating-point numbers (-infinty.infity to +infinty.infity )


// examples of numbers
let integerNumber = 42; // an integer   
let floatingNumber = 3.14; // a floating-point number

console.log(integerNumber)
console.log(typeof integerNumber)

// you can perfom arithmetic operations on numbers
// addtion (+)
// subtraction(-)
// multiplication(*)
// division(/)
// modulus (remainder)(%)

console.log(2+2) //4
console.log(10 - 5) //5
console.log(3 * 4)  //12
console.log(10 / 2) //5
console.log(10 % 3) // Output: 1 (remainder of 10 divided by 3) 

// every datatype has some methods and properties associated with it

// methods are used to perform operations on the data type
// properties are used to access information about the data type


// methods for number data type 
// conversion methods

// floating point to integer
// Math --> keyword in JavaScript that provides mathematical 

// 1 Math.floor() - rounds down to the nearest integer

// 10.00 --> 10.00 --> 10.99 -->11

let num1 = 10.99;
let roundedDown = Math.floor(num1);
console.log(roundedDown); // Output: 10

// to do in one line 

console.log(Math.floor(10.99))

// 2 Math.ceil() - rounds up to the nearest integer
let num2 = 10.01
let roundedUp = Math.ceil(num2)
console.log(roundedUp); // Output: 11


// 3 Math.round() - rounds to the nearest integer
// if the decimal part is 0.5 or greater (10.sometinhg  --> ifg something is greater 0.5), it rounds up; otherwise, it rounds down (10.00 -->10.05)

let num3 = 10.05;
let num4 = 10.99
let num5 = 10.00

console.log(Math.round(num3)) // 10
console.log(Math.round(num4)) //11
console.log(Math.round(num5)) //10

// Math.toFixed() - formats a number using fixed-point notation

let num6 = 10.123456789;

console.log(num6.toFixed(1)) // 10.1

console.log(num6.toFixed(2)) //10.12

console.log(num6.toFixed(3)) //10.123

// Math.random() - generates a random number between 0  and 1 -- > (0 , 0.9)

console.log(Math.random()); // Output: a random number between 0 and 1

// generate number between 0  to 100

let RandomNumber = Math.random()*100  // 0 -- 100.99
console.log(RandomNumber); // Output: a random number between 0 and 100.99

console.log(Math.floor(RandomNumber)-1); // Output: a random integer between 0 and 100

// incusive 0 and exclusive 100

// inculsive  or betwween 0 and 100 --> 0 -99

// exculsive --> 0- 100
console.log(Math.floor(RandomNumber)); 

// write a program to genrate a roll of a single die

// 1-6 
// minimum 1
// maximum 6

 let dieRoll = (Math.floor(Math.random()*6)+1)  //0-0.9   --> 0 -5.999

 console.log(dieRoll) 

// min -- 0.999 --> 1
// max 5.999-->6


// logical number questions 

// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

console.log(number.toFixed(2))



// generic fromula to generate random number between any two numbers
// (Math.floor(Math.random() * (max - min + 1)) + min)
// Math.floor(Math.random()*(max-min)+min)


// 10-20
 //max -min +!
 //20 - 10 ---> (lowest 10 +1  )+10

console.log(Math.floor(Math.random() * (20 - 10)) + 10)
//                        0.999 *11+10
// 20.099 -->20
//                        

//


// generate a random mobile number 

//992456790

console.log(Math.floor(Math.random()*9999999999))

//  -->  -10 to -20 
 
// 10 --> 20


console.log("-"+(Math.floor(Math.random()*(20-10+1))+10))




// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

// let numToRound = 94;
// let roundedNum =Math.round(numToRound/5)
// // 94 /5 = 18.8 --> 19 -->18
// console.log(Math.round(numToRound/5)) //19*5 =95

// console.log(roundedNum*5) 


// number/ 5 -->  number .point 

// 19*5 --> 95

// create a program to generate random 4 otp  (number )
// 1
//9999.999

//1000 --9999

let adhar4num1 =Math.floor(Math.random()*(9999-1000+1)+1000)
let adhar4num2 =Math.floor(Math.random()*(9999-1000+1)+1000)
let adhar4num3 =Math.floor(Math.random()*(9999-1000+1)+1000)
let adhar4num4 =Math.floor(Math.random()*(9999-1000+1)+1000)
// console.log(Math.floor(1000+Math.random()*9999))
// (Math.floor(Math.random() * (max - min + 1)) + min)

// generate a radmon adhar number---> 

console.log(adhar4num1 , adhar4num2,adhar4num3,adhar4num4)


// -----------------------------------------------------------------


//0-100 --> 10 --20 -30 - 40 - 50 


 let randomNum1 = Math.round(Math.random()*100 /10)*10
console.log(randomNum1);




// generate a random string in which we have 3 aplhabtes 2 numbers 1 symbol 

let aplhastr = "qwertyuiopasdfghjklzxcvbnm"
let symstr = "!@#$%^&*()_+"

let letter1 = Math.floor(Math.random()*(aplhastr.length))
let letter2 = Math.floor(Math.random()*(aplhastr.length))
let letter3= Math.floor(Math.random()*(aplhastr.length))

let strnum = Math.floor(Math.random()*(99-10)+10)
console.log(strnum)

let randsym = Math.floor(Math.random()*(symstr.length))

console.log(`${aplhastr[letter1]}${aplhastr[letter2]}${aplhastr[letter3]}${strnum}${symstr[randsym]}`)



let a = 'accdefghijk'
let b = '!@#$%*'
let num = (Math.floor(Math.random()*(9999-1000))+1000)

let a1 = Math.floor(Math.random()*(a.length))
let a2 = Math.floor(Math.random()*(a.length))
let a3 = Math.floor(Math.random()*(a.length))
let bsym = Math.floor(Math.random()*(b.length))
console.log(`${a[a1]}${a[a2]}${a[a3]}${b[bsym]}${num}`)