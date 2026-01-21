//1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation)
//. In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class statistics {
    constructor(data) {
        this.data = data
    }
    Count() {

        return this.data.length
    }
    min() {
        return (Math.min(...this.data))
    }
    max() {
        return (Math.max(...this.data))
    }
    Range() {
        return (this.max) - (this - min)
    }
    mean() {
        return this.data.reduce((a, b) => a + b, 0) / this.count()
    }

    median() {
        const sorted = [...this.data].sort((a, b) => a - b)
        const mid = Math.floor(sorted.length / 2)

        return sorted.length % 2 !== 0
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2
    }

    mode() {
        const freq = {}
        this.data.forEach(num => {
            freq[num] = (freq[num] || 0) + 1
        })

        let maxFreq = 0
        let mode

        for (let key in freq) {
            if (freq[key] > maxFreq) {
                maxFreq = freq[key]
                mode = Number(key)
            }
        }

        return { mode, count: maxFreq }
    }

    variance() {
        const mean = this.mean()
        const squaredDiff = this.data.map(n => (n - mean) ** 2)
        return squaredDiff.reduce((a, b) => a + b, 0) / this.count()
    }


    std() {
        return Math.sqrt(this.variance())
    }

    percentile(p) {
        const sorted = [...this.data].sort((a, b) => a - b)
        const index = Math.ceil((p / 100) * sorted.length) - 1
        return sorted[index];
    }

    freqDist() {
        const freq = {}
        this.data.forEach(n => {
            freq[n] = (freq[n] || 0) + 1
        });
        return freq
    }
}///////////////////////////////get thehelp of chatgpt to solve this quetion

console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ', statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // // you output should look like this
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



//2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class personAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.income = []
        this.expenses = []
    }

    Addincome(amount) {
        this.income.push(amount)
    }
    addexpenses(amount) {
        this.expenses.push(amount)
    }
    totalIncome() {
        return this.income.reduce((a, b) => a + b, 0)
    }

    totalExpense() {
        return this.expenses.reduce((a, b) => a + b, 0)
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
accountInfo() {
    return this.firstname + " " + this.lastname + 
           " | Balance: " + this.accountBalance();
  }
}

const me=new personAccount("sneha" ,"anap")
me.Addincome(10000)
me.addexpenses(3500)
console.log(me.accountInfo())