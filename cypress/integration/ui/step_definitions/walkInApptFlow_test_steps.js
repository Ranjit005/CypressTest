import WalkInApptPage from '../pages/walkInAppt_page';
import HomePage from '../pages/home_page';
import CommonActions from '../pages/commonActions';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const walkin = new WalkInApptPage();
const home = new HomePage();
const common = new CommonActions();
const dataTableUtils = new DataTableUtils();

Given('I log into OpsWeb', () => {
  common.envLogin('/ops');
});

Given('I navigate to Walk In Appointments Page', () => {
  home.visitWalkin();
});

Given('I fill out appointment details', (dataTable) => {
  walkin.selectRegion(dataTableUtils.getValue(dataTable, 'Region'));
  walkin.selectLot(dataTableUtils.getValue(dataTable, 'Lot'));
});

Given('I search for a vehicle VIN', (dataTable) => {
  walkin.addVIN(dataTableUtils.getValue(dataTable, 'VIN'));
  walkin.searchVehicle();
});

Given('I complete walk in appointment details', () => {
  walkin.selectRegion();
  walkin.selectLot('San Francisco');
  walkin.addVIN();
  walkin.searchVehicle();
  walkin.selectVehicle();
});

Given(' fill out Vehicle Interest details', () => {
  walkin.addVehicleInterest();
});

Given('I select times for the walk in appointment', () => {
  walkin.addApptTime();
});

When('I select a vehicle', () => {
  walkin.selectVehicle();
});

When('I fill out Vehicle Interest details', () => {
  walkin.addVehicleInterest();
});

When('I select times for the walk in appointment', () => {
  home.addApptTime();
});

Then('I should see the page properly loaded', () => {
  walkin.verifyWalkInApptPage();
});

Then('I should see Vehicle Interest section', () => {
  walkin.verifyVehicleInterestSection();
});

Then('I should see Walk In Appointment time options', () => {
  walkin.verifyAppTimeSection();
});

Then('I should see the walk in appointment details page', () => {
  walkin.verifyAppDetails();
});

