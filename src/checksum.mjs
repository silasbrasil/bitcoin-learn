import { toSHA256Hash } from "./hash.mjs";


export function createChecksum(data) {
  if (data == null) throw new Error("Invalid null or undefined data");

  return toSHA256Hash(toSHA256Hash(data));
}