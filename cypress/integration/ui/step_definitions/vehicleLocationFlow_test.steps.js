import VehicleLocationPage from '../pages/vehicleLocation_page';
import VehicleTransfersPage from '../pages/vehicleTransfers_page';
import CommonActions from '../pages/commonActions';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const vehicleLocation = new VehicleLocationPage();
const vehicleTransfer = new VehicleTransfersPage();
const common = new CommonActions();
const dataTableUtils = new DataTableUtils();

Given('I log into OpsWeb', () => {
  common.envLogin('/ops');
});

Given('I navigate to Vehicle Location Page', () => {
  vehicleLocation.visitVehicleLocations();
});

Given('I create a transfer demand', () => {
  vehicleLocation.openTransferDemand();
});

Given('I set the new location for the vehicle', (dataTable) => {
  vehicleLocation.fillOutExplanation(dataTableUtils.getValue(dataTable, 'Explanation'));
  vehicleLocation.transferLot(dataTableUtils.getValue(dataTable, 'Lot'));
});


Given('I move a vehicle', () => {
  vehicleLocation.openSetLocation();
});

Given('I select the new lot', () => {
  vehicleLocation.chooseLot();
});

Given('I select the lot', (dataTable) => {
  vehicleLocation.chooseLot(dataTableUtils.getValue(dataTable, 'Lot'));
});

Given('I book a new agent task', () => {
  vehicleLocation.visitBookAgentTask();
});

Given('I fill out the agent booking details', (dataTable) => {
  vehicleLocation.setBookTransferDetails();
  vehicleLocation.addBookTransferSummary(dataTableUtils.getValue(dataTable, 'Summary'));
  vehicleLocation.selectAgent(dataTableUtils.getValue(dataTable, 'Agent'));
  vehicleLocation.selectStartTime(dataTableUtils.getValue(dataTable, 'Start Time'));
  vehicleLocation.selectEndTime(dataTableUtils.getValue(dataTable, 'End Time'));
  vehicleLocation.enablePickFromALot();
  vehicleLocation.selectLot(dataTableUtils.getValue(dataTable, 'Lot'));
});

When('I save the transfer demand', () => {
  vehicleLocation.createTransferDemand();
});

When('I save the new vehicle lot', () => {
  vehicleLocation.setLocation();
});

When('I save the new agent task', () => {
  vehicleLocation.bookAgent();
});

Then('The successful transfer demand modal is displayed', () => {
  vehicleLocation.verifyTransferDemand();
  vehicleTransfer.visitVehicleTransfers();
  vehicleTransfer.selectVehicleTransfer();
  vehicleTransfer.deleteTransfer();
});

Then('The new lot is displayed in the vehicles table', () => {
  vehicleLocation.verifyNewLocation();
});

Then('The new agent task is created', () => {
  vehicleLocation.verifyAgentBooking();
  vehicleLocation.cancelBooking();
});
