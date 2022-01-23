/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import CommonDef from "../CommonUtil/CommonDef"
import TestDef from "./TestDef"

Given('User Open Url',() =>{

    //cy.visit('https://demoqa.com/')
    cy.visit(Cypress.config().BaseURI)
})
Then('User Click on Element',() =>{
CommonDef.clickingonElements()
})
Then('User Click on TextBox',() =>{
TestDef.clickingonTextBox()
})
Then('User Fill all the Details',() =>{
TestDef.FillingDetailsForTextBook()   
})
Then('User click on Submit Button',() =>{
TestDef.clickingonSubmitButton() 
})
