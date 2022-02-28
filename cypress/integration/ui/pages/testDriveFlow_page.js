const page = {
  elements: {
    zipcodeInput: '[aria-label=zipcode]',
    //testDriveFilter: '#browse_filters_test_drive_at_home_switch input',
    testDriveFilter: 'label[for=browse_filters_test_drive_at_home_switch]',
    carImage: 'img[data-src]',
    date: '.CarProfilePage__leader-nav .slick-list div a',
    timeSlotInput: '[id="EmbeddedAppointment Selector Time Dropdown"]',
    comeToUSLink: '.TestDriveBookingScreen__root p a',
  },
  actions: {
    enterZipcode(value) {
      cy.get(page.elements.zipcodeInput).clear().type(value);
    },
    clickOnUpdate() {
      cy.contains('Update', { timeout: 50000 }).should('be.visible').click();
      cy.wait(5000);
    },
    selectTestDriveFilter() {
      cy.get(page.elements.testDriveFilter).eq(0).click({ force: true });
      cy.wait(5000);
    },
    clickOnAnyCarImage() {
      cy.get(page.elements.carImage).eq(1).click();
    },
    selectDate() {
      cy.get(page.elements.date).eq(2).click();
    },
    selectTimeSlot() {
      cy.get(page.elements.timeSlotInput).click();
      cy.get('.Dropdown__option').eq(1).click();
    },
    clickOnBooktestdriveathome() {
      cy.contains('Book test drive at home').click();
    },
    clickOnComeToUSLink() {
      cy.get(page.elements.comeToUSLink).click();
    },
  },
};

export default page;
