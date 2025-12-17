// Exercises Level 1
//1 Change skills array to JSON using JSON.stringify()

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillS_JSON=JSON.stringify(skills)
console.log(skillS_JSON)
// OutPut: ["HTML","CSS","JS","React","Node","Python"]

//2 Stringify the age variable

let age=250

let age_Json=JSON.stringify(age)
console.log(age_Json)
// 250

//3 Stringify the isMarried variable

let isMarried = true
let married_json=JSON.stringify(isMarried)
console.log(married_json)  
//true

//4 Stringify the student object

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

let stuObj= JSON.stringify(student)
console.log(stuObj)
// {"firstName":"Asabeneh","lastName":"Yetayehe","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]}

//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties

let stuObj1=JSON.stringify(student,["firstName","lastName","skills"])
console.log(stuObj1)
// {"firstName":"Asabeneh","lastName":"Yetayehe","skills":["HTML","CSS","JS","React","Node","Python"]}

// Exercises Level 3
//1 Parse the txt JSON to object.

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// let jObj= JSON.parse(txt)
// console.log(jobj)
const users = JSON.parse(txt);
console.log(users);
/*
{
  Alex: {
    email: 'alex@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript' ],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

*/
