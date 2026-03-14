import { test, expect } from '@playwright/test';
<<<<<<< HEAD
const {Common_Locators} = require("../Locators/Common_Locators")
=======
const { Common_Locators } = require("../Locators/Common_Locators")
const { Env } = require('../../env')


>>>>>>> fd6060d45bdab113052c90c494e902e069397ce3
class navigationPage {


    async visitBaseUrl(page) {
        await page.goto('/')
    }

<<<<<<< HEAD
    async verifyLoginPageTitle(page,title){
        await expect(await page.locator(Common_Locators.Login_page_locators.Login_Page_Title)).toHaveText(title)
    }

=======
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

>>>>>>> fd6060d45bdab113052c90c494e902e069397ce3
}
export const NavigationPage = new navigationPage()