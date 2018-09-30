import http from "gm-http";
import { IWKOFSettings } from "../wkof/wkofConstants";
import { Logger } from "../logger/logger";
import { determinePageType } from "./../urlHelpers/determinePageType";
import { getKanji } from "./getKanji";
import { makeWwwjdicUrl } from "./../wwwjdic/makeWwwjdicUrl";
import { IRenderable, extractLines, parseLines } from "./../wwwjdic/parsing";
import {
  populateForvoUserWhitelist,
  insertForvoAudioForWord
} from "./insertForvoAudioForWord";

const Log = new Logger();

const cachedSections = {};

const DISABLE_FORVO = false;

export function queryWwwjdicThenInsertParsedResults(
  settings: IWKOFSettings,
  emptySection: JQuery
): void {
  Log.debug("queryWwwjdic");

  if (!emptySection.length) {
    Log.debug(
      "queryWwwjdicThenInsertParsedResults returning early because emptySection has no elements"
    );
    return;
  }

  const pageType = determinePageType(document.URL);
  const kanji = getKanji(pageType);

  if (!kanji) {
    Log.error("queryWwwjdicThenInsertParsedResults could not get kanji");
    return;
  }

  if (cachedSections[kanji]) {
    Log.debug(
      "queryWwwjdicThenInsertParsedResults reusing cachedSection and returning early"
    );
    emptySection.replaceWith(cachedSections[kanji]);
    return;
  }

  const showMessage = message => {
    emptySection.html(message);
  };

  showMessage("Loading...");

  Log.debug("Querying WWWJDIC for ", kanji);
  const wwwJdicUrl = makeWwwjdicUrl(kanji, settings);

  http
    .get(wwwJdicUrl)
    .then((res: Response$) => {
      onWwwJdicResponse(
        res.responseText,
        emptySection,
        showMessage,
        settings,
        kanji
      );
    })
    .catch(err => {
      Log.error("WWWJDIC error: ", err);
      showMessage("Error contacting WWWJDIC server");
    });
}

let appendedForvoAttribution = false;

function onWwwJdicResponse(
  res: string,
  section: JQuery,
  showMessage: (message: string) => void,
  settings: IWKOFSettings,
  kanji: string
): void {
  Log.debug("raw res", res);

  const lines = extractLines(res);

  if (lines.length === 0) {
    showMessage(
      settings.show_all_wwwjdic_vocab
        ? "No vocabulary found."
        : "No common vocabulary found."
    );
    return;
  }

  // Clear loading text
  showMessage("");

  const renderables = parseLines(lines);

  const maybeOnlyCommonRenderables = renderables.filter(
    (renderable: IRenderable): boolean => {
      if (settings.show_all_wwwjdic_vocab) {
        return true;
      }

      const isCommon = renderable.cm;
      return isCommon;
    }
  );

  Log.debug(
    "WWWJDIC maybeOnlyCommonRenderables.length",
    maybeOnlyCommonRenderables.length
  );

  let sliceEnd = maybeOnlyCommonRenderables.length;
  const limit = settings.max_wwwjdic_vocab_shown;
  if (limit > 0) {
    sliceEnd = limit;
  }
  const renderablesWithinLimit = maybeOnlyCommonRenderables.slice(0, sliceEnd);

  Log.debug(
    "WWWJDIC renderablesWithinLimit.length",
    renderablesWithinLimit.length
  );

  Log.debug("WWWJDIC renderablesWithinLimit", renderablesWithinLimit);

  if (!DISABLE_FORVO) {
    populateForvoUserWhitelist(settings);
  }

  const promises = renderablesWithinLimit.map(
    (renderable: IRenderable): Promise<any> => {
      const jpText = renderable.jp;
      const enPOSText = renderable.pos;
      const isCommon = renderable.cm;
      const definitions = renderable.en;
      const vocabForQueryingForvo = renderable.q;

      const listItem = $("<div>");
      listItem.css({ marginBottom: "35px" });

      const jpEl = $("<h3>");

      // for...of iterates over Unicode code points
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
      for (const codePoint of jpText) {
        const span = $("<span>");
        span.text(codePoint);

        const codePointInt = codePoint.codePointAt(0);
        span.css("font-size", shouldRenderBig(codePointInt) ? "45px" : "11px");

        // Clicking on kanji opens page for it
        if (isKanjiCodePoint(codePointInt)) {
          span.on("click", () => {
            window.open(
              `https://www.wanikani.com/kanji/${encodeURIComponent(codePoint)}`,
              "_blank"
            );
          });

          span.hover(function() {
            $(this).css("cursor", "pointer");
          });
        }

        span.css({
          fontWeight: "normal",
          lineHeight: "45px"
        });

        jpEl.append(span);
      }

      if (!isCommon && !settings.hide_uncommon_indicator) {
        // uncommon vocab indicator
        const uc = $("<span>");

        uc.text("稀");

        uc.css({
          position: "absolute",
          display: "block",
          fontSize: "12px",
          height: "22px",
          width: "22px",
          top: "0",
          left: "-25px",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "22px",
          textShadow: "0.7px 0.2px 4.1px #FFF9DE",
          backgroundColor: "#E38B32",
          boxShadow:
            "0 -3px 0 rgba(0,0,0,0.2) inset, 0 0 10px rgba(255,255,255,0.5)",
          color: "#F41300",
          zIndex: "999"
        });

        jpEl.append(uc);
      }

      jpEl.css({
        position: "relative",
        marginTop: "20px",
        marginRight: "0",
        marginBottom: "15px",
        marginLeft: "0",
        padding: "0"
      });

      listItem.append(jpEl);

      const enPOSEl = $("<h3>");
      enPOSEl.text(enPOSText);
      enPOSEl.css({
        fontSize: "20px",
        fontWeight: "normal",
        lineHeight: "20px",
        padding: "0"
      });
      listItem.append(enPOSEl);

      definitions.forEach(definition => {
        const enDefnEl = $("<p>");
        enDefnEl.text(definition);
        enDefnEl.css({
          margin: "0",
          padding: "0"
        });
        listItem.append(enDefnEl);
      });

      section.append(listItem);

      if (!DISABLE_FORVO) {
        return insertForvoAudioForWord(
          vocabForQueryingForvo,
          settings,
          listItem
        );
      }

      return Promise.resolve();
    }
  );

  Promise.all(promises).then(() => {
    if (!DISABLE_FORVO && !appendedForvoAttribution) {
      const forvoAttribution = $(
        '<p><a href="https://forvo.com/" target="_blank">Pronunciations by Forvo</a></p>'
      );
      section.append(forvoAttribution);
      appendedForvoAttribution = true;
    }

    const sectionDeepClone = section.clone(true, true);
    cachedSections[kanji] = sectionDeepClone;
  });
}

function isKanjiCodePoint(codePointInt: number): boolean {
  return codePointInt >= 19968 && codePointInt <= 40879;
}

export function shouldRenderBig(codePointInt: number): boolean {
  // Determined from "\u3040".codePointAt(0)
  // All other hiragana, katakana, kanji have higher code points
  const firstHiraganaCodePointInt = 12352;
  if (codePointInt > firstHiraganaCodePointInt) {
    return true;
  }

  const punctuationToRenderBig = [
    11816, // left double parenthesis
    11817, // right double parenthesis
    12289, // ideographic comma
    12293 // repeater
  ];

  if (punctuationToRenderBig.includes(codePointInt)) {
    return true;
  }

  return false;
}
