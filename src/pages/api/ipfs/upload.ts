import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import pinataSDK from '@pinata/sdk';

const pinataAPIKey = process.env.PINATA_API_KEY || '';
const pinataSecretAPIKey = process.env.PINATA_SECRET_API_KEY || '';

const pinata = pinataSDK(pinataAPIKey, pinataSecretAPIKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    if (!req.body.ciphertext) {
      res.status(400).json({ error: 'No ciphertext has been sent' });
      return;
    }

    const body = {
      pinner: 'Tizoc',
      data: req.body.ciphertext
    }

    const ipfsResponse = await pinata.pinJSONToIPFS(body)
      .catch((err: string | undefined) => {throw new Error(err)});

    res.status(200).json(ipfsResponse);

  } catch (e) {
    res.status(500).json({ error: e, error_description: 'Unable to upload IPFS Hash' });
    return;
  }
}
