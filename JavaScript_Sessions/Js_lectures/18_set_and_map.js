// Set and Map

// Set --> A collection of unique values (set does not have duplicate value  )

// ex  arr = [1,1,1,1,1,1,1,1,1]

// How to delecare a set

const set1 = new Set();
console.log(set1); //Set(0) {}

// we can use set to remove duplicate valuie for array
// how to convert array to set
let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

let set2 = new Set(arr);

console.log(set2); //Set(1) { 1 }

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

// looping thorugh set

for (const lan of set3) {
  console.log(lan);
}

// english
// german
// french
// spanish
// hindi
// marathi

// Operations on set

// adding element set
let comparr = ["google", "amazon", "microsoft", "netflix", "facebook"];
let compset = new Set();

for (let company of comparr) {
  compset.add(company);
}

console.log(compset);

// if you want to add a unique to set
//Set(5) { 'google', 'amazon', 'microsoft', 'netflix', 'facebook' }

// orcale

compset.add("orcale");
console.log(compset);

// how to delete value form set

compset.delete("amazon");
console.log(compset); //Set(5) { 'google', 'microsoft', 'netflix', 'facebook', 'orcale' }

// clear the set
compset.clear();
console.log(compset); //Set(0) {}

// union of set

let arr2 = [1, 2, 3, 4];
let arr3 = [4, 5, 6, 7, 8];

let arr4 = [...arr2, ...arr3];
console.log(arr4); //[1, 2, 3, 4, 4,5, 6, 7, 8]

setofnum1 = new Set(arr4);

console.log(setofnum1); //Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

// intersection of set

let x = [1, 2, 3, 4, 5, 6, 6, 4];
let y = [5, 6, 7, 8, 9, 10, 6, 5];

let setx = new Set(x);
let sety = new Set(y);

console.log(setx); //Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(sety); //Set(6) { 5, 6, 7, 8, 9, 10 }

let intersection = x.filter((el) => sety.has(el));
let setinter = new Set(intersection);
console.log(setinter); //Set(2) { 5, 6 }

//Difference
let Difference = x.filter((el) => !sety.has(el));
let diff2 = y.filter((el) => !setx.has(el));

let diffset = [...Difference, ...diff2];

let difset = new Set(diffset);

console.log(difset); //Set(8) { 1, 2, 3, 4, 7, 8, 9, 10 }

// Map --> A collection of unique values but the values are in key value pair (map does not have duplicate value  )

let countarr = [
  ["indian", "hindi"],
  ["usa", "english"],
  ["germnay", "german"],
];

let map1 = new Map(countarr);

console.log(map1);

/**
Map(3) {
  'indian' => 'hindi',
  'usa' => 'english',
  'germnay' => 'german'
}
 */
