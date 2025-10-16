//abc@123








// Traders profit above 50000 then he is ‘supertrader’., 
// Profit is between 30k to 50k then he is ‘average trader’
// Profit is less than 30k or 0 then he is ‘below average trader’
// If their is no profit then he is loss making trader
// And if less than zero then print ‘need to learn trading more’

// let profit=50000
// if(profit>=50000

let string1="ACDEFGHIJKLMNOPQRSTUVWXYZ"
let str2="1234567"
let str3="@#$&*"
let random=Math.round(Math.random()*string1.length)

let ran=Math.round(Math.random()*str2.length)
let ran2=Math.round(Math.random()*str3.length)
console.log(`${string1[random]}${string1[random]}${string1[random]}${str3[ran2]}${str2[ran]}${str2[ran]}${str2[ran]}`)




let randomPass = "qwertyuiopoijhg"
let randomPass1 = "!@#$%^&*"
let pass1 = randomPass1[Math.round(Math.random()* randomPass1.length)]
let pass2 = randomPass.substr(Math.random()*randomPass.length-5,4)
let passNum = Math.round(Math.random()*999)
console.log(pass1 + pass2 + passNum)