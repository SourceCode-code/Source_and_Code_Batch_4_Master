// // Assignment Questions on JavaScript Objects

// // Question 1: Skills and Points Analysis
// // Given the following users object:

let users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// // Tasks:

// converts object to array of entries

const usersArray = Object.entries(users)


// // 1. Find the person with the most skills.

const maxskills = Math.max(
  ...usersArray.map(([username, details]) => details.skills.length)
)
console.log(maxskills)

// filtering users with max skills

const mostSkilledUsers = usersArray.filter(
  ([username, details]) => details.skills.length === maxskills
)
// printing the result

mostSkilledUsers.forEach(([username, details]) => {
  console.log(username, details.skills.length)
})

// // 2. Count the number of users who are logged in.

const loggedInUsers = Object.values(users).filter(user => user.isLoggedIn === true).length
console.log(loggedInUsers)

// // 3. Count the number of users with points greater than or equal to 50.
const userPoints = Object.values(users).filter(user => user.points >= 50).length
console.log(userPoints)

// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node'

const mernDevelopers = Object.entries(users).filter(
  ([username, details]) => {
    const skills = details.skills
    return (
      skills.includes("MongoDB") &&
      skills.includes("Express") &&
      skills.includes("React") &&
      (skills.includes("Node") || skills.includes("Node.js"))
    )
  }
)
console.log("MERN Developers:")
mernDevelopers.forEach(([username]) => console.log(username))

// // 5. Add your own details to the users object without modifying the original object.

users.Indrayani = {
  email: "indrayani.work@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  age: 30,
  isLoggedIn: true,
  points: 60,
}

console.log(users)

// // 6. Retrieve all keys (properties) in the users object.

const userkeys = Object.keys(users)
console.log(userkeys)

// // 7. Retrieve all values in the users object.

const uservalues = Object.values(users)
console.log(uservalues)

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
    languages: ["Japanese"],
  },
  Germany: {
    capital: "Berlin",
    population: 83.2,
    languages: ["German"],
  },
  India: {
    capital: "New Delhi",
    population: 1393, // in millions
    languages: ["Hindi", "English", "Various regional languages"],
  },
  Canada: {
    capital: "Ottawa",
    population: 38,
    languages: ["English", "French"],
  },
  Brazil: {
    capital: "Brasília",
    population: 213,
    languages: ["Portuguese"],
  },
};
// - Country name

for (const [country, details] of Object.entries(countries)) {
  console.log(country)
}

// - Capital city

for (const [country, details] of Object.entries(countries)) {
  console.log(details.capital)
}

// - Population count

for (const [country, details] of Object.entries(countries)) {
  console.log(details.population)
}
// - Languages spoken

for (const [country, details] of Object.entries(countries)) {
  console.log(details.languages)
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

const personalAccount = {
  firstName: "Indrayani",
  lastName: "Suryawanshi",
  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Freelance", amount: 1500 },],
  expenses: [
    { description: "Rent", amount: 1200 },
    { description: "Groceries", amount: 300 }]
}
personalAccount.totalIncome = function () {
  return this.incomes.reduce((total, income) => total + income.amount, 0)
}
personalAccount.totalExpenses = function () {
  return this.expenses.reduce((total, expense) => total + expense.amount, 0)
}
personalAccount.accountInfo = function () {
  return `Account Holder: ${this.firstName} ${this.lastName} ${this.totalIncome()} ${this.totalExpenses()}`
}
personalAccount.addIncome = function (description, amount) {
  this.incomes.push({ description, amount })
}
personalAccount.addExpense = function (description, amount) {
  this.expenses.push({ description, amount })
}
personalAccount.accountbalance = function () {
  return this.totalIncome() - this.totalExpenses()
}
console.log(personalAccount.accountInfo())

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

// 1. Sign Up Function: Create a function signUp which allows a user to add themselves to the users array. If the user already exists, display a message saying they already have an account.

function signUp(newUser) {
  const userExists = users.some(user => user.email === newUser.email)
  
  if (userExists) {
    console.log("User already has an account")
  }
  else {
    users.push(newUser)
    console.log("User signed up successfully")
  }
}


// 2. Sign In Function: Create a function signIn to allow a user to log into the application.

function signIn(email, password) {
  const user = users.find(user => user.email === email && user.password === password)
  if (user) {
    user.isLoggedIn = true
    console.log("user logged in successfully")
  }
  else {
    console.log("Invaild email or password")
  }
}


// 3. Product Rating:
//    a. Create a function rateProduct to rate a product.
function rateProduct(productId, userId, rate) {
  const product = products.find(product => product._id === productId)
  if (product) {
    const existingRating = product.ratings.find(rating => rating.userId === userId)
    if (existingRating) {
      existingRating.rate = rate
    } else {
      product.ratings.push({ userId, rate })
    }
  }

}
 

//5 form given data
let data = {
  Data: {
    Country: "India",
    States: [
      {
        Name: "Maharashtra",
        Population: "128256452",
      },
      {
        Name: "Gujarat",
        Population: "731000000",
      },
    ],
  },
};

// 1 check if maharastra is presnt

let states = data.Data.States
for (let i = 0; i < states.length; i++) {
  if (states[i].Name === "Maharashtra") {
    console.log("Maharashtra is present")
  }
}
//2 get the the total population of both states

let totalpopulation = 0
for (let i = 0; i < states.length; i++) {
  totalpopulation += parseInt(states[i].Population)
}
console.log("Total population:", totalpopulation)

//3 add new state
states.push({ Name: "Rajasthan", Population: "81000000" })
console.log(states)

// 4 update the population of gujarat to 80000000
for (let i = 0; i < states.length; i++) {
  if (states[i].Name === "Gujarat") {
    states[i].Population = "80000000"
  }
}
console.log(states)

// Exercises: Level 2

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.