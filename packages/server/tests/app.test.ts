import app from "../index";
import { describe, it, expect } from "bun:test";

describe("Starknet-GW API", () => {
  it("should return text response for /", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toBe("hello");
  });
});
