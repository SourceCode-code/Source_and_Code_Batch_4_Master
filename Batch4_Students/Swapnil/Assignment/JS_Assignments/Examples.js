////   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0
for (let i = 0; i <= 100; i++) {
  //sum = sum + i
  sum += i
}

console.log(sum)



///   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let SumOfEven = 0
let SumOfOdd = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        SumOfEven += i
    }
    else {
        SumOfOdd += i
    }
}
console.log(`Sum of Even is: ${SumOfEven}`)
console.log(`Sum of Odd is: ${SumOfOdd}`)




// 16 
// ****
// *  *
// ****

let column = 4
let star ="*"
for(let i = 1;i<=2;i++){
    console.log(star.repeat(column))

    if( i===1){
        console.log("*  *")}
    }

// 17
let str = " hello my name is siddhant gadakh and my age is 26 "
// by using using loop count the number of vowels  in the string (a,e,i,o,u)

let vowels = "aeiouAEIOU"
let vowelsCount = 0
for (let j = 0; j < str.length; j++) {
    if(vowels.includes(str[j])){
        vowelsCount++
    }        
    }
console.log(vowelsCount)




