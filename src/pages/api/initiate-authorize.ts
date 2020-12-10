import type { NextApiRequest, NextApiResponse } from 'next'
import { assertionClaims, claims } from '../../constants/dtp';
const { VerifiedIdClient, InitiateAuthorizeRequestBuilder } = require('@zontle/rp-client-typescript').Client

type Data = {
  clientId: string,
  redirectUri: string,
}

type Error = {
  error: any,
  error_description: string
}

const wellKnown = process.env.WELL_KNOWN_URL || 'https://live.iamid.io/.well-known/openid-configuration';
const clientId = process.env.CLIENT_ID || 'Ds2UChhNmck7Jcakyxvgi';
const redirectUri = process.env.REDIRECT_URI || 'http://localhost:4201/profile';
const applicationJwt = process.env.APPLICATION_JWT || '';

export default async (_: NextApiRequest, res: NextApiResponse<Data | Error>) => {
  try {

    const verifyidclient = await VerifiedIdClient.createInstance({
      wellKnownURI: wellKnown,
      privateJWK: applicationJwt,
      clientId: clientId,
    }, true);

    await verifyidclient.setUpClient();

    try {

      const request = new InitiateAuthorizeRequestBuilder()
        .withRedirectURI(redirectUri)
        .withAssertionClaims(assertionClaims)
        .withClaims(claims)
        .withPurpose('We want to check your details are correct before allowing you to formally accept any job offers.')
        .build()

      const initiateAuthorize = await verifyidclient.initiateAuthorize(request)
      res.status(200).json(initiateAuthorize.redirectionUri);

    } catch (e) {
      console.log(e);
      res.status(500).json({ error: e, error_description: 'Unable to initiate authorize request' });
    }
  } catch (e) {
    res.status(500).json({ error: e, error_description: 'Unable to create client instance - unset proxies' });
    return;
  }
}