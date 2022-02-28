Then('I validate Peace of mind now comes standard section', () => {
  cy.contains("Peace of mind now comes standard").should("be.visible");
  cy.contains("Safeguard yourself from the unexpected costs of car ownership with a vehicle protection plan and gap coverage").should("be.visible");
});

And('I validate Vehicle Protection Plan section', () => {
  cy.contains("Vehicle Protection Plan").should("be.visible");
  cy.contains("Most warranties last for less than a third of a car’s lifetime when it’s least likely to have issues. Our protection plans provide comprehensive coverage against mechanical and electrical problems so you don’t have to pay out of pocket.").should("be.visible");
});

And('I validate GAP COVERAGE section', () => {
  cy.contains("Gap coverage").should("be.visible");
  cy.contains("Gap coverage covers the “gap” between what your auto insurance pays and what you still owe on the car if you ever experience an accident or theft.").should("be.visible");
});

And('I validate What does it cover? section', () => {
  cy.contains("Protection against the unexpected").should("be.visible");
});

And('I validate Key lockout section', () => {
  cy.contains("Key lockout").should("be.visible");
  cy.contains("Get reimbursed when you need a locksmith to save you from a lockout jam").should("be.visible");  
});

And('I validate Rental reimbursement section', () => {
  cy.contains("Rental reimbursement").should("be.visible");
  cy.contains("Get reimbursed for a rental while your car’s in the shop").should("be.visible");  
});

And('I validate Free towing section', () => {
  cy.contains("Free towing").should("be.visible");
  cy.contains("No-charge tow service to any ASE-certified repair facility within 150 miles").should("be.visible");    
});

And('I validate Flat tire change section', () => {
  cy.contains("Flat tire change").should("be.visible");
  cy.contains("Get a lift to the tire shop if your spare won’t work").should("be.visible");  
});

And('I validate Battery jump section', () => {
  cy.contains("Battery jump").should("be.visible");
  cy.contains("Need some juice? Have a technician come to you to help get your car started").should("be.visible");  
});

And('I validate Emergency fuel section', () => {
  cy.contains("Emergency fuel").should("be.visible");
  cy.contains("Get the gas you need to get you to the pump").should("be.visible");
});

And('I validate Gap Coverage section', () => {
  cy.contains("Gap coverage").should("be.visible");
  cy.contains("Never owe more than your car is worth").should("be.visible");    
});

And('I validate What does it cover? section', () => {
  //What does it cover? button
  cy.get('button span').contains('What does it cover?').click();

  //How does it work? button
  cy.get('button span').contains('How does it work?').click();
});
