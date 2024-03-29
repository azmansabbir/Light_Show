import { test as setup, expect } from "@playwright/test";
import LoginPage from "@pages/Login.page";
import * as data from "@testData/login.cred.json";

const userOne = ".auth/user1.json"
const userTwo = ".auth/user2.json"


setup('User One', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await page.goto("/")
        await loginPage.login(data.email, data.password)
        await loginPage.clickOnDashboardBtns()

        await page.context().storageState({ path: userOne });
});

// setup('User Two', async ({ page }) => {
//         const loginPage = new LoginPage(page)
//         await page.goto("/")
//         await loginPage.login(data.email, data.password)


//         await page.context().storageState({ path: userTwo });
// });