const {test,expect}=require("@playwright/test")
const data1=require("../../fixture/Sudhir/MultiTestdata.json")

data1.Testdata.forEach((data) => {

  test(`Contact Us Test - TC ${data.testcaseid}`, async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');

    // Page title validation
    await expect(page).toHaveTitle(data.Page_title);

    // Section header validation
    await expect(page.locator('h2')).toHaveText(data.section_header);

    // Fill form
    await page.fill('input[name="first_name"]', data.firstName);
    await page.fill('input[name="last_name"]', data.lastName);
    await page.fill('input[name="email"]', data.email);
    await page.fill('textarea[name="message"]', data.comment);
    await page.click('input[type="submit"]');

    // Success message validation
    await expect(page.locator('h1')).toHaveText(data.success_message);

  });

});
