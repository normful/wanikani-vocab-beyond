import { getWindow, waitUntilWindowPropLoads } from './../getWindow/window.js';

export const WKOF_POLL_INTERVAL_MS = 10;
export const WKOF_WAIT_TIMEOUT_MS = 20000;
export const WKOF_INSTALL_PAGE =
  'https://community.wanikani.com/t/instructions-installing-wanikani-open-framework/28549';

var prompted = false;

export function promptInstall(scriptName, overridingGetWindowFunc) {
  if (prompted) {
    return;
  }

  const win = (overridingGetWindowFunc || getWindow)();
  prompted = true;

  if (
    win.confirm(
      scriptName +
        'requires Wanikani Open Framework.\nDo you want to be forwarded to the installation instructions?'
    )
  ) {
    win.location.href = WKOF_INSTALL_PAGE;
  }
}

// Calls onLoad with wkof after wkof is loaded
export function waitForWkof(scriptName, onLoad) {
  waitUntilWindowPropLoads(
    getWindow,
    'wkof',
    WKOF_POLL_INTERVAL_MS,
    WKOF_WAIT_TIMEOUT_MS,
    onLoad,
    promptInstall.bind(null, scriptName)
  );
}
