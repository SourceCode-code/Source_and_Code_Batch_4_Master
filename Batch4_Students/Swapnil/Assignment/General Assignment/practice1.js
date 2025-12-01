1) of given string remove blank spaces 
 let str = " hello my name is siddhant gadakh and my age is 26 "
co


2) slove  and print pattern 
let str = "tomorrow"

output should be 
t#m##rr###w

3) slove  and print pattern 
let str = "tomorrow"

output should be 
t3m2rr1w

4) check if the given string is palindrome (string which is same even if its reversed) 
let str = madam 

let str = " he llo m y name is sidd hant gadak h and m y age is 2 6 "
console.log(str.replaceAll(' ',''))


let str = "tomorrow"
output should be 
t#m##rr###w

let hash = 0
let output = ""
for (let i = 0;i <str.length;i++){
if(str[i] == 'o'){
output += '#'.repeat(hash++)
}
console.log(output)


let str = "tomorrow";
let result = "";
let countO = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "o") {
        countO++; 
        result += "#".repeat(countO); // repeat according to count
    } else {
        result += str[i];
    }
}

console.log(result);






//   *
//  ***
// *****
//  ***
//   *

//upper half
// for(let i =1 ;i<=line;i++){
// let spaces = "".repeat(line-i)   
// let star= "*".repeat(2*i-1)     //  
// console.log(spaces+star)  
// }

    let line = 3;
    for (let i = 1; i <= line; i++) {
        let space = " ".repeat(line - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(space + stars)
    }


    // let line = 3
    for (let i = 3; i >= 1; i--) {
        let sapces = " ".repeat(line - i)
        let stars1 = "*".repeat(2 * i - 1)
        console.log(sapces + stars1)
    }

//   * 
//  ***
// *****
// *****
//  ***
//   *



//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *

let line = 4

for (let i = 1; i<=line;i++){
    let spaces = " ".repeat(line-i)+"*"
    let spaces2 = 
console.log(spaces)
}
