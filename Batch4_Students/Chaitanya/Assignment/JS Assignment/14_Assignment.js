//1 Declare a function fullName and it print out your full name.
let fullName = 'chaitanya bhausheb kute'
console.log(fullName)

//2 Declare a function fullName and now it takes firstName, lastName
//  as a parameter and it returns your full - name.

function FullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log("chaitanya", "kute")

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(no1, no2) {
    return (no1 + no2)
}
console.log(addNumbers(100, 50))

//4. An area of a rectangle is calculated as follows: area = length x width.
//  Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    return (length * width)
}
console.log(areaOfRectangle(6, 4))

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
// Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    return (2 * (length + width))

}
console.log(perimeterOfRectangle(2, 4))

//6.  A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
// Write a function which calculates volumeOfRectPrism.

function volOfPrism(length, width, height) {
    return (length * width * height)
}
console.log(volOfPrism(2, 2, 2))

// 7.  Area of a circle is calculated as follows: area = π x r x r.
//  Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    return (3.14 * (r * r))
}
console.log(areaOfCircle(5))

//8.Circumference of a circle is calculated as follows: circumference = 2πr.
//  Write a function which calculates circumOfCircle

function circumference(r) {
    return (2 * 3.14 * r)
}
console.log(circumference(1))

//9.Density of a substance is calculated as follows:density= mass/volume.
//  Write a function which calculates density.
function density(mass, volume) {
    return (mass / volume)
}
console.log(density(10, 2))

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the 
//total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance, time) {
    return (distance / time)
}
console.log(speed(200, 10))

//11.  Weight of a substance is calculated as follows: weight = mass x gravity. 
// Write a function which calculates weight.


function weight(mass, gravity) {
    return (mass * gravity)
}
console.log(weight(200, 10))

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
//  Write a function which convert oC to oF convertCelsiusToFahrenheit.

function degtofar(degreecelcius) {
    return ((degreecelcius * 9 / 5) + 32)
}
console.log(degtofar(28))

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//  Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
/*The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/

function bmi(weight, height) {
    let bmicalculate = weight / (height * height);

    if (bmicalculate < 18.5) {
        return ('underweight')
    }
    else if (bmicalculate >= 18.5 && bmicalculate <= 24.9) {
        return ('normal weight')
    }
    else if (bmicalculate >= 25 && bmicalculate <= 29.9) {
        return ('over weight')
    }
    else {
        return ('obese')
    }
}
console.log(bmi(72,195))

//14. 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, 
// Winter, Spring or Summer.

function checkSeason (month){
      if (month==="october"||month==="november"||month==="december"||month ==="january") {
        return "Winter";
    }
    else if (month==="february"||month==="march"||month==="april"||month ==="may") {
        return "Summer";
    }
    else if (month==="june"||month==="july"||month==="august"||month ==="spetember") {
        return "Rainy";
    }
      else {
        return "Invalid month";
    }
}
console.log(checkSeason("march"));
console.log(checkSeason("july")); 
console.log(checkSeason("october"));

// 15.Math.max returns its largest argument. 
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
//console.log(findMax(0, 10, 5))

//console.log(findMax(0, -10, -2))



//Exercises: Level 2


// 1. Linear equation is calculated as follows: ax + by + c = 0.
//  Write a function which calculates value of a linear equation, solveLinEquation.

function lineEquation (a,b,c,x,y){
    return ((a*x)+(b*y)+c )
}
console.log(lineEquation(2,3,4,5,6))


//2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

/*console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}*/










