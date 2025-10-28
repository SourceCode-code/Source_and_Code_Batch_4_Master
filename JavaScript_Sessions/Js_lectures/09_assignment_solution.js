// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.

let date = new Date('24 Oct 2025')
console.log(date.toString())
let day = date.toLocaleString("en-gb", { weekday: "long" })
console.log(day)
// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
// 5 NOV 2025





// Q40. Print “Good Morning  -12/ Good Afternoon 4 / Good Evening-7 / Good Night 12” based on current hour.
/**
 * moring 5-12
 * afternoon 12-16
 * eveing = 16-19
 * night =19-5
 * 
 * 
 */

let date1 = new Date()

let hour = date1.getHours()
console.log(hour)

if (hour > 5 && hour < 12) {
    console.log("good morning")
}
else if (hour >= 12 && hour < 16) {
    console.log("good afternoon")
}

else if (hour >= 16 && hour < 19) {
    console.log("good eveing")
}

else if (hour < 5 || hour > 19) {
    console.log("good night")
}

else { console.log("invalid data") }


// Create a program called “Diwali Countdown”.
// It should print today’s date and how many days left until Diwali.
// Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.

//5 Nov, 2026 
let diwalidate= new Date("2026-11-5")

let todaydate = new Date()
//  calculate the difference mili seconds 
let diff = diwalidate-todaydate

console.log(diff)
/**
 * 1000ms - 1sec 
 * 60 sec - 1 min 
 * 60 min - 1 hour 
 * 24 hours - 1 day
 */
let daysleft = Math.round(diff/(1000*60*60*24))
console.log(daysleft)


if( daysleft <= 10){
  console.log('“🪔 Get Ready to Celebrate!” ')
}
