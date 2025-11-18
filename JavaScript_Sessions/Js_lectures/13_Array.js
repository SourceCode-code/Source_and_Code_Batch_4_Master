
//datatype -->
// 1 primitive  -->datatype which are simple and can't be changed (numbers , string , boolean, null, undefined)
//2 non primtive --> datatype which are complex and can be changed (array , object )

// array -->
let x = 10;
let y = 12;

//array  -> array is datatype which is used to stored multiple values

/**
 * 1 how to determine if datatype is an array
 *  an array is always defined by [square brackets ]
 *
 * 2 how to know if the value is separetaed or combine
 * in array each value is seprated by a comma
 *
 * 3 when we say muitple value what eactly stored (which datatype )
<<<<<<< HEAD
 * all datatypes can be stored in an array
 *
 
 * all datatypes can be stored in an array 
 
*/ 


//example of array and how to actutally delecare an array

// 1 way of delecraing an array

let arraya = [];
let arrayb = [];
console.log(arraya);

//2 way of delecraing an array  -- ignore this
const arr = Array();
console.log(arr);

// the  techincal difference between  primitive and non primitive

let a = 10,
  b = 10;

console.log(a === b); //true

console.log(arraya === arrayb); //false

// why this happens --> two primitive can be equal but two non primitive data can never be equal
// values in array are stored in indexes ,
// length -1 is always the last index

// ARRAY --> will also have properties and methods

// array has a property called as length
// array has vast number of methods

// example of a array
//              0       1    2      3     4
let arrc = ["siddhant", 26, "gadakh", true, null];

//1 how to access a particular data in array (extraction )
console.log(arrc[0]);

console.log(arrc[1]);

//2 how to update a value in an array
arrc[0] = "SID";

console.log(arrc);

//3 delete a value form array

delete arrc[0];
console.log(arrc);

let str = "siddhant arjun gadakh"; //[ 'siddhant', 'arjun', 'gadakh' ]
let str2 = str.split(" ");
console.log(str2);

//---------------------------------- METHODS ON ARRAY -------------------------------------------------------------------
//METHOD --> when we use method we get 2 thing that is output and return type
let Marray = ["siddhant", "arjun", "gadakh", 26, 7020400749];

//OUTPUT -->result of action performed
//RETURN TYPE -->the datatype of the out recived

//1 METHOD push()--> ADDS A VALUE AT THE END OF THE ARRAY

Marray.push("male");
console.log(Marray); // output -->[ 'siddhant', 'arjun', 'gadakh', 26, 7020400749, 'male' ]

//2 METHOD unshift()--> ADDS A VALUE AT THE START OF THE ARRAY

Marray.unshift("MR");
console.log(Marray); // output ['MR', 'siddhant','arjun', 'gadakh',26,  7020400749, 'male']

//3 METHOD pop()--> REMOVES A VALUE AT THE END OF THE ARRAY

Marray.pop();
console.log(Marray); //output [ 'MR', 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

//4 METHOD shift()--> REMOVES A VALUE AT THE START OF THE ARRAY
Marray.shift();
console.log(Marray); // output [ 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

//5 METHOD splice() --> Used to add or remove a value at any index of the array

// example --> splice( starting index , number character) == substr()

let arrsplice = Marray.splice(0, 3);

console.log(arrsplice); //[ 'siddhant', 'arjun', 'gadakh' ]
console.log(Marray);

console.log("-----------------------------");
let bArray = ["siddhant", "arjun", "gadakh", 26, 7020400749];

//5 METHOD splice() --> Used to add or remove a value at any index of the array  = substring()

// Arr.slice( starting , endingindex) // will not inculde ending index
let arrslice = bArray.slice(0, 3);

console.log(arrslice);
console.log(bArray);

// adding value in anypostion in array using splice

let Carr = [0, 1, 2, 4];

Carr.splice(3, 0, 3);
console.log(Carr); //[ 0, 1, 2, 3, 4 ]

//6 METHOD sort() --> this method will alphabetically sort your array

let alarr = ["banana", "apple", "mango", "watermleon"];

