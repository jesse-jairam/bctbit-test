import type { Page } from 'playwright';
import { isVisible } from '../utilities/common-action'

export class ProfilePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterRegistrationDetails(email: string, password: string) {
        await this.page.fill('input[id="email"]', email);
        await this.page.fill('input[id="password"]', password);
        await this.page.fill('input[id="confirmPassword"]', password);
    }

    async isProfilePageLoaded(): Promise<boolean> {
        return await isVisible(this.page, "(//a[@href='/profile/'])[3]");
    }
}