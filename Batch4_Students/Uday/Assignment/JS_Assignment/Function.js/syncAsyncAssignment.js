

function createInstaAccount(user, callback) {
  setTimeout(() => {
    console.log(`${user} account created successfully`);
    callback();
  }, 2000);
}

function uploadProfilePic(user, callback) {
  setTimeout(() => {
    console.log(`${user} uploaded profile picture`);
    callback();
  }, 1500);
}

function fetchHomeFeed(user, callback) {
  setTimeout(() => {
    console.log(`${user} feed loaded with latest posts`);
    callback();
  }, 2500);
}

function startMessaging(user, callback) {
  setTimeout(() => {
    console.log(`${user} can now send and receive messages`);
    callback();
  }, 1000);
}


createInstaAccount("Uday", () => {
  uploadProfilePic("Uday", () => {
    fetchHomeFeed("Uday", () => {
      startMessaging("Uday", () => {
        console.log("Instagram is ready to use");
      });
    });
  });
});
