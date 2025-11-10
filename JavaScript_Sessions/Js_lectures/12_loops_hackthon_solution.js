// // slove the following problem using for loop

// // 1) of given string remove blank spaces
let str = " hello my name is siddhant gadakh and my age is 26 ";

// //replace
// //replaceAll()
console.log(str.replaceAll(" ", "")); // you need revision string method
// output
// //hellomynameissiddhantgadakhandmyageis26

// //2)slove and print the following pattern
let str_2 = "tomorrow";
//output to be -->t#m##rr###w

//approach number 1  -- using split

let count = 0; // 1
let str3 = str_2.split(""); // [t ,o, r,r,o,w ]
console.log(str3);

for (let i = 0; i < str3.length; i++) {
  if (str3[i] === "o") {
    count++; // 2
    str3[i] = "#".repeat(count);
  }
}
//t#m##rr###w
console.log(str3.join(""));

//apporach 2 without using spilt -->

// let str_2 = "tomorrow"
console.log("approach 2");
let final_str = "";
let hcount = 0;

for (let i = 0; i < str_2.length; i++) {
  if (str_2[i] === "o") {
    hcount++;
    final_str += "#".repeat(hcount);
  } else {
    final_str += str_2[i];
  }
}
console.log(final_str);

// 3️ Print pattern with numbers
// Input: "tomorrow"
// Output: t3m2rr1w

// let str_2 = "tomorrow"
let ncount = 0;
let finalnumstr = "";
//first loop to get total count of o in string
for (let i = 0; i < str_2.length; i++) {
  if (str_2[i] === "o") {
    ncount++;
  }
}
console.log(ncount);

//second loop to replace

for (let i = 0; i < str_2.length; i++) {
  if (str_2[i] === "o") {
    finalnumstr += ncount;
    ncount--;
  } else {
    finalnumstr += str_2[i];
  }
}

console.log(finalnumstr);

// 4) check if the given string is palindrome (string which is same even if its reversed)
let str5 = "madam";

let revstr = "";

for (let i = str5.length - 1; i >= 0; i--) {
  revstr += str5[i];
}

console.log(revstr);

if (str5 === revstr) {
  console.log(`${str5} string is palidrome string`);
} else {
  console.log(`${str5} string is  not palidrome string`);
}
