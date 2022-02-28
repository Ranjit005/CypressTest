import LotsPage from '../pages/lots_page';
import LotDetailsPage from '../pages/lotDetails_page';
import CommonActions from '../pages/commonActions';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const lotName = 'AutomationTestLot'+Date.now(); //using epoch as an UUID for the lot used;
const lots = new LotsPage(lotName);
const lotDetails = new LotDetailsPage(lotName);
const common = new CommonActions();
const dayjs = require('dayjs');
const runDate = dayjs();
const updatedLotName = 'AutomationUpdatedTestLot';
const dataTableUtils = new DataTableUtils();

Given('I navigate to the Lots Page', () => {
  lots.visitLotsPage();
});

Given('I open the new lot page', () => {
  lots.addNewLot();
});

Given('I populate the new lot details', (dataTable) => {
  var name = lotName;
  var location = dataTableUtils.getValue(dataTable, 'Location');
  var vAutoStore = dataTableUtils.getValue(dataTable, 'VAuto Store');
  var buyerMetroArea = dataTableUtils.getValue(dataTable, 'Buyer Metro Area');
  lotDetails.addNewLotDetails(name, location, vAutoStore, buyerMetroArea);
});

Given('I open the lot details', () => {
  lots.openLotDetails();
});

Given('I update the active state of the lot', (dataTable) => {
  lotDetails.updateMaxDistance(dataTableUtils.getValue(dataTable, 'Max Distance'));
  lotDetails.updateLotActive();
});

Given('I enable inactive lots', () => {
  lots.enableInactiveLots();
});

Given('I update the lot capabilities', () => {
  lotDetails.updateLotCapabilities();
});

Given('I update the location settings', (dataTable) => {
  lotDetails.updateLotAppPool();
  lotDetails.updateStore(dataTableUtils.getValue(dataTable, 'Auto Store'));
  lotDetails.updateMetroArea(dataTableUtils.getValue(dataTable, 'Buyer Metro Area'));
  lotDetails.updateComeToUs(dataTableUtils.getValue(dataTable, 'Come to us Location Id'));
});

Given('I update the escalation settings', (dataTable) => {
  lotDetails.updateEscalationChannel(dataTableUtils.getValue(dataTable, 'Escalation Slack Channel Name'));
  lotDetails.updateAlertChannel(dataTableUtils.getValue(dataTable, 'Prep Alert Channel Name'));
});

Given('I update the lot name', () => {
  lotDetails.updateLotName(runDate);
});

Given('I save the lot updates', () => {
  lotDetails.updateLot();
});

When('I create the new lot', () => {
  lotDetails.createNewLot();
});

When('I save the lot updates', () => {
  lotDetails.updateLot();
});

When('I enable inactive lots', () => {
  lots.enableInactiveLots();
});

Then('The new lot details are properly saved', () => {
  lots.verifyNewLot();
});

Then('The updated active state is reflected in the lots page', () => {
  lots.verifyUpdatedActiveStatus();
});

Then('The updated lot capabilities are reflected in the lots page', () => {
  lots.verifyUpdatedLotCapabilities();
});

Then('The updated location settings are reflected in the lots page', () => {
  lots.verifyUpdatedStore();
  lots.verifyUpdatedMetroArea();
  lots.verifyUpdatedComeToUs();
});

Then('The updated escalation settings are reflected in the lots page', () => {
  lots.verifyUpdatedEscalationChannel();
  lots.verifyUpdatedAlertChannel();
});

Then('The updated lot name is are reflected in the lots page', () => {
  lots.verifyUpdatedLotName(updatedLotName, runDate);
});
