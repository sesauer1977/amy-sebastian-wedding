import { describe, it, expect } from "vitest";

describe("Resend API key", () => {
  it("should have RESEND_API_KEY set in environment", () => {
    // The key is injected by the platform; we just verify it's present
    const key = process.env.RESEND_API_KEY;
    expect(key).toBeDefined();
    expect(key?.startsWith("re_")).toBe(true);
  });
});
