// condition -->

// when we have to make the decision based on conditions given we used conditional statement

/**
 * 1 if() -- used on single condition 
 * 2 if else() - used in either or  --> (ex ternary opertor)
 * 3 else if () - used for multiple conditions (more than 2 )
 * 4 switch case -- more latest( es6 updates) prefered
 */

//if() --> when you have a single condition to check you will use if

/**
 * syntax
 * if(condition){
 * display output
 * }
 */

// write a program to check if the given is positive 

let num = -20

if (num > 0 && num == 0) {
    console.log("given number is positive ")

}


// if else -->used in either or  --> (ex ternary opertor)

// ternary opertor 

// num >=0?console.log("given number is positive "):console.log("given number is negative")

if (num >= 0) {
    console.log("given number is positive ")
}
else {
    console.log("given number is negative")
}



// else if() -- used for mulitple cases 


/** syntax 
 * 
 * if (condition){output}
 * 
 * else if (condition){ouitput}
 * 
 * esle{display}
 */
// create a program to check which equiment to carry while the season

let season = "SUMMER"

if (season.toLowerCase() === "summer") {
    console.log("please carry a sunscreen and be hrydated and carry a white umberlla")
}
else if (season === "winter") {
    console.log("carry warm clothes and make sure to wear gloves ")
}
else if (season === "rainy") {
    console.log("carry a raincoat and drive slowly")
}
else {
    console.log("enter correct input data ")
}



//Switch CASE --> this is the modern version and prefered use in most of the case

/**
 * let parameter =value
 * 
 * switch(paramter){
 * 
 * case 1 : case one
 * 
 * case 2 : case two
 * 
 * case 3 : case three
 * 
 * default :output
 * 
 * 
 * }
 */

// break --> this terminate the operation  when the condition is met

let num1 = -40

switch (true) {
    //case 1 when is greater than zero
    case num1 > 0: console.log(`the given number ${num1} is a positive number`)
        break
    //case 2 
    case num1 < 0: console.log(`the given number ${num1} is a negative number`)
        break
    //case 3 
    case num1 === 0: console.log(`the given number is zero`)
        break
    // default case 
    default: console.log("enter correct data ")
}


// write a program to check if its working or holiday

let day = "friday"
let formatday = day.toLowerCase()

switch (formatday) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": console.log("its working day")
        break
    case "saturday":
    case "sunday": console.log("weekend")
        break
    default: console.log("enter correct data ")
}

