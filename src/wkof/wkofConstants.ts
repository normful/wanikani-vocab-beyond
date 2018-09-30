export const SettingsScriptId = "wanikani_vocab_beyond_settings";
export const MenuScriptLinkId = "wanikani_vocab_beyond_settings_link";
export interface IWKOFSettings {
  forvo_api_key: string;
  forvo_min_rating: number;
  forvo_username_whitelist_csv: string;
  show_all_wwwjdic_vocab: boolean;
  max_wwwjdic_vocab_shown: number;
  show_vocab_beyond_at_top: boolean;
  show_forvo_usernames: boolean;
  hide_uncommon_indicator: boolean;
}
