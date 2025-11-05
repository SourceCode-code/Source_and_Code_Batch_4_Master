//String- It is a group of character  written inside quotes and string is immutable(cannot change directly and if changed it will create new string)

//Methods of string -
//Note- Every method has something called as output as return type
//Output- actual result , Return type- the data value of return value

//1> .toUpperCase- converts a string into capital letter
 let str1= 'Ankita'
 console.log(str1.toUpperCase())

//2> .toLowerCase- converts a string into small letter
let str2= `ANkiTa`
console.log(str2.toLowerCase())

let str3= "5412676354"
console.log(str3.toUpperCase()) //it give output as string

//3>string Concatenation- join to or more string together
 let str4 ='Ankita'
 let str5= `Hanumant`
 let str6= "Fartade"
 
 let newStr= `${str4} ${str5} ${str6}`
 console.log(newStr)

 let fullName= str4+ ' '+str5+ ' ' +str6
 console.log(fullName)

 //4> Method concatenation- join two or more string together

 let name1= "SiddhANT"
 let name2= "POOja"
 let name3= "IndRayani"
 let name4= "Vaibhav"
 let name5= "AMOL"
 let addstr= `${name1} ${name2} ${name3} ${name4} ${name5}`
 console.log(addstr.toLowerCase().toUpperCase().toLowerCase())

 //5> Substring -it will get some part of a string (starting index , ending index) it will not include the ending index

 let myName= "Ankita Hanumant Fartdae" 
 let newStr1= myName.substring(7,15)
 console.log(newStr1)
 let myFather= 'Hanumant'
let newName= myFather.substring(0,4)
console.log(newName)

//6> Substr- it will also give some part of a string (starting index, no of characters)

let str8= "Akash Hanumant Fartade"
let newSubstr= str8.substr(6,8)
console.log("Substr=", newSubstr)
let surName= str8.substr(15,7)
console.log("Surname=", surName)

//7> Split- This method is used to convert one string into many new string, this return an array

let text= 'Hello Ankita Fartade this side'
let newText= text.split("")
let newText1= text.split(" ")
let newText2= text.split("  ")
console.log(newText)
console.log(newText1)
console.log(newText2)
  
let str11= `Siddhant GADAKH`
let newStr11= str11.toLowerCase().toUpperCase().split(``)
console.log(newStr11)

//8> trim- It will remove extra spaces from string, not middle space, only remove starting and ending space

let intro= '    good evening everyone    '
let newIntro= intro.trim()
console.log(newIntro)