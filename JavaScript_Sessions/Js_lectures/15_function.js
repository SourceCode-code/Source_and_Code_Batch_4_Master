// variable --> variable is conatiner which is used to stored the value
let a = 10;

// Functions --> is used to stored your logical code to make your code dynamic and resuable

// example :-

// create a calcultor which performs all the artmatic operators

let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// i have 2 different varaible
let s = 200,
  w = 400;

console.log(s + w);
console.log(s - w);
console.log(s * w);
console.log(s / w);
console.log(s % w);
console.log(s ** w);

// Advantages of function

// 1 keeps your code clean and dynamic
// 2 makes the code resuable
// 3 makes code easy to understand , easy to test

// sample of a function

/**
 * syntax for basic 
 * 
 * function functionname (parameter){
 logical code  
 * }


 how to call a function

 functionname(parameters)
 */

function Calcalutor(num1, num2) {
  console.log("Addition", num1 + num2);
  console.log("Sub", num1 - num2);
  console.log("mul", num1 * num2);
  console.log("divide", num1 / num2);
  console.log("mod", num1 % num2);
  console.log("power", num1 ** num2);
}

Calcalutor(20, 25);

console.log("--------------------------");

Calcalutor(200, 700);

// let x == 1000
// let x == 2000
Calcalutor(1000, 2000);

//----------------------------------
// types of function

// 1 based on parameters  --> there are 3 types
// 2 way of writing  --> 3 types

// 1 based on parameters  --> there are 3 types
// return type --> in function return  is used to store the function in a variable ( to reuse its value )

// 1 without paramter without return type

function fullname() {
  console.log("siddhant arjun gadakh");
}

fullname();

// 2  with paramter without return type

function Calcalutor1(num1, num2) {
  console.log("Addition", num1 + num2);
  console.log("Sub", num1 - num2);
  console.log("mul", num1 * num2);
  console.log("divide", num1 / num2);
  console.log("mod", num1 % num2);
  console.log("power", num1 ** num2);
}

Calcalutor1(100, 200);
Calcalutor1(500, 600);

//3 with parameter with return type

function details(firstname, middle, lastname) {
  return `${firstname} ${middle} ${lastname}`;
}

let sidinfo = details("sid", "arjun", "gadakh");
console.log(sidinfo);

let vaibhavinfo = details("vaibhav", "pratap", "suryawashi");
console.log(vaibhavinfo);

console.log(sidinfo.toUpperCase()); //SID ARJUN GADAKH

// ---------------------------------------------------------------

//calculate the price of egg  for given quanty
// calcutale the price of rice

function eggPrice(numofeggs, priceofegg) {
  return numofeggs * priceofegg;
}

function riceprice(qantityofrice, priceofkgrice) {
  return qantityofrice * priceofkgrice;
}

total_eggprice = eggPrice(12, 6);
console.log(total_eggprice); //72

let totalriceprice = riceprice(5, 80);
console.log(totalriceprice); //400

console.log(totalriceprice + total_eggprice); //472

// pom --> page object metholdy
// classes and function

//on the way of writing

// 1 delecartion function --> here the function name is delecalred in the start

// syntax -->

/*
function functionname(parameter){
return     code
}
*/

// 2 experssion type --> because the here the function is stored in a expression

let fullname1 = function (firstname, lastname) {
  return `${firstname} ${lastname}`;
};

console.log(fullname1("sid", "gadakh"));

//3 arrow function =>
let fullname3 = (firstname, lastname) => {
  return `${firstname} ${lastname}`;
};

console.log(fullname3("asf", "asfcasc"));

// --------------------------------------------------------------------------------------------------------

//examples of problems on function

// write a script which will tell me how many vowels are there in a given string (a,e,i,o,u)

function countvowel(string) {
  let count = 0;
  let lowerstring = string.toUpperCase();
  for (let i = 0; i < lowerstring.length; i++) {
    if (
      lowerstring[i] === "A" ||
      lowerstring[i] === "E" ||
      lowerstring[i] === "I" ||
      lowerstring[i] === "O" ||
      lowerstring[i] === "U"
    ) {
      count++;
    }
  }
  console.log(`the vowels in the given string ${string} are ${count}`);
}

countvowel("siddhant");

countvowel("sneha");

countvowel("vaibhav");

// write a script which will give me the largest number form given number

function LargestNumber(array) {
  let Array1 = Math.max(...array);
  console.log(Array1);
}

LargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);

LargestNumber([11, 13, 20, 0, 100, 500, 600, 50000]);

// create a function to check if the given is  prime

function checkprime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
   }
  return true;
}

console.log(checkprime(7)); // prime
console.log(checkprime(13)); // prime
console.log(checkprime(4)); // not prime

// create a function which will give me the longest word in the string

let str =
  " my name is siddhant i am a software engineer my expertise are in automation and development";

function longestword(string) {
  let splitstr = string.split(" "); //this will convert into array by spilting on spaces
  let word = "";
  console.log(splitstr);
  for (let i = 0; i < splitstr.length; i++) {
    if (splitstr[i].length > word.length) {
      word = splitstr[i];
    }
  }
  return word;
}

console.log(longestword(str));

console.log(longestword("qwertyuio tryujkl,hmgnvfdg"));

// create a function which get me the second largest element form array

let numarr = [1, 5, 6, 12, 75, 96, 1000, 556, 111, 1111, 112355, 764];

function Largestnumber1(array) {
  let large = Math.max(...array);
  console.log(large);
}

Largestnumber1(numarr);

//-------------------------------------

function Secondlargest(array) {
  let ascendsort = array.sort((a, b) => {
    return a - b;
  });
  console.log(ascendsort[ascendsort.length - 2]); //
}
Secondlargest(numarr); // 1111
