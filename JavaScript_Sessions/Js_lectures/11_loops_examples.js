/**
 * // 4) Write a loop that makes the following pattern using console.log():
 *   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
 *  // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


  // 11) Develop a small script which generates a six-character random id.


  
//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *



//16

// ****
// *  *
// ****



//17

// 4444
// 333
// 22
// 1

// // 18
// 1111
// 222
// 33
// 4

//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"
 *  */

//str12.repeat(10)
//   4 solution 
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i))
}

/*
#
##
###
####
#####
######
#######
*/



// 8) Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
  //3
  let isprime = true  // assuming the number is prime 
  for (let j = 2; j <= Math.sqrt(i); j++) { // nested loop
    if (i % j === 0) {
      isprime = false
      break // when a number is not prime loop will exit 
    }
  }
  if (isprime === true) {
    console.log(i)
  }

}

console.log("--------------------------------------------------")


// check if given number is a prime number or not 
let num = 7

if (num < 2) { return false }

for (let j = 2; j <= Math.sqrt(num); j++)
  if (num % j === 0) {
    return false

  }

console.log(`${num} is prime number `)





////   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0
for (let i = 0; i <= 100; i++) {
  //sum = sum + i
  sum += i
}

console.log(sum)



///   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

