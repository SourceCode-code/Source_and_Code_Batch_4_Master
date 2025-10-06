
// 1 String has a property called as length 

// Check if a string is empty using .length.
// let str1 = " "
// console.log(str1.length)//1

// Count the total number of characters in " Hello World " (including space).
// let str2 = " Hello World "
// console.log(str2.length)//13

//--------------------------------------------------------------------------------------------//

//2  Characters in string are stored by indexes in strings
// Print the first and last character of "JavaScript".
// let str3 = "JavaScript"
// console.log(str3[0] + str3[9]) //Jt

// Given "hello", print the middle character.
// let str4 = "hello"
// console.log(str4[3])l

// Reverse a string using indexing.
// let str5 = "rushi"
// console.log(str5[4] + str5[3] + str5[2] + str5[1] + str5[0])

// Extract the last 3 characters of "Programming".
// let str6 = "Programming"
// console.log(str6.length)//10
// console.log(str6[8] + str6[9] + str6[10])// ing

//--------------------------------------------------------------------------------------------//

//3 String concatenation:
// string concatiation --> (+), ` ${}` 
//1 use + opertor 
//2 way use es6 string literal (template literal)

// Concatenate "Hello" and "World" with a space.
// let con1 = "Hello"
// let con2 = "World"
// console.log(con1 + " " + con2)// Hello World
// console.log(`${con1} ${con2}`)// Hello World

// Use template literals to print: "My name is John and I am 25 years old".
// let myName = "My name is John" 
// let name = "and"
// let last = "I am 25 years old"
// console.log(`${myName} ${name} ${last}`) // My name is John and I am 25 years old


// Join "I", "love", "JS" into "I love JS".
// let str = "I" + " " + "love" + " " + "JS";
// console.log(str)
// console.log(`${"I"} ${"love"} ${"JS"}`)

// Concatenate a string with a number: "Score:- " + 100.
//console.log(`${"Score"}${":-"} ${100}`)

// Concatenate "apple" 3 times using +.
//console.log("apple" + "apple" + "apple")


// Create a multiline message using template literals.
// let message = "Hello Welcome to JavaScript Have a great day"

// console.log(`${"Hello Welcome to"}
// ${"JavaScript Have"}
// ${"a great day"}`);

//--------------------------------------------------------------------------------------------//

// 4 Long literal string (\)
// Write a paragraph string across 3 lines using \.
// let str7 = "qwertyuiopasdfghjklzxcvbnmjhgtfrdsxzcvbnhjuytfrdcvbnjuhytgfcv bnjhygtfvbnjhgv \
// hgnbmjkhughvm,bknlhvhm \
// ajchvask,c \
// ythgasv"
// console.log(str7)

// Store "This is a test string" across multiple lines.
let str8 = "This is\
 a test\
  string" 
  console.log(str8)


//--------------------------------------------------------------------------------------------//

// 5 Escape Characters :
// escape character are the special characters used in strings starting with a backslash (\)
// 1) new line - (\n) this allows you to print your output in multiline in terminal 
//2 (\t) -- this indicates tab key (8 spaces )
//3) (\') -- adding single quotes in a string declared  by single quotes 
//3) (\") -- adding single quotes in a double declared  by double quotes 
// Print "Hello" and "World" on separate lines.

// Print "Name: John Age: 25" with a tab space.

// Print "It\'s a sunny day" correctly.

// Print "She said: \"Hello\"" correctly.

// Create a string with \n\t for indentation.

// Write a function multiLine(str1, str2) that prints 2 strings on separate lines.

// Format a table row using \t.

// Create a string with both single and double quotes using escapes.

// Print a JSON-like string: {"name": "John"} using escape sequences.

// Print a string where \n is inside quotes (like "\\n") so it prints literally.
//--------------------------------------------------------------------------------------------//

//6 .toUpperCase()
// nvert "javascript" into uppercase.
// let str60 = "javascript"
// console.log(str60.toUpperCase())

// Compare two strings case sensitively using .toUpperCase().
// let str62 = "Javascript"
// let str63 = "javascript"
// console.log(str62.toUpperCase())

// Convert the first letter of "hello" to uppercase ("H").
// let str64 = "hello" 
// console.log(str64[0].toUpperCase())

