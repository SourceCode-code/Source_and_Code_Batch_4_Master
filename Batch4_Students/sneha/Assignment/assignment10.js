// // ASSIGNMENT NO 10

// // // 1) Iterate 0 to 10 using for loop, do the same using while

// for(let i=0;i>10;i++){
//   console.log("--------",i)
// }
// //   // 2) Iterate 10 to 0 using for loop, do the same using while
  for(let i=10;i<0;i--){
  console.log("--------",i)
  }
// //   // 3) Iterate 0 to n using for loop
 
//   let n=23
//   for(let i=0;i<=n;i++){
//     console.log(i)
//   }
// //   // 4) Write a loop that makes the following pattern using console.log():
// //   // #
// //   // ##
// //   // ###
// //   // ####
// //   // #####
// //   // ######
// //   // #######

//  for(let i=1;i<=7;i++){
//     console.log("#".repeat(i))
//  }
  
// //   // 5) Print the following pattern using loop
// //   // i    i^2   i^3
// //   // 0    0     0
// //   // 1    1     1
// //   // 2    4     8
// //   // 3    9     27
// //   // 4    16    64
// //   // 5    25    125
// //   // 6    36    216
// //   // 7    49    343
// //   // 8    64    512
// //   // 9    81    729
// //   // 10   100   1000
// for(let i=0;i<=10;i++){
// console.log(`${i} ${i**2} ${i**3}`)
// }

// //   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i=0;i<=100;i=i+2){
// console.log(i)
// }

// //   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i=0;i<=100;i=i+3){
// console.log(i)
// }
  
// //   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

// //   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum=0
// for (let i=0;i>=100;i++){
//     //sum=sum+i
// }
//     console.log(sum)

  
// //   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//   let sumeven=0
// for (let i=0;i<=100;i++){
//     if(i%2==0){
//     console.log(sumeven[i])
//     }
// }

// //   // 11) Develop a small script which generates a six-character random id.

//   let char="qwertyuiopasdfghjklzxcvbnm"
//   console.log()
// //   // 12) Develop a small script which generates any number of characters random id.

  
// //   // 13) Write a script which generates a random hexadecimal number.

// //   // 14) Write a script which generates a random rgb color number.

// //15) print the following patterns 
// //   * 
// //  ***
// // ******
// //  ***
// //   *

let line=3
for(let i=1;i<=3;i++){
  let spaces="  ".repeat(line-i)
  let star="*".repeat(2*i-1)
  console.log(spaces+star)
}

for(let i=3;i>=1;i--){
  let spaces="  ".repeat(line-i)
  let star="*".repeat(2*i-1)
  console.log(spaces+star)
}


// //16

// // ****
// // *  *
// // ****
let stars=4
for (let i=0;i<=3;i++){
  console.log("*".repeat(stars))
  if(i==2){
    console.log("*  *")
  }
}


// //17

// // 4444
// // 333
// // 22
// // 1

for(let i=4;i>=1;i--){
  console.log(String(i).repeat(i))
}



// // // 18
// // 1111
// // 222
// // 33
// 4
num=4
for(let i=1;i<=4;i++){
  console.log(String(i).repeat(num--))
}


//19) print the longest word form the given string

let str = " hello i am learning javascript and currently i am seeing the topic loops"
let STR1 =str.split(" ")
longestWord =""
for(let i=1;i<=STR1.length-1;i++){
 if(STR1[i].length>longestWord.length){
    longestWord=STR1[i]
 }
}
console.log(longestWord)
