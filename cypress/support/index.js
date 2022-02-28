// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-react-selector';
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath');
require('cypress-mailosaur');

Cypress.on('uncaught:exception', (error, runnable) => {
  return false;
});

Cypress.Cookies.defaults({
  preserve: ['session', 'loginToken'],
});

Cypress.Server.defaults({
  delay: 500,
  ignore: (xhr) => {
    // handle custom logic for filtering XHR requests
  },
});
