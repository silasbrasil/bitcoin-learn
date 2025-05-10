import { describe, it } from "node:test";
import assert from "node:assert";
import { createSHA256 } from "./hash.mjs";


describe("hash.mjs suite test", () => {
  describe("createSHA256 test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        createSHA256(null);
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should throw Error to undefined data param", () => {
      try {
        createSHA256();
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should return a Buffer to string data param", () => {
      const result = createSHA256("test");
  
      assert.equal(result instanceof Buffer, true);
    });
  
    it("should return a Buffer to Buffer data param", () => {
      const result = createSHA256(Buffer.from("test"));
  
      assert.equal(result instanceof Buffer, true);
    });
  });
});
