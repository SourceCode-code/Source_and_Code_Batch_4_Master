
// Excersise level.1
// 1. Declare a function fullName and it print out your full name.

function fullName() {
  console.log("Indrayani Suryawanshi");
}
fullName()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, middleName, lastName) {
  return firstName + " " + middleName + " " + lastName
}

console.log(fullName("Indrayani", "Prataprao", "Suryawanshi"));


// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  return a + b
}
let result = addNumbers(5, 10)
console.log(result)

// we want more than two parametre or unlimited parametres sum then........

function getSum(...numbers) {
  let total = 0
  for (let n of numbers) {
    total += n
  }
  return total
}

console.log(getSum(1, 2, 2, 6, 7, 9))
console.log(getSum(4, 7, 9, 8))

// 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  return length * width
}

let area = areaOfRectangle(10, 5)
console.log(area)

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width)
}

let perimeter = perimeterOfRectangle(10, 5)
console.log(perimeter)

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  return length * width * height
}

let volume = volumeOfRectPrism(5, 4, 3)
console.log(volume)

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius) {
  return Math.PI * radius * radius
}
let r = 5
console.log(areaOfCircle(r))

// Math.PI = value of pia=3.14

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
  return 2 * Math.PI * radius
}
let r1 = 7
console.log(circumOfCircle(7))

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function calculatesDensity(mass, volume) {
  return mass / volume
}

console.log(calculatesDensity(10, 2))

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(distance, time) {
  return distance / time
}

console.log(calculateSpeed(100, 5))
//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculatesWeight(mass, gravity = 9.8) {
  return mass * gravity
}
console.log(calculatesWeight(10))
console.log(calculatesWeight(10, 9.8))


// mass of the object is kg
// gravity of earth always  = 9.8 m/s^2
// basically used in physics problem  and calculation


//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oc) {
  return (oc * 9 / 5) + 32
}

let celsius = 25
let fahrenheit = convertCelsiusToFahrenheit(celsius)
console.log(fahrenheit)

// formula
//fahrenheit = (celsius*9/5)+32

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

/*The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/

function calculatesBMI(weight, height) {
  const bmi = weight / (height * height)

  if (bmi < 18.5) {
    return `BMI: ${bmi.toFixed(2)}- Underweight`
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return `BMI: ${bmi.toFixed(2)} - Normal weight`
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    return `BMI: ${bmi.toFixed(20)} - Overweight`
  }
  else {
    return `BMI: ${bmi.toFixed(2)} -Obese`
  }

}

console.log(calculatesBMI(55, 1.65))
console.log(calculatesBMI(68, 1.70))
console.log(calculatesBMI(80, 1.70))
console.log(calculatesBMI(95, 1.70))

/*
wight in kg
height in meters
tofixed(2) shows BMI up to 2 decimal places
same logic for men and women (20+years)*/


//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

/*
Autumn:september,october,nov
winter:dec,jan,feb
spring:march,april,may
summer: june,july,Aug*/

/*function checkSeason(month){
  month = month.toLowerCase()
  
}
 if (month === "September" || month === "October" || month === "November") {
    return "Autumn"
}
else if (month === "December" || month === "January" || month === "February") {
    return " Winter"
}
else if (month === "March" || month === "April" || month ==="May") {
    return" Spring"
}
else if (month === "June" || month === "July" || month === "Augst") {
    return"Summer"
}
else {
    return"invalid month"
}


console.log(checkSeason("March"))
console.log(checkSeason("July"))
console.log(checkSeason("December"))
console.log(checkSeason("November"))*/

//15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

/*console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0 */

function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a
  }
  else if (b >= a && b >= c) {
    return b
  }
  else {
    return c
  }
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

// using loop

function findMax(a, b, c) {
  let max = a          //assume first value is maximum
  let numbers = [a, b, c] // put values in an array

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }
  return max
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

/* loopps check each number one by one\
if the number is  greater than max update max\
after loops ends max contains largest value.*/


//Exercises: Level 2


//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printArray([10, 20, 30, 40])

/*for loops runs from index 0 to arr.length-1\
console.log(arr[i]) prints each value one by one */


//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

//showDateTime()
//08/01/2020 04:08

function showDateTime() {
  let date = new Date()
  let curDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  console.log(curDate)

  let chour = date.getHours()
  let cmin = date.getMinutes()
  let curindtime = `${chour}:${cmin}`
  console.log(curindtime)
}

showDateTime()


//5 Declare a function name swapValues. This function swaps value of x to y.

//swapValues(3, 4) // x => 4, y=>3
//swapValues(4, 5) // x = 5, y = 4

function swapValues(x, y) {
  x = x + y
  y = x - y
  x = x - y
  console.log("x=", x, "& y = ", y)
}

