import { PageType } from "../urlHelpers/determinePageType";

export function getKanji(pageType: PageType): string {
  switch (pageType) {
    case PageType.kanji:
      return document.title[document.title.length - 1];

    case PageType.reviews:
      const curItem = $.jStorage.get("currentItem");

      if ("kan" in curItem) {
        return (curItem as any).kan.trim();
      } else {
        return null;
      }

    case PageType.lessons:
      const kanjiNode = $("#character");

      if (kanjiNode === undefined || kanjiNode === null) {
        return null;
      }

      return kanjiNode.text().trim();
  }

  return null;
}
