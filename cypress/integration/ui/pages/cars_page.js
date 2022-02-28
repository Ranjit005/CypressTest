class CarsPage {
  
  favoriteRandomCar() {
    this.getHeatIconList().any().click();
  }

  verifyFavoriteLoginModalDisplays(){
    cy.get("#capture-email-modal").should('be.visible');
  }

  goIntoARandomCar(){
    this.getCarImageList().any().click();
  }

  getHeatIconList(){
    return cy.xpath("//div[contains(@id,'heart-icon')]");
  }

  getCarImageList(){
    return cy.get('[data-action="click->cars--car-card#track"]>img');
  }
}

export default CarsPage;
