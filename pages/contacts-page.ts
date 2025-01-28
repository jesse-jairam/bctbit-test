import type { Page } from 'playwright';
import { isVisible } from '../utilities/common-action'
import { expect } from '@playwright/test';

export class ContactsPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToContacts(){
        await this.page.click("//button[@title='Open menu']");
        await this.page.click("(//a[@href='/contacts/'])[1]");
    }

    async getPolandPhoneNumber(){
        return this.page.locator("(//a[contains(@class,'contact-info_link')])").first().textContent();
    }

    async validateEstoniaPhoneEmail(){
        const pageText = await this.page.textContent("(//a[contains(@class,'contact-info_link')])[3]")
        expect(pageText).toContain('+372 8 803 222')
        const phoneText = await this.page.textContent("(//a[contains(@class,'contact-info_link')])[4]")
        expect(phoneText).toContain('info@btcbit.net')
    }

    async validatePolandPhoneEmail(){
        const pageText = await this.page.textContent("(//a[contains(@class,'contact-info_link')])[1]")
        expect(pageText).toContain('+48 588 813 222')
        const emailText = await this.page.textContent("(//a[contains(@class,'contact-info_link')])[2]")
        expect(emailText).toContain('info@btcbit.net')
    }
}