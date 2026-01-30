// Exercise: Level 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array

let arr = [];

// Declare an array with more than 5 number of elements

let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Find the length of your array

let length = numarr.length
console.log(length)

// Get the first item, the middle item and the last item of the array

console.log(numarr[0]) // first item
console.log(numarr[Math.floor((numarr.length - 1) / 2)]) // middle item
console.log(numarr[numarr.length - 1]) // last item

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = ["Indrayani", 34, true, { country: "India" }, [1, 2, 3], null]
console.log(mixedDataTypes.length)

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company

let itcompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itcompanies)
console.log(itcompanies.length)
console.log(itcompanies[0]) // first company
console.log(itcompanies[(Math.floor((itcompanies.length - 1) / 2))]) // middle company
console.log(itcompanies[itcompanies.length - 1]) // last company


// Print out each company
for (let i = 0; i < itcompanies.length; i++) {
  console.log(itcompanies[i])
}

// Change each company name to uppercase one by one and print them out

for (let i = 0; i < itcompanies.length; i++) {
  console.log(itcompanies[i].toUpperCase())
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let sentense = itcompanies.slice(0, itcompanies.length - 1).join(", ") + " and " + itcompanies[itcompanies.length - 1] + " are big IT companies."
console.log(sentense)

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'

let company = "Google"
if (itcompanies.includes(company)) {
  console.log(company)
}
else {
  console.log("company is not found")
}
// Filter out companies which have more than one 'o' without using the filter method
let revisedrry = []
for (let i = 0; i < itcompanies.length; i++) {
  let count = 0
  for (let j = 0; j < itcompanies[i].length; j++) {
    if (itcompanies[i][j] === 'o' || itcompanies[i][j] === 'O') {
      count++
    }
  }
  if (count <= 1) {
    revisedrry.push(itcompanies[i])
  }
}
console.log(revisedrry)

// arr=["companies"]
// arr.length
// revisedrry=[]
// count=0
// for(let i=0;i<=arr.length;i++){
//   includes"o"
// }
// Sort the array using sort() method

itcompanies.sort()
console.log(itcompanies)

// Reverse the array using reverse() method

itcompanies.reverse()
console.log(itcompanies)

// Slice out the first 3 companies from the array

let firstthree = itcompanies.slice(0, 3)
console.log(firstthree)

// Slice out the last 3 companies from the array

let lastthree = itcompanies.slice(itcompanies.length - 3)
console.log(lastthree)

// Slice out the middle IT company or companies from the array
let middleindex = Math.floor((itcompanies.length - 1) / 2)
console.log(itcompanies[middleindex])

// Remove the first IT company from the array

itcompanies.shift()
console.log(itcompanies)

// Remove the middle IT company or companies from the array

let midindex = Math.floor((itcompanies.length - 1) / 2)
itcompanies.splice(midindex, 1)
console.log(itcompanies)

// Remove the last IT company from the array

itcompanies.pop()
console.log(itcompanies)

// Remove all IT companies

itcompanies.splice(0, itcompanies.length)
console.log(itcompanies)

// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanedtext = text.replace(/[.,]/g, '')
let words = cleanedtext.split(" ")
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items:
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify 'Tea' to 'Green Tea'

let  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift('Meat')
console.log(shoppingCart)

// add Sugar at the end of your shopping cart if it has not been already added

shoppingCart.push('Sugar')
console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log(shoppingCart)

// modify 'Tea' to 'Green Tea'

shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
}
else {
  countries.push('Ethiopia')
  console.log(countries)
}


// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
}
else {
  webTechs.push('Sass')
  console.log(webTechs)
}

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: Level 3

// The following is an array of 10 students' ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages (max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

// The following is an array of 10 students' ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

ages.sort()
console.log(ages)
let minAge = Math.min(...ages)
let maxAge = Math.max(...ages)
console.log("age:", minAge)
console.log(maxAge)

// Find the median age(one middle item or two middle items divided by two)

let sortedage = ages.sort()
console.log(sortedage)
let medianage = sortedage[sortedage.length / 2]
console.log(medianage)

// Find the average age(all items divided by number of items)

let sum = 0
for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i]
}
console.log(sum)
let average = sum / ages.length
console.log(average)

// Find the range of the ages (max minus min)

let range = maxAge - minAge
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method

let diffmin = Math.abs(minAge - average)
let diffmax= Math.abs(maxAge-average)
console.log(diffmin,diffmax)

if(diffmin>diffmax){
  console.log("minaverage is bigger")
}
else if(diffmax<diffmin){
  console.log("maxaverage is bigger")
}
else{
  console.log("both are equal")
}

// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.


let countries1 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// Slice the first ten countries from the countries array

let firstten = countries1.slice(0,10)
console.log(firstten)

// Find the middle country(ies) in the countries array
let middlecountries = countries1[Math.floor((countries1.length-1)/2)]
console.log(middlecountries)



//If the countries array is not even, add one more country to the first half.

countries1.push("INDIA")
console.log(countries1)

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.

let midindexcountries = Math.ceil(countries1.length/2)
let firstHalf = countries1.slice(0,midindexcountries)
let secondHalf = countries1.slice(midindexcountries)
console.log(firstHalf)
console.log(secondHalf)

