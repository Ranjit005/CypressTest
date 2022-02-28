import HomePage from '../pages/home_page';
import SellerPage from '../pages/seller_page';
import BasicDetailsPage from '../pages/basicDetails_page';
import AdditionalsPage from '../pages/additionals_page';
import VehicleHistoryPage from '../pages/vehicleHistory_page';
import EstimatePage from '../pages/estimate_page';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const home = new HomePage();
const seller = new SellerPage();
const basic = new BasicDetailsPage();
const additional = new AdditionalsPage();
const history = new VehicleHistoryPage();
const estimate = new EstimatePage();
const dataTableUtils = new DataTableUtils();

Given('I navigate site', () => {
  home.visit();
});

When('I go to Seller Landing Page', () => {
  home.goToSell();
});

When('I complete the Basic Details', (dataTable) => {
  // Complete Basic Details page
  basic.addZIP(dataTableUtils.getValue(dataTable, 'ZipCode'));
  basic.addMileage(dataTableUtils.getValue(dataTable, 'Mileage'));
  basic.selectTRIM(dataTableUtils.getValue(dataTable, 'Trim'));
  basic.selectColorBlack(dataTableUtils.getValue(dataTable, 'Color'));
  basic.selectBody(dataTableUtils.getValue(dataTable, 'Body'));
  basic.selectTransmission(dataTableUtils.getValue(dataTable, 'Transmission'));
  basic.selectDriveTrain(dataTableUtils.getValue(dataTable, 'Drive Train'));
  basic.selectEngine(dataTableUtils.getValue(dataTable, 'Engine'));
  basic.clickContinue();
});

When('I complete the Additionals', () => {
  // Complete Additionals page
  additional.verifyAdditionalsFound();
  basic.clickContinue();
});

When('I complete the Additionals for Tesla', () => {
  // Complete Additionals page
  additional.addTeslaAdditionals();
  basic.clickContinue();
});

When('I complete the Vehicle History', () => {
  // Complete Vehicle History page
  history.verifyQ1();
  history.selectQ1No();
  history.verifyQ2();
  history.selectQ2No();
  history.verifyQ3();
  history.selectQ3No();
  //history.verifyQ4();
  //history.selectQ4No();
  history.verifyQ5();
  history.selectQ5No();
  history.verifyQ6();
  history.selectQ6No();
  history.verifyQ7();
});

When('I complete the Vehicle History with Lease', () => {
  history.verifyQ1();
  history.selectQ1No();
  history.verifyQ2();
  history.selectQ2No();
  history.verifyQ3();
  history.selectQ3No();
  //history.verifyQ4();
  //history.selectQ4No();
  history.verifyQ5();
  history.selectQ5No();
  history.verifyQ6();
  history.selectQ6Yes();
  history.selectLease();
  history.verifyQ7();
});

When('I end the Quote Flow', () => {
  seller.clickGMEButton();
});

Then('I should see my estimate', () => {
  estimate.verifyEstimatePage();
});

Then('I should see my estimate for Tesla', () => {
  estimate.verifyEstimatePageTesla();
});

Then('I should see Reject Out Of Area page', () => {
  estimate.verifyOOAPage();
});
