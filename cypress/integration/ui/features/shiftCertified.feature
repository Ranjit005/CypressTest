@Buyer
Feature: Shift Certified Page

  @RegressionTest
  Scenario: Validate Certified Page
    Given I navigate to '/certified'
    Then I validate shift certified section
    And I validate Whats included in Shifts Certification? section
    And I validate Not every car becomes Shift Certified section
    And I validate Total transparency section
    And I validate Love it or bring it back: our 7-day guarantee section
    And I validate Free 30-day powertrain warranty included section
    And I validate Extended coverage available section
    And I validate Meet our trusted mechanics section