// // Assignment Questions on JavaScript Objects

// // Question 1: Skills and Points Analysis
// // Given the following users object:

// const users = {  
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// };

// // Tasks:
// // 1. Find the person with the most skills.

// // Convert object to array of entries
// const usersArray = Object.entries(users);

// // Step 1: Find the maximum number of skills
// const maxSkills = Math.max(
//   ...usersArray.map(([name, details]) => details.skills.length)
// );

// // Step 2: Filter users who have that max skills count
// const mostSkilledUsers = usersArray.filter(
//   ([name, details]) => details.skills.length === maxSkills
// );

// // Step 3: Print the result
// mostSkilledUsers.forEach(([name, details]) => {
//   console.log(name, details.skills.length);
// });



// // 2. Count the number of users who are logged in.

// let loggedInUser= Object.values(users).filter(users => users.isLoggedIn === true).length
// console.log(loggedInUser)
// // 3. Count the number of users with points greater than or equal to 50.

// let userPoints= Object.values(users).filter(user => user.points >=50).length
// console.log("Users with points >= 50:", userPoints);
// // 4. Identify the MERN stack developers in the users object.
// const mernDevelopers = Object.entries(users)
//   .filter(([name, details]) => {
//     const skills = details.skills;
//     return (
//       skills.includes("MongoDB") &&
//       skills.includes("Express") &&
//       skills.includes("React") &&
//       (skills.includes("Node") || skills.includes("Node.js"))
//     );
//   });

// console.log("MERN Developers:");
// mernDevelopers.forEach(([name]) => console.log(name));

// // 5. Add your own details to the users object without modifying the original object.

// const newUsers = {
//   ...users,
//   Uday: {
//     email: "uday@uday.com",
//     skills: ["HTML", "CSS", "JavaScript", "Testing"],
//     age: 25,
//     isLoggedIn: true,
//     points: 60
//   }
// };
// console.log("--------------------------------------------")
// console.log(newUsers);
// // 6. Retrieve all keys (properties) in the users object.
// console.log("----------------End New Users----------------------------")
// let keysOfUsers=Object.keys(users)
// //console.log(keysOfUsers)
// console.log("--------------------------------------------")
// // 7. Retrieve all values in the users object.

// let allValues = Object.values(users)
// console.log("--------------------------------------------")
// //console.log(allValues)


let str1 = 'Abcdefghijklmnopqrstu'
let spChar = '!@#$%^&*'
let spNew = spChar[Math.round(Math.random() * spChar.length)]
let strNew = str1.substr(Math.random()* str1.length-6,4);
let num = Math.round(Math.random() * 999)
console.log(strNew + spNew + num);
