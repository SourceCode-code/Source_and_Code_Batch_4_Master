// 09/10/2025
// Q36. Generate a random number between 1 and 100 and check if it is even or odd.
let randomNo = Math.round(Math.random()*100 )
// console.log(randomNo);

let oddOreven = (randomNo%2 == 0)? `${randomNo} is a even number`:`${randomNo} is a odd number`
console.log(oddOreven);


