/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import TestLocator from "./TestLocator";
const TestLoc=new TestLocator()
import ReusableData from "../CommonUtil/ReusableData"
const ReuseData=new ReusableData()

module.exports=class TestDef
{
    //Test
    static clickingonTextBox()
    {
        cy.xpath(TestLoc.getTextBoxLink,{timeout: ReuseData.explicitTimeOut}).click()
    }
    static FillingDetailsForTextBook()

    {
        cy.xpath(TestLoc.getFullNameText,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.dataName)
        cy.xpath(TestLoc.getEmail,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.Email)
        cy.xpath(TestLoc.getCurrentAddress,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.CurrentAddress)
        cy.xpath(TestLoc.getPermanentAddress,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.PermanentAddress)        
    }
    static clickingonSubmitButton()
    {
        cy.xpath(TestLoc.getSubmitButton,{timeout: ReuseData.explicitTimeOut}).click()
    }
}