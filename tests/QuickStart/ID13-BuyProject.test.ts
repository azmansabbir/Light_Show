import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";



test('ID-Buy Project-001 | User |  Validate User Can Successfully Buy A Project', async ({ page }) => {

        await page.goto("/nft-market", { timeout: 1200000, waitUntil: "domcontentloaded" })
        // await page.waitForNavigation()

        const pages = page.context().pages()
        console.log(pages.length);

        const newProjectPages = new newProjectPage(pages[1])
        const metaMask = new metaMaskPage(pages[2])

        // await page.pause()
        await test.step("Unlock MetaMask", async () => {
                await metaMask.metaMaskUnlockHelper()
                // await metaMask.inputUnlockPassword()
                // await metaMask.clickOnUnlockBtn()
        })
        await page.bringToFront()


        await newProjectPages.clickTakeATourStartBtn()
        await newProjectPages.clickTakeATourSkipBtn()

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
        await metaMask.clickToConfirmUnApproveLisiting()








});




