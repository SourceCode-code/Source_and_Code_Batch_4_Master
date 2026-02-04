const{test,expect}=require('@playwright/test')

test("contactus file",async({browser})=>{
let Context = await browser.newContext();
let page=await Context.newPage()
await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
await expect(page).toHaveTitle("WebDriver | Contact Us")
await expect(page.locator('[class="section_header"]')).toHaveText("CONTACT US")
await page.locator('[name="first_name"]').fill("sneha")
await expect(page.locator('[name="first_name"]')).toHaveValue("sneha")
await page.locator('[name="last_name"]').fill("anap")
await expect(page.locator('[name="last_name"]')).toHaveValue("anap")
await page.locator('[name="email"]').fill("anapsneha@gmail.com")
await expect(page.locator('[name="email"]')).toHaveValue("anapsneha@gmail.com")
await page.locator('[name="message"]').fill("javascript with playwright")
await expect(page.locator('[name="message"]')).toHaveValue("javascript with playwright")
await page.locator([type="submit"]).click()
await expect(page.locator('[id="contact_reply"] h1')).toHaveText("Thank You for your Message!")
    
})