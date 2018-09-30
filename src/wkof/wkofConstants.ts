export const SettingsScriptId = "wanikani_vocab_beyond_settings";
export const MenuScriptLinkId = "wanikani_vocab_beyond_settings_link";
export interface IWKOFSettings {
  forvo_api_key: string;
  forvo_min_rating: number;
  forvo_username_whitelist_csv: string;
  show_all_wwwjdic_vocab: boolean;
  show_vocab_beyond_at_top: boolean;
  only_show_link_in_legend: boolean;
  show_forvo_usernames: boolean;
}
