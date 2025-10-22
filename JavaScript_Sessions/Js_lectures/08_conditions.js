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

if (num >0&&num==0) {
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

let season ="SUMMER"

if(season.toLowerCase() ==="summer"){
    console.log("please carry a sunscreen and be hrydated and carry a white umberlla")
}
else if(season ==="winter"){
    console.log("carry warm clothes and make sure to wear gloves ")
}
else if( season ==="rainy"){
    console.log("carry a raincoat and drive slowly")
}
else{
    console.log("enter correct input data ")
}


