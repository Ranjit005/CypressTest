class VehicleHistoryPage {
  // Vehicle History

  verifyQ1() {
    return cy
      .get('div')
      .contains(
        'Does your car have any issues that prevent it from starting or driving?'
      );
  }

  selectQ1Yes() {
    return cy
      .get('label[for="quote_flow_condition_issues_starting_or_driving_yes"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  selectQ1No() {
    return cy
      .get('label[for="quote_flow_condition_issues_starting_or_driving_no"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  verifyQ2() {
    return cy
      .get('div')
      .contains(
        'Does your car have any mechanical issues or persistent dashboard warning lights?'
      );
  }

  selectQ2Yes() {
    return cy
      .get('label[for="quote_flow_condition_has_warning_lights_yes"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  selectQ2No() {
    return cy
      .get('label[for="quote_flow_condition_has_warning_lights_no"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  verifyQ3() {
    return cy
      .get('div')
      .contains('Does your car have any aftermarket modifications?');
  }

  selectQ3Yes() {
    return cy
      .get('label[for="quote_flow_condition_has_aftermarket_parts_yes"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  selectQ3No() {
    return cy
      .get('label[for="quote_flow_condition_has_aftermarket_parts_no"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  verifyQ4() {
    return cy.get('div').contains('Has your car been in any accidents?');
  }

  selectQ4Yes() {
    return cy
      .get('label[for="quote_flow_condition_accidents_yes"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  selectQ4No() {
    return cy
      .get('label[for="quote_flow_condition_accidents_no"]', { timeout: 10000 })
      .click({ force: true });
  }

  verifyQ5() {
    return cy
      .get('div')
      .contains('Does your car have any persistent odors?');
  }

  selectQ5Yes() {
    return cy
      .get('label[for="quote_flow_condition_persistent_odors_yes"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  selectQ5No() {
    return cy
      .get('label[for="quote_flow_condition_persistent_odors_no"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  verifyQ6() {
    return cy
      .get('div')
      .contains('Do you have a loan or lease on this vehicle?');
  }

  selectQ6Yes() {
    return cy
      .get('label[for="quote_flow_condition_loan_or_lease_yes"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  selectLoan() {
    return cy
      .get('input[id="loan_or_lease_LienStatusLoan"]', { timeout: 10000 })
      .click({ force: true });
  }

  selectLease() {
    return cy
      .get('input[id="loan_or_lease_LienStatusLease"]', { timeout: 10000 })
      .click({ force: true });
  }

  selectQ6No() {
    return cy
      .get('label[for="quote_flow_condition_loan_or_lease_no"]', {
        timeout: 10000,
      })
      .click({ force: true });
  }

  verifyQ7() {
    return cy.get('div').contains('What’s your license plate? (Optional)');
  }
}

export default VehicleHistoryPage;
