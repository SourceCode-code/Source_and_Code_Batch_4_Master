const {test , expect} = require ("@playwright/test")

test("verify the basic of playwright", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.netflix.com/in/")
    await expect(page).toHaveTitle("Netflix India – Watch Shows Online, Watch Movies Online")
})
