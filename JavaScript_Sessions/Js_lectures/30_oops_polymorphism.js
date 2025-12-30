// polymorphism --> polymorphism is core concept oops which allows object of different types to be treated as if they are object of same type

// in js ploymorphism enables methods with same name to behave differently on the basis on object context

// we acheive ploymorphsim in js through inetrfaces

// example -->

class shape {
  getArea() {
    throw new Error(" get area method must be implemneted first");
  }
}

class circle extends shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class rectangle extends shape {
  constructor(width, height) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.width * this.height;
  }
}

let shapes1 = new circle(50);
console.log(shapes1.getArea());
let shapes2 = new rectangle(30, 50);
console.log(shapes2.getArea());

let shapes = [new circle(10), new rectangle(20, 10)];

shapes.forEach((el) => {
  console.log(el.getArea());
});

//--------------------------------------------------------

class Animal {
  sound() {
    console.log("animal makes a sound");
  }
}


class Dog extends Animal{
    sound(){
        console.log("dog barks ")
    }
}

class cat extends Animal{
    sound(){
        console.log("cat meows")
    }
}

const animals =[ new Dog(),new cat()]

animals.forEach((el)=>{
    el.sound()
})