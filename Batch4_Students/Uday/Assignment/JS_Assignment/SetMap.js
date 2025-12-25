const set1 = new Set();
console.log(set1); //Set(0) {}

// we can use set to remove duplicate valuie for array
// how to convert array to set
let arr = [1, 1, 2, 2, 3, 3, 1, 1, 1];

console.log("====================set2=====================");

let set2 = new Set(arr);

console.log(set2); 

let lang = [
  "english",
  "german",
  "french",
  "spanish",
  "hindi",
  "marathi",
  "english",
  "hindi",
];

let set3 = new Set(lang);
console.log(set3); //Set(6) { 'english', 'german', 'french', 'spanish', 'hindi', 'marathi' }

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1);

console.log(arr2); // [1, 2, 3]

const user = { name: "Uday", age: 25 };
const copiedUser = { ...user };

console.log(copiedUser);

const myMap = new Map();

// Adding values
myMap.set("name", "Uday");
myMap.set("age", 25);
myMap.set(1, "Number key");
myMap.set(true, "Boolean key");

console.log(myMap);
