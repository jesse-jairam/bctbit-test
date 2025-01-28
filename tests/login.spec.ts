import { test, expect } from '@playwright/test';

import { registrationdetails } from './test-data';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { log } from 'console';
import { ProfilePage } from '../pages/profile-page';


test('User can login successfully with valid credentials', async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const profilePage = new ProfilePage(page)
    await homepage.open();
    await homepage.clickOnLogin()
    await loginpage.enterLoginDetails(registrationdetails.email,registrationdetails.password);
    await loginpage.signIn();
    // Assertion that profile page header is on page
    const userIsLoggedIn = await profilePage.isProfilePageLoaded()
    expect(userIsLoggedIn).toBeTruthy();
    const currentUrl = page.url();
    // Assertion: Check that the current URL is https://btcbit.net/profile/
    expect(currentUrl).toBe('https://btcbit.net/profile/');
  });

  test('User can NOT login with invalid credentials', async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const profilePage = new ProfilePage(page)
    await homepage.open();
    await homepage.clickOnLogin()
    await loginpage.enterLoginDetails(registrationdetails.email,'12345Hello@');
    await loginpage.signIn();
    // Assertion that profile page header is on page
    const error = await loginpage.isisErrorMessageLabelDisplayed();
    expect(error).toBeTruthy();
  });