let sortedarr = alarr.sort();

console.log(sortedarr); //[ 'apple', 'banana', 'mango', 'watermleon' ]

let numarr = [1, 1000, 100, 50, 20, 55, 65, 89, 999];

let sortednum = numarr.sort();
     
console.log(sortednum); //[ 1, 100, 1000, 20,50,  55,   65, 89, 999]

// how to sort a array for numbers

let sortednum1 = numarr.sort((a, b) => {
  return a - b;
});

console.log(sortednum1); // sorted array in ascendiong order[  1, 20,  50,  55,65, 89, 100, 999, 1000]

let sortednum2 = numarr.sort((a, b) => {
  return b - a;
});

console.log(sortednum2); //sorted array in descending order[1000, 999, 100, 89, 65,  55,  50, 20,  1]

//6 METHOD reverse()  --> This method will reverse the array

//[ 'apple', 'banana', 'mango', 'watermleon' ]

let revarrv = sortedarr.reverse();
console.log(revarrv); //[ 'watermleon', 'mango', 'banana', 'apple' ] reversed array

//7 METHOD includes() --> Check if an array includes the value

console.log(revarrv.includes("Banana")); //banana

//8 METHOD indexOf()--> gives the index of the given value

console.log(revarrv.indexOf("banana"));

//9 join() --> Converts an array into string

let strarr = revarrv.join("---");

console.log(strarr);

//10 METHOD concat() ----> this method is used to concat 2 or more array

let nu = [1, 2, 3];
let num = [4, 5, 6];
let numb = [7, 8, 9];

let combine1 = nu.concat(num, numb);

console.log(combine1);

//11 METHOD Flat() --> flatten the array

let mixedarr = [1, 2, 3, ["qwer", ["ertyu"], "uhbvc"], [true, false]]; // --- > convert this into a single array

let sloved = mixedarr.flat();
console.log(sloved); ////[  1,       2,3,       'qwer','ertyu', 'uhbvc',true,    false]

//Math.max()  ---> gets the largest num
//let numarr = [1 , 1000,100,50,20,55,65,89,999]
// ... this is a spread opertor --> converts array into number
console.log(Math.max(...numarr)); //1000

//Math.min()--> gets the smallest num
console.log(Math.min(...numarr));

console.log(...revarrv);

//--------------------------------- LOOPS IN ARRAY ----------------------------------------------------------------------

//for loops
//          0  1  2  3  4   5  6 7  8   9
let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(larr.length); //10

// syntax for loop in array     

//index starts form 0  --> it refers to the value stored.
// length will start 1 --> it refers to total size of array.

//normal for loop.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

for (let i = 0; i < larr.length; i++) {
  console.log(larr[i]);
} 

// -------------------------------------------------------

//let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// out = [4,5,6,7,8,9,10,11,12,13]
let add3arr = [];
for (let i = 0; i < larr.length; i++) {
  add3arr.push(larr[i] + 3);
}
console.log(add3arr); //[4,  5,  6,  7,  8,9, 10, 11, 12, 13]

//let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filter5 = [];

for (let i = 0; i < larr.length; i++) {
  if (larr[i] >= 5) {
    filter5.push(larr[i]);
  }
}

console.log(filter5); //[ 5, 6, 7, 8, 9, 10 ]

let qarr = [100, 50, 1000, 3000, 4000, 5000, 10000, 55, 66, 788, 999];

// xyz
let sum = 0;
for (let i = 0; i < qarr.length; i++) {
  sum = sum + qarr[i];
}

console.log(sum); //25058

let mixnum = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let odd = [];
let even = [];

for (let i = 0; i < mixnum.length; i++) {
  if (mixnum[i] % 2 === 0) {
    even.push(mixnum[i]);
  } else {
    odd.push(mixnum[i]);
  }
}

console.log(even); // [2,  4,  6,  8, 10,12, 14, 16, 18, 20]
console.log(odd); // [3,  5,  7,  9, 11,13, 15, 17, 19]

//example

