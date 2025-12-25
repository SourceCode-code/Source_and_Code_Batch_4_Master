// Abstraction in JavaScript
// Definition

// Abstraction is an OOP concept that hides internal implementation details and shows only essential features to the user.

// 👉 It focuses on what an object does, not how it does it.

// Why Abstraction is Used

// Reduce complexity

// Hide unnecessary details

// Improve security

// Make code easy to use and maintain

// How Abstraction is Achieved in JavaScript

// JavaScript does not have a built-in abstract keyword like Java, but abstraction can be implemented using:

// Abstract classes (using ES6 classes)

// Interfaces (using methods & throwing errors)

// Functions & Closures

// 1️⃣ Abstraction using Abstract Class (Most Common)
// Syntax

// Create a base class

// Throw error if method is not implemented

// Example
// class BankAccount {
//   constructor() {
//     if (this.constructor === BankAccount) {
//       throw new Error("Cannot create instance of abstract class");
//     }
//   }

//   calculateInterest() {
//     throw new Error("Method must be implemented");
//   }
// }

// Child Class
// class SavingsAccount extends BankAccount {
//   calculateInterest() {
//     return "Interest calculated for Savings Account";
//   }
// }

// const account = new SavingsAccount();
// console.log(account.calculateInterest());

// Explanation

// BankAccount acts as abstract class

// Direct object creation is blocked

// Child class must implement calculateInterest()

// 2️⃣ Abstraction using Methods (Simple Example)
// Example
// class Vehicle {
//   start() {
//     console.log("Vehicle started");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log("Car started with key");
//   }
// }

// Explanation

// User calls start()

// Internal working is hidden

// Only essential functionality is exposed

// 3️⃣ Abstraction using Function & Closure
// Example
// function ATM() {
//   let balance = 10000; // hidden data

//   return {
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return balance;
//       }
//       return "Insufficient balance";
//     }
//   };
// }

// const atm = ATM();
// console.log(atm.withdraw(2000));

// Explanation

// balance is hidden

// User can only access withdraw()

// Internal data is protected

// Real-World Example

// ATM Machine → user sees Withdraw, Check Balance

// Internal logic (DB, validations) is hidden

// Interview Answer (Short)

// Abstraction hides implementation details and shows only essential features. In JavaScript, it is achieved using classes, methods, and closures.

// Key Difference
// Abstraction	Encapsulation
// Hides implementation	Protects data
// Focus on behavior	Focus on data
// One-Line Answer

// Abstraction means showing only what is necessary and hiding how it is done.

// If you want, I can also explain:
// ✔ abstraction vs inheritance
// ✔ abstraction vs encapsulation
// ✔ interview questions on abstraction