import { DICT_CODES } from "../dict_codes";

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatPartOfSpeech(commaDelimitedPos: string): string {
  if (!commaDelimitedPos) {
    return "";
  }

  return (commaDelimitedPos.split(",") || [])
    .map((part: string) => {
      const expandedPos = DICT_CODES[part];
      return expandedPos ? capitalize(expandedPos) : capitalize(part);
    })
    .join(", ");
}
