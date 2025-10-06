// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").
let coin0 = "Heads,Tails"
let tosscoin = coin0.split(",")
let coin1 = tosscoin.length
console.log(coin1)
let tossed = tosscoin[Math.floor(Math.random()*tosscoin.length)]
console.log("ans 33", tossed)



//  Q38. Create a random password of 8 characters
// using letters and numbers (hint: use Math.random and string methods).
// tosh@111
let randomPass = "qwertyuiopoijhg"
let randomPass1 = "!@#$%^&*"
let pass1 = randomPass1[Math.round(Math.random()* randomPass1.length)]
let pass2 = randomPass.substr(Math.random()*randomPass.length-5,4)
let passNum = Math.round(Math.random()*999)
console.log(pass1 + pass2 + passNum)