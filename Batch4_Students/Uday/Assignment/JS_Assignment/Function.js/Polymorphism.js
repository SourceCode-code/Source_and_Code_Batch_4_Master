// Polymorphism in JavaScript
// Last Updated : 02 Aug, 2025
// Polymorphism is one of the 4 pillars of object-oriented programming languages 
// where poly means many and morphism means transforming one form into another. 
// Polymorphism means the same function with different signatures is called many times.
//  It allows methods to do different things based on the object it is acting upon.

// In JavaScript, polymorphism works in two primary ways:

// Method Overriding: A child class overrides a method of its parent class.
// Method Overloading (simulated): A function behaves differently based on the number or type of its arguments.
// Method Overriding
// Method overriding occurs when a subclass provides its own specific implementation of a method that
//  is already defined in its parent class. When you call this method, JavaScript will use the subclass's 
// implementation instead of the parent's, which is a runtime decision.




// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }
// ​
// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }
// ​
// class Cat extends Animal {
//     speak() {
//         console.log("Cat meows");
//     }
// }
// ​
// const dog = new Dog();
// dog.speak(); 
// ​
// const cat = new Cat();
// cat.speak();

// Output
// Dog barks
// Cat meows
// In this example

// Dog and Cat override the speak() method defined in the Animal class.
// Even though all of them are instances of Animal, each class provides its own behavior for the speak() method.
// This is an example of runtime polymorphism because JavaScript determines at runtime which method to call 
// based on the object's type.
// Method Overloading (Compile-time Polymorphism)
// JavaScript does not natively support method overloading, where multiple methods with the same name but different
//  arguments exist in the same scope. However, method overloading can be simulated by checking the number or type of 
// arguments passed to a function, and executing different logic based on them.




// class Calculator {
//     add(a, b) {
//         if (b === undefined) {
//             return a + a; 
//         }
//         return a + b; 
//     }
// }
// ​
// const calc = new Calculator();
// console.log(calc.add(2)); 
// console.log(calc.add(2, 3));

// Output
// 4
// 5
// In this example

// The add() method behaves differently based on the number of arguments provided.
// If only one argument is passed, it doubles the value; if two arguments are passed, it adds them.
// Note- While JavaScript doesn’t natively support method overloading with function signatures (as in Java or C++), 
// we can still achieve similar functionality through manual argument checking.

// Polymorphism with Functions and Objects
// It is also possible in JavaScript that we can make functions and objects with polymorphism.




// class A {
//     area(x, y) {
//         console.log(x * y);
//     }
// }
// class B extends A {
//     area(a, b) {
//         super.area(a, b);
//         console.log('Class B')
//     }
// }
// ​
// let ob = new B();
// let output = ob.area(100, 200);