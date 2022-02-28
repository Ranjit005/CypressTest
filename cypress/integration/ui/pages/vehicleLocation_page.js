class VehicleLocationPage {
  visitVehicleLocations() {
    cy.visit(
      'https://forcebase1.a.shiftdev.io/ops/regions/san-francisco/vehiclelocations'
    );
  }

  visitBookAgentTask() {
    cy.visit(
      'https://forcebase1.a.shiftdev.io/ops/schedule/bookAgentTask?schedule_region_short_code=us%2Fsfo&sfdc_vehicle_id=a0U3J000000V40gUAC'
    );
  }

  openTransferDemand() {
    return cy
      .xpath(
        '(//a[contains(@href, "asset-tracker") and contains(text(), "San Francisco")])[1]/../../../../td[5]//a[contains(text(), "Create Transfer Demand")]'
      )
      .click();
  }

  openSetLocation() {
    return cy
      .xpath(
        '(//a[contains(@href, "asset-tracker") and contains(text(), "Unknown")])[1]/../../../../td[5]//a[contains(text(), "Set Vehicle Location")]'
      )
      .click();
  }

  chooseLot(lotName) {
    return cy
      .xpath('//label[contains(text(), "Vehicle Lot")]/../select')
      .select(lotName);
  }

  setLocation() {
    return cy.xpath('//button[contains(text(), "Set")]').click();
  }

  verifyNewLocation() {
    cy.xpath('//span[contains(text(), "test-internal@shift.com")]/../..//a')
      .invoke('text')
      .should(
        'contain',
        'Lot: 301 El Camino Real (Menlo Park Stress Free Auto'
      );
  }

  fillOutExplanation(explanation) {
    cy.xpath('//label[contains(text(), "Explanation")]/../input').type(
      explanation
    );
  }

  transferLot(lotName) {
    return cy
      .xpath('//label[contains(text(), "Destination Lot")]/../select')
      .select(lotName);
  }

  createTransferDemand() {
    return cy
      .xpath('//button[contains(text(), "Create Transfer Demand")]')
      .click();
  }

  verifyTransferDemand() {
    cy.xpath('//h4')
      .invoke('text')
      .should('contain', 'Successfully created transfer demand');
  }

  setBookTransferDetails() {
    return cy.xpath('//button[contains(text(), "Set")]').click();
  }

  addBookTransferSummary(summary) {
    cy.xpath('//label[contains(text(), "Summary")]/../input').type(
      summary
    );
  }

  selectAgent(agent) {
    return cy
      .xpath('(//label[contains(text(), "Agent")])[2]/../select')
      .select(agent);
  }

  selectStartTime(time) {
    cy.xpath('//label[contains(text(), "Start Time")]/../input').type(time);
  }

  selectEndTime(time) {
    cy.xpath('//label[contains(text(), "End Time")]/../input').type(time);
  }

  enablePickFromALot() {
    return cy.xpath('//a[contains(text(), "Pick from a Lot")]').click();
  }

  selectLot(lot) {
    return cy
      .xpath('//label[contains(text(), "Lot")]/../select')
      .select(lot);
  }

  bookAgent() {
    return cy.xpath('//button[contains(text(), "Book")]').click();
  }

  verifyAgentBooking() {
    cy.url().should('include', '/admin/logistics/scheduler/view_event_group');
  }

  cancelBooking() {
    cy.xpath('//a[contains(text(), "Cancel")]').click();
    cy.xpath('//button[contains(text(), "Yes")]').click();
  }
}

export default VehicleLocationPage;
