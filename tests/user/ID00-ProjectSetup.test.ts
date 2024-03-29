import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";
import {deleteFolderRecursive} from "../setup/removeFolder";

const getNumber = Math.floor(Math.random() * 10)
test.describe('IDEEZA Project Setup', () => {

        test.only("Delete Folder", async () => {
        await deleteFolderRecursive;
        });
        test.only('Project Setup And Wallet Connection', async ({page }) => {
                /*
                Navigate to Base URL: Open the base URL of the application, waiting until the DOM content is fully loaded.

Initialize Pages and Contexts:

Get the array of all pages in the current context.
Log the number of pages.
Initialize objects for LoginPage, MetaMaskPage, and NewProjectPage.
Navigate to MetaMask URL: Navigate to the MetaMask URL in the first tab.

Interactions with MetaMask:

Click various checkboxes and buttons related to terms and conditions, creating a wallet, and agreement confirmations.
Input and confirm a new password.
Perform several steps to skip account security settings.
Go through steps to add a new network manually, including entering network details and saving them.
Import an account by inputting account key details and importing it.
Bring Main Page to Front and Log In:

Bring the main application page to the forefront.
Navigate back to the base URL.
Handle cookie consent.
Perform login using provided credentials.
Wait for the network state to idle.
Navigate Back to MetaMask URL (possibly for further actions).

Interactions in the New Project Pages:

Click through a tutorial or introduction sequence.
Navigate to a specific section of the user dashboard.
Go through steps for creating a part with code, including inputting names, selecting categories, setting up block parameters, and defining general settings.
Blockchain and Minting Options:

Select a blockchain network (e.g., Mumbai Testnet on Polygon).
Choose and select a collection for the project.
Set Pricing Details:

Input prices for private and commercial usage.
Confirm terms and conditions.
Wallet Connection and Approval:

Initiate a connection to the MetaMask wallet and approve the connection.
Continue with further application interactions and agree to final terms.
                 */


                await page.goto(ENV.BASE_URL, { waitUntil: "domcontentloaded" })

                const pages = page.context().pages()
                console.log(pages.length);

                const loginPage = new LoginPage(page)
                const metaMask = new metaMaskPage(pages[2])
                const newProjectPages = new newProjectPage(page)

                // await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })

                // await  metaMask.goToURL()
                await page.bringToFront()
                await page.bringToFront()

                // await metaMask.metaMaskUnlockHelper()
                // await metaMask.goToURL()

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
                await page.goto(ENV.BASE_URL, { waitUntil: "domcontentloaded" })
                await loginPage.clickOnCookiesCheckBox()
                await loginPage.clickOnApproveBtn()
                await loginPage.login(ENV.USERNAME, ENV.PASSWORD)
                await page.waitForLoadState("networkidle")
                // await loginPage.clickOnCookiesCheckBox()
                // await loginPage.clickOnApproveBtn()




                // await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })

                await metaMask.metaMaskUnlockHelper()



                await newProjectPages.clickTakeATourStartBtn()
                await newProjectPages.clickTakeATourSkipBtn()

                

                await page.goto(ENV.BASE_URL+ "/user/dashboard/code/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })
                await test.step("Part Create With Code | Add Part Section", async () => {

                        await newProjectPages.inputCodeBlockName()
                        await newProjectPages.clickOnColorSection()
                        await newProjectPages.clickOnCatagorySection()
                        await newProjectPages.clickToSelectCodeCatagory()
                        await newProjectPages.clickOnPartNextStepBtn()

                })

                await test.step("Add New Part With CodePart Create With Code | Block Parameters Section", async () => {
                        await newProjectPages.checkValueInput()
                        await newProjectPages.inputVariableName()
                        await newProjectPages.checkPreviousConnector()
                        await newProjectPages.checkNextConnector()
                        await newProjectPages.checkIsOutput()
                        await newProjectPages.checkInputInline()
                        await newProjectPages.checkStatementInput()
                        await newProjectPages.checkAppendValueInput()
                        await newProjectPages.input2VariableName()
                        await newProjectPages.clickOnPartNextStepBtn()

                })

                await test.step("Add New Part With CodePart Create With Code | General Section", async () => {
                        await newProjectPages.inputCodePartName()
                        await newProjectPages.inputCodePartDescription()
                        await newProjectPages.clickOnCatagorySection()
                        await newProjectPages.clickToSelectCodeCatagory()
                        await newProjectPages.clickOnShowOnCustomizeCheckBox()
                        await newProjectPages.clickOnGeneralSectionNextStepBtn()

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
                await newProjectPages.clickOnGeneralSectionNextStepBtn()


                await newProjectPages.clickOnConnectWalletBtn()
                //Click On metamask button
                // let newOne = null;
                // await  newProjectPages.clickOnWalletConnectBtn()
                await newProjectPages.clickOnMetaMaskBtn()               

                await newProjectPages.approveMetaMask()

                await newProjectPages.clickOnContinueButton()
                await page.waitForLoadState("load")

                //Click On Agree Btn
                await newProjectPages.clickOnAGreeBtn()
                await page.waitForLoadState("load")

        });
})



