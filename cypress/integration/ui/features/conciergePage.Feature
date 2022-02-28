@Buyer
Feature: Shift Concierges Page

  @RegressionTest
  Scenario: Validate Concierges Page
    Given I navigate to '/concierges'
    Then I validate Concierges landing page text
    And I validate what is shift? section
    And I validate Concierge Core Responsibilities section
    And I validate Flexible Schedule section
    And I validate Reliable Earnings section
    And I validate Growth and Development section
    And I validate Fast Support section
    And I validate Why become a Concierge? section