//   Assignment_06 3-3 Questions on each method 

// string declaration and typeof
//1
let mostBeautifulCity = "Sangamner"
console.log(mostBeautifulCity)
console.log(typeof mostBeautifulCity)

//2
let cityArea = "117.55 sqkm"
console.log(cityArea)
console.log(typeof cityArea) 

//3 
let cityPopulation = "1367566"
console.log(cityPopulation)
console.log(typeof cityPopulation)

// length method
//1
let Sangamner = "Sangamner is one of the most developed and largest cities in the nearby area and is famous for its markets."
console.log(Sangamner.length)
//2
let SangamnerArea = "Sangamner has a total area of 117.55 sqkm."    
console.log(SangamnerArea.length)

//3
let SangamnerPopulation = "Sangamner has a population of 1367566 as per the 2011 census."
console.log(SangamnerPopulation.length)

// indexing method
//1
let CityName = "Sangamner"
console.log(CityName[0])
console.log(CityName[8])
console.log(CityName[CityName.length - 1])
//2
console.log(CityName[5])
console.log(CityName[7])
console.log(CityName[CityName.length - 3])

//3
let CityFamousFor = "Sangamner is famous for its markets."
console.log(CityFamousFor[12])
console.log(CityFamousFor[29])
console.log(CityFamousFor[CityFamousFor.length - 5])


// concatenation method
//  + operator
//1
let firstName = "Swapnil"
let middleName = "Bansi"
let lastName = "Gaikwad"
console.log(firstName + " " + middleName + " " + lastName)

//2
let city = "Sangamner"  
let state = "Maharashtra"
let country = "India"
console.log(city + " " + state + " " + country)

//3
let swapnilFavCity = "Sangamner"
let swapnilFavFood = "Biryani"
let swapnilProfession = "Trader"
console.log(swapnilFavCity + " " + swapnilFavFood + " " + swapnilProfession)

// `$
//1
console.log(`My name is ${firstName} ${middleName} ${lastName}`)

//2
console.log(`I live in ${city} ${state} ${country}`)

//3
console.log(`My favourite city is ${swapnilFavCity}, my favourite food is ${swapnilFavFood} and my profession is ${swapnilProfession}`)

// long leteral string
//  using \
//1
let aboutCity = "Sangamner is one of the most developed and largest cities in the nearby area and is famous for its markets.\
Sangamner has a total area of 117.55 sqkm.\
Sangamner has a population of 1367566 as per the 2011 census."
console.log(aboutCity)

//2
let timeValue = "Valuing time is crucial because it is a finite, irreplaceable resource that, once lost, cannot be regained.\
Recognizing time's importance fosters goal achievement, improved productivity, reduced stress, and personal growth through disciplined time\
management and prioritizing tasks. Acknowledging the value of time also helps build stronger relationships by allowing for meaningful\
interactions and leads to a more purposeful and fulfilling life." 
console.log(timeValue)

//3
let aboutBiryani ="Biryani is a flavorful, mixed-rice dish originating in South Asia, made with aromatic rice, meat, seafood, or vegetables,\
and a symphony of spices. Prepared using the dum pukht technique of slow steaming, it involves layering partially cooked rice with marinated ingredients,\
often including ghee, caramelized onions, and saffron.\
Biryani is a deeply flavorful and popular dish with countless regional\
vriations across India and neighboring countries"
console.log(aboutBiryani) 

// escape characters
// new line - (\n)
//1
let aboutMyself = "My name is Swapnil Bansi Gaikwad.\nI live in Sangamner, Maharashtra, India.\nI am a Trader by profession."
console.log(aboutMyself)

//2
let myFavThings = "My favourite city is Sangamner.\nMy favourite food is Biryani.\nMy favourite profession is Trader."
console.log(myFavThings) 

//3
let spices = " black cardamom\n green cardamom\ncloves\ncinnamon\nbayleaves\nstar anise"
console.log(spices)

// tab space - (\t)
//1
let aboutMe = "My name is \t Swapnil \t Bansi \t Gaikwad."
console.log(aboutMe)

//2
let myCity = "I live in \t Sangamner \t Maharashtra \t India."
console.log(myCity)

//3
let myProfession = "I am a \t Trader \t by profession."
console.log(myProfession)   

// single quote - (\')
//1
let str1 = 'I\'m Swapnil Bansi Gaikwad.'
console.log(str1)

//2     
let str2 = 'I\'m from Sangamner,\'Maharashtra\' India'
console.log(str2)
//3
let str3 = 'I\'m a \'Trader\' by profession.'
console.log(str3)

// double quote - (\")