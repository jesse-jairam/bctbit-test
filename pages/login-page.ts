import type { Page } from 'playwright';
import { isVisible } from '../utilities/common-action'

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterLoginDetails(email: string, password: string) {
        await this.page.fill('input[id="email"]', email);
        await this.page.fill('input[id="password"]', password);
    }

    async signIn() {
        await this.page.click('button[type="submit"]')
    }

    async isisErrorMessageLabelDisplayed(): Promise<boolean> {
        return await isVisible(this.page, "//div[contains(text(),'Invalid email or password')]");
    } 

    
}