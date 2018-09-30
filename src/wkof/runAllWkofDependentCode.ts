import { prettyScriptName } from "../appConstants";
import { insertDOMElements } from "./../dom/insertDOMElements";
import { waitForWkof } from "./waitForWkof";
import {
  MenuScriptLinkId,
  SettingsScriptId,
  IWKOFSettings
} from "./wkofConstants";

interface IWKOF {
  include: (modulesCsv: string) => void;
  ready: (modulesCsv: string) => Promise<void>;
  Menu: IWKOFMenuModule;

  // Using `any` here is a workaround for `Cannot use 'new' with an expression
  // whose type lacks a call or construct signature.`
  Settings: any;
}

interface IWKOFMenuModule {
  insert_script_link: (opts: object) => void;
}

export function runAllWkofDependentCode(): void {
  waitForWkof(prettyScriptName, (wkof: IWKOF) => {
    wkof.include("Menu,Settings");

    wkof.ready("Menu,Settings").then(() => {
      wkof.Menu.insert_script_link({
        name: MenuScriptLinkId,
        submenu: "Vocab Beyond",
        title: "Settings",
        on_click: onSettingsMenuLinkClick.bind(null, wkof)
      });

      wkof.Settings.load(SettingsScriptId).then(settings => {
        insertDOMElements(settings);
      });
    });
  });
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
            "<p>(WaniKani Vocab Beyond will work without a Forvo API key, but you won't be able to see audio controls for vocabulary.)</p>"
        },

        forvo_divider_id: {
          type: "divider"
        },

        forvo_rating_instructions: {
          type: "html",
          html:
            "<p>Forvo pronunciations are voted on by users. Change this to limit the displayed audio to those with at least this overall number of (upvotes - downvotes). Zero is the default and recommended value.</p>"
        },

        forvo_min_rating: {
          type: "number",
          label: "Minimum Forvo rating",
          hover_tip: "Only show Forvo pronunciations with at least this rating",
          placeholder: 0,
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
          placeholder: "Example: skent,usako_usagiclub,strawberrybrown",
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
            "<p>By default, only common words are retrieved and displayed from <a href='http://nihongo.monash.edu/cgi-bin/wwwjdic' target='_blank'>WWWJDIC</a>. You can also retrieve uncommon words and phrases by checking the box below. (Warning: this may quickly exhaust your Forvo API key's daily request limits).</p>"
        },

        show_all_wwwjdic_vocab: {
          type: "checkbox",
          label: "Show uncommon vocab",
          hover_tip: "Show both common and uncommon WWWJDIC vocab",
          default: false,
          full_width: false
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
            "<p>Check the box below to display the Vocab Beyond section at the top of the page, instead of the bottom.</p>"
        },

        show_vocab_beyond_at_top: {
          type: "checkbox",
          label: "Show Vocab Beyond at top",
          hover_tip:
            "Show the Vocab Beyond section at the top of lessons, reviews, and kanji pages",
          default: false,
          full_width: false
        },

        appearance_instructions_2: {
          type: "html",
          html:
            "<p>Check the box below to reduce the legend to only a link to the full WWWJDIC abbreviations list.</p>"
        },

        only_show_link_in_legend: {
          type: "checkbox",
          label: "Only show link in legend",
          hover_tip:
            "Only show a link to the WWWJDIC abbreviations page in the legend.",
          default: false,
          full_width: false
        },

        appearance_instructions_3: {
          type: "html",
          html:
            "<p>Check the box below to show Forvo usernames above audio clips.</p>"
        },

        show_forvo_usernames: {
          type: "checkbox",
          label: "Show Forvo usernames",
          hover_tip: "Show Forvo usernames above each audio clip",
          default: false,
          full_width: false
        }
      }
    }
  }
};

function onSettingsMenuLinkClick(wkof: IWKOF): void {
  const dialog = new wkof.Settings({
    ...WkofSettingsMenuConfig,
    on_save: onSettingsSave.bind(null, wkof)
  });
  dialog.open();
}

function onSettingsSave(wkof) {
  const updatedSettings = wkof.settings[SettingsScriptId];
  loadVocab(updatedSettings);
}

const loadVocab = (wkof: IWKOFSettings) => {
  // tslint:disable-next-line:no-console
  console.log("loadVocab");
};
