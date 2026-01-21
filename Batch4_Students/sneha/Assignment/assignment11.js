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
let arr=new Array()
console.log(arr)
 let arr2=[]
 console.log(arr2)
// Declare an array with more than 5 number of elements

let arr3=[1,2,3,4,5,6,7,"sneha"]
console.log("////",arr3)
// Find the length of your array
console.log(arr3.length)
// Get the first item, the middle item and the last item of the array
console.log(arr3[0])
console.log(arr3[3])
console.log(arr3[arr3.length-1])


// declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDatatype=["sneha","suresh","anap",27,"Married",NaN,7887647323,"bca"]

console.log("-------",mixedDatatype.length)
// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itcompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]


// Print the array us uing console.log()
console.log(itcompanies)
// Print the number of companies in the array
console.log(itcompanies)
// Print the first company, middle and last company
console.log(itcompanies[0])
let mid=itcompanies[itcompanies.length/2]
console.log(mid)
console.log(itcompanies[itcompanies.length-1])

// Print out each company
for(let i=0;i<itcompanies.length-1;i++){
console.log("----===--",itcompanies[i])
}
// Change each company name to uppercase one by one and print them out
for(let i=0;i<itcompanies.length-1;i++){
console.log(itcompanies[i].toUpperCase())
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itcompanies.join( '" ,"')}are big IT companies`)

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let compname="GOOGLE"
let ch=itcompanies.includes(compname)
if(ch==compname){
console.log(`${compname}`)
}
else{
  console.log(`${compname}is not found` )

}

// Filter out companies which have more than one 'o' without using the filter method
// arr=["companies"]
// arr.length
// revisedrry=[]
// count=0
// for(let i=0;i<=arr.length;i++){
//   includes"o"
// }

  count = 0
  for(let i=0;i<=itcompanies.length-1;i++){
if(itcompanies[i].includes("o")){
  console.log(itcompanies[i])
}
  }

// Sort the array using sort() method
let sort=itcompanies.sort()
console.log(sort)
// Reverse the array using reverse() method
console.log(itcompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itcompanies.slice(0,3))
// Slice out the last 3 companies from the array
console.log(itcompanies.slice(4,8))
// Slice out the middle IT company or companies from the array
console.log(itcompanies.slice(3,4))
// Remove the first IT company from the array
let last=itcompanies.unshift()
console.log(last)
// Remove the middle IT company or companies from the array
let last1=itcompanies.splice(3,4)
console.log(last1)
// Remove the last IT company from the array
console.log(itcompanies.pop())
// Remove all IT companies
itcompanies=[]
console.log(itcompanies)
//exercise level =3

//  // First remove all the punctuations and change the string to an array and count the number of words in the array:
  
  // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  // 13
  
  // In the following shopping cart add, remove, edit items:
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  // add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart)
  // add Sugar at the end of your shopping cart if it has not been already added
//   shoppingCart.push("Sugar")
//   console.log(shoppingCart)
  // remove 'Honey' if you are allergic to honey
shoppingCart.pop()
console.log(shoppingCart)
  // modify 'Tea' to 'Green Tea'
shoppingCart[3]="Green Tea"
console.log(shoppingCart)
  // In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
  countryName= 'Ethiopia'
  let check3 =countries.includes(countryName)
  if(check3){
    console.log(`${countryName} countries present in this array`)
  }
 else{
    console.log(`${countryName} countries not present in this array`)
 }

  // In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
  webb='Sass'
  let check4 =webTechs.includes(webb)
  if(check3){
    console.log(`${webb}  present in this array`)
  }
 else{
    console.log(`${webb}  not present in this array`)
 }
  
  // Concatenate the following two variables and store it in a fullStack variable:
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  let fullStack= frontEnd.concat(backEnd)
  console.log(fullStack)
  // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
  
  // Exercise: Level 3
  
  // The following is an array of 10 students' ages:
   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  // Sort the array and find the min and max age
    console.log(Math.max(...ages))
  // Find the median age(one middle item or two middle items divided by two)
    console.log(ages[ages.length/2])
  // Find the average age(all items divided by number of items)
  let sum1=0
for(let i=0;i<=ages.length-1;i++){
  sum1=sum1+ages[i]
}
let check5= sum1/ages.length
console.log(check5)

// Find the range of the ages (max minus min)
  let max = Math.max(...ages)
  let min = Math.min(...ages)
  console.log(max-min)

// Compare the value of (min - average) and (max - average), use abs() method
let fcheck = (min-check5/max-check5)
console.log(Math.abs(fcheck))

  //Slice the first ten countries from the countries array
let ten = countries.slice(0,10)
console.log(ten)
  // Find the middle country(ies) in the countries array
  console.log(Math.round(countries.length/2))
  console.log(countries[6])
  // Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
  const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  first=[]
  second=[]
  countries1.push("India")
  for(let i=0;i<=countries1.length-1;i++){
    if(i>=6){
        first.push(countries1[i])
    }
    else{
        second.push(countries1[i])
    }
  }
  console.log("First",first)
  console.log("second",second)