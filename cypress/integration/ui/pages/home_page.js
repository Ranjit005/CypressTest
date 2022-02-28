class HomePage {

	visit(){
    	cy.visit('https://shift.com/');
	}

	visitSeller(){
    	cy.visit('https://shift.com/sell-my-car');
	}

	visitWalkin() {
			cy.visit('https://forcebase1.a.shiftdev.io/ops/schedule/book_walk_in_appointment?region=san-francisco');
	}

	verifyLogo(){
		return cy.get('.navbar-logo', {timeout:1000}).should('have.length', 1);
	}

	verifyNavigationBar(){
		cy.get('.nav-link-item').contains("Shop cars").should('be.visible');
		cy.get('.nav-link-item').contains("Sell or Trade").should('be.visible');
		cy.get('.nav-link-item').contains("Financing").should('be.visible');
		cy.get('.nav-link-item').contains("Car finder").should('be.visible');
		cy.get('.nav-link-item').contains("How Shift works").should('be.visible');
	}

	goToBuy(){
		return cy.get('a').contains('Shop cars', {timeout:1000}).click();
	}

	goToSell(){
		return cy.get('a').contains('Sell or Trade', {timeout:1000}).click();	
	}

}

export default HomePage;