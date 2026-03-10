console.log(Math.random());

/*PosibleOutPut should be 0 to 0.99 ,,It will NEVER return 1.
between 0---0.99

*/
//genrate random nemnber between 0 to 100

let randomNumber = Math.random() * 100;
console.log(randomNumber);
/*.
0 <= number < 100
⚠ Important: It is decimal.
*/
//Converting to Integer
//🔹 Using Math.floor()
Math.floor(Math.random() * 100)


/*Range becomes:

0 → 99


✔ Inclusive 0
✔ Exclusive 100*/

/*Proper Formula (VERY IMPORTANT)
🔥 Generic Formula
✅ Inclusive Min & Inclusive Max
Math.floor(Math.random() * (max - min + 1)) + min


This is the GOLD FORMULA.

Example: Generate number 10–20
*/

Math.floor(Math.random() * (20 - 10 + 1)) + 10

/*
✔ Min = 10
✔ Max = 20
*/

//Dice Roll (1–6)
let dieRoll = Math.floor(Math.random() * 6) + 1;
console.log(dieRoll);


/*Explanation:

Math.random()*6 → 0 to 5.999
Math.floor() → 0 to 5
+1 → 1 to 6
*/


let s=Math.floor(Math.random()*(9999999999-1000000000+1))+1000000000
console.log(s)