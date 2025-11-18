// // Exercise: Level 1

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// // Declare an empty array
// console.log("===============Declare an empty array=================")
// let EmptArray = [];  // []
// console.log(EmptArray)
// console.log("===============Declare an array with more than 5 number of elements=================")
// // Declare an array with more than 5 number of elements
// let lenArray = [1,2,3,4,5,6];  // []
// console.log(lenArray)
// console.log("==============Find the length of your array==================")
// // Find the length of your array
// console.log(lenArray.length)
// console.log("=============Get the first item, the middle item and the last item of the array===================")

// // Get the first item, the middle item and the last item of the array
// let marray = [1,2,3,4,5,6,7,8]

// let firstEle =marray[0]
// console.log("First Element of an array",firstEle)

// let lastEle = marray[marray.length-1]
// console.log("Last Element of an array",lastEle)

// let midEle = marray[marray.length/2]
// console.log("Middle Element of an array",midEle)

// console.log("==============mixedDataTypes, put different data types in the array and find the length of the array.==================")
// // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedDataTypes= [1,"A",true,null,2.1]
// console.log(mixedDataTypes.length)

// console.log("================array variable name it Companies================")
// // Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let itCompanies = ["Facebook","Google","Microsoft", "Apple", "IBM", "Oracle","Amazon"]
// console.log(itCompanies)
// console.log("================================")
// // Print the array using console.log()
// console.log(itCompanies)
// // Print the number of companies in the array
// console.log("Total It Companys:", itCompanies.length)
// // Print the first company, middle and last company
// let FC= itCompanies[0]
// console.log("First Company:",FC)

// let MC= itCompanies[Math.floor(itCompanies.length/2)]
// console.log("Middle Company:",MC)

// let LC= itCompanies[itCompanies.length-1]
// console.log("Last Company:",LC)

// console.log("==============Print out each company==================")
// // Print the array using console.log()
// // Print out each company
// for(let i=0;i<itCompanies.length;i++){

// console.log(itCompanies[i])
// }

// console.log("==============company name to uppercase one by one and print them out==================")
// // Change each company name to uppercase one by one and print them out
// let newArr =itCompanies.map(item =>item.toUpperCase())
// console.log(newArr)

// console.log("==============Print the array like as a sentence=================")
// // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
// console.log(itCompanies.join(""))

// console.log("==============Check if a certain company exists in the itCompanies array================")
// // Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
// let company = "Microsoft";

// if(itCompanies.includes(company)){
// console.log(company+ " is available")
// }
// else{
//     console.log(company+ " Company dose not exit")
// }

// console.log("==============Filter out companies which have more than one 'o' without using the filter method================")
// // Filter out companies which have more than one 'o' without using the filter method
// // let comp = itCompanies.filter(names=>{
// //     let oCount= names.toLowerCase().split("o").length-1
// //     return oCount >1;
// // })
// // console.log(comp)
// let comp = [];
// let count=0;
// for(let name of itCompanies ){
//     count=name.toLocaleLowerCase().split("o").length-1;

//     if(count > 1){
//         comp.push(name)
//     }
// }
// console.log(comp)

// console.log("==============Sort the array using sort() method================")
// // Sort the array using sort() method
// let sortedArray =itCompanies.sort()
// console.log("sorted array ", sortedArray)

// console.log("==============Reverse the array using reverse() method===============")
// // Reverse the array using reverse() method

// let reversArr = sortedArray.reverse()
// console.log("Revers Array ",reversArr)

// console.log("============Slice out the first 3 companies from the array===============")
// // Slice out the first 3 companies from the array
// let sliceFirst3 = itCompanies.slice(0,3)
// console.log("first 3 companys ", sliceFirst3)
// // Slice out the last 3 companies from the array
// let sliceLast3 = itCompanies.slice(-3)
// console.log("Last 3 companys ",sliceLast3)

// console.log("==============Reverse the array using reverse() method===============")

// // Slice out the middle IT company or companies from the array
// let middleComp = itCompanies[Math.floor(itCompanies.length/2)]
// console.log("All IT companys are: ", itCompanies)
// console.log("And Middle IT company is ",middleComp)

// console.log("==============Remove the first IT company from the array===============")
// // Remove the first IT company from the array

// itCompanies.shift()
// console.log(itCompanies)

// console.log("==========Remove the middle IT company or companies from the array===============")
// // Remove the middle IT company or companies from the array
// let mid = Math.round(itCompanies.length/2)
// itCompanies.splice(mid,1)
// console.log(itCompanies)

