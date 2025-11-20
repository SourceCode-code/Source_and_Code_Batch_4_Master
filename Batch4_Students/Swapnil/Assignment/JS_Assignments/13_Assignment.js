// Assignment Questions on JavaScript Objects

// Question 1: Skills and Points Analysis
// Given the following users object:

const users = {  
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
let user = Object.keys(users)
let maxSkills = 0
let mostSkilledPerson = ''    
for (let user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length
        mostSkilledPerson = user
    }       
}
console.log(mostSkilledPerson)


// // 2. Count the number of users who are logged in.
    let loginCount = 0
    for(let user in users){
        if(users[user].isLoggedIn === true){
            loginCount++
        }
    }
        console.log(loginCount)
    

// // 3. Count the number of users with points greater than or equal to 50.
let points = 0
for(let user in users){
    if(users[user].points >= 50){
        points++
    }
}
    console.log(points)

// 4. Identify the MERN stack developers in the users object.


// 5. Add your own details to the users object without modifying the original object.
let newUser = Object.assign({}, users);
newUser.Swapnil = {
    email: "swapnilgaikwadwork@gmail.com",
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    age: 24,isLoggedIn: true,
    points: 60
}
console.log(newUser)

// 6. Retrieve all keys (properties) in the users object.
usersProperties = (Object.keys(users))
console.log(usersProperties)

// 7. Retrieve all values in the users object.
usersValues = (Object.values(users))
console.log(usersValues)



// Question 2: Working with a Countries Object
const countries = {
  India: {
    capital: "New Delhi",
    population: 1400000000,
    continent: "Asia",
    speaksEnglish: true
  },
  USA: {
    capital: "Washington D.C.",
    population: 331000000,
    continent: "North America",
    speaksEnglish: true
  },
  Japan: {
    capital: "Tokyo",
    population: 126000000,
    continent: "Asia",
    speaksEnglish: false
  },
  Germany: {
    capital: "Berlin",
    population: 83000000,
    continent: "Europe",
    speaksEnglish: false
  },
  Australia: {
    capital: "Canberra",
    population: 26000000,
    continent: "Australia",
    speaksEnglish: true
  }
};
// Using a countries object, write a program that prints:
// - Country name
let countryNames = Object.keys(countries)
console.log(countryNames)
// let str = countryNames.tostring()
// console.log(str)

// - Capital city
let capitalCity = []
for (let country in countries) {
    console.log("Capital of " + `${country}` + " is --" + (countries[country].capital))
}

// - Population count
let populationCount = []
for (let country in countries) {
    console.log("Population of " + `${country}` + " is --" + countries[country].population)

}

// - Languages spoken
let languagesSpoken = []
for (let country in countries) {
    console.log("people of " + `${country}` + " speaks English --" + countries[country].speaksEnglish)
}