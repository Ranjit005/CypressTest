import CommonActions from '../pages/commonActions';
const commonActions = new CommonActions();

Given(
  'I navigate to shift home page with forcebase url and required login',
  () => {
    return commonActions.envLogin('/');
  }
);
Given('I Login To System and Validate Okta Login', () => {
    cy.loginOktaass()
            
  });
  
//-----------------Changes By Ranjit------------------
Given('I Login To System and Validate Something', () => {
  cy.request({
    method: 'POST',
    url:'https://identity.staging.shiftdev.io/api/v1/tokens?',
    headers:
    {
      "Content-Type":"application/json"
    },
    body:{
      "grant_type":"client_credentials",
    "client_id":"b82c8082-a417-49df-affd-b029e39bdbdb",
    "client_secret":"fmTZyTg3QezNg9RHS6rwdjKNqg9g97i79ohgdLx1MDpizUEKVRs8ku283USXXjoqFLYCTMttwZCtMCRaTC3C8RcVhUpC7QsB8e9vCuVhHy1HtuAzMAr91ogmMomYcxvkSrtKePfLBaoqSfRUmx59RtMbb9fVkjN5GHU5C8yRVAsWJTnSGCKQrTXq5xVyUYZWcoEZxQVgRoh3VboRWyZ9L9nGfdcJr1Hspe7A8YFiMQyQkLurBYPrZjMDmQ3b14E4"
    }
  }).then((res)=>{
    cy.log(JSON.stringify(res))
    var token=res.access_token
    cy.log(token)
  })
  
});


And('I set geolocation cookies', () => {
  //geolocation cookies for San Francisco
  cy.setCookie('override_longitude', '-121.4636294', { path: '/' });
  cy.setCookie('override_latitude', '38.5989784', { path: '/' });
  cy.setCookie('override_zipcode', '94118', { path: '/' });
  cy.reload();
});

And('I set login cookies', () => {
  cy.log('STAGING_TOKEN: ' + Cypress.env('STAGING_TOKEN'));
  cy.setCookie('loginJWT', Cypress.env('STAGING_TOKEN'));
  cy.reload();
});

And('I verify im logged on shift', () => {
  cy.newVisit('/my-dashboard/account');
  cy.contains('My account');
  cy.contains('Personal information');
  cy.contains('Account information');

  cy.get('@userEmail').then(userEmail => {
    cy.log('userEmail:'+userEmail)
    cy.contains(userEmail);
  });
});

Given('session has been cleared', () => {
  cy.newVisit('/signin');
  cy.cleanSession();
});