// Make "hello world" into "HELLO WORLD".
// let str65 = "hello world" 
// console.log(str65.toUpperCase())

//Convert a sentence into uppercase and count its length.
// let str65 = "Hello my name is rushi"
// console.log(str65.toUpperCase().length)

//--------------------------------------------------------------------------------------------//
//7 .toLowerCase()
// Convert "HELLO" to lowercase.
// let str71 = "HELLO"
// console.log(str71.toLowerCase())

// Normalize "MixEDCase" into lowercase.
// let str72 = "MixEDCase"
// console.log(str72.toUpperCase())

// Convert "Hello World" into "hello world".
// let str73 = "Hello World"
// console.log(str73.toLowerCase())

// Make sure email addresses are stored in lowercase.
// let str74 = "RUSHIJADHAV123@GMAIL.COM"
// console.log(str74.toLowerCase())

//--------------------------------------------------------------------------------------------//

//8 Substr(starting index,numbr of characters ) 
// From "JavaScript", extract "Java".
// let str81 = "JavaScript"
// console.log(str81.substr(0,4))

// From "Programming", extract "gram".
// let str82 = "Programming"
// console.log(str82.substr(3,4))

// Write getLastChars to return last n chars using .substr().
// let str83 = "getLastChars"
// console.log(str83.substr(7,5))

// Extract "World" from "Hello World".
// let str84 = "Hello World"
// console.log(str84.substr(6,5))

// Extract "cript" from "JavaScript".
// let str85 = "JavaScript"
// console.log(str85.substr(5,5))

// Get first 5 characters of "Elephant".
// let str86 =  "Elephant"
// console.log(str86.substr(0,5))// Eleph

// Extract "thon" from "Python".
// let str87 = "Python"
// console.log(str87.substr(2,4))

// Return substring starting at index 2 with length 4.
// let str88 = "JavaScript"
// console.log(str88.substr(2,4))// vaSc

//--------------------------------------------------------------------------------------------//
//9 substring (starting index,ending index(but rnd index not include))
// Extract "Java" from "JavaScript"
// let str91 = "JavaScript"
// console.log(str91.substring(0,4))

// Extract "Script" from "JavaScript"
// let str92 = "JavaScript"
// console.log(str92.substring(4,10))

// Write a function that extracts middle 3 characters.
// let str92 = "JavaScript"
// console.log(str92.substring(0,3))

// Return first half of a string.
// let str93 = "string"
// console.log(str93.substring(0,3))//str

// Extract "World" from "Hello World".
// let str94 =  "Hello World"
// console.log(str94.substring(6,11))

// Extract characters from index 2 to 6.
// let str95 =  "Hello World"
// console.log(str95.substring(2.6))//llo World

// Trim first character using .substring().
// let str96 =  "  Hello World  "
// console.log(str96.substring(2,16))//Hello World  

// Extract everything except last 2 characters.
// let str97 =  "  Hello World"
// console.log(str97.substring(11,13))//ld

//--------------------------------------------------------------------------------------------//
//10 split() 
// Convert "apple,banana,grape" into an array.

// Split "Hello World" into words.
// let str10 = "Hello World" 
// console.log(str10.split(" "))

// Split "a-b-c-d" into letters.
// let str10 =  "a-b-c-d"
// console.log(str10.split(""))

// Split "OpenAI" into characters.
// let str10 = "OpenAI"
// console.log(str10.split(""))// [ 'O', 'p', 'e', 'n', 'A', 'I' ]

// Convert CSV "red,green,blue" into an array.
// let str10 = "red,green,blue"
// console.log(str10.split(" "))// [ 'red,green,blue' ]


// Convert "1 2 3 4 5" into array of numbers.
// let str10 = "12345"
// console.log(str10.split(" "))

// Split "test,test,test" into array of 3 values.
// let str10 = "test,test,test"
// console.log(str10.split(" "))

// Split a sentence by spaces and print each word.
// let str10 = "Hello My Name Is Rushi"
// console.log(str10.split(" "))//[ 'Hello', 'My', 'Name', 'Is', 'Rushi' ]

//--------------------------------------------------------------------------------------------//
//11 trim()  [trimStart(),trimEnd()]
// Remove spaces from " hello ".
// let str11 = " hello "
// console.log(str11.trim())

// Check if " " becomes empty after trim.
// let str11 = " "
// console.log(str11.trim())// output is blank in terminal


