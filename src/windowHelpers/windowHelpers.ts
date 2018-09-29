export type windowGetter = () => any;

export function getWindow(): any {
  return global;
}

export type windowObjReceiver = (windowPropVal: object) => void;
type timeoutCallback = () => void;

export function waitUntilWindowPropLoads(
  getWindowFunc: windowGetter,
  windowProp: string,
  pollingIntervalMs: number,
  maxWaitMs: number,
  onLoad: windowObjReceiver,
  onTimeout: timeoutCallback
): void {
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
