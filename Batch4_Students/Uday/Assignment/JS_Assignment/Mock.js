let arr1 = [1,2,3,4,5]
//Out put should be [3,4,5,1,2]
// let array1
// let array2
// for(let i=0;i<arr1.length;i++)
// {
//     if(arr1[i]<2){
//     array1.push[i]
//     }
    
//     else{

//     array2.push[i]
//     }
// }
// console.log(array1)
// console.log(array

// console.log("=====Method One=======")

// arr1.push(arr1.shift())
// arr1.push(arr1.shift())
// console.log(arr1)

console.log("=====Method Two=======")
arr1.push(...arr1.splice(0,2))
//console.log(arr1.flat())
console.log(arr1)



