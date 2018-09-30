import { DICT_CODES } from "../dict_codes";
import { formatVocab } from "./vocab";
import { formatPronunciation } from "./pronunciation";

const pronunciationSplitter = /(.*)\[(.+)\]$/;

export function formatVocabHeader(text: string): string {
  const m = text.match(pronunciationSplitter);
  if (!m) {
    return text;
  }

  return formatVocab(m[1].trim()) + formatPronunciation(m[2]);
}
