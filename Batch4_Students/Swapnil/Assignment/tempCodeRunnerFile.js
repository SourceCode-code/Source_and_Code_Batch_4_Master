let minNumber = 15;
let maxNumber = 150;
let randomOddNumber = Math.floor(Math.random() * ((maxNumber - minNumber) / 2 + 1)) * 2 + minNumber;
console.log(randomOddNumber);