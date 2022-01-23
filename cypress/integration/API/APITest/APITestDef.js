/// <reference types="Cypress" />
import Headers from '../CommonUtils/Headers'
import Url from '../CommonUtils/Endpoint'
import TestData from './APITestData'

module.exports=class APITestDef
{
    static postCallExample()
    {
        var URL=Url.getPostcallUrl()
        cy.log(URL)
        cy.request({
            method:'POST',
            url:URL,
            headers:{
                'authorization':'Bearer'+' '+Headers.getAuthorization
            },
            body:{
                "name":TestData.Name,
                "email":TestData.Email,
                "gender":TestData.Gender,
                "status":TestData.Status
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
        })
    }
    static GetCallExample()
    {
        var URL=Url.getPostcallUrl()
        cy.request({
            method:'GET',
            url:URL,
            headers:{
                'authorization':'Bearer'+' '+Headers.getAuthorization
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
        })

    }

}