import WalkInApptPage from '../pages/walkInAppt_page';
import HomePage from '../pages/home_page';
import CommonActions from '../pages/commonActions';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const walkin = new WalkInApptPage();
const home = new HomePage();
const common = new CommonActions();

Given('I log into OpsWeb', () => {
  common.envLogin('/ops');
});

Given('I navigate to Walk In Appointments Page', () => {
  home.visitWalkin();
});

When('I do not select a vehicle', () => {
  walkin.addVIN();
  walkin.searchVehicle();
  walkin.selectVehicle();
});

Then('Empty VIN error is displayed', () => {
  walkin.verifyEmptyVIN();
});

Then('Select vehicle error is displayed', () => {
  walkin.verifyWrongVIN();
});
