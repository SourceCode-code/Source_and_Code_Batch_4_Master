// // // Q1: Rotate array to the right by a given number
// // function rotateright(arr, num) {

// //     for (let i = 0; i < num; i++) {
// //         let ele = arr.pop();
// //         arr.unshift(ele);
// //     }
// //     return arr;
// // }
// // console.log(rotateright([1, 2, 3, 4, 5], 4));

// // // Q2: Validate PAN number format
// // let pannumber = "ABCDE1234F";
// // let str = /[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/i.test(pannumber);
// // console.log(str);

// // // Q4: Find pairs in an array that sum up to a target value
// // function findpairs(arr, target) {
// //     let pair = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i + 1; j < arr.length; j++) {
// //             if (arr[i] + arr[j] === target) {
// //                 pair.push(arr[i], arr[j]);
// //             }
// //         }
// //     }
// //     return pair;
// // }
// // console.log(findpairs([1, 2, 3, 4, 5], 3));

// // // Q5: Check if a number is prime

// // function isPrime(num) {
// //     if (num <= 1) return `${num} is not a prime number`;
// //     for (let i = 2; i < num; i++) {
// //         if (num % i === 0) {
// //             return `${num} is not a prime number`;
// //         }
// //     }
// //     return `${num} is a prime number`;
// // }
// // console.log(isPrime(3));
// // console.log(isPrime(1));


// // function generateAadhaar() {
// //   let aadhaar = "";

// //   for (let i = 0; i < 12; i++) {
// //     let digit = Math.floor(Math.random() * 10); // 0–9
// //     aadhaar += digit;
// //   }

// //   return aadhaar;
// // }

// // console.log("Generated Aadhaar:", generateAadhaar());


// // // Q7: Check if an array is sorted
// // function isSorted(arr) {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     if (arr[i] >= arr[i + 1]) return false;
// //   }
// //   return true;
// // }
// // console.log(isSorted([1, 2, 3, 4, 7]));

// // //Count occurrences of each word in a string
// // let sentence = "my name is siddhant and siddhant age is 26";
// // let words = sentence.split(" ");
// // let wordCount = {};
// // for (let word of words) {
// //   wordCount[word] = (wordCount[word] || 0) + 1;
// // }
// // console.log(wordCount);
// let Marray = ["siddhant", "arjun", "gadakh", 26, 7020400749];
// let arrsplice = Marray.splice(0, 3);

// console.log(arrsplice); //[ 'siddhant', 'arjun', 'gadakh' ]
// console.log(Marray);

// // create a function which will give me the longest word in the string

// let str =
//   " my name is siddhant i am a software engineer my expertise are in automation and development";

// function longestword(string) {
//   let splitstr = string.split(" "); //this will convert into array by spilting on spaces
//   let word = "";
//   console.log(splitstr);
//   for (let i = 0; i < splitstr.length; i++) {
//     if (splitstr[i].length > word.length) {
//       word = splitstr[i];
//     }
//   }
//   return word;
// }

// console.log(longestword(str));

// // adding element set
// let comparr = ["google", "amazon", "microsoft", "netflix", "facebook"];
// let compset = new Set();

// for (let company of comparr) {
//   compset.add(company);
// }

// console.log(compset);

// // if you want to add a unique to set
// //Set(5) { 'google', 'amazon', 'microsoft', 'netflix', 'facebook' }

// // orcale

// compset.add("orcale");
// console.log(compset);



// // intersection of set

// let x = [1, 2, 3, 4, 5, 6, 6, 4];
// let y = [5, 6, 7, 8, 9, 10, 6, 5];

// let setx = new Set(x);
// let sety = new Set(y);

// console.log(setx); //Set(6) { 1, 2, 3, 4, 5, 6 }
// console.log(sety); //Set(6) { 5, 6, 7, 8, 9, 10 }

// let intersection = x.filter((el) => sety.has(el));
// let setinter = new Set(intersection);
// console.log(setinter); //Set(2) { 5, 6 }

// // Map --> A collection of unique values but the values are in key value pair (map does not have duplicate value  )

// let countarr = [
//   ["indian", "hindi"],
//   ["usa", "english"],
//   ["germnay", "german"],
// ];

// let map1 = new Map(countarr);

// console.log(map1);

// let obj = {};
// obj[1] = "one";
// obj["1"] = "string one";
// obj[""] = "pass";

// console.log(obj); // { '1': 'string one' }

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i))
}

let row =4

for(let i =1; i<=4; i++){
console.log((String(i).repeat(row--)))

}

/**
 * multi line problem  row 5 
 * pattern is a mirror image  --> we can split the problem in 2  upper half 2 lower half 
 * 
 * 
 */

let line = 3

// upper half 
//   *    //3  //1
//  ***   //2  //3
// ****** //0  //6


//upper half
for(let i =1 ;i<=line;i++){
let spaces = "cc".repeat(line-i)   
let star= "*".repeat(2*i-1)     //  
console.log(spaces+star)  
}

//lower half
for(let i =line-1 ;i>=1;i--){
let spaces = "cc".repeat(line-i)
let star= "*".repeat(2*i-1)
console.log(spaces+star)
}

// 1 test() : retruns true or false and  check wheater the string contains the word or not

let str = " i am Learning js and the topic in js is regex";

let result = /learning/gi;

let output = result.test(str);
console.log(output);