 const{test,expect}=require('@playwright/test')
test('verify the checkbox radiobutton functionality', async ({ page })=>{
//     let Context = await browser.newContext()
// let page = await Context.newPage()


await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator('[placeholder="Username"]').fill("Admin")
await page.locator('[placeholder="Password"]').fill("admin123") 
await page.locator('[type="submit"]').click()   

await page.locator('[class="oxd-main-menu"]>li:nth-child(1)').click()   

await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-level"]')).toHaveText("User Management")
await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input]').fill('sneha')
await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i').click()
await page.locator('div [class="oxd-select-text-input"]').click()
})