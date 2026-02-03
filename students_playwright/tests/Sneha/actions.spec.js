const{test,expect}=require("@playwright/test")
test("mouse actions",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator('[aria-label="Mobiles & Tablets"]').click()
    await expect(page.locator('[aria-label="Mobiles & Tablets"]')).toHaveText("Mobiles & Tablets")

})
test("verify double click",async({page})=>{
    await page.locator('[ng-model="Adress"]').fill("rajapur road,dholewadi,sangamner")
     await page.waitForTimeout(3000)
    await expect(page.locator('[class="form-control ng-valid ng-touched ng-dirty ng-valid-parse"]]')).toHaveValue("Rajapur Road Sangamner")

})