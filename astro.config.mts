import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "AblityDyno",
      logo: {
        src: "./src/assets/logo.png",
      },
      favicon: "./src/assets/logo.png",
      social: {
        "twitter": "https://twitter.com/raidesuuu",
        "github": "https://github.com/raidesuuu",
        "discord": "https://discord.com/raic.tech",
        "blueSky": "https://bsky.app/raic.tech",
        "youtube": "https://youtube.com/@_rai_ch",
        "x.com": "https://x.com/raidesuuu"
      },
      sidebar: [
        {
          label: "ようこそ",
          link: "/",
        },
        {
          label: "開始する",
          items: [
            {
              label: "開始する",
              link: "/getting-started",
            },
            {
              label: "コマンドリスト",
              link: "/command-list",
            },
          ],
        },
      ],
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
    }),
  ],
});
