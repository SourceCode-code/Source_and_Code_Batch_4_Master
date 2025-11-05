// 31/10
// upper half 
//   *    //3  //1
//  ***   //2  //3
// ****** //0  //6

let line = 3
//upper half
for(let i =1 ;i<=line;i++){
let spaces = " ".repeat(line-i)   
let star= "*".repeat(2*i-1)     //  
console.log(spaces+star)  
}

//lower half
for(let i =line-1 ;i>=1;i--){
let spaces = " ".repeat(line-i)
let star= "*".repeat(2*i-1)
console.log(spaces+star)
}

// palindrome
let str = "Source" //e,c,r,u,o,s  
let strrev = ""
for(let i=str.length-1;i>=0;i--){
    strrev = strrev + str[i]

}
console.log(strrev);
if(str === strrev){
    console.log(`${str} is palindrome string`);
    
}
else{console.log(`${str} is not a palindrome string`);}


console.log("Ashutosh" + "More");

let str1 = "abba"
let str2 = "madam"
let str3 = "level"



/**
 * sneha
 * swapnil
 * akash
 * ankita
 * rushi
 */