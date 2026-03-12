// 1. Write a JavaScript function to find the second largest number in an array.
/*
function secondLargest(arr){

			let largest = 0;
			let second = 0;

			let uniqueArr = [...new Set(arr)];

			for(let num of uniqueArr){
			 if(num > largest){
			  second = largest;
			  largest = num;
			  } else if(num > second && num !== largest){
			   second = num;
			   }
			   }
			   return second;
			   }
			   console.log(secondLargest([1,2,3,4,5]));
*/
//Write a function to check the data type of a variable.
/*
function getTypeof(value) {
    return typeof value;
}

console.log(getTypeof(10)); // number
console.log(getTypeof("hello")); // string
console.log(getTypeof(true)); // boolean
console.log(getTypeof({})); // object
console.log(getTypeof([])); // object
*/
//Write a function to compare two values using strict equality
// function compareStrict(a, b) {
//     return a === b;
// }
// console.log(compareStrict(5, 5)); // true
// console.log(compareStrict(5, "5")); // false

// //Write a function to compare two values using strict equality
//   function compareStrictValues(a,b) {
//   return a === b;
//   }
//   console.log(compareStrictValues(5,5));
//   console.log(compareStrictValues(8,"8"));
//   console.log(compareStrictValues(null, null));
//   console.log(compareStrictValues([], []));

// Write a function that returns another function and maintains a counter.
// function retryTracker() {
//   let retries = 0;
  
//   return ()=> ++retries;
//   }
//   const getCount = retryTracker();
  
//   console.log(getCount());
//   console.log(getCount());
//     console.log(getCount());

   // What will be the output?
    function test() {
      let count = 0;
      return function () {
        count++;
        console.log(count);
      };
    }
    
//     Key Understanding
// test() returns a function
// count is preserved via closure
// Output depends on how many times the returned function is called. 
    const counter = test();
    counter();  // Output: 1
    counter();  // Output: 2
    counter();  // Output: 3    

    //How can closures help in maintaining test data state?
// Closures allow the inner function to access and modify the variables of the outer function even after 
// the outer function has finished executing. 
// This means that we can maintain state (like a counter) across multiple calls to the inner function,
//  which is useful for tracking test data or any other stateful information in a controlled manner.

function createEmailGenerator() {
    let id = 0;

    return function() {
        id++;
        return 'user' + id + '@test.com';
    }
}

const getEmail = createEmailGenerator();
console.log(getEmail()); // user1@test.com
console.log(getEmail()); // user2@test.com
console.log(getEmail()); // user3@test.com

//input = My Name is Sayali Sagar
//Output = mY nAme iS sAyali sAgar
let neww = "My Name is Sayali Sagar";
let words_ = neww.split(" ");
let result = [];

for (let i = 0; i < words_.length; i++) {
  let word = words_[i];

  if (word.length >= 2) {
    let first =
      word[0] === word[0].toUpperCase()
        ? word[0].toLowerCase()
        : word[0].toUpperCase();

    let second =
      word[1] === word[1].toUpperCase()
        ? word[1].toLowerCase()
        : word[1].toUpperCase();

    result.push(first + second + word.slice(2));
  } else {
    result.push(word);
  }
}

console.log(result.join(" "));
// Output: mY nAme iS sAyali sAgar

 //Rotate array to the right by a given number
// function rotateright(arr, num) {
//   for (let i = 0; i < num; i++) {
//     let ele = arr.pop();
//     arr.unshift(ele);
//   }
//   return arr;
// }
// console.log(rotateright([1, 2, 3, 4, 5], 3));

//Validate PAN number format
// let pannumber = "ABCDE1234F";
// let str = /[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/i.test(pannumber);
// console.log(str)

function occ(str, num) {
  let stri = str.split("");
  let obj = {};
  for (let word of stri) {
    obj[word] = (obj[word] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] == num) {
      console.log(key);
    }
  }
}
occ("siddhantii", 3);

console.log("================================");
function chrOcc(str,chr) {
  
  let count = 0;
  
  for(let i=0;i<str.length;i++) {
  if(str[i] === chr){
  count++;
  }
  }
  return count;
  }
  
  console.log(chrOcc("Ramrajan","a"));
  console.log("================================");

  function countCharacter(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countCharacter("programming", "g"));

// Q4: Find pairs in an array that sum up to a target value
let pair = [];
  
 function findpair(arr, target) {
  
  let pair = [];
  
  for(let i=0; i < arr.length; i++){
   for(let j = i+1; j < arr.length; j++){
    if(arr[i] + arr[j] === target){
	pair.push([arr[i], arr[j]]);
	}
	}
	}
	return pair;
	}
	console.log(findpair([1,2,3,4,5,6],3));

  //// prime number check

  function isPrime(num) {
    if (num < 2) return false;

    for(let i = 2; i < num; i++){

      if(num % i === 0){
        return false;
        
        }
      }
      return true;
    }
    console.log(isPrime(7)); // true
    console.log(isPrime(10)); // false  

//Generate a random Aadhaar number

function aadhaarGenerator(){
	
	let num1 = Math.floor(Math.random() * (10000 - 1000) + 1000);
	let num2 = Math.floor(Math.random() * (10000 - 1000) + 1000);
	let num3 = Math.floor(Math.random() * (10000 - 1000) + 1000);
	
	console.log(`${num1} ${num2} ${num3}`);
	}
	aadhaarGenerator();
	
  // Q7: Check if an array is sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 5, 3, 9, 7]));

// Q8: Find the missing number in an array
function missingNumber(arr){
	
	let n = arr.length + 1;
	let total = (n * (n + 1))/2;
	let sum  = arr.reduce((acc,val) => acc + val,0);
	return total-sum;
	}
	console.log(missingNumber([1,3,4,5,6])); // Output: 2

  // Q9: Find the largest number in a string

  
function greatestNumInStr(string) {
  let ss = string.match(/\d+/gi).map(Number);
  console.log(Math.max(...ss));
}
greatestNumInStr("si33dd8hna9t10");

// Q10: Find the largest single digit in a string

function largestDigit(str) {
  let max = -1;

  for (let ch of str) {
    if (!isNaN(ch) && ch !== " ") {
      max = Math.max(max, Number(ch));
    }
  }

  return max;
}

console.log(largestDigit("ab3c4d2e7"));
/*(Simple Explanation for Interview)
Initialize max with -1.
Loop through each character in the string.
Check if the character is a digit using
!isNaN(ch) && ch !== " ".
Convert digit to number.
Compare with current max using Math.max.
Update max if a bigger digit is found.
Return the largest digit.

  */

