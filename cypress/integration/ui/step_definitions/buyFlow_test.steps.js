import HomePage from '../pages/home_page';
import BuyerPage from '../pages/buyer_page';
import VDPPage from '../pages/vdp_page';
import DataTableUtils from '../../../support/DataTableUtils';

const {
  Given,
  When,
  Then,
  Before
} = require("cypress-cucumber-preprocessor/steps");

const home = new HomePage();
const buyer = new BuyerPage();
const vdp = new VDPPage();
const dataTableUtils = new DataTableUtils();

Given('I navigate site', () => {
    home.visit();
})

When('I go to Shop Landing Page', () => {
	home.goToBuy();
})

When('I filter by test drive at home', () => {
	buyer.filterByTestDrive();
})

When('I update the Zip Code', (dataTable) => {
	buyer.enterZipCode(dataTableUtils.getValue(dataTable, 'ZipCode'));
	buyer.updateZipCode();
})

When('I make a search for Honda', () => {
	buyer.chooseMakeHonda();	
})

When('I select the first car', () => {
	buyer.selectFirstCarCard();
})

When('I click buy online', () => {
	vdp.clickBuyOnline();
})

Then('I should see the Buy Online page displayed', () => {
	vdp.verifyBuyOnlinePage();
})