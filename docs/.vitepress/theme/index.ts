import type { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";

import "../../../src/styles/index.css";
import "./custom.css";
import CopyCode from "./CopyCode.vue";
import DemoBlock from "./DemoBlock.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("CopyCode", CopyCode);
    app.component("DemoBlock", DemoBlock);
  },
} satisfies Theme;
