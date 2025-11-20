
// // Assignment Questions on JavaScript Objects

// // Question 1: Skills and Points Analysis
// // Given the following users object:

let users = {  
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// // Tasks:
// // 1. Find the person with the most skills.
let maxSkills = 0
let mostSkills = " "
for (let key in users){
if (users[key].skills.length > maxSkills){
  maxSkills = users[key].skills.length
mostSkills = key
}
}
console.log(mostSkills)

// // 2. Count the number of users who are logged in.
let login = 0
for (let key in users){
  if (users[key].isLoggedIn===true){
    login++
  }
 
}
 console.log(login)


// // 3. Count the number of users with points greater than or equal to 50.
let point = 0
for (let key in users){
  if(users[key].points>=50){
    point++
  }
}
console.log(point)

// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node'

//   // console.log(el)
  // let mern = 0
  // for (let key in users)
  //   {if (skills.includes("MongoDB")){
  //     mern++
  //   }
  //   console.log("hhh",mern)
  // }

  
// //  (el.users.includes("MongoDB")
//   // // &el.users.includes("Express")
//   //   &&el.users.includes("React")
//   //   &&el.users.includes("Node")
// // 5. Add your own details to the users object without modifying the original object.
// users.Akash =  {
//     email: 'aakshjadhav.work@gmail.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 26,
//     isLoggedIn: false,
//     points: 30
//   }
// console.log(users)
// // 6. Retrieve all keys (properties) in the users object.

let allKeys = Object.keys(users)
console.log(allKeys)

// // 7. Retrieve all values in the users object.
let allValues = Object.values(users)
console.log(allValues)

// // Question 2: Working with a Countries Object
// // Using a countries object, write a program that prints:
// // - Country name
// // - Capital city
// // - Population count
// // - Languages spoken

const countries = {
  Japan: {
    capital: "Tokyo",
    population: 125.7, // in millions
    languages: ["Japanese"]
  },
  Germany: {
    capital: "Berlin",
    population: 83.2,
    languages: ["German"]
  },
  India: {
    capital: "New Delhi",
    population: 1393, // in millions
    languages: ["Hindi", "English", "Various regional languages"]
  },
  Canada: {
    capital: "Ottawa",
    population: 38,
    languages: ["English", "French"]
  },
  Brazil: {
    capital: "Brasília",
    population: 213,
    languages: ["Portuguese"]
  }
};
// - Country name
let countryNames = Object.keys(countries)
console.log(countryNames)
// - Capital city
for (let key in countries){
  console.log(countries[key].capital)
}

// - Population count
for (let key in countries){
  console.log(countries[key].population)
}
// - Languages spoken
for (let key in countries){
  console.log(countries[key].languages)
}


// Question 3: Creating a personAccount Object
// Create an object literal named personAccount with the following properties and methods:

// Properties:
// - firstName
// - lastName
// - incomes: a set of income sources with descriptions.
// - expenses: a set of expenses with descriptions.

// Methods:
// - totalIncome(): Calculate and return the total income.
// - totalExpense(): Calculate and return the total expenses.
// - accountInfo(): Display account details.
// - addIncome(description, amount): Add a new income.
// - addExpense(description, amount): Add a new expense.
// - accountBalance(): Calculate and return the account balance.

// Question 4: Users and Products Analysis
// Consider the following arrays:

// const users = [
//   { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false },
//   { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt: '08/01/2020 9:30 AM', isLoggedIn: true },
//   { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt: '08/01/2020 9:45 AM', isLoggedIn: true },
//   { _id: 'eefamr', username: 'Martha', email: 'martha@martha.com', password: '123222', createdAt: '08/01/2020 9:50 AM', isLoggedIn: false },
//   { _id: 'ghderc', username: 'Thomas', email: 'thomas@thomas.com', password: '123333', createdAt: '08/01/2020 10:00 AM', isLoggedIn: false }
// ];

// const products = [
//   { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [ { userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 } ], likes: [] },
//   { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
//   { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
// ];

// Tasks:
// 1. Sign Up Function: Create a function signUp which allows a user to add themselves to the users array. If the user already exists, display a message saying they already have an account.
// 2. Sign In Function: Create a function signIn to allow a user to log into the application.
// 3. Product Rating:
//    a. Create a function rateProduct to rate a product.
//    b. Create a function averageRating to calculate the average rating of a product.
// 4. Product Likes:
//    Create a function likeProduct to like a product if it’s not already liked, or to remove the like if it was already liked.