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


// 