import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";


test('ID-024 | User | Validate User Can Successfully Send Project To Manufacture', async ({ page }) => {

        await page.goto("/user/cart/", { timeout: 1200000, waitUntil: "domcontentloaded" })


        const pages = page.context().pages()
        console.log(pages.length);

        //page configaration here
        const newProjectPages = new newProjectPage(pages[1])
        const metaMask = new metaMaskPage(pages[2])

        // await page.pause()
        await test.step("Unlock MetaMask", async () => {
                await metaMask.metaMaskUnlockHelper()
                // await metaMask.inputUnlockPassword()
                // await metaMask.clickOnUnlockBtn()
        })
        await page.bringToFront()




        await newProjectPages.clickOnSendedProjectThreeDotOnTable()
        await newProjectPages.clickOnChoseAndEditManufactureBtn()
        await newProjectPages.clickToSelectManufacture()
        await newProjectPages.clickToExpandSelectedManufacturePanel()
        await newProjectPages.clickOnSendOfferToManufacture()

        // await newProjectPages.clickOnAvaterBtn()
        // await newProjectPages.clickOnLogoutBtn()


        // //click to my project section
        // await newProjectPages.clickOnMyProjectPage()



})


