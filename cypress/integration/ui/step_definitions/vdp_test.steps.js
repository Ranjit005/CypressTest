import VDPPage from '../pages/vdp_page';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const vdpPage = new VDPPage();

Then('I verify the favorite icon its empty on VDP', () => {
  vdpPage.verifyFavoriteIconItsEmpty();
});

Then('I verify the favorite icon its filled on VDP', () => {
  vdpPage.verifyFavoriteIconItsFilled();
});

And('I click on the empty favorite icon on VDP', () => {
  vdpPage.clickEmptyFavoriteIcon();
});

And('I click on the filled favorite icon on VDP', () => {
  vdpPage.clickFilledFavoriteIcon();
});

And('I click on random sale ending car', () => {
  vdpPage.clickOnRandomSaleEndingCar();
});

And('I verify year make model trim are displayed', () => {
  vdpPage.verifyYearMakeModelTrim();
});

And('I verify similar cars section is displayed', () => {
  vdpPage.verifySimilarCars();
});

