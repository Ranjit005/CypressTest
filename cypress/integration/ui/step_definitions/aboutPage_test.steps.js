import CommonActions from '../pages/commonActions';
const commonActions = new CommonActions();

When('I validate About landing page text', () => {
  //our mission validation
  var mainText = "Our mission is to make car purchase and ownership simple";
  cy.contains(mainText).should('be.visible');

  //about us validation
  var aboutUSTitle = "About Us | Shift";
  cy.contains(aboutUSTitle).should('be.visible');

  //what drives us - text validation
  var aboutUsText = "Our mission is to make buying and selling cars fun, fair, and accessible to everyone. We're transforming the used car industry with a technology-driven, hassle-free customer experience.";
  cy.contains(aboutUsText).should('be.visible');
});

And('I validate Executive team section', () => {
  cy.contains("Executive team").should('be.visible');
  cy.contains("George Arison").should('be.visible');
  cy.contains("Toby Russell").should('be.visible');
  cy.contains("Oded Shein").should('be.visible');
  cy.contains("Sean Foy").should('be.visible');
  cy.contains("Jason Curtis").should('be.visible');
  cy.contains("Tracy Notte").should('be.visible');
  cy.contains("Karan M. Gupta").should('be.visible');
  cy.contains("Tracy Lessin").should('be.visible');
  cy.contains("Josh Pittman").should('be.visible');
  cy.contains("Tim Brauer").should('be.visible');
  cy.contains("Ilya Letuchy").should('be.visible');
  cy.contains("Julie Zarenko").should('be.visible');

  //cy.contains("George Arison").click();
  //cy.get(".team-member-modal-content").should('be.visible');
});

And('I validate In the news section', () => {
  cy.scrollTo('bottom');
  cy.contains("In the news").should('be.visible');
  cy.get('img[alt="Time Magazine"]').should('be.visible');
  cy.get('img[alt="LA Times"]').should('be.visible');
  cy.get('img[alt="The Wall Street Journal"]').should('be.visible');
  cy.get('img[alt="The New York Times"]').should('be.visible');
  cy.get('img[alt="Tech Crunch"]').should('be.visible');
  cy.get('img[alt="CNBC"]').should('be.visible');
  cy.get('img[alt="Bloomberg"]').should('be.visible');
  cy.get('img[alt="Inc."]').should('be.visible');
  cy.get('img[alt="Fortune"]').should('be.visible');
  cy.get('img[alt="Entrepreneur"]').should('be.visible');
});
