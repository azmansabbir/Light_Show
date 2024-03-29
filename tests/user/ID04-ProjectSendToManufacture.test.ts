import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";


test('ID-024 | User | Validate User Can Successfully Send Project To Manufacture', async ({ page }) => {
        // Title: Project Sending to Manufacture Workflow
        // Step 1: Navigate to the user's cart with a specified timeout and wait until the DOM content is fully loaded
        // Step 2: Initialize instances for the new project page and MetaMask page using the current page context
        // Step 3: Print the number of pages in the current context to the console
        // Step 4: Configure the page by initializing new project and MetaMask page objects with the appropriate pages
        // Step 5: Unlock MetaMask using the helper function provided by the MetaMask page object
        // Step 6: Bring the main test page to the front to continue with the test
        // Step 7: Click on the three dots on the project table to open the project options
        // Step 8: Click on the "Choose and Edit Manufacture" button to select a manufacture for the project
        // Step 9: Click to select a manufacture from the list
        // Step 10: Click to expand the selected manufacture's panel for more options
        // Step 11: Click on the "Send Offer to Manufacture" button to send the project to the selected manufacture



        await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(page)
        const metaMask = new metaMaskPage(pages[0])
        const newProjectPages = new newProjectPage(page)

        await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
        await metaMask.metaMaskUnlockHelper()


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


