// loops --> loops are used to perform repetitive tasks

// type of loops 
// 1 for   --->finite loop    --> 99%
// 2 while ---> infinite loop -->1%


// for loop --> when the output is definitive or finite 

/**
 * syntax 
 * 
 * for(initalization;condition;increment/decrement){
 * // your code 
 * 
 * }
 */

// example  1 print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// print 10 to 1 
for (let a = 10; a >= 1; a--) {
    console.log(a)
}


// print each charcater of string on new line 

let str = "happy diwali"

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}


// revsere string 
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])

}


//  print table of 2  -- upto 10

//2 X 1 = 2
// 2 x 2 = 4

let num = 2

for (let i = 1; i <= 10; i++) {
    // console.log(num ,"X",i,"=",num*i)
    console.log(`${num} X ${i} = ${num * i}`)
}



// while loop --> used when output is not defintive / infinte

/**
 * initialization
 * while(condition){
 * //code 
 * increment/decrement
 * }
 * 
 * 
 * 
 * 
 */

// print 1 to 10 

let j = 1
while (j <= 10) {
    console.log(j)
    j++
}


// loops for (in // of ) --> array and object




// print all even numbers form 1 to 10 
/**
 * 1 
 * 10 
 * 
 * 
 */

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}



