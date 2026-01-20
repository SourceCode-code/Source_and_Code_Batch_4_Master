const {test,expect} = require("@playwright/test")

test("verify the basic of playwright ", async({browser})=>{
    const Context = await browser.newContext() 
    const page = await Context.newPage()
    
    await page.goto("https://www.youtube.com/") 
    
    await expect(page).toHaveTitle("YouTube")
})