@Buyer
Feature: Shift Engineering Page

  @RegressionTest
  Scenario: Validate Engineering Page
    Given I navigate to '/engineering'
    Then I validate Engineering at Shift section
    And I validate Marketplace & consumer products section
    And I validate Logistics platforms section
    And I validate Pricing engine section
    And I validate our stack section
    And I validate Meet the Team section
    And I validate Read about our experiences section
    And I validate join us text section