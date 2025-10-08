// find out length of given string 
let str1 = "repo batch source_and_Code_Batch_4_Master> git pull origin main"
console.log(str1.length)
let str2 = "These questions range from basic to advanced levels, helping you build a strong foundation and tackle complex problems involving\
 strings. Let me know if you'd like solutions or further explanations for any of these! "
 console.log(str2.length)

let str3 = "1234!@#$%"
console.log(str3.length)
let str4 = "rupsssssssss"
console.log(str4.length)
let str5 = "qwertyuiopasdfghjklzxcvbnm"
console.log(str5.length)

//find out the index of given string
let str6 = "repo batch source_and_Code_Batch_4_Master> git pull origin main"
console.log(str6.indexOf("r"))
console.log(str6.lastIndexOf("r"))
//for last index
console.log(str6[str6.length-1])

let str7 = "These questions range from basic to advanced levels, helping you build a strong foundation and tackle complex problems involving\
 strings. Let me know if you'd like solutions or further explanations for any of these! "
 console.log(str7.indexOf("a"))
 console.log(str7.lastIndexOf("a"))
 console.log(str7[str7.length-1])

let str8 = "1234!@#$%"
console.log(str8.length) 
console.log(str8.indexOf("!"))
console.log(str8.lastIndexOf("%"))
console.log(str8[str8.length-1])

let str9 = "rupsssssssss"
console.log(str4.length)

console.log(str9.indexOf("s"))
console.log(str9.lastIndexOf("s"))
console.log(str9[str9.length-1])

let str10 = "qwertyuiopasdfghjklzxcvbnm"
console.log(str10.length)
console.log(str10.indexOf("u"))
console.log(str10.lastIndexOf("a"))
console.log(str10[str10.length-1])

//five examples of String concatenation:
//using + operator and es6 string literal/literal template
let str11 = "akash"
let str12 = "amol"
let str13 = "swapnil"
console.log(str11 + " " + str12 + " " + str13)
console.log(`${str11} ${str12} ${str13}`)

let str14 = "uddhav"
let str15 = "rushi"
let str16 = "yogya"
console.log(str14 + " " + str15 + " " + str16)
console.log(`${str14} ${str15} ${str16}`)

let str17 = "12345"
let str18 = "!@#$"
let str19 = "sdfg"
console.log(str17 + " " + str18 + " " + str19)
console.log(`${str17} ${str18} ${str19}`)

let str20 = "gaurav kuldharan lhaapshi paav lover"
let str21 = "guligat dhoka"
let str22 = "amit shah chhachu"
console.log(str20 + " " + str21 + " " + str22)
console.log(`${str20} ${str21} ${str22}`)

let str23 = "++++++++++++++"
let str24 = "____________"
let str25 = "***************"
console.log(str23 + " " + str24 + " " + str25)
console.log(`${str23} ${str24} ${str25}`)

//Long literal string (\)
let str26 = " This process involves using domain-specific knowledge of the\
 insurance industry, from policy admini\
 stration and claims manag\
 ement to regulatory requirements, to design and execute\
  test cases that check for correct functionality and data integrity within a complex"
  console.log(str26)

let str27 = "qwertyuiopokjhgfdsxcvbnjk\
guhjjgxcgvxtyugifyuxtuyfuio\sdfyuio!@#$%^&*(\
1234567890"
console.log(str27)

let str28 = "Prevent Flooding: To manage stormwater and \
prevent water from accumulating and overflowing on roadways or railways.\
"
console.log(str28)

let str29 = "Types: Common shapes include round (pipe culverts),\
 box-shaped (box culverts), and arch-shaped.\
 "
 console.log(str29)

let str30 = "Materials: Durable materials are chosen based on factors\
 like cost, strength, and hydraulic efficiency, including:\
" 
//Escape Characters :

//1) new line - (\n) -- 
// this allows you to print your output in multiline in terminal 
let str31 = "Concrete: Often preferred for its strength,\n durability, and resistance to corrosion."
console.log(str31)

