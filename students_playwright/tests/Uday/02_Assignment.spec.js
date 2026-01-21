

const {test,expect} = require("@playwright/test")

test("verify the Wbdriver univercity page ", async({browser})=>{
    const Context = await browser.newContext() 
    const page = await Context.newPage() 
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") 
    //verify id we have visted correct website
    await expect(page).toHaveTitle("WebDriver | Contact Us")
})

test('Verify that all contact form fields should be visible', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');

  await expect(page.locator('input[name="first_name"]')).toBeVisible();
  await expect(page.locator('input[name="last_name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('textarea[name="message"]')).toBeVisible();
});

test('Verify that user should submit the form successfully with valid data', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');

  await page.fill('input[name="first_name"]', 'John');
  await page.fill('input[name="last_name"]', 'Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  await page.fill('textarea[name="message"]', 'Hello! This is a test message.');

  await page.click('input[type="submit"]');

  await expect(page.locator('h1')).toHaveText('Thank You for your Message!');

  await page.close();
});


