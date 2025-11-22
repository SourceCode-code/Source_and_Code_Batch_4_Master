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

let mob = (Math.floor(Math.random() * (999999999) + 1))
console.log(mob)

let upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwc = "abcdefghijklmnopqrstuvwxyz";
let numbs = (Math.floor(Math.random() * (9999 - 1000 + 1) + 1000))
let sym = "@#$%&*"

let a1 = (Math.floor(Math.random() * (upc.length)))
let a2 = (Math.floor(Math.random() * (upc.length)))
let a3 = (Math.floor(Math.random() * (upc.length)))
let a4 = (Math.floor(Math.random() * (upc.length)))
let sym1 = (Math.floor(Math.random() * (sym.length)))
console.log(`${upc[a1]}${upc[a2]}${upc[a3]}${upc[a4]}${sym[sym1]}${numbs}`)

// 8. Write a program to count how many characters (excluding spaces) are in a string.
let q8 = "  Chaitanya  ";
console.log(q8.length)
let q9 = q8.replaceAll(" ", "")
console.log(q9.length)

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let q15 = "red,green,blue,yellow"
let q16 = q15.split(",")
for (let i = 0 ; i <q16.length ; i++){
console.log(q16[i])
}

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let str8 = str7.split(" ")
for (let i = 0 ; i < str8.length ; i++){
console.log(str8[i])
}


let str1 = "JavaScript";
let str2 = "javascript";

if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Both strings are equal");
} else {
  console.log("Strings are not equal");
}

// 45. Split a string into characters.
let q45 = "Split a string into characters"
console.log(q45.split(""))

let no = +919970959408;      // we cant check if it starts with number so cinvert it into string and then check
let mobno = no.toString()
console.log(mobno)
console.log(mobno.startsWith(91));

let times3 = "repeat"
console.log(times3.repeat(3))