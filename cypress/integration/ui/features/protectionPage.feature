@Buyer
Feature: Shift Protection Page

  @RegressionTest
  Scenario: Validate Protection Page
    Given I navigate to '/protection'
    Then I validate Peace of mind now comes standard section
    And I validate Vehicle Protection Plan section
    And I validate GAP COVERAGE section
    And I validate What does it cover? section
    And I validate Key lockout section
    And I validate Rental reimbursement section
    And I validate Free towing section
    And I validate Flat tire change section
    And I validate Battery jump section
    And I validate Emergency fuel section
    And I validate Gap Coverage section
    And I validate What does it cover? section