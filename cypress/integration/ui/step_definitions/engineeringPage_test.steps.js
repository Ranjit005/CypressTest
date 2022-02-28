Then('I validate Engineering at Shift section', () => {
  cy.contains("Engineering @ Shift").should("be.visible");
  cy.contains("At Shift, we empower engineers to solve high-impact problems that drive our business. Our platform serves both customers and our operational team, providing a plethora of engineering challenges.").should("be.visible");
  cy.contains("Join the team").should("be.visible");
});

And('I validate Marketplace & consumer products section', () => {
  var title = "Marketplace & consumer products";
  var content = "Buying and selling a car are complex transactions with many moving parts. We’re building a frictionless experience with asynchronous in-app communication, instant financing, and personalized features.";
  var link = "A self-driven purchase process";
  cy.xpath("(//p[contains(@class,'openable-tab-head')])[4]").should( "have.text", title);
  cy.xpath("(//p[contains(@class,'openable-tab-body')])[4]").should( "have.text", content);
  cy.xpath("(//p[contains(@class,'modal-open-link')])[1]").should( "have.text", link);
});

And('I validate Logistics platforms section', () => {
  var title = "Logistics platforms";
  var content = "It’s a classic computer science problem: how can we create the optimal schedule for drivers AND customers given thousands of inputs? Our proprietary scheduling system is solving these problems at scale.";
  var link1 = "Efficient field staffing";
  var link2 = "Extended workflow app";
  cy.xpath("(//p[contains(@class,'openable-tab-head')])[5]").should( "have.text", title);
  cy.xpath("(//p[contains(@class,'openable-tab-head')])[5]").click();
  cy.xpath("(//p[contains(@class,'openable-tab-body')])[5]").should( "have.text", content);
  cy.xpath("(//p[contains(@class,'modal-open-link')])[2]").should( "have.text", link1);
  cy.xpath("(//p[contains(@class,'modal-open-link')])[3]").should( "have.text", link2);
});

And('I validate Pricing engine section', () => {
  var title = "Pricing engine";
  var content = "Because no two cars are the same, pricing is a huge algorithmic challenge that’s at the core of our business. We use machine learning to accurately price vehicles while accounting for fluctuations in demand, availability, and local-market conditions.";
  var link = "Targeted inventory & pricing";
  cy.xpath("(//p[contains(@class,'openable-tab-head')])[6]").should( "have.text", title);
  cy.xpath("(//p[contains(@class,'openable-tab-head')])[6]").click();
  cy.xpath("(//p[contains(@class,'openable-tab-body')])[6]").should( "have.text", content);
  cy.xpath("(//p[contains(@class,'modal-open-link')])[4]").should( "have.text", link);
});

And('I validate our stack section', () => {
  cy.contains("Our Stack").should("be.visible");
  cy.contains("Challenging the status quo means we need every advantage we can get. This is our toolkit for building great software.").should("be.visible");
});

And('I validate Meet the Team section', () => {
  cy.contains("Meet the Team").should("be.visible");
  cy.contains("Our mission to transform the experience of buying and selling cars is an ambitious one. It can only be achieved by a team of diverse problem solvers dedicated to understanding our varied customers.").should("be.visible");
});

And('I validate Read about our experiences section', () => {
  cy.contains("Read about our experiences").should("be.visible");
});

And('I validate join us text section', () => {
  cy.contains("Join us!").should("be.visible");
  cy.contains("We’ve accomplished a lot with a small and talented team, but there’s more to be done.").should("be.visible");
  cy.contains('Engineering, Product, and Design').should('be.visible');
  cy.contains('You work on exciting, meaningful products.').should('be.visible');
});