let str32 = "Steel: Used for its strength,\n particularly in certain\n types of culverts. "
console.log(str32)

let str33 = "High-Density Polyethylene (HDPE):\n A flexible plastic\
 known for its\n strength and durability, \nsuitable for pipe\
 culverts."
 console.log(str33)

let str34 = "Hydraulic Loads:\n The culvert must be designed\
 to handle the water flow\n rate and the associated hydraulic loads. "
 console.log(str34)

let str35 = "Roadway Height:\n The height of the road\n or railway above the culver\
t influences its design.\
\nErosion and Scour: Protecting the culvert and surrounding \
earth from erosion \nis crucial for its long-term service life. "
console.log(str35) 

//2 (\t) -- this indicates tab key (8 spaces )
let str36 = "Yogesh\tpawar"
console.log(str36)

let str37 = "swapnil \t gaikwad"
console.log(str37)

let str38 = "11133qwer\t12334hhh"
console.log(str38)

let str39 = "1234\t456"
console.log(str39)
let str40 = "1234 \t 456"
console.log(str39)

// (\') -- adding single quotes in a string declared  by single quotes
// (\") -- adding single quotes in a double declared  by double quotes
//"The manager said, "Please mark the task as 'completed' before the end of the day"
let str41 = "The manager said, \"Please mark the task as \'completed\' before the end of the day\""
console.log(str41)

//She whispered, "I think the file named 'report_final' has the latest data."
let str42 = "She whispered, \"I think the file named \'report_final\' has the latest data.\""
console.log(str42)

//He asked, "Did you really mean 'urgent' when you sent that message?"
let str43 = "He asked, \"Did you really mean \'urgent\' when you sent that message?\""
console.log(str43)

//The teacher reminded, "Don't forget to read the chapter titled 'The Solar System'."
let str44 = "The teacher reminded, \"Don\'t forget to read the chapter titled \'The Solar System\'.\""
console.log(str44)

//My friend said, "The movie 'Inception' always blows my mind."
let str45 = "My friend said, \"The movie \'Inception\' always blows my mind.\""
console.log(str45)

//.toUpperCase() & ,toLowerCase()
let str46 = "THE TEAM COMPLETED THE AUTOMATION TESTING BEFORE THE SPRINT ENDED."
console.log(str46.toLowerCase())
console.log(str46.toLowerCase().toUpperCase())
console.log(str46.toLowerCase().toUpperCase().length)

let str47 = "THE CLIENT REQUESTED A DEMO OF THE NEW INSURANCE PORTAL TODAY."
console.log(str47.toLowerCase())
console.log(str47.toLowerCase().toUpperCase())
console.log(str47.toLowerCase().toUpperCase().length)

let str48 = "THE DEVELOPER FIXED ALL THE BUGS REPORTED DURING REGRESSION TESTING."
console.log(str48.toLowerCase())
console.log(str48.toLowerCase().toUpperCase())
console.log(str48.toLowerCase().toUpperCase().length)

let str49 = "THE TEST CASES WERE AUTOMATED USING CYPRESS AND JAVASCRIPT."
console.log(str49.toLowerCase())
console.log(str49.toLowerCase().toUpperCase())
console.log(str49.toLowerCase().toUpperCase().length)

let str50 = "THE PRODUCT OWNER APPROVED THE FEATURE FOR THE NEXT RELEASE."
console.log(str50.toLowerCase())
console.log(str50.toLowerCase().toUpperCase())
console.log(str50.toLowerCase().toUpperCase().length)

// Substr()    -->Substr is method which get a part of string (starting index,numbr of characters )
// substring   -->subString is method which get a part of string 
// (starting index,ending index) (it will not include the 
// ending index)

let str51 = "Swapnil bansi gaikwad"
console.log(str51.substr(0,7))
console.log(str51.substring(0,7))

let str52 = "Yogesh Haribhau Pawar"
console.log("ans of 52",str52.substr(7,6))
console.log(str52.substring(7,15))

