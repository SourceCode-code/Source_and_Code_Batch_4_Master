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
let arr1 = []
let arr2 = Array()
console.log(arr1)
console.log(arr2)
// Declare an array with more than 5 number of elements
let arr3 = ['akash',26,'sangamner','unmarried',8669033735,'automation']
console.log(arr3)
// Find the length of your array
let lenarrr = arr3.length
console.log(lenarrr)
// Get the first item, the middle item and the last item of the array\
let firstarr = arr3[0]
console.log(firstarr)

let lastarr = arr3[arr3.length-1]
console.log(lastarr)

let middlearr = arr3[arr3.length/2]
console.log("ss",middlearr)
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let arr4 = [1,2,"akash",true,null,]
console.log(arr4)
// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Print the array using console.log()
console.log(Companies)
// Print the number of companies in the array
console.log(Companies.length)
// Print the first company, middle and last company
console.log(Companies[0])
console.log(Companies[Companies.length-1])
//console.log(Companies[Companies.length/2])
// Print out each company
let eachCom = Companies.join(" ")
console.log(eachCom)
// Change each company name to uppercase one by one and print them out
let eachCom1 = Companies.join(" ").toUpperCase()
console.log(eachCom1)
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let Companies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
Companies2.pop()
let forcomma = Companies.join(",")
console.log(Companies2)
Companies2.push("and Amazon are big IT companies.")
console.log(Companies2)
console.log(Companies2.join())
// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let Companies3 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let check = "Computacenter"
if (Companies3.includes(check)){
console.log(check)
}
else{
    console.log('Company is not found')
}

// Filter out companies which have more than one 'o' without using the filter method
let Companies4 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let topusharr = []
for (let i = 0;i<Companies4.length;i++){
let company = Companies4[i]
let count = 0
for(let j = 0;j<company.length;j++){
if (company[j].toLowerCase()==="o"){
    count++
}
}
if(count==2){
    topusharr.push(company)
}
}
console.log(topusharr)

// Sort the array using sort() method
let Companies5 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let sortedArr = Companies.sort()
console.log(sortedArr)

// Reverse the array using reverse() method
let reversedArr = Companies5.reverse()
console.log(reversedArr)
// Slice out the first 3 companies from the array
let Companies6 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let slicedArr = Companies6.slice(0,3)
console.log(slicedArr)
// Slice out the last 3 companies from the array
let Companies7 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let sliced = Companies7.slice(4,Companies.length)
console.log(sliced)

// Slice out the middle IT company or companies from the array
let Companies8 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let slicedAr = Companies8.slice(2,5)
console.log(slicedAr)

// Remove the first IT company from the array
let Companies9 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
Companies9.shift()
console.log(Companies9)

// Remove the middle IT company or companies from the array
let Companies10 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let slicedAr1 = Companies8.splice(2,3)
console.log(slicedAr1)
// Remove the last IT company from the array
let Companies11 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
Companies11.pop()
console.log(Companies11)

// Remove all IT companies
let Companies12 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
Companies12.splice(0,Companies12.length)
console.log("hh",Companies12)
// Exercise: Level 2
console.log("---------------------------------------")
// First remove all the punctuations and change the string to an array and count the number of words in the array:
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newtext = text.replaceAll(/[.,]/g,"")
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

shoppingCart[3]="Green Tea"
console.log(shoppingCart)

shoppingCart.pop()
console.log(shoppingCart)

shoppingCart.shift()
console.log(shoppingCart)

shoppingCart.splice(3)
console.log(shoppingCart)
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify 'Tea' to 'Green Tea'

console.log("-----------------------------")


// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let Countries = ["India", "USA", "China", "Ethiopia", "Japan"]
if (Countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}
else(Countries.push("Ethiopia"))

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
let webTechs1 = ["pass","Aass"]
if (webTechs1.includes("sass")){
console.log("Sass is a CSS preprocess")
}
else{
    webTechs1.push("sass")
}
console.log(webTechs1)
// Concatenate the following two variables and store it in a fullStack variable:
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

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
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


// Sort the array and find the min and max age
let minage = Math.min(...ages)
console.log("age",minage)
let maxage = Math.max(...ages)
console.log(maxage)
// Find the median age(one middle item or two middle items divided by two)

let sortedage = ages.sort()

console.log(sortedage)
let medianage = sortedage[sortedage.length/2]
console.log(medianage)
// Find the average age(all items divided by number of items)
let sum= 0
for (let i = 0; i<ages.length;i++){
    sum=sum+ages[i]
}
console.log(sum)
let average= sum/ages.length
console.log(average)
// Find the range of the ages (max minus min)
let range = maxage-minage
console.log(range)
// Compare the value of (min - average) and (max - average), use abs() method

let diffMin = Math.abs(minage - average)
let diffMax = Math.abs(maxage - average)
console.log(diffMin,diffMax)
if (diffMin>diffMax){
console.log("min average is bigger")
}
else if (diffMax>diffMin){
    console.log("max average is bigger")
}
else{
    console.log("both are equal")
}
console.log("________________________________")
// Slice the first ten countries from the countries array
let countries1 = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
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
let slicedCountries= countries1.slice(0,10)
console.log(slicedCountries)
// Find the middle country(ies) in the countries array

let middleCountries = countries1[Math.floor(countries1.length/2)]
console.log(middleCountries)
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
// let countriesOneven = []
// let countriesOnodd= []
// for (let i= 0; i<countries1.length; i++){
//     if (countries1[i]%2===0){
//     countriesOneven.push(countries1[i])
// }
// else {
//     countriesOnodd.push(countries1[i])
// }
// }
// console.log("arr",countriesOneven)
// console.log("arr",countriesOnodd)

let divide = (countries1.length / 2);

let firstHalf = countries1.slice(0,divide);
let secondHalf = countries1.slice(divide);

console.log("1",firstHalf)
console.log(secondHalf)

