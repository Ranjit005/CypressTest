class LotsPage {

  lotName = '';

  constructor(lotName){
    this.lotName = lotName;
  }

  visitLotsPage() {
    cy.visit('https://forcebase1.a.shiftdev.io/ops/regions/san-francisco/lots');
  }

  addNewLot() {
    return cy.xpath('//a[contains(text(), "Add lot")]').click();
  }

  openLotDetails() {
    return cy
      .xpath('//td[contains(text(), "'+this.lotName+'")]/../td[11]/a')
      .click();
  }

  enableInactiveLots() {
    return cy
      .xpath('//label[contains(text(),  "Show Inactive Lots")]//input')
      .click();
  }

  verifyNewLot() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[6]/span')
      .invoke('text')
      .should('contain', 'Yes');
    cy.xpath('//td[contains(text(), "'+this.lotName+'")]/../td[5]/span')
      .invoke('text')
      .should(
        'contain',
        'BR: YesD: YesE: YesOSM: YesPU: YesR: YesSR: YesTD: Yes'
      );
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[7]/span')
      .invoke('text')
      .should('contain', 'South San Francisco');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[3]/span')
      .invoke('text')
      .should('contain', 'San Francisco, CA');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[4]/span')
      .invoke('text')
      .should('contain', '920 Peninsula Way, Menlo Park, CA 94025, USA');
  }

  verifyUpdatedActiveStatus() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[6]/span')
      .invoke('text')
      .should('contain', 'No');
  }

  verifyUpdatedLotCapabilities() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[contains(text(), "'+this.lotName+'")]/../td[5]/span')
      .invoke('text')
      .should('contain', 'BR: NoD: NoE: NoOSM: NoPU: NoR: NoSR: NoTD: No');
  }

  verifyUpdatedStore() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[7]/span')
      .invoke('text')
      .should('contain', 'Commerce');
  }

  verifyUpdatedMetroArea() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[3]/span')
      .invoke('text')
      .should('contain', 'Los Angeles, CA');
  }

  verifyUpdatedComeToUs() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[8]/span')
      .invoke('text')
      .should('contain', 'sch121-fl160796471');
  }

  verifyUpdatedEscalationChannel() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[9]/span')
      .invoke('text')
      .should('contain', 'AutomationTestEscalationChannel');
  }

  verifyUpdatedAlertChannel() {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath('//td[text()="'+this.lotName+'"]/../td[10]/span')
      .invoke('text')
      .should('contain', 'AutomationTestAlertChannel');
  }

  verifyUpdatedLotName(updatedLotName, runDate) {
    cy.xpath('//div[contains(text(), "Loading")]').should('not.exist');
    cy.xpath(`//td[contains(text(), "${updatedLotName}")]/../td[2]`)
      .invoke('text')
      .should('contain', runDate);
  }
}

export default LotsPage;
