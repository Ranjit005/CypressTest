class AdditionalsPage {

	//Additionals Found
	verifyAdditionalsFound(){
		cy.get('div', {timeout:10000}).contains('Premium Plus Package');
		cy.get('div', {timeout:10000}).contains('Additional features');
	}

	addTeslaAdditionals(){
		return cy.get('input[value="noAdditionalFeatures"]').check();
	}
}

export default AdditionalsPage;