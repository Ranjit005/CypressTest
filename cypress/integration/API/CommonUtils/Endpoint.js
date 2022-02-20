/// <reference types="Cypress"/>
module.exports=class Endpoint
{
    static getPostcallUrl()
    {
        var url=""
        var URI=Cypress.config().BaseURIAPI
        var Version=Cypress.env('Version')
        var Endpoint="/users"
        url=URI+Version+Endpoint
        return url
    }
    static getcallUrl()
    {
        var url=""
        var URI=Cypress.config().BaseURIAPI
        var Version=Cypress.env('Version')
        var Endpoint="/users"
        url=URI+Version+Endpoint
        return url
    }
    
}