import { DICT_CODES } from "../dict_codes";

export function formatDefinitionLine(line: string) {
  return replaceAbbreviations(
    replaceDictCodesAtEnd(replaceDictCodesAtStart(line))
  );
}

function replaceDictCodesAtStart(text: string) {
  // Both regexes account for an optional numbered list prefix (e.g. "1. ")
  const dictCodeInParens = /^([0-9]\.\s)?\(([a-z,A-Z,-,0-9]+)\)(.*)/;
  const dictCodeInBraces = /^([0-9]\.\s)?\{([a-z,A-Z,-,0-9]+)\}(.*)/;

  const parenMatches = text.match(dictCodeInParens);
  const braceMatches = text.match(dictCodeInBraces);

  if (parenMatches) {
    const listPrefix = parenMatches[1] ? parenMatches[1] : "";
    return listPrefix + replaceDictCode(parenMatches[2]) + parenMatches[3];
  }

  if (braceMatches) {
    const listPrefix = braceMatches[1] ? braceMatches[1] : "";
    return listPrefix + replaceDictCode(braceMatches[2]) + braceMatches[3];
  }

  return text;
}

function replaceDictCode(maybeDictCode: string): string {
  const longForm = DICT_CODES[maybeDictCode];
  if (!longForm) {
    return "(" + maybeDictCode + ")";
  }

  return "[" + longForm + "]";
}

function replaceDictCodesAtEnd(text: string): string {
  const dictCodesInParens = /(.*)\(([a-z,A-Z,0-9\,\-]+)\)$/;
  const m = text.match(dictCodesInParens);

  if (!m) {
    return text;
  }

  const longFormCodes = m[2]
    .split(",")
    .map((maybeDictCode: string) => {
      const longForm = DICT_CODES[maybeDictCode];
      return longForm ? longForm : maybeDictCode;
    })
    .join(", ");

  return m[1] + "(" + longFormCodes + ")";
}

function replaceAbbreviations(text: string): string {
  return text.replace(/usu\./g, "usually").replace(/esp\./g, "especially");
}
