import { BrowserContext, Page, chromium } from "playwright";

import test, { expect } from "@fixtures/basePages"
const path = require('path');
import newProjectPage from "@pages/NewProject.page";
import testData from "@testData/testData";
import metaMaskPage from "@pages/metamask.page";
import LoginPage from "@pages/Login.page";
import ENV from "@utils/env";
ENV






test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit Code', async ({ page, loginPage, newProjectPage, metaMaskPage }) => {

        // await page.goto("/user/dashboard/code/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })
        await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "domcontentloaded" })


        // const pages = page.context().pages()
        // console.log(pages.length);

        // // const newProjectPages = new newProjectPage(pages[1])
        // // const metaMask = new metaMaskPage(pages[2])

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.USERNAME, ENV.ADMINPASSWORD)
        await page.waitForLoadState("networkidle")

        // // await page.pause()
        // await test.step("Unlock MetaMask", async () => {
        //         await metaMask.metaMaskUnlockHelper()
        //         // await metaMask.inputUnlockPassword()
        //         // await metaMask.clickOnUnlockBtn()
        // })
        // await page.bringToFront()


        await newProjectPage.clickTakeATourStartBtn()
        await newProjectPage.clickTakeATourSkipBtn()

        await page.goto(ENV.BASE_URL+ "/user/dashboard/code/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })
        await test.step("Part Create With Code | Add Part Section", async () => {

                await newProjectPage.inputCodeBlockName()
                await newProjectPage.clickOnColorSection()
                await newProjectPage.clickOnCatagorySection()
                await newProjectPage.clickToSelectCodeCatagory()
                await newProjectPage.clickOnPartNextStepBtn()

        })

        await test.step("Add New Part With CodePart Create With Code | Block Parameters Section", async () => {

                await newProjectPage.checkValueInput()
                await newProjectPage.inputVariableName()
                await newProjectPage.checkPreviousConnector()
                await newProjectPage.checkNextConnector()
                await newProjectPage.checkIsOutput()
                await newProjectPage.checkInputInline()
                await newProjectPage.checkStatementInput()
                await newProjectPage.checkAppendValueInput()
                await newProjectPage.input2VariableName()
                await newProjectPage.clickOnPartNextStepBtn()

        })

        await test.step("Add New Part With CodePart Create With Code | General Section", async () => {

                await newProjectPage.inputCodePartName()
                await newProjectPage.inputCodePartDescription()
                await newProjectPage.clickOnCatagorySection()
                await newProjectPage.clickToSelectCodeCatagory()
                await newProjectPage.clickOnShowOnCustomizeCheckBox()
                await newProjectPage.clickOnGeneralSectionNextStepBtn()

        })


        //Choose Block Chain Mint
        await newProjectPage.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPage.clickToChooseProjectCollections()
        //select collection
        await newProjectPage.clickToChooseProjectCollection("1")

        //input Part Privet Price
        await newProjectPage.inputPartPrivetPrice()

        //input Commarcial Price
        await newProjectPage.inputCommarcialPrice()
        //click on the confirm checkbox
        await newProjectPage.clickOnTheConfirmCheckBox()
        //click on the next step button
        await newProjectPage.clickOnGeneralSectionNextStepBtn()


        await newProjectPage.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPage.clickOnMetaMaskBtn()
        await page.waitForLoadState("networkidle")
        await newProjectPage.approveMetaMask()

        await newProjectPage.clickOnContinueButton()
        await page.waitForLoadState("load")

        //Click On Agree Btn
        await newProjectPage.clickOnAGreeBtn()
        await page.waitForLoadState("load")

        await newProjectPage.clickOnAddNewPartBtn()



});

