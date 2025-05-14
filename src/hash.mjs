import { createHash } from "node:crypto";
import { EncodeTypes, encodeTypeList } from "./encode-types.mjs";
import bs58 from "bs58";

/**
 * Receive a hexadecimal or utf8 string and return a encoded SHA256 hexadecimal string
 * @param {string} data string
 * @returns {string} hash SHA256 in hexadecimal encode
 */
export function toSHA256Hash(data, encodeInput = EncodeTypes.UTF8) {
  if (data == null) throw new Error("Invalid null or undefined data");

  if (!encodeTypeList.includes(encodeInput)) {
    throw new Error("Encode data type not suported");
  }

  if (encodeInput === EncodeTypes.HEX) {
    return createHash("sha256")
      .update(data, EncodeTypes.HEX)
      .digest(EncodeTypes.HEX);
  }

  return createHash("sha256").update(data).digest(EncodeTypes.HEX);
}

/**
 * Receive a hexadecimal or utf8 string and return a encoded RIPEMD160 hexadecimal string
 * @param {string} data string
 * @returns {string} hash RIPEMD160 in hexadecimal encode
 */
export function toRIPEMD160Hash(data, encodeInput = EncodeTypes.UTF8) {
  if (data == null) throw new Error("Invalid null or undefined data");

  if (!encodeTypeList.includes(encodeInput)) {
    throw new Error("Encode data type not suported");
  }

  if (encodeInput === EncodeTypes.HEX) {
    return createHash("ripemd160")
      .update(data, EncodeTypes.HEX)
      .digest(EncodeTypes.HEX);
  }

  return createHash("ripemd160").update(data).digest(EncodeTypes.HEX);
}

/**
 * Receive a hexadecimal or utf8 string and return a encoded BASE58 hexadecimal string
 * @param {string} data string
 * @returns {string} hash BASE58 in hexadecimal encode
 */
export function toBASE58Hash(data, encodeInput = EncodeTypes.UTF8) {
  if (data == null) throw new Error("Invalid null or undefined data");

  if (!encodeTypeList.includes(encodeInput)) {
    throw new Error("Encode data type not suported");
  }

  if (encodeInput === EncodeTypes.HEX) {
    return bs58
      .encode(Buffer.from(data, EncodeTypes.HEX))
      .toString(EncodeTypes.HEX);
  }

  return bs58.encode(Buffer.from(data)).toString(EncodeTypes.HEX);
}
