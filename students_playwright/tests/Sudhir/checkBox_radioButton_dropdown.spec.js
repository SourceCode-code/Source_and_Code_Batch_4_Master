const{test,expect}=require("@playwright/test")

test("dropdown_Checkbox" ,async function ({page}){

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator('[name="username"]').fill("Admin");
await page.locator('[name="password"]').fill("admin123");

await page.locator('[type="submit"]').click();

// verify Title
  await expect(page).toHaveTitle("OrangeHRM");

// //verfiy the header text
//   await expect(page.locator('[id="main-header"]')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")

//click on admin
  await page.locator('[href="/web/index.php/admin/viewAdminModule"]').click();
  
// Select option form dropdown
  await page.locator('[class="oxd-select-wrapper"]').first().click();

//select admin 
await page.locator('[role="option"]').nth(1).click();
await expect(page.locator('[class="oxd-select-text-input"]').first()).toHaveText("Admin")


// Select option form dropdown
  await page.locator('[class="oxd-select-wrapper"]').last().click()

//select admin 
await page.locator('[role="option"]').nth(1).click()
await expect(page.locator('[class="oxd-select-text-input"]').last()).toHaveText("Enabled")

//checkbox
  await page.locator('[type="checkbox"][value="1"]').check();
  await page.locator('[type="checkbox"][value="2"]').check();
  await expect(page.locator('[type="checkbox"][value="2"]'),).toBeChecked();
  await page.locator('[type="checkbox"][value="2"]').uncheck();

  await expect(page.locator('[type="checkbox"][value="1"]'),).toBeChecked();
  await expect(page.locator('[type="checkbox"][value="2"]'),).not.toBeChecked();
    
})