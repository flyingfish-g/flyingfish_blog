import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  locales: {
    "/": {
      lang: "en-US",
      title: "FlyingFish Blog",
      description: "A blog for FlyingFish",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "FlyingFish Blog",
      description: "FlyingFish的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
