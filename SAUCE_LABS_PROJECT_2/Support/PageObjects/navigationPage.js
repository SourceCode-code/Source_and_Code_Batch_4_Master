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
        await page.waitForTimeout(2000) // waiting for 2 sec for login to happen

        if(await page.locator(Common_Locators.Product_page_locators.HOME_LOGO).isVisible()){
            console.log(`The login is successful for the ${type}`)
            return true
        }

        if(await page.locator(Common_Locators.Login_page_locators.LOGIN_ERROR_POPUP).isVisible()){
            console.log(`The login is failed for the ${type}`)
            return false
        }

        throw new Error('Login result not clear')

    }

    async verifyLoginErrorPopup(page,Errortext){
        await expect(page.locator(Common_Locators.Login_page_locators.LOGIN_ERROR_POPUP)).toHaveText(Errortext)
    }

}
export const NavigationPage = new navigationPage()