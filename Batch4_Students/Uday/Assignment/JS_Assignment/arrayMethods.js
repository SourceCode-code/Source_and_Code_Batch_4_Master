// // // ----------------------------------- METHODS ON ARRAY -----------------------------------------------------------------

// // // WHEN EVER WE USE ANY METHOD WE GET 2 THINGS 

// // //OUTPUT --> result of the action performed 
// // //RETURN TYPE --> THE DATATYPE OF THE OUTPUT RECVIED

// // let Method_array = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]

// // // 1 METHOD  --> push() --> THIS METHOD WILL ADD A ELEMENT AT THE END OF ARRAY 

// // // Sytnax -->  arrayName.push(value that is to be added )

// // // // example --> 

// // Method_array.push("Sangamner")
// // console.log(Method_array)
// // let city = Method_array.pop()
// // console.log(Method_array)
// // console.log(city)

// // // ACTION      --> action the element is removed  form the end  
// // // RETURN TYPE --> the datatype of removed element  


// // // 4 METHOD --> shift() --> THIS METHOD IS USED TO REMOVE THE START ELEMENT FORM THE ARRAY 
// // // Sytnax -->  arrayName.shift()
// // // example

// // // let initails = Method_array.shift()
// // // console.log(Method_array)
// // // console.log(initails)


// // // ACTION      --> action the element is removed  form the start  
// // // RETURN TYPE --> the datatype of removed element  

// // // 5 METHOD  splice()-->  THIS IS USED TO REMOVE ELEMENTS FORM THE ARRAY 

// // // syntax --> arrayName.splice("starting index" ,number of charatcter to remove)
//  let Method_array = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]
// let arrSplice = Method_array.splice(0, 2)

//  console.log(arrSplice)

// // // ACTION      --> action the given  element are removed  
// // // RETURN TYPE -->  the return type is a new array with removed elements  

// let Method_array_1 = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]

// let arrSlice = Method_array_1.splice(0, 2)

// console.log(arrSlice)
// // ACTION      --> action the given  element are removed  
// // RETURN TYPE -->  the return type is a new array with removed elements  

// // HOW TO SORT A ARRAY WITH NUMBERS 

// // syntax --> arrayName.sort((a,b)=>{return a-b})
// let number_array = [258, 654, 9, 5, 95, 67, 98745, 0, 682, 789, 34, 456, 24785]
// let sorted_number_array = number_array.sort((a, b) => { return a - b })
// console.log(sorted_number_array)
// /*
// [
//       0,   5,   9,    34,
//      67,  95, 258,   456,
//     654, 682, 789, 24785,
//   98745
// ]*/
// //8 METHOD --> reverse() --> this method will reverse your array 


// console.log(sorted_number_array.reverse())

// // action --> reverse the element 
// // return type --> array 

// // NOTE :- combvination of spilt / reverse / join is used to revsre a string 

// // example :-

// let str = "siddhant"

// // i want output as "tnahddis"

// let split_str = str.split('')
// console.log(split_str) // [ 's', 'i', 'd', 'd', 'h', 'a', 'n', 't' ]
// console.log(split_str.reverse().join('')) // tnahddis
// //console.log(str.reverse()) // error because reverse is not a method of string   

// // oneline solution

// console.log(str.split("").reverse().join(""))

// //9 METHOD  join() --> this method will convert your array into string 

// // example -> 

// let name = ["siddhant", "arjun", "gadakh"]

// console.log(name.join(" "))

// // action --> coverts array into string 
// // return type is string .

// // 10 METHOD includes() --> to check if the element is present in the array or not 

// // example 

// let fruits_array = ["mango","apple","banana ","watermelon","chiku"]

// console.log(fruits_array.includes("grape")) // false
// console.log(fruits_array.includes("watermelon")) // true

// // action      -->check if element is avaiable 
// // return type -->boolean 

// //11 METHOD  concat() --> this method is used to join two or more arrays 

// // example 

// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let c = [7, 8, 9]


// let combine_array = a.concat(b, c)
// console.log(combine_array) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // action       --> joining all the arrays 
// // return type  --> a new joined array

// // 12 METHOD Flat() --> this is used to flatten the array 
// // if in a single array there are mutiple array and you want to combine them all 

// let mix_array = [1, 2, 3, ["qwert"], ["tryu"], "ubhav", [true, false]]

// console.log(mix_array.flat())

// // action --> action we are flatting the array 
// // return --> a new flaten array 

// // NOTE --> 

// // find me the largest number and the smallest number in a  array

// //let number_array = [258,654,9,5,95,67,98745,0,682,789,34,456,24785]
// //console.log(number_array.sort((a,b)=>{return a-b}))
// console.log(number_array.sort((a,b)=>{return a-b})[0]) //0
// console.log(number_array.sort((a,b)=>{return a-b})[number_array.length-1]) //98745


// // ... this is called a spread opeartor  --> converts array into numbers 

// // on number we have 2 methods called as Math.max() and Math.min()

// //Math.max() --> used to find the largest number 

// // console.log(Math.max(...number_array)) //98745

// // console.log(Math.min(...number_array)) //0

// let a = [null,1,true,"uday",[1],"gadakh",true,null]
// console.log(a.length)
// console.log(a)
// a[5]= "patil"
// console.log(a)
// delete a[0] 
// console.log(a)
// console.log(a.length) //7 it will not change the length of array it will just make the value undefined
// delete a[a.length-1]
// console.log(a)
// console.log(a.length) //7 it will not change the length of array it will just make the value undefined
// let b = [1,2,3,4,5]
// delete b[b.length-1]
// console.log(b)
// console.log(b.length) //5 it will not change the length of array it will just make the value undefined

// let array_ex = [10, 20, 30, 40];

// delete array_ex[array_ex.length - 1];

// console.log(array_ex);
// console.log(array_ex.length);

// Push method will add element at the end of array and return the new length of array
// let b = [1,2,3,4,5]
// // console.log("Push",b.push(6)) //6
// // console.log(b);

// // unshift method will add element at the start of array and return the new length of array
// // b.unshift(0)//7
// // console.log(b);

// // b.splice(0,1)
// // console.log(b)

// let nb =b.slice(0,2)
// console.log(nb)
// console.log(b)

// let Method_array_1 = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]

// let arrSplice = Method_array_1.splice(0, 2)

// console.log(arrSplice)

// let name = "uday";
// let revers = name.split("").reverse().join("");
// console.log(revers);

let array = ["uday", "narayan", "Patil"];
console.log(array.join(" "));
console.log(array.toUpperCase());


