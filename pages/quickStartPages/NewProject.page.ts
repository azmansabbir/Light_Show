import { expect } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "playwright";
// import { Page } from "tests/fixtures/chrome-extension"
export default class newProjectPage {
        // page: Page;

        // constructor(context) {
        //         this.context = context;
        //         this.page = context.pages()[0];
        //     }
        // [x: string]: any;
        // private page: Page;
        // static buffer: void;
        // constructor(page: Page | Page) {
        //         this.page = page;
        // }
        constructor(private page: Page) {
        }
        private newProjectPageElements = {
                quickStartBtn: "//div[text()='Quick Start']",
                newPartBtn: "//p[text()='New Part']",
                newComponentBtn: "//p[text()='New Component']",
                threeDCaseBtn: "//p[text()='3D case']",
                newProjectBtn: "//p[text()='New Project']",
                projectCreateByYourselfBtn: `(//div[text()='Click here to design new project by yourself!'])[3]`,
                typeIdeaInputField: `(//textarea[@placeholder='Start now – type your idea here...'])[2]`,
                goBtn: "(//div[contains(@class,'absolute custom-top-icon-creat')])[2]",
                getStartedBtn: "//div[text()='Get Started']",
                takeAtourSkipBtn: "//button[@data-action='skip']",
                newProjectByYourselfBtn: "(//div[text()='Click here to design new project by yourself!'])[3]",
                codeSectionBtn: "//div[text()='Code']",
                coverSection: "//div[text()='Cover']",
                coverSectionHomeFilterBtn: "//div[@aria-label='Home']//img[1]",
                coverSectionObjectFilterBtn: "//div[@aria-label='Object']//img[1]",
                coverSectionFeatureFilterBtn: "//div[@aria-label='Feature']//img[1]",
                coverSectionSketchingFilterBtn: "//div[@aria-label='Sketching']//img[1]",
                coverSection3DSketchingFilterBtn: "//div[@aria-label='3d Sketching']//img[1]",
                coverSectionAssembleFilterBtn: "//div[@aria-label='Assemble']//img[1]",
                coverSectionSolidsFilterBtn: "//div[@aria-label='Solids']//img[1]",
                coverSectionRelateFilterBtn: "//div[@aria-label='Relate']//img[1]",
                coverSectionSurfacingFilterBtn: "//div[@aria-label='Surfacing']//img[1]",
                coverSectionPMIFilterBtn: "//div[@aria-label='PMI']//img[1]",
                coverSectionSimulationFilterBtn: "//div[@aria-label='Simulation']//img[1]",



                addPartsOrComponentSearchIcon: `[data-testid="SearchIcon"]`,
                coverSectionSearchBtn: `[data-testid="SearchIcon"]`,
                firstPartsAndComponent: "(//div[contains(@class,'MuiAccordionSummary-content MuiAccordionSummary-contentGutters')])[1]",
                addPartsOrComponentSearchInputfield: "//input[@placeholder='Add parts or components']",
                loadingBtn: "//img[@alt='Loading']",
                atmegaParts: "//div[text()='Adafruit']",
                codeAddPartsOrComponentSearchInputfield: "(//span[text()='Code Preview']/following::input)[1]",
                coverAddPartsOrComponentSearchInputfield: "(//input[@placeholder='Add parts or components'])[2]",

                coverSectionParts: "//div[text()='ALL 3D Models']",
                qaElectronicsPartsBtn: "//div[text()='AD8497ARMZ']",
                premiumPart: `//b[@title='Demo Part']`,
                qaTestCatagory: "//div[text()='QA Test']",
                qaElectronicsPremiumPartsBtn: "//b[@title='Demo Part']",
                qaElectronicsPartsSelectionBtn: "//b[@title='Test With Ligthing']",
                searchResultForPartsAndComponets: "//div[text()='Atmega']",
                atmegaPublicOption: "//span[text()='Public']",
                coverSection3DModelAutomationParts: "//b[@title='Automated Parts']",
                atmegaFirstParts: "//b[@title='Atmega328-m']",
                partsComponentUseBtn: "//div[text()='use']",
                noBtn: "//button[text()='No']",
                alertNoBtn: "//div[text()='Yes']",
                priceForPrivetPartsBtn: "//div[contains(@class,'bg-white border')]",
                nextBtn: "//div[@title='next']//button[1]",
                electronicSectionSubmitBtn: "//button[@type='submit']",
                codeCatagory: "//div[text()='CODE']",
                systemDefinedBuildIn: "//span[text()='Built-in']",
                loginCode: "//span[text()='Logic']",
                firstLogic: "(//div[@class='mb-7']//img)[1]",
                codeCreateBtn: "(//div[@title='Create']//button)[2]",
                ganeralTab: "//div[text()='General']",
                yesBtn: "Proceed",
                ganeralTabCreateBtn: "(//p[text()='Create Project'])[2]",
                giveToTheComunityBtn: "//div[text()='Give to the Community']",
                chooseProjectBtn: "//p[text()='Choose Project']/following-sibling::select",
                projectNameInputField: "//input[@placeholder='Project Name']",
                chooseLicenseBtn: "//input[@placeholder='Choose a license']",
                mitLicense: "//p[text()='MIT License']",
                blockChainMintChooseBtn: "//p[text()='Blockchain Mint']/following-sibling::select",
                collectionText: "//p[@value='Collection ']",
                collectionChooseBtn: `//p[text()='Collection ']/following-sibling::select`,
                projectDescription: "//p[text()='Project Description']/following-sibling::textarea",
                stepOneNextBtn: "//div[text()='Next']",
                projectSocialPreviewText: "//div[text()='Project social Preview']",
                projectStory: "//textarea[@placeholder='Type here your innovation story...']",
                videoEditBtn: "Edit",
                videoEditSectionSaveBtn: "//div[text()='Save']",
                videoEditorCloseBtn: "(//div[text()='Video Editor']/following-sibling::div)[3]",
                newFeedShowEnableDisbleBtn: "//input[@aria-label='controlled']",
                confirmCheckBox: "(//span[text()='Shared in News feed']/following::input)[1]",
                stepTwoGiveToTheComunityBtn: "//div[text()='Give To The Community']",
                connectWalletBtn: `//button[text()='Connect Wallet']`,
                metaMaskBtn: "//span[text()='MetaMask']",
                contineuBtn: "//div[text()='Continue']",
                checkOutBtn: "//div[text()='Checkout']",
                paypalSectionConfirmationCheckBox: "//input[@data-indeterminate='false']",
                myProjectPageBtn: "//div[text()='My Project']",
                palypalBtn: `PayPal`,
                playPalSectionEmailField: "#email",
                playPalSectionPasswordField: "#password",
                nextBtnForPapPalSection: "Next",
                paypalSectionLoginBtn: "#btnLogin",
                paymentSubmitBtn: "#payment-submit-btn",
                cookieCheckBox: "//input[@type='checkbox']",
                approveBtn: "//div[text()='Approve']",
                sellProjectBtn: "//div[text()='Sell']",
                listingTypeBtn: "//p[text()='Listing Type']/following-sibling::select",
                buyNowBtn: `//p[text()='Listing Type']/following-sibling::select`,
                selectTokenBtn: "//select[@fdprocessedid='8h42gb']",
                priceTokeSelectionField: "//p[text()='Price']/following::div[contains(@class,'relative mb-4')]//select",
                maticSelectBtn: "//option[text()='MATIC']",
                priceInputField: "//input[@placeholder='0.001 for example']",
                royalityInputField: "//input[@type='number']",
                additionalGasFeeCheckBox: `[name="inform_additional_gas"]`,
                righFulOwnerConfirmCheckBox: `[name="agree_confirm"]`,
                payAndMintBtn: "//div[text()='Pay & Mint']",
                mintBtn: "//div[text()='Mint']",
                editBtnOnElectronicSection: "(//div[@aria-label='Edit']//img)[1]",
                viewBtnOnElectronicSection: "(//div[@aria-label='View']//img)[1]",
                placeBtnOnElectronicSection: "(//div[@aria-label='Place']//img)[1]",
                drawBtnOnElectronicSection: "//div[@aria-label='Draw']//img[1]",
                designBtnOnElectronicSection: "(//div[@aria-label='Design']//img)[1]",

                //Element For User Send Project For Manufacture
                projecTypetSaveBtn: "//span[text()='save']",
                projectSaveBtn: "//div[text()='Save']",
                projectThreeDotBtn: "(//div[@class='relative']//div)[2]",
                projectSendToManufactureBtn: "//div[text()='Send to Manufacture']",
                tableProjectThreeDot: "//p[text()='$0.00']/following::button[@type='button']",
                editAndChoseManufactureBtn: "//div[text()='Edit chosen manufacturer']",
                selectManufactureBtn: "//div[text()='Select']",
                expandSelectedManufactureBtn: "//div[contains(@class,'bg-[#333333] px-2')]",
                sendOfferToMarchentBtn: "//div[text()='Send Offer']",
                avaterSection: "//div[contains(@class,'MuiAvatar-root MuiAvatar-circular')]/following-sibling::p[1]",
                logoutBtn: "//div[text()='Log Out']",
                signUpBtn: "(//p[text()='Sign up']/following-sibling::p)[2]",
                homePageLogo: `[src="/images/logo/logo-white.svg"]`,

                requestSendedBtn: "//div[text()='Request Sent']",
                sendedProjectOnMenufecture: `[src="/images/timeIcon.svg"]`,
                seeOfferBtn: "//div[text()='See offer']",
                selectDateInputField: "//input[@placeholder='Select Date']",
                selectDatePickerNextBtn: "//div[@class='ant-picker-header-view']/following-sibling::button[1]",
                selectDate: "//div[text()='28']",
                acceptAgreementCheckBoxBtn: "//input[@data-indeterminate='false']",
                acceptOfferBtn: "//div[text()='Accept Offer']",
                acceptedStatusLabel: "//span[text()='Accepted']",

                //parts 3d Case section element
                partsSectionSearchBtn: `[data-testid="SearchIcon"]`,
                partsCatagory: "//div[text()='ALL 3D Models']",
                partsPublicBtn: "//span[text()='Public']",
                partsPartsAndComponentBtn: "//b[@title='Demo Name']",
                partsUseBtn: "//div[text()='use']",
                partsSectionNextBtn: "//div[text()='Next']",
                partNameInputField: "//input[@placeholder='Part Name']",
                partDescriptionsInputField: "//textarea[@placeholder='Type the description here...']",
                catagorySelectionField: "//div[text()='Select Category']",
                catagoryBtn: "//div[text()='ALL 3D Models']",
                showOnCustomizeCheckBox: "//label[text()='Show on customize']/following-sibling::input",
                nextStpeBtn: "//div[text()='Next Step']",
                nextStepForCodePart: "(//div[text()='Next Step'])[2]",
                blockChainMintSelectionField: "//p[text()='Blockchain Mint']/following-sibling::select",
                privetUserPriceInputField: "//p[text()='Private use Price ($)']/following-sibling::input",
                commercialUserPrice: "//p[text()='Commercial use Price ($)']/following-sibling::input",
                confirmAddionalGasFeeCheckBox: "//span[contains(@class,'MuiButtonBase-root MuiCheckbox-root')]//input[1]",
                agreeBtn: "//button[text()='Agree']",
                congratulationsText: "//p[@value='Congratulations!']",
                addNewPartBtn: "//div[text()='+ Add new part']",


                //add part electronics  section element
                electronicsLayer: "//p[text()='Electronic Part']",
                publicPackage: "//p[@value='74AHC1GU04SE-7']",
                chartConfig: "//div[text()='Chart']",
                graphBtn: "//img[@alt='hy']",
                labelXInputField: "//input[@placeholder='Label X']",
                labelYInputField: "//input[@placeholder='Label Y']",
                catagoryInputField: "(//span[text()='Category']/following-sibling::input)[1]",
                parcentageInputField: "(//span[text()='Percentage']/following-sibling::input)[1]",
                codeSearchButton: `[data-testid="SearchIcon"]`,
                partsCompoInputField: "//input[@placeholder='Add parts or components']",
                buildInPartsCatagory: "//span[text()='Built-in']",
                logicParts: "//span[text()='Logic']",
                ifDoParts: "(//div[@class='mb-7']//img)[1]",
                useBtn: "//div[text()='use']",
                nextPartsCreateBtn: "//div[text()='Next']",
                electronicPartsNameInputField: "(//label[text()='Name']/following::input)[1]",
                selectCatagorySelectionField: "//div[text()='Select Category']",
                cagagory: "//div[text()='AD8497ARMZ']",
                freeStyleCatagoryInputField: "(//label[text()='Freestyle Category']/following::input)[1]",
                typeSelectionField: "//label[text()='Type']/following-sibling::select",
                desctiptionInputField: "//label[text()='Description']/following::textarea",
                datasheetAttachmentInputField: "//label[text()='Datasheet Attachment']/following-sibling::input",
                showOnCustomizeBtn: "//label[text()='Show on customize']/following-sibling::input",
                languageTypeSelectionField: "//div[contains(@class,'flex flex-1')]//select[1]",
                baseCodeUploadInputField: "//img[@alt='icon']",
                submitButton: "//button[@type='submit']",
                finishBtn: "//div[text()='Finish']",


                //add part with code section elements
                blockNameInputField: "(//label[text()='Block Name']/following::input)[1]",
                colorInputSection: "((//span[text()='Code Preview'])[2]/following::input)[2]",
                catagorySelectionFieldBtn: "//div[text()='Select Category']",
                codeCatagoryEle: "//div[text()='CODE']",
                partType: "//p[text()='Type']/following-sibling::select",
                addPartNextStepBtn: "//div[text()='Next Step']",
                valueInputFieldCheckBox: "//p[text()='Value Input']/following-sibling::input",
                inputVariableNameInputField: "//input[@placeholder='Input Variable Name']",
                previousConnectorCheckBox: "//p[text()='Previous Connector']/following-sibling::input",
                nextConnectorCheckBox: "//p[text()='Next Connector']/following-sibling::input",
                isOutPutChecBox: "//p[text()='is Output?']/following-sibling::input",
                inputInlineCheckBox: "//p[text()='Input Inline?']/following-sibling::input",
                stateMentInputCheckBox: "//input[@name='statement']",
                appendValueInputCheckBox: "//p[text()='Append Value Input Type (A socket in which do plug a value black']/following-sibling::input",
                inputVeriableNameInputField: "//input[@placeholder='Input 2 Variable Name']",
                addPartSubmitBtn: "//button[@type='submit']",
                partCodeNameInputField: "//p[text()='Name']/following-sibling::input",
                codeDescriptionInputField: "//p[text()='Description']/following-sibling::textarea",
                showOnCustomizeBtnCheckBox: "//label[text()='Show on customize']/following-sibling::input",


                //component with Electronics
                component3DCaseNameInputField: "//input[@placeholder='Component Name']",
                searchBtn: `[testid="SearchIcon"]`,
                partComponentCatagory: "//div[text()='AD8497ARMZ']",
                publicBtn: "//span[text()='Public']",
                listedPartComponent: "//b[@title='Test Component']",
                useBtnForPC: "//div[text()='use']",

                //Component with Code
                builtInBtn: "//span[text()='Built-in']",
                logicBtn: "//span[text()='Logic']",
                ifDoBtn: "(//div[@class='mb-7']//img)[1]",




                //Buy Project Element Here
                buyNowBtnEle: "//div[text()='Buy Now']",


        }



