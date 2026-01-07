// What is JSON?

// JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange 
// data between a client and a server.

// 👉 It looks like a JavaScript object but is actually text (string).

// Why JSON is Used

// Easy to read and write

// Lightweight and fast

// Language independent

// Widely used in APIs and web applications

// JSON Syntax Rules

// ✔ Data is in key : value pairs
// ✔ Keys must be double-quoted
// ✔ Values can be:

// String

// Number

// Boolean

// Array

// Object

// null

// ❌ Functions & undefined are not allowed

// Example of JSON
// {
//   "name": "Uday",
//   "age": 25,
//   "isMarried": false,
//   "skills": ["JavaScript", "Automation"]
// }

// JSON vs JavaScript Object
// JSON	JavaScript Object
// Text format	Actual object
// Keys must be in double quotes	Quotes optional
// Cannot have functions	Can have functions
// Converting JS Object → JSON
// JSON.stringify()
// const user = {
//   name: "Uday",
//   age: 25,
//   skills: ["JS", "Playwright"]
// };

// const jsonData = JSON.stringify(user);
// console.log(jsonData);

// Output
// {"name":"Uday","age":25,"skills":["JS","Playwright"]}

// Converting JSON → JS Object
// JSON.parse()
// const jsonString = '{"name":"Uday","age":25}';

// const obj = JSON.parse(jsonString);
// console.log(obj.name);