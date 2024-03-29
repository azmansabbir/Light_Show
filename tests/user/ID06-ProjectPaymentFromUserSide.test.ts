import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";




test('ID-001 | User | Validate Manufacture Logout Functionality', async ({ page }) => {
        /*
          This test case verifies that a user can successfully make a payment for a project from their side.
          It involves the following steps:
          - Logging in as a user.
          - Navigating to the user dashboard.
          - Selecting a project to make a payment for.
          - Initiating the payment process.
          - Selecting the payment method.
          - Confirming the payment details.
          - Completing the payment process.
          - Verifying that the payment status is updated to "Paid".
        */
        /*
          This test case ensures that a user receives an appropriate error message when attempting to make a payment with insufficient funds.
          It involves the following steps:
          - Logging in as a user.
          - Navigating to the user dashboard.
          - Selecting a project to make a payment for.
          - Initiating the payment process.
          - Selecting the payment method.
          - Confirming the payment details with insufficient funds.
          - Verifying that the appropriate error message is displayed.
          - Cancelling the payment process.
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

test('ID-002 | Manufacture | Validate User Login Functionality', async ({ page }) => {


    await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

    const pages = page.context().pages()
    console.log(pages.length);

    const loginPage = new LoginPage(page)
    const metaMask = new metaMaskPage(pages[0])
    const newProjectPages = new newProjectPage(page)

    await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
    await metaMask.metaMaskUnlockHelper()

        await loginPage.clickOnHomeLogo()

        await page.goto(ENV.BASE_URL+"/user/dashboard/project/create/", { waitUntil: "domcontentloaded" })
       

        await loginPage.clickOnWalletBtn()





        // await page.pause()




});


