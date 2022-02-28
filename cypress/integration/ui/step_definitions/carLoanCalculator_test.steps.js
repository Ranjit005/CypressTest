When('I validate Car Loan Calculator landing page text', () => {
});

And('I validate Credit score Estimated APR section', () => {
  cy.contains("Credit score · Estimated APR").should('be.visible');
  cy.contains("Rebuilding").should('be.visible');
  cy.contains("Good").should('be.visible');
  cy.contains("Excellent").should('be.visible');
});

And('I validate Loan Length section', () => {
  cy.contains("Loan length").should('be.visible');
  cy.contains("24 mo.").should('be.visible');
  cy.contains("36 mo.").should('be.visible');
  cy.contains("48 mo.").should('be.visible');
  cy.contains("60 mo.").should('be.visible');
  cy.contains("72 mo.").should('be.visible');
});

And('I validate Car Price section', () => {
  cy.contains("Car Price").should('be.visible');
  cy.xpath("(//input[contains(@class,'LoanCalculatorSlider-module__slider___34oib')])[1]").should('be.visible');
});

And('I validate Monthly Payment section', () => {
  cy.contains("Monthly payment").should('be.visible');
  cy.xpath("(//input[contains(@class,'LoanCalculatorSlider-module__slider___34oib')])[2]").should('be.visible');
});

And('I validate Down Payment section', () => {
  cy.contains("Down payment").should('be.visible');
  cy.xpath("(//input[contains(@class,'LoanCalculatorSlider-module__slider___34oib')])[3]").should('be.visible');
});

And('I validate Shop Car button', () => {
  cy.contains("Shop cars").should('be.visible');
});

And('I validate Estimated Loan details button', () => {
  cy.contains("Estimated loan details").should('be.visible');
});

And('I click on Estimated Loan details button', () => {
  cy.contains("Estimated loan details").click();
});

Then('I validate Estimated Loan details button modal', () => {
  cy.get(".CarLoanCalculatorModal-module__modalContainer___1rwd0").should('be.visible');
});
