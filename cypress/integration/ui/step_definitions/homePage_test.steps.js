import HomePage from '../pages/home_page';

const {
  Given,
  When,
  Then,
  Before
} = require("cypress-cucumber-preprocessor/steps");

const home = new HomePage();

Given('I navigate site', () => {
    home.visitSeller();
})

Then('I see Shift Home page', () => {
	home.verifyLogo();
	home.verifyNavigationBar();
})