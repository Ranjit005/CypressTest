class SellerLandingPage {

  verifyCorrectLoad() {
    this.getTitle().should('be.visible');
    this.getSubtitle().should('be.visible');
    this.getHowItWorksTitle().should('be.visible');
    this.getFAQTitle().should('be.visible');
    
    this.getLicensePlateHeader().should('be.visible');
    this.getLicensePlateInput().should('be.visible');
    this.getStateSelect().should('be.visible');
    this.getMyEstimateFromLicensePlateButton().should('be.visible');

    this.getYMMHeader().should('be.visible');
    this.getYMMHeader().click();
    this.getYearSelect().should('be.visible');
    this.getMakeSelect().should('be.visible');
    this.getMyEstimateFromYMMButton().should('be.visible');

    this.getVINHeader().should('be.visible');
    this.getVINHeader().click();
    this.getVINInput().should('be.visible');
    this.getMyEstimateFromVINButton().should('be.visible');
  }

  setLicensePlate(lincensePlateValue){
    this.getLicensePlateInput().type(lincensePlateValue);
  }

  //accepts state name formatt of 2 letters
  setState(stateValue){
    this.getStateSelect().select(stateValue)
  }

  clickGetMyEstimateFromLicensePlateButton(){
    this.getMyEstimateFromLicensePlateButton().click();
  }

  clickGetMyEstimateFromYMM(){
    this.getMyEstimateFromYMMButton().click();
  }

  clickGetMyEstimateFromVIN(){
    this.getMyEstimateFromVINButton().click();
  }

  verifySuccesfulCarResult(){
    this.getCarResultDescription().should('be.visible');
    this.getCarResultVIN().should('be.visible');
    this.getCarContinueButton().should('be.visible');
  }

  clickContinueOnLincensePlate(){
    this.getCarContinueButton().click();
  }

  verifyLicensePlateErrorMessage(){
    this.getLicensePlateErrorMessage().should('be.visible');
    this.getLicensePlateErrorMessage().contains("Sorry, we couldn’t find your car. Please check for typos or try your VIN or Year, Make & Model");
  }

  selectYear(year){
    this.getYearSelect().select(year);
  }

  selectMake(make){
    this.getMakeSelect().select(make);
  }

  selectModel(model){
    this.getModelSelect().select(model);
  }

  setVIN(vin){
    this.getVINHeader().click();
    this.getVINInput().type(vin);
  }

  verifyVINErrorMessage(){
    this.getVINErrorMessage().should('be.visible');
    this.getVINErrorMessage().contains("Sorry, please check the number for errors or try another VIN");
  }

  getTitle(){
    return cy.xpath("//h1[contains(text(),'Get an estimate in minutes')]");
  }

  getSubtitle(){
    return cy.xpath("//h3[contains(text(),'Start by entering your License Plate, Year/Make/Model, or VIN')]");
  }

  getYourEstimatesTitle(){
    return cy.xpath("//div[contains(text(),'Your estimates')]");
  }

  getHowItWorksTitle(){
    return cy.xpath("//h1[contains(text(),'How it works')]");
  }

  getFAQTitle(){
    return cy.xpath("//div[contains(text(),'FAQ')]");
  }

  getLicensePlateHeader(){
    return cy.xpath("//h5[contains(text(),'License Plate')]")
  }

  getYMMHeader(){
    return cy.xpath("//h5[contains(text(),'Year, Make & Model')]");
  }

  getVINHeader(){
    return cy.xpath("//h5[contains(text(),'VIN')]");
  }

  getLicensePlateInput(){
    return cy.get("[name='lp_num']");
  }

  getStateSelect(){
    return cy.get("[name='lp_state']");
  }

  getMyEstimateFromLicensePlateButton(){
    return cy.xpath("(//div[contains(text(),'Get my estimate')])[1]");
  }

  getMyEstimateFromYMMButton(){
    return cy.xpath("(//div[contains(text(),'Get my estimate')])[2]");
  }

  getMyEstimateFromVINButton(){
    return cy.xpath("(//div[contains(text(),'Get my estimate')])[3]");
  }

  getYearSelect(){
    return cy.get("[name='year']");
  }

  getMakeSelect(){
    return cy.get("[name='make']");
  }

  getModelSelect(){
    return cy.get("[name='model']");
  }

  getVINInput(){
    return cy.xpath("(//input[contains(@name,'vin')])[1]");
  }

  getCarResultVIN(){
    return cy.get("[data-pages--seller-landing--quote-flow-entry-modal-target='vin']");
  }

  getCarResultDescription(){
    return cy.get("[data-pages--seller-landing--quote-flow-entry-modal-target='description']");
  }

  getCarContinueButton(){
    return cy.xpath("//div[contains(text(),'Continue')]/parent::button");
  }

  getLicensePlateErrorMessage(){
    return cy.xpath("(//p[contains(@data-atoms--inputs--input-target,'error')])[1]");
  }

  getVINErrorMessage(){
    return cy.xpath("(//p[contains(@data-atoms--inputs--input-target,'error')])[2]");
  }
}

export default SellerLandingPage;
