const {test, expect} = require("@playwrite/test");

// test('verify the basics of playwrute', async({browser}) => {

//     const Context = await browser.newContext();
//     const page = await Context.newPage();

//     await Page.goto('https://www.google.com/');

//     const title = await page.title();
//     console.log(title);


// });

test("verify the basic of playwright ", async({browser})=>{
    const Context = await browser.newContext() // this open a fresh browser with new context 
    const page = await Context.newPage() // this opens a fresh page in a created context 

    //command to vist a website 
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
    //verify id we have visted correct website
    await expect(page).toHaveTitle("WebDriver | Contact Us");
});
