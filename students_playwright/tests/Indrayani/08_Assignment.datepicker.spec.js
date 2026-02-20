// assignment select your birthdate in this in webiste 

//https://testautomationpractice.blogspot.com/

const { test, expect } = require("@playwright/test")

test("select birth date 13/01/1990", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    let date = "13"
    let month = "01"
    let year = "1990"

    await page.locator('[id="txtDate"]').click()
    await page.waitForTimeout(5000)

    // select year
    await page.locator('[class="ui-datepicker-year"]').selectOption(year)

    // select month
    await page.locator('[class="ui-datepicker-month"]').selectOption(month)

    //select date
    let daycount = await page.locator('[class="ui-state-default ui-state-active"]').count()
    console.log(daycount) // 31

    
    await expect(page.locator('[id="txtDate"]')).toHaveValue("13/01/1990")
    await page.waitForTimeout(5000)
    
})