let str53 = "Akash Manik Jadhav"
console.log("ans of 53",str53.substr(12,6))
console.log(str53.substring(12,18))

let str54 = "Amol Kantilal Jadhav"
console.log(str54.substr(0,13))
console.log(str54.substring(13,20))

let str55 = "neel jayram more"
console.log(str55.substr(0,16))
console.log(str54.substring(13,20))

//.length & trim()  [trimStart(),trimEnd()]--> this method is used to remove the extra spaces form the string 
let str56 = "                       akash jadhav              "
console.log(str56.trim())
console.log(str56.trimStart())
console.log(str56.trimEnd())
console.log(str56.trim().length)

let str57 = "                     akash jadhav  "
console.log(str57.trim())
console.log(str57.trimStart())
console.log(str57.trimEnd())
console.log(str57.trim().length)

let str58 = "            555         akash    6778     "
console.log(str58.trim())
console.log(str58.trimStart())
console.log(str58.trimEnd())
console.log(str58.trim().length)

let str59 = "  !!!!!!!!!!!!!!!!#qwe  1223e3 $%^&       "
console.log(str59.trim())
console.log(str59.trimStart())
console.log(str59.trimEnd())
console.log(str59.trim().length)

let str60 = "      123456     67890   "
console.log(str60.trim())
console.log(str60.trimStart())
console.log(str60.trimEnd())
console.log(str60.trim().length)

// split() --> this method is used to convert one string into many  new string --> this return an array
let str61 = "                        aaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbb"
console.log(str61.split(" "))
console.log(str61.split("a"))
console.log(str61.split("b"))

let str62 = "akash manik jadhav"
console.log(str62.split(" "))
console.log(str62.split("akash"))

let str63 = "THE BUILD FAILED BECAUSE OF A MISSING CONFIGURATION FILE."
console.log(str63.split("A"))
console.log(str63.split(" "))
console.log(str63.split("BECAUSE"))

let str64 = "split me"
console.log(str64.split(" "))
console.log(str64.split(""))

let str65 = "                        "
console.log(str65.split(""))
console.log(str65.split(" "))


// includes()--> this method is used to check whether a string contains a particular substring or not 
let str66 = " this method is used to check whether a string contains a particular substring or not "
console.log (str66.includes("method"))

let str67 = "THE QA TEAM EXECUTED ALL TEST SCRIPTS IN THE CI/CD PIPELINE."
console.log(str67.includes("QA"))
console.log(str67.includes("QC"))

let str68 = "THE APPLICATION PASSED ALL PERFORMANCE AND SECURITY TESTS."
console.log(str68.includes("APPLICATION"))
console.log(str68.includes("SOFTWARE"))

let str69 = "THE MANAGER ORGANIZED A MEETING TO DISCUSS PROJECT UPDATES."
console.log(str69.includes("MANAGER"))
console.log(str69.includes("TO"))

let str70 = "THE USERS REPORTED THAT THE LOGIN MODULE IS WORKING PERFECTLY."
console.log(str70.includes("USER"))

// replace(word to replace , word to replace with)--> this method is used to replace only first occurance 
// particular character or word in string  with another

// replaceAll()-->(word to replace , word to replace with)--> 
// this method is used to replace all occurance particular character or word in string  with another

let str71 = "The old clock struck midnight, echoing through the empty hall."
console.log(str71.replace("empty", "full"))
console.log(str71.replaceAll("empty", "full"))
let str72 = "She laughed as the first snowflake melted on her hand."
console.log(str72.replace("her", "him"))
console.log(str72.replaceAll("her", "him"))
let str73 = "The train vanished into the fog, leaving only a faint whistle behind."
console.log(str73.replace("train", "plain"))
console.log(str73.replaceAll("train", "plain"))
let str74 = "He found a mysterious key lying under the dusty bookshelf."
console.log(str74.replace("under", "below"))
console.log(str74.replaceAll("under", "below"))
let str75 = "The coffee shop buzzed with chatter and the aroma of roasted beans."
console.log(str75.replace("beans", "almonds"))
console.log(str75.replaceAll("beans", "almonds"))

