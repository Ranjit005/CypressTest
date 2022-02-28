class VehicleTransfersPage {
  visitVehicleTransfers() {
    cy.visit(
      'https://forcebase1.a.shiftdev.io/ops/regions/san-francisco/vehicletransfers'
    );
  }

  selectVehicleTransfer() {
    return cy
      .xpath(
        '//span[contains(text(), "AutomationTest")]//../../../../../td[6]//a[contains(text(), "Manage Page")]'
      )
      .click();
  }

  deleteTransfer() {
    cy.xpath('//button[contains(text(), "Delete")]').click();
    cy.on('window:confirm', () => true);
  }
}

export default VehicleTransfersPage;
