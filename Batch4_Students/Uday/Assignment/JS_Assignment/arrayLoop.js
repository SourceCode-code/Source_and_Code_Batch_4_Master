console.log("____________________________________loop__________________________")
// -------------------------------------------------------------------------------------------------------------------

// LOOPS IN ARRAY 

// for an array you have use a for loop 

/**
 * syntax
 * 
 * for(let i =0;i<array.length;i++){
 * //code
 * } 
 */


let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num_array.length; i++) {
    console.log(num_array[i])
}

//---------------------------------------------------------------------------

// i have to add2 to every array element and give it new array 

let add2 = []

for (let i = 0; i < num_array.length; i++) {
    add2.push(num_array[i] + 2)
}

console.log(add2)

// 2 now from the same array i want all elements above 5 

let filter5 = []

for (let i = 0; i < num_array.length; i++) {
    if (num_array[i] >= 5) {
        filter5.push(num_array[i])
    }
}

console.log(filter5)

let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", 0, "tejas"]



for (let i = 0; i < names_arr.length; i++) {
    if (typeof names_arr[i] === "string") {
        console.log(names_arr[i].toUpperCase())
    }
}

