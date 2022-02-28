import HomePage from '../pages/home_page';
import SellerPage from '../pages/seller_page';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const home = new HomePage();
const seller = new SellerPage();
const dataTableUtils = new DataTableUtils();

Given('I navigate Seller Langing Page', () => {
  home.visitSeller();
});

Then('I should see all the Seller page loaded', () => {
  seller.verifySellerPage();
});

Then('I see the Get My Estimate button disabled', () => {
  seller.verifyGMEDisabled();
});

Then('I should see the Get My Estimate button enabled', () => {
  seller.verifyGMEEnabled();
});

When('I enter YMM', (dataTable) => {
  seller.selectYear(dataTableUtils.getValue(dataTable, 'Year'));
  seller.selectMake(dataTableUtils.getValue(dataTable, 'Make'));
  seller.selectModel(dataTableUtils.getValue(dataTable, 'Model'));
  seller.clickGMEButton();
});

When('I enter Tesla YMM', () => {
  seller.selectYear2018();
  seller.selectTeslaMake();
  seller.selectModel3();
  seller.clickGMEButton();
});

When('I enter LP', (dataTable) => {
  seller.selectLP();
  seller.addLP(dataTableUtils.getValue(dataTable, 'LP'));
  seller.addState(dataTableUtils.getValue(dataTable, 'State'));
});

When('I enter VIN', (dataTable) => {
  seller.selectVIN();
  seller.addVIN(dataTableUtils.getValue(dataTable, 'VIN'));
});
