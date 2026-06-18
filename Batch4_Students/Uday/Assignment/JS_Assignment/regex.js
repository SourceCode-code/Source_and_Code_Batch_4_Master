// // Regular Expressions in JavaScript
// // A regular expression is a sequence of characters that forms a search pattern. It can be used for searching, replacing, and validating strings.
// // Example 1: test() method
// const regex = /hello/i;

// console.log(regex.test("Hello World"));// Output: true

// // Example 2: match() method

// const text = "I have 2 apples and 5 bananas";

// console.log(text.match(/\d+/g)); // Output: ["2", "5"]

// // Example 3: replace() method

// const text2 = "Hello Java";

// console.log(text2.replace(/Java/, "JavaScript")); // Output: "Hello JavaScript"

// // Example 4: search() method

// const text3 = "I love JS";

// console.log(text3.search(/JS/)); // Output: 7

// // Assignment 20 REGEX
// // Exercises: Level 1

// // 1 Calculate the total annual income of the person from the following text.
// //  ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// console.log("================REG Ex Assignment======================================");
// console.log("1 Calculate the total annual income of the person from the following text");
// let text1 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

// let income = /\d+/g;

// let totalAnualIncome = 0
// let totalIncome = text1.match(income);

// for(let i=0;i<totalIncome.length;i++){
// totalAnualIncome = totalAnualIncome+ parseInt(totalIncome[i]);
// }
// console.log(totalAnualIncome);

// console.log("================================================================");
// // The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the 
// // positive direction. Extract these numbers and find the distance between the two furthest particles.
// // points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// // sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// // distance = 12

// // Nee solution

// // 2 Write a pattern which identify if a string is a valid JavaScript variable
//  console.log("2 Write a pattern which identify if a string is a valid JavaScript variable");
// // is_valid_variable('first_name') # True
// // is_valid_variable('first-name') # False
// // is_valid_variable('1first_name') # False
// // is_valid_variable('firstname') # True

//  let variableName1 = "1first_name";
//  let variableName2 = "$first_name";
//     let validVariable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
//     console.log(validVariable.test(variableName1)); // Output: false
//     console.log(validVariable.test(variableName2)); // Output: true

//    // Explaination of logic
//    // ^ - start of the string
//    // [a-zA-Z_$] - the first character must be a letter (uppercase or lowercase), an underscore, or a dollar sign
//    // [a-zA-Z0-9_$]* - the subsequent characters can be letters, digits, underscores, or dollar signs (zero or more times)
//    // $ - end of the string
//     console.log("=================================================================");

// // Exercises: Level 2

// // 1 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// //     paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// //     console.log(tenMostFrequentWords(paragraph))
// //     [
// //     {word:'love', count:6},
// //     {word:'you', count:5},
// //     {word:'can', count:3},
// //     {word:'what', count:2},
// //     {word:'teaching', count:2},
// //     {word:'not', count:2},
// //     {word:'else', count:2},
// //     {word:'do', count:2},
// //     {word:'I', count:2},
// //     {word:'which', count:1},
// //     {word:'to', count:1},
// //     {word:'the', count:1},
// //     {word:'something', count:1},
// //     {word:'if', count:1},
// //     {word:'give', count:1},
// //     {word:'develop',count:1},
// //     {word:'capabilities',count:1},
// //     {word:'application', count:1},
// //     {word:'an',count:1},
// //     {word:'all',count:1},
// //     {word:'Python',count:1},
// //     {word:'If',count:1}]
// // console.log(tenMostFrequentWords(paragraph, 10))
// // [{word:'love', count:6},
// // {word:'you', count:5},
// // {word:'can', count:3},
// // {word:'what', count:2},
// // {word:'teaching', count:2},
// // {word:'not', count:2},
// // {word:'else', count:2},
// // {word:'do', count:2},
// // {word:'I', count:2},
// // {word:'which', count:1}
// // ]

// // function tenMostFrequentWords(paragraph, limit) {

// //     // Extract words using regex
// //     let words = paragraph.match(/\b\w+\b/g);

// //     // Empty object to store counts
// //     let wordCount = {};

// //     // Count frequency
// //     for (let word of words) {

// //         // Convert to lowercase for proper counting
// //         let lowerWord = word.toLowerCase();

// //         if (wordCount[lowerWord]) {
// //             wordCount[lowerWord]++;
// //         } else {
// //             wordCount[lowerWord] = 1;
// //         }
// //     }

// //     // Convert object into required format
// //     let result = [];

// //     for (let word in wordCount) {
// //         result.push({
// //             word: word,
// //             count: wordCount[word]
// //         });
// //     }

// //     // Sort descending based on count
// //     result.sort((a, b) => b.count - a.count);

// //     // If limit provided return limited results
// //     if (limit) {
// //         return result.slice(0, limit);
// //     }

// //     return result;
// // }


// // // Paragraph
// // let paragraph = `I love teaching. If you do not love teaching what else can you love.
// // I love Python if you do not love something which can give you all the capabilities
// // to develop an application what else can you love.`;


// // // All frequent words
// // console.log(tenMostFrequentWords(paragraph));


// // // Top 10 frequent words
// // console.log(tenMostFrequentWords(paragraph, 10));




// // Exercises: Level 3

// // 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// //   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// //   console.log(cleanText(sentence))
// //  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
// //  ```
// // 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// // ```js
// //  console.log(mostFrequentWords(cleanedText))
// //  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

// function GET_ELEMENT(array, neededvalue) {
//     let min = Math.min(...array)
//     let max = Math.max(...array)
//     if (neededvalue.toLowerCase() === "min") {
//         console.log(min)
//     } else if (neededvalue.toLowerCase() === "max") {
//         console.log(max)
//     }
//     else {
//         console.log("check the entered paramter")
//     }
// }

// GET_ELEMENT([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 2, 5, 8, 6, 1, 5, 6, 5, 555555], "min")
// GET_ELEMENT([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 2, 5, 8, 6, 1, 5, 6, 5, 555555], "max")
// GET_ELEMENT([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 2, 5, 8, 6, 1, 5, 6, 5, 555555], "")

// let a = [10, 20, 4, 45, 99, 99];
// a.sort((a, b) => b - a);

// let first = a[0];
// let res = null;

// for (let i = 1; i < a.length; i++) {
//     if (a[i] < first) {
//         res = a[i];
//         break;
//     }
// }
// console.log(res);

let array_a  = []
let array_b = [20,"hello",30,true,null,undefined,[]]
let c = ["Wwqrwe",25,"wadfsdf",true]

console.log(array_a)
console.log(array_b)
console.log(c)