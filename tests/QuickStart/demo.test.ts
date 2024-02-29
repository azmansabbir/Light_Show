import test from "playwright/test";

const getNumber = Math.floor(Math.random() * 10)
test.only('', async ({page }) => {
        await await page.goto('/');

})