export class App {
  constructor() {
    console.log("constructor running");
  }
  private async onDomContentLoaded() {
      console.log('great for you');
      console.log('stuff works');
  }
  public addEventListeners() {
    addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));
  }
}

