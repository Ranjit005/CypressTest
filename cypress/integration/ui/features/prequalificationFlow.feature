@Buyer
Feature: Shift Get Pre-qualified flow

        Background:
                Given session has been cleared


        @RegressionTest
        Scenario: Validate Car Get Pre-qualified flow
                Given I navigate to '/prequalify-for-financing'
                And I validate Intro page
                And I click on Get my terms button
                And I enter random Email
                And I enter Phone Number
                        | PhoneNumber |
                        | 7077071234  |
                And I enter password
                And I check I agree checkbox
                And I click on Continue button
                And I enter Monthly rent
                        | Monthly Rent |
                        | 800          |
                And I enter Total Income
                        | Total Income |
                        | 100000       |
                And I select Year
                And I enter Credit Score
                        | Credit Score |
                        | 800          |
                And I click on Continue button
                And I check Accept Terms checkbox
                When I click on Continue button
                Then I validate borrow amount is greater than zero
                And I validate APR range is greater than zero