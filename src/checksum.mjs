import { toSHA256Hash } from "./hash.mjs";
import { EncodeTypes } from "./encode-types.mjs";


export function createChecksum(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  return toSHA256Hash(
      toSHA256Hash(data, EncodeTypes.HEX),
      EncodeTypes.HEX,
    ).substring(0,8);
}