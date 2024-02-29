import { expect } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "playwright";
export default class LoginPage {
    // [x: string]: any;
    // private page: Page;
    // static buffer: void;
    // page: Page;
    // constructor(page: Page | Page) {
    //     this.page = page;
    // }

    constructor(private page: Page) {
    }
    private loginPageElements = {
        configurationText: "//h5[text()='Configurations']",
        triviaSestion: '//p[text()="Trivia"]',
        plusbutton: "(//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')])[1]",
        inputConfigrationsName: "//input[@type='string']",
        logoutBtn: "//p[text()='Logout']",
        dashboardBtn: "//li[@title='Dashboard']",
        loginBtn: "(//p[@value='Log in'])[2]",
        signInPageTitleText: "//p[text()='Sign in and start managing your Games!']",
        usernameInputField: "input[type='text']",
        passwordInputField: "input[type='password']",
        loginButton: `Log in`,
        submitButton: `//button[@fdprocessedid='b1heff']//div[1]`,
        invalidCredantialsAlertText: "text=Invalid credentials",
        okBtn: "text=Ok",
        usernameFieldRequirMassage: `//p[text()='"username" is not allowed to be empty']`,
        loginPageLogo: "//h1/preceding::div[@class='MuiBox-root css-uycfjs']",
        signinText: "//h1[text()='Sign in']",
        idLabel: "//label[text()='Id']",
        secretLabel: "//label[text()='Secret']",
        eyeBtn: "//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]",
        cookieCheckBox: `[type="checkbox"]`,
        approveBtn: "//div[text()='Approve']",
        wallateBtn: "(//div[contains(@class,'MuiAvatar-root MuiAvatar-circular')]//img)[1]",
        homeLogo: "(//img[@alt='ideeza'])[3]",
        userName: "//span[text()='Dev User']",
        getStartedBtn: "//div[text()='Get Started']",
        takeAtourSkipBtn: "//button[@data-action='skip']",
        deshboardBtn: "//div[text()='Dashboard']",
        newsFeedPageBtn: "//div[text()='News Feed']",
        playPalSectionPasswordField: "#password",
        playPalSectionEmailField: "#email",
        nextBtnForPapPalSection: "#btnNext",
        paypalSectionLoginBtn: "#btnLogin",
        paymentSubmitBtn: "#payment-submit-btn",
        startBtn: "//a[contains(text(),'Start Project')]",
        newProjectByYourselfBtn: "//div[text()='Click here to design new project by yourself!']",



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


    async clickLogoutBtn() {
        const ele = await this.page.locator(this.loginPageElements.logoutBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Home | Menu Bar | Logout Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickEyeBtn() {
        const ele = await this.page.locator(this.loginPageElements.eyeBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Home | Login Page | Eye Button Is Not Visble | Could not find locator:"${error}"`)
        }
    }

    async verifySigninTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.signinText)
        try {
            await expect(ele).toContainText("Sign in")
        } catch (error) {
            throw new Error(`Home | Login Page | Sign In Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifySecretLabelIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.secretLabel)
        try {
            await expect(ele).toContainText("Secret")
        } catch (error) {
            throw new Error(`Home | Login Page | Secret Text Label Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyIdLabelIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.idLabel)
        try {
            await expect(ele).toContainText("Id")
        } catch (error) {
            throw new Error(`Home | Login Page | Id Label Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyCueLogoIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.loginPageLogo)
        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home | Login Page | Login Page Logo Is Not visible | Could not find locator:"${error}"`)
        }
    }
    async clickApproveBtnIfVisible() {
        const ele = await this.page.locator(this.loginPageElements.approveBtn)
        try {
            if (await ele.isVisible()) {
                await ele.click({ force: true })
            }
        } catch (error) {
            throw new Error(`Home | Menu Bar | Login Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickLoginBtn() {
        const ele = await this.page.locator(this.loginPageElements.submitButton)
        try {
            await this.page.getByRole('button', { name: 'Log in' }).click();
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Home | Menu Bar | Login Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async clickHomeLoginBtn() {
        const ele = await this.page.getByText(this.loginPageElements.loginButton).nth(1)
        try {
            await ele.click({ button: "left", force: true })
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Home | Menu Bar | Login Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async verifyLogoutText() {
        const ele = await this.page.locator(this.loginPageElements.logoutBtn)
        try {
            await expect.soft(ele).toContainText("Logout")
        } catch (error) {
            throw new Error(`Home | Menu Bar | Logout Button Text Is Not Match | Could not find locator:"${error}"`)
        }
    }
    async clickOnDashboardBtns() {
        const ele = await this.page.locator(this.loginPageElements.dashboardBtn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Home | Menu Bar | Logout Button Text Is Not Match | Could not find locator:"${error}"`)
        }
    }

    async inputUserName(username: string) {
        const ele = this.page.locator(this.loginPageElements.usernameInputField)
        try {
            await ele.fill(username)
        } catch (error) {
            throw new Error(`Home | Login Page | UserName Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async inputPassword(password: string) {
        const ele = this.page.locator(this.loginPageElements.passwordInputField)
        try {
            await ele.fill(password)
        } catch (error) {
            throw new Error(`Home | Login Page | Password Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async inputSecret() {
        const ele = this.page.locator("//input[@type='password']")
        await ele.fill("Demo Data")
    }

    async shouldBeshowInvalidCredentials() {
        const ele = this.page.locator(this.loginPageElements.invalidCredantialsAlertText)
        try {
            await expect.soft(ele).toContainText("Invalid credentials")
        } catch (error) {
            throw new Error(`Home | Login Page | Invalid credentials Text Is Not Match | Could not find locator:"${error}"`)
        }

    }
    async clickInvalidCredantialsWindowOkBtn() {
        const ele = this.page.locator(this.loginPageElements.okBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Home | Login Page | Ok button is not visibl | Could not find locator:"${error}"`)
        }
    }

    async verifySigninPageTitleTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.signInPageTitleText)
        try {
            await expect.soft(ele).toContainText("Sign in and start managing your Games!")
        } catch (error) {
            throw new Error(`Home | Login Page | Sign in and start managing your Games Title Text Is Not Match | Could not find locator:"${error}"`)
        }
    }

    async shouldShowUserNameIsNotEmpty() {
        const ele = await this.page.locator(this.loginPageElements.usernameFieldRequirMassage)
        try {
            await expect.soft(ele).toContainText(`"username" is not allowed to be empty`)
        } catch (error) {
            throw new Error(`Home | Login Page | Username field require massage is not found | Could not find locator:"${error}"`)
        }
    }


    async clickOnCookiesCheckBox() {
        const ele = await this.page.locator(this.loginPageElements.cookieCheckBox).nth(0)
        try {

            await ele.click({ button: "left", delay: 100 })

        } catch (error) {
            throw new Error(`Home Sceen | Cookies CheckBox Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnApproveBtn() {
        const ele = await this.page.locator(this.loginPageElements.approveBtn)
        try {
            // if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 100 })
            // }
        } catch (error) {
            throw new Error(`Home Sceen | Cookies Approve Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnWalletBtn() {
        const ele = await this.page.locator(this.loginPageElements.wallateBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Home Sceen | Wallet Btn Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnHomeLogo() {
        const ele = await this.page.locator(this.loginPageElements.homeLogo)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(5000)
        } catch (error) {
            throw new Error(`Home Sceen | Home Logo Btn Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickTakeATourSkipBtn() {
        const ele = await this.page.locator(this.loginPageElements.takeAtourSkipBtn)
        try {
            await ele.click({ button: 'left', delay: 100 })
        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Cover Add Component | Take A Tour Skip Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnDashboardBtn() {
        const ele = await this.page.locator(this.loginPageElements.deshboardBtn)
        try {
            await ele.click({ button: 'left', delay: 100 })
            await this.page.waitForTimeout(6000)
        } catch (error) {
            throw new Error(`User Dashboard | Dashboard  Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnNewsFeedPage() {
        const ele = await this.page.locator(this.loginPageElements.newsFeedPageBtn)
        try {
            await ele.click({ button: 'left', delay: 100 })
            await this.page.waitForTimeout(6000)
        } catch (error) {
            throw new Error(`User Dashboard | News Feed Page  Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickTakeATourStartBtn() {
        await this.page.waitForSelector(this.loginPageElements.getStartedBtn)
        const ele = await this.page.locator(this.loginPageElements.getStartedBtn)
        try {
            await ele.click({ button: 'left', delay: 100 })
        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Cover Add Component | Add Component Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnStartProjectBtn() {
        const ele = await this.page.locator(this.loginPageElements.startBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Home Sceen | Start Project button is not visible | Could not find locator:"${error}"`)
        }
    }
    async clickOnNewProjectByYourselftBtn() {
        const ele = await this.page.locator(this.loginPageElements.newProjectByYourselfBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Home Sceen | New Project By Yourselft button is not visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnUserProfileBtn() {
        const ele = await this.page.locator(this.loginPageElements.userName)
        try {
            await ele.click({ button: "left", delay: 100 })
        } catch (error) {
            throw new Error(`Home Sceen | User Profile button is not visible | Could not find locator:"${error}"`)
        }
    }

    async login(username: string, password: string) {

        await this.clickOnLoginBtn()
        await this.enterEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
        await this.page.waitForTimeout(4000)
        await this.page.waitForLoadState("networkidle")
        // await this.page.waitForSelector(this.loginPageElements.userName)
    }
    async loginNegative(invalidusername: string, invalidpassword: string) {
        await this.enterEmail(invalidusername);
        await this.enterLoginPassword(invalidpassword);
        await this.clickLoginBtn();
    }
    async enterEmail(emailaddress: string) {
        await this.page.locator("(//input[@type='email'])[3]")
            .type(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator("(//input[@type='password'])[3]")
            .type(password);
    }

    async clickOnLoginBtn() {
        await this.page.locator(this.loginPageElements.loginBtn)
            .click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
    }
    async inputPaypalEmail(email: string) {
        const emailField = await this.page.locator(this.loginPageElements.playPalSectionEmailField)
        try {
            if (await emailField.isVisible()) {
                await emailField.fill(email)
            }
        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Add New Project | PayPal Email Field Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async inputPaypalPassword(email: string) {
        const passWordFiled = await this.page.locator(this.loginPageElements.playPalSectionPasswordField)
        try {
            if (await passWordFiled.isVisible()) {
                await passWordFiled.fill(email)
            }
        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Add New Project | PayPal Email Field Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputPayPalCredentials(pass: string, email: string) {
        const emailField = await this.page.locator(this.loginPageElements.playPalSectionEmailField)
        const password = await this.page.locator(this.loginPageElements.playPalSectionPasswordField)
        const loginBtn = await this.page.locator(this.loginPageElements.paypalSectionLoginBtn)
        const nextBtn = await this.page.locator(this.loginPageElements.nextBtnForPapPalSection).isVisible()

        try {
            if (await loginBtn.isVisible()) {
                await emailField.fill(email)
                // await this.page.locator(this.loginPageElements.nextBtnForPapPalSection).click()
                await password.fill(pass)
                await loginBtn.click({ button: 'left', delay: 100 })
                await this.page.waitForTimeout(5000)
            }

        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Password Input Filed Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputEmail(pass: string, email: string) {
        const emailField = await this.page.locator(this.loginPageElements.playPalSectionEmailField)
        const password = await this.page.locator(this.loginPageElements.playPalSectionPasswordField)
        const loginBtn = await this.page.locator(this.loginPageElements.paypalSectionLoginBtn)
        const nextBtn = await this.page.locator(this.loginPageElements.nextBtnForPapPalSection).isVisible()

        try {
            if (await loginBtn.isVisible()) {
                await emailField.fill(email)
                // await this.page.locator(this.loginPageElements.nextBtnForPapPalSection).click()
                await password.fill(pass)
                await loginBtn.click({ button: 'left', delay: 100 })
                await this.page.waitForTimeout(5000)
            }

        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Password Input Filed Is Not Visible | Could not find locator:"${error}"`)
        }
    }


    async clickOnPayPalSectionNextBtn() {
        const ele = await this.page.locator(this.loginPageElements.nextBtnForPapPalSection)
        try {
            if (await ele.isVisible()) {
                await ele.click({ button: 'left', delay: 100 })
                await this.page.waitForTimeout(3000)
            }

        } catch (error) {
            // throw new Error(`User Dashboard | Quick Start | Add New Project | Playpal Section Next Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnPayPalLoginBtn() {
        const ele = await this.page.locator(this.loginPageElements.paypalSectionLoginBtn)
        try {
            if (await ele.isVisible()) {
                await ele.click({ button: 'left', delay: 100 })
                await this.page.waitForTimeout(5000)
            }

        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Login Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickOnPaypalPaymentConfirmBtn() {
        const ele = await this.page.locator(this.loginPageElements.paymentSubmitBtn)
        try {
            await ele.click({ button: 'left', delay: 100 })
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`User Dashboard | Quick Start | Add New Project | Project Create With Give To The Comunity Playpal Section Payment Confirm Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }




}