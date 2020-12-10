const registrationPayload = (app) => ({
  "client_name": app.name,
  "logo_uri": "https://raw.githubusercontent.com/EnigmaTechnologies/assets/main/assets.enigma.sh/tizoc/v1/tizoc.svg",
  "policy_uri": "https://www.santanderlabs.io/en/privacy-policy",
  "tos_uri": "https://www.santanderlabs.io/en/terms-and-conditions",
  "redirect_uris": app.uris,
  "application_type": "web",
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "RS256",
  "jwks": {
    "keys": [
      {
        "kty": app.jwk.kty,
        "e": app.jwk.e,
        "kid": app.kid,
        "n": app.jwk.n
      }
    ]
  }
})

module.exports = { registrationPayload }
