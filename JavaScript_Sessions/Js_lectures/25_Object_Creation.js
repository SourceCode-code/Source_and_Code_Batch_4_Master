// Object --> object is descriptive data type which is used to store data in key value pair

// 1 object literal

let obj1 = {
  name: "siddhant arjun gadakh",
  age: 26,
};

// method to use to create objects

// 1 function constructor -->

// constructor --> constructure is special function which is used to create or initalize object
// this --> this keyword refers to the scope of the object that is currently calling

// example

//this keyword------------ this keyword refers to current context

function Details(name, age) {
  this.name = name;
  this.age = age;
}

let sid_details = new Details("siddhant arjun gadakh", 26);
let amol_details = new Details("amol jhadav", 25);
let varioable_obj = new Details("gfhcjvk", 235);

console.log(sid_details);
console.log(amol_details);
console.log(varioable_obj);
/**
Details { name: 'amol jhadav', age: 25 }
Details { name: 'gfhcjvk', age: 235 }} name 
 */

// 2 factory function

function Details2(name, age) {
  return {
    name,
    age,
  };
}

let details2 = new Details2("sid", 26);
let details3 = new Details2("vaibahv", 28);

console.log(details2);
console.log(details3);

/**
{ name: 'sid', age: 26 }
{ name: 'vaibahv', age: 28 } 
 */

// example 2 -->

function BOOK_DETAILS(bookname, author, year) {
  return {
    bookname,
    author,
    year,
  };
}

let Atomic_Habbits = new BOOK_DETAILS("Atomic Habbits","robert",2017)

console.log(Atomic_Habbits)//{ bookname: 'Atomic Habbits', author: 'robert', year: 2017 }


// ES6 CLASS --> class is more than a object its blueprint to get object and its method  

// class defines the behavior of the object,  and the object will represent its parent class


/**
 * synTAX FOR CLASS  -->
 * 
 * class person {
 * 
 * }
 * 
 */

 class details{

//code 

 }