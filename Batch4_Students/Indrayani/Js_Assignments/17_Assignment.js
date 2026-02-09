// Exercises Level 1


// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`)
    }
    name() {
        console.log(`${this.name}`)
    }
    age() {
        console.log(`${this.name} is ${this.age} brown in color`)
    }
    color() {
        console.log(`${this.name} is ${this.color} color`)
    }
    legs() {
        console.log(`${this.name} is${this.legs} long`)
    }
    eat() {
        console.log(`${this.name} is eating`)
    }
    bark(){
        console.log(`${this.name} is barking`)
    }

}

const myAnimal = new Animal("pabello", 4, "brown", "long", "golden retrive")
console.log(myAnimal)


// Create a Dog and Cat child class from the Animal Class.


class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    bark() {
        console.log(`${this.name} is barking`)
    }
}
const myDog = new Dog("Rocky", "golden retriver")
console.log(myDog)

myDog.bark()
myDog.eat()

class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color

    }
    meow() {
        console.log(`${this.name} is meowing`)
    }
}

const myCat = new Cat("money", "golden")
console.log(myCat)

myCat.meow()
myCat.eat()


// Exercises Level 2
// Override the method you create in Animal class


class Animal_2 {
    bark() {
        console.log( `${this.name} is barking`);
    }
}

class Dog_2 extends Animal_2 {
    eat() {
        console.log(`${this.name} is eating`);
    }
}

let c = new Dog_2();
c.eat();



// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    constructor(ages){
        this.ages=ages
    }
    count(){
       return this.ages.length
    }
    sum(){
        return this.ages.reduce((acc,cur)=> acc+cur,0)
     }
     min(){
        return Math.min(...this.ages)
     }
     max(){
        return Math.max(...this.ages)
     }
     range(){
        return this.max() - this.min()
    }
     mean(){
        return this.sum()/this.count()
     }
     median(){
        const sortedAges =[...this.ages].sort((a,b)=>a-b)
        const mid = Math.floor(this.count()/2)
     }
     statisticdescribe(){
        return `count: ${this.count()} sum: ${this.sum()} Min: ${this.min()}  Max: ${this.max()} Range: ${this.range()}  `
     } 
}

//const statistical_1 = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
 //statistical_1.count(25)
 //statistical_1.sum
//console.log(Statistics.describe())
 //console.log('count:', Statistics.count()) 
 //console.log('Sum: ', Statistics.sum()) 
 //console.log('Min: ', Statistics.min()) 
 //console.log('Max: ', Statistics.max()) 
//console.log('Range: ', Statistics.range()) 
 //console.log('Mean: ', Statistics.mean()) 
//console.log('Median: ',Statistics.median()) 


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = []
        this.expenses = []
    }
    addIncome(description, amount) {
        return this.incomes.push({ description, amount} )
    }
    addExpense(description, amount) {
        return this.expenses.push({description, amount} )
    }
    totalIncome() {
        return this.incomes.reduce((acc, cur) => acc + cur.amount, 0)
    }
    totalExpense() {
        return this.expenses.reduce((acc, cur) => acc + cur.amount, 0)
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
    accountInfo() {
        return`Account holder: ${this.firstname} ${this.lastname} ,totalIncome: ${this.totalIncome()},totalExpense: ${this.totalExpense()},AccountBalance:${this.accountBalance()}`
    }

}

const personal_account = new PersonAccount('Indrayani','Suryawanshi')
personal_account.addIncome('salary',5000)
personal_account.addIncome('freelancing',2000)
personal_account.addExpense('rent',1500)
personal_account.addExpense('grocery',500)
console.log(personal_account.accountInfo())
console.log('total income:',personal_account.totalIncome())
console.log('total expense:',personal_account.totalExpense())
console.log('Account balance:', personal_account.accountBalance())