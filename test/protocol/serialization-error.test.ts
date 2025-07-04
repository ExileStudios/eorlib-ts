import { SerializationError } from "@eolib/protocol/serialization-error.js";

import { describe, it, expect } from "vitest";

describe("SerializationError", () => {
  describe("#message", () => {
    it("should return the message provided at construction", () => {
      const message = "Oh no, the sun exploded!";
      expect(new SerializationError(message).message).toStrictEqual(message);
    });
  });
});