swapValues(3, 4)
swapValues(4, 5)


//6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

//console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
//console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']


function reverseArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[arr.length - 1 - i] = arr[i]
  }
  return result
}

console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))


/* reverse array loop explain
1. start loop from  index 0
2.for each element i calculate its reverse position using arr.length-1-i
3. this places the first at the lasr=tindex and second as second ;last and so on
4. this way the array is reverse without using buit in  method.*/


//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  return arr.map(names => names.toUpperCase())
}

console.log(capitalizeArray(['vivaan', 'chiku', 'samu', 'vipula']))

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item) {
  let arr = []
  arr.push(item)
  return arr
}
console.log(addItem("apple"))

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

let arr = [10, 20, 30, 40]

function removeItem(index) {

  arr.splice(index, 1)
  return arr
}
console.log(removeItem(1))
console.log(removeItem(0))

/*
* splice(index,1)
  * index -- position to remove
  * 1-- remove one element
* the original array changes and updated arrayis returned. */

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum

}

console.log(sumOfNumbers(5))
console.log(sumOfNumbers(10))
/*15 ---->(1+2+3+4+5) = 15
 10------> (1+2+3+4+5+6+7+8+9+10) = 55 */

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i
    }
  }
  return sum
}

console.log(sumOfOdds(10))//(1+3+5+7+9)--->25
console.log(sumOfOdds(7))//(1+3+5+7)--->16

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(sumOfEven(10))//(2+4+6+8+10) = 30
console.log(sumOfEven(8))// (2+4+6+8)= 20
//13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

//evensAndOdds(100);
//The number of odds are 50.
//The number of evens are 51.

function evensAndOdds(num) {
  let evenCount = 0
  let oddCount = 0

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evenCount++
    }
    else {
      oddCount++
    }
  }
  console.log("The number of ddds are", oddCount)
  console.log("The number of even are", evenCount)

}
evensAndOdds(100)
/* loops runs from 0 to 100
i % 2 === 0 even number(includes 0)
total numbers = 101
* even--->51-->(0,2,4,...,100)
* odd---->50-->(1,3,5,..,99) */

//14 Write a function which takes any number of arguments and return the sum of the arguments

//sum(1, 2, 3) // -> 6
//sum(1, 2, 3, 4) // -> 10

function sum() {

  let total = 0

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))

// using rest parameter

function Sum(...numbers) {
  let total = 0

  for (let num of numbers) {
    total += num
  }
  return total
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))

//15 Writ a function which generates a randomUserIp.
function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}. ${Math.floor(Math.random() * 256)}. ${Math.floor(Math.random() * 256)}. ${Math.floor(Math.random() * 256)}`

}
console.log(randomUserIp())

/* ipv4 adress has 4 numbers
each number range from 0to255
t0tal values 256 including 0
math.random*256 converts range 0-->255.999
all formula gives valid range for one ip octet
octet = 8bits=2^8=256 */

//16 Write a function which generates a randomMacAddress

function randomMacAddress() {
  let mac = []

  for (let i = 0; i < 6; i++) {
    let hex = Math.floor(Math.random() * 256).toString(16)
    mac.push(hex.padStart(2, "0"))
  }
  return mac.join(":").toUpperCase()
}

console.log(randomMacAddress())

/* mac address has 6 bytes
each byte = 2 hexadecimal characters (0-9)(A-F)
total length 12 hex characters
tostring(16) converts to hexadecimal
padstart(2,"0") ensure 2 characters
  * : stndard mac seprator */

//17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
  return "⬜#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}
console.log(randomHexaNumberGenerator())

/* 16777215 is fix for random hexadecimal number generator */



//console.log(randomHexaNumberGenerator());
//'#ee33df


//18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

//console.log(userIdGenerator());
//41XTDbE

function userIdGenerator() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let id = " "
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    id += chars[randomIndex]

  }
  return id
}

console.log(userIdGenerator())


 //Exercises: Level 3

//1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

 /*userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr */

//2 Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator(){
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return (`${r},${g},${b}`)
}



console.log(rgbColorGenerator())


//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.




//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.

//5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

//6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

//7 Write a function generateColors which can generate any number of hexa or rgb colors.

/*console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)' */

//8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

//9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

//10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

//11 Call your function sum, it takes any number of arguments and it returns the sum.

//12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

//13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

//14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

/*console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'    */

//15  Write a function called isPrime, which checks if a number is prime number.

//16 Write a functions which checks if all items are unique in the array.

//17 Write a function which checks if all the items of the array are the same data type.

//18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

//19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

//sevenRandomNumbers()
//[(1, 4, 5, 7, 9, 8, 0)]

//20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

