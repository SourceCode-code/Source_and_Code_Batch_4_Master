import { test, expect } from '@playwright/test';
const { NavigationPage } = require("../../../Support/PageObjects/navigationPage")
const data = require("../../../TestData/TC_Login_002_to_verify_the_login_functionality.json")



test("TC_Login_002_to_verify_the_login_functionality", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await Context.newPage()

    const Page_Title = data.TestData[0].page_title

    await NavigationPage.visitBaseUrl(page)
    await NavigationPage.verifyLoginPageTitle(page, Page_Title)
    await NavigationPage.loginWithCredetials(page, "standard_user")

    await page.pause()
})