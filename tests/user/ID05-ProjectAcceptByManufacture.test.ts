import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";



test('ID-003 | User | Validate User Logout Functionality', async ({ page }) => {
        /*
          This test case verifies that a manufacturer can successfully accept a project sent by a user.
          It involves the following steps:
          - Logging in as a manufacturer.
          - Navigating to the manufacturer dashboard.
          - Accessing the projects section to view received projects.
          - Selecting a project sent by a user.
          - Verifying the project details and requirements.
          - Accepting the project for manufacture.
          - Verifying that the project status is updated to "Accepted".
        */
        /*
          This test case ensures that a manufacturer can reject a project if it doesn't meet their criteria.
          It involves the following steps:
          - Logging in as a manufacturer.
          - Navigating to the manufacturer dashboard.
          - Accessing the projects section to view received projects.
          - Selecting a project sent by a user.
          - Reviewing the project details and requirements.
          - Rejecting the project with a reason for rejection.
          - Verifying that the project status is updated to "Rejected" and the reason for rejection is recorded.
        */



        await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(page)
        const metaMask = new metaMaskPage(pages[0])
        const newProjectPages = new newProjectPage(page)

        await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
        await metaMask.metaMaskUnlockHelper()



        await newProjectPages.clickOnAvaterBtn()
        await newProjectPages.clickOnLogoutBtn()
        await newProjectPages.clickOnHomePageLogo()


        // //click to my project section
        // await newProjectPages.clickOnMyProjectPage()



});

test('ID-004 | Manufacture | Validate Manufacture Login Functionality', async ({ page }) => {

        await page.goto("/", { timeout: 1200000, waitUntil: "domcontentloaded" });
        // await page.goto("/", { timeout: 100000 })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(pages[1])

        const metaMask = new metaMaskPage(pages[2])

        // await page.pause()
        await test.step("Unlock MetaMask", async () => {
                await metaMask.metaMaskUnlockHelper()

        })
        await page.bringToFront()

        await loginPage.login(data.manufactureEmail, data.manufacturePassword)

        await page.waitForTimeout(8000)
        await loginPage.clickOnHomeLogo()





});

test('ID-005 | Manufacture | Validate Manufacture Successfully Accept User Sended Project', async ({ page }) => {

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

        // await newProjectPages.clickOnAvaterBtn()
        // await newProjectPages.clickOnLogoutBtn()

        await newProjectPages.clickOnMenufecturedProject()
        await newProjectPages.clickOnSeeOfferBtn()
        await newProjectPages.clickOnDatePickerBtn()
        await newProjectPages.clickOnNextMonthBtn()
        await newProjectPages.clickToSelectDate()
        await newProjectPages.clickOnAcceptAgrimentCheckBox()
        await newProjectPages.clickOnAcceptOfferBtn()




        // //click to my project section
        // await newProjectPages.clickOnMyProjectPage()



});



