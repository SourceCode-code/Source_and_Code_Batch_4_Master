// //16/10/2025
// let date = new Date

// let day = date.getDate()
// date.setDate(day-10)
// console.log(day);
// console.log(date.getDate());

let date = new Date
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
console.log(day);
console.log(month+1);
console.log(year);

//Conditional statment
//  1 if() -- used on single condition 
//  * 2 if else() - used in either or  --> (ex ternary opertor)
//  * 3 else if () - used for multiple conditions (more than 2 )
//  * 4 switch case -- more latest( es6 updates) prefered
//  */

let num = 0
// check the given no is positive(single condition)
if(num >0){
    console.log(`${num} is a positive number`);
    
}
// check given no is positiove or negetive(2 condition)
if(num >0){
    console.log(`${num} is a positive number`);   
}
else{console.log(`${num} is a negetive number`);
}
// check given no is positiove or negetive or zero(3 condition)
if(num >0){
    console.log(`${num} is a positive number`);   
}
else if(num<0){console.log(`${num} is a negetive number`);
}
else{console.log(`${num} is a zero`)}

//Traders profit above 50000 then he is ‘supertrader’., 
// Profit is between 30k to 50k then he is ‘average trader’
// Profit is less than 30k or 0 then he is ‘below average trader’
// If their is no profit then he is loss making trader
// And if less than zero then print ‘need to learn trading more’
let profit = -1000
if(profit>50000){
    console.log('Trader is a super trader');
    
}
else if(profit<50000 && profit>30000){
    console.log('Trader is avg trader');
    
}
else if(profit<30000 && profit>0){
    console.log('Trader is below avg trader');
    
}
else if(profit == 0){
    console.log('Trader is loss making trader');
    
}
else if(profit<0){
    console.log('need to learn trading more');
    
}

// grnrrate the pass Ashu@111

//random char
let str = 'abcdefghijklmnopqrstuvwxyz'
let randomindex1 = Math.ceil(Math.random() * str.length)
let randomindex2 = Math.ceil(Math.random() * str.length)
let randomindex3 = Math.ceil(Math.random() * str.length)
let randomindex4 = Math.ceil(Math.random() * str.length) //--0--25.9999--1 to 26
let fourchar1 = str[randomindex1]
let fourchar2 = str[randomindex2]
let fourchar3 = str[randomindex3]
let fourchar4 = str[randomindex4]

console.log(fourchar1,fourchar2,fourchar3,fourchar4);