// Remove leading spaces only from " code".
// let str11 = "  code"
// console.log(str11.trimStart())

// Remove trailing spaces only from "world ".
// let str11 = "world  "
// console.log(str11.trimStart())


// Count characters before and after trimming.
// let str11 = "  code"
// console.log(str11.length)//6
// let new1 = str11.trimStart()
// console.log(new1.length)//4

//--------------------------------------------------------------------------------------------//
//12 includes()
// Check if "Hello world" contains "world". 
// let str12 = "Hello world"
// console.log(str12.includes('world'))

// Return true if "JavaScript" contains "Script"
// let str12 = "JavaScript"
//  console.log(str12.includes('Script'))


// Check if "banana" includes "na"
// let str12 = "banana"
// console.log(str12.includes('na'))

// Validate if email contains "@"
// let str12 = "rushikesh123@gmail.com"
// console.log(str12.includes('@'))

// Case-sensitive check: does "HELLO" include "hello"?
// let str12 = "HELLO"
// console.log(str12.includes('hello'))

// Check if "12345" includes "34".
// let str12 = "12345"
// console.log(str12.includes('34'))

//--------------------------------------------------------------------------------------------//
//13 replace 
// Replace "dog" with "cat" in "I love my dog"
// let str13 = "I love my dog"
// console.log(str13.replace('dog', 'cat'))

// Replace first "is" with "was" in "This is a test. This is fun".
// let str13 = "This is fun"
// console.log(str13.replace('is', 'was'))

// Replace "2024" with "2025" in a date string.
// let str13 = "2024"
//  console.log(str13.replace('2024', '2025'))


// Replace first "a" with "A" in "banana".
// let str13 = "banana"
// console.log(str13.replace('a', 'A'))


// Replace "Hello" with "Hi" in "Hello world".
// let str13 = "Hello world"
// console.log(str13.replace('hello', 'Hi'))

//--------------------------------------------------------------------------------------------//
//15 indexOf()
// Find first "a" in "banana".
// let str15 = "banana"
// console.log(str15.indexOf('a')) //1

// Find index of "world" in "Hello world"
// let str15 = "Hello world"
// console.log(str15.indexOf('world')) 


// Find index of first " " (space).
//  let str15 = "Hello world "
// console.log(str15.indexOf(' '))


// Find position of comma in "apple,banana".
// let str15 = "apple,banana"
//  console.log(str15.indexOf(','))
//--------------------------------------------------------------------------------------------//
//16 lastIndexOf()
// Find last "a" in "banana"
// let str15 = "banana"
// console.log(str15.lastIndexOf('a'))

// Find last space in "Hello world today".
// let str16 = "Hello world today"
//  console.log(str16.lastIndexOf(' '))

// Find last "is" in "This is a test. Is it working?".
// let str16 = "This is a test. Is it working?"
//  console.log(str16.lastIndexOf('is'))

//--------------------------------------------------------------------------------------------//
//17 concat()
// Concatenate "my" and "name" 
// let str1 = "my"
// let str2 = " name"
// console.log(str1.concat(str2))

// Join 3 strings into 1.
// let str1 = "my"
// let str2 = " name"
// let str3 = " rushi"
// console.log(str1.concat(str2 , str3))

//--------------------------------------------------------------------------------------------//
//18 StartsWith() , 19 endsWith()
// Check if "JavaScript" starts with "Java".
// let str18 =  "JavaScript"
// console.log(str18.startsWith('Java'))
// console.log(str18.endsWith('ipt'))

//-------------------------------------------------//
//20 Repeat()
// Print "ha" 3 times.
// let str20 = " ha "
// console.log(str20.repeat(3))
// console.log(str20.repeat(10))

// Repeat "*" 10 times.
// let str21 = " * "
// console.log(str21.repeat(10))

// Make a line separator using "-".repeat(20).

// let str21 = " - "
//  console.log(str21.repeat(10))

//--------------------------------------------------------------------------------------------//
//21 match()
// Find all "is" in "This is it".

// let str21 = "This is it"
// console.log(str21.match('is'))

// Extract all numbers from "abc123xyz".
// let str21 = "abc123xyz"
//  console.log(str21.match('123'))


// 1 . how to concat 3 or more variabale in single line   