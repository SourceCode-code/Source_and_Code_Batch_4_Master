const { test, expect } = require("@playwright/test");

test("verify flipcarts dynamic dropdowns", async ({ browser }) => {
    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://www.flipkart.com");

    let serch = await page.locator('input[name="q"]')
    await serch.fill("iph");
    //let options =serch.count();
    //console.log(options);

    //class="Vy9RSP"
    //class="lNPl8b"
     await page.waitForSelector('[class="GZVzXz GFxnd4 zWhq_n"]');
     
     //let option = page.locator('[class="GZVzXz GFxnd4 zWhq_n"]').count();
     let option = await page.locator('[class="GZVzXz GFxnd4 zWhq_n"]').count();


     console.log(option)


    for (let i = 0; i < option; i++) {
        let text = await page.locator('[class="GZVzXz GFxnd4 zWhq_n"]').nth(i).textContent();
        console.log(text);
        //if (text === "iphone 13")
            if (text.trim().toLowerCase() === "iphone 17 pro")
 {
            //await page.locator('class="GZVzXz GFxnd4 zWhq_n"]').nth(i).click();
            await page.locator('[class="GZVzXz GFxnd4 zWhq_n"]').nth(i).click();

            await page.waitForTimeout(2000)
            break;
        }
    }
    //await page.waitForTimeout(5000)
   // await expect(page.locator('[class="GZVzXz GFxnd4 zWhq_n"]')).toHaveValue("iphone 17 pro")

});

