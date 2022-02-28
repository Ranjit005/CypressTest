@Buyer
Feature: Shift Car Loan Calculator Page

  @RegressionTest
  Scenario: Validate Car Loan Calculator Page
    Given I navigate to '/car-loan-calculator'
    When I validate Car Loan Calculator landing page text
    And I validate Credit score Estimated APR section
    And I validate Loan Length section
    And I validate Car Price section
    And I validate Monthly Payment section
    And I validate Down Payment section
    And I validate Shop Car button
    And I validate Estimated Loan details button
    And I click on Estimated Loan details button
    Then I validate Estimated Loan details button modal