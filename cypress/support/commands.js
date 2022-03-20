// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false;
// });
import { OktaAuth } from '@okta/okta-auth-js'

Cypress.Commands.add('loginOktaass', () => {
  const optionsSessionToken = {
    method: 'POST',
    url:'https://shift.okta.com/api/v1/authn',
    body: {
      username: 'test-buyer@shift.com',
      password: 'IX[2ceUJ076t',
      options: {
        warnBeforePasswordExpired: 'true'
      }
    }
  }

  cy.request(optionsSessionToken).then(response => {
    const sessionToken = response.body.sessionToken;
    const qs = {
      client_id: '0oa46r4haoVigNat7696',
      state:'169900592452b48377e0737041e7b9f371c2294ab23a59e2',
      redirect_uri: 'https://operations.staging.shiftdev.io/users/auth/okta/callback',
      code_challenge_method: 'S256',
      response_mode: 'fragment',
      response_type: 'code',
      scope: ['openid', 'profile', 'email','offline_access','groups'],
      sessionToken: sessionToken
    }

    cy.request({
      method: 'GET',
      url: 'https://shift.okta.com/oauth2/v1/authorize',
      form: true,
      followRedirect: false,
      qs: qs
    }).then(responseWithToken => {
      const redirectUrl = responseWithToken.redirectedToUrl;
      const accessToken = redirectUrl
      .substring(redirectUrl.indexOf('access_token'))
      .split('=')[1]
      .split('&')[0];
      cy.wrap(accessToken).as('accessToken');
      cy.visit(redirectUrl);
      cy.visit(redirectUrl).then(() => {
        cy.visit('')
      });
    });
  });
})

Cypress.Commands.add('loginByOktaApi', () => {
  cy.request({
    method: 'POST',
    url: `https://shift.okta.com/api/v1/authn`,
    body: {
      "username":"test-buyer@shift.com",
      "password":"IX[2ceUJ076t",
      "options":{"warnBeforePasswordExpired":true,"multiOptionalFactorEnroll":true}
    },
  }).then(({ body }) => {
    const user = body._embedded.user
    const config = {
      issuer: `https://shift.okta.com/oauth2/v1/authorize`,
      clientId: '0oa46r4haoVigNat7696',
      redirectUri: 'https://operations.staging.shiftdev.io/users/auth/okta/callback',
      scope: ['openid', 'email', 'profile'],
    }

    const authClient = new OktaAuth(config)

    return authClient.token
      .getWithoutPrompt({ sessionToken: body.sessionToken })
      .then(({ tokens }) => {
        const userItem = {
          token: tokens.accessToken.value,
          user: {
            sub: user.id,
            email: user.profile.login,
            given_name: user.profile.firstName,
            family_name: user.profile.lastName,
            preferred_username: user.profile.login,
          },
        }

        window.localStorage.setItem('oktaCypress', JSON.stringify(userItem))

        log.snapshot('after')
        log.end()
      })
  })
})

Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
  cy.wrap(subject).then(elementList => {
    elementList = (elementList.jquery) ? elementList.get() : elementList;
    elementList = Cypress._.sampleSize(elementList, size);
    elementList = (elementList.length > 1) ? elementList : elementList[0];
    cy.wrap(elementList);
  });
});

Cypress.Commands.add("newVisit", (url) => {
  cy.visit(url, {
    auth: {
      username: Cypress.env('STAGING_USER'),
      password: Cypress.env('STAGING_PASS')
    }
  })
});

Cypress.Commands.add("opsVisit", (url) => {
  cy.visit(Cypress.env('OPS_URL')+url)
});

Cypress.Commands.add("openLoginLinkFromEmail", (userEmail) => {
  cy.log('userEmail:'+userEmail);
  var serverId = Cypress.env('MAIL_SERVER_ID');
  cy.mailosaurGetMessage(serverId, {
    sentTo: userEmail
  },{
    timeout: 300000
  }).then(email => {      
    expect(email.subject).to.equal('Your Shift verification link');
    var loginLink = email.text.links[0].href;
    cy.log('loginLink:'+loginLink);
    cy.newVisit(loginLink);
    cy.title().should('include', 'Shift');
    cy.log('email.id:'+email.id);
    cy.mailosaurDeleteMessage(email.id);
  })
});

Cypress.Commands.add("cleanSession", () => {
  cy.window().then((win) => {
    win.sessionStorage.clear()
  });
})