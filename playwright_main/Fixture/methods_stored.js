//Number Methods--
// 3 Math.round() - rounds to the nearest integer
// if the decimal part is 0.5 or greater (10.sometinhg  --> ifg something is greater 0.5), it rounds up; otherwise, it rounds down (10.00 -->10.05)

let num11 = 10.05;
let num12 = 10.99
let num13 = 10.00

console.log(Math.round(num11)) // 10
console.log(Math.round(num12)) //11
console.log(Math.round(num13)) //10
// Math.toFixed() - formats a number using fixed-point notation

let num6 = 10.123456789;

console.log(num6.toFixed(1)) // 10.1

console.log(num6.toFixed(2)) //10.12

console.log(num6.toFixed(3)) //10.123

//2 toString()--> use to convert number to string 

//let str2 =num8.toString()
// console.log(str2)
console.log(typeof str2)


//------array methods-----

let Marray = ["siddhant", "arjun", "gadakh", 26, 7020400749];

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

let carr = [0, 1, 2, 4];

carr.splice(3, 0, 3);
console.log(carr); //[ 0, 1, 2, 3, 4 ]

// 2 destructing -->

let arr = [1, 2, 3, 4, 5];

let num1 = arr[0];
let num2 = arr[1];
let num3 = arr[2];
let num4 = arr[3];
let num5 = arr[4];

console.log(num1, num2, num3, num4, num5);

//example of destructuring an array

let [number1, number2, number3, number4, number5] = arr;

console.log(number1, number2, number3, number4, number5);

//destructing string array
let strarr = ["siddhant", "vaibhav", "amol", "darshan", "radhey"];

let [name1, name2, name3, name4, name5] = strarr;

console.log(name1, name2, name3, name4, name5);

// destructing nested array

// Example 4: Nested Arrays
let fullStack = [
  ["HTML", "CSS", "JS", "React", "Angular"], // Frontend stack
  ["Node", "Express", "MongoDB", "SQL"], // Backend stack
];

let [Frontend, Backend] = fullStack;

console.log(Frontend);
console.log(Backend);

let [
  [fskill1, fskill2, fskill3, fskill4, fskill5],
  [bskill1, bskill2, bskill3, bskill4, bskill5],
] = fullStack;

console.log(fskill2);
console.log(bskill2);


// SPREAD OPERATOR -->

// is denoted by ...


let arr2 = [1,2,3,4,5,6,7,8,9]

console.log(...arr2)

// it can be used to copy an arrray 

let numarr =[...arr2]

console.log(numarr)

// git pull origin main  --> downlaods all the updates to the local
// git fetch             --> this gets the lastest data of all the branches this doesnt physciall downlaod 

