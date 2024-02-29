import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
export default class componentPage {
        // [x: string]: any;
        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }
        private componentPageElements = {
                addComponentText: "//span[text()='Add Component']",
                generalText: "//span[text()='General']",
                mintText: "//span[text()='Mint']",
                addedSuccessfullyText: "//span[text()='Added Successfully']",
                addPartsOrComponentSearchIcon: `[data-testid="SearchIcon"]`,
                addPartsOrComponentSearchInputfield: "//input[@placeholder='Add parts or components']",
                getStartedBtn: "//div[text()='Get Started']",
                outSideOfThePopUpModal: "//div[@data-testid='sentinelStart']/following-sibling::div[1]",
                takeAtourSkipBtn: "//button[@data-action='skip']",
                coverComponent: "//div[text()='COVER']",
                coverPartsAndComponentSearchInputField: "//input[@type='search']",
                automatedCratedParts: "//b[@title='Automated Parts']",
                partsUseBtn: "//div[text()='use']",
                nextBtn: "//div[text()='Next']",
                nameTitleText: "//p[@value='Name']",
                nameInputField: "//input[@placeholder='Component Name']",
                discriptionTitleText: "//p[text()='Description']",
                discriptionInputField: "//p[text()='Description']/following-sibling::textarea",
                catagoryTitleText: "//p[@value='Category']",
                catagorySelectionDropDownField: "//div[text()='Select Category']",
                coverCatagory: "//div[text()='COVER']",
                typeSelectionField: "//p[text()='Type']/following-sibling::select",
                selectionTypePublic: `[value="public"]`,
                selectionTypePrivet: `[value="privet"]`,
                nextStepBtn: "//div[text()='Next Step']",
                blockChainMintSelectionField: "//p[text()='Blockchain Mint']/following-sibling::select",





        }


        async clickAddPartsOrComponentsSearchIcon() {
                const ele = await this.page.locator(this.componentPageElements.addPartsOrComponentSearchIcon)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async verifyAddPartsOrComponentsPlaceholderText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.addPartsOrComponentSearchInputfield).getAttribute("placeholder")
                try {
                        await expect.soft(ele).toBe(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Input Field Placeholder Text Is Not Match | Could not find locator:"${error}"`)
                }
        }

        async searchPartsAndComponents(text: string) {
                const ele = await this.page.locator(this.componentPageElements.addPartsOrComponentSearchInputfield)
                try {
                        await ele.clear()
                        await ele.type("" + text, { delay: 50 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Parts or Component Search Input Functionality Does Not Work Properly | Could not find locator:"${error}"`)
                }
        }

        async clickAddComponentsSection() {
                await this.page.waitForSelector(this.componentPageElements.getStartedBtn)
                const ele = await this.page.locator(this.componentPageElements.getStartedBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Component Text Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickTakeATourSkipBtn() {
                const ele = await this.page.locator(this.componentPageElements.takeAtourSkipBtn)
                try {
                        await ele.click({ button: 'left', delay: 100 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Take A Tour Skip Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async ifGetStartBtnIsVisibleThenClick() {
                const ele = await this.page.locator(this.componentPageElements.getStartedBtn)
                try {
                        if (await ele.isVisible()) {
                                await ele.click({ button: 'left', delay: 100 })
                        }

                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Innovate Your World Section Is Not Showing | Could not find locator:"${error}"`)
                }
        }
        async verifyAddComponentText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.addComponentText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Cover Add Component Section Add Component Is Not Match | Could not find locator:"${error}"`)
                }
        }

        async selectCoverAsPartsOrComponent() {
                const ele = await this.page.locator(this.componentPageElements.coverComponent)
                try {
                        await ele.click({ button: "left", force: true })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component |  Search Functionality Work Small Latter Is Not Work Properly After Searching Cover Parts Then it's not showing | Could not find locator:"${error}"`)
                }
        }

        async searchCoverPartsOrComponent(text: string) {
                const ele = await this.page.locator(this.componentPageElements.coverPartsAndComponentSearchInputField)
                try {
                        await ele.fill(text)
                        await this.page.waitForSelector(this.componentPageElements.automatedCratedParts)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component |  Add New Parts Or Component Search Functionality Does Work | Could not find locator:"${error}"`)
                }
        }

        async clickCoverPartsOrComponent() {
                const ele = await this.page.locator(this.componentPageElements.automatedCratedParts)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Search Functionality Does Not Work Properly | Could not find locator:"${error}"`)
                }
        }

        async clickPartsUseBtn() {
                const ele = await this.page.locator(this.componentPageElements.partsUseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Cover Pars Use Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickNextBtn() {
                const ele = await this.page.locator(this.componentPageElements.nextBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Next Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async verifyComponentNameTitleText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.nameTitleText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Name Title Text Is Not Match | Could not find locator:"${error}"`)
                }
        }
        async inputComponentName(name: string) {
                const ele = await this.page.locator(this.componentPageElements.nameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Component Name Input Field is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async verifyComponentDescriptionTitleText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.discriptionTitleText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Description Title Text Is Not Match | Could not find locator:"${error}"`)
                }
        }

        async inputComponentDescription(discription: string) {
                const ele = await this.page.locator(this.componentPageElements.discriptionInputField)
                try {
                        await ele.fill(discription)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component | Component Description Input Field is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async verifyComponentCatagoryTitleText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.catagoryTitleText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Catagory Title Text Is Not Match | Could not find locator:"${error}"`)
                }
        }

        async clickComponentCatagorySelectionField() {
                const ele = await this.page.locator(this.componentPageElements.catagorySelectionDropDownField)
                try {
                        await ele.click({button: "left", delay:1000})
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Catagory Selection Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }
        async clickToSelectCoverCatagory() {
                const ele = await this.page.locator(this.componentPageElements.coverCatagory)
                try {
                        await ele.click({button: "left", delay:1000})
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Cover Catagory Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickTypeSelectionField() {
                const ele = await this.page.locator(this.componentPageElements.typeSelectionField)
                try {
                        await ele.click({button: "left", delay:1000})
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Type Selection Field Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickToSelectPublic() {
                const ele = await this.page.locator(this.componentPageElements.selectionTypePublic)
                try {
                        await ele.click({button: "left", delay:1000})
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Component Type Selection Public Is Not Visible | Could not find locator:"${error}"`)
                }
        }

        async clickNextStep() {
                const ele = await this.page.locator(this.componentPageElements.nextStepBtn)
                try {
                        await ele.click({button: "left", delay:1000})
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Next Step Button Is Not Visible | Could not find locator:"${error}"`)
                }
        }



        async verifySearchFunctionalityWorkProperly() {
                const ele = await this.page.locator(this.componentPageElements.coverComponent)
                try {
                        await expect.soft(ele).toBeVisible()
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Cover Add Component |  Search Functionality Work Small Latter Is Not Work Properly | Could not find locator:"${error}"`)
                }
        }

        async verifyGeneralText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.generalText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Cover Add Component Section General Text Is Not Match | Could not find locator:"${error}"`)
                }
        }
        async verifyMintText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.mintText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Cover Add Component Section Mint Text Is Not Match | Could not find locator:"${error}"`)
                }
        }

        async verifyAddedSuccessfullyText(text: string) {
                const ele = await this.page.locator(this.componentPageElements.addedSuccessfullyText)
                try {
                        await expect.soft(ele).toContainText(text)
                } catch (error) {
                        throw new Error(`User Dashboard | Quick Start | Add Component | Cover Add Component Section Added Successfully Is Not Match | Could not find locator:"${error}"`)
                }
        }





}