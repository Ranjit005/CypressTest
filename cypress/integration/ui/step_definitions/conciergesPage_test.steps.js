import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
const commonActions = new CommonActions();

Then('I validate Concierges landing page text', () => {
  //concierges header validation
  cy.contains("Concierges & Drivers").should("be.visible");

  //concierges text validation
  cy.contains("Revolutionize an industry and accelerate your future. Join Shift to change the way people buy and sell their cars.").should("be.visible");

  //apply button
  cy.contains("Apply Now").should("be.visible");
});

And('I validate what is shift? section', () => {
  //what is shift? header validation
  cy.contains("What is Shift?").should("be.visible");
  
  //what is shift? text validation
  var textContent = "Founded in 2013, Shift is a new way to buy and sell used cars. We combine our software – which provides transparent, fair pricing – with unparalleled customer service with test drives and pick ups delivered to the customer. That’s where you come in.";
  cy.contains(textContent).should("be.visible");
});

And('I validate Concierge Core Responsibilities section', () => {
  //Concierge Core Responsibilities validation
  cy.contains("Concierge Core Responsibilities").should("be.visible");
  cy.contains("Drive to customers’ locations to evaluate and pick up vehicles, conduct test drives, and deliver purchased vehicles").should("be.visible");
  cy.contains("Engage and lead customer experiences at our hubs").should("be.visible");
  cy.contains("Use our app to guide customers through the Shift buying and selling process").should("be.visible");
  cy.contains("Deliver outstanding customer service to each and every customer").should("be.visible");
});

And('I validate Flexible Schedule section', () => {
  cy.contains("Flexible Schedule").should("be.visible");
  cy.contains("We do our best to set a schedule that works well for you. We offer part time and full time positions.").should("be.visible");
});

And('I validate Reliable Earnings section', () => {
  cy.contains("Reliable Earnings");
  cy.contains("Hourly, bi-weekly pay, starting at $15/hour with performance-based increases and promotional opportunities available for rockstars.").should("be.visible");
});

And('I validate Growth and Development section', () => {
  cy.contains("Growth and Development").should("be.visible");
  cy.contains("Gain sales and customer service experience. At Shift, we support each other and work with you to find your track.").should("be.visible");
});

And('I validate Fast Support section', () => {
  cy.contains("Fast Support").should("be.visible");
  cy.contains("You’ll have backup from our dedicated Support Teams. Have questions? They’re there.").should("be.visible");
});

And('I validate Why become a Concierge? section', () => {
  cy.contains("Why become a Concierge?").should("be.visible");
  cy.contains("“One of Shift’s core values is ‘Bet on Each Other’ and I can wholeheartedly say that everyone here is a team player. Also, the opportunity for growth is part of the culture – your hard work and effort never goes unnoticed.").should("be.visible");
  cy.contains("Maxwell, Field Operations AssociateShift Los Angeles").should("be.visible");
});
