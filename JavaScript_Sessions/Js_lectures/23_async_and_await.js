//ASYNC AND AWAIT --> its alernative to coinvert async into sync
// this is main on which playwright bulid

// syntax of async await
// async function hello(){
//     return "hello"
// }

// async function sayhello(){
//     let word = await hello()
//     console.log(word)
// }

// sayhello()

//------------------------------

async function userRegistration(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(`the ${user} has been registor now`);
      resloves(user);
    }, 8000);
  });
}

async function verifyOTP(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(`the ${user} device has been verifed `);
      resloves(user);
    }, 4000);
  });
}

async function fetching_near_by_details(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(
        `the ${user} details have been fetch and here are the result list`
      );
      resloves(user);
    }, 5000);
  });
}

async function user_activity(user) {
  return new Promise((resloves) => {
    setTimeout(() => {
      console.log(`${user} the app is ready to use `);
      resloves(user);
    }, 1000);
  });
}

// userRegistration("SIDDHANT").then(verifyOTP).then(fetching_near_by_details).then(user_activity).then((message)=>{
//     console.log(" the promise has been completed")
//   })

async function run_user() {
  console.log("The process is starting ");
  await userRegistration("sid");
  await verifyOTP("sid");
  await fetching_near_by_details("sid");
  await user_activity("sid");
  console.log("The process is completed ");
}

run_user();

// playwright

//async

/**
 *
 * test("basic login test",async function({page})=>{
 *
 * vistiny url
 *
 * await page.goto("website ")
 * await page.locator("user").fill(user)
 *
 *
 * })
 *
 *
 */
