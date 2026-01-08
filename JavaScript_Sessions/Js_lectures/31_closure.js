// closure   --> if inner function acccess the outer function variable then it called as closure

// example

function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner();
}

let hh = outer();
console.log(hh);

// recusrion -->  recursion is a process in which a function calls itselfs until the output is received

// hosting --> hositing js is a behaviour where varaible and functions are dlecraed and move to there top of scope

// first the function is called and then it is delecraed it called hositing

sayHello(); // this is only in delecretive type of function

function sayHello() {
  console.log("hello");
}
