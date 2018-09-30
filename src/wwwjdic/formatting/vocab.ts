import { DICT_CODES } from "../dict_codes";

const dictCodeSplitter = /(.*)\(([a-z,A-Z-,0-9]+)\)$/;

export function formatVocab(words: string): string {
  return words
    .replace(/\(P\)/g, "(common)")
    .split(";")
    .map(word => {
      const trimmed = word.trim();
      const m = trimmed.trim().match(dictCodeSplitter);
      if (!m) {
        return trimmed;
      }
      return m[1] + "(" + (DICT_CODES[m[2]] || m[2]) + ")";
    })
    .join("、");
}
