import { Logger } from "../logger/logger";
import { IWKOFSettings } from "../wkof/wkofConstants";
import { PageType, determinePageType } from "./../urlHelpers/determinePageType";
import { sectionHeaderID, sectionID } from "./domConstants";
import { queryWwwjdicThenInsertParsedResults } from "./queryWwwjdicThenInsertParsedResults";

const Log = new Logger(false);

export function insertInitialDOMElements(settings: IWKOFSettings): void {
  Log.debug("insertInitialDOMElements called");

  const pageType = determinePageType(document.URL);

  if (pageType === PageType.kanji && !settings.show_vocab_beyond_at_top) {
    insertPageListHeaderLink();
  }

  maybeLoadVocabDependingOnPage(pageType, settings);
}

let insertedPageListHeaderLink = false;

function insertPageListHeaderLink(): void {
  Log.debug("insertPageListHeaderLink called");

  if (insertedPageListHeaderLink) {
    return;
  }

  const header = $(".page-list-header");
  const listItem = $("<li>");
  const link = $("<a href='#" + sectionHeaderID + "''>Vocab Beyond</a>");
  listItem.append(link);

  // Other scripts may have altered this list, so just insert this link at the end
  listItem.insertAfter(header.siblings().last());

  insertedPageListHeaderLink = true;
}

function maybeLoadVocabDependingOnPage(
  pageType: PageType,
  settings: IWKOFSettings
): void {
  Log.debug("maybeLoadVocabDependingOnPage called");

  if (pageType === PageType.other) {
    Log.debug("maybeLoadVocabDependingOnPage returning early. PageType.other");
    return;
  }

  const optAttrs = { attributes: true };
  const optChildList = { childList: true };

  if (pageType === PageType.kanji) {
    Log.debug("maybeLoadVocabDependingOnPage PageType.kanji");

    createSectionAndRunQuery(settings);
  } else if (pageType === PageType.reviews) {
    Log.debug("maybeLoadVocabDependingOnPage PageType.reviews");

    const ob = new MutationObserver(mutationRecords => {
      mutationRecords.forEach(checkReviewMut.bind(null, settings));
    });

    // Observe the element that is mutated after clicking the
    // Item Info icon with the eye on it
    ob.observe(document.getElementById("item-info-col2"), optChildList);
  } else if (pageType === PageType.lessons) {
    Log.debug("maybeLoadVocabDependingOnPage PageType.lessons");

    const obs = new MutationObserver(mutationRecords => {
      if (isKanjiLesson()) {
        createSectionAndRunQuery(settings);
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

function createSectionAndRunQuery(settings: IWKOFSettings): void {
  const emptySection = maybeInsertEmptyVocabSectionOnce(settings);
  queryWwwjdicThenInsertParsedResults(settings, emptySection);
}

function isKanjiLesson(): boolean {
  const mainInfo = document.getElementById("main-info");
  return mainInfo && mainInfo.className === "kanji";
}

let createdSectionForKanjiReview = false;

function checkReviewMut(
  settings: IWKOFSettings,
  mutationRecord: MutationRecord
): void {
  const isKanjiReview = $("#question-type")
    .text()
    .toLowerCase()
    .includes("kanji");

  if (
    ((mutationRecord.target as any).id as string).includes("item-info") &&
    isKanjiReview &&
    !createdSectionForKanjiReview
  ) {
    createdSectionForKanjiReview = true;
    createSectionAndRunQuery(settings);
  }
}

function maybeInsertEmptyVocabSectionOnce(settings: IWKOFSettings): JQuery {
  const pageType = determinePageType(document.URL);
  Log.debug("maybeInsertEmptyVocabSectionOnce pageType", pageType);

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
    } else {
      Log.debug(
        "maybeInsertEmptyVocabSectionOnce not inserting because page type does not match"
      );
    }
  }

  return $("#" + sectionID);
}
