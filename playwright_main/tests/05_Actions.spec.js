// Mouse Action

/**
 * click()
 * scroll()
 * drag and drop
 * rightclick()
 * doubleclick()
 * hover()
 *
 *
 */

// Keyboard
// copy and paste

const { test, expect } = require("@playwright/test");

test("verify click()  [dynamic click]", async ({ browser }) => {
  const Context = await browser.newContext();
  const page = await Context.newPage();

  await page.goto("https://demoqa.com/buttons");
  await page.locator('[class="mt-4"] button').nth(1).click();
  await expect(page.locator('[id="dynamicClickMessage"]')).toHaveText(
    "You have done a dynamic click",
  );
});

test("verify double click()", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

  await page.locator('[id="doubleClickBtn"]').dblclick();

  await expect(page.locator('[id="doubleClickMessage"]')).toHaveText(
    "You have done a double click",
  );
});

test("verify right click()", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

  await page.locator('[id="rightClickBtn"]').click({ button: "right" });

  await expect(page.locator('[id="rightClickMessage"]')).toHaveText(
    "You have done a right click",
  );
});

// simple keyboard action

test(" verify keyboard actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page.locator('[name="text1"]').fill(" hello my name is siddhant ");
  await expect(page.locator('[name="text1"]')).toHaveValue(
    " hello my name is siddhant ",
  );

// when ever you have press a key on keyboard use this 

await page.keyboard.press("Control+A")
await page.keyboard.press("Control+C")


// await page.locator('[name="text2"]').click()

await page.keyboard.press('Tab')


await page.keyboard.press("Control+V")


  await page.locator('[name="text2"]').fill(" hello my name is siddhant ");
  await expect(page.locator('[name="text1"]')).toHaveValue(
    " hello my name is siddhant ",
  );



});
