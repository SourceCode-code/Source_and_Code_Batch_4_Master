const {test, expect} = require('@playwright/test')
// lean way
test("verify selection of dropdowns , checkboxes , radio btns", async({
page
})=>{
    //visit the page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    // verify the title of the page
    await expect(page).toHaveTitle("OrangeHRM")
    //verify the header text
    await expect(page.locator('[alt="company-branding"]')).toHaveText("OrangeHRM")

    //select option from dropdown
    await page.locator('[class="oxd-icon bi-dash oxd-checkbox-input-icon"]').click()
    // verify selected option
    await expect(page.locator('[class="oxd-icon bi-dash oxd-checkbox-input-icon"]')).toBeChecked()

    //check user role dropdown
    await page.locator()

    
