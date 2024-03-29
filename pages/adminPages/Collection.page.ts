import { expect } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "playwright";
export default class CollectionPage {

    constructor(private page: Page) {
    }
    private collectionPageElements = {
        collectionPageBtn: "//div[text()='Collections']",
        addNewBtn: "//div[text()='Add New']",
        collectionImageUploderBtn: "//div[text()='Choose Image']",
        collectinNameInputField: "//p[text()='Name of Collection']/following-sibling::input",
        blockChainMintListBox: "//p[text()='Blockchain Mint']/following-sibling::select",
        blockChainMintForCampaignCreate: "(//p[@value='Blockchain Mint']/following::div[@class='w-[75%]']//select)[1]",
        collectionTypeListBox: `select[name="collectionType"]`,
        collectionDescriptionInputField: "//p[text()='Description']/following-sibling::textarea",
        agreeConfirmRadioBtn: "//input[@name='agree_confirm']",
        saveBtn: "Save",

        presellUtilityBtn: "//div[text()='Presell Utilty']",
        presellCampaign: "//div[text()='Presell Campaigns']",
        createNewCampaignBtn: "//div[text()='Create New Campaign']",
        presellCampaignNameInputField: "//input[@placeholder='Enter presell campaign name']",
        tokenListBox: "select[name='pricingToken']",
        collectionListBox: "select[name='collection']",
        nftPriceInputField: "input[name='nft_price']",
        campaignStartDateInputField: "input[placeholder='Enter start date']",
        campaignEndDateInputField: "input[placeholder='Enter end date']",
        dateInputField: `name="starts_at"`,
        todayDateBtn: "Today",
        campaignDescriptionInputField: "//textarea[@placeholder='Type the description here...']",
        nftNameInputField: "//input[@placeholder='Enter placeholder nft name']",
        nftDescriptionInputField: "textarea[name='placeholder_desc']",
        joinTheExclusivGroupRadioBtn: "//span[contains(@class,'MuiButtonBase-root MuiCheckbox-root')]//input[1]",
        subscriptionOfferListBox: "select[fdprocessedid='3ie4t5']",
        subDescountParcentage: "//input[@placeholder='Enter Percentage name']",
        subcriptionDurationListBox: `select[name="subscription_duration"]`,
        presellCampaignCreateBtn: "//div[text()='Create Presell Campaign']"







    }

    async clickOnCollectionPage() {
        const ele = await this.page.locator(this.collectionPageElements.collectionPageBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Admin | Collection Page Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnCollectionAddNewBtn() {
        const ele = await this.page.locator(this.collectionPageElements.addNewBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Admin | Collection Page | Add New Button Element Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnChooseBtn() {
        const ele = await this.page.locator(this.collectionPageElements.collectionImageUploderBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Admin | Collection Page | Collection Image Upload Element Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCollectionName(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.collectinNameInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Collection Page | Collection Name Input Field Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickToOpenBlockChainMintListBox() {
        const ele = await this.page.locator(this.collectionPageElements.blockChainMintListBox)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Admin | Collection Page | BlockChain Mint List Box Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickToSelectBlockChainMints(Name: string) {
        const ele = await this.page.locator(this.collectionPageElements.blockChainMintListBox).nth(0)
        try {
            await ele.selectOption(Name)
        } catch (error) {
            throw new Error(`Admin | Collection Page | BlockChain Mint ${Name} Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickToOpenCollectionTypeListBox() {
        const ele = await this.page.getByLabel(this.collectionPageElements.collectionTypeListBox).nth(0)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Admin | Collection Page | BlockChain Mint List Box Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickToSelectCollectioonType(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.collectionTypeListBox)
        try {
            await ele.selectOption(data)
        } catch (error) {
            throw new Error(`Admin | Collection Page | Collection Type ${data} Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCollectionDescription(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.collectionDescriptionInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Collection Page | Collection Description Input Field Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async checkConfirmBtn() {
        const ele = await this.page.locator(this.collectionPageElements.agreeConfirmRadioBtn)
        try {
            await ele.check({ force: true })
        } catch (error) {
            throw new Error(`Admin | Collection Page | Confrim Radio Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnSaveBtn() {
        const ele = await this.page.getByRole("button", { name: this.collectionPageElements.saveBtn })
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForSelector(this.collectionPageElements.addNewBtn)
        } catch (error) {
            throw new Error(`Admin | Collection Page | Save Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    //***Presell Utility */

    async clickOnPresellUitility() {
        const ele = await this.page.locator(this.collectionPageElements.presellUtilityBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Admin | Home Page | Presell Utility Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnPreselCampaignBtn() {
        const ele = await this.page.locator(this.collectionPageElements.presellCampaign)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Admin | Home Page | Presell Campaign Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickCreateNewCampaignBtn() {
        const ele = await this.page.locator(this.collectionPageElements.createNewCampaignBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Create New Campaign Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputPresellCampaignName(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.presellCampaignNameInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Campaign Name Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async selectNFTPriceToken(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.tokenListBox)
        try {
            await ele.selectOption(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | NFT Price Token List Box Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickToSelectBlockChainMintsForCampaign(Name: string) {
        const ele = await this.page.locator(this.collectionPageElements.blockChainMintForCampaignCreate).nth(0)
        try {
            await ele.selectOption(Name)
        } catch (error) {
            throw new Error(`Admin | Collection Page | BlockChain Mint ${Name} Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickToSelectCollectioonTypeForCampaign(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.collectionListBox)
        try {
            await ele.click()
            await ele.selectOption(data)
        } catch (error) {
            throw new Error(`Admin | Collection Page | Collection Type ${data} Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputNFTPrice(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.nftPriceInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | NFT Price Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnDatePicker() {
        const ele = await this.page.locator(this.collectionPageElements.campaignStartDateInputField)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Date Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCampaignStartDate(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.campaignStartDateInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Date Start Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCampaignEndDate(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.campaignEndDateInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Date End Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnTodayDateBtn() {
        const ele = await this.page.getByText(this.collectionPageElements.todayDateBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Today Date Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCampaignDescription(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.campaignDescriptionInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign Description Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCampaignNFTName(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.nftNameInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign NFT Name Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputCampaignNFTDescription(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.nftDescriptionInputField)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign NFT Description Input Field Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async checkJoinExclulsiveGroup() {
        const ele = await this.page.locator(this.collectionPageElements.joinTheExclusivGroupRadioBtn)
        try {
            await ele.check()
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign NFT Joind Exclusive Radio Button Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async selectDescountSubscription(data: string) {
        // const ele = await this.page.locator(this.collectionPageElements.subscriptionOfferListBox)
        const ele = await this.page.getByRole('main').getByRole('combobox').nth(3)
        try {
            await ele.selectOption(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign NFT Subscription Offer List Box Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputDescountParcentage(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.subDescountParcentage)
        try {
            await ele.fill(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign NFT Subscription Descount Parcentage Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async selectSubscriptionDuration(data: string) {
        const ele = await this.page.locator(this.collectionPageElements.subcriptionDurationListBox)
        try {
            await ele.selectOption(data)
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign NFT Subscription Duration Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnCreatePresellCampaignBtn() {
        const ele = await this.page.locator(this.collectionPageElements.presellCampaignCreateBtn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Admin | Presell Utility | Capaign Presell Create Button  Elelement Is Not Visible | Could not find locator:"${error}"`)
        }
    }







}
