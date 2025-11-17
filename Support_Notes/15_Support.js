// //datatype -->
// // 1 primitive  -->datatype which are simple and can't be changed (numbers , string , boolean, null, undefined)
// //2 non primtive --> datatype which are complex and can be changed (array , object )


// // array -->
// let x = 10;
// let y = 12;

// //array  -> array is datatype which is used to stored multiple values

// /**
//  * 1 how to determine if datatype is an array
//  *  an array is always defined by [square brackets ]
//  *
//  * 2 how to know if the value is separetaed or combine
//  * in array each value is seprated by a comma
//  *
//  * 3 when we say muitple value what eactly stored (which datatype )
//  * all datatypes can be stored in an array
//  *
//  */

// //example of array and how to actutally delecare an array

// // 1 way of delecraing an array

// let arraya = [];
// let arrayb = [];
// console.log(arraya);

// //2 way of delecraing an array  -- ignore this
// const arr = Array();


// // the  techincal difference between  primitive and non primitive

let a = 10,
  b = "10";

// console.log(a ===b); //true 

// console.log(arraya === arrayb); //false

// // why this happens --> two primitive can be equal but two non primitive data can never be equal
// // values in array are stored in indexes ,
// // length -1 is always the last index

// // ARRAY --> will also have properties and methods

// // array has a property called as length
// // array has vast number of methods

// // example of a array
// //              0       1    2      3     4
let arrc = ["siddhant", 26, "gadakh", true, null];


// //1 how to access a particular data in array (extraction )
// console.log(arrc[0]);

// console.log(arrc[1]);

// // //2 how to update a value in an array
arrc[5] = "SID";

// console.log(arrc);

// // //3 delete a value form array

// delete arrc[1];
// console.log(arrc);

// let str = "siddhant arjun gadakh"; //[ 'siddhant', 'arjun', 'gadakh' ]
// let str2 = str.split(" ");
// console.log(str2);

// //---------------------------------- METHODS ON ARRAY -------------------------------------------------------------------
// //METHOD --> when we use method we get 2 thing that is output and return type
let Marray = ["siddhant", "arjun", "gadakh", 26, 7020400749];

// //OUTPUT -->result of action performed
// //RETURN TYPE -->the datatype of the out recived

// //1 METHOD push()--> ADDS A VALUE AT THE END OF THE ARRAY
//  Marray.push("male");
// console.log(Marray); // output -->[ 'siddhant', 'arjun', 'gadakh', 26, 7020400749, 'male' ]
// Marray[9]=""
// //2 METHOD unshift()--> ADDS A VALUE AT THE START OF THE ARRAY

// Marray.unshift("MR");
// console.log(Marray); // output ['MR', 'siddhant','arjun', 'gadakh',26,  7020400749, 'male']

// //3 METHOD pop()--> REMOVES A VALUE AT THE END OF THE ARRAY

// Marray.pop();
// console.log(Marray); //output [ 'MR', 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

// //4 METHOD shift()--> REMOVES A VALUE AT THE START OF THE ARRAY
// Marray.shift();
// console.log(Marray); // output [ 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

// string =Subster and substring
// subster= string.subster(starting index,number of char )

// substring  string.substring(starting index,ending index )

// //5 METHOD splice() --> Used to add or remove a value at any index of the array

//  example --> splice( starting index , number character) == substr()
// let arr= [ 'MR', 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]
// arr.splice(3,2)
// let arrsplice = Marray.splice(0, 3);

// console.log(arrsplice); //[ 'siddhant', 'arjun', 'gadakh' ]
// console.log(Marray);

// console.log("-----------------------------");
// let bArray = ["siddhant", "arjun", "gadakh", 26, 7020400749];

// Splice==== subster(straing index, num of char)
// slice=substring(starting index, ending index)

// //5 METHOD splice() --> Used to add or remove a value at any index of the array  = substring()
// Arr.slice( starting , endingindex) // will not inculde ending index
// let arrslice = bArray.slice(0, 3);
// let arr= [ 'MR', 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]
//  arr.slice(1,3)= substring 

// console.log(arrslice);
// console.log(bArray);

// // adding value in anypostion in array using splice

// let carr = [0, 1, 2, 4];

// carr.splice(3, 0, 3);
// console.log(carr); //[ 0, 1, 2, 3, 4 ]


// //6 METHOD sort() --> this method will alphabetically sort your array

// let alarr = ["banana", "apple", "mango", "watermleon"];

//  let sortedarr = alarr.sort();

// console.log(sortedarr); //[ 'apple', 'banana', 'mango', 'watermleon' ]

// let numarr = [1, "Vaibhav","siddhant","amol",1000, 100, 50, 20, 55, 65, 89, 999];
// // let sortednum = numarr.sort(     );

// // console.log(sortednum); //[ 1, 100, 1000, 20,50,  55,   65, 89, 999]

// // // how to sort a array for numbers

// let sortednum1 = numarr.sort((a,b)=>{
//     return b-a
// });

// console.log(sortednum1); // sorted array in ascendiong order[  1, 20,  50,  55,65, 89, 100, 999, 1000]

// let sortednum2 = numarr.sort((a, b) => {
//   return b - a;
// });

