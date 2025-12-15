// Sync & Async

// syncrous -->  your code will always be exceuted line by line

console.log("hello");
console.log("world");
console.log("1111111111111");
console.log(">>>>>>>>>>>>>>>>>>>");

// is javascript by nature --> javascript is syncrous

// Asyncorus --> code the which is easy to complice or which get complie first it gets to the out first

// 1)callback hell
// 2)promises  --> cypress
// 3)async and await --> playwright

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

// ZOMATO BULIDING

function userRegistration(user, callback) {
  setTimeout(() => {
    console.log(`the ${user} has been registor now`);
    callback();
  }, 3000);
}

function verifyOTP(user, callback) {
  setTimeout(() => {
    console.log(`the ${user} device has been verifed `);
    callback();
  }, 4000);
}

function fetching_near_by_details(user, callback) {
  setTimeout(() => {
    console.log(
      `the ${user} details have been fetch and here are the result list`
    );
    callback();
  }, 3000);
}

function user_activity(user, callback) {
  setTimeout(() => {
    console.log(`${user} the app is ready to use `);
    callback();
  }, 1000);
}

// userRegistration("sid");
// verifyOTP("sid");
// fetching_near_by_details("sid");
// user_activity("sid");

/**
 * async flow 
 * 
the app is ready to use 
the details have been fetch and here are the result list
the sid has been registor now
the sid device has been verifed
 * 
 */

// 1) callback hell  -->

userRegistration("sid", () => {
  verifyOTP("sid", () => {
    fetching_near_by_details("sid", () => {
      user_activity("sid", () => {
        console.log("the program has been successfully exceuted ");
      });
    });
  });
});

// userRegistration("sid", () => {
//   verifyOTP("sid", () => {
//     fetching_near_by_details("sid", () => {
//       user_activity("sid", () => {
//         console.log("successful");
//       });
//     });
//   });
// });



// create a similar instagram flow 


// promise -->  cypress --> async --> made sync by priomises

// promise --> human used term to get something done in a span time 

// 1 fullied 
// 2 rejected 
// 3 pending