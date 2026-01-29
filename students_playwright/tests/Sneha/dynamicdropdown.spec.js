
 const {test,expect}= require('@playwright/test');
test("verify the basic of playwright",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator('[class="lNPl8b"]').fill('iph')
    await page.waitForSelector('[class="lNPl8b"]')
    let option=await page.locator('[type="text"]').count()
    console.log(option)
    for(let i=0;i<option;i++){
        let text=await page.locator('[type="text"]').nth(i).textContent()
        console.log(text)
        if(text==="iphone 16"){
            await page.locator('[type="text"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)
    await expect(page.locator('[type="text"]')).toHaveValue("iphone 16")
})