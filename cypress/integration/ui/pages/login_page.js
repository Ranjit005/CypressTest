class LoginPage {

  continueWithEmail(email){
    cy.get('#email').type(email);
    cy.get('#submit-button').click();
  }
}

export default LoginPage;