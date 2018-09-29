import { runAllWkofDependentCode } from "./wkof/runAllWkofDependentCode";

export class App {
  private prettyScriptName: string;

  constructor() {
    this.prettyScriptName = "WaniKani Vocab Beyond";
  }

  public init() {
    addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
  }

  private onDomContentLoaded() {
    runAllWkofDependentCode(this.prettyScriptName);
  }
}
