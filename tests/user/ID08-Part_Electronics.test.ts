import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";




test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit 3D Case', async ({ page }) => {
        /*
          This test case verifies that a user can successfully add a part with electronics.
          It involves the following steps:
          - Navigating to the electronics add part section.
          - Verifying the presence of the electronics layer selection.
          - Selecting the electronics layer and proceeding to the configuration section.
          - Configuring the electronics part by selecting the graph type and inputting chart labels and data.
          - Proceeding to the description section and inputting the part name, category, and description.
          - Selecting the visibility of the part as "Public".
          - Customizing the part by selecting the programming language as "JavaScript".
          - Verifying that the part is successfully added.
        */
        /*
          This test case ensures that a user receives an appropriate error message when attempting to add a part without completing all required fields.
          It involves the following steps:
          - Navigating to the electronics add part section.
          - Attempting to proceed without selecting an electronics layer.
          - Verifying that the appropriate error message is displayed.
          - Attempting to proceed without configuring the part completely.
          - Verifying that the appropriate error message is displayed for each required field.
        */



        await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(page)
        const metaMask = new metaMaskPage(pages[0])
        const newProjectPages = new newProjectPage(page)

        await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
        await metaMask.metaMaskUnlockHelper()
        
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





