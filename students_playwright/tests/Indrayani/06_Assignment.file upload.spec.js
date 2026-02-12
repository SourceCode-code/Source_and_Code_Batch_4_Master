const {test,expect} = require("@playwright/test");

test ("verify the file upload in playwright", async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    // upload single file



})