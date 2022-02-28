Then('I validate shift certified section', () => {
  cy.contains("Shift Certified").should("be.visible");
  cy.contains("Inspected. Guaranteed. A new look for used cars.").should("be.visible");  
});

And('I validate Whats included in Shifts Certification? section', () => {
  cy.contains("What's included in Shift's Certification?").should("be.visible");
});

And('I validate Not every car becomes Shift Certified section', () => {
  cy.contains("Not every car becomes Shift Certified").should("be.visible");  
  cy.contains("Being Shift Certified is something special. It’s that little bit extra that makes a great car feel like a fantastic deal. And we're picky. We say “no” to lots of vehicles people want to sell to us — so it’s easier for you to say yes to the one you want.").should("be.visible");
});

And('I validate Total transparency section', () => {
  cy.contains("Total transparency.").should("be.visible");
  cy.contains("Findings from our inspection are compiled into an inspection report so that you know as much about the car as we do.").should("be.visible");
});

And('I validate Love it or bring it back: our 7-day guarantee section', () => {
  cy.contains("Love it or bring it back: our 7-day guarantee").should("be.visible");  
  cy.contains("If you’re not happy with your purchase for whatever reason, you have seven days or 200 miles (whichever comes first) to return your car for a full refund.").should("be.visible");    
});

And('I validate Free 30-day powertrain warranty included section', () => {
  cy.contains("Free 30-day powertrain warranty included").should("be.visible");  
  cy.contains("Peace of mind matters at Shift, which is why we include a 30-day powertrain warranty—free of charge—with every Shift Certified vehicle.").should("be.visible");
  
});

And('I validate Extended coverage available section', () => {
  cy.contains("Extended coverage available").should("be.visible");  
  cy.contains("Want protection beyond 30-days? Our Protection Plans pay for the cost of repairs, towing, roadside assistance, and rental cars. Can be used at any certified mechanic").should("be.visible");    
});

And('I validate Meet our trusted mechanics section', () => {
  cy.contains("Meet our trusted mechanics").should("be.visible");  
  cy.contains("Our team of Master ASE Technicians and ASE-Certified mechanics makes sure every car we sell meets the highest standards of quality and safety.").should("be.visible");    
  cy.contains("Byron Lew, Master Technician").should("be.visible");     
  cy.contains("Denis Diep, Master Technician").should("be.visible");
  cy.contains("Find the car your mechanic would buy").should("be.visible");
  cy.contains("Browse cars").should("be.visible");
});
