@Buyer
Feature: Flooring

  @RegressionTest
  Scenario: Navigate to ops
    Given I authenticate on ops
    And I navigate to 'flooring/floorable_inventories' on ops
    And I verify Floorable Inventory page