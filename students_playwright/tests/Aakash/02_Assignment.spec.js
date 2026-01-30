const { test , expect } = require("@playwright/test");

test("verify dynamic dropdowns", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice");

    await page.locator('[id="autocomplete"]').fill("er")
    await page.waitForSelector('[id="ui-id-1"]');

    let option = await page.locator('[class="ui-menu-item"] div').count();
    console.log(option);

    for (let i = 0; i<option; i++){
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent();
        console.log(text);
        if(text==="Germany"){
            await page.locator('[class="ui-menu-item"] div').nth(i).click()
            break
        }
    }
await page.waitForTimeout(3000)
await expect(page.locator('[id="autocomplete"]')).toHaveValue("Germany")
})