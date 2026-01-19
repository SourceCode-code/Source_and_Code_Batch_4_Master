// Encapsultaion --> encapsulation is principle where data (properties and methods) are bundled toegther in a object or class
// to restartin a direct acess to some part or some functionaltiy

// it helps protect the internal security /state  of an object or class and it will only show needed part

// why ?

/**
 * 1) to control the access to data
 * 2) to protect the class or object form unauthorise access
 * 3) to make your code organised and easier to mainatain
 */

//example

class Person {
  #age; // private varaible

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getDetails() {
    return ` ${this.name} is ${this.#age} year old`;
  }

  #isAdult() {
    return this.#age >= 18;
  }

  canVote() {
    return this.#isAdult() ? "he can vote " : "he cannot vote he  is minor";
  }
}

let person1 = new Person("sid", 26);
let person2 = new Person("lkj", 17);

console.log(person1.getDetails());
console.log(person1.canVote());

console.log(person2.getDetails());
console.log(person2.canVote());

// login example

class User {
  #password; // private password varaible
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  login(inputpassword) {
    return inputpassword === this.#password
      ? "login successful"
      : "invalid login";
  }
}

let user1 = new User("admin", "admin123");

console.log(user1.login("00000")); // invalid
console.log(user1.login("admin123")); // valid
