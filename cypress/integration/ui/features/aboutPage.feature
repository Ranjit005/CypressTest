@Buyer
Feature: Shift About Page

  @RegressionTest
  Scenario: Validate About Page

    Given I navigate to '/about'
    When I validate About landing page text
    And I validate Executive team section
    And I validate In the news section
