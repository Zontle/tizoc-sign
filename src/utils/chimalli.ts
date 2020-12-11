import { pbkdf2Sync } from "ethereum-cryptography/pbkdf2";
import { getRandomBytesSync } from "ethereum-cryptography/random";
import { encrypt, decrypt }  from "ethereum-cryptography/aes";

import createPersistedState from 'use-persisted-state';


export const generateKey = (password: string, salt = getRandomBytesSync(32)) => ({
  salt,
  key: pbkdf2Sync(
    Buffer.from(password, "ascii"),
    salt,
    4096,
    32,
    'sha384'
  ).toString("hex")
})

export const encryptPlaintext = (plaintext:string, key: string, iv = getRandomBytesSync(16)) => ({
  iv,
  ciphertext: encrypt(
    Buffer.from(plaintext, "ascii"),
    Buffer.from(key, "hex"),
    iv,
    "aes-256-cbc"
  ).toString("hex")
})

export const decryptCiphertext = (ciphertext: string, key: string, iv: Buffer) => ({
  plaintext: decrypt(
    Buffer.from(ciphertext, "hex"),
    Buffer.from(key, "hex"),
    iv,
    "aes-256-cbc"
  ).toString("ascii")
})

export const useKeyState = createPersistedState('key');
export const useSaltState = createPersistedState('salt');
export const useIVState = createPersistedState('iv');
export const useIPFSHashState = createPersistedState('ipfsHash');