import { prettyScriptName } from "./appConstants";
import { runAllWkofDependentCode } from "./wkof/runAllWkofDependentCode";

export class App {
  public init() {
    addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
  }

  private onDomContentLoaded() {
    runAllWkofDependentCode();
  }
}
