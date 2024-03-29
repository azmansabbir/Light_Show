// import test, { expect } from "@fixtures/basePages"
import test, { Browser, Page, chromium } from "playwright/test";
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


// test('Admin Collection Create', async ({ page }) => {
//         const loginPage = new LoginPage(page)
//         const collectionPage = new CollectionPage(page)
//         const functionss = new functions(page)

//         /*
//           This test case verifies that an admin can successfully create a new collection.
//           It involves the following steps:
//           - Logging in as an admin.
//           - Navigating to the collection creation section.
//           - Filling in the collection details, including name, blockchain mints, and collection type.
//           - Uploading an image for the collection.
//           - Submitting the collection for creation.
//           - Verifying that the collection has been successfully created and is visible in the admin dashboard.
//         */
//         /*
//           This test case also ensures that appropriate error messages are displayed when the admin attempts to create a collection without completing all required fields.
//           It involves the following steps:
//           - Logging in as an admin.
//           - Navigating to the collection creation section.
//           - Attempting to submit the collection for creation without filling in all necessary details.
//           - Verifying that error messages are displayed for each required field that is left blank.
//           - Correcting the errors and resubmitting the collection.
//           - Verifying that the collection is successfully created after all required fields are completed.
//         */
//         await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "domcontentloaded" })

//         await loginPage.clickOnCookiesCheckBox()
//         await loginPage.clickOnApproveBtn()
//         await loginPage.login(ENV.ADMIN_EMAIL, ENV.ADMIN_PASSWORD)
//         await page.waitForLoadState("networkidle")
//         await collectionPage.clickOnCollectionPage()
//         await collectionPage.clickOnCollectionAddNewBtn()

//         await functionss.imageUploadHelper()
//         await collectionPage.clickOnChooseBtn()

//         await collectionPage.inputCollectionName(data.collecionName[0])

//         // await collectionPage.clickToOpenBlockChainMintListBox()
//         await collectionPage.clickToSelectBlockChainMints(data.blickChainMintList[3])

//         // await collectionPage.clickToOpenCollectionTypeListBox()
//         await collectionPage.clickToSelectCollectioonType(data.collectionTypeList[3])

//         await collectionPage.inputCollectionDescription(data.getDescription)

//         await collectionPage.checkConfirmBtn()

//         await collectionPage.clickOnSaveBtn()




// });



test('', async ({ page }) => {
   await page.goto('https://www.google.com/');
})

