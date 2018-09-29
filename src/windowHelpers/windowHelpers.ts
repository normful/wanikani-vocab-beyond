const Window = require('window');

export function dummyFunc() {
  return 'this should work';
}

export function runningInNodeJs() {
  return typeof global !== 'undefined';
}

export function getWindow() {
  if (runningInNodeJs()) {
    return new Window();
  } else {
    return window;
  }
}

export function waitUntilWindowPropLoads(
  getWindowFunc,
  windowProp,
  pollingIntervalMs,
  maxWaitMs,
  onLoad,
  onTimeout
) {
  if (
    typeof getWindowFunc !== 'function' ||
    typeof windowProp !== 'string' ||
    typeof pollingIntervalMs !== 'number' ||
    typeof maxWaitMs !== 'number' ||
    typeof onLoad !== 'function' ||
    typeof onTimeout !== 'function'
  ) {
    throw new Error('invalid argument');
  }

  const startMs = new Date().getTime();

  const intervalID = setInterval(() => {
    if (getWindowFunc()[windowProp]) {
      clearInterval(intervalID);
      onLoad(getWindowFunc()[windowProp]);
      return;
    }

    if (new Date().getTime() - startMs > maxWaitMs) {
      clearInterval(intervalID);
      onTimeout();
    }
  }, pollingIntervalMs);
}

