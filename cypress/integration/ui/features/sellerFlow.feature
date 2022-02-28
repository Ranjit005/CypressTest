@Seller
Feature: Seller Flow Page

	@RegressionTest
	Scenario: I want to validate the Seller Flow

		Given I navigate to quote flow page for an Audi A4 2014
		And I complete the Basic Details
			| ZipCode | Mileage | Trim         | Color | Body         | Transmission   | Drive Train     | Engine                        |
			| 94117   | 3200    | Premium Plus | Black | 4 Door Sedan | 6-Speed Manual | All Wheel Drive | 2L I-4 Turbocharged Flex-Fuel |
		And I complete the Additionals
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see my estimate

	@RegressionTest
	Scenario: Validate I got DTW (170k miles)

		Given I navigate to quote flow page for an Audi A4 2014
		And I complete the Basic Details
			| ZipCode | Mileage | Trim         | Color | Body         | Transmission   | Drive Train     | Engine                        |
			| 94117   | 170000  | Premium Plus | Black | 4 Door Sedan | 6-Speed Manual | All Wheel Drive | 2L I-4 Turbocharged Flex-Fuel |
		And I complete the Additionals
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see my estimate

	@RegressionTest
	Scenario: Validate I got Reject Out Of Area

		Given I navigate to quote flow page for an Audi A4 2014
		And I complete the Basic Details
			| ZipCode | Mileage | Trim         | Color | Body         | Transmission   | Drive Train     | Engine                        |
			| 22201   | 3200    | Premium Plus | Black | 4 Door Sedan | 6-Speed Manual | All Wheel Drive | 2L I-4 Turbocharged Flex-Fuel |
		And I complete the Additionals
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see Reject Out Of Area page

	@RegressionTest
	Scenario: Validate I got Approve with Lease

		Given I navigate to quote flow page for an Audi A4 2014
		And I complete the Basic Details
			| ZipCode | Mileage | Trim         | Color | Body         | Transmission   | Drive Train     | Engine                        |
			| 94117   | 3200    | Premium Plus | Black | 4 Door Sedan | 6-Speed Manual | All Wheel Drive | 2L I-4 Turbocharged Flex-Fuel |
		And I complete the Additionals
		And I complete the Vehicle History with Lease
		When I end the Quote Flow
		Then I should see my estimate

	@RegressionTest
	Scenario: Validate I got Tesla Auto scalated

		Given I navigate to quote flow page for a Tesla Model 3 2018
		And I complete the Basic Details
			| ZipCode | Mileage | Trim       | Color | Body         | Transmission      | Drive Train      | Engine   |
			| 94117   | 3200    | Long Range | Black | 4 Door Sedan | 1-Speed Automatic | Rear Wheel Drive | Electric |
		And I complete the Additionals for Tesla
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see my estimate for Tesla