class EstimatePage {
  verifyEstimatePage() {
    cy.wait(6000);
    cy.url().should('include', '/sell-my-car/estimate');
    cy.get('div', { timeout: 10000 }).contains('Audi');
    // cy.get('div', {timeout:10000}).contains('Save your estimate to lock it in.');
    // cy.get('button', {timeout:10000}).contains('Save my estimate');
    // cy.get('div', {timeout:10000}).contains('1. Book a free evaluation to get a final offer');
    // cy.get('button', {timeout:10000}).contains('At Home');
    // cy.get('button', {timeout:10000}).contains('At Shift');
    cy.get('div', { timeout: 10000 }).contains('FAQ');
    //cy.get('div', {timeout:10000}).contains('What do I need to bring to my evaluation appointment?');
    //cy.get('div', {timeout:10000}).contains('Does Shift accept trade-ins?');
    // cy.get('div', {timeout:10000}).contains('Will Shift accept my car if I have a loan or lease? ');
    //cy.get('div', {timeout:10000}).contains('How and when do I get paid?');
  }

  verifyOOAPage() {
    cy.url().should('include', 'out_of_area');
    cy.get('div', { timeout: 10000 }).contains('Coming to a city near you.');
    cy.get('div', { timeout: 10000 }).contains(
      'Thanks for your interest in Shift! Unfortunately, we don’t operate in your region yet.'
    );
  }

  verifyEstimatePageTesla() {
    cy.url().should('include', 'escalated');
    cy.get('div', { timeout: 10000 }).contains(
      'Thanks for requesting an estimate'
    );
    cy.get('div', { timeout: 10000 }).contains(
      'Thank you for requesting an estimate with us! Tesla vehicles are uniquely built, and as an owner, only you can access the unique build specifications required for us to price your vehicle accurately.'
    );
    cy.get('div', { timeout: 10000 }).contains(
      'If you provide your contact information below, we will send you a detailed follow-up email with the simple steps required for you to retrieve your Tesla Order Agreement. Once we receive those details, one of our pricing specialists will generate an estimate for your vehicle and contact you to discuss next steps.'
    );
    cy.get('input[name="First Name Input"]', { timeout: 10000 });
    cy.get('input[name="Last Name Input"]', { timeout: 10000 });
    cy.get('input[name="Email Input"]', { timeout: 10000 });
    cy.get('input[name="Phone number Input"]', { timeout: 10000 });
  }
}
export default EstimatePage;
