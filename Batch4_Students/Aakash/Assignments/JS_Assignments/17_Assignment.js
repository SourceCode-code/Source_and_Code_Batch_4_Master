class animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs

    }
    displaynameOfanimal() {
        let nameOfanimal = this.name + " is cute"
        return nameOfanimal
    }
    get animalAge() {
        return this.age
    }
    set modifiedAge(age) {
        return this.age = age
    }
}

let newAnimal = new animal("dog", 10, "black", "short")
console.log(newAnimal.displaynameOfanimal())
console.log(newAnimal.animalAge)
newAnimal.modifiedAge = 9
console.log(newAnimal)

class dog extends animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const myDog = new dog("tommy",10,"white","long", "golden retriver");
console.log(myDog)
myDog.bark()

class cat extends animal{
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs, breed)
        this.breed = breed
    }
}