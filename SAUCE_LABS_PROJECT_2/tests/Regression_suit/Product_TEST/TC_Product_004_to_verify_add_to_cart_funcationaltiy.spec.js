import { test, expect } from '@playwright/test';
const { NavigationPage } = require("../../../Support/PageObjects/navigationPage")
const { Productpage } = require("../../../Support/PageObjects/productPage")
const data = require("../../../TestData/TC_Product_004_to_verify_add_to_cart_funcationaltiy.json")



test("TC_Product_004_to_verify_add_to_cart_funcationaltiy", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await Context.newPage()

    const Page_Title = data.TestData[0].page_title
    const User = data.TestData[0].User
    const Product_title = data.TestData[0].Product_title

    await NavigationPage.visitBaseUrl(page)
    await NavigationPage.verifyLoginPageTitle(page, Page_Title)
    await NavigationPage.loginWithCredetials(page, User)
    await Productpage.verifyProductPageTitle(page, Product_title)
    await Productpage.verifyAddedItemToCart(page,["Sauce Labs Backpack","Sauce Labs Fleece Jacket","Test.allTheThings() T-Shirt (Red)"])
    await page.pause()




})