let names = ["siddhant", "amol", "vaibhav", "shree", 0, "arjun", "amal"];
// output should --> every element should in captial
// all the names that start with a should be in anew array
let aname = [];

let strnames = [];

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] === "string") {
    let cap = names[i].toUpperCase();
    strnames.push(cap);
  }
}

console.log(strnames); //[ 'SIDDHANT', 'AMOL', 'VAIBHAV', 'SHREE', 'ARJUN', 'AMAL' ]

for (let i = 0; i < strnames.length; i++) {
  if (strnames[i].startsWith("A")) {
    aname.push(strnames[i]);
  }
}
console.log(aname); //[ 'AMOL', 'ARJUN', 'AMAL' ]

//------------------- Advance method of array --------------------------

// map , filter , reduce , forEach

//MAP() ---> it will iterate over element in the array to perfom a operation and its return is a new array of the output of performed operation

let num3 = [2, 8, 7, 3, 35, 58, 69, 34567, 367, 2, 3, 4, 5, 67, 8, 9, 0];

// add every by 5

/**
 * el --> current element
 * index --> index of that current element
 * arr --> the original array
 */

let add5 = num3.map((el, index, arr) => {
  return el + 5;
});

console.log(add5); //[7,13,12,8,40,63,74,34572,372,7,8,9,10, 72, 13,14,5]

let Snames = strnames.map((el, index, arr) => {
  return el.toLowerCase();
});


// adding value in anypostion in array using splice 

let carr = [0,1,2,4]

carr.splice(3,0,3)
console.log(carr) //[ 0, 1, 2, 3, 4 ]


let snames = strnames.map((el,index,arr)=>{
  return el.toLowerCase()
})
console.log(snames); //[ 'siddhant', 'amol', 'vaibhav', 'shree', 'arjun', 'amal' ]


// filter --> it will filter out  element in the array to and its return is a new array of the output of filtered element


let filterA = snames.filter((el, index, arr) => {
  return el.startsWith("a");
});

console.log(filterA);

// -----------------------------------------------------------

let num_mix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even_num = num_mix.filter((el, index, arr) => {
  return el % 2 == 0;
});

console.log(even_num); //[ 2, 4, 6, 8, 10 ]

//forEach() -->a method to perform opertion on every element of array but it does not retrun a new array

snames.forEach((el, index, arr) => {
  console.log(el.toUpperCase());
});

// pro tip --> in cypress and playwright instead loop we pefer forEach method   -->cypress has its own method for looping called as each

// reduce()--> this method is used to get the sum of all the elements in the array this also retrun the sum in a new array

let num_1_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//  sum = sum + qarr[i];

// syntax
// here acc is accumaltor similar to the varaible of sum deleceraed as zero(let sum = 0;)

let sum_total = num_1_arr.reduce((acc, el, index, arr) => {
  return el + acc;
}, 0);
console.log(sum_total);

// some && every --> check if array matchs the given condition or not

// some --> check if some of varaible match the condition

let arr_11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let checksome = arr_11.some((el, index, arr) => {
  return el > 5;
});

console.log(checksome); //boolean --> t or f (T) this will act as a or (||)

// every -->check if every of varaible match the condition  this is && for array

let checkevery = arr_11.every((el, index, arr) => {
  return el < 100;
});

console.log(checkevery);

//------------------------------------------------------------------------------------------------

let numarr1 = [1, "Vaibhav","siddhant","amol",1000, 100, 50, 20, 55, 65, 89, 999];
let numvale = [];
let strnames_1 = [];

for (let i = 0; i < numarr1.length; i++) {
  if (typeof numarr1[i] === "string") {
    let cap = numarr1[i].toUpperCase();
    strnames_1.push(cap);
  }
  else{
    numvale.push(numarr1[i])
  }
}
console.log(strnames_1)
console.log(numvale)
let sorted_names=strnames_1.sort()
let sorted_num=numvale.sort((a,b)=>{return a-b})
console.log(sorted_num)
console.log(sorted_names)
let new_final_arr=sorted_names.concat(sorted_num)
console.log(new_final_arr)
