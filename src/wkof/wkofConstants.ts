export const SettingsScriptId = "wanikani_vocab_beyond_settings";
export const MenuScriptLinkId = "wanikani_vocab_beyond_settings_link";

export interface IWKOFSettings {
  forvo_api_key: string;
  forvo_min_rating: number;
  forvo_username_whitelist_csv: string;
  show_all_wwwjdic_vocab: boolean;
  max_wwwjdic_vocab_shown: number;
  show_vocab_beyond_first: boolean;
  show_forvo_usernames: boolean;
  hide_uncommon_indicator: boolean;
}

export const WkofSettingsMenuConfig = {
  script_id: SettingsScriptId,
  title: "WaniKani Vocab Beyond",
  autosave: true,
  background: false,
  content: {
    forvo_page_id: {
      type: "page",
      label: "Audio",
      hover_tip: "Settings for Forvo.com audio pronunciations",
      content: {
        forvo_instructions: {
          type: "html",
          html:
            "<p><a href='https://forvo.com' target='_blank'>Forvo.com</a> has an audio collection of words pronounced by native Japanese speakers.</p>" +
            "<p>To enable Forvo pronunciations of vocabulary words:</p>" +
            "<p>1. <a href='https://forvo.com/signup/' target='_blank'>Sign up for a Forvo.com account</a></p>" +
            "<p>2. <a href='https://api.forvo.com/plans-and-pricing' target='_blank'>Purchase an API key here</a></p>" +
            "<p>3. Enter your key below</p>"
        },

        forvo_api_key: {
          type: "text",
          label: "Forvo API key",
          full_width: true,
          hover_tip: "Your API key from https://api.forvo.com/"
        },

        forvo_caveat: {
          type: "html",
          html:
            "<p>(WaniKani Vocab Beyond will work without a Forvo API key, but audio for vocabulary won't be shown.)</p>"
        },

        forvo_divider_id: {
          type: "divider"
        },

        forvo_rating_instructions: {
          type: "html",
          html:
            "<p>Forvo pronunciations are voted on by users. Limit displayed audio to at least this overall rating. Zero is the default and recommended value.</p>"
        },

        forvo_min_rating: {
          type: "number",
          label: "Minimum Forvo rating",
          hover_tip: "Only show Forvo pronunciations with at least this rating",
          placeholder: "0",
          default: 0,
          full_width: false
        },

        forvo_divider_id_2: {
          type: "divider"
        },

        forvo_whitelist_instructions: {
          type: "html",
          html:
            "<p>Comma-separated list of Forvo users whose pronunciations should be shown. If blank, pronunciations from all users are shown.</p>"
        },

        forvo_username_whitelist_csv: {
          type: "text",
          label: "Favorite Forvo users",
          full_width: true,
          placeholder: "Example: skent, usako_usagiclub, strawberrybrown",
          default: "",
          hover_tip:
            "A comma-separated list of Forvo usernames whose pronunciations should be shown"
        }
      }
    },

    vocab_page_id: {
      type: "page",
      label: "Vocab",
      hover_tip: "Settings for WWWJDIC vocabulary words",
      content: {
        vocab_instructions_1: {
          type: "html",
          html:
            "<p>By default, only common words are retrieved and displayed from <a href='http://nihongo.monash.edu/cgi-bin/wwwjdic' target='_blank'>WWWJDIC</a>. You can also retrieve uncommon words and phrases by checking the box below.</p>"
        },

        show_all_wwwjdic_vocab: {
          type: "checkbox",
          label: "Show uncommon vocab",
          hover_tip: "Show both common and uncommon WWWJDIC vocab",
          default: false,
          full_width: false
        },

        vocab_instructions_2: {
          type: "html",
          html:
            "<p>Set the maximum number of WWWJDIC vocab to display per kanji below. 0 means unlimited. (Warning: showing WWWJDIC unlimited results may quickly exhaust your Forvo API key's daily request limits.)</p>"
        },

        max_wwwjdic_vocab_shown: {
          type: "number",
          label: "Maximum number of WWWJDIC vocab to display per kanji",
          hover_tip:
            "Maximum number of WWWJDIC vocabulary to display per kanji",
          full_width: true,
          placeholder: "15",
          default: 15,
          min: 0
        }
      }
    },

    appearance_page_id: {
      type: "page",
      label: "Appearance",
      hover_tip: "Appearance settings",
      content: {
        appearance_instructions_1: {
          type: "html",
          html:
            "<p>Check to show Vocab Beyond at top of kanji pages and in first tab of kanji reviews and lessons.</p>"
        },

        show_vocab_beyond_first: {
          type: "checkbox",
          label: "Show Vocab Beyond first",
          hover_tip:
            "Show the Vocab Beyond section at the top of kanji pages and in the first tab of kanji reviews and kanji lessons",
          default: false,
          full_width: false
        },

        appearance_instructions_2: {
          type: "html",
          html: "<p>Check to show Forvo usernames above audio clips.</p>"
        },

        show_forvo_usernames: {
          type: "checkbox",
          label: "Show Forvo usernames",
          hover_tip: "Show Forvo usernames above each audio clip",
          default: false,
          full_width: false
        },

        appearance_instructions_3: {
          type: "html",
          html: "<p>Check below to hide icon beside uncommon vocab.</p>"
        },

        hide_uncommon_indicator: {
          type: "checkbox",
          label: "Hide uncommon icon",
          hover_tip: "Hide uncommon vocabulary icon",
          default: false,
          full_width: false
        }
      }
    }
  }
};
