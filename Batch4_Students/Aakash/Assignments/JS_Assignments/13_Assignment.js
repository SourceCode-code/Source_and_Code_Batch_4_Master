//level 1
//1 Declare a function fullName and it print out your full name.
// function fullname(){
//     console.log("Akash Manik Jadhav")
// }
// fullname()

// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstname,middlename,lastname){
    return `${firstname} ${middlename} ${lastname}`
}
let name = fullName("Akash","Manik","Jadhav")
console.log(name)

// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function sumofNums(a,b){
    return console.log(a+b)
}
sumofNums(5,7)

// 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function Area(length,width){
    return console.log(length*width)
}
Area(5,10)
//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter(length,width){
    return 2*(length+width)
}
let recTangle = perimeter(10,20)
console.log(recTangle)

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volume(length,width,height){
    return length*width*height
}
let prism1 = volume(10,20,30)
console.log(prism1)

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const pIi = 3.14
function areaOfcircle(pIi,r){
    return pIi*r**2
}
let areaC = areaOfcircle(pIi,10)
console.log(areaC)

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumFerence(pIi,r){
    return 2*pIi*r
}
let circumF = circumFerence(pIi,20)
console.log(circumF)

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(a,b){
    return a/b
}
let density1 = density(100,20)
console.log(density1)

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time){
    return distance/time
}
let speedOfobject = speed(150,5)
console.log(speedOfobject)

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const gravity = 9.8
function weight(mass, gravity) {
    return mass * gravity
}
let weight1 = weight(100, gravity)
console.log(weight1)

//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function temperaTure (oc){
return (oc * 9/5) + 32
}
let oF = temperaTure(55)
console.log(oF)

//13 Body mass index(BMI) is calculated as follows:
//  bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//  BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more
function bmi(w,h){
 let bmi1 =  w / (h*h)
 console.log(bmi1)
 if (bmi1<18.5){
    console.log("underweight")
 }
 else if(bmi1>=18.5&&bmi1<=24.99){
    console.log("Normal Weight")
 }
 else if (bmi1>=25&&bmi1<=29.9){
    console.log("Overweight")
 }
 else{
    console.log("obese")
 }
}
bmi(85,2)

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let date = new Date()
let month = date.getMonth()+1
// console.log(month)
function checkseason(month){
    if (month >= 3 && month <= 5){
        console.log("Spring")
    }
    else if(month >= 6 && month <= 8){
        console.log("Summer")
    }
    else if (month >= 9 && month <= 11){
        console.log("Autumn")
    }
    else if(month <= 12 && month <= 2) {
        console.log("Winter")
    }
    else{
        console.log("invalid data")
    }
}
checkseason(3)

//15 Math.max returns its largest argument. 
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(a,b,c){
    switch (true){
        case a>b && a>c : console.log("a is largest")
        break
        case b>a && b>c : console.log("b is largest")
        break
        case c>a && c>b : console.log("c is largest")
        break
        default: console.log("enter correct data ")
    }
    
}
findMax(0,10,5)
findMax(0, -10, -2)

// 1 Linear equation is calculated as follows: ax + by + c = 0.
//  Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation(a , b , c, x, y){
//     return a*x+b*y+c 
// }
// console.log(solveLinEquation(1,2,3,4,5))

// 2 Quadratic equation is calculated as follows:
//  ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation,
//  solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// function solveQuadratic(a,b,c,x){
//     return (a*x*2)+(b*x)+c 
// }
// console.log(solveQuadratic())

// 3 Declare a function name printArray.
//  It takes array as a parameter and it prints out each value of the array.
function printArray(xyz) {
    for (let i = 0; i < xyz.length; i++) {
        console.log(xyz[i]);
    }
}

let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
printArray(moreNumbers)

// 4 Write a function name showDateTime which shows time in this format:
//  08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

function showDatetime(){
let date = new Date()
let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()
let hours = date.getHours()
let mins = date.getMinutes()
let dayformat = day < 10 ? `0${day}` : day
let monthformat = month < 10 ? `0${month}` : month
let hourformat = hours < 10 ? `0${hours}` : hours
let minformat = mins < 10 ? `0${mins}` : mins
console.log(`${dayformat}/${monthformat}/${year} ${hourformat}:${minformat}`)
}

showDatetime()


// 5 Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues(x, y) {
    let a = x
    x = y
    y = a
    console.log(x, y)
}

swapValues(3, 4)

// 6 Declare a function name reverseArray. 
// It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']