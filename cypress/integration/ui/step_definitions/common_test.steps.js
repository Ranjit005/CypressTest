import CommonActions from '../pages/commonActions';
const commonActions = new CommonActions();

Given(
  'I navigate to shift home page with forcebase url and required login',
  () => {
    return commonActions.envLogin('/');
  }
);

And('I validate Modal {string}', (text) => {
  return cy.get('div[class*=Modal__is-open]').contains(text);
});

//-----------------Changes By Ranjit------------------
Given('I Login To System and Validate Something', (text) => {
  cy.visit('https://operations.staging.shiftdev.io/sign_in')
  cy.wait(5000)
  cy.xpath("//input[@type='submit']").click()
  cy.wait(3000)
  cy.xpath("//input[@id='okta-signin-username']").type('test-buyer@shift.com')
  cy.xpath("//input[@id='okta-signin-password']").type('IX[2ceUJ076t')
  cy.wait(2000)
  cy.xpath("//input[@id='okta-signin-submit']").click()
  Cypress.Cookies.defaults({
    preserve: /.*/,
  });
  cy.visit('https://operations.staging.shiftdev.io/welcome')  
  //return cy.get('div[class*=Modal__is-open]').contains(text);
});


And('I close Modal', (text) => {
  return cy.get('div[class*=Modal__close]').click();
});

And('I validate {string} section', (text) => {
  return cy.contains(text);
});

And('I validate {string} text', (text) => {
  return cy.contains(text);
});

And('I validate {string} text is not exist', (text) => {
  return cy.contains(text).should('not.exist');
});

And('I validate {string} link', (text) => {
  return cy.contains(text);
});

And('I click on {string} link', (text) => {
  return cy.contains(text).click().wait(5000);
});

And('I end session', (text) => {
  cy.clearCookies();
});

And('I set geolocation cookies', () => {
  //geolocation cookies for San Francisco
  cy.setCookie('override_longitude', '-121.4636294', { path: '/' });
  cy.setCookie('override_latitude', '38.5989784', { path: '/' });
  cy.setCookie('override_zipcode', '94118', { path: '/' });
  cy.reload();
});

And('I set login cookies', () => {
  cy.log('STAGING_TOKEN: ' + Cypress.env('STAGING_TOKEN'));
  cy.setCookie('loginJWT', Cypress.env('STAGING_TOKEN'));
  cy.reload();
});

And('I enter data {string} in {string}', (text, locator) => {
  cy.get(locator).clear().type(text);
});

And('I verify im logged on shift', () => {
  cy.newVisit('/my-dashboard/account');
  cy.contains('My account');
  cy.contains('Personal information');
  cy.contains('Account information');

  cy.get('@userEmail').then(userEmail => {
    cy.log('userEmail:'+userEmail)
    cy.contains(userEmail);
  });
});

Given('session has been cleared', () => {
  cy.newVisit('/signin');
  cy.cleanSession();
});

