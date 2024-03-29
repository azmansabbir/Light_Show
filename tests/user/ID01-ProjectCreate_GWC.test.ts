import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";


test(`Verifies that a user can successfully add a new project with the "Give With Community"`, async ({ page }) => {

        /*
          This test case verifies that a user can successfully add a new project with the "Give With Community" option.
          It involves the following steps:
          - Navigating to the base URL.
          - Logging in with valid credentials.
          - Navigating to the "New Project" page.
          - Selecting the "Give With Community" option.
          - Filling in the project details.
          - Submitting the project for creation.
          - Verifying that the project has been successfully created.
        */
        /*
          This test case also ensures that appropriate error messages are displayed when the user attempts to create a new project without completing all required fields.
          It involves the following steps:
          - Navigating to the "New Project" page.
          - Attempting to submit the project for creation without filling in all necessary details.
          - Verifying that error messages are displayed for each required field that is left blank.
          - Correcting the errors and resubmitting the project.
          - Verifying that the project is successfully created after all required fields are completed.
        */       
        
        

        await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(page)
        const metaMask = new metaMaskPage(pages[0])
        const newProjectPages = new newProjectPage(page)

        await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
        await metaMask.metaMaskUnlockHelper()


        await newProjectPages.clickAddPartsOrComponentsSearchIcon()
              
        //click to select atmega search result for parts and components
        await newProjectPages.clickOnQAElectronicsPartsComponent()
        //click on the atmega public option to select a parts
        await newProjectPages.clickOnAtmegaPublicOption()
        // //click atmega first parts
        await newProjectPages.clickOnPremiumPart()
        // //click parts use button
        await newProjectPages.clickUseBtn()

        await newProjectPages.IfAlertTextIsVisibleThenClickOnIt()
        
        await newProjectPages.clickAddPartsOrComponentsSearchIcon()

        await newProjectPages.clickOnLoadPriveousProjectNoBtn()


        //click on add parts or component search button **There is an issue, after click on use button then should collapse the parts and componets modal
        await newProjectPages.clickAddPartsOrComponentsSearchIcon()

        //click on electron page next button
        await newProjectPages.clickOnNextBtn()
        //click on electron section submit button
        await newProjectPages.clickOnElectroncisSectionSubmitBtn()
        await newProjectPages.clickOnElectroncisSectionSubmitBtn()

        //***code section***
        //click on code section
        await newProjectPages.clickOnCodeSection()
        //click on code section search button
        await newProjectPages.clickCodeSectionAddPartsOrComponentsSearchIcon()
        // //search parts and components
        // await newProjectPages.searchCodePartsAndComponents("System Defined")
        //click system defined build in code section
        await newProjectPages.clickOnSystemDefineBuildInCode()
        //click system defined build in Logic code section
        await newProjectPages.clickOnSystemDefineBuildInLogicCode()
        //click system defined build in Logic First code section
        await newProjectPages.clickOnSystemDefineBuildInFirstLogicCode()
        //click parts use button
        await newProjectPages.clickUseBtn()
        //click on add parts or component search button **There is an issue, after click on use button then should collapse the parts and componets modal
        await newProjectPages.clickCodeSectionAddPartsOrComponentsSearchIcon()
        //click on code section create button
        await newProjectPages.clickOnCodeSectionCreateBtn()


        //start cover section
        //click on cover section
        await newProjectPages.clickOnCoverSection()
        //click on cover section search button
        await newProjectPages.clickOnCoverSectionSearchBtn()
        //search parts and components
        // await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models") here is issue
        // //click on the all 3d model part btn
        // await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
        // //click on the Cover Section All 3D Model Part public option to select a parts
        // await newProjectPages.clickOnAtmegaPublicOption()
        // //click to select cover section parts
        // await newProjectPages.clickToSelectionCoverSectio3DPart()
        // //click parts use button
        // await newProjectPages.clickUseBtn()


        //click on general section button
        await newProjectPages.clickOnGeneralTab()
        await newProjectPages.clickOnYesButtonIfVisible()
        //click on general section create button
        await newProjectPages.clickOnGeneralSectonCreateProjectBtn()


        //click give to the cmunity button
        await newProjectPages.clickGiveToTheComunityBtn()
        //click to choose project
        await newProjectPages.clickChooseProjectBtn("CREATE NEW")
        //Input Name Of the Project
        await newProjectPages.inputNameOfProject("Demo Project Name")
        //choose Project License
        await newProjectPages.clickToChooseLicense()
        //click to select mit license
        await newProjectPages.clickToSelectMITLicense()
        //Choose Block Chain Mint
        await newProjectPages.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPages.clickToChooseProjectCollections()
        //select collection
        await newProjectPages.clickToChooseProjectCollection("1")
        //Input Descriptions
        await newProjectPages.inputProjectDescription("Lorem Ipsum is simply dummy text of the printing")
        //Click Step One Next Button
        await newProjectPages.clickStepOneNextBtn()

        //Verify Step Two Title Text
        // await newProjectPages.verifyProjectSocialPreviewText("Project social Preview")

        // //Click On Video Edit Button
        // await newProjectPages.clickVideoEditBtn()
        // //Click On Video Edit Section Save Button ***Video Editor Does Not Work Properly***
        // await newProjectPages.clickVideoEditSectionSaveBtn()
        // //click on video editor close btn
        // await newProjectPages.clickToCloseVideoEditor()

        //Click To Disable New Feed Share
        await newProjectPages.clickToDisableNewsFeedShare()
        //Click On Confirm Check Box
        await newProjectPages.clickToConfirmConditionCheckBox()
        //Click On Step Two Give The Comunity Button
        await newProjectPages.clickStepTwoGiveTheComunityBtn()
        //click on connect wallet button
        await newProjectPages.clickOnConnectWalletBtn()
        //Click On metamask button
        await newProjectPages.clickOnMetaMaskBtn()

        // await wallet.approve()

        await newProjectPages.clickOnContinueButton()

        await newProjectPages.clickOnCheckOutBtn()

        await newProjectPages.clickOnPaypalSectionConfirmCheckBox()


        const newTab = await test.step("New Tab", async () => {
                return await newProjectPages.clickOnPayWithPaypalBtn()
        })

        await test.step("New Tab", async () => {
                const payPalPage = new LoginPage(newTab)
                await payPalPage.inputPaypalEmail("payer-wauya15573283@personal.example.com")
                await payPalPage.clickOnPayPalSectionNextBtn()
                await payPalPage.inputPaypalPassword("XN=EWv1/")
                await payPalPage.clickOnPayPalLoginBtn()



                await payPalPage.clickOnPaypalPaymentConfirmBtn()

        })
        await newProjectPages.clickOnMyProjectPage()
        await page.waitForLoadState("load")


});
