
//Destructring

//1 what is destructuring-->
//destrcturing is way of unpacking (opening) array and object and assign them to different varaibles 


// 2 destructing -->

let arr = [1,2,3,4,5]

let num1 = arr[0]
let num2 = arr[1]
let num3 = arr[2]
let num4 = arr[3]
let num5 = arr[4]


console.log(num1,num2,num3,num4,num5)

//example of destructuring an array 

let [number1,number2,number3,number4,number5] = arr


console.log(number1,number2,number3,number4,number5)

//destructing string array 
let strarr = ["siddhant","vaibhav","amol","darshan","radhey"]

let [name1,name2,name3,name4,name5]=strarr

console.log(name1,name2,name3,name4,name5)

// destructing nested array


// Example 4: Nested Arrays
let fullStack = [
    ["HTML", "CSS", "JS", "React", "Angular"],   // Frontend stack
    ["Node", "Express", "MongoDB", "SQL"]         // Backend stack
];

let [Frontend,Backend]=fullStack

console.log(Frontend)
console.log(Backend)

let [[fskill1,fskill2,fskill3,fskill4,fskill5],[bskill1,bskill2,bskill3,bskill4, bskill5]]=fullStack


console.log(fskill2)
console.log(bskill2)


// 3. Skipping Elements during Destructuring
let numbers = [1, 2, 3, 4];

let [num11 ,,,num44]=numbers
console.log(num11,num44)



// using destructing with spread opertaor 

let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let [q,x,...sss]=moreNumbers

console.log(q,x)
console.log(sss)


