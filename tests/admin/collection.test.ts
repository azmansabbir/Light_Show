// import test, { expect } from "@fixtures/basePages"
import test from "playwright/test";
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import componentPage from "@pages/Component.page";
import * as data from "@testData/login.cred.json";
import CollectionPage from "pages/admin/Collection.page";
import ENV from "@utils/env";
import ComponentPage from "@pages/Component.page";
import functions from "@testData/helper";

const getNumber = Math.floor(Math.random() * 10)


test('Admin Collection Create', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const collectionPage = new CollectionPage(page)
        const functionss = new functions(page)

        await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "domcontentloaded" })

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.ADMINEMAIL, ENV.ADMINPASSWORD)
        await page.waitForLoadState("networkidle")
        await collectionPage.clickOnCollectionPage()
        await collectionPage.clickOnCollectionAddNewBtn()

        await functionss.imageUploadHelper()
        await collectionPage.clickOnChooseBtn()

        await collectionPage.inputCollectionName(data.collecionName[1])

        // await collectionPage.clickToOpenBlockChainMintListBox()
        await collectionPage.clickToSelectBlockChainMints(data.blickChainMintList[3])

        // await collectionPage.clickToOpenCollectionTypeListBox()
        await collectionPage.clickToSelectCollectioonType(data.collectionTypeList[3])

        await collectionPage.inputCollectionDescription(data.getDescription)

        await collectionPage.checkConfirmBtn()

        await collectionPage.clickOnSaveBtn()




});

