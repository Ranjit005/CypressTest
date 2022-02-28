class OpsLandingPage {
  
  clickSignIn() {
    cy.get("[value='Sign in']").click();
  }

  verifyLogged(){
    cy.contains('Sign out');
    cy.contains('Welcome ');
  }

}

export default OpsLandingPage;
