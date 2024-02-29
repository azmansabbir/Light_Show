import { expect } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "playwright";
export default class metaMaskPage {
        page: Page;

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
        constructor(page: Page) {
                this.page = page;
        }
        private metaMaskPageElements = {
                termsAgreeCheckBox: `[type="checkbox"]`,
                creatNewWalletBtn: `[data-testid="onboarding-create-wallet"]`,
                iAgreeBtn: `[data-testid="metametrics-i-agree"]`,
                newPasswordInputField: `[data-testid="create-password-new"]`,
                confirmPasswordInputField: `[data-testid="create-password-confirm"]`,
                createPasswordConfirmCheckBox: `data-testid="create-password-terms"`,
                createNewWalletBtn: `[data-testid="create-password-wallet"]`,
                remindeMeLateBtn: `Remind me later (not recommended)`,
                skipAccountSecutrityBtn: `[data-testid="skip-srp-backup"]`,
                gotItBtn: `Got it!`,
                gotItBtnOnAddNetwork: `Got it`,
                nextBtn: `[data-testid="pin-extension-next"]`,
                doneBtn: `Done`,
                popupCloseBtn: `[aria-label="Close"]`,
                addedNetworkSectionBtn: 'Ethereum Mainnet',
                addNetworkBtn: "Add network",
                addNetworkManuallyBtn: "Add a network manually",
                addNetworkSectionInputField: `[type="text"]`,
                addNetworkManuallySaveBtn: "Save",
                switchToPoligonTestNet: "Switch to Polygon Testnet",
                accountSelectionOpenBtn: `[data-testid="account-menu-icon"]`,
                importAccountBtn: "Import account",
                accountKayInputBtn: '[type="password"]',
                importBtn: `[data-testid="import-account-confirm-button"]`,
                passwordInputField: `[type="password"]`,
                unloackBtn: `[data-testid="unlock-submit"]`,
                nextBtnOnPopUP: `Next`,
                createListingText: " Create  Listing",
                metamaskHeaderLogo: ".app-header__metafox-logo--horizontal",
                unapproveListing: "Unapproved",
                confirmBtn: "Confirm",


        }



