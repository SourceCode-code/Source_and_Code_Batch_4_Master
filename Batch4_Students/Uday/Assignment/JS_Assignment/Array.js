// // let array_a  = []
// // let array_b = [20,"hello",30,true,null,undefined,[]]
// // let c = ["Wwqrwe",25,"wadfsdf",true]

// // console.log(array_a)
// // console.log(array_b)
// // console.log(c)

// // the total legth of array will be how to get length 

// //5 
let array_ex  = ["siddhant",27,"gadakh",true,null]
// console.log(array_ex.length) //5 
// // length -1 will always be last element 



// // Basic array operations 


// //1 how to retrive form array 

// console.log(array_ex[0]) //siddhant

// console.log(array_ex[array_ex.length-1]) //null

// //2 how to add element in array

// array_ex.push("last element") // it will add element at last 
// console.log(array_ex)   

// array_ex[3]= "male";
// // console.log(array_ex) // it will add element at first
console.log(array_ex[array_ex.length-1])
//4 how to delete a value form array 

delete array_ex[array_ex.length-1]

console.log(array_ex)
console.log(array_ex[array_ex.length-1])
console.log(array_ex.length) //5 it will not change the length of array it will just make the value undefined
console.log(array_ex.pop()) //null it will delete the value and return it
console.log(array_ex) // it will delete the last element of array and return it
console.log(array_ex.length) //4 it will change the length of array after deleting the last element 

