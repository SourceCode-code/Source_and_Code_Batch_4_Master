const {test,expect} = require('@playwright/test')
test("verify dynamic dropdowns", async({page})=>{
    // visit the page
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // find dropdown and type au
    await page.locator('[id="autocomplete"]').fill("au")
    //waiting for dropdown to be visible
    await page.waitForSelector('[id="ui-id-1"]')
    //smartly take the count of number of available selector
    let option = await page.locator('[class="ui-menu-item"] div').count()
    console.log(option);

    for(let i=0;i<option;i++){
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent()
        console.log(text);
        if(text==="Austria"){
            await page.locator('[class="ui-menu-item"] div').nth(i).click()
            break;
        }
    }
    await page.waitForTimeout(3000) 
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("Austria")
})
