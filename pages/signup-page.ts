import type { Page } from 'playwright';
import { isVisible } from '../utilities/common-action'

export class SignUpPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterRegistrationDetails(email: string, password: string) {
        await this.page.fill('input[id="email"]', email);
        await this.page.fill('input[id="password"]', password);
        await this.page.fill('input[id="confirmPassword"]', password);
    }

    async agreeTerms() {
        await this.page.check('input[id="agreements"]')
    }

    async signUp() {
        await this.page.click('button[type="submit"]')
    }
}