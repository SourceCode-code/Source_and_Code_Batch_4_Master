// promises --> cypress uses promised to convert asybn code into sync

// promsies have 3 states"
// 1 fulfilled
// 2 rejected
// 3 pending

// a simple syntax of promises

// show example of promises

let pro = new Promise((resloves, rejected) => {
  let successful = true;

  if (successful === true) {
    resloves("the promise has been fullfiled");
  } else {
    rejected(" the promise has been rejected ");
  }
})
  .then((message) => {
    // if the promise is successfull
    console.log(message);
  })
  .catch((error) => {
    // if the promise is rejected
    console.log(error);
  });

//--------------------------------- async to sync

function userRegistration(user) {
  return new Promise((resloves) => {
    setTimeout(() => {v
      console.log(`the ${user} has been registor now`);
      resloves(user);
    }, 8000);
  });
}

function verifyOTP(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(`the ${user} device has been verifed `);
      resloves(user);
    }, 4000);
  });
}

function fetching_near_by_details(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(
        `the ${user} details have been fetch and here are the result list`
      );
      resloves(user);
    }, 5000);
  });
}

function user_activity(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(`${user} the app is ready to use `);
      resloves(user);
    }, 1000);
  });
}

// how to exceute in sync

userRegistration("SIDDHANT").then(verifyOTP).then(fetching_near_by_details).then(user_activity).then((message)=>{
    console.log(" the promise has been completed")
  })



