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
let a = [];

// Declare an array with more than 5 number of elements
let b = [1, "string", false, null, "1234", "fortyseven", 9970959408, "true", true]

// Find the length of your array
console.log(b.length)

// Get the first item, the middle item and the last item of the array
console.log(b[0])
console.log(b[5])
console.log(b[9])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// already solved above

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let companies = ["facebook", "Google", "Microsoft", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(companies)
// Print the number of companies in the array
console.log(companies.length)
// Print the first company, middle and last company
console.log(companies[0])
console.log(companies[2])
console.log(companies[4])

// Print out each company
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

// Change each company name to uppercase one by one and print them out
companies[0] = 'FACEBOOK'
console.log(companies)
companies[1] = 'GOOGLE'
console.log(companies)
companies[2] = 'MICROSOFT'
console.log(companies)
companies[3] = 'ORACLE'
console.log(companies)
companies[4] = 'AMAZON'
console.log(companies)

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let sentence = companies.join(" ")
console.log(sentence)

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let softwareComp = ["facebook", "Google", "Microsoft", "Oracle", "Amazon"]
let exists = "Amazon"
if (softwareComp.includes(exists)) {
    console.log(exists)
}
else {
    console.log(`company is not found`)
}

// Filter out companies which have more than one 'o' without using the filter method

// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify 'Tea' to 'Green Tea'

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages (max minus min)
// Compare the value of (min - average) and (max - average), use abs() method
// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.

// The following is an array of 10 students' ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages (max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
