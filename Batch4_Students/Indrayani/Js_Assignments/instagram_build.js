
// Instagram flow....

function createAccount(user, callback){
    setTimeout(()=> {
        console.log(`the ${user} account has been created successfully`)
        callback();
    }, 3000)
}

function uploadprofilepicture( user , callback){
    setTimeout(() => {
        console.log(`the ${user} profile picture has been uploaded successfully`)
        callback();
    }, 3000)
}

function findfriends (user , callback){
    setTimeout(() => {
        console.log(`the ${user} friends list has been fetched successfully`)
        callback();
    }, 3000)
}
 function postphoto (user , callback){
    setTimeout(() => {
        console.log(`the ${user} photo has been posted successfully`)
        callback();
    }, 3000)
 }
    
    createAccount("Indrayani", () => {
        uploadprofilepicture("Indrayani", () => {
            findfriends("Indrayani", () => {
                postphoto("Indrayani", () => {
                    console.log("Instagram flow has been successfully executed")
                })
            })
        })
    })
