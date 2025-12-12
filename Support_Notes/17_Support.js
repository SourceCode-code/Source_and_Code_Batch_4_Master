// 1/12/2025
// Scope--

/* global scope -  able acces the variable over the script
function dcope / block scope -  you can able to acces the variable in that block only

let, const, var

*/
let name  = "Source and code"
function calculator(){
    let name1 = "code"
 
}

console.log(name);
// console.log(name1);


// let - resign block scope
// const name - canot resign have block scope
// var - can resign having global scope.


// destructoring--- unpacking array or object

let num = [1,2,3,4,5,6]
console.log(num[0]);
// [num10,num2,num3,,num5,num6] = num
// console.log(num3);


//Math.random() - 0.1 - 0.9 
/*
0.4
Math.Round() -  
Math.floor() - 0 -- nearest posible minimum round no
Math.ceil()  - 1 --  nearest posible maximimum round no
*/

let num1 = 0.7
let num2 = 11.4
// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let string = "qwertyuiopasdfghjklzxcvbnm"
// indexing - string method
let randomnum = Math.round(Math.random() * string.length -1)
console.log(randomnum);

console.log(string[randomnum]);
