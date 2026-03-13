import { test, expect } from '@playwright/test';
const { Common_Locators } = require("../Locators/Common_Locators")
const { Env } = require('../../env')


class navigationPage {


    async visitBaseUrl(page) {
        await page.goto('/')
    }

    async verifyLoginPageTitle(page, title) {
        await expect(await page.locator(Common_Locators.Login_page_locators.Login_Page_Title)).toHaveText(title)
    }


    async loginWithCredetials(page, type) {
        let Credential = Env.getCredentials(type);
        await page.locator(Common_Locators.Login_page_locators.USER_NAME).fill(Credential.username)
        await page.locator(Common_Locators.Login_page_locators.PASSWORD).fill(Credential.password)
        await page.locator(Common_Locators.Login_page_locators.LOGIN_BUTTON).click()

        //check if login is successsfull or failed
    }

}
export const NavigationPage = new navigationPage()