import { NextApiRequest, NextApiResponse } from "next";
const { VerifiedIdClient, TokenRequestBuilder } = require('@zontle/rp-client-typescript').Client


const wellKnown = process.env.WELL_KNOWN_URL || 'https://live.iamid.io/.well-known/openid-configuration';
const clientId = process.env.CLIENT_ID || 'Ds2UChhNmck7Jcakyxvgi';
const redirectUri = process.env.REDIRECT_URI || 'http://localhost:4201/profile';
const applicationJwt = process.env.APPLICATION_JWT || '';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    if (!req.body.code) {
      res.status(400).json({ error: 'No code has been sent' });
      return;
    }

    const verifyidclient = await VerifiedIdClient.createInstance({
      wellKnownURI: wellKnown,
      privateJWK: applicationJwt,
      clientId: clientId,
    }, true);

    await verifyidclient.setUpClient();

    try {

      const request = new TokenRequestBuilder()
        .withRedirectUri(redirectUri)
        .withCode(req.body.code)
        .build();

      const token = await verifyidclient.token(request)
        .catch((e: string | undefined) => { throw new Error(e) })

      res.status(200).json(token);

    } catch (e) {
      console.log(e);
      res.status(500).json({ error: e, error_description: 'Unable to initiate token request' });
      return;
    }

  } catch (e) {
    res.status(500).json({ error: e, error_description: 'Unable to create client instance - unset proxies' });
    return;
  }
}
