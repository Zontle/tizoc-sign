const { Claims, AssertionClaims } = require('@zontle/rp-client-typescript').Model

let userDetails = {
  "given_name": "Mark",
  "family_name": "West",
}

const claims = new Claims();

claims.companyEndDate()
  .withEssential(true)
  .withPurpose('Please share since when you have gotten the COVID-19 vaccine, so we can timestamp it properly in the Ethereum blockchain.')

const assertionClaims = new AssertionClaims();

assertionClaims.givenName()
  .equal(userDetails.given_name)
  .withEssential(true)
  .withPurpose('We want to verify that we have your correct first name, so that we can print your name properly in the certificate.')
assertionClaims.familyName()
  .equal(userDetails.family_name)
  .withEssential(true)
  .withPurpose('We want to verify that we have your correct surname, so that we can print your surname properly in the certificate.')

export { claims, assertionClaims }