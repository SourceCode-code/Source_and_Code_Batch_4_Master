// // let arr = ["akkash","swapnil",124356]
// // let [n1,n2,n3] = arr
// // console.log(n1,n2,n3)

// // let fullStack = [
// //   ["HTML", "CSS", "JS", "React", "Angular"], // Frontend stack
// //   ["Node", "Express", "MongoDB", "SQL"], // Backend stack
// // ];

// // let [frontend,backend] = fullStack
// // console.log(frontend)

// // let [
// //     [f1,f2,f3,f4,f5],
// //     [f6,f7,f8,f9,f10]
// // ]=fullStack
// // console.log(f1)

// // // 3. Skipping Elements during Destructuring
// // let numbers = [1, 2, 3, 4];

// // let [num11, , , num44] = numbers;
// // console.log(num11, num44);
// // // using destructing with spread opertaor
// // let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let [q, x, ...n] = moreNumbers;
// // console.log(q, x);
// // console.log(n);


// // let obj = {
// //     firstname: "akash",
// //     age: 26,
// //     exp:3,
// //     skill:["cypress ", "playwright", "js", "ts", "react"],
// //     position: "Senior Software engineer"
// // }
// // let {firstname,age,exp,skill,position} = obj
// // console.log(firstname,age,exp,skill,position)

// // let {firstname:fn,age:ag,exp:ex,skill:sk,position:ps}=obj
// // console.log(ps)

// // let [cy,pw,js,ts,react] =sk
// // console.log(cy,pw,js,ts,react)
// // let {firstname:fnn,age:agg,exp:exx,skill:[cyy,pww,jss,tss,reactt],position:pss}=obj
// // console.log(pww,jss,tss)

// // let arr2 = [1,2,3,4,5,6,7,8,9]
// // console.log(...arr2)

// // let arr3 = [...arr2]
// // console.log(arr3)

// // let xss = 10
// // let yss = 20

// // xss = xss+yss
// // yss = xss-yss
// // xss = xss-yss
// // console.log(xss)
// // console.log(yss)


// const ste1 = new Set()
// console.log(ste1)

// let arr1 = [1,1,1,1,1,1,1,1,1]
// let ste2 = new Set(arr1)
// console.log(ste2)

// let lang = [
//   "english",
//   "hindi",
//   "marathi",
//   "english",
//   "chinese",
//   "marathi",
//   "english"
// ]

// let ste3 = new Set(lang)
// console.log(ste3)

// for (const i of ste3){
//   console.log(i)

// }

// let comparr = ["google", "amazon", "microsoft", "netflix", "facebook"];
// let comset = new Set()

// for (let company of comparr){
//   comset.add(company)
// }
// console.log(comset)

// comset.add("oracle")
// console.log(comset)
// comset.delete("amazon")
// console.log(comset)

// comset.clear()
// console.log(comset)

// let arr2 = [1, 2, 3, 4];
// let arr3 = [4, 5, 6, 7, 8];

// let arr4 = [...arr2,...arr3]
// console.log(arr4)

// setofnum1 = new Set(arr4);
// console.log(setofnum1)


// let x = [1, 2, 3, 4, 5, 6, 6, 4];
// let y = [5, 6, 7, 8, 9, 10, 6, 5];
// let setx = new Set(x)
// let sety = new Set(y)
// console.log(setx)
// console.log(sety) 
// // let intersection = x.filter((el) => sety.has(el))
// // let inset = new Set(intersection)
// // console.log(inset)

// let intersection = x.filter((el) => sety.has(el))
// let inset = new Set(intersection)
// console.log(inset)

// let diff = x.filter((el) => !sety.has(el))
// console.log(diff)
// let diff1 = y.filter((el) => !setx.has(el))
// console.log(diff1)

// let diff3 = [...diff,...diff1]
// console.log(diff3)
// let diff4 = new Set(diff3)
// console.log(diff4)

// let countarr = [
//   ["indian", "hindi"],
//   ["usa", "english"],
//   ["germnay", "german"],
// ]

// let map1 = new Map(countarr)
// console.log(map1)


// let pattern = "akash"
// let regex = new RegExp(pattern)
// console.log(regex)

// let regex2 = /"akash"/gi
// console.log(regex2)

// let str = " i am Learning js and the topic in js is regex"
// let result = /learning/gi
// let output = result.test(str)
// console.log(output)
// // let str = " i am Learning js and the topic in js is regex";

// // let result = /learning/gi;

// // let output = result.test(str);
// // console.log(output);

class details_data (){
  constructor(fn,mn,ln,age){
    this.fn = fn
    this.mn = mn
    this.ln = ln
    this.age = age
  }

get getAge(){}
}

let my_data = new details_data("akash","manik","jadhav",26)
console.log(my_data)