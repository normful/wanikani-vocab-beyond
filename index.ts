import http from "gm-http";
import { App } from "./src/app";

// Set `debug: true` to enable GM.xmlHttpRequest logging
http.setConfig({ debug: true });

const app = new App();
app.init();
