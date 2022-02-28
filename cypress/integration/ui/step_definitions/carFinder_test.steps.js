import { Given, When, Then, After } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
import Utilities from '../pages/utilities';
const page = require('../pages/carFinder_page');
// const {
//   Before,
//   After,
//   Given,
//   Then,
// } = require('cypress-cucumber-preprocessor/steps');

const commonActions = new CommonActions();
const util = new Utilities();
const email = 'test' + util.randomNumber() + '@shift.com';
let carModel;

const pageActions = page.actions;

And('I click on car finder menu button', () => {
  pageActions.clickOnCarFinderMenuItem();
});

And('I validate Car Finder landing page text', () => {
  cy.title().should('eq', 'Car Finder Questionnaire')
});

And('I click on start car finder button', () => {
  pageActions.clickOnStartCarFinderButton();
});

And(
  'I select any random card in What are you looking for in your next car? section',
  () => {
    pageActions.selectCard('Style and flash! I wanna turn heads.');
  }
);

And('I click on Next button', () => {
  pageActions.clickOnButton('Next');
});

And(
  'I select any 3 random cards in What is most important to you in a car? section',
  () => {
    pageActions.selectCard('Value');
    pageActions.selectCard('Fuel Efficiency');
    pageActions.selectCard('Performance');
  }
);

And('I click on Next button', () => {
  pageActions.clickOnButton('Next');
});

And('I select Monthly payment', () => {
  pageActions.clickOnMonthlyPayment();
});

// And('I enter Monthly payment', () => {
//     pageActions.enterMonthlyPayment('450')
// })

And('I click on Next button', () => {
  pageActions.clickOnButton('Next');
});

And('I select 3 car models in Which body styles do you prefer? section', () => {
  pageActions.selectCarCard('Sedan');
  pageActions.selectCarCard('Wagon');
  pageActions.selectCarCard('SUV');
});

And('I click on Finish button', () => {
  pageActions.clickOnButton('Finish');
});

And('I enter email id', () => {
  pageActions.enterEmail(email);
});

And('I Click on see my cars', () => {
  pageActions.clickOnSeeMyCarsButton();
});

Then(
  'I click on View complete details button of any car and compare car model between We have found cars for you page and actual car page',
  () => {
    cy.get('a > div > div > div > div > div > div > div')
      .eq(0)
      .then((el) => {
        cy.wrap(el)
          .invoke('text')
          .then((text) => {
            cy.log('text: ' + text);
            carModel = Cypress._.toUpper(text);
            cy.log('carModel: ' + carModel);
            
            //for when 'we've found cars for you' popup is displayed
            cy.xpath("//button[@type='submit']/parent::div/parent::form/parent::div/parent::div/button").click();
            
            pageActions.clickOnViewCompleteDetails();
            cy.xpath("//h1[contains(@class,'font-display')]", { timeout: 50000 })
              .should('be.visible')
              .invoke('text')
              .then((text) => {
                cy.log(Cypress._.toUpper(text));
                cy.wrap(Cypress._.toUpper(text)).should('contain', carModel);
              });
          });
      });
  }
);
