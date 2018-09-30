import { IWKOFSettings } from "../wkof/wkofConstants";

// When used in a userscript, xhrFunc should be GM_xmlhttpRequest
// https://tampermonkey.net/documentation.php#GM_xmlhttpRequest
// TODO: Integrate with gm-http, if necessary
export function wordPronunciations(
  xhrFunc: any,
  jpWord: string,
  settings: IWKOFSettings
) {
  if (typeof xhrFunc !== "function") {
    return Promise.reject(new Error("xhrFunc must be a function"));
  }

  if (!jpWord) {
    return Promise.reject(new Error("jpWord missing"));
  }

  const forvoApiKey = settings ? settings.forvo_api_key : null;

  if (!forvoApiKey) {
    return Promise.reject(new Error("Forvo api key missing"));
  }

  const forvoUrl =
    "https://apifree.forvo.com/key/" +
    forvoApiKey +
    "/format/json" +
    "/action/word-pronunciations" +
    "/word/" +
    encodeURIComponent(jpWord) +
    "/language/ja" +
    "/rate/" +
    String(settings.forvo_min_rating) +
    "/country/JPN" +
    "/order/rate-desc";

  return new Promise((resolve, reject) => {
    xhrFunc({
      method: "GET",
      url: forvoUrl,
      onload: xhr => {
        if (xhr.status !== 200) {
          return reject(xhr);
        }
        return resolve(xhr);
      },
      onerror: e => {
        return reject(e);
      }
    });
  });
}
