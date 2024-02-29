import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
export default class signUpPage {
    // [x: string]: any;
    private page: Page;
    // static buffer: void;
    constructor(page: Page) {
        this.page = page;
    }
    private signUpPageElements = {
        configurationText: "//h5[text()='Configurations']",


    }

    async clickHomeAvater() {
        const ele = this.page.locator('button').nth(2)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${ele}"`)
        }
    }





}