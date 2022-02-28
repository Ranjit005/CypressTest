import SellerLandingPage from '../pages/sellerLanding_page.js';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const sellerLandingPage = new SellerLandingPage();
const dataTableUtils = new DataTableUtils();

Given('I go to the new Seller Lading Page', () => {
  cy.visit("https://staging.shift.com/sell-my-car?copy_test=true");
});

Then('verify correct load of seller landing page', () => {
  sellerLandingPage.verifyCorrectLoad();
});

When('I enter License Plate {string} and state {string}', (licensePlate, state) => {
  sellerLandingPage.setLicensePlate(licensePlate);
  sellerLandingPage.setState(state);
});

And('I click on Get my estimate on License Plate', () => {
  sellerLandingPage.clickGetMyEstimateFromLicensePlateButton();
});

And('I click on Get my estimate on YMM', () => {
  sellerLandingPage.clickGetMyEstimateFromYMM();
});


And('I click on Get my estimate on VIN', () => {
  sellerLandingPage.clickGetMyEstimateFromVIN();
});

Then('verify successful car result', () => {
  sellerLandingPage.verifySuccesfulCarResult();
});

When('I click on continue on License Plate', () => {
  sellerLandingPage.clickContinueOnLincensePlate();
});

Then('I should be on quote flow page', () => {
  cy.url().should('include', '/quote-flow/basic-details') 
});

Then('I should see the license plate error message', () => {
  sellerLandingPage.verifyLicensePlateErrorMessage();
});

When('I enter new YMM', (dataTable) => {
  sellerLandingPage.getYMMHeader().click();
  sellerLandingPage.selectYear(dataTableUtils.getValue(dataTable, 'Year'));
  sellerLandingPage.selectMake(dataTableUtils.getValue(dataTable, 'Make'));
  sellerLandingPage.selectModel(dataTableUtils.getValue(dataTable, 'Model'));
});

When('I enter new VIN {string}', (vin) => {
  sellerLandingPage.setVIN(vin);
});

Then('I should see the VIN error message', () => {
  sellerLandingPage.verifyVINErrorMessage();
});