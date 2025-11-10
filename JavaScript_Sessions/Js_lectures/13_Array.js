//datatype -->
// 1 primitive  -->datatype which are simple and can't be changed (numbers , string , boolean, null, undefined)
//2 non primtive --> datatype which are complex and can be changed (array , object )


// array --> 
let x = 10 
let y = 12

//array  -> array is datatype which is used to stored multiple values 

/** 
 * 1 how to determine if datatype is an array 
 *  an array is always defined by [square brackets ]
 * 
 * 2 how to know if the value is separetaed or combine 
 * in array each value is seprated by a comma 
 * 
 * 3 when we say muitple value what eactly stored (which datatype )
 * all datatypes can be stored in an array 
 * 
 */

//example of array and how to actutally delecare an array

// 1 way of delecraing an array 

let arraya = []
let arrayb = []
console.log(arraya)

//2 way of delecraing an array  -- ignore this  
const arr = Array()
console.log(arr)


// the  techincal difference between  primitive and non primitive 

let a = 10 , b=10

console.log(a===b) //true

console.log(arraya ===arrayb) //false

// why this happens --> two primitive can be equal but two non primitive data can never be equal
// values in array are stored in indexes ,
// length -1 is always the last index 

// ARRAY --> will also have properties and methods 

// array has a property called as length 
// array has vast number of methods

// example of a array 
//              0       1    2      3     4
let arrc = ["siddhant",26,"gadakh",true,null]

//1 how to access a particular data in array (extraction )
console.log(arrc[0])

console.log(arrc[1])


//2 how to update a value in an array 
arrc[0]= "SID"

console.log(arrc)


//3 delete a value form array 

delete arrc[0]
console.log(arrc)

let str="siddhant arjun gadakh" //[ 'siddhant', 'arjun', 'gadakh' ]
let str2=str.split(" ")
console.log(str2)

//---------------------------------- METHODS ON ARRAY -------------------------------------------------------------------
//METHOD --> when we use method we get 2 thing that is output and return type 
 let Marray = ["siddhant", "arjun", "gadakh",26,7020400749]

//OUTPUT -->result of action performed
//RETURN TYPE -->the datatype of the out recived

//1 METHOD push()--> ADDS A VALUE AT THE END OF THE ARRAY 

Marray.push("male")
console.log(Marray) // output -->[ 'siddhant', 'arjun', 'gadakh', 26, 7020400749, 'male' ]

//2 METHOD unshift()--> ADDS A VALUE AT THE START OF THE ARRAY 

Marray.unshift("MR")
console.log(Marray) // output ['MR', 'siddhant','arjun', 'gadakh',26,  7020400749, 'male']

//3 METHOD pop()--> REMOVES A VALUE AT THE END OF THE ARRAY 

Marray.pop()
console.log(Marray) //output [ 'MR', 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

//4 METHOD shift()--> REMOVES A VALUE AT THE START OF THE ARRAY 
Marray.shift()
console.log(Marray) // output [ 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

//5 METHOD splice() --> Used to add or remove a value at any index of the array 

// example --> splice( starting index , number character) == substr()

let arrsplice = Marray.splice(0,3)

console.log(arrsplice) //[ 'siddhant', 'arjun', 'gadakh' ]
console.log(Marray)

console.log("-----------------------------")
let bArray = [ 'siddhant', 'arjun', 'gadakh', 26, 7020400749 ]

//5 METHOD splice() --> Used to add or remove a value at any index of the array  = substring()
// Arr.slice( starting , endingindex) // will not inculde ending index
let arrslice = bArray.slice(0,3)

console.log(arrslice)
console.log(bArray)


// adding value in anypostion in array using splice 

let carr = [0,1,2,4]

carr.splice(3,0,3)
console.log(carr) //[ 0, 1, 2, 3, 4 ]
