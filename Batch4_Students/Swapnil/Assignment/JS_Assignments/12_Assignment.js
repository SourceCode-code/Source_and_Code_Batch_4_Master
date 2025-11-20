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
let empArray = []

// Declare an array with more than 5 number of elements
let charArray = [1, 2, 55, 999, 57, 985, 1026]

// Find the length of your array
let charArray = ["a", "b", "c", "d", "e", "f", "g"]
console.log(charArray.length)

// Get the first item, the middle item and the last item of the array
let countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
console.log(countries[0])
console.log(countries[Math.floor(countries.length / 2)])
console.log(countries[countries.length - 1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["Swapnil", 29, true, "India", 7387487989, null]
console.log(mixedDataTypes.length)

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

// Print out each company
let sepCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
for (let i = 0; i < sepCompanies.length; i++) {
    console.log(sepCompanies[i])
}

// Change each company name to uppercase one by one and print them out
let sepCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
for (let i = 0; i < sepCompanies.length; i++) {
    console.log(sepCompanies[i].toUpperCase())
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let sentence001 = itCompanies1.slice(0, itCompanies1.length - 1).join(", ") + " and " + itCompanies1[itCompanies1.length - 1]
console.log(sentence001 + " are big IT companies.")

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let existCompany = "Oracle"
if (itCompanies1.includes(existCompany)) {
    console.log(existCompany)
} else {
    console.log("Company is not found")
}

// Filter out companies which have more than one 'o' without using the filter method
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let oCompanies = []
count = 0
for (let i = 0; i < itCompanies1.length; i++) {
}
console.log(oCompanies)

// let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// let result = [];

// for (let i = 0; i < itCompanies1.length; i++) {
//     let company = itCompanies1[i];
//     let count = 0;

//     for (let j = 0; j < company.length; j++) {
//         if (company[j].toLowerCase() === "o") {
//             count++;
//         }
//     }
//      if (count > 1) {
//         result.push(company);
//     }
// }

// console.log(result);


// Sort the array using sort() method
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let sortedComp = itCompanies1.sort()
console.log(sortedComp)

// Reverse the array using reverse() method
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let reverseComp = itCompanies1.reverse()
console.log(reverseComp)


// Slice out the first 3 companies from the array
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let threeCompanies = itCompanies1.slice(0, 3)
console.log(threeCompanies)


// Slice out the last 3 companies from the array
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let lastCompanies1 = itCompanies1.slice(itCompanies1.length - 3)
console.log(lastCompanies1)


// Slice out the middle IT company or companies from the array
let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newtext = text.replaceAll(/[.,]/g, "")
let newArr = newtext.split(" ")
console.log(newArr.length)
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push("Sugar")
console.log(shoppingCart)

shoppingCart.unshift("Meat")
console.log(shoppingCart)

shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

shoppingCart.pop()
console.log(shoppingCart)

shoppingCart.shift()
console.log(shoppingCart)

shoppingCart.splice(3)
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let Countries = ["India", "USA", "China", "Ethiopia", "Japan"]
if (Countries.includes("Ethiopia")) {
    console.log("ETHIOPIA")
}
else (Countries.push("Ethiopia"))


// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
let webTechs1 = ["pass", "Aass"]
if (webTechs1.includes("sass")) {
    console.log("Sass is a CSS preprocess")
}
else {
    webTechs1.push("sass")
}
console.log(webTechs1)

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


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
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortAges = ages.sort()
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
console.log(sortAges)
console.log("Min age: " + minAge)
console.log("Max age: " + maxAge)

// Find the median age(one middle item or two middle items divided by two)
let medianAge = sortAges[sortAges.length / 2]
console.log(medianAge)
// Find the average age(all items divided by number of items)
let avrAge = 0
for (let i = 0; i < sortAges.length; i++) {
    avrAge += sortAges[i]
}
let averageAge = avrAge / sortAges.length
console.log(averageAge)

// Find the range of the ages (max minus min)
let ageRange = maxAge - minAge
console.log(ageRange)
// Compare the value of (min - average) and (max - average), use abs() method
let diffAge = Math.abs((minAge - averageAge) - (maxAge - averageAge))
console.log(diffAge)

// Slice the first ten countries from the countries array
let countries2 = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo (Kinshasa)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
];
let firstTenCountries = countries2.slice(0, 10)
console.log(firstTenCountries)

// Find the middle country(ies) in the countries array
let middleCountry = countries2[Math.floor(countries2.length / 2)]
console.log(middleCountry)

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
let divide = (countries2.length / 2);

let firstHalf = countries2.slice(0, divide);
let secondHalf = countries2.slice(divide);

console.log(firstHalf)
console.log(secondHalf)