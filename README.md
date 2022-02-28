# cy-fy

Cypress automation testing. Simple and neat folder structure in combination with typescript will help you write test faster.

## Get started

#### System Requirement

- Git (download form [here](https://git-scm.com/downloads))
- Node (download from [here](https://nodejs.org/en/download/))
- Chrome, Firefox Edge or any other browser

#### Project setup

- Git clone the project
- install dependencies by `npm install`


## Run Tests locally

#### Setup local env

Many of the features of the automation project relies on credentials that are stored on github secrets for security reasons. 
When running locally you will need to update cypress.json with these properties

```js
"env": {
    "STAGING_TOKEN": "",
    "STAGING_USER": "",
    "STAGING_PASS": "",
    "MAILOSAUR_API_KEY": "",
    "MAIL_SERVER_ID": "",
    "MAIL_SERVER_DOMAIN": "",
    "OKTA_OPS_USEROKTA_OPS_PASS": ""
  }
```
for the actual values of the properties ask on the #qa slack channel

#### Open and Run Cypress on UI mode

```js
// locate on the project root folder and execute:
node_modules/.bin/cypress open
//Then select the feature that you will like to run
```

#### Run Cypress from command line

```js
// locate on the project root folder and execute:
node_modules\\.bin\\cypress run --headed
```

#### Run Cypress from command line on headless mode

```js
// locate on the project root folder and execute:
node_modules\\.bin\\cypress run --headed
```