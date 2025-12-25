// // Encapsulation (Short)

// // Encapsulation is the process of wrapping data and methods together 
// // and restricting direct access to data using controlled methods.

// // Definition

// // Encapsulation is an OOP concept that binds data (variables) and methods (functions) together 
// // into a single unit and restricts direct access to some of the object’s data.

// Encapsulation using Private Fields (#) (Best & Modern)
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
