import { waitForWkof } from "./waitForWkof";

interface IWaniKaniOpenFramework {
  include: (modulesCsv: string) => void;
}

export function runAllWkofDependentCode(prettyScriptName): void {
  waitForWkof(prettyScriptName, (wkof: IWaniKaniOpenFramework) => {
    wkof.include("Menu,Settings");

    // tslint:disable-next-line:no-console
    console.log("included");

    // wkof.ready('Menu,Settings').then(() => {
    //   wkof.Menu.insert_script_link({
    //     name: 'wanikani_vocab_beyond_settings_link',
    //     submenu: 'Vocab Beyond',
    //     title: 'Settings',
    //     on_click: onSettingsMenuLinkClick.bind(null, wkof),
    //   });
    //
    //   wkof.Settings.load(settings_script_id).then(settings => {
    //     doInsertIntoPage(settings);
    // });
  });
}
