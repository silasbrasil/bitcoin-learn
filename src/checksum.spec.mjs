import assert from "node:assert";
import { describe, it } from "node:test";
import { createChecksum } from "./checksum.mjs";


describe("checksum test suite", () => {
  it("should return checksum of given data", () => {
    const data = "d92b6c4d74c80027cd03f3e0c496614cf62ccb4c";

    const checksum = createChecksum(data);

    assert.equal(checksum, "09c7a8a4");
  });
});
