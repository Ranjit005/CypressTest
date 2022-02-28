@Buyer
Feature: Login Page

  @RegressionTest
  Scenario: Login Mailosaur POC
    Given I navigate to '/' logged with new user
    And I verify im logged on shift

  @RegressionTest
  Scenario: Login Mailosaur POC 2
    Given I navigate to '/cars' logged with new user
    And I verify im logged on shift