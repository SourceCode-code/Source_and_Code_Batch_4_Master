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

