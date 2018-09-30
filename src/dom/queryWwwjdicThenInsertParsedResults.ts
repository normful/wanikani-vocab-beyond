import http from "gm-http";
import { IWKOFSettings } from "../wkof/wkofConstants";
import { Logger } from "../logger/logger";
import { determinePageType } from "./../urlHelpers/determinePageType";
import { getKanji } from "./getKanji";
import { makeWwwjdicUrl } from "./../wwwjdic/makeWwwjdicUrl";
import { IRenderable, extractLines, parseLines } from "./../wwwjdic/parsing";

const Log = new Logger(false);

const cachedSections = {};

// TODO: Turn to false later and/or move to IWKOFSettings
const DISABLE_FORVO = true;

let forvoUserWhitelist = [""];
const EMPTY_FORVO_USER_WHITELIST = JSON.stringify(forvoUserWhitelist);

export function queryWwwjdicThenInsertParsedResults(
  settings: IWKOFSettings,
  // TODO: Fix this `any` workaround and replace it with the proper jQuery object type
  emptySection: any
): void {
  Log.debug("queryWwwjdic");

  if (!emptySection.length) {
    Log.debug(
      "queryWwwjdic returning early because emptySection has no elements"
    );
    return;
  }

  const pageType = determinePageType(document.URL);
  const kanji = getKanji(pageType);

  if (!kanji) {
    Log.error("could not get kanji");
    return;
  }

  if (cachedSections[kanji]) {
    Log.debug("queryWwwjdic reusing cachedSection and returning early");
    emptySection.replaceWith(cachedSections[kanji]);
    return;
  }

  const showMessage = message => {
    emptySection.html(message);
  };

  showMessage("Loading...");

  Log.debug("querying WWWJDIC for ", kanji);
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

function onWwwJdicResponse(
  res: string,
  // TODO: Replace this `any`
  section: any,
  // TODO: Replace this `any`
  showMessage: any,
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

  if (typeof settings.forvo_username_whitelist_csv === "string") {
    forvoUserWhitelist = settings.forvo_username_whitelist_csv
      .trim()
      .replace(/ /g, "")
      .split(",");
  }

  const renderables = parseLines(lines);

  const maybeOnlyCommonRenderables = renderables.filter(
    (renderable: IRenderable): boolean => {
      if (settings.show_all_wwwjdic_vocab) {
        return true;
      }

      return renderable.cm;
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

  const promises = renderablesWithinLimit.map(
    (renderable: IRenderable): Promise<any> => {
      const jpText = renderable.jp;
      const enPOSText = renderable.pos;
      const isCommon = renderable.cm;
      const definitions = renderable.en;
      const vocabForQueryingForvo = renderable.q;

      const listItem = $("<div>");
      listItem.css("margin-bottom", "35px");

      const jpEl = $("<h3>");

      // for...of iterates over Unicode code points
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
      for (const codePoint of jpText) {
        const span = $("<span>");
        span.text(codePoint);

        const codePointInt = codePoint.codePointAt(0);

        if (shouldRenderBig(codePointInt)) {
          span.css("font-size", "45px");
        } else {
          span.css("font-size", "11px");
        }

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

        span.css("font-weight", "normal");
        span.css("line-height", "45px");

        jpEl.append(span);
      }

      if (!isCommon && !settings.hide_uncommon_indicator) {
        // uncommon vocab indicator
        const uc = $("<span>");

        uc.text("希");
        uc.css("position", "absolute");
        uc.css("display", "block");
        uc.css("font-size", "12px");
        uc.css("height", "22px");
        uc.css("width", "22px");
        uc.css("top", "4px");
        uc.css("left", "-30px");
        uc.css("margin", "-0.6px");
        uc.css("box-sizing", "border-box");

        uc.css("border-radius", "50%");
        uc.css("text-align", "center");
        uc.css("vertical-align", "middle");
        uc.css("text-shadow", "0.7px 0.2px 4.1px #FFF9DE");
        uc.css("background-color", "#E38B32");
        uc.css(
          "box-shadow",
          "0 -3.5px 0 rgba(0,0,0,0.2) inset, 0 0 10px rgba(255,255,255,0.5)"
        );
        uc.css("color", "#F41300");
        uc.css("z-index", "999");

        jpEl.append(uc);
      }

      jpEl.css("position", "relative");
      jpEl.css("margin-top", "20px");
      jpEl.css("margin-right", "0");
      jpEl.css("margin-bottom", "15px");
      jpEl.css("margin-left", "0");
      jpEl.css("padding", "0");
      listItem.append(jpEl);

      const enPOSEl = $("<h3>");
      enPOSEl.text(enPOSText);
      enPOSEl.css("font-size", "20px");
      enPOSEl.css("font-weight", "normal");
      enPOSEl.css("line-height", "20px");
      enPOSEl.css("padding", "0");
      listItem.append(enPOSEl);

      definitions.forEach(definition => {
        const enDefnEl = $("<p>");
        enDefnEl.text(definition);
        enDefnEl.css("margin", "0");
        enDefnEl.css("padding", "0");
        listItem.append(enDefnEl);
      });

      section.append(listItem);

      // if (!DISABLE_FORVO) {
      //   return addForvoAudioForThisWordAsync(vocabForQueryingForvo, listItem, settings);
      // }

      return Promise.resolve();
    }
  );

  Promise.all(promises).then(() => {
    if (!DISABLE_FORVO) {
      const forvoAttribution = $(
        '<p><a href="https://forvo.com/" target="_blank">Pronunciations by Forvo</a></p>'
      );
      section.append(forvoAttribution);
    }

    const sectionDeepClone = section.clone(true, true);
    cachedSections[kanji] = sectionDeepClone;
  });
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

function isKanjiCodePoint(codePointInt: number): boolean {
  return codePointInt >= 19968 && codePointInt <= 40879;
}
