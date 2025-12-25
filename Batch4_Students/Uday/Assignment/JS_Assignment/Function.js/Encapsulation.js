// Encapsulation in JavaScript
// Definition

// Encapsulation is an OOP concept that binds data (variables) and methods (functions) together into a single unit and restricts direct access to some of the object’s data.

// 👉 It focuses on data protection and controlled access.

// Why Encapsulation is Used

// Protects data from unauthorized access

// Prevents accidental modification

// Improves maintainability

// Makes code secure and predictable

// How Encapsulation is Achieved in JavaScript

// Encapsulation can be implemented using:

// Closures

// Private fields (#) – ES2020

// Getters and Setters

// 1️⃣ Encapsulation using Private Fields (#) (Best & Modern)
// Example
// class BankAccount {
//   #balance = 0; // private variable

//   constructor(amount) {
//     this.#balance = amount;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount(5000);

// account.deposit(2000);
// console.log(account.getBalance()); // 7000

// // console.log(account.#balance); ❌ Error (private)

// Explanation

// #balance is private

// Cannot be accessed directly from outside

// Access only via public methods

// 2️⃣ Encapsulation using Getters & Setters
// Example
// class User {
//   constructor(name) {
//     let _name = name; // private variable

//     this.getName = function () {
//       return _name;
//     };

//     this.setName = function (newName) {
//       _name = newName;
//     };
//   }
// }

// const user1 = new User("Uday");
// console.log(user1.getName());

// user1.setName("Patil");
// console.log(user1.getName());

// Explanation

// _name is hidden

// Controlled access using getter & setter methods

// 3️⃣ Encapsulation using Closure (Traditional Way)
// Example
// function Counter() {
//   let count = 0; // private data

//   return {
//     increment() {
//       count++;
//       return count;
//     }
//   };
// }

// const counter = Counter();
// console.log(counter.increment());
// console.log(counter.increment());

// Explanation

// count cannot be accessed directly

// Only accessible through exposed method

// Real-World Example

// ATM Machine

// Balance is hidden

// User can only withdraw or check balance

// Encapsulation vs Abstraction
// Encapsulation	Abstraction
// Protects data	Hides complexity
// Focus on data	Focus on behavior
// Uses access control	Uses interfaces
// Interview Answer (Short)

// Encapsulation is the process of wrapping data and methods together and restricting direct access to data using controlled methods.

// One-Line Answer

// Encapsulation means data hiding with controlled access.

// If you want, I can also explain:
// ✔ real-time banking example
// ✔ encapsulation vs inheritance
// ✔ advantages & disadvantages