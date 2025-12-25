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
    this.color=color
  }

  meow(){
    console.log(`${this.name} of ${this.color} is meowing`)
  }
}


let Mycat = new cat("tom","black")

Mycat.meow()
Mycat.eat()


// overriding -->
// overloading-->