// 09/10/2025
// Q36. Generate a random number between 1 and 100 and check if it is even or odd.
let randomNo = Math.round(Math.random()*100 )
// console.log(randomNo);

let oddOreven = (randomNo%2 == 0)? `${randomNo} is a even number`:`${randomNo} is a odd number`
console.log(oddOreven);


// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// let y = '2x - 2'
// // y = 2X-2  -- X intercept
// // x = 2y-2 -- y intercept
// //y=mx+c  -- Slope

// // Slope = 
// let slope = y[0]
// console.log(` slope is ${slope}`);
// // X intercept
// let XIntercept = 

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

let str = 'qwertyuiopasdfghjklzxcvbnm'

console.log(str[Math.round(Math.random()* str.length-1)]);


let randomNo1 = Math.round(Math.random()*(100-50)+50)
console.log(randomNo1)

