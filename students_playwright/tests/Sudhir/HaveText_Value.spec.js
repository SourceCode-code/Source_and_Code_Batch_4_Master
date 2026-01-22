const {test,expect} = require("@playwright/test")


test("verify have text and value",async({browser})=>{

    let context = await browser.newContext()
    let page=await context.newPage()

    //go to url
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //check to have title
    await expect(page).toHaveTitle("Test Login | Practice Test Automation")
    //check header text
    await expect(page.locator('[class="main-container"] h2')).toHaveText("Test login")

    //filling details
    await page.locator('[name="username"]').fill("student")
    //verify the value of username
    await expect(page.locator('[name="username"]')).toHaveValue('student')
    
    //fill password
    await page.locator('[name="password"]').fill("Password123")
    //verify the value of username
    await expect(page.locator('[name="password"]')).toHaveValue('Password123')

    // click on submit button
     await page.locator('[class="btn"]').click();
     await expect(page.locator('[class="main-container"] h1')).toHaveText('Logged In Successfully')


})