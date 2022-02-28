class OktaPage {
  
  loginWithOpsCredentials() {
    this.getUsernameInput().type(Cypress.env('OKTA_OPS_USER'));
    this.getPasswordInput().type(Cypress.env('OKTA_OPS_PASS'));
    this.getSubmitButton().click();
  }

  getUsernameInput(){
    return cy.get('#okta-signin-username');
  }

  getPasswordInput(){
    return cy.get('#okta-signin-password');
  }

  getSubmitButton(){
    return cy.get('#okta-signin-submit');
  }
}

export default OktaPage;
