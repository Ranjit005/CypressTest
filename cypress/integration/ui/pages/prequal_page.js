const page = {
  literals: {
    INTRO_TEXT: 'Get estimated loan terms in 60 seconds!',
    GETMYTERMS: 'Get my terms',
    CONTINUE: 'Continue',
    YEAR: 'Year',
  },
  elements: {
    emailInput: '#email',
    phoneInput: '#phone',
    passwordInput: '#password',
    iAgreeCheckbox: '#terms_terms',
    monthlyRent: '#MonthlyDebt',
    income: '#Income',
    creditScore: '#CreditScore',
    acceptTermsCheckBox: '#AgreeToTerms_AgreedToTerms',
  },
  actions: {
    clickOnGetPreQualifiedButton() {
      cy.contains('Get pre-qualified').click();
    },
    validateIntroPageText() {
      
    },
    clickOnGetMyTermsButton() {
      cy.contains(page.literals.GETMYTERMS).click();
      cy.wait(500);
    },
    enterEmail(value) {
      cy.get(page.elements.emailInput).type(value);
    },
    enterPhoneNumber(value) {
      cy.get(page.elements.phoneInput).type(value);
    },
    enterPassword(value) {
      cy.get(page.elements.passwordInput).type(value);
    },
    checkIAgreeCheckbox() {
      cy.get(page.elements.iAgreeCheckbox).check();
      cy.wait(500);
    },
    clickOnContinueButton() {
      cy.contains(page.literals.CONTINUE).click();
      cy.wait(500);
    },
    enterMonthlyRent(value) {
      cy.get(page.elements.monthlyRent).type(value);
    },
    enterIncome(value) {
      cy.get(page.elements.income).type(value);
    },
    selectYear() {
      cy.contains(page.literals.YEAR).click();
      cy.wait(500);
    },
    enterCreditScore(value) {
      cy.get(page.elements.creditScore).type(value);
      cy.wait(3000);
    },
    checkAcceptTermsCheckbox() {
      cy.get(page.elements.acceptTermsCheckBox).check();
    },
  },
};

export default page;
