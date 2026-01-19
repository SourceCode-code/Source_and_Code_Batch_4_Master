const{ test,expect}= require('@playwright/test')

test.only("varify title", async({browser})=>{

const Context= browser.newContext()

const page=Context.newPage()

await page.goto("https://www.w3schools.com/")

await expect(page).toHaveTitle("W3Schools Online Web Tutorials")

})

//line 1: // What it does
// Imports Playwright’s test runner (test) and assertion library (expect)
// Uses CommonJS (require) syntax
// Why it is needed
// test → defines test cases
// expect → validates results
// 📌 Interview line:
// This line loads the Playwright test framework and extracts the test and assertion APIs.

//line 3: //     What it does
// Defines a single test case
// test.only → runs only this test, skipping all others
// "varify title" → test name (description)
// async → allows use of await
// { browser }
// This comes from Playwright fixtures
// browser is a pre-launched browser instance
// 📌 Interview line:
// Playwright injects the browser fixture automatically.

//line 5: // What it does
// Creates a new browser context
// Context = isolated browser session
// Why context is important
// No shared cookies
// No shared storage
// Behaves like a new incognito window
// 📌 Interview line:
// A browser context isolates user sessions and ensures clean test state.

//line 7: What it does
// Opens a new browser tab inside the context
// Page represents a single web page
// Relationship
// Browser → Context → Page
// 📌 Interview line:
// A page is a tab inside a browser context.

//end :
// What it does
// Ends the test block
// Playwright automatically:
// Closes page
// Closes context
// Cleans up resources
// 📌 Interview line:
// Playwright handles cleanup automatically after each test.

