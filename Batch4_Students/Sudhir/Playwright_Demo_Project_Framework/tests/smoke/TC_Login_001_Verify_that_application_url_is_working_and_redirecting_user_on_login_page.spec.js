import{test,expect} from '@playwright/test'
const {NavigationPage}=require('../../Support/PageObjects/navigationPage')

test("TC_Login_001_Verify_that_application_url_is_working_and_redirecting_user_on_login_page",async ({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()


    await NavigationPage.visitBaseUrl(page)
    await NavigationPage.verifyLoginPageTitle(page, "Swag Labs")



}) 