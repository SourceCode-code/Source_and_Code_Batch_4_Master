// console.log(a);
//    var a = 10;

//   // Predict the output:
//    let x = 5;
//    {
//      let x = 10;
//      console.log(x);
//    }
//    console.log(x);

//   // Why does the below code throw an error?
//    //console.log(b);
//    let b = 20;
//   console.log(b);
// console.log("+++++++++++++++++++++++++++++=")
//Simple understanding

//let and const work only inside { }
//Outside the block → they are not accessible

//function testBlockScope() {
//   if (true) {
//     let a = 10;
//     const b = 20;
//     console.log(a); // ✅ works
//     console.log(b); // ✅ works
//   }

// ❌ Outside the block
//   console.log(a); // ReferenceError
//   console.log(b); // ReferenceError

// console.log(null == undefined); //true
//   console.log(null === undefined);//false
// console.log("+++++++++++++++++++++++++++++=")
// function getExactType(value) {
//   if (value === null) return "null";
//   if (Array.isArray(value)) return "array";
//   return typeof value;
// }

// console.log(getExactType(null)); // "null"
// console.log(getExactType([])); // "array"
// console.log(getExactType({})); // "object"

// console.log("+++++++++++++++++++++++++++++=")
//Predict the output:
//    console.log(typeof []);
//    console.log(typeof {});

//    function isStrictEqual(a, b) {
//   return a === b;
// }

// // Examples
// console.log(isStrictEqual(10, 10));      // true
// console.log(isStrictEqual(10, "10"));    // false
// console.log(isStrictEqual(null, null));  // true
// console.log(isStrictEqual([], []));      // false (different references)
// console.log("+++++++++++++++++++++++++++++=")
// //Predict the output:
// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     return count;
//   };
// }

// const counter = outer();

// console.log(counter()); // 1
// console.log(counter()); // 2

// console.log("Start");
//     setTimeout(() => console.log("Timeout"), 0);
//     console.log("End");
console.log("================================")
console.log(true + false);
console.log("5" - 2);
console.log("=============Swap 2 Numbers===================")
let a = 20;
let b = 30;
[a, b] = [b, a]
console.log("after Swap: a=", a, "& b= ", b);

//Find the second largest number in an array.
console.log("=============Second Largest Number using Sort===================")
let numArr = [1, 2, 3, 4, 5];
numArr.sort((a, b) => b - a);
console.log(numArr[1]);
console.log("=============Second Largest Number Method 2===================")
//Method 2

function secondLargest(arr) {

    let largest = 0;
    let second = 0;

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;

        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest([1, 2, 3, 4, 5, 6]));


console.log("=============Prime number===================")

function isPrime(num) {



    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n1 = 1;
let n2 = 6;
console.log(n1 + " Is Prime?", isPrime(n1));
console.log(n2 + " Is prime?", isPrime(n2));

console.log("=============Factorial number===================")

function factorial(n) {

    if (n < 0) return " Factorial not define";
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(4));


function findMissing(arr, start, end) {

    let missing = [];

    for (let i = start; i <= end; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    
        }
        return missing;
    }

    console.log(findMissing([1, 2, 4, 6], 1, 6));
