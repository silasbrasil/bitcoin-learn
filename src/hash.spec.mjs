import assert from "node:assert";
import { describe, it } from "node:test";
import { toSHA256Hash, toRIPEMD160Hash, toBASE58Hash } from "./hash.mjs";

describe("hash.mjs suite test", () => {
  describe("toSHA256Hash test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        toSHA256Hash(null);
      } catch (err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should throw Error to undefined data param", () => {
      try {
        toSHA256Hash();
      } catch (err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should return a sha256 hexadecimal string from UTF-8 string", () => {
      const hashed = toSHA256Hash("plain text");

      assert.equal(
        hashed,
        "c9ecf5e54c7b3f2640ecca21f96d4c3625a2b7935104f41c5ede29935a9e52c9"
      );
    });

    it("should return a sha256 hexadecimal string from hexadecimal string", () => {
      const hashed = toSHA256Hash("aaa333", "hex");

      assert.equal(
        hashed,
        "a8509d25c9a5f12204e5afd9fc860db73fd9cc9facd84c1bb9692228ae4a45a9"
      );
    });
  });

  describe("toRIPEMD160Hash test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        toRIPEMD160Hash(null);
      } catch (err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should throw Error to undefined data param", () => {
      try {
        toRIPEMD160Hash();
      } catch (err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should return a hashed hexadecimal string from UTF-8 string", () => {
      const hashed = toRIPEMD160Hash("plain text");

      assert.equal(hashed, "9f6242d551619061cc0b73ba553a416e9912261d");
    });

    it("should return a hashed hexadecimal string from hexadecimal string", () => {
      const hashed = toRIPEMD160Hash("aaa333", "hex");

      assert.equal(hashed, "19507b79050a6e3dc5a926cd47595a2404902f5a");
    });
  });

  describe("toBASE58Hash test suite", () => {
    it("should throw Error to null data param", () => {
      try {
        toSHA256Hash(null);
      } catch (err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should throw Error to undefined data param", () => {
      try {
        toSHA256Hash();
      } catch (err) {
        assert.equal(err instanceof Error, true);
      }
    });

    it("should return a hashed hexadecimal string from utf8 string", () => {
      const hashed = toBASE58Hash("plain text");

      assert.equal(hashed.toString(), "7KLXP9aAMk5UK5");
    });

    it("should return a hashed hexadecimal string from hexadecimal string", () => {
      const hashed = toBASE58Hash("aaa111", "hex");

      assert.equal(hashed.toString(), "zK8C");
    });
  });
});
