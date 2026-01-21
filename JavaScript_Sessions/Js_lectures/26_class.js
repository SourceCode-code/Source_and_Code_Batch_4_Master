// class --> class is more than a object its a blurprint to get object and its method

/** syntax of class 
 * 
 * 
 * let cc = {
 * 
 * key :value 
 * }
 * 
 * 
 * 
 * // class 
 * 
 * class person {
 * 
 * 
 * 
 * }

*/

// how to create objects form class

class Details {
  constructor(fn, ln, ag) {
    this.fn = fn;
    this.ln = ln;
    this.ag = ag;
  }
}

let sid = new Details("sid", "gadakh", 26);

console.log(sid); //Details { fn: 'sid', ln: 'gadakh', ag: 26 }

// example where in class we describe what the value of given of given parameter

class Person {
  constructor(
    name = "admin",
    lastname = "givenlastname",
    age = "26",
    country = "india"
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
  }
}

const person1 = new Person("sid", "gadakh", 28, "india");
console.log(person1);
let person2 = new Person();

console.log(person2);

class personal_details {
  constructor(fn, mn, ln, age) {
    this.fn = fn;
    this.mn = mn;
    this.ln = ln;
    this.age = age;
  }

  displayfullname() {
    const fullname = this.fn + " " + this.mn + " " + this.ln;
    return fullname;
  }
}

let person_1 = new personal_details("siddhant", "arjun", "gadakh", 28);
console.log(person_1);
console.log(person_1.displayfullname()); //siddhant arjun gadakh
//personal_details { fn: 'siddhant', mn: 'arjun', ln: 'gadakh', age: 28 }

class book {
  constructor(bookname, sell, author, year) {
    this.bookname = bookname;
    this.sell = sell;
    this.author = author;
    this.year = year;
  }

  nameofbookandcopiesold() {
    let ouput = this.bookname + " has sold " + this.sell + " copies uptill now";
    return ouput;
  }

  showdate() {
    let date = new Date();
    let cuurentdate = `${date.getDate()}/ ${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return cuurentdate;
  }
}

let book1 = new book(
  "rich dad poor dad",
  "10 millions",
  "roberkt kioksaki",
  "2005"
);

console.log(book1);
console.log(book1.nameofbookandcopiesold());
console.log(book1.showdate());

// setter and getter method
// if you retirve -->get
// if you want set --> set

class details_data {
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
}

let my_data = new details_data("siddhant", "arjun", "gadakh", 30);
console.log(my_data); //details_data { fn: 'siddhant', mn: 'arjun', ln: 'gadakh', age: 30 }

console.log(my_data.get_AGE); //30

my_data.modifty_AGE=26
console.log(my_data);
console.log(my_data.get_AGE) 
//details_data { fn: 'siddhant', mn: 'arjun', ln: 'gadakh', age: 26 }
// 26 


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

  static showDATE(){
    let date = new Date()
    let curDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return curDate
  }
}



console.log(details_data_2.showDATE()) //23/12/2025
 