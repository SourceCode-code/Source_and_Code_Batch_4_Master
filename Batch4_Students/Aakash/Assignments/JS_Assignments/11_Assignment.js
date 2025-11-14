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
// let arr1 = []
// let arr2 = Array()
// console.log(arr1)
// console.log(arr2)
// // Declare an array with more than 5 number of elements
// let arr3 = ['akash',26,'sangamner','unmarried',8669033735,'automation']
// console.log(arr3)
// // Find the length of your array
// let lenarrr = arr3.length
// console.log(lenarrr)
// // Get the first item, the middle item and the last item of the array\
// let firstarr = arr3[0]
// console.log(firstarr)

// let lastarr = arr3[arr3.length-1]
// console.log(lastarr)

// let middlearr = arr3[arr3.length/2]
// console.log(middlearr)
// // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let arr4 = [1,2,"akash",true,null,]
// console.log(arr4)
// // Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// // Print the array using console.log()
// console.log(Companies)
// // Print the number of companies in the array
// console.log(Companies.length)
// // Print the first company, middle and last company
// console.log(Companies[0])
// console.log(Companies[Companies.length-1])
// //console.log(Companies[Companies.length/2])
// // Print out each company
// let eachCom = Companies.join(" ")
// console.log(eachCom)
// // Change each company name to uppercase one by one and print them out
// let eachCom1 = Companies.join(" ").toUpperCase()
// console.log(eachCom1)
// // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
// let Companies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Companies2.pop()
// let forcomma = Companies.join(",")
// console.log(Companies2)
// Companies2.push("and Amazon are big IT companies.")
// console.log(Companies2)
// console.log(Companies2.join())
// // Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
// let Companies3 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let check = "Computacenter"
// if (Companies3.includes(check)){
// console.log(check)
// }
// else{
//     console.log('Company is not found')
// }

// Filter out companies which have more than one 'o' without using the filter method
let Companies4 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let count = 0
let topusharr = []
for (let i = 0; i<Companies4.length-1;i++){
if(Companies.includes("o")){
    count++
}

}
console.log(Companies4[i])
// // Sort the array using sort() method
// let Companies5 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let sortedArr = Companies.sort()
// console.log(sortedArr)

// // Reverse the array using reverse() method
// let reversedArr = Companies5.reverse()
// console.log(reversedArr)
// // Slice out the first 3 companies from the array
// let Companies6 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let slicedArr = Companies6.slice(0,3)
// console.log(slicedArr)
// // Slice out the last 3 companies from the array
// let Companies7 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let sliced = Companies7.slice(4,Companies.length)
// console.log(sliced)

// // Slice out the middle IT company or companies from the array
// let Companies8 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let slicedAr = Companies8.slice(2,5)
// console.log(slicedAr)

// // Remove the first IT company from the array
// let Companies9 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Companies9.shift()
// console.log(Companies9)

// // Remove the middle IT company or companies from the array
// let Companies10 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let slicedAr1 = Companies8.splice(2,3)
// console.log(slicedAr1)
// // Remove the last IT company from the array
// let Companies11 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Companies11.pop()
// console.log(Companies11)

// // Remove all IT companies
// let Companies12 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Companies12.splice(0,Companies12.length)
// console.log("hh",Companies12)
// // Exercise: Level 2

// // First remove all the punctuations and change the string to an array and count the number of words in the array:
// // let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// // console.log(words)
// // console.log(words.length)
// // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// // 13

// // In the following shopping cart add, remove, edit items:
// // const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// // add 'Meat' in the beginning of your shopping cart if it has not been already added
// // add Sugar at the end of your shopping cart if it has not been already added
// // remove 'Honey' if you are allergic to honey
// // modify 'Tea' to 'Green Tea'

// // In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// // In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

// // Concatenate the following two variables and store it in a fullStack variable:
// // const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// // const backEnd = ['Node', 'Express', 'MongoDB']
// // console.log(fullStack)
// // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// // Exercise: Level 3

// // The following is an array of 10 students' ages:
// // Sort the array and find the min and max age
// // Find the median age(one middle item or two middle items divided by two)
// // Find the average age(all items divided by number of items)
// // Find the range of the ages (max minus min)
// // Compare the value of (min - average) and (max - average), use abs() method
// // Slice the first ten countries from the countries array
// // Find the middle country(ies) in the countries array
// // Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.

// // The following is an array of 10 students' ages:
// // const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// // Sort the array and find the min and max age
// // Find the median age(one middle item or two middle items divided by two)
// // Find the average age(all items divided by number of items)
// // Find the range of the ages (max minus min)
// // Compare the value of (min - average) and (max - average), use abs() method

// // Slice the first ten countries from the countries array
// // Find the middle country(ies) in the countries array
// // Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
