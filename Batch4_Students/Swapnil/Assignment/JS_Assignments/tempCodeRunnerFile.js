let strTen = '10';
let numTen = 10;
console.log(typeof strTen === typeof numTen); // false
let num10 = parseInt(strTen)
console.log("Question 1 Answer is:",typeof num10 === typeof numTen);

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let num9_8 = parseFloat('9.8');
console.log(num9_8 === 10);
let roundNum = Math.round(num9_8);
console.log("Question 2 Answer is :",roundNum === 10);

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let wor1 = 'jargon';
console.log(word1.includes('on') , wor1.includes('on'));



// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log("Question 4 Answer is :",sentence.includes("jargon"));