import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
const { Dappwright } = require('@tenkeylabs/dappwright');

const getNumber = Math.floor(Math.random() * 10)
test.describe('Ideeza Full Project Setup', () => {

        test('Projext Setup For All The Test Cases', async ({ page }) => {


                await page.goto("/")
                const pages = page.context().pages()
                // await pages[1].goto("chrome-extension://jemiocedphikojcheklknknaehfmoedk/home.html")

                console.log(pages.length);
                const loginPage = new LoginPage(pages[1])
                const metaMask = new metaMaskPage(pages[2])
                // await metaMask.metaMaskUnlockHelper()
                // await metaMask.gotToUrl()

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

                await loginPage.clickOnDashboardBtn()

                await loginPage.clickOnNewsFeedPage()

                await page.goto("https://metamask.github.io/test-dapp/", { timeout: 1200000, waitUntil: "domcontentloaded" })

                await page.click("#connectButton", { force: true });
                // await wallet.approve();

                const popup = await page.context().waitForEvent("page");
                await popup.getByRole("button", { name: "Next" }).click();
                await popup.getByRole("button", { name: "Connect" }).click();
                await page.waitForTimeout(4000)

                // const ele = await page.locator("//span[text()='80001']")
                // await expect(ele).toBeVisible()


                await page.goto("/user/dashboard/code/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })



                const newProjectPages = new newProjectPage(pages[1])



                await newProjectPages.clickTakeATourStartBtn()
                await newProjectPages.clickTakeATourSkipBtn()

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
                await newProjectPages.clickOnMetaMaskBtn()
                await newProjectPages.approveMetaMask()

                await newProjectPages.clickOnContinueButton()
                await page.waitForLoadState("load")

                //Click On Agree Btn
                await newProjectPages.clickOnAGreeBtn()
                await page.waitForLoadState("load")
        });



})

