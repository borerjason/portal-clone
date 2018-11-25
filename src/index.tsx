import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "App/App";
// import Root from "./Root";
// import { showToast } from "./utils/toast";

// (window as any).onunhandledrejection = (e: any) => {
//   // TODO: Hook up to sentry
//   showToast("Something went wrong. We are investigating");
// };

// (window as any).onerror = (e: any) => {
//   // TODO: Hook up to sentry
//   showToast("Something went wrong. We are investigating");
// };

ReactDOM.render(<App />, document.getElementById("root"));
