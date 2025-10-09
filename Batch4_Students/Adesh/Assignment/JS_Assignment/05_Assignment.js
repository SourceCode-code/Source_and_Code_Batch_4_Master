//Q1. Check the type of?
console.log(typeof "Hello"); // string
console.log(typeof 42);      // number

//Q2. Find the length of "JavaScript".
console.log("JavaScript".length);

//Q3. Add two numbers and store in a variable.
let a= 5
let b =8
let sum =( a+b)
console.log(sum)

//Q6. Get first and last character of "programming".
let char= "programming";
console.log(char[0]);             
console.log(char[char.length - 1]);   

//Q7 slice method use
let text = "Hello world";
console.log(text.slice(6)); 

//8. Round 5.678 to 2 decimal places.
let n = 5.8558;
console.log(n.toFixed(1));


//Q9. Generate a random integer between 50 and 100.
console.log(Math.floor(Math.random() * (100 - 50)+50));

// Q10 Generete a random number between 10 to 80.
console.log(Math.floor(Math.random()*(80-10)+10));

//Q11 rolling two dice.

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
console.log(`${die1}, ${die2}`);

//Q12 Random integer –50 to –30.
console.log(Math.floor(Math.random() * 30) - 50);

//13. Method chaining to uppercase → lowercase → length.

let hw = "hello world";
console.log(hw.toUpperCase().toLowerCase().length);

//14 Length, first & last character of "Adesh Vyankat Devkar".

let full = "Adesh Vyankat Devkar";
console.log(full.length);
console.log(full[0]);
console.log(full[full.length - 1]);

//Q15Math.floor, Math.ceil, Math.round.

console.log(Math.floor(10.99));  
console.log(Math.ceil(10.01));   
console.log(Math.round(10.05)); 
console.log(Math.round(10.99)); 

//Q16. Print full name using + and template literal.
let firstName = "Adesh";
let middleName = "Vyankat";
let lastName = "Devkar";
console.log(firstName + " " + middleName + " " + lastName);
console.log(`${firstName} ${middleName} ${lastName}`);

//Q17 
let adharnum= Math.floor(Math.random()*(999999999999)+10000);
console.log(adharnum);

//Q18 Create city1, _city, $city; show name vs Name.

let city1 = "Pune", _city = "solapur", $city = "satara";
console.log(city1, _city, $city);
 console.log(city1.toUpperCase());

 //Q19 camalcase for full name
 let acd = "Adesh Vyankat Devkar";
console.log(acd);

//Q18. Round any number to the nearest multiple of 5
let num= 28;
let near = Math.round(num / 5) * 5;
console.log(near)