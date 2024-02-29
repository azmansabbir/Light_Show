import { BrowserContext, Page, chromium } from "playwright";
import * as data from "@testData/login.cred.json";
import { test } from "@playwright/test";
const path = require('path');
import newProjectPage from "@pages/NewProject.page";
import testData from "@testData/testData";
import metaMaskPage from "@pages/metamask.page";
import LoginPage from "@pages/Login.page";
// `--use-file-for-fake-video-capture=${__dirname}/testData/videos/mobile.y4m`
test.describe('User | Quick Start | New Project', () => {
  let context: BrowserContext;
  let page: Page;
  const pathToExtension = path.join(__dirname, '/MyMetamaskExtension');
  const userDirData = path.join(__dirname, '/tests/QuickStart/User-Data-Dir/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.35.1_0');
  test.beforeAll(async () => {
    context = await chromium.launchPersistentContext(userDirData, {
      headless: false,
      channel: 'chrome',
      baseURL: "https://frontdev.ideeza.com/",
      viewport: { width: 1700, height: 920 },
      timeout: 1 * 30 * 40000,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        // `--disable-extensions-except=${path.join(__dirname, '/MyMetamaskExtension')}`,
        // `--load-extension=${path.join(__dirname, '/MyMetamaskExtension')}`,
      ],
    });
    page = await context.newPage();
    test.setTimeout(120000)
    // const newProjectPages = new newProjectPage(page)

  });


  test.skip('ID-000 | Setup MetaMask Account And Login User', async () => {
    page.on("pageerror", (error) => {
      console.error("Page error:", error);
    });

    await page.goto("/", { timeout: 1200000, waitUntil: "domcontentloaded" });
    // await page.goto("/", { timeout: 100000 })

    const pages = page.context().pages()
    console.log(pages.length);

    const loginPage = new LoginPage(pages[1])


    const metaMask = new metaMaskPage(pages[2])

    await metaMask.clickTermsAndConditionCheckBox()
    await metaMask.clickOnCreateWalletBtn()
    await metaMask.clickOnIAgreeBtn()

    await metaMask.inputNewPassword()
    await metaMask.inputConfirmPassword()
    await metaMask.clickOnCreatePasswordConfirmCheckBox()
    await metaMask.clickOnCreateNewWalletBtn()

    await metaMask.clickOnRemindeMeLateBtn()
    await metaMask.clickSkipAccountSecurityCheckBox()
    await metaMask.clickOnSkipAccountSecutrityBtn()

    await metaMask.clickOnGotItBtn()
    await metaMask.clickOnNextBtn()
    await metaMask.clickOnDoneBtn()
    await metaMask.clickOnPopupCloseBtn()

    await metaMask.clickAddedNetworkSection()
    await metaMask.clickAddNetworkBtn()
    await metaMask.clickAddNetworkManuallyBtn()
    await metaMask.inputAddNetworkName()
    await metaMask.inputAddNetworkUrl()
    await metaMask.inputAddNetworkChainId()
    await metaMask.inputAddNetworkCurrentSymbol()
    await metaMask.clickOnSaveBtn()
    await metaMask.clickOnSwitchToPoligonTestNet()
    await metaMask.clickOnGotItBtnOnAddNetwork()

    await metaMask.clickOnAccountSelectionOpenBtn()
    await metaMask.clickOnImportAccountBtn()
    await metaMask.inputAccountKay()
    await metaMask.clickOnImportBtn()

    await page.bringToFront()
    await loginPage.clickOnCookiesCheckBox()
    await loginPage.clickOnApproveBtn()
    await loginPage.login(data.email, data.password)
    // await loginPage.clickOnStartProjectBtn()
    // await loginPage.clickOnNewProjectByYourselftBtn()
    await page.waitForTimeout(8000)
    await page.goto("/user/dashboard/project/create/", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await loginPage.clickTakeATourStartBtn()
    await loginPage.clickTakeATourSkipBtn()

    await loginPage.clickOnWalletBtn()



  });

  test('ID-001 | User | Validate Give to Comunity Project Create with premium parts', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

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


    await newProjectPages.clickTakeATourStartBtn()
    await newProjectPages.clickTakeATourSkipBtn()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select atmega search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click atmega first parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()

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
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()


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
    // await newProjectPage.clickVideoEditBtn()
    // //Click On Video Edit Section Save Button ***Video Editor Does Not Work Properly***
    // await newProjectPage.clickVideoEditSectionSaveBtn()
    // //click on video editor close btn
    // await newProjectPage.clickToCloseVideoEditor()

    //Click To Disable New Feed Share
    await newProjectPages.clickToDisableNewsFeedShare()
    //Click On Confirm Check Box
    await newProjectPages.clickToConfirmConditionCheckBox()
    //Click On Step Two Give The Comunity Button
    await newProjectPages.clickStepTwoGiveTheComunityBtn()
    //click on connect wallet button
    await newProjectPages.clickOnConnectWalletBtn()
    //Click On metamask button
    // let newOne = null;
    await newProjectPages.clickOnMetaMaskBtn()
    // await newOne.locator("//div[text()='Next']").click()

    // await pages[3].getByText("Next").click({ force: true })
    // let newTab = null;
    // let newPage = metaMask
    // newTab = await newProjectPages.clickOnMetaMaskBtn()
    // newPage = new metaMaskPage(newTab)


    // await newPage.clickNextBtn()

    await newProjectPages.clickOnContinueButton()
    await page.waitForLoadState("load")
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

      // await payPalPage.inputPayPalCredentials("XN=EWv1/", "payer-wauya15573283@personal.example.com")

      await payPalPage.clickOnPaypalPaymentConfirmBtn()

    })

    await newProjectPages.clickOnMyProjectPage()


    // const newPage = new newProjectPages(newTab)

    // await page.pause();
  });

  test.skip('ID-002 | User | Validate Give to Comunity with premium parts Created Project Successfully Show On My Project Section', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

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


    // await newProjectPages.clickTakeATourStartBtn()
    // await newProjectPages.clickTakeATourSkipBtn()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Atmega")
    //click to select atmega search result for parts and components
    await newProjectPages.clickToSelectAtmegaPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click atmega first parts
    await newProjectPages.clickToSelectAtmegaParts()
    //click parts use button
    await newProjectPages.clickUseBtn()



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
    await newProjectPages.inputNameOfProject("Automation Project Name")
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
    // await newProjectPage.clickVideoEditBtn()
    // //Click On Video Edit Section Save Button ***Video Editor Does Not Work Properly***
    // await newProjectPage.clickVideoEditSectionSaveBtn()
    // //click on video editor close btn
    // await newProjectPage.clickToCloseVideoEditor()

    //Click To Disable New Feed Share
    await newProjectPages.clickToDisableNewsFeedShare()
    //Click On Confirm Check Box
    await newProjectPages.clickToConfirmConditionCheckBox()
    //Click On Step Two Give The Comunity Button
    await newProjectPages.clickStepTwoGiveTheComunityBtn()
    //click on connect wallet button
    await newProjectPages.clickOnConnectWalletBtn()
    //Click On metamask button
    // let newOne = null;
    await newProjectPages.clickOnMetaMaskBtn()
    // await newOne.locator("//div[text()='Next']").click()

    // await pages[3].getByText("Next").click({ force: true })
    // let newTab = null;
    // let newPage = metaMask
    // newTab = await newProjectPages.clickOnMetaMaskBtn()
    // newPage = new metaMaskPage(newTab)


    // await newPage.clickNextBtn()

    await newProjectPages.clickOnContinueButton()
    await page.waitForLoadState("load")
    await newProjectPages.clickOnContinueButton()
    await page.waitForTimeout(5000)

    // await page.pause();
  });

  test('ID-003 | User | Validate Sell Project Create with premium parts', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()


    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()

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
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

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

    // // await metaMask.clickOnCreateListingTypeSection()
    // await metaMask.clickToOpenUnApproveListing()

    // await metaMask.clickToConfirmUnApproveLisiting()

    await newProjectPages.clickOnCheckOutBtn()


    await newProjectPages.clickOnPaypalSectionConfirmCheckBox()


    const newTab = await test.step("New Tab", async () => {
      return await newProjectPages.clickOnPayWithPaypalBtn()
    })

    await test.step("New Tab", async () => {
      const payPalPage = new LoginPage(newTab)
      await payPalPage.inputPayPalCredentials("XN=EWv1/", "payer-wauya15573283@personal.example.com")
      // await payPalPage.clickOnPayPalLoginBtn()
      await payPalPage.clickOnPaypalPaymentConfirmBtn()

    })

    await newProjectPages.clickOnMyProjectPage()

    test.setTimeout(1200000)
    // await page.pause()


  });
  test.skip('ID-004 | User | Validate Sell with premium parts created project Successfully show on my  project section', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()


    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("QA Electronic")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()



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
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

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

    // //*************here is issue related to listing type selection when user select collection on time then listing type does not enable */
    // await newProjectPages.clickToChooseProjectCollections()
    // await newProjectPages.clickToChooseProjectCollections()
    // //select collection
    // await newProjectPages.clickToChooseProjectCollection("3")

    // //Click on Choose Collection section
    // await newProjectPages.clickToChooseProjectCollections()
    // await newProjectPages.clickToChooseProjectCollections()

    // //select collection
    // await newProjectPages.clickToChooseProjectCollection("1")
    // await newProjectPages.clickToChooseProjectCollections()

    // //---------------------------------------------------------------

    // await newProjectPages.clickStepOneNextBtn()

    // await newProjectPages.clickOnPriceTokenSelectionField()
    // await newProjectPages.clcikToSelectPriceToken("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

    // //click on listing type
    // await newProjectPages.clickOnBuyListingType()
    // //select listing type
    // await newProjectPages.clickToSelectBuyListingType("Buy Now")
    // //input price for sell project
    // await newProjectPages.inputPriceForSellProject("2")
    // //input Royality for sell project
    // await newProjectPages.inputRoyalityForSellProject("2")
    // //click on next button
    // await newProjectPages.clickStepOneNextBtn()
    // //input price for sell project
    // await newProjectPages.inputProjectStoryForSellProject("Demo Story For Sell Project")
    // //uncheck share newsfeed option
    // await newProjectPages.clickToDisableNewsFeedShare()
    // //click on confirm additional option
    // await newProjectPages.clickConfirmAdditional()
    // //confirm right owner option
    // await newProjectPages.clickConfirmRightOwner()
    // //click on pay and mint button
    // await newProjectPages.clickOnPayAndMintBtn()
    // //click on mint button
    // await newProjectPages.clickOnMintBtn()
    // //click on Connect Wallet Button
    // await newProjectPages.clickOnConnectWalletBtn()
    // //click on Metamask Button
    // await newProjectPages.clickOnMetaMaskBtn()
    // //click On contineu button
    // await newProjectPages.clickOnContinueButton()

    // await page.waitForTimeout(6000)
    // await metaMask.clickOnCreateListingTypeSection()
    // // await metaMask.clickToOpenUnApproveListing()

    // await metaMask.clickToConfirmUnApproveLisiting()

    // await page.pause()


  });

  test('ID-005 | User | Quick Start |  New Project | Validate Electronic Section Search Functionality', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
  });


  test('ID-006 | User | Quick Start |  New Project | Validate After Adding Premium Parts or Components Then Parts Price Successfully Show Or Not', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()
    //verify After Adding Premium Parts Then Successfully Update Price
    await newProjectPages.verifyAfterAddingPremiumPartsThenSuccessfullyUpdatePrice()
  });

  test('ID-007 | User | Quick Start |  New Project | Validate Electronic Section Edit Functionality', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()


    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()

    await newProjectPages.clickOnElectronicsEditBtn()
    await newProjectPages.clickAddPartsOrComponentsSearchIcon()

  });

  test('ID-008 | User | Quick Start |  New Project | Validate Electronic Section View Functionality', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()


    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()
    await newProjectPages.clickOnElectronicsViewBtn()
    await newProjectPages.clickAddPartsOrComponentsSearchIcon()

  });

  test('ID-009 | User | Quick Start |  New Project | Validate Electronic Section Place Functionality', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()

    await newProjectPages.clickOnElectronicsPlaceBtn()
    await newProjectPages.clickAddPartsOrComponentsSearchIcon()

  });

  test('ID-0010 | User | Quick Start |  New Project | Validate Electronic Section Draw Functionality', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()

    await newProjectPages.clickOnElectronicsDraweBtn()
    await newProjectPages.clickAddPartsOrComponentsSearchIcon()

  });

  test('ID-011 | User | Quick Start |  New Project | Validate Electronic Section Design Functionality', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);
    const newProjectPages = new newProjectPage(pages[1])


    await page.bringToFront()

    await newProjectPages.clickAddPartsOrComponentsSearchIcon()
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select QA Electronics search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select premum parts
    await newProjectPages.clickToSelectPrimiumParts()
    //click parts use button
    await newProjectPages.clickUseBtn()

    await newProjectPages.clickOnElectronicsDesigneBtn()
    await newProjectPages.clickAddPartsOrComponentsSearchIcon()

  });

  test('ID-012 | User | Validate Cover Section Home Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionHomeFilterBtn()



    // await page.pause()


  });

  test('ID-013 | User | Validate Cover Section Object Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section Object filter button
    await newProjectPages.clickOnCoverSectionObjectFilterBtn()



    // await page.pause()


  });

  test('ID-014 | User | Validate Cover Section Feature Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionFeatureFilterBtn()



    // await page.pause()


  });

  test('ID-015 | User | Validate Cover Section Sketching Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionSketchingFilterBtn()



    // await page.pause()


  });

  test('ID-016 | User | Validate Cover Section 3DSketching Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSection3DSketchingFilterBtn()



    // await page.pause()


  });

  test('ID-017 | User | Validate Cover Section Assemble Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionAssembleFilterBtn()



    // await page.pause()


  });

  test('ID-018 | User | Validate Cover Section Solids Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionSolidsFilterBtn()



    // await page.pause()


  });

  test('ID-019 | User | Validate Cover Section Relate Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionRelateFilterBtn()



    // await page.pause()


  });

  test('ID-020 | User | Validate Cover Section Surfacing Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionSurfacingFilterBtn()



    // await page.pause()


  });

  test('ID-021 | User | Validate Cover Section PMI Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionPMIFilterBtn()



    // await page.pause()


  });

  test('ID-022 | User | Validate Cover Section Simulation Filter Successfully Works', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 300000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()
    const pages = page.context().pages()
    console.log(pages.length);

    const newProjectPages = new newProjectPage(pages[1])
    const metaMask = new metaMaskPage(pages[2])

    await test.step("Unlock MetaMask", async () => {
      await metaMask.metaMaskUnlockHelper()

      // await metaMask.inputUnlockPassword()
      // await metaMask.clickOnUnlockBtn()
    })
    await page.bringToFront()



    //start cover section
    //click on cover section
    await newProjectPages.clickOnCoverSection()
    //click on cover section search button
    await newProjectPages.clickOnCoverSectionSearchBtn()
    //search parts and components
    await newProjectPages.searchCoverPartsAndComponents("ALL 3D Models")
    //click on the all 3d model part btn
    await newProjectPages.clickOnCoverSectionAll3DModelPartBtn()
    //click on the Cover Section All 3D Model Part public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    //click to select cover section parts
    await newProjectPages.clickToSelectionCoverSectio3DPart()
    //click parts use button
    await newProjectPages.clickUseBtn()

    //click  on cover section home filter button
    await newProjectPages.clickOnCoverSectionSimulationFilterBtn()



    // await page.pause()


  });



  test('ID-023 | User | Create Project | Sended For Manufacture |  Validate User Can Successfully Send Project To Manufacture', async () => {

    await page.goto("/user/dashboard/project/create/", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

    const pages = page.context().pages()
    console.log(pages.length);

    await pages[0].close()

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
    //search parts and components
    await newProjectPages.searchPartsAndComponents("Adafruit")
    //click to select atmega search result for parts and components
    await newProjectPages.clickOnQAElectronicsPartsComponent()
    //click on the atmega public option to select a parts
    await newProjectPages.clickOnAtmegaPublicOption()
    // //click atmega first parts
    // await newProjectPages.clickToSelectPrimiumParts()
    // //click parts use button
    // await newProjectPages.clickUseBtn()

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
    // //click system defined build in code section
    // await newProjectPages.clickOnSystemDefineBuildInCode()
    // //click system defined build in Logic code section
    // await newProjectPages.clickOnSystemDefineBuildInLogicCode()
    // //click system defined build in Logic First code section
    // await newProjectPages.clickOnSystemDefineBuildInFirstLogicCode()
    // //click parts use button
    // await newProjectPages.clickUseBtn()
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
    // await newOne.locator("//div[text()='Next']").click()

    // await pages[3].getByText("Next").click({ force: true })
    // let newTab = null;
    // let newPage = metaMask
    // newTab = await newProjectPages.clickOnMetaMaskBtn()
    // newPage = new metaMaskPage(newTab)


    // await newPage.clickNextBtn()

    await newProjectPages.clickOnContinueButton()
    await page.waitForLoadState("load")

    //for new changes----------------------------------------------------
    // // await newProjectPages.clickOnContinueButton()
    // await newProjectPages.clickOnCheckOutBtn()

    // await newProjectPages.clickOnPaypalSectionConfirmCheckBox()


    // const newTab = await test.step("New Tab", async () => {
    //   return await newProjectPages.clickOnPayWithPaypalBtn()
    // })

    // await test.step("New Tab", async () => {
    //   const payPalPage = new LoginPage(newTab)
    //   await payPalPage.inputPaypalEmail("payer-wauya15573283@personal.example.com")
    //   await payPalPage.clickOnPayPalSectionNextBtn()
    //   await payPalPage.inputPaypalPassword("XN=EWv1/")
    //   await payPalPage.clickOnPayPalLoginBtn()

    //   // await payPalPage.inputPayPalCredentials("XN=EWv1/", "payer-wauya15573283@personal.example.com")

    //   await payPalPage.clickOnPaypalPaymentConfirmBtn()

    // })

    await newProjectPages.clickOnProjectThreeDotBtn()
    await newProjectPages.clickToSendProjectToManufacture()

    // //click to my project section
    // await newProjectPages.clickOnMyProjectPage()



  });

  test.only('ID-024 | User | Validate User Can Successfully Send Project To Manufacture', async () => {

    await page.goto("/user/cart/", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

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
    await newProjectPages.clickToExpandSelectedManufacturePanel()
    await newProjectPages.clickOnSendOfferToManufacture()

    // await newProjectPages.clickOnAvaterBtn()
    // await newProjectPages.clickOnLogoutBtn()


    // //click to my project section
    // await newProjectPages.clickOnMyProjectPage()



  });

  test('ID-025 | User | Validate User Logout Functionality', async () => {

    await page.goto("/user/dashboard/", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

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

  test('ID-026 | Manufacture | Validate Manufacture Login Functionality', async () => {

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

  test('ID-027 | Manufacture | Validate Manufacture Successfully Accept User Sended Project', async () => {

    await page.goto("/service-provider/dashboard", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

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

  test('ID-028 | User | Validate Manufacture Logout Functionality', async () => {

    await page.goto("/service-provider/dashboard", { timeout: 1200000, waitUntil: "domcontentloaded" })
    await page.waitForNavigation()

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

  test('ID-028 | Manufacture | Validate User Login Functionality', async () => {

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


});
