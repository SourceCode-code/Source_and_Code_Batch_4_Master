// Regular Expression:----

/** its small programing which is used to find patterns and slove the complex string problems  */

// how to delecare regular expression

// 1  you can use reugular expersion constructor
// 2 use 2 forward slashs following a flag

// Flag --> flags are optional parameter ,in regrex which determine the scope of searching

/**
 *
 * g : a gobal flag which means it will search in the whole string
 * i : this will make your search case insensitive  ( that this will search both captial and small)
 * m : multi line flag (allows searching in multi line )
 *
 */

// examples

// 1)
let pattern = "siddhant";
let regex = new RegExp(pattern);
console.log(regex); //     /siddhant/

//2)

let regex2 = /"siddhant"/gi;

console.log(regex2); ///"siddhant"/gi

// 1 test() : retruns true or false and  check wheater the string contains the word or not

let str = " i am Learning js and the topic in js is regex";

let result = /learning/gi;

let output = result.test(str);
console.log(output);

// methods that support regex -->

/**
 * match()
 * replace()
 */

// using match  method to seaerch a pattern

console.log(str.match(/js/gi).length);

//
let arrstr = str.split(" ");
let count = 0;

for (let i = 0; i < arrstr.length; i++) {
  // console.log(arrstr[i])
  if (arrstr[i].includes("js")) {
    count++;
  }
}
console.log(count);

// 2 replace -->

let str3 =
  " i am learning Javascript and i am also have hands on javaSCript \
 i would reccommend every one to learn JAVASCRIPT";

//without regrex
//  console.log(str3.replaceAll("Javascript","python"))

//With regrex
console.log(str3.replace(/Javascript/gi, "python"));

// i am learning python and i am also have hands on python  i would reccommend every one to learn python

/** 
 * what to use and how to use and when to use 

\ --> denotes escape characters 

\ --> multi line 
\n --> newline 
\t --> tab key 
\' --> single quotes
\" --> double quotes   
\d  --> get the numbers form the string (0-9)
\D --> this is used to confrim there is no number in string 
\b --> it matches the starting or ending or string (words)
\w+ --> matchtes the seqeunece of words  
 

. --> any character expect new line 
^ --> starts with
$ --> Ends with
* --> occurance 
+ --> one or more time ( character should be more than once )
? --> zero or one time 
{3}  --> it will only exactally 3 character 
{3,} --> it will atleast 3 character
 |    --> either or 
 {3,8} --> it will give character form 3 index to 8 index  --> substr

// [] --> a set character

//[a-c] --> any letter form a , b , c
//[a-z] --> any letter form a to z
//[A-Z] --> any letter form A to Z
//[0-9]--> any number form 0 -9
//[A-Za-z0-9]--> this will search all of the above in a single string 


 */

// verify if a pan number is vaild or not 

let vaild_pan = "SSSSP9922F"
let invaild_PAN = "SSSS1PPP5"

let test_pan = /[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/i.test(vaild_pan) // true 

console.log(test_pan) //false

// remove number form string 
let str4 = "this is regex session conducted on 8 of jan 2025 at 9:59 pm"

console.log(str4.match(/\d+/g))


// count vowels in a string 

let str5 = "hello my name is siddhant"


// using loop 
// let tvowel = 0


// for(let i =0;i<str.length;i++){
//   if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//     tvowel++
//   }
// }

// console.log(tvowel)
let vowelarr = str5.match(/[AEIOU]/gi)
console.log(str5.match(/[AEIOU]/gi))
console.log(vowelarr.length)

let str6= "h@*#el@#lo m*@#y n@#am@#e is sidd@#ha@#n@#t"

console.log(str6.replaceAll("@*#",""))

console.log(str6.replace(/[@*#]/g,""))