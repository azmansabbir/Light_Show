import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";





test('ID-003 | User | Validate Sell Project Create ', async ({ page }) => {


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



        //click on project create with sell button
        await newProjectPages.clickOnSellProjectCreateBtn()
        //input project description
        await newProjectPages.inputProjectDescription("Lorem Ipsum is simply dummy text of the printing")
        //click on step one next button
        await newProjectPages.clickStepOneNextBtn()

        //Choose Block Chain Mint
        await newProjectPages.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPages.clickToChooseProjectCollections()
        //select collection
        await newProjectPages.clickToChooseProjectCollection("1")

        //*************here is issue related to listing type selection when user select collection on time then listing type does not enable */
        await newProjectPages.clickToChooseProjectCollections()
        await newProjectPages.clickToChooseProjectCollections()
        //select collection
        await newProjectPages.clickToChooseProjectCollection("3")

        //Click on Choose Collection section
        await newProjectPages.clickToChooseProjectCollections()
        await newProjectPages.clickToChooseProjectCollections()

        //select collection
        await newProjectPages.clickToChooseProjectCollection("1")
        await newProjectPages.clickToChooseProjectCollections()

        //---------------------------------------------------------------

        await newProjectPages.clickStepOneNextBtn()

        await newProjectPages.clickOnPriceTokenSelectionField()
        await newProjectPages.clcikToSelectPriceToken("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

        //click on listing type
        await newProjectPages.clickOnBuyListingType()
        //select listing type
        await newProjectPages.clickToSelectBuyListingType("Buy Now")
        //input price for sell project
        await newProjectPages.inputPriceForSellProject("2")
        //input Royality for sell project
        await newProjectPages.inputRoyalityForSellProject("2")
        //click on next button
        await newProjectPages.clickStepOneNextBtn()
        //input price for sell project
        await newProjectPages.inputProjectStoryForSellProject("Demo Story For Sell Project")
        //uncheck share newsfeed option
        await newProjectPages.clickToDisableNewsFeedShare()
        //click on confirm additional option
        await newProjectPages.clickConfirmAdditional()
        //confirm right owner option
        await newProjectPages.clickConfirmRightOwner()
        //click on pay and mint button
        await newProjectPages.clickOnPayAndMintBtn()
        //click on mint button
        await newProjectPages.clickOnMintBtn()
        //click on Connect Wallet Button
        await newProjectPages.clickOnConnectWalletBtn()
        //click on Metamask Button
        await newProjectPages.clickOnMetaMaskBtn()
        //click On contineu button
        await newProjectPages.clickOnContinueButton()
        //  await page.pause()




        // await newProjectPages.clickOnCheckOutBtn()


        // await newProjectPages.clickOnPaypalSectionConfirmCheckBox()


        // const newTab = await test.step("New Tab", async () => {
        //         return await newProjectPages.clickOnPayWithPaypalBtn()
        // })

        // await test.step("New Tab", async () => {
        //         const payPalPage = new LoginPage(newTab)
        //         await payPalPage.inputPayPalCredentials("XN=EWv1/", "payer-wauya15573283@personal.example.com")
        //         // await payPalPage.clickOnPayPalLoginBtn()
        //         await payPalPage.clickOnPaypalPaymentConfirmBtn()

        // })

        // await newProjectPages.clickOnMyProjectPage()

        test.setTimeout(1200000)
        // await page.pause()


});


// });
