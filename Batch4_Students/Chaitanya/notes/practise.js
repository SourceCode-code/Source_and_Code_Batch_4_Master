let date = new Date()
console.log(date)
console.log(date.getFullYear())

let month = date.getMonth() + 4
console.log(month)

let today = date.getDate()
console.log(today)

let d1 = (Math.floor(Math.random() * 6) + 1)
let d2 = (Math.floor(Math.random() * 6) + 1)
console.log(d1 + " " + d2)

let x = (Math.random() * (9.3 - 5.5) + 5.5)
let y = x.toFixed(1)
console.log(y)

let numToRound = 29
console.log(Math.round(numToRound / 5) * 5)


let name = `chitanya bhausaheb kute`
console.log(name.length)
console.log(name.indexOf(`k`))

let AN1 = Math.floor(Math.random() * (9999 - 1000)) + 1000;
let AN2 = Math.floor(Math.random() * (9999 - 1000)) + 1000;
let AN3 = Math.floor(Math.random() * (9999 - 1000)) + 1000;
console.log(AN1, AN2, AN3);

let coin = ('heads,tails')
let cointoss = coin.split(',')
let output = (Math.floor(Math.random() * 2))
console.log(cointoss[output])

let rannum = (Math.floor(Math.random() * (100) + 1))
console.log(rannum)
if (rannum % 2 !== 0) {
    console.log('odd number')
}
else {
    console.log('even number')
}
/*
let ap = 'abcdefghijklmnopqrstuvwxys'
let sym = '!@#$%*&'
let num = (Math.floor(Math.random() * (9999 - 1000 + 1) + 1000))
let a1 = (Math.floor(Math.random() * (ap.length)))
let a2 = (Math.floor(Math.random() * (ap.length)))
let a3 = (Math.floor(Math.random() * (ap.length)))
let a4 = (Math.floor(Math.random() * (ap.length)))
let s1 = (Math.floor(Math.random() * (sym.length)))
console.log(`${ap[a1]}${ap[a2]}${ap[a3]}${ap[a4]}${sym[s1]}${num}}`)
*/
let q11 = "123"
console.log(Number(q11))

let mob = (Math.floor(Math.random()*(999999999)+1))
console.log(mob)

let upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwc = "abcdefghijklmnopqrstuvwxyz";
let numbs = (Math.floor(Math.random()*(9999-1000+1)+1000))
let sym = "@#$%&*"

let a1 = (Math.floor(Math.random()*(upc.length)))
let a2 = (Math.floor(Math.random()*(upc.length)))
let a3 = (Math.floor(Math.random()*(upc.length)))
let a4 = (Math.floor(Math.random()*(upc.length)))
let sym1 = (Math.floor(Math.random()*(sym.length)))
console.log(`${upc[a1]}${upc[a2]}${upc[a3]}${upc[a4]}${sym[sym1]}${numbs}`)

