// turbojs
import * as Turbo from "@hotwired/turbo";
Turbo.start()

// uikit
import UIkit from "uikit";
import UIcons from "uikit/dist/js/uikit-icons";
UIkit.use(UIcons);
import "../less/app.less";

// vuejs
import { createApp } from "vue";

const init = () => {
  const app = createApp();
  app.provide("uikit", UIkit);

  // search the component folder and register them
  const files = require.context("./", true, /\.vue$/i);
  files
    .keys()
    .map((key) =>
      app.component(key.split("/").pop().split(".")[0], files(key).default)
    );

  app.mount("#app");
  window.app = app
};

document.addEventListener("DOMContentLoaded", () => init)
document.addEventListener("turbo:load", () => init);