        //parts section start here---------------------------------------------
        async clickOnPartsSectionSearchBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsSectionSearchBtn).nth(0)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(3000)
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Add Parts or Component Search Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPartCatagorySection() {
                const ele = await this.page.locator(this.newProjectPageElements.partsCatagory)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(3000)
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Add Parts or Component Catagory Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCatagoryPublicBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsPublicBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(4000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Catagory Publick Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPartBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsPartsAndComponentBtn).nth(0)
                try {
                        await ele.click({ button: 'left', delay: 100, force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnUseBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsUseBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Use Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickNextBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsSectionNextBtn).nth(0)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputPartName() {
                const ele = await this.page.locator(this.newProjectPageElements.partNameInputField)
                try {
                        await ele.fill("Demo Name")
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component General Section Name Input Field Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCookiesCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.cookieCheckBox)
                try {

                        await ele.click({ button: "left", delay: 100 })

                } catch (error) {
                        throw new Error(`Home Sceen | Cookies CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputPartDescriptoin() {
                const ele = await this.page.locator(this.newProjectPageElements.partDescriptionsInputField)
                try {
                        await ele.fill("Demo Data For Part Descriptions")
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component General Section Descriptions Input Field Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnSelectCatagorySection() {
                const ele = await this.page.locator(this.newProjectPageElements.catagorySelectionField)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component General Section Catagory Selection Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectCatagory() {
                const ele = await this.page.locator(this.newProjectPageElements.partsCatagory)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component General Section Catagory Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnShowOnCustomizeBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.showOnCustomizeCheckBox)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component General Section Show On Customize Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnNextStepBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.nextStpeBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(6000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component General Section Next Step Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputPartPrivetPrice() {
                const ele = await this.page.locator(this.newProjectPageElements.privetUserPriceInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Mint Section Privet Price Input Field Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputCommarcialPrice() {
                const ele = await this.page.locator(this.newProjectPageElements.commercialUserPrice)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Mint Section Commarcial Price Input Field Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnTheConfirmCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.confirmAddionalGasFeeCheckBox)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Mint Section Confirm Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnAGreeBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.agreeBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(10000)
                        // await this.page.waitForSelector(this.newProjectPageElements.congratulationsText)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Mint Section Agree Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async verifyCongrationsText() {
                const ele = await this.page.locator(this.newProjectPageElements.congratulationsText)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Mint Section Congrations Text Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnAddNewPartBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.addNewPartBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Parts | Added Part or component Mint Section Add New Part Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        //start add new electronic part ----------------------------------------------------------------------------

        async clickOnEletronicsLayer() {
                const ele = await this.page.locator(this.newProjectPageElements.electronicsLayer)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronic Part Layer Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectPublicPackage() {
                const ele = await this.page.locator(this.newProjectPageElements.publicPackage)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Add Part | Public Package 4N26 Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnConfigarationSectionNextBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsSectionNextBtn).nth(0)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Configure | Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnChartConfigration() {
                const ele = await this.page.locator(this.newProjectPageElements.chartConfig)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Chart Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickToSelectGraphType() {
                const ele = await this.page.locator(this.newProjectPageElements.graphBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Graph Type Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputXChartLabel() {
                const ele = await this.page.locator(this.newProjectPageElements.labelXInputField)
                try {
                        await ele.fill("1")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Label X Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputYChartLabel() {
                const ele = await this.page.locator(this.newProjectPageElements.labelYInputField)
                try {
                        await ele.fill("2")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Label Y Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputCatagoryData() {
                const ele = await this.page.locator(this.newProjectPageElements.catagoryInputField)
                try {
                        await ele.fill("2")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Catagory Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputParcentageData() {
                const ele = await this.page.locator(this.newProjectPageElements.parcentageInputField)
                try {
                        await ele.fill("1")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Parcentage Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickElectronicsSectionNextBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsSectionNextBtn).nth(1)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Electronics | Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async codeSectionNextBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.partsSectionNextBtn).nth(2)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | Code | Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputPartNameForAddedPart() {
                const ele = await this.page.locator(this.newProjectPageElements.electronicPartsNameInputField)
                try {
                        await ele.fill("Electronic Part")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Name Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnElectronicsCatagorySelectionField() {
                const ele = await this.page.locator(this.newProjectPageElements.catagorySelectionField)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Catagory Selection Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectElectronicsCatagory() {
                const ele = await this.page.locator(this.newProjectPageElements.cagagory)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Ad84 Catagory Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputFreeStyleCatagory() {
                const ele = await this.page.locator(this.newProjectPageElements.freeStyleCatagoryInputField)
                try {
                        await ele.fill("Free Style")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | FreeStyle Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectPublicType(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.typeSelectionField)
                try {
                        await ele.selectOption(project)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Type Selection Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inpuDesctiption() {
                const ele = await this.page.locator(this.newProjectPageElements.desctiptionInputField)
                try {
                        await ele.fill("Demo Free Style Description")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Description Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async clickToAttachDataSheet() {
                const ele = await this.page.locator(this.newProjectPageElements.datasheetAttachmentInputField)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Data Sheet Chose file Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCustomizeCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.showOnCustomizeBtnCheckBox)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Data Sheet Chose file Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickToOpenLanguageTypeSelectOption(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.languageTypeSelectionField)
                try {
                        await ele.selectOption(project)
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Language Type Selection Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async tsFileUploadHelper() {
                const filePath0 = "/testData/helper.ts"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async clickToUPloadLanguage() {
                const ele = await this.page.locator(this.newProjectPageElements.baseCodeUploadInputField)
                try {
                        await ele.setInputFiles("./My-Reporter.js")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Language Upload Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSubmitElectronicsPart() {
                const ele = await this.page.locator(this.newProjectPageElements.submitButton)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Submit Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnFinishBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.finishBtn)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Electronics | General | Finish Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        //start add new Code part ----------------------------------------------------------------------------

        async inputCodeBlockName() {
                const ele = await this.page.locator(this.newProjectPageElements.blockNameInputField)
                try {
                        await ele.fill("Demo Code")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Block Name Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnColorSection() {
                const ele = await this.page.locator(this.newProjectPageElements.colorInputSection)
                try {
                        await ele.click({ button: "left" })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Color Section Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickOnCatagorySection() {
                const ele = await this.page.locator(this.newProjectPageElements.catagorySelectionField)
                try {
                        await ele.click({ button: "left" })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Catagory Section Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectCodeCatagory() {
                const ele = await this.page.locator(this.newProjectPageElements.codeCatagory)
                try {
                        await ele.click({ button: "left" })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Catagory Section Code Catagory Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickOnPartNextStepBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.nextStpeBtn)
                try {
                        await ele.click({ button: "left" })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Next Step Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async checkValueInput() {
                const ele = await this.page.locator(this.newProjectPageElements.valueInputFieldCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Value Input Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputVariableName() {
                const ele = await this.page.locator(this.newProjectPageElements.inputVariableNameInputField)
                try {
                        await ele.fill("Demo VAiable Name")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Value Input Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async checkPreviousConnector() {
                const ele = await this.page.locator(this.newProjectPageElements.previousConnectorCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Previous Connector Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async checkNextConnector() {
                const ele = await this.page.locator(this.newProjectPageElements.nextConnectorCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Next Connector Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async checkIsOutput() {
                const ele = await this.page.locator(this.newProjectPageElements.isOutPutChecBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Is Output Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async checkInputInline() {
                const ele = await this.page.locator(this.newProjectPageElements.inputInlineCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Input Inline Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async checkStatementInput() {
                const ele = await this.page.locator(this.newProjectPageElements.stateMentInputCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Statement Input Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async checkAppendValueInput() {
                const ele = await this.page.locator(this.newProjectPageElements.appendValueInputCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Append Value Input Check Box Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async input2VariableName() {
                const ele = await this.page.locator(this.newProjectPageElements.inputVeriableNameInputField)
                try {
                        await ele.fill("Demo VAiable Name")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Variable Name Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPartSubmitBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.addPartSubmitBtn)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Submit Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputCodePartName() {
                const ele = await this.page.locator(this.newProjectPageElements.partCodeNameInputField)
                try {
                        await ele.fill("Demo Code Name")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | General Name Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputCodePartDescription() {
                const ele = await this.page.locator(this.newProjectPageElements.codeDescriptionInputField)
                try {
                        await ele.fill("Demo Description")
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | General Description Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickOnShowOnCustomizeCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.showOnCustomizeBtnCheckBox)
                try {
                        await ele.check({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | Add Part Section Submit Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnGeneralSectionNextStepBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.nextStpeBtn).nth(1)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Part | Code | General Section Next Step Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        //Component Function With 3D Case, Electronics And Code

        async inputComponentName() {
                const ele = await this.page.locator(this.newProjectPageElements.component3DCaseNameInputField)
                try {
                        await ele.fill("Demo Component")
                } catch (error) {
                        throw new Error(`User Dashboard | Component | Added component General Section Name Input Field Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async clickOnComponentWithCodeBuiltInSearchBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.codeSearchButton).nth(0)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Component | Code | Built In Search Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnBuiltInBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.builtInBtn)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | New Component | Code | Built In Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }















        //Buy Project From NFT MarketPlace
        async clickOnProjectBuyNowBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.buyNowBtnEle).nth(0)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`NFT Marketplace | Project | Buy Now Button Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }











































        async clickOnQuickStartBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.quickStartBtn)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async clickQuickStartBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.quickStartBtn)

                try {
                        await this.page.waitForTimeout(2000)
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnNewPartBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.newPartBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | New Part Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnNewComponentBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.newComponentBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | New Component Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOn3CCaseBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.threeDCaseBtn).nth(0)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | New Part | 3D Case Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickNewProjectBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.newProjectBtn)
                await this.page.waitForSelector(this.newProjectPageElements.newProjectBtn)
                try {
                        await ele.click({ button: "left", delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickNewProjectByYourselfBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.newProjectByYourselfBtn)
                await this.page.waitForSelector(this.newProjectPageElements.newProjectByYourselfBtn)
                try {
                        await ele.click({ button: "left", delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | New Project By Yourself Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async inputIdeaForNewProject(text: string) {
                const ele = await this.page.locator(this.newProjectPageElements.typeIdeaInputField)
                try {
                        await ele.fill(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project Idea Input Button is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickGoBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.goBtn)
                try {
                        await ele.click({ button: "left", delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project Go Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnApproveBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.approveBtn)
                try {
                        await ele.click({ button: "left", delay: 100 })
                } catch (error) {
                        throw new Error(`Home Sceen | Cookies Approve Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async clickDesignNewProjectByYourself() {
                const ele = await this.page.locator(this.newProjectPageElements.newProjectByYourselfBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project Modal Add New Project Yourselft Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnNewComponentElectronicsSearchBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.addPartsOrComponentSearchIcon).nth(0)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForLoadState(
                                "networkidle"
                        )
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | New Component | Electronics |  Add Parts or Component Search Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickAddPartsOrComponentsSearchIcon() {
                const ele = await this.page.locator(this.newProjectPageElements.addPartsOrComponentSearchIcon).nth(1)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(3000)
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Project | Add Parts or Component Search Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickCodeSectionAddPartsOrComponentsSearchIcon() {
                const ele = await this.page.locator(this.newProjectPageElements.addPartsOrComponentSearchIcon).nth(3)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Project | Cover Section Add Parts or Component Search Button Is Not Visible | Could not find locator:"${error}"`)
                }

        }
        async clickOnCoverSectionSearchBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionSearchBtn).nth(2)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Project | Cover Section Add Parts or Component Search Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickTakeATourStartBtn() {
                // await this.page.waitForSelector(this.newProjectPageElements.getStartedBtn)
                const ele = await this.page.locator(this.newProjectPageElements.getStartedBtn).nth(0)
                try {
                        // if (await ele.isVisible()) {
                        await ele.click({ button: 'left', delay: 100, force: true })
                        // }

                } catch (error) {
                        // throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Component Text Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickTakeATourSkipBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.takeAtourSkipBtn).nth(0)
                try {
                        // if (await ele.isVisible()) {
                        await ele.click({ button: 'left', delay: 100 })
                        // }
                } catch (error) {
                        // throw new Error(`User Dashboard | Quick Start | Cover Add Component | Take A Tour Skip Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async searchPartsAndComponents(text: string) {
                const ele = await this.page.locator(this.newProjectPageElements.addPartsOrComponentSearchInputfield).nth(1)
                await this.page.waitForSelector(this.newProjectPageElements.atmegaParts)
                try {
                        // await ele.clear()
                        await ele.type(text, { delay: 50 })
                        await this.page.waitForTimeout(3000)


                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Input Functionality Does Not Work Properly | Could not find locator:"${error}"`)
                }
        }
        async searchCodePartsAndComponents(text: string) {
                const ele = await this.page.locator(this.newProjectPageElements.codeAddPartsOrComponentSearchInputfield).nth(1)
                try {
                        await this.page.getByRole('textbox', { name: 'Add parts or components' }).fill(text)
                        // await ele.fill(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Input Functionality Does Not Work Properly | Could not find locator:"${error}"`)
                }
        }
        async searchCoverPartsAndComponents(text: string) {
                const ele = await this.page.locator(this.newProjectPageElements.coverAddPartsOrComponentSearchInputfield)
                try {
                        await ele.clear()
                        await ele.type("" + text, { delay: 50 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Input Functionality Does Not Work Properly | Could not find locator:"${error}"`)
                }
        }

        async clearCoverPartsAndComponents() {
                const ele = await this.page.locator(this.newProjectPageElements.coverAddPartsOrComponentSearchInputfield)
                try {
                        await ele.clear()
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Input Functionality Does Not Work Properly | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSectionAll3DModelPartBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionParts)
                try {

                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Section All 3D Model Parts And Components Search Functionality Does not Work properly QA Electronics Parts Is Not Found | Could not find locator:"${error}"`)
                }
        }

        async clickOnQAElectronicsPartsComponent() {
                const ele = await this.page.locator(this.newProjectPageElements.qaElectronicsPartsBtn).first()
                // const QaParts = await this.page.locator(this.newProjectPageElements.qaTestCatagory).first()

                try {

                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                        // await QaParts.click({ button: 'left', delay: 100 })

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Parts And Components Search Functionality Does not Work properly QA Electronics Parts Is Not Found | Could not find locator:"${error}"`)
                }
        }
        async clickOnPremiumPart() {
                const ele = await this.page.locator(this.newProjectPageElements.premiumPart).nth(0)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(5000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Parts And Components Preimium Parts Is Not Found | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectPrimiumParts() {
                const ele = await this.page.locator(this.newProjectPageElements.qaElectronicsPremiumPartsBtn).nth(0)

                try {
                        await ele.click({ force: true })
                        // await this.page.waitForTimeout(5000)
                        // await this.page.waitForSelector(this.newProjectPageElements.partsComponentUseBtn)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Parts And Components Search Functionality Does not Work properly QA Electronics Parts Is Not Found | Could not find locator:"${error}"`)
                }
        }
        async clickToSelectQAElectronicsPartsComponent() {
                const ele = await this.page.locator(this.newProjectPageElements.qaElectronicsPartsSelectionBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | QA Electronics Parts Is Not Found | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectAtmegaPartsComponent() {
                const ele = await this.page.locator(this.newProjectPageElements.searchResultForPartsAndComponets)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Parts And Components Search Functionality Does not Work properly | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectionCoverSectio3DPart() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSection3DModelAutomationParts)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Section 3D Model Parts Is Not Showing | Could not find locator:"${error}"`)
                }
        }

        async clickOnAtmegaPublicOption() {
                const ele = await this.page.locator(this.newProjectPageElements.atmegaPublicOption)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Atmega Public Option Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectAtmegaParts() {
                const ele = await this.page.locator(this.newProjectPageElements.atmegaFirstParts).last()
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Atmega First Parts Does not Showing parts Name[ATMEGA16A-PU] | Could not find locator:"${error}"`)
                }
        }



        async clickUseBtn() {


                const ele = await this.page.locator(this.newProjectPageElements.partsComponentUseBtn)
                const AlerBtn = await this.page.locator(this.newProjectPageElements.alertNoBtn)
                await this.page.waitForSelector(this.newProjectPageElements.partsComponentUseBtn)
                try {

                        await this.page.waitForTimeout(2000)
                        await this.page.getByRole('button', { name: 'use' }).click({ force: true });
                        // await ele.click()
                        await this.page.waitForTimeout(6000)
                        if (await AlerBtn.isVisible()) {
                                await this.page.waitForTimeout(2000)
                                await ele.click({ button: 'left', delay: 100, force: true })
                        }
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Parts Components Element Use Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async IfAlertTextIsVisibleThenClickOnIt() {
                const ele = await this.page.locator(this.newProjectPageElements.alertNoBtn)
                try {
                        if (await ele.isVisible()) {
                                await ele.click({ button: 'left', delay: 100 })
                                await this.page.waitForTimeout(2000)
                        }

                } catch (error) {
                        // throw new Error(`User Dashboard | Quick Start | Add New Project | Parts Components Element Use Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnLoadPriveousProjectNoBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.noBtn)
                try {
                        if (await ele.isVisible()) {
                                await ele.click({ button: 'left', delay: 100 })
                                await this.page.waitForTimeout(2000)
                        }

                } catch (error) {
                        // throw new Error(`User Dashboard | Quick Start | Add New Project | Parts Components Element Use Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async verifyAfterAddingPremiumPartsThenSuccessfullyUpdatePrice() {
                const ele = await this.page.locator(this.newProjectPageElements.priceForPrivetPartsBtn).screenshot()
                try {
                        await expect.soft(ele).toMatchSnapshot("Updated_Privet_Price.png")
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | After Adding Privet Parts Then Does Not Updated Parts Amount | Could not find locator:"${error}"`)
                }
        }

        async clickOnNextBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.nextBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electron Section Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnElectroncisSectionSubmitBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.electronicSectionSubmitBtn).nth(2)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electron Section Submit Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCodeSection() {
                const ele = await this.page.locator(this.newProjectPageElements.codeSectionBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Code Secton Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSection() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSection)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSectionHomeFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionHomeFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Home Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSectionObjectFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionObjectFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Object Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSectionFeatureFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionFeatureFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Feature Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSectionSketchingFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionSketchingFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Sketching Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSection3DSketchingFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSection3DSketchingFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton 3DSketching Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCoverSectionAssembleFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionAssembleFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Assemble Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCoverSectionSolidsFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionSolidsFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Solids Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCoverSectionRelateFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionRelateFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Relate Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCoverSectionSurfacingFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionSurfacingFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Surfacing Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCoverSectionPMIFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionPMIFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton PMI Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCoverSectionSimulationFilterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.coverSectionSimulationFilterBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Cover Secton Simulation Filter Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnSystemDefineBuildInCode() {
                const ele = await this.page.locator(this.newProjectPageElements.systemDefinedBuildIn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Code Section Parts And Components System Defined Built In Section Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnSystemDefineBuildInLogicCode() {
                const ele = await this.page.locator(this.newProjectPageElements.loginCode)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Code Section Parts And Components System Defined Built In Logic Code Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnSystemDefineBuildInFirstLogicCode() {
                const ele = await this.page.locator(this.newProjectPageElements.firstLogic)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Code Section Parts And Components System Defined Built In First Logic Code Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnGeneralTab() {
                const ele = await this.page.locator(this.newProjectPageElements.ganeralTab)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(6000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | General Section Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnYesButtonIfVisible() {
                const ele = await this.page.getByText(this.newProjectPageElements.yesBtn)
                try {
                        if (await ele.isVisible()) {
                                await ele.click({ button: 'left', delay: 100 })
                                await this.page.waitForTimeout(2000)
                        }
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | General Section Yes Text Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnGeneralSectonCreateProjectBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.ganeralTabCreateBtn)
                await this.page.waitForSelector(this.newProjectPageElements.ganeralTabCreateBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | General Section Create Project Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCodeSectionCreateBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.codeCreateBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Code Section Create Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnGeneralSectionCreateBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.ganeralTabCreateBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | General Section Create Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickGiveToTheComunityBtn() {
                // await this.page.waitForSelector(this.newProjectPageElements.giveToTheComunityBtn)
                const ele = await this.page.locator(this.newProjectPageElements.giveToTheComunityBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickChooseProjectBtn(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.chooseProjectBtn)
                try {
                        await ele.selectOption(project)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Choose Project Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputNameOfProject(name: string) {
                const ele = await this.page.locator(this.newProjectPageElements.projectNameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Project Name Input Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToChooseLicense() {
                const ele = await this.page.locator(this.newProjectPageElements.chooseLicenseBtn)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Choose License Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToSelectMITLicense() {
                const ele = await this.page.locator(this.newProjectPageElements.mitLicense)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Choose License Mit License Option Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnBlockChainSelectionOption() {
                const ele = await this.page.locator(this.newProjectPageElements.blockChainMintChooseBtn)
                try {
                        await ele.click({ delay: 1000 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Choose BlockChain Mint Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToChooseBlockChainMint(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.blockChainMintChooseBtn)
                try {
                        await ele.selectOption(project)
                        await this.page.waitForTimeout(5000)
                        await this.page.waitForSelector(this.newProjectPageElements.collectionChooseBtn)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Choose BlockChain Mint Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToChooseProjectCollections() {
                const ele = await this.page.locator(this.newProjectPageElements.collectionChooseBtn)
                try {
                        await ele.click()
                        await this.page.waitForTimeout(3000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Colection Choose Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToChooseProjectCollection(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.collectionChooseBtn)
                try {
                        await ele.selectOption(project, { timeout: 2000 })
                        await this.page.waitForTimeout(5000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Colection Choose Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnBuyListingType() {
                const ele = await this.page.locator(this.newProjectPageElements.buyNowBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Colection Choose Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToSelectBuyListingType(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.buyNowBtn)
                try {
                        await ele.click()
                        await this.page.waitForTimeout(2000)
                        await ele.selectOption(project, { timeout: 2000 })

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Colection Choose Button Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputPriceForSellProject(name: string) {
                const ele = await this.page.locator(this.newProjectPageElements.priceInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Price Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputRoyalityForSellProject(name: string) {
                const ele = await this.page.locator(this.newProjectPageElements.royalityInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Royality Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputProjectStoryForSellProject(name: string) {
                const ele = await this.page.locator(this.newProjectPageElements.projectStory)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Project Story Input Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickConfirmAdditional() {
                const ele = await this.page.locator(this.newProjectPageElements.additionalGasFeeCheckBox)
                try {
                        await ele.check()
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Setpe Three Confirm Check Box Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickConfirmRightOwner() {
                const ele = await this.page.locator(this.newProjectPageElements.righFulOwnerConfirmCheckBox)
                try {
                        await ele.check()
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Setpe Three Confirm Right Owner Check Box Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPayAndMintBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.payAndMintBtn)
                try {
                        await ele.click()
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Setpe Three Pay And Mint Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnMintBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.mintBtn)
                try {
                        await ele.click()
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Setpe Three Mint Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPriceTokenSelectionField() {
                const ele = await this.page.locator(this.newProjectPageElements.priceTokeSelectionField)
                try {
                        await ele.click()
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Setpe Two Price Selection Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clcikToSelectPriceToken(project: string) {
                const ele = await this.page.locator(this.newProjectPageElements.priceTokeSelectionField)
                try {
                        await ele.selectOption(project, { timeout: 2000 })

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Setpe Two Price Selection Field Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputProjectDescription(name: string) {
                const ele = await this.page.locator(this.newProjectPageElements.projectDescription)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Project Descitions Input Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickStepOneNextBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.stepOneNextBtn)
                try {
                        await ele.click({ button: 'left', force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step One Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputProjectStory(name: string) {
                const ele = await this.page.locator(this.newProjectPageElements.projectStory)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step Two Project Story Input Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickVideoEditBtn() {
                try {
                        await this.page.getByRole('button', { name: 'Edit' }).click({ force: true });
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step Two Video Edit Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickVideoEditSectionSaveBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.videoEditSectionSaveBtn)
                try {
                        await ele.click({ button: 'left', force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step One Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToCloseVideoEditor() {
                const ele = await this.page.locator(this.newProjectPageElements.videoEditorCloseBtn)
                try {
                        await ele.click({ button: 'left', force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step Two Video Editor Close Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToDisableNewsFeedShare() {
                const ele = await this.page.locator(this.newProjectPageElements.newFeedShowEnableDisbleBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step Two Enable Disable Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToConfirmConditionCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.confirmCheckBox)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step Two Confrim CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickStepTwoGiveTheComunityBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.stepTwoGiveToTheComunityBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Step Two Give To The Comunity Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnConnectWalletBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.connectWalletBtn)
                try {
                        if (await ele.isVisible()) {
                                await ele.click({ button: 'left', delay: 100 })
                        }

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create Connect Wallet Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnMetaMaskBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.metaMaskBtn)
                try {
                        if (await ele.isVisible()) {
                                await ele.click({ button: "left" }),
                                        await this.page.waitForTimeout(4000)
                        }

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Connect Wallet Meta Mask Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async approveMetaMask() {

                // const approveSpending = async (page: Page) => {
                const popup = await this.page.context().waitForEvent("page");
                await popup.getByRole("button", { name: "Next" }).click();
                await popup.getByRole("button", { name: "Connect" }).click();

                // await popup.getByRole("button", { name: "Approve" }).click();
                // };

        }

        async clickOnContinueButton() {
                const ele = await this.page.locator(this.newProjectPageElements.contineuBtn)
                try {
                        await this.page.waitForTimeout(3000)
                        if (await ele.isVisible()) {
                                await ele.click({ button: 'left', delay: 100 })
                                await this.page.waitForTimeout(8000)
                        }
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Continue Meta Mask Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCheckOutBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.checkOutBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(5000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity CheckOut Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPaypalSectionConfirmCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.paypalSectionConfirmationCheckBox)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(5000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Check Box Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnMyProjectPage() {
                const ele = await this.page.locator(this.newProjectPageElements.myProjectPageBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | My Project Page Element Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPayWithPaypalBtn() {
                const ele = await this.page.getByTitle(this.newProjectPageElements.palypalBtn).first()

                try {
                        const [newTab] = await Promise.all([
                                this.page.waitForEvent("popup"),
                                await ele.click({ button: "left" }),
                                await this.page.waitForTimeout(7000)
                        ]);
                        return newTab
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Pay With Paypal Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputPaypalEmail(email: string) {
                const ele = await this.page.locator(this.newProjectPageElements.playPalSectionEmailField)
                try {
                        await ele.fill(email)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Email Input Filed Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputPaypalPassword(pass: string) {
                const ele = await this.page.locator(this.newProjectPageElements.playPalSectionPasswordField)
                try {
                        await ele.fill(pass)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Password Input Filed Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPaypaSectionNextBtn() {
                const ele = await this.page.getByText(this.newProjectPageElements.nextBtnForPapPalSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnLoginBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.paypalSectionLoginBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Login Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnLoginButton() {
                const ele = await this.page.locator(this.newProjectPageElements.signUpBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Login Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPaypalPaymentConfirmBtn() {
                const ele = await this.page.getByText(this.newProjectPageElements.paymentSubmitBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Payment Confirm Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnSellProjectCreateBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.sellProjectBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Sell Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickOnElectronicsEditBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.editBtnOnElectronicSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electronics Section Edit Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnElectronicsViewBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.viewBtnOnElectronicSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electronics Section View Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnElectronicsPlaceBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.placeBtnOnElectronicSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electronics Section Place Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnElectronicsDraweBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.drawBtnOnElectronicSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electronics Section Draw Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnElectronicsDesigneBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.designBtnOnElectronicSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Electronics Section Design Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        //start function for project send to manufacture
        async projecTypeSaveBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.projecTypetSaveBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Save Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async projectSaveBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.projectSaveBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Save Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnProjectThreeDotBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.projectThreeDotBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Details Three Dot Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSendProjectToManufacture() {
                const ele = await this.page.locator(this.newProjectPageElements.projectSendToManufactureBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForNavigation()
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add New Project | Project Details Three Dot Section Project Manufacture Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnSendedProjectThreeDotOnTable() {
                const ele = await this.page.locator(this.newProjectPageElements.tableProjectThreeDot).nth(-3).last()
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Seneded Manufacture | Project Three Dot Button In The Table Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnChoseAndEditManufactureBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.editAndChoseManufactureBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Seneded Manufacture | Project Three Dot Edit And Chose Manufacture Button In The Table Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectManufacture() {
                const ele = await this.page.locator(this.newProjectPageElements.selectManufactureBtn).nth(0)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Manufacture Select Button In The Table Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToExpandSelectedManufacturePanel() {
                const ele = await this.page.locator(this.newProjectPageElements.expandSelectedManufactureBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Seneded Manufacture | Selected Manufacture Expand Button In The Table Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnSendOfferToManufacture() {
                const ele = await this.page.locator(this.newProjectPageElements.sendOfferToMarchentBtn).first()
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                        await this.page.waitForSelector(this.newProjectPageElements.requestSendedBtn)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Seneded Manufacture | Selected Manufacture Expand Section Send Offer Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnAvaterBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.avaterSection)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Seneded Manufacture | Avater Section Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnLogoutBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.logoutBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                        await this.page.waitForSelector(this.newProjectPageElements.signUpBtn)
                } catch (error) {
                        throw new Error(`User Dashboard | Send Manufacture | Seneded Manufacture | Logout Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnHomePageLogo() {
                const ele = await this.page.locator(this.newProjectPageElements.homePageLogo)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(5000)
                } catch (error) {
                        throw new Error(`User Dashboard | Home Page | Home Page Logo Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }


        async clickOnMenufecturedProject() {
                const ele = await this.page.locator(this.newProjectPageElements.sendedProjectOnMenufecture).last()
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Manufactur Dashboard | Send Manufacture | Seneded Manufacture | Sended Menufactured Project Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnSeeOfferBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.seeOfferBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Manufacture Dashboard | Send Manufacture | Seneded Manufacture | Manufacture Project Details Section See Offer Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnDatePickerBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.selectDateInputField)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Manufacture Dashboard | Send Manufacture | Seneded Manufacture | Manufacture Project Details Section See Offer Date Picker Input Field Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnNextMonthBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.selectDatePickerNextBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`Manufacture Dashboard | Send Manufacture | Seneded Manufacture | Manufacture Project Details Section See Offer Date Picker Next Month Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectDate() {
                const ele = await this.page.locator(this.newProjectPageElements.selectDate).last()
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`Manufacture Dashboard | Send Manufacture | Seneded Manufacture | Manufacture Project Details Section See Offer Date Selection Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnAcceptAgrimentCheckBox() {
                const ele = await this.page.locator(this.newProjectPageElements.acceptAgreementCheckBoxBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`Manufacture Dashboard | Send Manufacture | Seneded Manufacture | Manufacture Project Details Section See Offer Date Selection Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnAcceptOfferBtn() {
                const ele = await this.page.locator(this.newProjectPageElements.acceptOfferBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                        await this.page.waitForTimeout(2000)
                        await this.page.waitForSelector(this.newProjectPageElements.acceptedStatusLabel)
                } catch (error) {
                        throw new Error(`Manufacture Dashboard | Send Manufacture | Seneded Manufacture | Manufacture Project Details Section See Offer Accepted Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async jsonFileUploadHelper() {
                const filePath0 = "testData/Riders.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

}