
 const {test,expect}= require('@playwright/test');
test("verify the basic of playwright",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator('[placeholder="Search for Products, Brands and More"]').fill('iph')
})