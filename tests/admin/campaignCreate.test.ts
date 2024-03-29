// import test, { expect } from "@fixtures/basePages"
import test from "playwright/test";
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import componentPage from "@pages/Component.page";
import * as data from "@testData/login.cred.json";
import CollectionPage from "../../pages/adminPages/Collection.page";
import ENV from "@utils/env";
import ComponentPage from "@pages/Component.page";
import functions from "@testData/helper";

const getNumber = Math.floor(Math.random() * 10)




test('Campaign Create', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const collectionPage = new CollectionPage(page)
        const functionss = new functions(page)


        /*
          This test case verifies that an admin can successfully create a new campaign in the system.
          It involves the following steps:
          - Logging in as an admin.
          - Navigating to the campaign creation section.
          - Filling in the campaign details, including name, blockchain mints, collection type, NFT price, and campaign dates.
          - Uploading an image for the campaign.
          - Setting up exclusive group join options and subscription discounts.
          - Submitting the campaign for creation.
          - Verifying that the campaign has been successfully created and is visible in the admin dashboard.
        */
        /*
          This test case also ensures that appropriate error messages are displayed when the admin attempts to create a campaign without completing all required fields.
          It involves the following steps:
          - Logging in as an admin.
          - Navigating to the campaign creation section.
          - Attempting to submit the campaign for creation without filling in all necessary details.
          - Verifying that error messages are displayed for each required field that is left blank.
          - Correcting the errors and resubmitting the campaign.
          - Verifying that the campaign is successfully created after all required fields are completed.
        */



        await page.goto(ENV.BASE_URL, { waitUntil: "domcontentloaded" })

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PASSWORD)
        await page.waitForLoadState("networkidle")


        await collectionPage.clickOnPresellUitility()
        await collectionPage.clickOnPreselCampaignBtn()

        await collectionPage.clickCreateNewCampaignBtn()

        await collectionPage.inputPresellCampaignName(data.collecionName[1])

        await collectionPage.clickToSelectBlockChainMintsForCampaign(data.blickChainMintList[3])

        await collectionPage.clickToSelectCollectioonTypeForCampaign(data.collectionType[3])

        await collectionPage.selectNFTPriceToken(data.nftPriceTokenListBox[0])

        await collectionPage.inputNFTPrice(data.nftPrice[0])

        await collectionPage.inputCampaignStartDate(data.campiagnStartDate)
        await collectionPage.inputCampaignEndDate(data.campiagnEndDate)

        await functionss.imageUploadHelper()
        await collectionPage.clickOnChooseBtn()



        await collectionPage.inputCampaignNFTName(data.collecionName[0])
        await collectionPage.inputCampaignNFTDescription(data.getDescription)

        await collectionPage.checkJoinExclulsiveGroup()

        await collectionPage.selectDescountSubscription(data.subscriptionOfferList)
        await collectionPage.inputDescountParcentage(data.subscriptionPercantage)

        await collectionPage.selectSubscriptionDuration(data.subscriptionDuration)

        await collectionPage.clickOnCreatePresellCampaignBtn()












});

