// without parameter without return type
function Calculator1() {
  console.log(10 + 10);
}
// with parameter without return type
function calculaotr2(a, b) {
  console.log(a + b);
}
// Function with parameter and with return type

function Calculator3(a, b) {
  return a + b;
}
Calculator1();
calculaotr2(10, 10);
console.log(Calculator3(10, 10));
//Map,reduce,filter---

// How to raise jira ticket
// expected output not equal to actual output the you have to raise the bug on jira
//steps - 1. click on create button create
//2. select bug
//3. attach a epic link
//4.assign to the developer
// 5. In discription Add the steps to reproduce the bug and attach the screenshot of actual result and expected result
// 6. mention the proivority and seviority

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let A = ["a", "S", "h", "u", "t", "o", "s", "h"];
// function capitalizeArray(array){
//     let capital = []
//     for(let i=0;i<array.length;i++){
//         let itom = array[i].toUpperCase()
//         capital.push(itom)

//     }
//    console.log(capital)

// }

// console.log(capitalizeArray(["a","s","h"]));

function capital(array) {
  let capitalarr =array.map((el, index, arr) => {
    return el.toUpperCase();
  });

 return capitalarr
}

console.log(capital(["a","s","h"]))


