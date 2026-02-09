const { test, expect } = require("@playwright/test");
test(" verify the reset button functionality", async ({ browser }) => {

    let context = await browser.newContext();
    // verify the header 
    let page = await context.newPage()

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // verify the visited id of website
    await expect(page).toHaveTitle(" WebDriver | Contact Us")
    // verify the header 

    await expect(page.locator('[id="form_buttons"]')).toBeVisible(); 
    

    //filling the details
    await page.locator('[name="first_name"]').fill("user1")
    await page.locator('[name ="email"]').fill("user1@gmail.com")
    await page.locator('[name="message"]').fill("testing reset button")


    // verify the value is filled
    await expect(page.locator('[name="first_name"]')).toHaveValue("user1")
    await expect(page.locator('[name="email"]')).toHaveValue("user1@gmail.com")
    await expect(page.locator('[name="message"]')).toHaveValue("testing reset button")

    // click on reset button
    await page.locator('[type="reset"]').click()

    // verify rest button is clicked
    await expect(page.locator('[value="RESET"]')).toBeEnabled()


    //verify the field has been cleared after clicking reset button
    await expect(page.locator('[name="first_name"]')).toHaveValue("")
    await expect(page.locator('[name="email"]')).toHaveValue("")
    await expect(page.locator('[name="message"]')).toHaveValue("")

})