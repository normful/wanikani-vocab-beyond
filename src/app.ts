import { runAllWkofDependentCode } from "./wkof/runAllWkofDependentCode";

export const prettyScriptName = "WaniKani Vocab Beyond";

export class App {
  public init() {
    addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
  }

  private onDomContentLoaded() {
    runAllWkofDependentCode();
  }
}
