import { DICT_CODES } from "../dict_codes";

// 3040-309F: hiragana
// 30A0-30FF: katakana
// 4E00-9FAF: common and uncommon kanji

const kanjiAndCodeSplitter = /^(.*)\(([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\)\(([a-z,A-Z-,0-9]+)\)$/;

const codeSplitter = /^(.*)\(([a-z,A-Z-,0-9]+)\)$/;

const kanjiSplitter = /^(.*)\(([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\)$/;

export function formatPronunciation(pronunciation: string): string {
  const parts = pronunciation.split(";");

  const mapped = parts
    .map(part => {
      const kcm = part.match(kanjiAndCodeSplitter);
      if (kcm) {
        return (
          kcm[1] +
          "⸨" +
          kcm[2] +
          "⸩" +
          "(" +
          (DICT_CODES[kcm[3]] || kcm[3]) +
          ")"
        );
      }

      const cm = part.match(codeSplitter);
      if (cm) {
        return cm[1] + "(" + (DICT_CODES[cm[2]] || cm[2]) + ")";
      }

      const km = part.match(kanjiSplitter);
      if (km) {
        return km[1] + "⸨" + km[2] + "⸩";
      }

      return part;
    })
    .join("、");

  return "（" + mapped + "）";
}
