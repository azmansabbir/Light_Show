import { chromium, FullConfig } from "@playwright/test";
// import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import * as data from "@testData/login.cred.json";
async function globalSetup(config: FullConfig) {


        const loginPage = new LoginPage(page)
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto("/")
        await loginPage.login(data.email, data.password)
        // Save signed-in state to ‘storageState.json’.
        await page.context().storageState({ path: "storageState.json" });
        await browser.close();
}