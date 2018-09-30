import { Logger } from "../logger/logger";
import { prettyScriptName } from "../appConstants";
import { insertInitialDOMElements } from "./../dom/insertInitialDOMElements";
import { waitForWkof } from "./waitForWkof";
import {
  IWKOFSettings,
  MenuScriptLinkId,
  SettingsScriptId,
  WkofSettingsMenuConfig
} from "./wkofConstants";

const Log = new Logger();

interface IWKOF {
  include: (modulesCsv: string) => void;
  ready: (modulesCsv: string) => Promise<void>;
  Menu: IWKOFMenuModule;

  // Using `any` here is a workaround for `Cannot use 'new' with an expression
  // whose type lacks a call or construct signature.`
  Settings: any;

  settings: IWKOFSettings;
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
        insertInitialDOMElements(settings);
      });
    });
  });
}

function onSettingsMenuLinkClick(wkof: IWKOF): void {
  const dialog = new wkof.Settings({
    ...WkofSettingsMenuConfig,
    on_save: onSettingsSave.bind(null, wkof)
  });
  dialog.open();
}

function onSettingsSave(wkof: IWKOF): void {
  window.location.reload(false);
}
