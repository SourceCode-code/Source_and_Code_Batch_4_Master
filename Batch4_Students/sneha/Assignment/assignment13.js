

// Exercises: Level 1

// 1 Declare a function fullName and it print out your full name.
 function fullname(){
console.log("sneha suresh anap")
 }
 fullname()
 
// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstname,lastname){
    return(firstname,lastname)

}
let myinfo=("sneha suresh anap")
console.log(myinfo)
// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a,b){
    return a+b
}
let sum=addNumbers(6,8)
console.log(sum)


// 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaofrectangle(a,b){
    return a*b
}
let result=areaofrectangle(12,5)
console.log(result)

// 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function pariemeterofrectangle(length,width){
    return 2*(length+width)
}
let r=pariemeterofrectangle(13,56)
console.log(r)

// 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(l,w,h){
    let volume=l*w*h
    return volume
}
console.log(volumeOfRectPrism(1,7,8))

// 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let area=Math.PI*r*r
    return area

}
console.log(areaOfCircle(5))

// 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumferance=2*Math.PI*r
    return circumferance
}
console.log(circumOfCircle(23))

// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume){
    let density1=mass/volume
    return density1
}
console.log(density(8,2))
// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(totaldistance,totalamtoftime){
let speed=totaldistance/totalamtoftime
return speed
}
console.log(speed(12,1))


// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass,gravity){
    let weight=mass*gravity
    return weight

}
console.log(weight(3,4))

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function of(c){
    let of=(c*9/5)+32
    return of
}
console.log(of(23))
// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bmicalculate(weight,height){
    let bmi=weight/(height*height)
    if(bmi<18.5){
        return "underweight(Bmi: " + bmi.toFixed(1)+ ")"
    }
    else if(bmi>=18.5&& bmi<=24.9){
        return "normal weight(Bmi: " + bmi.toFixed(1)+ ")"
    }
     else if(bmi>=25 && bmi<=29.9){
        return "over weight(Bmi: " + bmi.toFixed(1)+ ")"

     }
     else {
        return "obese(Bmi: " + bmi.toFixed(1)+ ")"
     }

 

}
console.log(bmicalculate(10,1.5))

// 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkseason(month){
    if(month===12||month===1||month===2){
        return"winter"
    }
    else if(month===3||month===4||month===5){
         return"spring"

    }
     else if(month===6||month===7||month===8){
         return"summer"

 }
 else if(month===9||month===10||month===11){
         return(`${month}is automn`)

 }

 else{
    return"invalid month"

 }
}
 console.log(checkseason(3))
// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findmax(a,s,d){
    return Math.max(a,s,d)
}
console.log(findmax(12,13,14))

// Exercises: Level 2

// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function valueoflinearequation(a,x,b,y,c){
    return a*x+b*y+c
}
   
console.log(valueoflinearequation(1,2,3,4,4))

// function linearequation

// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a,x,b,c){
    let solveQuadratic1=a*x*x+b*x+c
    return solveQuadratic1
}
 console.log(solveQuadratic(0)) // {0}////////////////////////////////////////////////////////////////////////////////////////////
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printarray(array){
    return 
}

// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDateTime(){
//     const new1=new Date()
//     let day=new1.getDate
//     let month=new1.getMonth
//     let year=new1.getFullYear
//     let hr=new1.getHours
//     let minutes=new1.getMinutes
    

//   day = day.toString().padStart(2, '0')
//        month = month.toString().padStart(2, '0')
//     hr= hr.toString().padStart(2, '0')
//   minutes = minutes.toString().padStart(2, '0')
// return`${day}/${month}/${year}  ${hr}:${minutes}`
// }

// console.log(showDateTime())

// // showDateTime()
// 08/01/2020 04:08

// 5 Declare a function name swapValues. This function swaps value of x to y.


function swapvalues(x,y){
    x=x+y
    y=x-y
    x=x+y

    return {x,y}

}
console.log(swapvalues(3,4))

//   swapValues(3, 4) // x => 4, y=>3
  // swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let reverse=[]
    for(let i=arr.length-1;i>=0;i--){
        reverse.push(arr[i])
    }
    return reverse
}
console.log(reverseArray([45,3,4,5,66,3,2,2,6]))

console.log(reverseArray([1, 2, 3, 4, 5]))
// [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
// ['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
 function capitalizedarray(array){
    let arr=[]
   for(let i=0;i<=array.length;i++){
   let carray= arr.push(array[i].toUpperCase())
   
   return carray
    }
} 
    console.log(capitalizedarray(["sneha","srushti","divya"]))


 

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
  let array=[]
function addItem(item){
 for(let i=0;i<=array.length;i++){
array.push(item)
return array
}
}
console.log(addItem("sneha"))
console.log(addItem("devansh"))
console.log(addItem("krushna"))


// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
removeitems=["apple","banana","grapes"]
function remove(index){
   for(let i=0;i<=array.length;i++){
removeitems.splice(index,1)
return removeitems
}
}
console.log(remove(1))
// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// function sumofnumbers(number){
//     sum=0
//     let total=el.reduce((acc,el,index,array)=>{
//         el+acc
//     },0)
//     return total
// }
// console.log(sumofnumbers(5))/////////////////////////////////////////////////////////////////
    

    

// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumofodds(number){

    sum=0
    for(let i=0;i<=number;i++){
        if(i%2!==0){
            sum=sum+i
         
        }
        
    }
   return sum
}
console.log(sumofodds(10))
// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumofeven(number){
    sum=0
     for(let i=0;i<=number;i++){
        if(i%2===0){
            sum=sum+i
        }
    }
    return sum

}
console.log(sumofeven(4))
// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evenodd(number){//////////////////////////////////////////////////////////////////////////////////////////////////
    even=0
    odd=0
    for(let i=0;i<=number;i++){
        if(number%2===0){
            even++
           
        }
            else{
               odd++

            }
        }
        return{
           even
          
        
        }
        
        }
    
    console.log(evenodd(100))

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 Write a function which takes any number of arguments and return the sum of the arguments
function arg(a,b,c){
    console.log(a+b+c)
}
arg(1,2,3)
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// 15 Writ a function which generates a randomUserIp./////////////////////////////////////////////
function userIp(number){
    let a=Math.floor(Math.random())*256
    let b=Math.floor(Math.random())*256
    let c=Math.floor(Math.random())*256
return`${a}${b}${c}`   
}
console.log(userIp())


// 16 Write a function which generates a randomMacAddress//////////////////////////////////////////

// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());//////////////////////////
// '#ee33df'

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// function userIdGenerator(id){
//    let ch="wertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
//     let random=Math.round(Math.random()*ch.length)
//     random.substring(0,7)
//     number=Math.floor(Math.random()*99)
//     console.log(number)
    // console.log(ch[spl])   //////////////////////////////////////////////

// userIdGenerator()
// console.log(userIdGenerator());
// 41XTDbE

// Exercises: Level 3

// 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// '
// 2 Write a function name rgbColorGenerator and it generates rgb colors.//TAKE HELP ON GOOGLE RGB COLOR VALUES ARE 0-256///
function rgbColorGenerator(n){
  let r=  Math.round(Math.random()*256)
  let g=   Math.round(Math.random()*256)
  let b=    Math.round(Math.random()*256)
  return(`${r} ${g} ${b}`)
}
console.log(rgbColorGenerator())

// rgbColorGenerator()
// rgb(125,244,255)

// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// 7 Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#115720bb']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shufflearray(array){

}

// 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number){
    let fact=1
    for(let i=1;i<=number;i++){
        fact=fact*i         //1*1=1
    }                       //1*2=2
    return fact     
                           //2*3=6
}
console.log(factorial(5))
// 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function empty(value){
    if(value===undefined||value===null){
        return true
}
if(typeof value==="string"&&value.trim()===""){
    return true
    }
    if(Array.isArray(value)&&value.length===0){
        return true
    }
    if(value==="object"&&Object.keys(value).length===0){
return true
}
}
console.log(empty("hello"))


// 11 Call your function sum, it takes any number of arguments and it returns the sum.
function sum1(number){
    let sum=0
    for(let i=0;i<=number.length;i++){

    sum=sum+i
    
    return sum
    }
}
console.log(sum1(13,4))//////////////////////////////////////
// 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
 function sumOfArrayItems(arr){
    let sum=0
    for(let item of arr){
        if(typeof item!=="number")
            return "all  items should be numbers"
        sum+=item
}
return sum
    }
 console.log(sumOfArrayItems([12,23,3]))
// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.


function sameDataType(arr) {
  if (arr.length === 0) return "Array is empty";

  const firstType = typeof arr[0];

  for (let item of arr) {
    if (typeof item !== firstType) {
      return false;
    }
  }

  return true;
}

console.log(sameDataType([1, 2, 3]))//solve by taken help of chatgpt
// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// 15  Write a function called isPrime, which checks if a number is prime number.
function isprime(number){
    if(number<2){
        return false
    }
for(let i=2;i<=Math.sqrt(number);i++){
    if(number%i===0){
        return false
    }

}
return true

}
console.log(isprime(3))


// 16 Write a functions which checks if all items are unique in the array.
function check(array){
    if(arr[i]===arr[i]){
        return "true"
    }
    else{
        return"false"
    }
}
console.log("............",check[12,34,23,44])
// 17 Write a function which checks if all the items of the array are the same data type.
function sameDataType(arr) {
  if (arr.length === 0) return true

  const firstType = typeof arr[0]

  for (let item of arr) {
    if (typeof item !== firstType) {
      return false;
    }
  }
  return true;
}

console.log(sameDataType([1, 2, 3]))     
console.log(sameDataType([1, 'a', 3]))      
console.log(sameDataType([true, false]))

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function support(variablename){
    if (typeof variablename!==string){
    }
}

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function unique(number){
    let random=Math.floor(Math.random()*9)
    let random1=Math.floor(Math.random()*9)
    let random2=Math.floor(Math.random()*9)
    let random3=Math.floor(Math.random()*9)
    let random4=Math.floor(Math.random()*9)
    let random5=Math.floor(Math.random()*9)
    let random6=Math.floor(Math.random()*9)
    return`${random},${random1},${random2},${random3},${random4},${random5},${random6}`

}
console.log(unique())

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// function reverseCountries(array){
// for(let i=array.length;i<=0;i--){
//     return(array[i])
// }
// }
// console.log(reverseCountries())

function reversecountries(copiedarray){
    let carray=[...copiedarray]
   let c= carray.reverse()
    
return carray
}
let countries=["india","usa","china"]
console.log(reverseArray[countries])
console.log(countries)



//LEVEL 2=7