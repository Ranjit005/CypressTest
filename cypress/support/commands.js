// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false;
// });

Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
  cy.wrap(subject).then(elementList => {
    elementList = (elementList.jquery) ? elementList.get() : elementList;
    elementList = Cypress._.sampleSize(elementList, size);
    elementList = (elementList.length > 1) ? elementList : elementList[0];
    cy.wrap(elementList);
  });
});

Cypress.Commands.add("newVisit", (url) => {
  cy.visit(url, {
    auth: {
      username: Cypress.env('STAGING_USER'),
      password: Cypress.env('STAGING_PASS')
    }
  })
});

Cypress.Commands.add("opsVisit", (url) => {
  cy.visit(Cypress.env('OPS_URL')+url)
});

Cypress.Commands.add("openLoginLinkFromEmail", (userEmail) => {
  cy.log('userEmail:'+userEmail);
  var serverId = Cypress.env('MAIL_SERVER_ID');
  cy.mailosaurGetMessage(serverId, {
    sentTo: userEmail
  },{
    timeout: 300000
  }).then(email => {      
    expect(email.subject).to.equal('Your Shift verification link');
    var loginLink = email.text.links[0].href;
    cy.log('loginLink:'+loginLink);
    cy.newVisit(loginLink);
    cy.title().should('include', 'Shift');
    cy.log('email.id:'+email.id);
    cy.mailosaurDeleteMessage(email.id);
  })
});

Cypress.Commands.add("cleanSession", () => {
  cy.window().then((win) => {
    win.sessionStorage.clear()
  });
})