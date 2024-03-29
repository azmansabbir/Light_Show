import { join } from 'path';
import type { PlaywrightTestConfig } from '@playwright/test';
const path = require('path');
// const pathToExtension = path.join(__dirname, './tests/fixtures/metamask-chrome-11.10.0');
const pathToExtension = path.join(__dirname, './tests/admin/MetaMask.crx');

const userDataDir = path.join(__dirname, '/tests/QuickStart/User-Data-Dir/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.35.1_0');
import ENV from "@utils/env";


const config: PlaywrightTestConfig = {
  //
  globalSetup: "utils/global-set.ts",
  // globalSetup: require.resolve("/global-setup.ts"),
  // globalTeardown: "global-setup.ts",
  // testDir: './tests',
  // globalSetup: "./global-auth.ts",
  testMatch: [
    //
    // "All.test.ts",

    "ID00-ProjectSetup.test.ts",

    "ID01-ProjectCreate_GWC.test.ts",
    "ID02-ProjectCreate_Sell.test.ts",

    "ID03-ProjectCreateForManufacture.test.ts",
    "ID04-ProjectSendToManufacture.test.ts",
    "ID05-ProjectAcceptByManufacture.test.ts",
    "ID06-ProjectPaymentFromUserSide.test.ts",

    "ID07-Part_3dCase.test.ts",
    "ID08-Part_Electronics.test.ts",
    "ID09-Part_Code.test.ts",

    "ID10-Component_3dCase.test.ts",
    "ID11-Component_Electronics.test.ts",
    "ID12-Component_Code.test.ts",

    "ID13-BuyProject.test.ts",
    // "auth.setup.ts",

    "collection.test.ts",
    "campaignCreate.test.ts",
    "buyUtility.test.ts",






  ],
  timeout: 1 * 30 * 10000,
  expect: {
    timeout: 6000

  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  // reporter: process.env.CI ? [["junit", {
  //   outputFile: "results.xml"
  // }]] : [["json", {
  //   outputFile: "report.json"
  // }], ["html", {
  //   open: "never"
  // }]],

  // reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],



  reporter: [["html", {
    open: "never"
  }], ['./My-Reporter.js']],

  // globalTeardown: require.resolve("./mailer.ts"),

  // globalTeardown: require.resolve("./global-setup.ts"),
  // globalSetup: ("global-setup.ts"),

  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: process.env.BASE_URL,
    launchOptions: {
      args: [
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
        '--no-sandbox',
        '--disable-features=UseOzonePlatform',
        `--use-file-for-fake-video-capture=${__dirname}/testData/videos/mobile.y4m`,
        // `--user-data-dir=${userDataDir}`,
        // `--disable-extensions-except=${pathToExtension}`,
        // `--load-extension=${pathToExtension}`,

        // `--disable-extensions-except=${pathToExtension}`,
        // `--load-extension=${pathToExtension}`
      ],
      slowMo: 100

    },

    permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1700, height: 920 },
    ignoreHTTPSErrors: true,
    // permissions: ["camera"],

    // storageState: "./auth.json",
    // actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "on",
    video: process.env.CI ? "off" : "off",
    screenshot: process.env.CI ? "on" : "on",
  },

  //                                 ^
  //                                 Provide types for the "option" fixture
  // projects: [
  //   {
  //     use: {


  //       // storageState: "./auth.json",
  //       baseURL: "https://frontdev.ideeza.com/",
  //       browserName: 'chromium',
  //       channel: 'chrome',
  //       viewport: { width: 1700, height: 920 },
  //       headless: process.env.CI ? true : false,

  //       // ^
  //       // Provide the paths to one or more extensions. On MacOS, spaces in paths are handled OK.
  //     },
  //   },
  // ],
};

export default config;