import dappwright, { Dappwright, MetaMaskWallet } from "@tenkeylabs/dappwright";
import { expect, test as baseTest } from "@playwright/test";
import { test as base, chromium, type BrowserContext } from '@playwright/test';
const path = require('path');
const userDirData = path.join(__dirname, '/tests/QuickStart/User-Data-Dir/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.35.1_0');

export const test = base.extend<{
  context: BrowserContext;
  wallet: Dappwright;
}>({
  context: async ({ }, use) => {
    // Launch context with extension
    const pathToExtension = path.join(__dirname, '/MyMetamaskExtension');
    const [wallet, _, context,] = await dappwright.bootstrap("", {
      userDirData,


      wallet: "metamask",
      version: MetaMaskWallet.recommendedVersion,
      seed: "test test test test test test test test test test test junk", // Hardhat's default https://hardhat.org/hardhat-network/docs/reference#accounts
      headless: false,
      launchOptions: {
        userDataDir: userDirData
    },
      // args: [
      //   `--disable-extensions-except=${pathToExtension}`,
      //   `--load-extension=${pathToExtension}`,
      // ],
    });




    // Add Hardhat as a custom network
    await wallet.addNetwork({
      networkName: "Polygon Testnet",
      rpc: "https://polygon-mumbai.infura.io/v3/4ca16cf92c974dde8f9487c7d32b953a",
      chainId: 80001,
      symbol: "MATIC",
    });
    await wallet.importPK('17a75569989837200a68b0e0a41a19d0bd9996104011f098fecf912b6fcd8c20');


    await use(context);
  },




  wallet: async ({ context }, use) => {
    // await chromium.launchPersistentContext(userDirData, {
    //   headless: false,
    //   // other options
    // });
    const metamask = await dappwright.getWallet("metamask", context);

    // await metamask.createAccount()

    // await metamask.importPK("93be487cea0fb39c26e6bda2b01b55b015b617eea74cb45cff3f73e9b0c15d90")
    await use(metamask);

  },



});