import { createChecksum } from "./checksum.mjs";
import { toSHA256Hash, toRIPEMD160Hash, toBASE58Hash } from "./hash.mjs";


/**
 * Receive a public key using secp256k1 in hexadecimal encode string or Buffer type
 * @param {string|Buffer} pubKey string or Buffer public key in secp256k1 elliptic curve standards
 * @returns {string} p2pkh in hexadecimal string
 */
export function createP2PKH(pubKey) {
  if (pubKey == null) throw new Error("Invalid null or undefined param");

  const PREFIX = "00";

  const pubKeyHash = toRIPEMD160Hash(
    toSHA256Hash(pubKey)
  );

  const checkSumCode =  createChecksum(PREFIX + pubKeyHash);

  return toBASE58Hash(
    PREFIX+
    pubKeyHash+
    checkSumCode
  );
}