import { test, expect } from '@playwright/test';

import { registrationdetails } from './test-data';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { log } from 'console';
import { ContactsPage } from '../pages/contacts-page';


test('Validate Phone number on Contact page', async ({ page }) => {
    const homepage = new HomePage(page);
    const contactpage = new ContactsPage(page);
    await homepage.open();
    await homepage.goToContacts();
    await contactpage.validateEstoniaPhoneEmail();
    await contactpage.validatePolandPhoneEmail();
  });