import { test as base, chromium, type BrowserContext } from '@playwright/test';
import metaMaskPage from '@pages/metamask.page';
const path = require('path');
const userDirData = path.join(__dirname, './Data');
const loadExtension = path.join(__dirname, 'C:/Users/AzmanSabbir/AppData/Local/Google/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn');

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, './metamask-chrome-11.12.4');
    // const pathToExtension = path.join(__dirname, './MetaMask.crx');

    const context = await chromium.launchPersistentContext(userDirData, {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });



    await use(context);
    await context.close();



  },
  extensionId: async ({ context }, use) => {
    /*
    // for manifest v2:
    let [background] = context.backgroundPages()
    if (!background)
      background = await context.waitForEvent('backgroundpage')
    */

    // for manifest v3:
    let [background] = context.serviceWorkers();
    if (!background)
      background = await context.waitForEvent('serviceworker');

    const extensionId = background.url().split('/')[2];
    await use(extensionId);


  },
});
export const expect = test.expect;

export { chromium };


