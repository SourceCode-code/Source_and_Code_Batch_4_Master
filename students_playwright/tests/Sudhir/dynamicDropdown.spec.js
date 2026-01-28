const {test,expect}=require("@playwright/test")

test("verify dynamic dropdowns", async({browser})=>{

    const context= await browser.newContext();
    const page=await browser.newPage();
    

    //url
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //fill country name
    await page.locator('[id="autocomplete"]').fill("Ger")

    //wait for element visisble
    await page.waitForSelector('[id="ui-id-1"]')

    //store all visisble options in variable
    let option = await page.locator('[class="ui-menu-item"] div').count()

     console.log(option)

     //for loop for select searched option

    for (let i = 0; i < option; i++) {
        
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent()
         console.log(text)

        if(text === "Germany"){
            await page.locator('[class="ui-menu-item"] div').nth(i).click()

            break
        }
    }

    await page.waitForSelector('[id="autocomplete"]')
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("Germany")

});