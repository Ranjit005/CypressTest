class WalkInApptPage {
  visitWalkin() {
    cy.visit(
      'https://forcebase1.a.shiftdev.io/ops/schedule/book_walk_in_appointment?region=san-francisco'
    );
  }
  verifyWalkInApptPage() {
    cy.url().should('include', '/ops/schedule/book_walk_in_appointment');
  }

  verifyNoLotFields() {
    cy.xpath('').should('be.visible').should('be.enabled');
  }

  verifyVehicleInterestSection() {
    cy.xpath('//input[contains(@id, "firstName")]')
      .should('be.visible')
      .should('be.enabled');
    cy.xpath('//input[contains(@id, "lastName")]')
      .should('be.visible')
      .should('be.enabled');
    cy.xpath('//input[contains(@id, "emailAddress")]')
      .should('be.visible')
      .should('be.enabled');
    cy.xpath('//input[contains(@id, "phoneNumber")]')
      .should('be.visible')
      .should('be.enabled');
  }

  verifyAppointmentVehicleSection() {
    cy.xpath('//h4[contains(text(), "Appointment Vehicle")]', {
      timeout: 10000,
    }).should('not.exist');
    cy.xpath('//input[@placeholder="Enter last 6 of the VIN"]', {
      timeout: 10000,
    }).should('not.exist');
  }

  verifyAppTimeSection() {
    cy.xpath('//input[contains(@id, "startTime")]')
      .should('be.visible')
      .should('be.enabled');
    cy.xpath('//input[contains(@id, "durationMinutes")]')
      .should('be.visible')
      .should('be.enabled');
  }

  verifyAppDetails() {
    cy.url().should('include', '/ops/schedule/appointment');

    cy.xpath('//div[contains(text(), "Test Drive")]', { timeout: 10000 });
    cy.xpath(
      '//div[contains(text(), "40 Tanforan Ave, South San Francisco, CA 94080")',
      { timeout: 50000 }
    );
  }

  selectRegion() {
    cy.log('select region');
    return cy
      .xpath(
        '(//h3[contains(text(), "Book Walk In Appointment")]/../div/div/div/div/select)[1]',
        { timeout: 50000 }
      )
      .eq(0)
      .select('San Francisco');
  }

  selectRegion2(regionName) {
    cy.log('region 2');
    return cy
      .xpath(
        '//h3[contains(text(), "Book Walk In Appointment")]/../div/div/div/div/select',
        { timeout: 50000 }
      )
      .eq(0)
      .select(regionName);
  }

  selectLot(lotName) {
    cy.log('select lot');
    cy.wait(5000);
    return cy
      .xpath('//option[contains(text(), "Select Lot")]/parent::select', {
        timeout: 5000,
      })
      .select(lotName);
  }

  addVIN(vinValue) {
    cy.log('add VIN');
    const vin = cy.xpath('//input[@placeholder="Enter last 6 of the VIN"]', {
      timeout: 10000,
    });
    vin.clear();
    if(vinValue){
      vin.type(vinValue);
    }
  }

  addInvalidVIN() {
    const vin = cy.xpath('//input[@placeholder="Enter last 6 of the VIN"]', {
      timeout: 10000,
    });

    vin.type('TstVIN');
  }

  searchVehicle() {
    cy.log('search vehicle');
    return cy
      .xpath('//button[contains(text(), "Search for vehicles")]')
      .click();
  }

  chooseVehicle() {
    return cy
      .xpath('//select[contains(@id, "VehicleID-dropdown")]')
      .select('a0U54000002PR5OEAW');
  }

  selectVehicle() {
    cy.log('select vehicle');
    return cy
      .xpath('//button[contains(text(), "Select Vehicle")]', { timeout: 500 })
      .click();
  }

  addVehicleInterest() {
    cy.xpath('//a[contains(text(), "Create New Vehicle Interest")]', {
      timeout: 10000,
    }).click();
    const firstName = cy.xpath('//input[contains(@id, "firstName")]', {
      timeout: 10000,
    });
    firstName.type('test');
    const lastName = cy.xpath('//input[contains(@id, "lastName")]', {
      timeout: 10000,
    });
    lastName.type('internal');
    const emailAddress = cy.xpath('//input[contains(@id, "emailAddress")]', {
      timeout: 10000,
    });
    emailAddress.type('test-internal@shift.com');
    const phoneNumber = cy.xpath('//input[contains(@id, "phoneNumber")]', {
      timeout: 10000,
    });
    phoneNumber.type('5595556666');

    return cy
      .xpath('//button[contains(text(), "Create Vehicle Interest")]', {
        timeout: 10000,
      })
      .click();
  }

  addApptTime() {
    const durationMinutes = cy.xpath(
      '//input[contains(@id, "durationMinutes")]',
      { timeout: 50000 }
    );
    durationMinutes.type('60');

    cy.xpath('//button[contains(text(), "Book Appointment")]', {
      timeout: 10000,
    }).click();

    return cy
      .xpath(
        '//button[contains(text(), "Book Appointment (ignore warnings)")]',
        { timeout: 10000 }
      )
      .click();
  }

  verifyEmptyVIN() {
    cy.xpath(
      '//span[contains(text(), "Field is required, Error: Please enter the last 6 characters of the VIN")]'
    ).should('be.visible');
  }

  verifyWrongVIN() {
    cy.xpath('//div[contains(text(), "Must select vehicle")]').should(
      'be.visible'
    );
  }
}

export default WalkInApptPage;
