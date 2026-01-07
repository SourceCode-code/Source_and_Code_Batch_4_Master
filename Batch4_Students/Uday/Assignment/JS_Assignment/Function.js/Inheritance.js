// Inheritance in JavaScript
// Definition

// Inheritance in JavaScript is a mechanism where one class (child/subclass) can reuse properties and methods of another class (parent/superclass).
// It helps in code reusability, better structure, and easier maintenance.

// JavaScript supports inheritance mainly through:

// Prototype-based inheritance (core JS concept)

// Class-based inheritance (ES6 syntax – cleaner & commonly used)

// 1️⃣ Inheritance using ES6 Classes (Most Common)
// Syntax

// extends → to inherit from another class

// super() → to call the parent class constructor

// Example
// // Parent class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// // Child class
// class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age); // calls parent constructor
//     this.course = course;
//   }

//   study() {
//     return `${this.name} is studying ${this.course}`;
//   }
// }

// // Object creation
// const student1 = new Student("Uday", 25, "JavaScript");

// console.log(student1.greet());   // Hello, my name is Uday
// console.log(student1.study());   // Uday is studying JavaScript

// Explanation

// Student inherits from Person

// super() initializes name and age

// Student can use:

// Parent methods → greet()

// Its own methods → study()

// 2️⃣ Inheritance using Prototype (Traditional JS)

// Before ES6, inheritance was achieved using prototypes.

// Example
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return `Hello ${this.name}`;
// };

// function Student(name, course) {
//   Person.call(this, name); // inherit properties
//   this.course = course;
// }

// // inherit methods
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function () {
//   return `${this.name} is studying ${this.course}`;
// };

// const student1 = new Student("Uday", "Automation");

// console.log(student1.greet()); // Hello Uday
// console.log(student1.study()); // Uday is studying Automation

// Explanation

// Object.create() links prototypes

// call() is used to inherit properties

// More complex than class syntax

// 3️⃣ Why Use Inheritance? (Interview Point)

// ✅ Code reusability
// ✅ Avoids duplication
// ✅ Easy maintenance
// ✅ Logical hierarchy (Parent → Child)

// 4️⃣ Key Keywords (Quick Revision)
// Keyword	Meaning
// extends	Inherit another class
// super()	Call parent constructor
// prototype	Core JS inheritance mechanism
// One-line Interview Answer

// Inheritance in JavaScript allows a child class to acquire properties
//  and methods of a parent class using prototype chaining or ES6 extends keyword.