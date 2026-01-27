const set1 = new Set();
console.log(set1); //Set(0) {}

// we can use set to remove duplicate valuie for array
// how to convert array to set
let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

let set2 = new Set(arr);

console.log(set2); //Set(1) { 1 }
