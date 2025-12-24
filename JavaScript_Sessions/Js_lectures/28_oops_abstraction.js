// abstraction --> this used  to make your code neet and clean and the main purpose is to hide the implementaion of details
// beacuse of which it simplify complicated system

/** why ?
 * 1) simplfiy your code for user
 * 2) makes the application easier to maintain and extend
 * 3) reduce the complexicty for user
 */

// JS Doesnt have built in absatction
// you have various mechanims for abstartion in other lanaguegs like java or c#
//you can achieve absraction through the following techinque

// you will define a class and use pubilc and private methods to control the access
// # will represent a private method

// example

class car {
  #enterkey() {
    console.log("the key has been  verifed");
  }

  #startyourengine() {
    console.log("the engine has been started ");
  }

  drivecar() {
    this.#enterkey();
    this.#startyourengine();
    console.log("the car is ready to drive");
  }
}

let BMW = new car();

BMW.drivecar();

// ----------------------------------------------------------------------

function BankAccount(startbalance) {
  let initalbalance = startbalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        initalbalance += amount;
        console.log(
          ` your amount ${amount} has been deposited and your total balanace is ${initalbalance}`
        );
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= initalbalance) {
        initalbalance -= amount;
        console.log(
          ` your amount ${amount} has been withdraw and your total balanace is ${initalbalance}`
        );
      }
      else { 
        console.log("insufficent funds")
      }
    },

    checkbalance(){
        console.log( ` your current balance is ${initalbalance}`)
    }
  };
}


const account1 = BankAccount(1000)

account1.checkbalance()
account1.deposit(1000)
account1.checkbalance()
account1.withdraw(1500)
account1.withdraw(1000)




