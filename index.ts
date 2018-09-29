import http from "gm-http";
import { App } from "./src/app";

const isDebug: boolean = process.env.NODE_ENV !== "production";
http.setConfig({ debug: isDebug });

const app = new App();
app.init();
