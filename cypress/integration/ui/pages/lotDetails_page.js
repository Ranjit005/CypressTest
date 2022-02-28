class LotDetailsPage {

  lotName = '';
  
  constructor(lotName){
    this.lotName = lotName;
  }

  addNewLotDetails(name, location, vAutoStore, buyerMetroArea) {
    cy.xpath('//label[contains(text(), "Is Active")]//input').click();
    cy.xpath('//label[contains(text(), "Buyer Return")]//input').click();
    cy.xpath('//label[contains(text(), "Delivery")]//input').click();
    cy.xpath('//label[contains(text(), "Evaluation")]//input').click();
    cy.xpath('//label[contains(text(), "One-Sided Marketplace")]//input').click();
    cy.xpath('//label[contains(text(), "Pick Up")]//input').click();
    cy.xpath('//label[contains(text(), "Recon")]//input').click();
    cy.xpath('//label[contains(text(), "Seller Return")]//input').click();
    cy.xpath('//label[contains(text(), "Test Drive")]//input').click();
    cy.xpath('//label[contains(text(), "Name")]/../input').type(
      name
    );
    cy.xpath('//input[contains(@placeholder, "Enter a location")]').type(
      location
    );
    cy.get('.pac-item', { timeout: 10000 }).should('be.visible');
    cy.xpath('//input[contains(@placeholder, "Enter a location")]').type(
      '{downarrow}'
    );

    cy.xpath('//input[contains(@placeholder, "Enter a location")]').type(
      '{enter}'
    );

    cy.xpath('//label[contains(text(), "VAuto Store")]/../select').select(
      vAutoStore
    );
    cy.xpath('//label[contains(text(), "Buyer Metro Area")]/../select').select(
      buyerMetroArea
    );
  }

  createNewLot() {
    return cy.xpath('//button[contains(text(), "Create lot")]').click();
  }

  updateLot() {
    return cy.xpath('//button[contains(text(), "Update")]').click();
  }

  updateLotActive() {
    return cy.xpath('//label[contains(text(), "Is Active")]//input').click();
  }

  updateLotCapabilities() {
    cy.xpath('//label[contains(text(), "Buyer Return")]//input').click();
    cy.xpath('//label[contains(text(), "Delivery")]//input').click();
    cy.xpath('//label[contains(text(), "Evaluation")]//input').click();
    cy.xpath(
      '//label[contains(text(), "One-Sided Marketplace")]//input'
    ).click();
    cy.xpath('//label[contains(text(), "Pick Up")]//input').click();
    cy.xpath('//label[contains(text(), "Recon")]//input').click();
    cy.xpath('//label[contains(text(), "Seller Return")]//input').click();
    cy.xpath('//label[contains(text(), "Test Drive")]//input').click();
  }

  updateMaxDistance(maxDistance) {
    cy.xpath(
      '//label[contains(text(), "Max Distance Miles for Come To Us Suggestion")]/../input'
    ).type(maxDistance);
  }

  updateLotAppPool() {
    cy.xpath(
      '//label[contains(text(), "Use Appointment Pooling availability search and booking")]//input'
    ).click();
    cy.xpath('//label[contains(text(), "Use Dispatch App")]//input').click();
  }

  updateStore(autoStore) {
    cy.xpath('//label[contains(text(), "VAuto Store")]/../select').select(
      autoStore
    );
  }

  updateMetroArea(buyerMetroArea) {
    cy.xpath('//label[contains(text(), "Buyer Metro Area")]/../select').select(
      buyerMetroArea
    );
  }

  updateComeToUs(comeToUsLocationID) {
    cy.xpath(
      '//label[contains(text(), "Alternative Come to Us Location ID")]/../input'
    ).type(comeToUsLocationID);
  }

  updateEscalationChannel(escalationSlackChannelName) {
    cy.xpath(
      '//label[contains(text(), "Escalation Slack Channel Name")]/../input'
    ).type(escalationSlackChannelName);
  }

  updateAlertChannel(prepAlertChannelName) {
    cy.xpath(
      '//label[contains(text(), "Incomplete Vehicle Prep Alert Channel Name")]/../input'
    ).type(prepAlertChannelName);
  }

  updateLotName(runDate) {
    cy.xpath('//label[(text()= "Name")]/../input').clear();
    cy.xpath('//label[(text()= "Name")]/../input').type(
      `AutomationUpdatedTestLot${runDate}`
    );
  }
}

export default LotDetailsPage;
