const{test,expect}=require("@playwright/test")
test("verify the radiobutton checkbox and dropdown functionality",async({browser})=>{
  await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
  await expect(page).toHaveTitle("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")

 await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] [class="thumbnail"]').nth(1))
  await expect(divtitle).toContainText("Checkboxe(s)"))
})