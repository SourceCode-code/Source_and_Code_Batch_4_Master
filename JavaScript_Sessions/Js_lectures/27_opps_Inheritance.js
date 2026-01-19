//oops --> object oriented programing structure
/**
 * inheritance
 * abstraction
 * encapsulation
 * polymorphism
 *
 */

// as a automation testor where will you use this concepts

// this concepts will be used in creation of better framework using POM
//( in your interviews they will ask you theory question )

//-------------------------------------------------------------------------------------------
//Inheritance -->

// Inheritance in JS allows one class to inherit property and method of other class is called Inheritance
// it promotes code resuabality it create a hierarchincal relation

// parent clas

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}
// what super keyword --> when youy access the property of a parnet in child class at that you will use super keyword
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const myDog = new Dog("tommy", "golden retriver");

console.log(myDog); //Dog { name: 'tommy ', breed: 'golden retriver' }

myDog.bark();
myDog.eat();

class cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} of ${this.color} is meowing`);
  }
}

let Mycat = new cat("tom", "black");

Mycat.meow();
Mycat.eat();

// static --> when you create a method using static keyword it is applied directly to the class

class details_data_2 {
  constructor(fn, mn, ln, age) {
    this.fn = fn;
    this.mn = mn;
    this.ln = ln;
    this.age = age;
  }

  get get_AGE() {
    return this.age;
  }

  set modifty_AGE(Age) {
    this.age = Age;
  }

  static showDATE() {
    let date = new Date();
    let curDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return curDate;
  }
}

console.log(details_data_2.showDATE()); //23/12/2025

// overriding -->  when child class updates the inhertated method of parent class that is called overriding

class Parent {
  show() {
    console.log(" i am parent");
  }
}

class child extends Parent {
  show() {
    console.log("i am child");
  }
}

let c = new child();

c.show(); //i am child

// overloading-->  when you define mutiple methods or function in class with same name but different paramter it is called overloading

class MathADD {
  add(a, b) {
    if (b !== undefined) {
      return a + b;
    }
    return a;
  }
}

const addm = new MathADD()

console.log(addm.add(1))
console.log(addm.add(10,1))