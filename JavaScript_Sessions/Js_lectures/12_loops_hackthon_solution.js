// slove the following problem using for loop 

// 1) of given string remove blank spaces 
let str = " hello my name is siddhant gadakh and my age is 26 "

//replace
//replaceAll()
console.log(str.replaceAll(" ", "")) // you need revision string method
//hellomynameissiddhantgadakhandmyageis26

// 2) slove  and print pattern 
// let str = "tomorrow"

// output should be 
// t#m##rr###w

//replaceAll("o",#)  //t#m#rr#w

//#  ##  ###

//repeat()
let str1 = "tomorrow"
let count = 0 // 1
let str2 = str1.split('') // [t ,o, r,r,o,w ]
console.log(str2)

for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "o") {
        count++  // 2
        str2[i] = "#".repeat(count)
    }
}
//t#m##rr###w
console.log(str2.join(''))



// 4) check if the given string is palindrome (string which is same even if its reversed)
let str5 = "madam"

let revstr = ""

for(let i=str5.length-1;i>=0;i--){
    revstr +=str5[i]
}

console.log(revstr)

if( str5 ===revstr){
    console.log(`${str5} string is palidrome string`)
}
else{
    console.log(`${str5} string is  not palidrome string`)
}







// 1) of given string remove blank spaces
//  let str = " he llo m y name is sidd hant gadak h and m y age is 2 6 "





