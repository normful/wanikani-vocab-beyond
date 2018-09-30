import { formatVocabHeader } from "./formatting/vocab_header";
import { formatPartOfSpeech } from "./formatting/part_of_speech";
import { formatDefinitionLine } from "./formatting/definition_line";
import { DICT_CODES } from "./dict_codes";

export function extractLines(rawResponseText: string): string[] {
  if (rawResponseText.indexOf("No matches were found for this key") > -1) {
    return [];
  }

  const noHeader = rawResponseText.slice(rawResponseText.indexOf("<pre>") + 6);
  const preBody = noHeader.slice(0, noHeader.indexOf("</pre>") - 1);
  return preBody.split(/\r?\n/);
}

const commonP = /(.*)\/\(P\)$/;

interface IRenderable {
  // Japanese text header, formatted, with WWWJDIC dictionary codes expanded
  jp: string;

  // Part of speech, fully expanded
  pos: string;

  // Boolean indicating whether it is a common entry or not
  cm: string;

  // Array of English definition lines, with WWWJDIC dictionary codes expanded
  en: string[];

  // The first-listed vocabulary to query Forvo with
  q: string;
}

export function parseLines(lines: string[]): IRenderable[] {
  return lines.map(untrimmed => {
    const line = untrimmed.trim();

    // Extract vocab header
    const sepIdx = line.indexOf(" /");
    const vocabHeader = line.substring(0, sepIdx);
    const rest = line.substring(sepIdx + 2);

    // Extract part of speech
    const firstRightParen = rest.indexOf(")");
    const partOfSpeech = rest.substring(1, firstRightParen);
    const englishAndMaybeCommonP = rest.substring(
      firstRightParen + 2,
      rest.length - 1
    );

    // Extract common indicator from end of line
    const commonMatches = englishAndMaybeCommonP.match(commonP);

    let isCommon;
    let english;

    if (commonMatches) {
      isCommon = true;
      english = commonMatches[1].replace(/\//g, "; ");
    } else {
      isCommon = false;
      english = englishAndMaybeCommonP.replace(/\//g, "; ");
    }

    const definitions = [];

    let thisDefn;
    if (english.indexOf("(1) ") === 0) {
      let nextDefNum = 2;
      let cur = 0; // index of start of current definition text
      let next = 0; // index of start of next definition text

      while (true) {
        next = english.indexOf("(" + nextDefNum + ")", cur);
        if (next > -1) {
          thisDefn = english.substring(cur, next - 1);
          definitions.push(formatDefinitionLine(dottedListItem(thisDefn)));
          nextDefNum++;
          cur = next;
        } else {
          thisDefn = english.substring(cur);
          definitions.push(formatDefinitionLine(dottedListItem(thisDefn)));
          break;
        }
      }
    } else {
      definitions.push(formatDefinitionLine(english));
    }

    return {
      // Japanese text header, formatted, with WWWJDIC dictionary codes expanded
      jp: formatVocabHeader(vocabHeader),

      // Part of speech, fully expanded
      pos: formatPartOfSpeech(partOfSpeech),

      // Boolean indicating whether it is a common entry or not
      cm: isCommon,

      // Array of English definition lines, with WWWJDIC dictionary codes expanded
      en: definitions,

      // The first-listed vocabulary to query Forvo with
      q: extractVocab(vocabHeader)
    };
  });
}

const parenListItemRegExp = /\((\d+)\)(.*)/;

function dottedListItem(text: string): string {
  const matches = text.match(parenListItemRegExp);
  if (!matches) {
    return text;
  }
  return matches[1] + "." + matches[2].replace(/;$/, "");
}

// 3040-309F: hiragana
// 30A0-30FF: katakana
// 4E00-9FAF: common and uncommon kanji
const jpRegex = /([\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF])+/;

function extractVocab(jpText: string): string {
  const matches = jpText.match(jpRegex);
  return matches ? matches[0] : jpText;
}
