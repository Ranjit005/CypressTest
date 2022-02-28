import OpsLandingPage from '../pages/opsLanding_page';
import OktaPage from '../pages/okta_page';
const opsLandingPage = new OpsLandingPage();
const oktaPage = new OktaPage();

Given('I authenticate on ops', () => {
  cy.opsVisit('/sign_in');
  opsLandingPage.clickSignIn();
  oktaPage.loginWithOpsCredentials();
  opsLandingPage.verifyLogged();
  //cy.visit("https://operations.staging.shiftdev.io/welcome");
});