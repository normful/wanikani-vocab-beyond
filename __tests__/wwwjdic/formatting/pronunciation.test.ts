import { formatPronunciation } from "../../../src/wwwjdic/formatting/pronunciation";

describe("formatPronunciation", () => {
  const f = formatPronunciation;

  it("surrounds hiragana", () => {
    expect(f("きれあじ")).toEqual("（きれあじ）");
  });

  it("surrounds katakana", () => {
    expect(f("トルコ")).toEqual("（トルコ）");
  });

  it("replaces semi-colons with Japanese commas", () => {
    expect(f("てすう;てかず")).toEqual("（てすう、てかず）");
  });

  it("replaces dictionary codes", () => {
    expect(f("しゅじゅつ;しゅずつ(ik)")).toEqual(
      "（しゅじゅつ、しゅずつ(irregular kana)）"
    );
  });

  it("replaces parentheses around kanji with double parentheses", () => {
    expect(f("てのひら;たなごころ(掌)")).toEqual(
      "（てのひら、たなごころ⸨掌⸩）"
    );
  });

  it("replaces parentheses around multiple kanji followed by dictionary codes", () => {
    expect(f("とけい;ときはかり(時計)(ok)")).toEqual(
      "（とけい、ときはかり⸨時計⸩(outdated kana)）"
    );
  });

  it("handles multiple parenthesized groups", () => {
    expect(
      f("いささおがわ(いささ小川,細小小川);いさらおがわ(いさら小川,細小小川)")
    ).toEqual(
      "（いささおがわ⸨いささ小川、細小小川⸩、いさらおがわ⸨いさら小川、細小小川⸩）"
    );
  });
});
