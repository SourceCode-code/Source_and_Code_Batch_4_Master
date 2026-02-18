 //assignemnt --- > find away to use multiple data set for one code 
//2 automate ornage hrm login flow using real time dymainc data 

const { test, expect } = require("@playwright/test");
const data2 = require("../../testdata/Contactus.json");

test("04_Batch_4_verify the successful submission of details for multiple data in single file ", async ({browser}) => {
  let Context = await browser.newContext();
  let page = await Context.newPage()
  

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    
})