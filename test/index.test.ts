import get from "../src/index.js";
import { describe, it, expect } from "vitest";

describe("get", () => {
  it("should return the registry", async () => {
    const registry = await get();
    console.log(registry);
    expect(registry).toBeDefined();
  });
});
