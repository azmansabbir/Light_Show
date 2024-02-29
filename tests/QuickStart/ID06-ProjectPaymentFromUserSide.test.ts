import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";




test('ID-001 | User | Validate Manufacture Logout Functionality', async ({ page }) => {

        await page.goto("/service-provider/dashboard", { timeout: 1200000, waitUntil: "domcontentloaded" })


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




        await newProjectPages.clickOnAvaterBtn()
        await newProjectPages.clickOnLogoutBtn()
        await newProjectPages.clickOnHomePageLogo()


        // //click to my project section
        // await newProjectPages.clickOnMyProjectPage()



});

test('ID-002 | Manufacture | Validate User Login Functionality', async ({ page }) => {

        await page.goto("/", { timeout: 1200000, waitUntil: "domcontentloaded" });
        // await page.goto("/", { timeout: 100000 })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(pages[1])

        const metaMask = new metaMaskPage(pages[2])

        // await page.pause()
        await test.step("Unlock MetaMask", async () => {
                await metaMask.metaMaskUnlockHelper()
                // await metaMask.inputUnlockPassword()
                // await metaMask.clickOnUnlockBtn()
        })
        await page.bringToFront()

        await loginPage.login(data.email, data.password)
        // await loginPage.clickOnStartProjectBtn()
        // await loginPage.clickOnNewProjectByYourselftBtn()
        await page.waitForTimeout(8000)
        await loginPage.clickOnHomeLogo()

        await page.goto("/user/dashboard/project/create/", { timeout: 1200000, waitUntil: "domcontentloaded" })

        await loginPage.clickOnWalletBtn()





        // await page.pause()




});


