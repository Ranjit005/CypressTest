import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
import Utilities from '../pages/utilities';
const page = require('../pages/testDriveFlow_page');
const pageActions = page.actions;

const commonActions = new CommonActions();
const util = new Utilities();

Given(/^I navigate to shop cars Page with required login$/, () => {
  //training url
  cy.visit('https://forcebase1.a.shiftdev.io/cars');
});

And(/^I enter zipcode and click on update$/, () => {
  pageActions.enterZipcode('94112');
  pageActions.clickOnUpdate();
});

And(/^I select Test drive at home filter$/, () => {
  //pageActions.selectTestDriveFilter()
});

And(/^I click on any car from the list$/, () => {
  pageActions.clickOnAnyCarImage();
});

And(/^I select a date for Test drive at home date picker$/, () => {
  pageActions.selectDate();
});

And(/^I choose an arrival window from the dropdown$/, () => {
  pageActions.selectTimeSlot();
});

And(/^I click on Book Test drive$/, () => {
  pageActions.clickOnBooktestdriveathome();
});

And(/^I click on come to us link$/, () => {
  pageActions.clickOnComeToUSLink();
});

And(/^I select a time slot$/, () => {
  cy.contains('8:00 am', { timeout: 100000 }).should('be.visible').click();
});

/^I click on Continue button$/,
  () => {
    return true;
  };

/^I click on No thanks button$/,
  () => {
    return true;
  };

/^I enter first name$/,
  () => {
    return true;
  };

/^I enter lastname name$/,
  () => {
    return true;
  };

/^I enter lastname name$/,
  () => {
    return true;
  };

/^I enter Phone Number$/,
  () => {
    return true;
  };

When(/^I click on Reserve button$/, () => {
  return true;
});

Then(/^I validate We're holding your spot section$/, () => {
  return true;
});
