import { Logger } from "../logger/logger";
import { IWKOFSettings } from "../wkof/wkofConstants";
import { getWordPronunciations } from "../forvo/getWordPronunciations";

const Log = new Logger();

let forvoUserWhitelist = [""];
const EMPTY_FORVO_USER_WHITELIST = JSON.stringify(forvoUserWhitelist);

export function populateForvoUserWhitelist(settings: IWKOFSettings): void {
  if (typeof settings.forvo_username_whitelist_csv === "string") {
    forvoUserWhitelist = settings.forvo_username_whitelist_csv
      .trim()
      .replace(/ /g, "")
      .split(",");
  }
}

export function insertForvoAudioForWord(
  jpVocabText: string,
  settings: IWKOFSettings,
  destAppendee: JQuery
): Promise<any> {
  if (!destAppendee) {
    Log.error("destAppendee missing");
    return Promise.reject(new Error());
  }

  Log.debug("Querying Forvo for ", jpVocabText);

  return getWordPronunciations(jpVocabText, settings)
    .then((responseText: string) => {
      if (!responseText) {
        Log.warn("no Forvo responseText");
        return Promise.resolve();
      }
      return handleForvoSuccess(responseText, settings, destAppendee);
    })
    .catch(res => {
      Log.error("Forvo API error: ", res.statusText);
    });
}

function handleForvoSuccess(
  responseText: string,
  settings: IWKOFSettings,
  destAppendee: JQuery
): Promise<any> {
  let parsedForvoJson;

  try {
    parsedForvoJson = JSON.parse(responseText);
  } catch (parseErr) {
    Log.error("JSON parseErr", parseErr);
  }

  const forvoItems = parsedForvoJson.items;
  if (!forvoItems || forvoItems.length === 0) {
    Log.warn("no forvoItems");
    return Promise.resolve();
  }

  const audioSection = $("<div>");
  audioSection.css("margin-top", "10px");

  forvoItems.forEach(forvoItem => {
    if (!forvoItem.pathmp3) {
      Log.error("!forvoItem.pathmp3");
      return;
    }

    if (!forvoItem.username) {
      Log.error("!forvoItem.username");
      return;
    }

    if (
      JSON.stringify(forvoUserWhitelist) !== EMPTY_FORVO_USER_WHITELIST &&
      !forvoUserWhitelist.includes(forvoItem.username)
    ) {
      Log.debug("skipping pronunciation from " + forvoItem.username);
      return;
    }

    const audioContainer = $("<div>");
    audioContainer.css({
      fontSize: "12px",
      display: "inline-block",
      boxSizing: "border-box",
      width: "250px",
      marginTop: "0",
      marginRight: "5px",
      marginBottom: "5px",
      marginLeft: "0",
      padding: "0"
    });

    const audioEl = document.createElement("audio");
    audioEl.src = forvoItem.pathmp3;
    audioEl.controls = true;
    audioEl.preload = "none";
    audioEl.style.width = "250px";

    if (settings.show_forvo_usernames) {
      const usernameEl = $("<span>");
      usernameEl.text(forvoItem.username);
      usernameEl.css({
        fontSize: "12px",
        color: "#888888",
        margin: "0",
        padding: "0"
      });

      audioContainer.prepend(usernameEl);
    }

    audioContainer.append(audioEl);
    audioSection.append(audioContainer);
  });

  destAppendee.append(audioSection);

  return Promise.resolve();
}
