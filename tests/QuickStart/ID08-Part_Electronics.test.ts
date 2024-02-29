import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";




test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit 3D Case', async ({ page }) => {

        await page.goto("/user/dashboard/electronics/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })

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

        await test.step("Add New Part With Electronics", async () => {

                await newProjectPages.clickOnEletronicsLayer()
                await newProjectPages.clickToSelectPublicPackage()
                await newProjectPages.clickOnConfigarationSectionNextBtn()
                await newProjectPages.clickOnChartConfigration()
                await newProjectPages.clickToSelectGraphType()
                // await newProjectPages.clickNextBtn()

                await newProjectPages.inputXChartLabel()
                await newProjectPages.inputYChartLabel()
                await newProjectPages.inputCatagoryData()
                await newProjectPages.inputParcentageData()
                await newProjectPages.clickElectronicsSectionNextBtn()
                await newProjectPages.codeSectionNextBtn()

                await newProjectPages.inputPartNameForAddedPart()
                await newProjectPages.clickOnElectronicsCatagorySelectionField()
                await newProjectPages.clickToSelectElectronicsCatagory()
                await newProjectPages.inputFreeStyleCatagory()
                await newProjectPages.clickToSelectPublicType("Public")
                await newProjectPages.inpuDesctiption()


                // await newProjectPages.clickToAttachDataSheet()

                await newProjectPages.clickOnCustomizeCheckBox()
                await newProjectPages.clickToOpenLanguageTypeSelectOption("JavaScript")

                // await newProjectPages.jsonFileUploadHelper()
                // await newProjectPages.tsFileUploadHelper()
                await newProjectPages.clickToUPloadLanguage()
                await newProjectPages.clickToSubmitElectronicsPart()







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
        await newProjectPages.clickOnFinishBtn()


        await newProjectPages.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPages.clickOnMetaMaskBtn()


        await newProjectPages.clickOnContinueButton()
        await page.waitForLoadState("load")

        //click on the next step button
        await newProjectPages.clickOnFinishBtn()

        //Click On Agree Btn
        await newProjectPages.clickOnAGreeBtn()
        await page.waitForLoadState("load")

        //click on the next step button
        await newProjectPages.clickOnAddNewPartBtn()



});





