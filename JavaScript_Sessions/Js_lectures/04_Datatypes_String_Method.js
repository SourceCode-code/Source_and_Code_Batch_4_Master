// Strings methods

// .toUpperCase() --> this method is used to convert string into upper case 
let str = "Siddhant Arjun Gadakh"

// the way to use any method on string is 

// nameofstring/varaible.methodname(parameter)

console.log(str.toUpperCase()) //SIDDHANT ARJUN GADAKH
let str1 = str.toUpperCase()

// .toLowercase() --this method is used to convert string into lower case 
console.log(str1.toLowerCase()) //siddhant arjun gadakh

// string concatiation --> (+), ` ${}`


// method concatenation --> method chaining 
// method chaning will only work when output of one method is the valid input for another method 
// example str.toUppercase().lenth retrun a number but to lowercase is string method  so it cant be applied to a number 

let str3 = "hello my name is Siddhant aNd my aGe is 26"
console.log(str3.length)
console.log(typeof (str3.length))

// let methodconcat = str3.toUpperCase().toLowerCase().toUpperCase().length.toLowerCase() //
// 42


// console.log(methodconcat)

// note every method has something called as output as well as return type 



