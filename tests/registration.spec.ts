import { test, expect } from '@playwright/test';

import { registrationdetails } from './test-data';
import { HomePage } from '../pages/home-page';
import { SignUpPage } from '../pages/signup-page';
import { log } from 'console';
import { ProfilePage } from '../pages/profile-page';


test.skip('User can register successfully', async ({ page }) => {
    const homepage = new HomePage(page);
    const signuppage = new SignUpPage(page);
    const profilePage = new ProfilePage(page)
    await homepage.open();
    await homepage.clickOnGetStarted();
    // Generate a unique random email each time to makse sure there is no duplicacy
    const randomEmailPrefix = `user${Math.floor(Math.random() * 1000000)}`;
    const email = randomEmailPrefix + '@gufutu.com';
    console.log(email);
    await signuppage.enterRegistrationDetails(email,registrationdetails.password);
    await signuppage.agreeTerms();
    await signuppage.signUp();
    // Assertion that profile page header is on page
    const userIsLoggedIn = await profilePage.isProfilePageLoaded()
    expect(userIsLoggedIn).toBeTruthy();
    const currentUrl = page.url();
    // Assertion: Check that the current URL is google.com
    expect(currentUrl).toBe('https://btcbit.net/profile/');
  });