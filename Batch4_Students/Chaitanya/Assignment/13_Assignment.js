/*FUNCTIONS
we can say that function is a container in which we store our logical code because of which 
our code becomes dynamic. Dynamic in the sense it can applied to a variety of parameters and
can be reused n number of times which saves time in basic and repetative coding.

* The advantages of functions are as below ;

1. our code becomes clean and dynamic as we dont need to repeat code the basic logic agian and 
again for different sets of code and dynamic in the sense it can be applied to a variety of
parameters as once the logical syntax is correct we can just change the parameters to solve 
different problems.


2. as the code becomes clean and dynamic hence it becomes easy to understand and easy to test as 
we dont have to code again and again just changing the parameters and thats all.

basic syntax for function -

function functionname (parameter1, parameter2){
logical code}
functionname (value of parameter1 , value of parameter 2)

here the code can include as much parameters but only if they have any use case in the logical code

* There are 2 types of fuctions 
1. Based on Parameters
2. Based on way of writing

lets first see functions based on parameters;

1. without parameter and without return type 

we cannot store or reuse this function neither can we manipulate the parameters
in this function because of which the output remains constant.
*/
function fullName() {
    console.log('chaitanya bhausaheb kute')
}
fullName()

function className() {
    console.log("Source and code BAtch 4")
}
className()

function laptopVariant() {
    console.log('Dell latitude 5400')
}
laptopVariant()

/* 2. With parameter without return type;
this type of function we can manipulate the parameters and get different outputs as per the 
parameters but we cannot store the output as we dont return the value.
*/
//------------------------------------------------------------------------------------------------
function onRoadPrice(exShowrromPrice , additionalCharges){
    console.log(exShowrromPrice+additionalCharges)
}
onRoadPrice(1000000 , 250000)
//------------------------------------------------------------------------------------------------
function totalMRP(manufacturingCost,GST){
    console.log(manufacturingCost+GST)
}
totalMRP(100,18)

//------------------------------------------------------------------------------------------------

function sum(num1 , num2, num3 , num4,num5){
    console.log(num1+num2-num3/num4*num5)
}
sum(9408 , 7409 ,371 ,639 , 4747)

//------------------------------------------------------------------------------------------------

/* 3. With parameter with return type
this type of function we can manipulate the parameters and get different outputs as per the 
parameters and we can also store the output as we get returntype for this type of functions.
*/

function companyName(companyName,tagLine,unit){
    return(`${companyName} ${tagLine} ${unit}`)
}
let currentCompany = companyName('raj process equipment and systems pvt ltd', 'we innovate deliver serve' , 'satara')
console.log(currentCompany)

let priorCompany = companyName('vibgyor power india pvt ltd',' empowering people','bangalore')
console.log(priorCompany)


function fuelPrice(petrolprice , litresOfPetrol){
    return(petrolprice * litresOfPetrol)
}
    let petrolPrice = fuelPrice(106.9,5)
    console.log(petrolPrice)
