import componentPage from "@pages/Component.page";
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import signUpPage from "@pages/SignUp.page";
// import { test as baseTest } from "@playwright/test";
import { BrowserContext, chromium } from "playwright";
// import { Page } from "tests/fixtures/chrome-extension"
// import { test as base }  from "tests/fixtures/chrome-extension"
import { test as base } from "tests/QuickStart/global-setup"
import { Page } from "@playwright/test";


// import { test as baseTest }  from "tests/fixtures/chrome-extension"
import functions from "@testData/helper";
import testData from "@testData/testData";
import metaMaskPage from "@pages/metamask.page";
import CollectionPage from "pages/admin/Collection.page";

let page: Page;
const test = base.extend<{
    loginPage: LoginPage;
    functions: functions;
    testData: testData;
    signUpPage: signUpPage;
    componentPage: componentPage;
    newProjectPage: newProjectPage;
    metaMaskPage: metaMaskPage;
    collectionPage: CollectionPage
    // metaMaskPage: coll;


}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    signUpPage: async ({ page }, use) => {
        await use(new signUpPage(page));
    },
    componentPage: async ({ page }, use) => {
        await use(new componentPage(page));
    },
    newProjectPage: async ({ page }, use) => {
        await use(new newProjectPage(page));
    },
    metaMaskPage: async ({ page }, use) => {
        await use(new metaMaskPage(page));
    },

    collectionPage: async ({ page }, use) => {
        await use(new CollectionPage(page));
    },





})
export default test;
export const expect = test.expect;

