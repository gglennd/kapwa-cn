import tailwindcss from "@tailwindcss/postcss";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "kapwa-cn",
  description:
    "Framework-agnostic HTML components for Philippine government portals",
  cleanUrls: true,
  outDir: "../dist",
  base: "/kapwa-cn/",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/kapwa-cn/favicon.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400..700&family=Geist+Mono:wght@400..600&display=swap",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/button" },
      { text: "Guides", link: "/guides/getting-started" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/gglennd/kapwa-cn" }],
    sidebar: {
      "/components/": [
        {
          text: "Components",
          items: [
            { text: "Button", link: "/components/button" },
            { text: "Card", link: "/components/card" },
            { text: "Banner", link: "/components/banner" },
            { text: "Input", link: "/components/input" },
            { text: "Label", link: "/components/label" },
            { text: "List", link: "/components/list" },
            { text: "Table", link: "/components/table" },
            { text: "ArticleCard", link: "/components/article-card" },
            { text: "ArticleContent", link: "/components/article-content" },
            { text: "OfficialBiography", link: "/components/official-biography" },
            { text: "StripBanner", link: "/components/strip-banner" },
            { text: "CivicTechBanner", link: "/components/civic-tech-banner" },
          ],
        },
      ],
      "/guides/": [
        {
          text: "Guides",
          items: [
            { text: "Getting started", link: "/guides/getting-started" },
            { text: "Usage in React", link: "/guides/react" },
            { text: "Usage in Vue", link: "/guides/vue" },
            { text: "Usage in Svelte", link: "/guides/svelte" },
          ],
        },
      ],
    },
    footer: {
      message: "kapwa-cn",
      copyright: "Ported from <a href=\"https://github.com/bettergovph/kapwa\">Kapwa</a>. CC0-1.0.",
    },
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
        ],
      },
    },
  },
});
