# bctbit-test
## Page Object Model Pattern with Playwright


This repository has test code, written in type script and playwright

If you want to run test locally, please follow these steps:

1. Clone this repository
2. Prerequisite - `node.js` has to be installed. If it is not installed, please visit [official website](https://nodejs.org/en/download/) for instructions 
3. Please use this command to install node modules Run `npm install` 
4. That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.For now I have commented other browsers it only runs on Chrome , to run on other you can uncomment in config
5. Since it is PROD site it has email checks, to identify real emaiil vs fake, please use one real email
6. Sometimes Google Captcha shows up then test fails, this isnt in the control

Thanks
