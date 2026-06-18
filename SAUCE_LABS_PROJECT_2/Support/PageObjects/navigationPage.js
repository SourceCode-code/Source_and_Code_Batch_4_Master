class navigationPage {

    async visitBaseUrl(page) {

        await page.goto('/');

    }
}
export const NavigateTo = new navigationPage();