const { test , expect } = require("@playwright/test");

test("verify Multiwindow handling", async function({browser}){

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://vinothqaacademy.com/multiple-windows/");

    const [newwindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('[name="newbrowserwindow123"]').click()
    ]);

    await newwindow.locator('[placeholder="Name"]').fill("Uday");
    await expect(newwindow.locator('[placeholder="Name"]')).toHaveValue("Uday");
})

//placeholder="Name"