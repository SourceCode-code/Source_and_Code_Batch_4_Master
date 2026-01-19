// High order function --> high order functions are the functions which takes other as parameter or retrun type

//1 callback function -->
// callback function are the function which takes other function as a parameter

// example
// first function
const callback = (n) => {
  return n ** 2;
};

// callback or seccond
function getcube(callback, n) {
  return callback(n) * n;
}

console.log(callback(2)); //4
console.log(getcube(callback, 2)); //8

//2 returning function -->
// functions which return another function are called returning function

// example

const higherorder = (n) => {
  const dosomething = (m) => {
    const dowhatever = (t) => {
      return 2 * n + 3 + 4 * m * t;
    };
    return dowhatever;
  };
  return dosomething;
};

console.log(higherorder(2)(3)(5));

// there are 2 method
// 1 setInterval()
// 2 setTimeout()

//setInterval()---> the gobal method which takes a callback function as parameter and duration as a paramter

// function of this method --> this will trigger the function at given interval of time

//sytnax

/**
 *
 * function callback(){
 * //code
 * }
 *
 *
 * setInterval(callback(),timeInterval ) the timeINvertal here will given in mili seconds
 *
 *
 *
 */

// function SayHello(){
//   console.log("hello")
// }

// setInterval(SayHello,2000)

// 2 setTimeout() --> this method is used to trigger a function by given amount of delay

function Saybye() {
  console.log("bye");
}

setTimeout(Saybye, 5000);

// hybrid problem

let interval = setInterval(() => {
  console.log("this will repeat after 3 secs");
}, 3000);

setTimeout(() => {
  clearInterval(interval);
  console.log("program has been ended after 10 secs");
}, 10000);

//-----------------------------------------------------------------------------------------------

// Sync & Async

// syncrous -->  your code will always be exceuted line by line

console.log("hello");
console.log("world");
console.log("1111111111111");
console.log(">>>>>>>>>>>>>>>>>>>");

// is javascript by nature --> javascript is syncrous

// Asyncorus --> code the which is easy to complice or which get complie first it gets to the out first

// 1) callback hell
//2) promises  --> cypress
//3) async and await --> playwright

// but your Automation tools by nature are async --> cypress , playwright

// we will bulid our own small food delivery (zomato)

/**Zomato flow 
 * 
 * 
 * 
 * 
 * 
 * 
 */