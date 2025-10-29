// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
for (let a = 1; a <= 10; a++) {
    console.log(a)
}
let b = 1
while (b <= 10) {
    console.log(b)
    b++
}

//   // 2) Iterate 10 to 0 using for loop, do the same using while

for (let c = 10; c >= 0; c--) {
    console.log(c)
}

let d = 10
while (d >= 0) {
    console.log(d)
    d--
}

//   // 3) Iterate 0 to n using for loop
let n = 47;
for (let z = 1; z <= 47; z++) {
    console.log(z)
}



// 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

for (let e = 1; e <= 7; e++) {
    console.log('#'.repeat(e))
}
/*
//   // 5) Print the following pattern using loop
//   // i    i^2   i^3
//   // 0    0     0
//   // 1    1     1
//   // 2    4     8
//   // 3    9     27
//   // 4    16    64
//   // 5    25    125
//   // 6    36    216
//   // 7    49    343
//   // 8    64    512
//   // 9    81    729
//   // 10   100   1000

for(let i=0;i<=10;i++){
console.log(`${i}${i*i}${i**3}`);
}
//
*/

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for (let f = 0; f <= 100; f++) {
    if (f % 2 == 0) {
        console.log(f)
    }
}


//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for (let g = 0; g <= 100; g++) {
    if (g % 2 == 1) {
        console.log(g)
    }
}

console.log("----------------------------------------------------------------")
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
    let isprime = true  // assuming every output number is prime 
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
console.log("----------------------------------------------------------------")


// 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (let k = 0; k <= 100; k++) {
    sum += k
}
console.log(sum)

console.log("****************************************************************************")



// 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    }
    else (i % 2 == 1)
    sumOdd += i;

}
console.log("Sum of even numbers is:", sumEven);
console.log("Sum of odd numbers is:", sumOdd);








/*  // 11) Develop a small script which generates a six-character random id.


//   // 12) Develop a small script which generates any number of characters random id.


//   // 13) Write a script which generates a random hexadecimal number.

//   // 14) Write a script which generates a random rgb color number.

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *



//2

// ****
// *  *
// ****



//3

// 4444
// 333
// 22
// 1

// // 4
// 1111
// 222
// 33
// 4

//17) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"

*/