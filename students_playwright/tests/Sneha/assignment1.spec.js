
 const {test,expect}= require('@playwright/test');
test("verify the basic of playwright",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://webdriveruniversity.com/To-Do-List/index.html")
    await expect(page).toHaveTitle("WebDriver | To Do List")
})