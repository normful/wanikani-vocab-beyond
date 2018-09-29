import {
  getWindow,
  waitUntilWindowPropLoads,
  windowGetter,
  windowObjReceiver
} from "../windowHelpers/windowHelpers";

const WKOF_POLL_INTERVAL_MS = 10;
const WKOF_WAIT_TIMEOUT_MS = 10000;
const WKOF_INSTALL_PAGE =
  "https://community.wanikani.com/t/instructions-installing-wanikani-open-framework/28549";

let prompted = false;

function promptInstall(
  scriptName: string,
  overridingGetWindowFunc: windowGetter
): void {
  if (prompted) {
    return;
  }

  const win = (overridingGetWindowFunc || getWindow)();
  prompted = true;

  if (
    win.confirm(
      scriptName +
        " requires the Wanikani Open Framework.\nDo you want to be forwarded to the installation instructions?"
    )
  ) {
    win.location.href = WKOF_INSTALL_PAGE;
  }
}

// waitForWkof calls onLoad with the global wkof object after wkof is loaded
export function waitForWkof(
  scriptName: string,
  onLoad: windowObjReceiver
): void {
  waitUntilWindowPropLoads(
    getWindow,
    "wkof",
    WKOF_POLL_INTERVAL_MS,
    WKOF_WAIT_TIMEOUT_MS,
    onLoad,
    promptInstall.bind(null, scriptName)
  );
}
