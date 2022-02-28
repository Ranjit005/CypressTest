import CarsPage from '../pages/cars_page';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const carsPage = new CarsPage();

When('I click favorite a random car', () => {
  carsPage.favoriteRandomCar();
});

Then('I verify a favorite login modal displays', () => {
  carsPage.verifyFavoriteLoginModalDisplays();
});

Then('I go into a random car', () => {
  carsPage.goIntoARandomCar();
});
