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
for (let i = 0; i < q16.length; i++) {
    console.log(q16[i])
}

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let str8 = str7.split(" ")
for (let i = 0; i < str8.length; i++) {
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

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log("q3", word1.includes("on") && word2.includes('on'));

let q7 = '10'
q7 = (parseInt(q7));
console.log(q7 === 10)

console.log('q8', 10 == 5)
console.log(5 != '5')
console.log(1 != 5 && 6 != 11)
console.log(6 < 7 || 4 < 1)

// 14. Write a script the user to enter the base and height of a triangle, then calculate its area.

let base = 22;
let height = 10;
let area = (1 / 2 * 22 * 10)
console.log(area)

//or

let base2 = '22'
let height2 = '10'
base2 = parseFloat(base2)
height2 = parseFloat(height2)
let area2 = (1 / 2 * base2 * height2)
console.log(area2)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.


let sidea = '10';
let sideb = '20';
let sidec = '30';
sidea = parseFloat(sidea)
sideb = parseFloat(sideb)
sidec = parseFloat(sidec)
console.log("perimeter of triangle = ", sidea + sideb + sidec)


// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length = 10;
let width = 20;
let areaOfRect = (length * width)
let pmtrOfRect = (2 * (length + width))
console.log("area of Rectangle =", areaOfRect)
console.log('perimeter of Rectangle =', pmtrOfRect)

let radius = 47;
let circleArea = Math.PI * radius * radius;
let circleCircumference = 2 * Math.PI * radius;
console.log(circleArea)
console.log(circleCircumference)

let validage = 18;

let canDrive = validage >= 18 ? "can drive" : 'cannot drive'
console.log(canDrive)

let eo = 1234567890;
let eooutput = eo % 2 === 0 ? 'even number ' : 'odd number '
console.log(eooutput)

let myAge = 26;
let yourAge = 23;

if (myAge > yourAge) {
    console.log(`i am elder to you by ${myAge - yourAge} years`)
}
else if (yourAge > myAge) {
    console.log(`your are older than me by ${yourAge - myAge} years`)
}
else { console.log('we are of same age') }

/*----------------------------------------------------------------------------------------------

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.




--------------------------------------------------------------------------------------------------*/

let num1 = -40

switch (true) {
    //case 1 when is greater than zero
    case num1 > 0: console.log(`the given number ${num1} is a positive number`)
        break
    //case 2 
    case num1 < 0: console.log(`the given number ${num1} is a negative number`)
        break
    //case 3 
    case num1 === 0: console.log(`the given number is zero`)
        break
    // default case 
    default: console.log("enter correct data ")
}



let c = 100;
switch (true) {
    case c > 0: console.log(` the given number ${c} is positive `)
        break
    case c < 0: console.log(`the given number ${c} is negative`)
        break
    case c === 0: console.log(`the given number ${c} is zero`)
        break
    default: console.log('none of the above')
}


let age = 24;
switch (true) {
    case age >= 24: console.log(`${age} matches output`)
        break
    case age <= 24: console.log(`${age} doesnt match output`)
        break
    case age === 24: console.log(`${age}is one and the same`)
        break
    default: console.log(`${age}doesnt match anything, please try something diferent`)
}

let graduity = 1;
let duration = graduity >= 1 ? 'can have graduity ' : 'cannot have graduity'
console.log(duration)


let myage = 18;
switch (true) {
    case myage > 18: console.log(`i can have a job if i am ${myage}`)
        break
    case myage < 18: console.log(`i cannot get work if i am not ${myage}`)
    break
case myage === 18 : console.log (`somewhere i can get a job if i am ${myage}`)
break
default : console.log(`still dependent on parents`)
}

console.log(typeof(NaN))

let sum = 0;
for (let i = 0 ; i <= 100 ; i++){
    sum = sum + i
}
console.log(sum)


for (let P = 0 ; P <= 10 ; P++){
console.log(P)
}

for (let q = 10 ; q >=0 ; q--)
{console.log(q)}