import { test, expect } from '@playwright/test';
import { compileFunction } from 'vm';
const { Common_Locators } = require("../Locators/Common_Locators")
const { Env } = require('../../env')


class productPage {

    async verifyProductPageTitle(page, title) {
        await expect(page.locator(Common_Locators.Product_page_locators.Product_page_title)).toContainText(title)
    }

    // async verifyAddedItemToCart(page, ProductName) {
    // await page.waitForSelector(Common_Locators.Product_page_locators.Inventory_Item)
    // const Products = await page.locator(Common_Locators.Product_page_locators.Inventory_Item).count()
    // console.log(`The Total Product  on page is ${Products}`)
    // for (let i = 0; i < Products; i++) {
    //     let Product_Name = await page.locator(Common_Locators.Product_page_locators.ProductName).nth(i).textContent()
    //     console.log(`The Product Names are ${ProductName}`)
    //     if (Product_Name === ProductName.trim()) {
    //         await page.locator(Common_Locators.Product_page_locators.AddToCartBtn).nth(i).click()
    //         console.log(`The Product selected is ${Product_Name}`)
    //          let Remove_BTN =await page.locator(Common_Locators.Product_page_locators.RemoveBtn).nth(i)
    //          await Remove_BTN.waitFor({state:"visible"})
    //          await expect(Remove_BTN).toHaveText(Common_Locators.Labels.Remove)
    //          console.log(` Remove Button is Visible for ${Product_Name}`)
    //         // break // you can use this but the better option is 
    //         return
    //     }

    // }
    // throw new Error(`Product is not found :${ProductName}`)
    // }


    async verifyAddedItemToCart(page, ProductName) {
        // this will always add your input to array 
        if (!Array.isArray(ProductName)) {
            ProductName = [ProductName]
        }
        await page.waitForSelector(Common_Locators.Product_page_locators.Inventory_Item)
        const products = page.locator(Common_Locators.Product_page_locators.Inventory_Item)
        const count = await products.count()
        console.log(`Total count on the product page ${count}`)
        const addedProducts = []

        for (let i = 0; i < count; i++) {
            const product = products.nth(i)
            const Product_Text = await product.locator(Common_Locators.Product_page_locators.ProductName).textContent()
            console.log(` product names are ${Product_Text}`)
            if (ProductName.includes(Product_Text)) {
                console.log(` the product ${Product_Text} is avalible `)
                await product.locator(Common_Locators.Product_page_locators.AddToCartBtn).click()
                await page.waitForTimeout(3000)
                const removeBtn = product.locator(Common_Locators.Product_page_locators.RemoveBtn)
                // await expect(removeBtn).toBeAttached()
                addedProducts.push(Product_Text)
                if (addedProducts.length === ProductName.length) {
                    return
                }

            }
        }
        const missingProduct = ProductName.filter(name => !addedProducts.includes(name))
        throw new Error(` Products not found or not added : ${missingProduct}`)
    }



}
export const Productpage = new productPage()