// indexOf()--> this method is used to find the index of particular character  (first occurance)
// lastIndexOf()-->this method is used to find the index of particular character  (last occurance)

let str76 = "The old clock struck midnight, echoing through the empty hall."
console.log(str76.indexOf("l"))
console.log(str76.lastIndexOf("l"))
console.log(str76[5])
console.log(str76[60])
let str77 = "She laughed as the first snowflake melted on her hand."
console.log(str77.indexOf("s"))
console.log(str77.lastIndexOf("s"))
console.log(str77[13])
console.log(str77[25])
let str78 = "The train vanished into the fog, leaving only a faint whistle behind."
console.log(str78.indexOf("t"))
console.log(str78.lastIndexOf("t"))
console.log(str78[4])
console.log(str78[58])
let str79 = "He found a mysterious key lying under the dusty bookshelf."
console.log(str79.indexOf("d"))
console.log(str79.lastIndexOf("d"))
console.log(str79[7])
console.log(str79[42])
let str80 = "The coffee shop buzzed with chatter and the aroma of roasted beans."
console.log(str80.indexOf("r"))
console.log(str80.lastIndexOf("r"))
console.log(str80[34])
console.log(str80[53])


// concat()--> this method is used to join two or more strings

let str81 = "The old clock struck midnight, echoing through the empty hall."

let str82 = "She laughed as the first snowflake melted on her hand."

let str83 = "The train vanished into the fog, leaving only a faint whistle behind."

let str84 = "He found a mysterious key lying under the dusty bookshelf."

let str85 = "The coffee shop buzzed with chatter and the aroma of roasted beans."

console.log(str81.concat(str82,str83))
console.log(str82.concat(str83,str81))
console.log(str83.concat(str81,str82))
console.log(str81.concat(str82,str83,str84,str85))
console.log(str81.concat(str85,str84))


// StartsWith()--> this method is used to check whether a string starts with a particular substring or string
let str86 = "The old clock struck midnight, echoing through the empty hall."

let str87 = "She laughed as the first snowflake melted on her hand."

let str88 = "The train vanished into the fog, leaving only a faint whistle behind."

let str89 = "He found a mysterious key lying under the dusty bookshelf."

let str90 = "The coffee shop buzzed with chatter and the aroma of roasted beans."
console.log(str86.startsWith("The"))
console.log(str86.endsWith("The"))

console.log(str87.startsWith("She"))
console.log(str87.endsWith("hand"))

console.log(str88.startsWith("The"))
console.log(str88.endsWith("Whistle"))

console.log(str89.startsWith("The"))
console.log(str89.endsWith("bookshelf"))

console.log(str90.startsWith("The"))
console.log(str90.endsWith("The"))

// Repeat()--> this mehod is used to reapeat a string mutliple time

let str91 = "Lightning flashed, revealing the outline of the distant mountains."

let str92 = "The puppy chased its own tail until it fell over in exhaustion."

let str93 = "A paper airplane drifted lazily across the classroom."

let str94 = "The ocean waves whispered secrets only the wind could understand."

let str95 = "A gentle breeze carried the scent of rain through the open window."

console.log(str91.repeat(2))
console.log(str92.repeat(3))
console.log(str93.repeat(4))
console.log(str94.repeat(5))
console.log(str95.repeat(6))


//match()--> this method is used to match a string against a regular expression and return a array
let str96 = "Lightning flashed, revealing the outline of the distant mountains."
let result = str96.match("Lighting")
console.log(result)

let str97 = "The puppy chased its own tail until it fell over in exhaustion."
let result1 = str97.match("puppy")
console.log(result1)

let str98 = "A paper airplane drifted lazily across the classroom."
let result2 = str98.match("airplane")
console.log(result2)

let str99 = "The ocean waves whispered secrets only the wind could understand."
let result3 = str99.match("secrets")
console.log(result3)

let str100 = "A gentle breeze carried the scent of rain through the open window."
let result4 = str100.match("breeze")
console.log(result4)