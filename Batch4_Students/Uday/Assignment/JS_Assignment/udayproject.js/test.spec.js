// function test() {
//   let x = 10;

//   return function() {
//     console.log(x);
//   };
// }

// const fn = test();

// fn();

for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}