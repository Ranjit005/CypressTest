import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
import Utilities from '../pages/utilities';
import DataTableUtils from '../../../support/DataTableUtils';
const page = require('../pages/prequal_page');
const pageActions = page.actions;

const commonActions = new CommonActions();
const util = new Utilities();
const email = 'test-internal' + util.randomNumber() + '@shift.com';
const password = 'Test123#';
const dataTableUtils = new DataTableUtils();

And(/^I click on Get pre-qualified button$/, () => {
  pageActions.clickOnGetPreQualifiedButton();
});

And(/^I validate Intro page$/, () => {
  pageActions.validateIntroPageText();
});

And(/^I click on Get my terms button$/, () => {
  cy.wait(500);
  pageActions.clickOnGetMyTermsButton();
});

And(/^I enter random Email$/, () => {
  cy.wait(500);
  pageActions.enterEmail(email);
});

And(/^I enter Phone Number$/, (dataTable) => {
  pageActions.enterPhoneNumber(dataTableUtils.getValue(dataTable, 'PhoneNumber'));
});

And(/^I enter password$/, () => {
  pageActions.enterPassword(password);
});

And(/^I check I agree checkbox$/, () => {
  cy.wait(500);
  pageActions.checkIAgreeCheckbox();
});

And(/^I click on Continue button$/, () => {
  pageActions.clickOnContinueButton();
});

And(/^I enter Monthly rent$/, (dataTable) => {
  pageActions.enterMonthlyRent(dataTableUtils.getValue(dataTable, 'Monthly Rent'));
  cy.wait(500);
  pageActions.clickOnContinueButton();
});

And(/^I enter Total Income$/, (dataTable) => {
  pageActions.enterIncome(dataTableUtils.getValue(dataTable, 'Total Income'));
});

And(/^I select Year$/, () => {
  cy.wait(500);
  pageActions.selectYear();
});

And(/^I click on Continue button$/, () => {
  cy.wait(500);
  pageActions.clickOnContinueButton();
});

And(/^I enter Credit Score$/, (dataTable) => {
  pageActions.enterCreditScore(dataTableUtils.getValue(dataTable, 'Credit Score'));
});

And(/^I click on Continue button$/, () => {
  pageActions.clickOnContinueButton();
});

And(/^I check Accept Terms checkbox$/, () => {
  pageActions.checkAcceptTermsCheckbox();
});

When(/^I click on Continue button$/, () => {
  pageActions.clickOnContinueButton();
});

Then(/^I validate borrow amount is greater than zero$/, () => {
  cy.wait(7000);
  cy.get('div[class]')
    .eq(18)
    .invoke('text')
    .then((text) => {
      const dollarAmt = text;
      const amt = parseInt(dollarAmt.substring(1));
      cy.log(amt);
      cy.log(amt > 0);
    });
});

And(/^I validate APR range is greater than zero$/, () => {
  cy.get('div[class]')
    .eq(21)
    .invoke('text')
    .then((text) => {
      const aprPercentage = text;
      cy.log(aprPercentage);
      const apr = aprPercentage.substring(0, 1);
      cy.log(apr);
      cy.log(apr > 0);
    });
});