// console.log(sortednum2); //sorted array in descending order[1000, 999, 100, 89, 65,  55,  50, 20,  1]

// //6 METHOD reverse()  --> This method will reverse the array

// //[ 'apple', 'banana', 'mango', 'watermleon' ]

// let revarrv = sortedarr.reverse();
// console.log(revarrv); //[ 'watermleon', 'mango', 'banana', 'apple' ] reversed array

// //7 METHOD includes() --> Check if an array includes the value

// console.log(revarrv.includes("Banana")); //banana

// //8 METHOD indexOf()--> gives the index of the given value

// console.log(revarrv.indexOf("banana"));

// //9 join() --> Converts an array into string

// let strarr = revarrv.join("---");
// let numarr = [1, "Vaibhav","siddhant","amol",1000, 100, 50, 20, 55, 65, 89, 999];
// let stringsrr=numarr.join(" ")
// console.log(Array(stringsrr).join(""))

// console.log(strarr);

// //10 METHOD concat() --> this method is used to concat 2 or more array

// let nu = [1, 2, 3];
// let num = [4, 5, 6];
// let numb = [7, 8, 9];

// let combine1 = nu.concat(num, numb);

// console.log(combine1);

// //11 METHOD Flat() --> flatten the array
//  let mixedarr = [1, 2, 3, ["qwer", ["ertyu"], "uhbvc"], [true, false]]; // --- > convert this into a single array

// let sloved = mixedarr.flat(2);
// console.log(sloved); ////[  1,       2,3,       'qwer','ertyu', 'uhbvc',true,    false]


// //Math.max()  ---> gets the largest num
let numarr = [1 ,4,1000,100,50,20,55,65,89,999]
// // ... this is a spread opertor --> converts array into 

console.log(Math.min(...numarr)); //1000

// //Math.min()--> gets the smallest num
// console.log(Math.min(...numarr));

// console.log(...revarrv);

// //--------------------------------- LOOPS IN ARRAY ----------------------------------------------------------------------

// //for loops
// //          0  1  2  3  4   5  6 7  8   9
// let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(larr.length); //10

// // syntax for loop in array

// //index starts form 0  --> it refers to the value stored
// // length will start 1 --> it refers to total size of array

// //normal for loop

// // for (let i = 1; i <= 10; i++) {
// //   console.log(i);
// // }

// for (let i = 0; i < larr.length; i++) {
//   console.log(larr[i]);
// }

// // ------------------------------------------------------

// //let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // out = [4,5,6,7,8,9,10,11,12,13]
// let add3arr = [];
// for (let i = 0; i < larr.length; i++) {
//   add3arr.push(larr[i] + 3);
// }
// console.log(add3arr); //[4,  5,  6,  7,  8,9, 10, 11, 12, 13]

// //let larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter5 = [];

// for (let i = 0; i < larr.length; i++) {
//   if (larr[i] >= 5) {
//     filter5.push(larr[i]);
//   }
// }

// console.log(filter5); //[ 5, 6, 7, 8, 9, 10 ]

// let qarr = [100, 50, 1000, 3000, 4000, 5000, 10000, 55, 66, 788, 999];

// // xyz
// let sum = 0;
// for (let i = 0; i < qarr.length; i++) {
//   sum = sum + qarr[i];
// }

// console.log(sum); //25058

// let mixnum = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

// let odd = [];
// let even = [];

// for (let i = 0; i < mixnum.length; i++) {
//   if (mixnum[i] % 2 === 0) {
//     even.push(mixnum[i])
//   }
//   else{
//     odd.push(mixnum[i])
//   }
// }

// console.log(even)// [2,  4,  6,  8, 10,12, 14, 16, 18, 20]
// console.log(odd)// [3,  5,  7,  9, 11,13, 15, 17, 19]
// let mixedarr = [1, 2, 3,5,[6,[7,8,[9,10]]],["qwer", ["ertyu"], "uhbvc"], [true, false]]; // --- > convert this into a single array

// let sloved = mixedarr.flat(3);
// console.log(sloved);

// let str = "hello my name is Amol Kantilal jadhav"
// let str1 = str.split("")
// console.log(str1)
// mystring = {}
// for(let key of str1){
// mystring[key]=(mystring[key]||0)+1
// }
// let check = Object.entries(mystring).map(([word,count])=>({word,count})).sort((a,b)=>(a.count-b.count))
// console.log(check)
// larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //2 how to update a value in an array
// arrc[0] = "SID";

// //1 METHOD push()--> ADDS A VALUE AT THE END OF THE ARRAY

// Marray.push("male");
// console.log(Marray); // output -->[ 'siddhant', 'arjun', 'gadakh', 26, 7020400749, 'male' ]

// //2 METHOD unshift()--> ADDS A VALUE AT THE START OF THE ARRAY

// Marray.unshift("MR");
// console.log(Marray); // output ['MR', 'siddhant','arjun', 'gadakh',26,  7020400749, 'male']

// let arr=[ 'siddhant', 'arjun', 'gadakh', 26, 7020400749, 'male' ]
// arr[6]=312
// console.log(arr)

// total methods to 
// add -3 Index, push  and unshift
// delete = Delete(using index),Pop, shift 