// console.log("=========emove the last IT company from the arra===============")
// // Remove the last IT company from the array
// itCompanies.pop()
// console.log(itCompanies)

// console.log("=========Remove all IT companies===============")
// // Remove all IT companies
 
// itCompanies.splice(0,itCompanies.length)
// console.log(itCompanies)

console.log("===============================================")
console.log("================= Level 2 =====================")
console.log("===============================================")

// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
//9let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let cleaned = text.replace(/[^\w\s]/g, "");
// console.log(cleaned)

// let newArray= cleaned.split(" ").filter(world => world.length > 0)

// let worldCount= newArray.length;
// console.log(newArray)
// console.log("Count of words ",worldCount)

// let word=text.split(" ")
// console.log(word)
// let wcount=word.length
// console.log(wcount)

// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// // add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift("Meat")
// console.log("Meat is added at begining ",shoppingCart)

// // add Sugar at the end of your shopping cart if it has not been already added.

// shoppingCart.push("Sugar")
// console.log("sugar is added at last ",shoppingCart)
// // remove 'Honey' if you are allergic to honey
// const harray= shoppingCart.filter(item => item !=="Honey")
// console.log(harray)
// // modify 'Tea' to 'Green Tea'
// for(let i=0;i<harray.length;i++)
//   if(harray[i]=="Tea"){
//     harray[i]="Grean Tea"
//   }
//   console.log(harray)

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let countries=["Indai","Chaina","Japan","America","Ethiopia"]

// if (countries.includes("Ethiopia")) {
//   console.log("ETHIOPIA");
// } else {
//   countries.push("Ethiopia");
//   console.log(countries);
// }

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
// let webTechs = ["Java","Python","Playwrite"]
// if(webTechs.includes("Sass")){
//   console.log('Sass is a CSS preprocess')
// }else{
//   webTechs.push('Sass')
//   console.log(webTechs)
// }

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(frontEnd)
// console.log(backEnd)

// const fullStack=frontEnd.concat(backEnd)
// console.log(fullStack)

// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
// Sort the array and find the min and max age
// let ageOfStudent=[25,21,22,24,19,18,26,28,27,29]
// let sortedAge=ageOfStudent.sort((a,b)=>  a-b)
// console.log(ageOfStudent)
// console.log("Max age of Student :",Math.max(...ageOfStudent))

// console.log("Min age of student :",Math.min(...ageOfStudent))

// Find the median age(one middle item or two middle items divided by two)
//const length = sortedAges.length;
// let len =sortedAge.length;
// let middle1=sortedAge[len/2-1]
// let middle2=sortedAge[len/2]
// console.log("middle ages are ",middle1,middle2)
// let ageDivigen=(middle1+middle2)/2
// console.log("Divisione of two ages is :", ageDivigen)

// Find the average age(all items divided by number of items)

// console.log("Length is :",len)
// let sum=0

// for (let i = 0; i < sortedAge.length; i++) {
//   sum += sortedAge[i];
// }
// console.log("Sum of all studet ages is :",sum)
// console.log("Average of all age is :",sum/len)
// let averageAge=sum/len
// // Find the range of the ages (max minus min)
// console.log(" ==Find the range of the ages (max minus min)==")
// let maxAge=Math.max(...ageOfStudent)
// let minAge=Math.min(...ageOfStudent)
// let maxMinusMin=(maxAge-minAge)
// console.log("Range of age is :",maxMinusMin)
// // Compare the value of (min - average) and (max - average), use abs() method

// let min=Math.abs(minAge-averageAge)



// Slice the first ten countries from the countries array

// let countries = [
//   "India", "USA", "UK", "Canada", "Australia",
//   "Germany", "France", "Japan", "China", "Brazil",
//   "Italy", "Spain", "Russia"
// ];
//let firstTen=countries.slice(0,10)
//console.log("First ten Countries are :",firstTen)

// // Find the middle country(ies) in the countries array
// let countries = [
//   "India", "USA", "UK", "Canada", "Australia",
//   "Germany", "France", "Japan", "China", "Brazil",
//   "Italy", "Spain", "Russia"
// ];
// let len=countries.length
// let mid=Math.floor(len/2)
// // console.log(len)
// if(len%2===0){
//     console.log(countries[mid-1],countries[mid])
// }else{
//     console.log(countries[mid])
// }
// console.log(countries)

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
// const middle = Math.ceil(len / 2);

// Slice into two halves
// const firstHalf = countries.slice(0, middle);
// const secondHalf = countries.slice(middle);

// console.log("First Half:", firstHalf);
// console.log("Second Half:", secondHalf);
