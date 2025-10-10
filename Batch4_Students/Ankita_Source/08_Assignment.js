// Date Object ---  use to get current date and time
let now= new Date()
console.log(now)

// Date-Month-Year 
let today = new Date()
console.log(today.getFullYear())
console.log(today.getMonth()+1)  //+1 to get current month as 0=Jan & 11=Dec
console.log(today.getDate())
console.log(today.getDay())

//DD//MM//YY format
let today1= new Date()
 let format=`${today1.getDate()}/${today1.getMonth()+1}/${today1.getFullYear()}`
console.log("Date=",format)

//.toLocalString- convert a date and time in one string and can control locale (country/language)
let current = new Date()
console.log("Local String=", current.toLocaleString('en-US'))

//.toLocalDateString- convert only date in DD-MM-YY
let date= new Date
console.log("LOcal Date String=",date.toLocaleDateString())

//Time
console.log(today.getHours());   // hour 0-23
console.log(today.getMinutes()); // minutes 0-59
console.log(today.getSeconds()); // seconds 0-59

//.toLocalTimeString- convert only time in HH-MM-SS
let time = new Date()
console.log("Local Time String=",time.toLocaleTimeString())

//Birthday
let bDay= new Date(2002,4,24)
let Birthday= `${bDay.getDate()}/${bDay.getMonth()}/${bDay.getFullYear()}`
console.log("Birthday=", Birthday)




