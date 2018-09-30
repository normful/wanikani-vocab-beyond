import {
  determinePageType,
  PageType
} from "../../src/urlHelpers/determinePageType";

describe("determinePageType", () => {
  const tc = (url: string, expected: PageType) => {
    it(`detects ${url} as ${expected}`, () => {
      expect(determinePageType(url)).toEqual(expected);
    });
  };

  tc("https://www.wanikani.com/radicals/animal", PageType.radicals);
  tc("https://www.wanikani.com/kanji/%E7%94%B0", PageType.kanji);
  tc(
    "https://www.wanikani.com/vocabulary/%E5%AE%9F%E9%9A%9B",
    PageType.vocabulary
  );

  tc("https://www.wanikani.com/review/session", PageType.reviews);
  tc("https://www.wanikani.com/review", PageType.reviewsSummary);

  tc("https://www.wanikani.com/lesson/session", PageType.lessons);

  tc("https://www.wanikani.com/lattice/vocabulary/meaning", PageType.other);
});
