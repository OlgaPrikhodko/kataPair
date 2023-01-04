import { pigLatin } from "../src/pigLatin";

describe("pig latin", () => {
  it("return empty string for input string", () => {
    expect(pigLatin("")).toBe("");
  });

  it("'Hello world' => 'elloHay orldway'", () => {
    expect(pigLatin("Hello world")).toBe("elloHay orldway");
  });

  it("'Hello world !' => 'elloHay orldway !'", () => {
    expect(pigLatin("Hello world !")).toBe("elloHay orldway !");
  });

  it("'Pig latin is cool' => 'igPay atinlay siay oolcay'", () => {
    expect(pigLatin("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
});
