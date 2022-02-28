class BuyerPage {
  verifyBuyerPage() {
    cy.url().should('include', '/car');
    cy.get('label[for="I filter by test drive at home"]', {
      timeout: 10000,
    }).should('be.visible');
    cy.get('div', { timeout: 10000 }).contains('Test drive at home');
    cy.get('.browse_filters_make_dropdown', { timeout: 10000 }).should(
      'be.visible'
    );
  }

  filterByTestDrive() {
    return cy
      .get('input[id="browse_filters_test_drive_at_home_switch"]', {
        timeout: 10000,
      })
      .first()
      .click();
  }

  enterZipCode(zipCode) {
    cy.get('input[type="tel"]', { timeout: 10000 }).clear();
    cy.get('input[type="tel"]', { timeout: 10000 }).type(zipCode);
  }

  updateZipCode() {
    const update = cy
      .get('button[type="submit"]', { timeout: 10000 })
      .contains('Update');
    update.click();
  }

	updateZipCode(){
		const update = cy.get('button[type="submit"]', {timeout:10000}).contains("Update");
		update.click();
	}

	chooseMakeHonda(){
		return cy.xpath("(//select[contains(@class,'filterMake')])[1]").select('Honda');
	}
	
	selectFirstCarCard(){
		cy.xpath("(//div[contains(@class,'text-gray-dark font-sans font-bold text-sm')])[1]/parent::div/parent::a").click();
	}
}

export default BuyerPage;
