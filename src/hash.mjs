import { createHash } from "node:crypto";
import bs58 from "bs58";


/**
 * Receive a hexadecimal string or Buffer and return a encoded SHA256 Buffer
 * @param {string|Buffer} data string
 * @returns {Buffer} encoded SHA256 Buffer
 */
export function toSHA256Hash(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  const encode = "hex";
  return createHash("sha256")
    .update(Buffer.from(data).toString(encode), encode)
    .digest()
}

/**
 * Receive a hexadecimal string or Buffer and return a encoded RIPEMD160 Buffer
 * @param {string|Buffer} data string
 * @returns {Buffer} encoded RIPEMD160 Buffer
 */
export function toRIPEMD160Hash(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  const encode = "hex";
  return createHash("ripemd160")
    .update(Buffer.from(data).toString(encode), encode)
    .digest()
}

/**
 * Receive a string or Buffer data and returns a encoded base58 Buffer
 * @param {string|Buffer} data string
 * @returns {Buffer} encoded base58 Buffer
 */
export function toBASE58Hash(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  const buffer = Buffer.from(data.toString("hex"));

  return Buffer.from(bs58.encode(buffer));
}
