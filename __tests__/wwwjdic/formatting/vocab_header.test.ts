import { formatVocabHeader } from "../../../src/wwwjdic/formatting/vocab_header";

describe("formatVocabHeader", () => {
  const f = formatVocabHeader;

  it("formats various cases", () => {
    expect(f("土人 [どじん]")).toEqual("土人（どじん）");
    expect(f("土壇場;どたん場 [どたんば]")).toEqual(
      "土壇場、どたん場（どたんば）"
    );
    expect(f("土地 [とち;どおじ(ok);どじ(ok);どち(ok)]")).toEqual(
      "土地（とち、どおじ(outdated kana)、どじ(outdated kana)、どち(outdated kana)）"
    );
  });
});
