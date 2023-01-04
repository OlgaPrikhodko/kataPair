import { pigLatin } from "../src/pigLatin";

describe("pig latin", () => {
  it("return empty string for input string", () => {
    expect(pigLatin("")).toBe("");
  });

  it("'Hello world' => 'elloHay orldway'", () => {
    expect(pigLatin("Hello world")).toBe("elloHay orldway");
  });
});
