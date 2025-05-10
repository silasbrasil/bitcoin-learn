import assert from "node:assert";
import { describe, it } from "node:test";
import { toSHA256Hash, toRIPEMD160Hash, toBASE58Hash } from "./hash.mjs";


describe("hash.mjs suite test", () => {
  describe("toSHA256Hash test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        toSHA256Hash(null);
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should throw Error to undefined data param", () => {
      try {
        toSHA256Hash();
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should return a Buffer to string data param", () => {
      const result = toSHA256Hash("test");
  
      assert.equal(result instanceof Buffer, true);
    });
  
    it("should return a Buffer to Buffer data param", () => {
      const result = toSHA256Hash(Buffer.from("test"));
  
      assert.equal(result instanceof Buffer, true);
    });

    it("should return a hashed Buffer from string param", () => {
      const hashed = toSHA256Hash("abc");

      assert.equal(
        hashed.toString("hex"),
        "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
      );
    });

    it("should return a hashed Buffer from Buffer param", () => {
      const hashed = toSHA256Hash(Buffer.from("abc"));

      assert.equal(
        hashed.toString("hex"),
        "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
      );
    });
  });

  describe("toRIPEMD160Hash test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        toRIPEMD160Hash(null);
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should throw Error to undefined data param", () => {
      try {
        toRIPEMD160Hash();
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should return a Buffer to string data param", () => {
      const result = toRIPEMD160Hash("test");
  
      assert.equal(result instanceof Buffer, true);
    });
  
    it("should return a Buffer to Buffer data param", () => {
      const result = toRIPEMD160Hash(Buffer.from("test"));
  
      assert.equal(result instanceof Buffer, true);
    });

    it("should return a hashed Buffer from string param", () => {
      const hashed = toRIPEMD160Hash("string test");

      assert.equal(
        hashed.toString("hex"),
        "57e87678241f3c131866c1c2db8d4c8613462155"
      );
    });

    it("should return a hashed Buffer from Buffer param", () => {
      const hashed = toRIPEMD160Hash(Buffer.from("string test"));

      assert.equal(
        hashed.toString("hex"),
        "57e87678241f3c131866c1c2db8d4c8613462155"
      );
    });
  });

  describe("toBASE58Hash test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        toSHA256Hash(null);
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });
  
    it("should throw Error to undefined data param", () => {
      try {
        toSHA256Hash();
      } catch(err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should return a base58 hashed data", () => {
      const hashed = toBASE58Hash("test base58");

      assert.equal(hashed.toString(), "Vs5LyRhPP1XXFKV");
    });
  });
});
