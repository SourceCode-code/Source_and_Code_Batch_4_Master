//const { test, expect } = require("@playwright/test");

// test("verify dynamic dropdowns", async ({ browser }) => {
//     const Context = await browser.newContext();
//     const page = await Context.newPage();

//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     // find dropdown and type ind
//     await page.locator('[id="autocomplete"]').fill("in");
//     // waiting for dropdown to be visible
//     await page.waitForSelector('[id="ui-id-1"]');
//     //smartly take the count of number of avaiable selector
//     let option = await page.locator('[class="ui-menu-item"] div').count();
//     console.log(option);

//     for (let i = 0; i < option; i++) {
//         let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent();
//         console.log(text);
//         if (text === "India") {
//             await page.locator('[class="ui-menu-item"] div').nth(i).click();
//             break;
//         }
//     }
//     await page.waitForTimeout(3000) // 3 sec
//     await expect(page.locator('[id="autocomplete"]')).toHaveValue("India")

// });

const { test, expect } = require("@playwright/test");

test("verify dynamic dropdowns" , async ({browser}) => {
    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // find dropdown and type ind
    await page.locator('[id="autocomplete"]').fill("er");

    //Waiting for Dropdown to be visible Use method "waitForSelector"
   await page.waitForSelector('[id="ui-id-1"]');

    //count the no of selector available
    let option = await page.locator('[class="ui-menu-item"]').count();

    //Print total available option
    console.log(option);

    //Iterate each option to grt expected value 

    for (let i = 0; i < option; i++) {
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent();
        console.log(text);
        if (text === "Germany") {
            //await page.locator('[class="ui-menu-item"] div').nth(i).click();
            await page.locator('[class="ui-menu-item"] div').nth(i).click();
            break;
        }
         await page.waitForTimeout(3000) // 3 sec
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("Germany")
    }

});