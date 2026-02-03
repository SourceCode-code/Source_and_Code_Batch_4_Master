const { test, expect } = require("@playwright/test")
test("verify locator method getByAltText()", async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/Click-Buttons/index.html")
    let el = await page.getByAltText("Lets Get Clicking!")
    await expect(el).toBeVisible()
    await expect (el).toHaveAttribute("js/bootstrap.min.js")
})
test("verify locator method getByLabel",async({page})=>{

})
