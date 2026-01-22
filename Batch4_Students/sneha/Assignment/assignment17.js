// Exercises Level 1


// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

class animal{
    constructor(name,age,color,legs){
        this.name=name
        this.age=age
        this.color=color
         this.legs=legs
    }
    doginfo(){
        console.log(`my dog name is${this.name}. age of him ${this.age} year olds, with ${this.color} colour`)
    }

    speed(){
        console.log(`${this.name} has running fast because of ${this.legs} long legs`)
    }
    
    looks(){
        console.log(`${this.name} has good looking because of ${this.color} colour and ${this.legs} long legs gives a great heights`)
    }

}

let allinfo = new animal("tuffy",2,"Brown",5)
allinfo.doginfo()
allinfo.speed()
allinfo.looks()
// Create a Dog and Cat child class from the Animal Class.
class Dog extends animal{
    constructor(name,age,color,legs,breed,size){
        super(name,age,color,legs)
        this.breed=breed
        this.size=size
    }
    typeofDog(){
        console.log(`${this.name} is from ${this.breed} breed`)
    }
    sizeofDog(){
        console.log(`${this.name} is ${this.size} size`)
    }
}
let Doginfo = new Dog("puppy",2,"Brown",4,"Golden ",'Medium')
Doginfo.typeofDog()
Doginfo.sizeofDog()

class Cat extends animal{
    constructor(name,age,color,legs,breed,size){
        super(name,age,color,legs)
        this.breed=breed
        this.size=size
    }

    typeofCat(){
        console.log(`my cat name is ${this.name} she is from ${this.breed} breed`)
    }

    sizeofcat(){
        console.log(`${this.name} is ${this.size}  in size`)
    }

}
let catInfo = new Cat("fishu",2,"Brown",4,"Persian",'small')
catInfo.typeofCat()
catInfo.sizeofcat()

// Exercises Level 2
// Override the method you create in Animal class
class Dog2 extends animal{
    constructor(name,age,color,legs){
    super(name,age,color,legs)
      }
        doginfo(){
               console.log(`Hey!!! meet my dog ${this.name}. he is ${this.age} year olds, with ${this.color} colour`)
        }
       
        color1(){
               console.log(`${this.name} beautiful color ${this.legs} long legs`)
        }
           
        looks(){
               console.log(`${this.name} has good looking because of ${this.color} colour and ${this.legs} long legs gives a great heights`)
        }
    
}
let dog2 = new Dog2("jimy",1,"brown",3)
dog2.doginfo()
dog2.color1()
dog2.looks()



// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
 ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


class statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    const sum = this.data.reduce((a, b) => a + b, 0);
    return Math.round(sum / this.count());
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  }

  mode() {
    const freq = {};
    this.data.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });

    let maxFreq = 0;
    let mode;

    for (let key in freq) {
      if (freq[key] > maxFreq) {
        maxFreq = freq[key];
        mode = Number(key);
      }
    }

    return { mode, count: maxFreq };
  }

  variance() {
    const mean = this.mean();
    const squaredDiff = this.data.map(x => (x - mean) ** 2);
    const variance =
      squaredDiff.reduce((a, b) => a + b, 0) / this.count();
    return Math.round(variance);
  }

  std() {
    return Math.round(Math.sqrt(this.variance()));
  }

  percentile(p) {
    const sorted = [...this.data].sort((a, b) => a - b);
    const index = Math.ceil((p / 100) * sorted.length) - 1;
    return sorted[index];
  }

  freqDist() {
    const freq = {};
    this.data.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });
    return freq;
  }
}

//console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// // console.log('Variance: ',statistics.var()) // 17.5
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


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class person_account{
    constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = []
    this.expenses = []
    }

  addIncome(amount, description) {
    this.incomes.push({ amount, description })
  }

  addExpense(amount, description) {
    this.expenses.push({ amount, description })
  }

  totalIncome() {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0)
  }

  totalExpense() {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0)
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }

  accountInfo() {
    return `Name: ${this.firstname} ${this.lastname}Total Income: ${this.totalIncome()}Total Expense: ${this.totalExpense()}Balance: ${this.accountBalance()}`
  }
}

const person = new person_account("Sneha", "Anap");

person.addIncome(35000, "Salary");
person.addIncome(5000, "gloceries");

person.addExpense(30000, "Rent");
person.addExpense(5000, "asset");

console.log(person.accountInfo());

