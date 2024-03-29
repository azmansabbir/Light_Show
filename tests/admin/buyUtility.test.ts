import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";



test('Buy Utility NFT Functionality', async ({ page, newProjectPage, loginPage }) => {
        // Navigate to the base URL
        // Accept cookies and approve necessary permissions
        // Log in with provided credentials
        // Navigate to the Utility NFT purchase page
        // Initiate the purchase of a Utility NFT


        await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "domcontentloaded" })

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.USERNAME, ENV.PASSWORD)

        await page.goto(ENV.BASE_URL + "/utility-nft/", { timeout: 1200000, waitUntil: "domcontentloaded" })

        await newProjectPage.clickOnUtilityBuyNowBtn()




});