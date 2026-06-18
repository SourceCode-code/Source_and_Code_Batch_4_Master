class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const user = new BankAccount();

user.deposit(5000);
user.withdraw(1000);

console.log("Balance:", user.getBalance());