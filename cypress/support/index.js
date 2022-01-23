// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin'
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaight:exception',(err,runnable) =>{
    return false
})
