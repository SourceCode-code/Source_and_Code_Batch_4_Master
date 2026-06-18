import {test, expect} from '@playwright/test';
//const {NavigateTo} = require("../../Support/PageObjects/navigationPage");
import {NavigateTo} from '../Support/PageObjects/navigationPage';

test('TC_001_Login_verify_that_application_URL_is_working_and_redirecting_user_on_login_page', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await NavigateTo.visitBaseUrl(page);


});