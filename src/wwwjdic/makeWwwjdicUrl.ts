import { IWKOFSettings } from "../wkof/wkofConstants";

// API Docs: http://www.edrdg.org/wwwjdic/wwwjdicinf.html#backdoor_tag
export function makeWwwjdicUrl(kanji: string, settings: IWKOFSettings): string {
  const encodedKanji = encodeURIComponent(kanji);

  const useEDICT = "1";

  const useBackdoorEntryRawOutput = "Z";

  let searchType;
  const dictionaryLookupWithUTF8LookupText = "U";
  searchType = dictionaryLookupWithUTF8LookupText;

  let keyType;
  const lookupKanjiInAnyPosition = "L";
  keyType = lookupKanjiInAnyPosition;

  const queryCode = useEDICT + useBackdoorEntryRawOutput + searchType + keyType;

  return (
    "http://nihongo.monash.edu/cgi-bin/wwwjdic?" + queryCode + encodedKanji
  );
}
