import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
import Utilities from '../pages/utilities';
const page = require('../pages/testDriveFlow_page');
const pageActions = page.actions;

const commonActions = new CommonActions();
const util = new Utilities();

And(/^I select to shop local cars$/, () => {
  cy.xpath("(//label[contains(@class, 'test-drive-available-filter')])[1]/input").click();
});

And(/^I select the first car result$/, () => {
  cy.xpath("(//div/a[contains(@data-action,'click->cars--car-card#track')]/img)[1]").click();
});

And(/^I select to book a test drive at Shift$/, () => {
  //cy.xpath("(//a[contains(text(),'Book Test Drive or Buy Online')])[1]").click({ force: true });
  //cy.xpath("//span[contains(text(),'Test Drive at Shift')]").click();

  cy.url().then(url => {
    var urlBits = url.split( '/' );
    var carId = urlBits.at(-1);
    var newUrl = 'https://staging.shift.com/test-drive/at-shift/'+carId+'/at_shift_how_it_works';
    cy.visit(newUrl);
  });
});

And(/^I select Get Started on How it Works$/, () => {
  cy.get(".button_to>button").click();
});

And(/^I select a date on Appointment Booking$/, () => {
  cy.get("#time_selector").select('11:30 PM');
  cy.get("button").click();
});

And(/^I input my information on Contact Details$/, () => {
  cy.get("[name='first_name']").type('Test');
  cy.get("[name='last_name']").type('Auto');
  cy.get("[name='phone_number']").type('(800) 444-3331');

});

And(/^I book the test drive$/, () => {
  cy.xpath("//div[contains(text(),'Confirm Booking')]").click();
});