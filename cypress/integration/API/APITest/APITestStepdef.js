/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import APITestDef from './APITestDef'

Then('User Validates Post Call',() =>{
    APITestDef.postCallExample()
})
Then('User Validates Get Call',() =>{
    APITestDef.GetCallExample()
})
Then('User Validates Put Call',() =>{
    cy.log('Put Method') 
})
Then('User Validates Delete Call',() =>{
    cy.log('Delete Method') 
})