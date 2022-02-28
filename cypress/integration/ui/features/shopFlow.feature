@Buyer
Feature: Shop Flow Page

	@RegressionTest
	Scenario: I want to validate the Shop Flow

		Given I navigate to '/cars'
		And I set geolocation cookies
		And I select the first car
#This scenario needs to be updated to used the car API
#When I click buy online
#Then I should see the Buy Online page displayed