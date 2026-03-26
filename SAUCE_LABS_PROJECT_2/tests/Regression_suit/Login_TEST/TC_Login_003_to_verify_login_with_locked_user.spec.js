import { test, expect } from '@playwright/test';
const { NavigationPage } = require("../../../Support/PageObjects/navigationPage")
const data = require("../../../TestData/TC_Login_003_to_verify_login_with_locked_user.json")



test("TC_Login_003_to_verify_login_with_locked_user", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await Context.newPage()

    const Page_Title = data.TestData[0].page_title
    const User = data.TestData[0].User
    const Error_Text = data.TestData[0].Error_Text

    await NavigationPage.visitBaseUrl(page)
    await NavigationPage.verifyLoginPageTitle(page, Page_Title)
    await NavigationPage.loginWithCredetials(page, User)
    await NavigationPage.verifyLoginErrorPopup(page, Error_Text)
})