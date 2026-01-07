// Exercises Level 1


// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

// class Animal {
//     constructor(name, age, color, legs){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.legs = legs;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     sleep() {
//         return `${this.name} is sleeping`
//     }

//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, Colour: ${this.color}, Legs: ${this.legs}`;
//     }
// }

// // Creating child calss

// class Dog extends Animal {
//     constructor(name, age, colour, legs, breed) {
//         super(name, age, colour, legs);
//         this.breed = breed;
//     }

//     bark() {
//         return `${this.name} is barking`;
//     }

//     getDetails() {
//         return `${super.getDetails()}, Breed: ${this.breed}`;
//     }
// }

// // Creating one more child class

// class Cat extends Animal {
//     constructor(name, age, colour, legs, breed) {
//         super(name, age, colour, legs)
//         this.breed = breed;
//     }

//     meow() {
//         return `${this.name} is says meow`;
//     }

//     getDetails() {
//         return `${super.getDetails()}, Breed: ${this.breed}`;
//     }
// }

// // creatibg object and passing values to constructor

// let dog = new Dog("Dobby", 2, "black", "Rottwiler");
// let cat = new Cat("suzee", 1, "white", 4, "pershine");

// console.log(dog.getDetails());
// console.log(dog.eat());
// console.log(dog.bark());
// console.log(dog.sleep());

// console.log(cat.getDetails());
// console.log(cat.sleep());
// console.log(cat.meow());
// console.log(cat.eat());


// Exercises Level 2
// Override the method you create in Animal class

//Method overriding allows a child class to redefine a method inherited from the parent class
// to provide class-specific behavior while keeping the same method name.

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  eat() {
    return `${this.name} is eating food`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Animal {
  eat() {
    return `${this.name} eats bones and dog food`;
  }

  bark() {
    return `${this.name} is barking`;
  }
}


class Cat extends Animal {
  eat() {
    return `${this.name} eats fish and milk`;
  }

  meow() {
    return `${this.name} says meow`;
  }
}


const dog = new Dog("Dobby", 2, "Black", 4);
const cat = new Cat("Suzie", 1, "White", 4);

console.log(dog.eat());   // overridden
console.log(cat.eat());   // overridden
console.log(dog.sleep()); // inherited
console.log(cat.sleep()); // inherited

