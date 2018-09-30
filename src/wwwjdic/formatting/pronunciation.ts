/* tslint:disable:no-console */

import { DICT_CODES } from "../dict_codes";

// 3040-309F: hiragana
// 30A0-30FF: katakana
// 4E00-9FAF: common and uncommon kanji

const kanjiAndCodeSplitter = /^(.*)\(([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\)\(([a-zA-Z0-9,]+)\)$/;

const codeSplitter = /^(.*)\(([a-zA-Z0-9,]+)\)$/;

const kanjiSplitter = /^(.*)\(([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\)$/;

const kanjiAndParenthesizedCsvSplitter = /^([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+)\(([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF,]+)\)/;

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

      const kp = part.match(kanjiAndParenthesizedCsvSplitter);
      if (kp) {
        return kp[1] + "⸨" + kp[2].replace(",", "、") + "⸩";
      }

      const cm = part.match(codeSplitter);
      if (cm) {
        const code = cm[2];
        let expandedCode = code;

        if (code === "P") {
          expandedCode = "common";
        } else if (DICT_CODES[code]) {
          expandedCode = DICT_CODES[code];
        }

        return cm[1] + "(" + expandedCode + ")";
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
