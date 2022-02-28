class FavoritesPage {
  
  verifyEmpty(){
    cy.contains("You haven't favorited any cars yet!");
  }

  verifyNotEmpty(){
    this.getSavedContainers().should('not.be.empty')
  }

  getSavedContainers(){
    return cy.get('.content-between');
  }

}

export default FavoritesPage;
