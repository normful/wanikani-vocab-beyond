import { formatVocab } from "../../../src/wwwjdic/formatting/vocab";

describe("formatVocab", () => {
  const f = formatVocab;

  it("replaces dictionary codes", () => {
    expect(f("斬味(io)")).toEqual("斬味(irregular okurigana)");
  });

  it("replaces with Japanese commas and dictionary codes in multiple words", () => {
    expect(f("切れ味;斬れ味;切味(io);斬味(io)")).toEqual(
      "切れ味、斬れ味、切味(irregular okurigana)、斬味(irregular okurigana)"
    );
  });
});
