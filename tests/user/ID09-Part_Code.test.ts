import { BrowserContext, Page, chromium } from "playwright";

import test, { expect } from "@fixtures/basePages"
const path = require('path');
import testData from "@testData/testData";
import LoginPage from "@pages/Login.page";
import ENV from "@utils/env";
import newProjectPage from "@pages/NewProject.page";
import {deleteFolderRecursive} from "../setup/removeFolder";
import metaMaskPage from "@pages/metamask.page";
ENV

test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Add Part With Code', async ({ page }) => {
        /*
          This test case verifies that an error message is displayed successfully when an admin tries to add a configuration without inputting any data.
          It involves the following steps:
          - Logging in as an admin.
          - Navigating to the Trivia section.
          - Attempting to stop the default game if it is live.
          - Accessing the control panel of the default game.
          - Verifying the presence of the "Configurations" text.
          - Attempting to add a new configuration by clicking the plus button.
          - Verifying the presence of the "New Configuration" text.
          - Attempting to add the configuration without inputting any data.
          - Verifying that the appropriate error message is displayed.
          - Cancelling the configuration addition process.
        */
        // Code to simulate the steps above would go here

        /*
          This test case validates that the minimum characters validation functionality works properly when adding a new configuration.
          It involves the following steps:
          - Logging in as an admin.
          - Navigating to the Trivia section.
          - Accessing the game settings section of the default game.
          - Verifying various UI elements and functionalities related to adding a new configuration, ensuring that the minimum characters requirement is enforced.
        */
        // Code to simulate the steps above would go here

        // await page.goto(ENV.BASE_URL, { waitUntil: "domcontentloaded" })
        //
        //   await loginPage.clickOnCookiesCheckBox()
        //   await loginPage.clickOnApproveBtn()
        //   await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PASSWORD)
        //   await page.waitForLoadState("networkidle")
        //
        //





        await page.goto(ENV.BASE_URL+ "/user/dashboard/code/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })
        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(page)
        const metaMask = new metaMaskPage(pages[1])
        const newProjectPages = new newProjectPage(page)

        // await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })

        // await metaMask.metaMaskUnlockHelper()


        await test.step("Part Create With Code | Add Part Section", async () => {

                await newProjectPages.inputCodeBlockName()
                await newProjectPages.clickOnColorSection()
                await newProjectPages.clickOnCatagorySection()
                await newProjectPages.clickToSelectCodeCatagory()
                await newProjectPages.clickOnPartNextStepBtn()

        })

        await test.step("Add New Part With CodePart Create With Code | Block Parameters Section", async () => {
                await newProjectPages.checkValueInput()
                await newProjectPages.inputVariableName()
                await newProjectPages.checkPreviousConnector()
                await newProjectPages.checkNextConnector()
                await newProjectPages.checkIsOutput()
                await newProjectPages.checkInputInline()
                await newProjectPages.checkStatementInput()
                await newProjectPages.checkAppendValueInput()
                await newProjectPages.input2VariableName()
                await newProjectPages.clickOnPartNextStepBtn()

        })

        await test.step("Add New Part With CodePart Create With Code | General Section", async () => {
                await newProjectPages.inputCodePartName()
                await newProjectPages.inputCodePartDescription()
                await newProjectPages.clickOnCatagorySection()
                await newProjectPages.clickToSelectCodeCatagory()
                await newProjectPages.clickOnShowOnCustomizeCheckBox()
                await newProjectPages.clickOnGeneralSectionNextStepBtn()

        })


        //Choose Block Chain Mint
        await newProjectPages.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPages.clickToChooseProjectCollections()
        //select collection
        await newProjectPages.clickToChooseProjectCollection("1")

        //input Part Privet Price
        await newProjectPages.inputPartPrivetPrice()

        //input Commarcial Price
        await newProjectPages.inputCommarcialPrice()
        //click on the confirm checkbox
        await newProjectPages.clickOnTheConfirmCheckBox()
        //click on the next step button
        await newProjectPages.clickOnGeneralSectionNextStepBtn()


        await newProjectPages.clickOnConnectWalletBtn()

        await newProjectPages.clickOnMetaMaskBtn()


        await metaMask.metaMaskUnlock()

        await newProjectPages.clickOnContinueButton()
        await page.waitForLoadState("load")

        //Click On Agree Btn
        await newProjectPages.clickOnAGreeBtn()
        await page.waitForLoadState("load")

        // await newProjectPages.clickOnAddNewPartBtn()



});

