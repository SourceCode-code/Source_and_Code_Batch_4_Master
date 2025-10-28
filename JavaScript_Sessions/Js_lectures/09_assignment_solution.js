// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.

let date = new Date('24 Oct 2025')
console.log(date.toString())
let day = date.toLocaleString("en-gb", { weekday: "long" })
console.log(day)
// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
// 5 NOV 2025

let diwali = new Date('5-11-2026')
let today = new Date()

let diff = diwali - today
console.log(diff)



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




