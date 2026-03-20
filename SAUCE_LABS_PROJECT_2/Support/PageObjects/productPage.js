import { test, expect } from '@playwright/test';
import { compileFunction } from 'vm';
const { Common_Locators } = require("../Locators/Common_Locators")
const { Env } = require('../../env')


class productPage {

    async verifyProductPageTitle(page, title) {
        await expect(page.locator(Common_Locators.Product_page_locators.Product_page_title)).toContainText(title)
    }

    async verifyAddedItemToCart(page, ProductName) {
        await page.waitForSelector(Common_Locators.Product_page_locators.Inventory_Item)
        const Products = await page.locator(Common_Locators.Product_page_locators.Inventory_Item).count()
        console.log(`The Total Product  on page is ${Products}`)
        for (let i = 0; i < Products; i++) {
            let Product_Name = await page.locator(Common_Locators.Product_page_locators.ProductName).nth(i).textContent()
            console.log(`The Product Names are ${ProductName}`)
            if (Product_Name === ProductName.trim()) {
                await page.locator(Common_Locators.Product_page_locators.AddToCartBtn).nth(i).click()
                console.log(`The Product selected is ${Product_Name}`)
                 let Remove_BTN =await page.locator(Common_Locators.Product_page_locators.RemoveBtn).nth(i)
                 await Remove_BTN.waitFor({state:"visible"})
                 await expect(Remove_BTN).toHaveText(Common_Locators.Labels.Remove)
                 console.log(` Remove Button is Visible for ${Product_Name}`)
                // break // you can use this but the better option is 
                return
            }

        }
        throw new Error(`Product is not found :${ProductName}`)
    }
}
export const Productpage = new productPage()