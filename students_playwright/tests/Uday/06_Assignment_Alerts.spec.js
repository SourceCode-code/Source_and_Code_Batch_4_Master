//const { test, expect } = require ("@playwright/test");
const { test, expect } = require("@playwright/test");

test("Verify JS Confirm Allert popup", async ({page}) => {
// visit the website
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


await page.locator('[onclick="jsConfirm()"]').click(); //I am a JS Confirm

page.on("dialog",async(simplealert)=>{
    await expect(simplealert.message()).toContain("I am a JS Confirm")
   console.log(dialog.message())
    await simplealert.dismiss()
    console.log(simplealert.message())
})
await page.waitForTimeout(8000)
await expect(page.locator('[id="result"]')).toContainText("You clicked: Cancel")


});

test("Verify JS Allert popup", async ({page}) => {
// visit the website
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


await page.locator('[onclick="jsAlert()"]').click(); //I am a JS Confirm

page.on("dialog",async(simplealert)=>{
    await expect(simplealert.message()).toContain("I am a JS Alert")
   console.log(dialog.message())
    await simplealert.dismiss()
    console.log(simplealert.message())
})
await page.waitForTimeout(8000)
await expect(page.locator('[id="result"]')).toContainText("You successfully clicked an alert")


});

