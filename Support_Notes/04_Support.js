// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).
//Ashu@123

let str1 = 'Abcdefghijklmnopqrstu'
let spChar = '!@#$%^&*'
let spNew = spChar[Math.round(Math.random() * spChar.length)]
let strNew = str1.substr(Math.random()* str1.length-6,4);
let num = Math.round(Math.random() * 999)
console.log(strNew + spNew + num);


// random pass useing upper case lower case and special char

// attendance 22/09
/*chaitanya
adesh
ganshyam
rushi
swapnil
akash
*/