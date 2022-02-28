@Buyer
Feature: Vehicle Description Page

  Background:
    Given session has been cleared

  @RegressionTest
  Scenario: Visitor is logged in - favorite
    Given I navigate to '/cars' logged with new user
    When I go into a random car
    Then I verify the favorite icon its empty on VDP
    When I navigate to '/favorites'
    Then I verify the favorite page its empty
    When I navigate back
    And I click on the empty favorite icon on VDP
    Then I verify the favorite icon its filled on VDP
    When I navigate to '/favorites'
    Then I verify the favorite page its not empty
    When I navigate back
    And I click on the filled favorite icon on VDP
    Then I verify the favorite icon its empty on VDP
    When I navigate to '/favorites'
    Then I verify the favorite page its empty

  @RegressionTest
  Scenario: Visitor is not logged in - favorite
    Given I navigate to '/cars'
    When I go into a random car
    And I click on the empty favorite icon on VDP
    Then I verify a favorite login modal displays

  @RegressionTest
  Scenario: VDP Page - Landing page test
    Given I navigate to '/cars'
    And I go into a random car
    And I verify year make model trim are displayed
    And I verify similar cars section is displayed