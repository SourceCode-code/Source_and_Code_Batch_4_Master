// how to delcare varaibles in js ?

// let var const
// difference

// 1. var - used to declare a variable that can be re-assigned its gobal scope varaible
var name = "John";
console.log(name); // Output: John
name = "Doe"; // Re-assigning the variable
console.log(name); // Output: Doe

// 2. let - used to declare a block-scoped variable that can be re-assigned
let age = 30;
console.log(age); // Output: 30
age = 31; // Re-assigning the variable
console.log(age); // Output: 31

// 3. const - used to declare a block-scoped variable that cannot be re-assigned (constant )
const pi = 3.14;
console.log(pi); // Output: 3.14
// pi = 3.14159; // This will throw an error because const variables cannot be re-assigned

// Block Scope (local scope) --> varaibles delecred inside a function or a block are blockscope
// it means we cannot access that varaible out out that block

function PrintX() {
  let x = 100;
  console.log(x); //100
  x = 200;
  console.log(x);
}

PrintX();
let x = "sidhant";
console.log(x); // throws as x is not defined

function printxnum() {
  let x = 300;
  console.log(x);
}
printxnum();
// because this is a block scope varaibale it cannot bypass the scope

// same is it with const , const is also a block scope varaible

const pii = 3.1432;

function printpi() {
  const pii = 3.14;
  console.log(pii);
}

console.log(pii);
printpi();

// Gobal scope -->variable who has a gobal access 

var xx =10

console.log(xx)

function printxx(){
    console.log(xx)
}

printxx()
