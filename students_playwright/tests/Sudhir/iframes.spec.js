const {test,expect}=require("@playwright/test")


test("iframes", async({page}) =>{
    
   await page.goto("https://webdriveruniversity.com/IFrame/index.html")

  // Switch to iframe using frameLocator
  const frame = await page.frameLocator('[id="frame"]')

  //click on contact us

  await frame.locator('[href="../Contact-Us/contactus.html"]').click()
  await frame.locator('[name="first_name"]').fill('Sudhir')

  // Verify text is visible
  await expect(frame.locator('[name="first_name"]')).toHaveValue('Sudhir');


}) 