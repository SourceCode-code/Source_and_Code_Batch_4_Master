const { text, expect } = require("@playwright/test");
test (" verify the rest button functionality", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newpage()

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // verify the visited id of website
    await expect(page).toHaveTitle(" web Driver | Contact Us")
    // verify the header 
    await expect(page.locator('[type="reset"]')).toBeVisible("Reset");

    //filling the details
    await page.locator('[name="first_name"]').fill("user1")
    // verify the value of firstname
    await expect(page.locator('[name="first_name"]')).toHaveValue("user1")
    // fill the password
    await page.locator('[name="password"]').fill("password123")
    // verify the value of password
    await expect(page.locator('[name="password"]')).toHaveValue("password123")
    // click on reset button
    await page.locator('[type="reset"]').click();
    await expect(page.locator('[id="form_buttons"]')).toHaveText("Reset");



}