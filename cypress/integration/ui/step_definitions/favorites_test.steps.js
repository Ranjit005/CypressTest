import FavoritesPage from '../pages/favorites_page';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const favoritesPage = new FavoritesPage();

Then('I verify the favorite page its empty', () => {
  favoritesPage.verifyEmpty();
});

Then('I verify the favorite page its not empty', () => {
  favoritesPage.verifyNotEmpty();
});