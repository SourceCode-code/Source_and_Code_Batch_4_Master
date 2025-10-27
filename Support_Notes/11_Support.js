
// // // date in human readable format 
// let dayformat = currentdate < 10 ? `0${currentdate}` : currentdate
// let monthformat = month < 10 ? `0${month}` : month


// // human format date 
// let humanDateformat1 = `${dayformat}/${monthformat}/${year}`
// console.log(humanDateformat1) //10/10/2025

// // Padstart(what length,what charcter to add) -->using padStart method to add leading zeros 
// let dayformat2 = String(currentdate).padStart(3, "0")


// console.log(dayformat2)
// // // PadEnd(what length,what charcter to add)  --> using to add zero at the ending of the string

// let dateformat3 = String(currentdate).padEnd(3, "a")
// console.log(dateformat3)

// // 21:18:39

// // time in 12 hours format 

// let chour = date.getHours()
// console.log(chour)
// let cmin = date.getMinutes()
// console.log(cmin)

// console.log(`${chour}:${cmin}`) //21:20

// // let ampm ?
                 15>12
// let ampm = chour > 12 ? "PM" : "AM"
// console.log(ampm)

let date= new Date()
// let chour=date.getHours()
// console.log(chour) //19
// // midnight-0to12 AM
// // after 12 to 24 its a PM
// // let ampm = chour > 12 ? "PM" : "AM"
// // console.log(ampm)

// let chours12 = chour % 12
// console.log(chours12)
// let hourformat = String(chours12).padStart(2, "0")
// console.log(hourformat)
// let minformat = String(cmin).padStart(2, "0")
// console.log(minformat)
// console.log(`${hourformat}:${minformat} ${ampm}`) //09:20 PM

// // console.log(curindtime)

// //------------------------------------------------------------------------------

// let curtime = date.toLocaleString("en-In",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric",
//     hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true
// })

// console.log(curtime)

// let CorrectTime=date.toLocaleString("en-gb",{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit'})
// console.log(CorrectTime)

// // MANIPULATION OF DATES WITH setDate()and setMonth() and setYear()

// // example --> 


let manipDate= new Date() //13+5 -->18// ate function apllicable

let futuredate = manipDate.getDate() // new Date().getDate() --> current 14 // todays date .. present date
console.log(futuredate+100)   //110

manipDate.setDate(futuredate+20)

console.log(manipDate.getDate()) //18

//future month 
let fumonth=new Date() //Date function applicable
let currMonth =fumonth.getMonth()+1
console.log(currMonth+20)

fumonth.setMonth(currMonth+20)
console.log(fumonth.getMonth())



// let maniDate2 = new Date()

// // example of setMonth()

// let futuremonth = maniDate2.getMonth()+1

// console.log(futuremonth)

// maniDate2.setMonth(futuremonth+3)

// console.log(maniDate2.getMonth()) //1 

// // -------- manipluation year 

// //setYear()

// let maniDate3 = new Date()

// let futureyear=maniDate3.getFullYear()
// console.log(futureyear)

// maniDate3.setFullYear(futureyear+10)
// console.log(maniDate3.getFullYear())