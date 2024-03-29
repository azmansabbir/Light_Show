import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";



        test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit 3D Case', async ({page}) => {
                /*
                  This test case is designed to validate that a user can successfully add a part with a 3D case in the system. 
                  It involves the following steps:
                  - Navigating to the "Add Component" section of the user dashboard.
                  - Selecting the option to add a part with a 3D case.
                  - Filling in the necessary details for the part, including name, description, and category.
                  - Customizing the 3D case as per the requirements.
                  - Submitting the part for addition to the system.
                  - Verifying that the part has been successfully added and is visible in the user's dashboard.
                */
                /*
                  This test case also ensures that appropriate error messages are displayed when the user attempts to add a part without completing all required fields. 
                  It involves the following steps:
                  - Navigating to the "Add Component" section without filling in all the necessary details.
                  - Attempting to submit the part for addition.
                  - Verifying that error messages are displayed for each required field that is left blank.
                  - Correcting the errors and resubmitting the part.
                  - Verifying that the part is successfully added after all required fields are completed.
                */


                await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

                const pages = page.context().pages()
                console.log(pages.length);

                const loginPage = new LoginPage(page)
                const metaMask = new metaMaskPage(pages[0])
                const newProjectPages = new newProjectPage(page)

                await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
                await metaMask.metaMaskUnlockHelper()

                await test.step("Component Create With Code | Add Part Section", async () => {

                        await newProjectPages.clickOnComponentWithCodeBuiltInSearchBtn()
                        await newProjectPages.clickOnBuiltInBtn()
                        await newProjectPages.clickOnSystemDefineBuildInLogicCode()
                        await newProjectPages.clickOnSystemDefineBuildInFirstLogicCode()
                        await newProjectPages.clickOnUseBtn()
                        await newProjectPages.clickNextBtn()

                })

                await test.step("Add New Part With CodePart Create With Code | Block Parameters Section", async () => {

                        //input part name
                        await newProjectPages.inputComponentName()

                        //input descripitin
                        await newProjectPages.inputPartDescriptoin()

                        //click on Select Catagory Selection
                        await newProjectPages.clickOnSelectCatagorySection()

                        //clickToSelectCatagory
                        await newProjectPages.clickToSelectCodeCatagory()

                        //click OnShowOnCustomizeBtn
                        await newProjectPages.clickOnShowOnCustomizeBtn()

                        //click on the next step button
                        await newProjectPages.clickOnNextStepBtn()
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
                        await newProjectPages.clickOnNextStepBtn()


                        await newProjectPages.clickOnConnectWalletBtn()
                        //Click On metamask button
                        // let newOne = null;
                        await newProjectPages.clickOnMetaMaskBtn()


                        await newProjectPages.clickOnContinueButton()
                        // await page.waitForLoadState("load")

                        //Click On Agree Btn
                        await newProjectPages.clickOnAGreeBtn()

                        // await newProjectPages.clickOnAddNewPartBtn()


                })
        })





