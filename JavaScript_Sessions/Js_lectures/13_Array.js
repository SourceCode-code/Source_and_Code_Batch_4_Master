// data types in js -->
// primitive     -->simple and cannot be changed
// non primitive -->complex which can be manipulated 

// primitive --> numbers , string , boolean , null , undefined
// non primitive --> array and objects 

//ARRAY --> a datatype which is used to store mulitple values (multiple datatypes)

// how to determine if a datatype is an array ?

// use sqaure [ ] to define an array 
// each value is separted by (,) comma 
// here the values are stored by index 
// here length -1 will always be last element

// example ===>
//            0        1   2     3
let arr = ["siddhant",26,"male",true] 

console.log(arr)

// array has a property which called as length 
console.log(arr.length)


let str = "my name is siddhant"

console.log(str.split(" ")) //[ 'my', 'name', 'is', 'siddhant' ]

// extraction
console.log(arr[0])
console.log(arr[arr.length-1])

//updation
arr[0]="SID"
console.log(arr)
//deletion
delete arr[0]
console.log(arr)

//addition


//every data type has methods and properties
// methods has a output and a return type 
let arr1 = ["siddhant",26,"male",true] 

// Addition -->
// 1 push() if you have to add a element at the end of the array 
arr1.push("Gadakh")
console.log(arr1)

// output - > [ 'siddhant', 26, 'male', true, 'Gadakh' ]
// return type is an array

// 2 unshift() -->  if you have to add a element at the start of the array 

arr1.unshift(7020400749)
console.log(arr1)