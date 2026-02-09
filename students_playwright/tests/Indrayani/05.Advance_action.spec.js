
const { test, expect } = require("@playwright/test");

// drag and drop action..

test("verify drag and drop action", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop")

    let dragebale_element = await page.locator('[id="column-a"]')

    let dropable_element = await page.locator('[id="column-b"]')

    await dragebale_element.dragTo(dropable_element)

    // after drag coloum B should contains A

    await expect(page.locator('[id="column-b"] h3')).toHaveText("A")

    // after drag coloum A should contains B

    await expect(page.locator('[id="column-a"] h3')).toHaveText("B")
})