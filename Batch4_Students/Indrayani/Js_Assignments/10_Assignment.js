// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while

//Ans:
// using for loop..
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

// using while loop..

let j = 0
while (j <= 10) {
  console.log(j)
  j++
}

//   // 2) Iterate 10 to 0 using for loop, do the same using while
//Ans:
// using for loop..
for (let i = 10; i >= 0; i--) {
  console.log(i)
}

// using while loop..
let k = 10
while (k >= 0) {
  console.log(k)
  k--
}
//   // 3) Iterate 0 to n using for loop

//Ans:
let n = 15
for (let i = 0; i <= n; i++) {
  console.log(i)
}


//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

//Ans:

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i))
}

// second solution
let hash = 1
for(let i=0; i<7;i++){
    console.log("#".repeat(hash))
    hash++
}


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

//Ans:
console.log("i  i^2  i^3")
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`)
}
//for proper column alignment use tab key \t

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0)
    console.log(i)
}


//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers

//Ans:
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0)
    console.log(i)
}

//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

//Ans:
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

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//Ans:
let sum = 0
for (let i = 0; i <= 100; i++) {
  sum = sum + i
  console.log(sum)
}


//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenNo = 0;
let oddN0 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNo += i
  }
  oddN0 += i
}
console.log("Even Number= ", evenNo)
console.log("Odd Number= ", oddN0)

//   // 11) Develop a small script which generates a six-character random id.

//Ans:
let id = Math.random().toString(36).substring(2, 8);
//Math.random gives a random numbers
//toString converts it to mix of numer + lower case letters
// substring(2, 8) take 6 characters after 0
console.log(id)


//   // 12) Develop a small script which generates any number of characters random id.

let num = Math.random().toString(26).substring(2,)
console.log(num)

//   // 13) Write a script which generates a random hexadecimal number.

let hexnum = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(hexnum)

//   // 14) Write a script which generates a random rgb color number.
let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)
let rgbcolor = `rgb(${r},${g},${b})`
console.log(rgbcolor)

//15) print the following patterns 
//   * 
//  ***
// *****
//  ***
//   *

//Ans:
let space = 3
let star = 1
for(let i=0; i<5;i++){
    console.log(" ".repeat(space) + "*".repeat(star))
    if(i<2){
        space--
        star += 2
    }else{
        space++
        star -= 2
    }
}


//16

// ****
// *  *
// ****

//Ans:
let row_ = 3
let col = 4
for(let i=0; i<row_;i++){
    let pattern = ""
    for(let j=0; j<col;j++){
        if(i===0 || i===row_-1 || j===0 || j===col-1){
            pattern += "*"
        }else{
            pattern += " "
        }
    }
    console.log(pattern)
}


//17

// 4444
// 333
// 22
// 1
//Ans:
let row = 4
for(let i =1 ;i<=4;i++){
    console.log((String(row).repeat(row--)))
}
// both good but second one is best
let row1 = 4
for(let i=0; i<row1;i++){
    let pattern1 = ""
    for(let j=0; j<row1-i;j++){
        pattern1 += row1 - i
    }
    console.log(pattern1)
}
// // 18
// 1111
// 222
// 33
// 4
//Ans:
let rows = 4
for(let i =1 ;i<=4;i++){
console.log((String(i).repeat(rows--)))
//             1111
//             333
//          l   22
//             1     
}

// both good but second one is best
let row2 = 4
for(let i=0; i<row2;i++){
    let pattern2 = ""
    for(let j=0; j<row2-i;j++){
        pattern2 += i+1
    }
    console.log(pattern2)
}
//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"

let str = " hello i am learning javascript and currently i am seeing the topic loops"
let words = str.split(" ")
let longestword = ""
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestword.length) {
    longestword = words[i]
  }
}
console.log(longestword)