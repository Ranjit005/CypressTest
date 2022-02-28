import { financing } from '../pages';
import { actions } from '../pages';
import { utils } from '../pages';

const randomNumber = utils.randomNumber();

const hiw_h1 = 'Get pre-qualified with no impact to your credit score';
const hiw_p1 = 'Apply in a few minutes to see your estimated terms.';

const hiw_h2 = 'Shop with your terms';
const hiw_p2 = 'See what your monthly payment and terms would be for each car.';

const hiw_h3 = 'Finance your favorite one';
const hiw_p3 =
  'Apply for an official loan from our network of trusted lenders either online or on your test drive.';

describe('Pre-qualified flow', () => {
  it('Launch Pre-qualify finance page', () => {
    cy.visit(
      'https://shift.com/prequalify-for-financing?&financing.prequalificationClearerCommunicationVariation=PrequalificationClearerCommunicationVariationControl'
    );
    cy.waitForReact();
  });

  it('Check - How it works text', () => {
    cy.get('h4', { timeout: 50000 })
      .contains('How it works')
      .should('be.visible');
  });

  it('Validate How it works text - Step 1 text', () => {
    cy.get('h6').eq(0).invoke('text').should('eq', hiw_h1);

    cy.get('p').eq(0).invoke('text').should('eq', hiw_p1);
  });

  it('Validate How it works text - Step 2 text', () => {
    cy.get('h6').eq(1).invoke('text').should('eq', hiw_h2);

    cy.get('p').eq(1).invoke('text').should('eq', hiw_p2);
  });

  it('Validate How it works text - Step 3 text', () => {
    cy.get('h6').eq(2).invoke('text').should('eq', hiw_h3);

    cy.get('p').eq(2).invoke('text').should('eq', hiw_p3);
  });

  it('Click on Get Started button', () => {
    financing.clickOnGetStartedButton();
  });

  it('Enter email', () => {
    financing.enterEmail('test-buyer+' + randomNumber + '@shift.com');
  });

  it('Enter password', () => {
    financing.enterPassword('Test123#');
  });

  it('Check Terms of Service', () => {
    financing.checkTermsCheckBox();
  });

  it('Click on Continue', () => {
    actions.clickOnContinue();
  });

  it('Enter Rent or Mortgage', () => {
    financing.enterRentOrMortgage(1000);
  });

  it('Click on Continue', () => {
    actions.clickOnContinue();
  });

  it('Enter Total income', () => {
    financing.enterIncome(100000);
  });

  it('Select Year', () => {
    financing.selectYear();
  });

  it('Click on Continue', () => {
    actions.clickOnContinue();
  });

  it('Enter Credit Score', () => {
    financing.enterCreditScore(800);
  });

  it('Click on Continue', () => {
    actions.clickOnContinue();
  });

  it('Check I Agree Checkbox', () => {
    financing.checkAgreeTermsCheckBox();
  });

  it('Click on Continue', () => {
    cy.get('span').contains('Continue').click({ force: true });
  });

  it('Validate Dollar Value', () => {
    cy.get('div[class=DecisionDisplaySection__value]', { timeout: 100000 })
      .eq(0)
      .invoke('text')
      .then((dollar) => {
        cy.wrap(utils.splitDollar(dollar)).then((value) => {
          if (value! > 0) {
            cy.log('Invalid borrow amount displayed');
          } else {
            cy.log('borrow amount is greater than zero: ' + value);
          }
        });
      });
  });
});
