class BasicDetailsPage {
	
	addZIP(zipCode){
		const zipCodeInput = cy.get('input[name="zipCode"]', {timeout:10000});
		zipCodeInput.type(zipCode);
	}
	
	addMileage(mileageValue){
		const mileageInput = cy.get('input[name="mileage"]', {timeout:10000});
		mileageInput.type(mileageValue);
	}

	selectTRIM(trimValue){
		return cy.get('select[id="trim dropdown"]', {timeout:10000}).select(trimValue);
	}

	selectColorBlack(colorName){
		return cy.get('label[for="quote_flow_basic_details_color_'+colorName+'"]', {timeout:10000}).click();
	}

	selectBody(bodyType){
		const bodyElement = cy.get('label[for="quote_flow_basic_details_body_'+bodyType+'"]', {timeout:10000}).click();
		bodyElement.click();
	}

	selectTransmission(transmissionType){
		const transmissionElement = cy.get('label[for="quote_flow_basic_details_transmission_'+transmissionType+'"]', {timeout:10000}).click();
		transmissionElement.click();
	}

	selectDriveTrain(driveType){
		const driveTrain = cy.get('label[for="quote_flow_basic_details_drivetrain_'+driveType+'"]', {timeout:10000}).contains(driveType);
		driveTrain.click();
	}

	selectEngine(engineType){
		const engineElement = cy.get('label[for="quote_flow_basic_details_engine_'+engineType+'"]', {timeout:10000}).contains(engineType);
		engineElement.click();
	}

	clickContinue(){
		const continueButton = cy.get('div').contains('Continue');
		continueButton.click();
	}

}

export default BasicDetailsPage;