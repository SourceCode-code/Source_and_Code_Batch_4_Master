//Destructring

//1 what is destructuring-->
//destrcturing is way of unpacking (opening) array and object and assign them to different varaibles

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

// 3. Skipping Elements during Destructuring
let numbers = [1, 2, 3, 4];

let [num11, , , num44] = numbers;
console.log(num11, num44);

// using destructing with spread opertaor
let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [q, x, ...n] = moreNumbers;
console.log(q, x);
console.log(n);

// ---------------
// Destructing of object

let obj = {
  firstname: "siddhant",
  lastname: "gadakh",
  age: 26,
  exp: 4.5,
  skills: ["cypress ", "playwright", "js", "ts", "react"],
  position: "Senior Software engineer",
};

// syntax -->

let { firstname, lastname, age, exp, skills, position } = obj;

console.log( firstname, lastname, age, exp, skills, position )

// renaming varaible

let { firstname:fn, lastname:ln, age:ag, exp:ex, skills:sk, position:p}=obj

console.log(fn,ln,ag,ex,sk , p)

let [cy,pw,js,ts,react] =sk

console.log(cy,pw,js,ts,react)



let { firstname:fnn, lastname:lnn, age:agg, exp:exx, skills:[cyyp,pww,jss,tss,reattt] , position:pp}=obj

console.log(cyyp,pww,exx)


// -------------------------------------------------------------------------------

let obj2 ={
    empid:1234,
    exper:5,
    contract:10,
    salary:1000000
}


let {empid:id,exper:ex2,contract:con,salary:pay}=obj2

console.log(id,ex2,con,pay)


//----------------------------------------------------------

// SPREAD OPERATOR -->

// is denoted by ...


let arr2 = [1,2,3,4,5,6,7,8,9]

console.log(...arr2)

// it can be used to copy an arrray 

let numarr =[...arr2]

console.log(numarr)




// ----------------------------->


let xs = 10
let yss=20


//  how to swap varaibles 

// xs = xs ^ yss
// yss = xs ^ yss
// xs = xs ^ yss


// console.log(xs)
// console.log(yss)

// 

xs = xs+yss
yss = xs-yss
xs= xs-yss


console.log(xs)
console.log(yss)