        async gotToUrl() {
                await await this.page.goto('chrome-extension://jemiocedphikojcheklknknaehfmoedk/home.html');
        }
        async approveMetaMask() {

                // const approveSpending = async (page: Page) => {
                const popup = await this.page.context().waitForEvent("page");
                await popup.getByRole("button", { name: "Next" }).click();
                await popup.getByRole("button", { name: "Connect" }).click();

                // await popup.getByRole("button", { name: "Approve" }).click();
                // };

        }
        async metaMaskUnlockHelper() {
                const ele = await this.page.locator(this.metaMaskPageElements.passwordInputField)
                const unloackBtn = await this.page.locator(this.metaMaskPageElements.unloackBtn)
                try {
                        await this.page.waitForSelector(this.metaMaskPageElements.metamaskHeaderLogo)
                        if (await unloackBtn.isVisible()) {
                                await ele.fill("secretpassword")
                                await unloackBtn.click({ force: true })
                        }

                } catch (error) {
                        throw new Error(`Inside MetaMask | New Password Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputUnlockPassword() {
                const ele = await this.page.locator(this.metaMaskPageElements.passwordInputField)
                try {
                        await ele.fill("secretpassword")
                } catch (error) {
                        throw new Error(`Inside MetaMask | New Password Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnUnlockBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.unloackBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | Temrs And Condition CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCreateListingTypeSection() {
                const ele = await this.page.getByText(this.metaMaskPageElements.createListingText).first()
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | Temrs And Condition CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToOpenUnApproveListing() {
                const ele = await this.page.getByText(this.metaMaskPageElements.unapproveListing).first()
                try {
                        await this.page.waitForTimeout(5000)
                        await ele.click({ button: "left", force: true })

                } catch (error) {
                        throw new Error(`Inside MetaMask | Temrs And Condition CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToConfirmUnApproveLisiting() {
                const ele = await this.page.getByText(this.metaMaskPageElements.confirmBtn).first()
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | Temrs And Condition CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickTermsAndConditionCheckBox() {
                const ele = await this.page.locator(this.metaMaskPageElements.termsAgreeCheckBox)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | Temrs And Condition CheckBox Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnCreateWalletBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.creatNewWalletBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | Create Wallet Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnIAgreeBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.iAgreeBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | i Agree Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputNewPassword() {
                const ele = await this.page.locator(this.metaMaskPageElements.newPasswordInputField)
                try {
                        await ele.fill("secretpassword")
                } catch (error) {
                        throw new Error(`Inside MetaMask | New Password Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputConfirmPassword() {
                const ele = await this.page.locator(this.metaMaskPageElements.confirmPasswordInputField)
                try {
                        await ele.fill("secretpassword")
                } catch (error) {
                        throw new Error(`Inside MetaMask | Confirm Password Input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCreatePasswordConfirmCheckBox() {
                const ele = await this.page.locator(this.metaMaskPageElements.termsAgreeCheckBox)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | create Password Confirm CheckBox Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnCreateNewWalletBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.createNewWalletBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | create New Wallet Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnRemindeMeLateBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.remindeMeLateBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | reminde Me Late Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickSkipAccountSecurityCheckBox() {
                const ele = await this.page.locator(this.metaMaskPageElements.termsAgreeCheckBox)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | reminde Me Late Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnSkipAccountSecutrityBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.skipAccountSecutrityBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | skip Account Secutrity Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnGotItBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.gotItBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | got it Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnNextBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.nextBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnDoneBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.doneBtn).last()
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | Done Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnPopupCloseBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.popupCloseBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | popup Close Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickAddedNetworkSection() {
                const ele = await this.page.getByText(this.metaMaskPageElements.addedNetworkSectionBtn)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | Added Network Section Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickAddNetworkBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.addNetworkBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickAddNetworkManuallyBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.addNetworkManuallyBtn).last()
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Manually Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputAddNetworkName() {
                const ele = await this.page.locator(this.metaMaskPageElements.addNetworkSectionInputField).nth(1)
                try {
                        await ele.fill("Polygon Testnet")
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section Name Input Field Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputAddNetworkUrl() {
                const ele = await this.page.locator(this.metaMaskPageElements.addNetworkSectionInputField).nth(2)
                try {
                        await ele.fill("https://polygon-mumbai.infura.io/v3/4ca16cf92c974dde8f9487c7d32b953a")
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section Url Input Field Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputAddNetworkChainId() {
                const ele = await this.page.locator(this.metaMaskPageElements.addNetworkSectionInputField).nth(3)
                try {
                        await ele.fill("80001")
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section Chain Id Input Field Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async inputAddNetworkCurrentSymbol() {
                const ele = await this.page.locator(this.metaMaskPageElements.addNetworkSectionInputField).nth(4)
                try {
                        await ele.fill("MATIC")
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section Current Symbol Input Field Btn Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnSaveBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.addNetworkManuallySaveBtn)
                try {
                        await ele.click({ button: "left", })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section Save Btn Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnSwitchToPoligonTestNet() {
                const ele = await this.page.getByText(this.metaMaskPageElements.switchToPoligonTestNet)
                try {
                        await ele.click({ button: "left", })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section switch To Poligon Test Net Btn Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnGotItBtnOnAddNetwork() {
                const ele = await this.page.getByText(this.metaMaskPageElements.gotItBtnOnAddNetwork)
                try {
                        await ele.click({ button: "left", })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | add Network Section Got It Btn Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickOnAccountSelectionOpenBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.accountSelectionOpenBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | Account Selection Open Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnImportAccountBtn() {
                const ele = await this.page.getByText(this.metaMaskPageElements.importAccountBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | import Account Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async inputAccountKay() {
                const ele = await this.page.locator(this.metaMaskPageElements.accountKayInputBtn)
                try {
                        await ele.fill("93be487cea0fb39c26e6bda2b01b55b015b617eea74cb45cff3f73e9b0c15d90")
                } catch (error) {
                        throw new Error(`Inside MetaMask | Account Kay input Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickOnImportBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.importBtn)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`Inside MetaMask | import Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }




        async clickNextBtn() {
                const ele = await this.page.locator(this.metaMaskPageElements.nextBtnOnPopUP)
                try {
                        await ele.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Inside MetaMask | next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }




}