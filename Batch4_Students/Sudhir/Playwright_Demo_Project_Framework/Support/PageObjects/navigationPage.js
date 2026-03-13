import {test,expect} from '@playwright/test'
const {Common_Locators} = require("../Locators/Common_Locators")
class navigationPage{

    async visitBaseUrl(page) {
        await page.goto('/')
    }

    async verifyLoginPageTitle(page,title){
        await expect(await page.locator(Common_Locators.Login_page_locators.Login_Page_Title)).toHaveText(title)
    }


}

export const NavigationPage = new navigationPage()