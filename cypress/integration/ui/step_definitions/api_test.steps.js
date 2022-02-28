const testData = require('../../../fixtures/testData.json');

Given('I send a POST request to calculate tax fee', () => {
  testData.forEach((testDataRow) => {
    const data = {
      state: testDataRow.registration.address.state,
      fuelType: testDataRow.vehicle.fuelType,
    };

    cy.request({
      method: 'POST',
      url: 'https://fulfillment.staging.shiftdev.io/v1/taxfee/calculate',
      headers: {
        'content-type': 'application/json',
      },
      auth: {
        user: Cypress.env('APIUSERNAME'),
        pass: Cypress.env('APIPASSWORD'),
      },
      body: testDataRow,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).to.have.property('status', 200);
      cy.log(response.body);
      cy.writeFile(
        `cypress/APIResponse/response_${data.state}_${data.fuelType}.json`,
        response.body
      );
    });
  });
});
