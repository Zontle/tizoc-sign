const { Claims, AssertionClaims, Address } = require('@zontle/rp-client-typescript').Model

let userDetails = {
  "title": "Mrs",
  "given_name": "Yost",
  "family_name": "Hilton",
  "country_of_birth": "GB",
  "address": {
    "street_address": "19 Kacey Forest",
    "locality": "Redding",
    "postal_code": "QZBAD9",
    "country": "United Kingdom"
  }
}

const claims = new Claims();

claims.email()
  .withEssential(true)
  .withPurpose('Please share the email address that you wish for us and any recruitment teams to contact you on.')
claims.phoneNumber()
  .withEssential(true)
  .withPurpose('Please share the phone number that you wish for us and any recruitment teams to contact you on.')

const assertionClaims = new AssertionClaims();

assertionClaims.givenName()
  .equal(userDetails.given_name)
  .withEssential(true)
  .withPurpose('We want to verify that we have your correct first name, so that we can address any correspondence with you, and between yourself and any future employers correctly.')
assertionClaims.familyName()
  .equal(userDetails.family_name)
  .withEssential(true)
  .withPurpose('We want to verify that we have your correct surname, so that we can address any correspondence with you, and between yourself and any future employers correctly.')
assertionClaims.title()
  .equal(userDetails.title)
  .withPurpose('We want to verify your title is correct, so that we can address any correspondence with you, and between yourself and any future employers correctly in a professional manner.')
assertionClaims.address()
  .withAssertion(Address.streetAddress().eq(userDetails.address.street_address))
  .withAssertion(Address.locality().eq(userDetails.address.locality))
  .withAssertion(Address.postalCode().eq(userDetails.address.postal_code))
  .withAssertion(Address.country().eq(userDetails.address.country))
  .withPurpose('We want to verify your address is correct, so that we can address any correspondence with you, and between yourself and any future employers correctly in a professional manner. We also need to ensure that you have a place of residence within the UK.')

export { claims, assertionClaims }