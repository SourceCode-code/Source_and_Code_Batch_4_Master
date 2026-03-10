const {test,expect}=require("@playwright/test")




test('dynamic date picker', async ({ page }) => {

  await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/');

  await page.locator('button[class="icon"]').click()
  await page.waitForTimeout(2000)

  let date = "14";
  let month = "July";
  let year = 2032;

  // Create target date dynamically
  const targetDate = new Date(`${month} ${date}, ${year}`);


  while (true) {

    const headerText = await page.locator('.datepicker-dialog h2').textContent();
    const currentDate = new Date(headerText);

    if (currentDate.getFullYear() === targetDate.getFullYear() &&
        currentDate.getMonth() === targetDate.getMonth()) {
      break; // Correct month reached
    }

    if (currentDate < targetDate) {
      await page.getByRole('button', { name: 'Next Month' }).click();
    } else {
      await page.getByRole('button', { name: 'Previous Month' }).click();
    }
  }

  // Click the date
  await page.locator('[class="dates"] tbody td', { hasText: `${date}` }).click();
  const formattedDate = `${targetDate.getMonth() + 1}/${date}/${targetDate.getFullYear()}`;

  console.log(formattedDate);
  await expect(page.locator('[id="id-textbox-1"]')).toHaveValue(formattedDate)

});
