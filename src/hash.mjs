import { createHash } from "node:crypto";


/**
 * Receive a hexadecimal string or Buffer and return a encoded SHA256 Buffer
 * @param {string|Buffer} data string hexadeciaml encoded 
 * @returns {Buffer} encoded SHA256 Buffer
 */
export function createSHA256(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  const encode = "hex";
  return createHash("sha256")
    .update(Buffer.from(data).toString(encode), encode)
    .digest()
}

/**
 * Receive a hexadecimal string or Buffer and return a encoded RIPEMD160 Buffer
 * @param {string|Buffer} data string hexadeciaml encoded
 * @returns {Buffer} encoded RIPEMD160 Buffer
 */
export function createRIPEMD160(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  const encode = "hex";
  return createHash("ripemd160")
    .update(data.toString(encode), encode)
    .digest()
}