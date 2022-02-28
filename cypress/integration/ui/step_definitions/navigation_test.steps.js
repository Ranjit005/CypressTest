import LoginPage from '../pages/login_page';
const loginPage = new LoginPage();

Given('I navigate to {string}', (path) => {
  cy.newVisit(path);
});

And('I navigate to home page', () => {
  cy.newVisit('');
});

Given('I navigate to {string} logged with new user', (path) => {
  cy.newVisit('/signin');
  var userEmail = Cypress._.uniqueId('contact_') + '@' + Cypress.env('MAIL_SERVER_DOMAIN');
  loginPage.continueWithEmail(userEmail);
  cy.openLoginLinkFromEmail(userEmail);
  cy.newVisit(path);

  cy.wrap(userEmail).as('userEmail');
});

Given('I navigate to quote flow page for an Audi A4 2014', () => {
  cy.newVisit('/quote-flow/basic-details?year=2014&make=Audi&model=A4');
});

Given('I navigate to quote flow page for a Tesla Model 3 2018', () => {
  cy.newVisit('/quote-flow/basic-details?year=2018&make=Tesla&model=Model%203');
});

Given('I navigate to ops page', () => {
  cy.log("url:"+Cypress.env('opsStagingUrl'));
  cy.newVisit(Cypress.env('opsStagingUrl'));
});

And('I navigate back', () => {
  cy.go('back');
});

And('I navigate to {string} on ops', (path) => {
  cy.opsVisit(path);
});
