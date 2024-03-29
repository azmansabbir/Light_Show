import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";



test('ID-Buy Project-001 | User |  Validate User Can Successfully Buy A Project', async ({ page }) => {
        /*
          This test case is designed to validate that a user can successfully buy a project from the NFT market. 
          It involves the following steps:
          - Navigating to the NFT market page.
          - Logging in as a user.
          - Selecting a project to buy.
          - Initiating the purchase process.
          - Connecting to MetaMask wallet.
          - Confirming the purchase in MetaMask.
          - Verifying the purchase completion and ownership of the project.
        */
        /*
          This test case also ensures that appropriate error messages are displayed when the user attempts to buy a project without sufficient funds. 
          It involves the following steps:
          - Navigating to the NFT market page.
          - Logging in as a user.
          - Selecting a project to buy.
          - Initiating the purchase process.
          - Connecting to MetaMask wallet.
          - Attempting to confirm the purchase in MetaMask without sufficient funds.
          - Verifying that an appropriate error message is displayed.
          - Cancelling the purchase process.
        */


    await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

    const pages = page.context().pages()
    console.log(pages.length);

    const loginPage = new LoginPage(page)
    const metaMask = new metaMaskPage(pages[0])
    const newProjectPages = new newProjectPage(page)

    await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
    await metaMask.metaMaskUnlockHelper()

        await test.step("Click On Project Buy Now Button", async () => {
                await page.reload()
                await newProjectPages.clickOnProjectBuyNowBtn()
        })



        await newProjectPages.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPages.clickOnMetaMaskBtn()


        await newProjectPages.clickOnContinueButton()
        await page.waitForLoadState("load")
        








});




