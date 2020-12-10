[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Zontle/tizoc-sign)

# Tizoc

Tizoc is a solution for `offline data attestation` that uses `custodial blockchain wallets`
for attestation payment services, which generates timestamped proofs on the `Ethereum blockchain`
All proofs are encrypted and stored in the `IPFS network`.

# Getting Started

## Setup

### Dependencies

`yarn`

### Registration

1. Update the `redirect_uri` inside `package.json` to match your app redirection URL.
2. Run `yarn util:reg` to create the keys, submit them to the IdP and obtain a `registration_response.json`.

### Environment variables

1. Run `cp .env.example .env`
2. Update `REDIRECT_URI` inside `.env` to match its value in `package.json`
3. Update `CLIENT_ID` inside `.env` to match its value from `registration-response.json`
4. Update `NPM_CONFIG_TOKEN` inside `.env` with a GitHub personal token with `packages` scope.
5. Add the private jwt key to your `.env` by running `yarn util:env:jwt`. Make sure you have a `\n` before running it.
