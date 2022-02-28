Feature: Shift - VDP Sales Pending

  @RegressionTest
  Scenario: Validate VDP Sales Pending
    Given I navigate to '/cars?q=sale+pending'
    And I set geolocation cookies
    When I click on random sale ending car
    Then I validate 'The sale of this car is currently pending. We can notify you if this car becomes available.' text
    And I validate 'Notify Me' text
    And I validate 'Browse more cars' text
    And I validate 'Ask a question' text is not exist
    And I validate "We’ll let you know if this car becomes available" text
    And I enter data 'Fname' in '[name="first_name"]'
    And I enter data 'Lname' in '[name="last_name"]'
    And I enter data 'abc@abc.com' in 'form.mx-3 input[type="email"]'
    And I enter data '777-777-7777' in '[name="phone"]'