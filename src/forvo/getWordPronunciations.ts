import http from "gm-http";
import { Logger } from "../logger/logger";
import { IWKOFSettings } from "../wkof/wkofConstants";

const Log = new Logger();

export function getWordPronunciations(
  jpWord: string,
  settings: IWKOFSettings
): Promise<any> {
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
    String(settings.forvo_min_rating || 0) +
    "/country/JPN" +
    "/order/rate-desc";

  return http
    .get(forvoUrl)
    .then((res: Response$) => {
      return Promise.resolve(res.responseText);
    })
    .catch(err => {
      Log.error("Forvo error: ", err);
    });
}
