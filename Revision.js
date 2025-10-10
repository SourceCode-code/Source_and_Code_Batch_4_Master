//Math.floor(Math.random()*(max-min +1))+min

//Dice Roll
/*let dice1= Math.floor(Math.random()*(6-1+1))+1
let dice2= Math.floor(Math.random()*(6-1+1))+1
let total = (dice1+dice2);

console.log("dice1=",dice1);
console.log("dice2=",dice2);
console.log("total=", total);

.toFixed
let min =5.5
let max= 9.3
let randomVal= Math.random()*(9.3-5.5+1)+5.5
console.log("Number=", randomVal.toFixed(2))
if want last 2 digits only after decimal number use .toFixed()


 let firstName= "Ankita", middleName="Hanumant", lastName="Fartade"
  let fullName= firstName+ " " +middleName+" " + lastName+" "

 console.log(fullName) */


//Primitive Data Types

//Number:- It stores all numeric values like integers, decimanls,infinity and Nan (Not a Number)

//Integers-
/*let weight = 0
console.log("weight=", weight)
console.log(typeof weight)

//Decimal-
let pi= 1.67
console.log("pi=", pi)
console.log(typeof pi)


//NaN -
 let wrongName = "Ank"-2 //When i add str and number it gives ouput as Ank2 
                         // but when i use other arithmetic operation it gives output as NaN
 console.log(wrongName)
console.log(typeof wrongName)

//infinity-
 let Result = 10/0 //infinity
 console.log("Result=", Result)
 console.log(typeof Result)*/

//String:- It is used to store texts or characters inside quotes.
// It can use single quote'', double quote"" and backticks``(back ticks allows string+variable inside)

/*let selfName="Ankita"
let city='Pune'
let greeting= `Hello, my name is ${selfName}.`
console.log("selfName=", selfName)
console.log("city=", city)
console.log("greeting=", greeting)*/

//Boolean:- It represents true or false used in conditions and logics

/*let isGirl=true
let isWorking =false
console.log("isGirl=",isGirl)
console.log("isWorking=", isWorking)*/

//Undefined:- A variable declared but not assigned any vales get undifined
//let a
//console.log("a=",a)

//Null :-It represents no values or null and 
// it is different from undifined because null is assigned intentonally
//let data=null
//console.log("data=", data)


//Arithmetic Opeartion-
 
/*let a=200
let b=2
console.log("Add=",a+b) 
console.log("Sub=",a-b)  
console.log("Multi+",a*b)
console.log("Div=",a/b)
console.log("Module=",a%b)
console.log("Expo", a**b)*/

//sum of numbers from 1 to 20
//sum = n * (n + 1) / 2

/*let n=20
let sum= 20*(20+1)/2
console.log("sum=", sum)*/

//sum of numbers from 50 to 150

/*let n1=50
let n2= 150
let sum150= n1*(n1+1)/2
let sum49= n2*(n2+1)/2
let result= sum150-sum49
console.log ("sum from 50 to 150=", result) */

//Declare variables of all primitive datatypes 
// (string, number, boolean, undefined, null,) and print their type using typeof.

/*let lName= 'Fartade'
console.log("lName=",typeof lName)

let mobileNo= 9876543210
console.log("mobileNo=",typeof mobileNo)

let isStudent= true
console.log("isStudent=",typeof isStudent)

let empty= null
console.log("empty=", typeof empty)

let x
console.log(typeof x)*/


//Write a program to check if a given variable is a string or number.
/*let x= 'AnkitaHanumantFartade'
console.log (typeof x)

let num= 42.87
console.log(typeof num)*/


//METHODS FOR NUMBER DATA TYPES

//Math.floor()- Round a number down to nearest integer (always goes lower)

/*let num= 176653.986
console.log(Math.floor(num))*/

//Math.round()- Round a number to the nearest integer
//if the decimanl part is greater than or equal to 0.5 then it will round up
//if deminal part is smaller than 0.5 then it will round down

/*let num1= 87.672358176386153871
console.log(num1.toFixed(4))*/


// variable- it is used to declare a varibale that can be reassign and re declared
 /*var name1 = "SourceCode"
 console.log("name=", name1)
 name1 = "Source&Code"
 console.log(name1)



 //generate a random mobile number 
 console.log(Math.floor(Math.random() * 9999999999));


 //Even or odd
/*let num = 15
 if (num % 2 ===0)
   console.log("even")
else console.log("odd")

let num2= 7
if (num2 %2 ===0)
   console.log("even")
else console.log("odd")*/


//write a program to get any 2 letters form the string 

/*let str10 ="qwertyuIOplkjhgfdsazxcvbnm "
let newstr = str.substring(0,2)
console.log(newstr)*/


// Q39. Declare a variable age = 25. Print its data type using typeof.

let age = 25
console.log(typeof age)

// Q40. Create a string "JavaScript is Fun". Find its length.

let str = "JavaScript is Fun"
console.log(str.length)

// Q41. From the string "OpenAI GPT", print the first character and last character.
let str1= "OpenAI GPT"
console.log(str1.substring(0,1))
console.log(str1.substring(str1.length-1))


// Q42. Convert "openai" to uppercase and "HELLO" to lowercase.
let str2= "openai"
console.log(str2.toUpperCase())
let str3="HELLO"
console.log(str3.toLowerCase())

// Q43. Use method chaining: Take "  JavaScript  ", trim the spaces, convert to uppercase, and print length.
let str11= "  JavaScript  "
let newstr = str11.trim().toUpperCase()
console.log(newstr.length)

// Q44. Extract "Script" from "JavaScript" using substring().
let stra= "JavaScript" 
let extractNew = stra.substring(4)
console.log(extractNew)

// Q45. Extract "ava" from "JavaScript" using substr().
let straa = "JavaScript"
let newStr= straa.substr(1,3)
console.log(newStr)

// Q46. Split the string "red,green,blue,yellow" by commas into an array.
 let strab= "red,green,blue,yellow"
 let colors = strab.split(",")
 console.log(colors)

 //Split the string "red,green,blue,yellow" by commas into an array in seperate line
 let straab= "red,green,blue,yellow"
 console.log(straab.split(",").join("\n"))

// Q47. Split the string "hello world" into characters.
let strabb= "hello world"
console.log(strabb.split(""))

// Q48. Replace "World" with "JavaScript" in "Hello World".
let str123= "Hello World"
let replaceNew= str123.replace("World", "JavaScript")
console.log(replaceNew)

// Q49. Concatenate two strings: "Good" and "Morning" using both + operator and concat() method.



// Q50. Declare an array of 5 colors and print the array length.

// Q51. Access the first and last element of the array ["apple", "banana", "cherry", "date"].

// Q52. Add "grape" to the array using push() and remove last element using pop().

// Q53. Add "mango" at the beginning of an array using unshift() and remove first element using shift().

// Q54. Join the array ["This", "is", "JS"] into a single string separated by spaces.

// Q55. Use indexOf() to find the position of "banana" in ["apple", "banana", "cherry"].

// Q56. Generate a random number between 1 and 50.

// Q57. Generate a random 6-digit OTP using Math.random().

// Q58. Generate a random number between 500 and 1000.


//10-7-2025
// conversion of number to string using concatenation to treate a number as text & 
//this method is useful when we want to join a number with string
let num1= 543
let num2= "2425"
console.log(num1+"num2")

//String()
let num11=765433
let str111= String(num11)
console.log(typeof str111)

//tostring(()
let num12= a2652
let str1231= num12.tostring()
console.log(typeof str1231)

