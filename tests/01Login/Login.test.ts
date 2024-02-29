import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";
import { readFileSync } from "fs";


test("TLL001-01 | Login | Verify login with valid credentials", async ({ loginPage, page, browser }) => {

        await page.goto('/', { waitUntil: 'domcontentloaded' })

        await loginPage.clickApproveBtnIfVisible()
        await loginPage.clickHomeLoginBtn()

        await loginPage.login(data.email, data.password)


})

