/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};


const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  config.env.auth_username ='test-buyer@shift.com'
  config.env.auth_password = 'IX[2ceUJ076t'
  config.env.okta_domain = 'shift.okta.com'
  config.env.okta_client_id ='b82c8082-a417-49df-affd-b029e39bdbdb'
  on('file:preprocessor', cucumber())
  return config
}