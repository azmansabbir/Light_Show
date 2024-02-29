import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";


test('ID-001 | User | Create Project | Sended For Manufacture |  Validate User Can Successfully Send Project To Manufacture', async ({page}) => {

        await page.goto("/user/dashboard/project/create", { timeout: 1200000, waitUntil: "domcontentloaded" })


        const pages = page.context().pages()
        console.log(pages.length);

        //     await pages[0].close()

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


        await newProjectPages.clickTakeATourStartBtn()
        await newProjectPages.clickTakeATourSkipBtn()

        await newProjectPages.clickAddPartsOrComponentsSearchIcon()
        // //search parts and components
        // await newProjectPages.searchPartsAndComponents(" ")
        //click to select atmega search result for parts and components
        await newProjectPages.clickOnQAElectronicsPartsComponent()


        //click on the atmega public option to select a parts
        await newProjectPages.clickOnAtmegaPublicOption()
        //click atmega first parts
        await newProjectPages.clickOnPremiumPart()
        //click parts use button
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
        //search parts and components
        await newProjectPages.searchCodePartsAndComponents("System Defined")
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
        await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
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
        await newProjectPages.projecTypeSaveBtn()

        //click to choose project
        await newProjectPages.clickChooseProjectBtn("CREATE NEW")
        //Input Name Of the Project
        await newProjectPages.inputNameOfProject("Demo Project For Manufacture")

        // //choose Project License
        // await newProjectPages.clickToChooseLicense()
        // //click to select mit license
        // await newProjectPages.clickToSelectMITLicense()

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
        // await newProjectPage.clickVideoEditBtn()
        // //Click On Video Edit Section Save Button ***Video Editor Does Not Work Properly***
        // await newProjectPage.clickVideoEditSectionSaveBtn()
        // //click on video editor close btn
        // await newProjectPage.clickToCloseVideoEditor()

        //Click To Disable New Feed Share
        await newProjectPages.clickToDisableNewsFeedShare()
        //Click On Confirm Check Box
        await newProjectPages.clickToConfirmConditionCheckBox()
        //Click save brn
        await newProjectPages.projectSaveBtn()
        //click on connect wallet button

        await newProjectPages.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPages.clickOnMetaMaskBtn()


        await newProjectPages.clickOnContinueButton()
        await page.waitForLoadState("load")



        //for new changes----------------------------------------------------
        // await newProjectPages.clickOnContinueButton()
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

        await newProjectPages.clickOnProjectThreeDotBtn()
        await newProjectPages.clickToSendProjectToManufacture()

        //click to my project section
        await newProjectPages.clickOnMyProjectPage()



});

test('ID-002 | User | Validate User Can Successfully Send Project To Manufacture', async ({page}) => {

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



});

test('ID-003 | User | Validate User Logout Functionality', async ({page}) => {

        await page.goto("/user/dashboard/", { timeout: 1200000, waitUntil: "domcontentloaded" })


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

test('ID-004 | Manufacture | Validate Manufacture Login Functionality', async ({page}) => {

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

test('ID-005 | Manufacture | Validate Manufacture Successfully Accept User Sended Project', async ({page}) => {

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

test('ID-006 | User | Validate Manufacture Logout Functionality', async ({page}) => {

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

test('ID-007 | Manufacture | Validate User Login Functionality', async ({page}) => {

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



