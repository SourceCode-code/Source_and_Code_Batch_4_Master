const{test,expect}= require("@playwright/test")

test("method getByAltText()", async ({ page }) => {

  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  let element = page.getByAltText("Wikipedia");
  await expect(element).toBeVisible();
  await expect(element).toHaveAttribute("src", "/static/images/mobile/copyright/wikipedia-wordmark-en-25.svg");

});

test("method getByLabel() ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  let element = page.getByLabel("Username");

  await expect(element).toBeVisible();
});

test("method getByPlaceholder() ", async ({ page }) => {
  //visit the url
  await page.goto("https://www.saucedemo.com/");
  
  let element = page.getByPlaceholder("Username");
 
  await element.fill("Sudhir");
  
  await expect(element).toHaveValue("Sudhir");
});

test("method getByRole() ", async ({ page }) => {
  //visit the url
  await page.goto("https://the-internet.herokuapp.com/login");

  
  let element = await page.getByRole("button", { name: " Login" });
  
  await expect(element).toBeVisible()
});


test("getByText()", async ({ page }) => {
  //visit the url
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
 

  let header = await page.getByText(" checkbox 1");

  await expect(header).toBeVisible();
});