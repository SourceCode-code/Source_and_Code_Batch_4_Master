//29/10
// 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumeven = 0
let sumodd = 0
for(let i=0;i<=100;i++){
    if(i%2 ==0){
       sumeven = sumeven+i
        
    }
    else{sumodd = sumodd + i}
    
}
console.log("Sum of even number = ", sumeven);
console.log("Sum of odd number  = ", sumodd);


// 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

let str = '#'
let n = 10
for(let i=0;i<=n;i++){
    console.log(str.repeat(i));
    
}

let str1 = "SourceAndCode" ///"erom"
let str1rev = ""
for(let i=0;i<str1.length;i++){
    str1rev = str1[i]+str1rev
}
console.log(str1rev);


// check that given string is palindrome or not
let str2 = ""

// Exaple --abba"

/* attendance  
swapnil
sneha
akash
ankita
ganshyam
*/