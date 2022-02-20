/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import CommonLocator from "./CommonLocator";
import ReusableData from "../CommonUtil/ReusableData"

module.exports=class CommonDef
{
    static clickingonElements()
    {
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
        //cy.xpath(CommonLocator.getElementLink).click()

        //Test Github
    }
}