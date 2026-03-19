import { test, expect } from '@playwright/test';
const { Common_Locators } = require("../Locators/Common_Locators")
const { Env } = require('../../env')


class productPage {

   async verifyProductPageTitle(page, title) {
        await expect(page.locator(Common_Locators.Product_page_locators.Product_page_title)).toContainText(title)
    }
}
export const Productpage = new productPage()