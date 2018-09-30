import { IWKOFSettings } from "../wkof/wkofConstants";
import { PageType, determinePageType } from "./../urlHelpers/determinePageType";
import { sectionHeaderID, sectionID } from "./domConstants";
import { Logger } from "../logger/logger";

const Log = new Logger(false);

const queryWwwjdic = (settings: IWKOFSettings) => {
  Log.debug("queryWwwjdic called");
};

export function insertDOMElements(settings: IWKOFSettings): void {
  Log.debug("insertDOMElements called");

  const pageType = determinePageType(document.URL);

  if (pageType === PageType.kanji && !settings.show_vocab_beyond_at_top) {
    insertPageListHeaderLink();
  }

  maybeLoadVocabDependingOnPage(pageType, settings);
}

function insertPageListHeaderLink(): void {
  Log.debug("insertPageListHeaderLink called");

  const header = $(".page-list-header");
  const listItem = $("<li>");
  const link = $("<a href='#" + sectionHeaderID + "''>Vocab Beyond</a>");
  listItem.append(link);

  // Other scripts may have altered this list, so just insert this link at the end
  listItem.insertAfter(header.siblings().last());
}

function maybeLoadVocabDependingOnPage(
  pageType: PageType,
  settings: IWKOFSettings
): void {
  if (pageType === PageType.other) {
    return;
  }

  Log.debug("maybeLoadVocabDependingOnPage called");

  const optAttrs = { attributes: true };
  const optChildList = { childList: true };

  let section;

  if (pageType === PageType.kanji) {
    section = createSectionAndRunQuery(settings);
  } else if (pageType === PageType.reviews) {
    const ob = new MutationObserver(mutationRecords => {
      mutationRecords.forEach(checkReviewMut.bind(null, settings));
    });

    // Observe the element that is mutated after clicking the
    // Item Info icon with the eye on it
    ob.observe(document.getElementById("item-info-col2"), optChildList);
  } else if (pageType === PageType.lessons) {
    const obs = new MutationObserver(mutationRecords => {
      if (isKanjiLesson()) {
        section = createSectionAndRunQuery(settings);
      } else {
        Log.debug("not doing anything because not kanji lesson");
      }
    });

    // Observe the 3 elements for the 3 lesson types, that are modified
    // when switching to each new lesson item
    obs.observe(document.getElementById("supplement-rad"), optAttrs);
    obs.observe(document.getElementById("supplement-kan"), optAttrs);
    obs.observe(document.getElementById("supplement-voc"), optAttrs);
  }
}

function createSectionAndRunQuery(settings: IWKOFSettings): object {
  const emptySection = maybeInsertEmptyVocabSectionOnce(settings);
  queryWwwjdic(settings);
  return emptySection;
}

function isKanjiLesson(): boolean {
  const mainInfo = document.getElementById("main-info");
  return mainInfo && mainInfo.className === "kanji";
}

function checkReviewMut(settings, mutationRecord) {
  // mutationRecord.addedNotes is a NodeList, not an Array

  if (mutationRecord.addedNodes.length === 0) {
    return;
  }

  const childIds = [];

  for (const node of mutationRecord.addedNodes.values()) {
    childIds.push(node.id);
  }

  const isKanjiReview =
    JSON.stringify(childIds) ===
    JSON.stringify([
      "item-info-meaning-mnemonic",
      "note-meaning",
      "item-info-reading-mnemonic",
      "note-reading"
    ]);

  if (isKanjiReview) {
    const section = createSectionAndRunQuery(settings);
  }
}

// Creates a section for the vocab and returns a pointer to the jQuery object.
function maybeInsertEmptyVocabSectionOnce(settings: IWKOFSettings): object {
  const pageType = determinePageType(document.URL);

  if ($("#" + sectionID).length === 0) {
    const sectionHTML =
      "<section>" +
      '<h2 id="' +
      sectionHeaderID +
      '">Vocab Beyond</h2>' +
      '<div id="' +
      sectionID +
      '"></div>' +
      "</section>";

    if (pageType === PageType.kanji) {
      Log.debug("maybeInsertEmptyVocabSectionOnce inserting for kanji page");

      const informationSection = $("#information");

      if (settings.show_vocab_beyond_at_top) {
        $(sectionHTML).insertAfter(informationSection);
      } else {
        const lastSection = informationSection.siblings().last();
        $(sectionHTML).insertAfter(lastSection);
      }
    } else if (pageType === PageType.reviews) {
      Log.debug("maybeInsertEmptyVocabSectionOnce inserting for reviews page");

      if (settings.show_vocab_beyond_at_top) {
        $("#item-info-col2").prepend(sectionHTML);
      } else {
        $("#item-info-col2").append(sectionHTML);
      }
    } else if (pageType === PageType.lessons) {
      Log.debug("maybeInsertEmptyVocabSectionOnce inserting for lessons page");

      if (settings.show_vocab_beyond_at_top) {
        $("#supplement-kan-breakdown .col1").append(sectionHTML);
      } else {
        $("#supplement-kan-related-vocabulary .col1").append(sectionHTML);
      }
    }
  }

  return $("#" + sectionID);
}
