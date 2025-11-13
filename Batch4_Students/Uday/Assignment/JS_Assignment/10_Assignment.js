// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
//Using For loop
 // for(let i =1;i<=10;i++)
 // {console.log(i)}

 //Using while loop
//let i=1
//while(i<=10){
  //  console.log(i)
  //  i++
//}
//   // 2) Iterate 10 to 0 using for loop, do the same using while
  
/*for(i=10;i>=1;i--)
  *  {
   * console.log(i)
}*/
//While
 /*let i=10;
 *while(i>=1){
  *  console.log(i)
   * i--
 }*/


//   // 3) Iterate 0 to n using for loop
//n=10 
//for(i=0;i<=n;i++) // Or if we need infinity then just use For(i=0; ;i++) no condition
  // {
   // console.log(i)
   //}
// using while
//let i=0,n=10
//while(i<=n){
 //console.log(i)
   // i++
//}


//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

/*let count=7
for(let c=1;c<=count;c++){
    let p=''
    for(let r=1;r<=c;r++){
        p += '#';
}
        console.log(p)

}*/

//Using whole loop
/*let count=7;
let i=1
while(i<=count){
    let symbol=''
    let j=1
    while(j<=i){
        symbol +="#"
        j++
    }
    console.log(symbol)
    i++    
}*/
 
  
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

//for(let i=0;i<=10;i++){
  //  console.log(`${i}${i*i}${i**3}`);
//}
/*for(let i=0;i<=10;i++){
    console.log(`${i} ${i*i} ${i**3}`)
}*/

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
/*for(let i=0;i<=100;i++){
    if(i % 2 === 0){
      console.log(i)
    }
    }*/


  
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
   /*for(let i=0;i<=100;i++){
     if(i % 2 !== 0){
      console.log(i)
    }
    }*/
  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

// Nedd support

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/*for(let i=0;i<=100;i++){
    sum =i+i
}
console.log(sum)
  */

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
 /*let evenNo=0;
 let oddN0=0;
  for(let i=0;i<=100;i++){
    if(i%2 === 0){
     evenNo +=i
    }
    oddN0 +=i
  }
  console.log("Even Number= ", evenNo)
  console.log("Odd Number= ", oddN0)
*/

//   // 11) Develop a small script which generates a six-character random id.
/*let id= Math.random().toString(36).substring(2,8);
//Math.random gives a random numbers
//toString converts it to mix of numer + lower case letters
// substring(2, 8) take 6 characters after 0
console.log(id)
*/

//   // 12) Develop a small script which generates any number of characters random id.
//let num= Math.random().toString(26).substring(2,)
//console.log(num)
  
//   // 13) Write a script which generates a random hexadecimal number.

// Not clear

//   // 14) Write a script which generates a random rgb color number.
// not clear

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *
/*let n=6
for(let i=1;i<=n;i++){
    for(let j=i;j<=n;j++){
        console.log(" ")
    }
    for(j=1;j<=n;j++){
        console.log("*")
    }
    for(j=1;j<=i;j++){
        console.log("*")
    }
   // console.log("\n")
}*/

/*let count=7
for(let c=1;c<=count;c++){
    let p=''
    for(let r=1;r<=c;r++){
        p += '*';
}
        console.log(p)

}
for(let c=1;c<=count;d++){
    let p=''
    for(let r=1;r<=c;r++){
        p += '*';
}
        console.log(p)
}

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

//By using loop count the number of vovels in the string(a,e,i,o,u)
let str= "hellow my name is sidhant gadak and my age is 26"
let count=0
let vovels= "aeiou"
for(let a=0;a<=str.length-1;a++){
   if(vovels.includes(str[a])){ 
  count++
}
}
console.log("Vovels count:",count)

