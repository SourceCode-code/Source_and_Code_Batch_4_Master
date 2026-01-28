const{test,expect}=require("@playwright/test")

test("dropdown_Checkbox" ,async function ({page}){
test.setTimeout(60000);

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: 'domcontentloaded' });

await page.locator('[name="username"]').fill("Admin");
await page.locator('[name="password"]').fill("admin123");

await page.locator('[type="submit"]').click();

// verify Title
  await expect(page).toHaveTitle("OrangeHRM");

// //verfiy the header text
//   await expect(page.locator('[id="main-header"]')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")

//click on admin
  await page.locator('[href="/web/index.php/admin/viewAdminModule"]').click();
  
// // Select option form user dropdown
//   await page.locator('[class="oxd-select-wrapper"]').first().click();

// //select admin 
// await page.locator('[role="option"]').nth(1).click();
// await expect(page.locator('[class="oxd-select-text-input"]').first()).toHaveText("Admin")


// // Select option form status dropdown
//   await page.locator('[class="oxd-select-wrapper"]').last().click()

// //select status 
// await page.locator('[role="option"]').nth(1).click()
// await expect(page.locator('[class="oxd-select-text-input"]').last()).toHaveText("Enabled")

//checkbox
  await page.locator('input[value="2"]').check();
//   await page.locator('[class="oxd-table-card-cell-checkbox"] [value="2"]').check();
//   await expect(page.locator('[class="oxd-table-card-cell-checkbox"] [value="2"]')).toBeChecked();
//   await page.locator('[class="oxd-table-card-cell-checkbox"] [value="2"]').uncheck();

//   await expect(page.locator('[class="oxd-table-card-cell-checkbox"] [value="1"]')).toBeChecked();
//   await expect(page.locator('[class="oxd-table-card-cell-checkbox"] [value="2"]')).not.toBeChecked();
    
})


test('Check and Uncheck Checkbox', async ({page}) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkboxes = page.locator('input[type="checkbox"]');

  // Check first checkbox
  await checkboxes.nth(0).check();
  await expect(checkboxes.nth(0)).toBeChecked();

  // vefify second checkbox 
  await checkboxes.nth(1).uncheck();
  await expect(checkboxes.nth(1)).not.toBeChecked();

});