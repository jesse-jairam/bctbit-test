import type { Page } from 'playwright';
import { isVisible } from '../utilities/common-action'

export class HomePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://btcbit.net');
    }

    async isGetStartedDisplayed(): Promise<boolean> {
        return await isVisible(this.page, "//a[contains(@class,'header_signup__') and text()='Get Started']");
    } 

    async clickOnGetStarted() {
        await this.page.click("//a[contains(@class,'header_signup__') and text()='Get Started']");
    }

    async clickOnLogin() {
        await this.page.click("//a[contains(@class,'header_login__') and text()='Login']");
    }

    async goToContacts(){
        await this.page.click("//button[@title='Open menu']");
        await this.page.click("(//a[@href='/contacts/'])[1]");
    }
}